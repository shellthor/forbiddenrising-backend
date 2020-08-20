import { BadRequestException } from '@nestjs/common'

/**
 * Exception thrown when a bot message is parsed and deemed not
 * worthy to be considered a command or command group candidate.
 */
export class NotBotCommandException extends BadRequestException {}
