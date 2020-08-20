import { DISCORD_COMMAND_ARGS } from '../../app.constants'

export interface MentionMeta {
  mentions: MentionData[]
}

export interface MentionData {
  paramtype: CommandParamtypes
  index: number
  property?: string
}

export enum CommandParamtypes {
  ROLE = 'role',
  MEMBER = 'member',
  CHANNEL = 'channel',
}

/**
 * Fetches and validates a role for the parameter.
 *
 * @param property optional property to select within the role
 */
export const RoleMention: (property?: string) => ParameterDecorator = createCommandParamDecorator(
  CommandParamtypes.ROLE,
)

export const UserMention: (property?: string) => ParameterDecorator = createCommandParamDecorator(
  CommandParamtypes.MEMBER,
)

export const ChannelMention: (
  property?: string,
) => ParameterDecorator = createCommandParamDecorator(CommandParamtypes.CHANNEL)

function createCommandParamDecorator(paramtype: CommandParamtypes) {
  return (property?: string): ParameterDecorator => (target, key, index) => {
    const metadata = Reflect.getOwnMetadata(DISCORD_COMMAND_ARGS, target, key) || []

    metadata.push({ paramtype, index, property })

    Reflect.defineMetadata(DISCORD_COMMAND_ARGS, metadata, target, key)
  }
}
