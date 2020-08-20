import { CommandMeta } from '../discord.decorators'
import { GroupMapMeta, PluginMap } from '../discord.service'
import { PluginCommandMethod, PluginGroupMethod } from './plugin-command.type'

export interface Match {
  name: string
  plugin: PluginMap
  depth: number
}

export interface CommandMatch extends Match {
  method: PluginCommandMethod
  command: CommandMeta
}

export interface GroupMatch extends Match {
  method: PluginGroupMethod
  group: GroupMapMeta
}
