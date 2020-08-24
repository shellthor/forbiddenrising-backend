import { Inject, SetMetadata } from '@nestjs/common'
import {
  DISCORD_CLIENT,
  DISCORD_PLUGIN,
  DISCORD_PLUGIN_COMMAND,
  DISCORD_PLUGIN_EVENT,
  DISCORD_PLUGIN_GROUP,
  DISCORD_PLUGIN_LOOP,
} from '../app.constants'
import { isString } from '../app.utils'
import { MentionMeta } from './decorators/mention.decorator'
import { DiscordEvent } from './interfaces/events.enum'

export interface PluginOptions {
  /**
   * Name of the plugin used for the help command.
   */
  name: string
}

export interface CommandOptions {
  /**
   * Specifies the command name that is typed into Discord to invoke it.
   * The prefix is prepended to this name.
   */
  name: string

  /**
   * Specifies if the command is part of a group.
   */
  group?: string

  /**
   * Specifies the description of the command. This should be a short one-liner.
   */
  description?: string

  /**
   * Specifies optional names to invoke the commmand with for convenience.
   */
  alias?: string[]

  /**
   * Specifies the help text shown when the command help menu is shown or
   * the user incorrectly utilizes the help menu.
   *
   * The command and prefix are added automatically.
   */
  syntax?: string
}

export interface GroupOptions {
  /**
   * Specifies the name of the command group.
   *
   * This shows in the help command.
   */
  name: string

  /**
   * Specifies the description of the command group.
   *
   * This shows in the help command.
   */
  description?: string

  /**
   * Specifies any alternative invoking aliases for the command group.
   */
  alias?: string[]
}

export interface EventOptions {
  /**
   * Enum of the event that should call this method when emitted.
   */
  name: DiscordEvent
}

export interface LoopOptions {
  /**
   * Name which describes the loop's functionality.
   */
  name: string
}

export interface PluginMethodOptions {
  /**
   * The name of the method being decorated.
   */
  method: string
}

export type CommandMeta = CommandOptions & PluginMethodOptions & MentionMeta
export type GroupMeta = GroupOptions & PluginMethodOptions
export type EventMeta = EventOptions & PluginMethodOptions
export type LoopMeta = LoopOptions & PluginMethodOptions

/**
 * Decorator that marks a class as a Discord plugin.
 *
 * @param {string} name string of the name of the plugin housing commands.
 */
export function Plugin(name: string): ClassDecorator

/**
 * Decorator that marks a class as a Discord plugin.
 *
 * @param {object} options configuration object specifying:
 *
 * - `name` - string that defines the name of the plugin housing commands.
 */
export function Plugin(options: PluginOptions): ClassDecorator

export function Plugin(nameOrOptions: string | PluginOptions): ClassDecorator {
  return SetMetadata(
    DISCORD_PLUGIN,
    isString(nameOrOptions) ? { name: nameOrOptions } : nameOrOptions,
  )
}

/**
 * Decorator that marks a method within a Discord plugin as a group.
 *
 * TODO: Clarify execution of group methods, their purpose is suspect.
 *
 * @param {string} name name of the command group
 */
export function CommandGroup(name: string): MethodDecorator

/**
 * Decorator that marks a method within a Discord plugin as a group.
 *
 * TODO: Clarify execution of group methods, their purpose is suspect.
 *
 * @param {GroupOptions} options options for the command group:
 *
 * - `name` - name of the command group
 * - `description` - short description of the command group, shown in the help command
 */
export function CommandGroup(options: GroupOptions): MethodDecorator

export function CommandGroup(nameOrOptions: string | GroupOptions): MethodDecorator {
  return createPluginMethodDecorator<string | GroupOptions>(DISCORD_PLUGIN_GROUP, nameOrOptions)
}

/**
 * Decorator that marks a method within a Discord plugin as a command.
 *
 * @param {string} name name of the command users type out to execute
 */
export function Command(name: string): MethodDecorator

/**
 *
 * @param {CommandOptions} options options for the command:
 *
 * - `name` - name of the command users type out to execute
 * - `description` - short description of the command displayed in the help command
 * - `alias` - alias or aliases of the command as alternate names for execution
 * - `group` - optional parameter denoting the command is part of a group
 */
export function Command(options: CommandOptions): MethodDecorator

export function Command(nameOrOptions: string | CommandOptions): MethodDecorator {
  return createPluginMethodDecorator<string | CommandOptions>(DISCORD_PLUGIN_COMMAND, nameOrOptions)
}

/**
 * Decorator that marks a method within a Discord plugin as
 * an event listener. The method will be called when the event is fired.
 *
 * @param {DiscordEvent} event `DicordEvent` to listen to when emitted.
 */
export function Event(event: DiscordEvent): MethodDecorator

/**
 * Decorator that marks a method within a Discord plugin as
 * an event listener. The method will be called when the event is fired.
 *
 * @param {EventOptions} options options for the event listener:
 *
 * - `event` - `DicordEvent` to listen to when emitted.
 */
export function Event(options: EventOptions): MethodDecorator

export function Event(eventOrOptions: DiscordEvent | EventOptions): MethodDecorator {
  return createPluginMethodDecorator<DiscordEvent | EventOptions>(
    DISCORD_PLUGIN_EVENT,
    eventOrOptions,
  )
}

/**
 * Decorator that marks a method within a Discord plugin as
 * a loop. The function will be called once and should consist of
 * an asynchronous infinite loop to run timed commands.
 *
 * @param name name describing the loop
 */
export function Loop(name: string): MethodDecorator

/**
 * Decorator that marks a method within a Discord plugin as
 * a loop. The function will be called once and should consist of
 * an asynchronous infinite loop to run timed commands.
 *
 * @param options options for the loop specifying:
 *
 * - `name` - name describing the loop
 */
export function Loop(options: LoopOptions): MethodDecorator

export function Loop(nameOrOptions: string | LoopOptions): MethodDecorator {
  return createPluginMethodDecorator<string | LoopOptions>(DISCORD_PLUGIN_LOOP, nameOrOptions)
}

/**
 * Appends the data for a Discord plugin method to any existing
 * metadata of the given key. This is used to define different
 * decorators within the `@Plugin` decorator retrieved during
 * instantiation.
 *
 * @param key constant value to retrieve the metadata with later
 * @param data data to be stored within the method
 */
function createPluginMethodDecorator<T>(key: any, data: T) {
  return (target: Record<string, unknown>, propertyKey: string | symbol) => {
    const metadata = Reflect.getOwnMetadata(key, target) || []
    const options = isString(data) ? { name: data } : data

    metadata.push({ ...options, method: propertyKey })

    Reflect.defineMetadata(key, metadata, target)
  }
}

/**
 * Decorator that injects the Discord client into the provider.
 * When possible, using a context object or service is preferred.
 */
export const InjectClient = () => Inject(DISCORD_CLIENT)
