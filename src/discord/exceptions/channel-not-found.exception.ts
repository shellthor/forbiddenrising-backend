import { NotFoundException } from '@nestjs/common'

/**
 * Exception thrown when a Discord channel was not found or was unavailable.
 */
export class ChannelNotFoundException extends NotFoundException {}
