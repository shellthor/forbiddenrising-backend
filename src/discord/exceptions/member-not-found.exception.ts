import { NotFoundException } from '@nestjs/common'
/**
 * Exception thrown when a Discord process could not find the requested guild member.
 */
export class MemberNotFoundException extends NotFoundException {}
