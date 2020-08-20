import { BadRequestException } from '@nestjs/common'

/**
 * Exception that the commands arguments are malformed and the
 * user should be shown a help message.
 */
export class BadCommandArgsException extends BadRequestException {}
