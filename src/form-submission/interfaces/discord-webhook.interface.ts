export interface DiscordWebhook {
  content?: string
  username?: string
  avatar_url?: string
  embeds?: DiscordEmbed[]
}

export interface DiscordEmbed {
  title: string
  color?: number | string
  url?: string
  description?: string
  thumbnail?: { url: string }
  fields?: { name: string; value: string; inline?: boolean }[]
  timestamp?: Date
  author?: { name: string; url?: string; icon_url?: string }
  footer?: { text: string; icon_url?: string }
}
