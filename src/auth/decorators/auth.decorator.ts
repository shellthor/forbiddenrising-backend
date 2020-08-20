import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { PERMISSION_METADATA } from '../../app.constants'
import { AccessControlGuard } from '../guards/access-control.guard'
import { Permission } from '../interfaces/grant.interface'

/**
 * Controller method decorator requiring user authentication.
 * No permissions are checked with this decorator.
 */
export function Auth(): MethodDecorator

/**
 * Controller method decorator requiring user authorization
 * to the requested resource with specific permissions.
 */
export function Auth(resource: string, permission: Permission | Permission[]): MethodDecorator

export function Auth(resource?: string, permissions?: Permission | Permission[]): MethodDecorator {
  if (!resource) return applyDecorators(UseGuards(AuthGuard('JWT')))

  return applyDecorators(
    SetMetadata(PERMISSION_METADATA, {
      resource,
      permissions: Array.isArray(permissions) ? permissions : [permissions],
    }),
    UseGuards(AuthGuard('JWT'), AccessControlGuard),
  )
}
