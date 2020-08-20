import { Client } from 'discord.js'
import { Context } from '../discord.context'

export type PluginCommandMethod = (ctx: Context, ...args: any) => void

export type PluginGroupMethod = (client: Client, ...args: any) => void
