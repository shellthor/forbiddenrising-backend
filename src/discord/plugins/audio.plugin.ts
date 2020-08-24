import { Injectable, Logger } from '@nestjs/common'
import {
  MessageEmbed,
  StreamDispatcher,
  TextChannel,
  VoiceChannel,
  VoiceConnection,
} from 'discord.js'
import YouTube from 'ytdl-core'
import { Context } from '../discord.context'
import { Command, Plugin } from '../discord.decorators'
import { DiscordPlugin } from './plugin.class'

export interface AudioQueue {
  voiceChannel: VoiceChannel
  textChannel: TextChannel
  connection: VoiceConnection
  dispatcher?: StreamDispatcher
  songs: Song[]
  loop: boolean
  volume: number
  playing: boolean
}

export interface Song {
  id: string
  title: string
  author: string
  url: string
  thumbnail: string
  duration: number
}

@Injectable()
@Plugin('Audio')
export class AudioPlugin extends DiscordPlugin {
  private readonly logger = new Logger(AudioPlugin.name)
  private queue: AudioQueue

  @Command({ name: 'play', description: 'Plays a song from a YouTube url' })
  async playCommand(ctx: Context, url: string) {
    if (!ctx.guild) {
      return ctx.message.reply('I cannot play music in DMs.')
    }

    if (!ctx.message.member.voice.channel) {
      return ctx.message.reply('You must be in a voice channel first.')
    }

    const permissions = ctx.message.member.voice.channel.permissionsFor(ctx.message.guild.me)

    if (!permissions.has('CONNECT')) {
      return ctx.message.reply('I am not allowed to join that channel.')
    }

    if (!permissions.has('SPEAK')) {
      return ctx.message.reply('I cannot speak in that voice channel.')
    }

    if (!this.queue) {
      this.queue = {
        voiceChannel: ctx.message.member.voice.channel,
        textChannel: ctx.message.channel as TextChannel,
        connection: await ctx.message.member.voice.channel.join(),
        songs: [],
        loop: false,
        volume: 100,
        playing: false,
      }
    } else {
      if (!this.queue.voiceChannel) {
        this.queue.voiceChannel = ctx.message.member.voice.channel
      }

      if (!this.queue.connection) {
        this.queue.connection = await ctx.message.member.voice.channel.join()
      }
    }

    const info = await YouTube.getInfo(url)

    const song = {
      id: info.videoDetails.videoId,
      title: info.videoDetails.title,
      url: info.videoDetails.video_url,
      duration: +info.videoDetails.lengthSeconds,
      author: info.videoDetails.author.name,
      thumbnail: info.player_response.videoDetails.thumbnail.thumbnails[0].url,
    }

    const queueSize = this.queue.songs.length

    const embed = new MessageEmbed()
    embed.setTitle('Video Enqueued')
    embed.setColor(0xc328ff)
    embed.setDescription(`[${song.title}](${song.url})`)
    embed.setThumbnail(song.thumbnail)

    if (queueSize >= 1) {
      embed.setFooter(`${this.timeRemaining()} until track playback: #${queueSize} in queue.`)
    }

    await this.queue.textChannel.send(embed)

    this.queue.songs.push(song)

    if (this.queue && !this.queue.playing) {
      await this.play()
    }
  }

  @Command({ name: 'stop', description: 'Stops the bot and erases the queue' })
  async stopCommand(ctx: Context) {
    if (!ctx.message.guild) {
      return ctx.message.reply('This command is only available in servers.')
    }

    if (!this.queue || !this.queue.playing) {
      return ctx.message.channel.send('Nothing is playing, weirdo.')
    }

    this.queue.songs = []
    this.queue.connection.disconnect()
    this.queue.connection = undefined
    this.queue.playing = false

    await ctx.tick()
  }

  @Command({
    name: 'volume',
    description: 'Sets the volume of the bot from 0 to 200',
  })
  async setVolume(ctx: Context, volume: string) {
    const volumeNum = +volume

    if (isNaN(volumeNum) || volumeNum < 0 || volumeNum > 200) {
      return ctx.message.reply('Please enter a number from 0 to 200.')
    }

    if (!this.queue.dispatcher) {
      return ctx.message.reply('Play a song before trying to set the volume.')
    }

    return this.queue.dispatcher.setVolumeLogarithmic(volumeNum / 100)
  }

  private async play() {
    if (!this.queue.songs.length) return

    try {
      this.queue.playing = true

      const stream = YouTube(this.queue.songs[0].url, {
        quality: 'highestaudio',
        filter: 'audioonly',
        highWaterMark: 1024 * 1024 * 10,
      })

      this.queue.dispatcher = this.queue.connection
        .play(stream)
        .on('finish', () => {
          if (this.queue.loop) {
            const lastSong = this.queue.songs.shift()
            this.queue.songs.push(lastSong)
          } else {
            this.queue.songs.shift()
          }
          this.play()
        })
        .on('error', error => {
          this.logger.error(error.message, error.stack)
          this.queue.songs.shift()
          this.play()
        })
    } catch (error) {
      this.logger.error(error.message, error.stack)
      if (error.message.includes('copyright')) {
        await this.queue.textChannel.send('Video could not be played due to some copyright error.')
      }
    }
  }

  private timeRemaining() {
    if (!this.queue.dispatcher || !this.queue.songs[0]) return

    return this.formatTimeRemaining(
      this.queue.songs
        .map((song, i) =>
          i === 0 ? song.duration * 1000 - this.queue.dispatcher.streamTime : song.duration * 1000,
        )
        .reduce((p, c) => p + c, 0),
    )
  }

  private formatTimeRemaining(ms: number) {
    const seconds = Math.floor((ms / 1000) % 60)
    const minutes = Math.floor((ms / 1000 / 60) % 60)
    const hours = Math.floor(ms / 1000 / 60 / 60)

    return [hours, this.padTime(minutes), this.padTime(seconds)].join(':')
  }

  private padTime(n: number) {
    return `${n.toString().length === 1 ? '0' + n : n}`
  }
}
