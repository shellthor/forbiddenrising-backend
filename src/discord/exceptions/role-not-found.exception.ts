import { NotFoundException } from '@nestjs/common';

/**
 * Exception thrown when a Discord role was not found or is unavailable.
 */
export class RoleNotFoundException extends NotFoundException {}
