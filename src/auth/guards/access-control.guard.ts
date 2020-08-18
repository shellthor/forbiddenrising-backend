import { ExecutionContext, InternalServerErrorException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AccessControl, IQueryInfo } from 'accesscontrol';
import { PERMISSION_METADATA } from '../../app.constants';
import { Roles } from '../../app.roles';
import { InjectAccessControl } from '../decorators/inject-access-control.decorator';
import { GrantMetadata } from '../interfaces/grant.interface';

export class AccessControlGuard {
  constructor(
    private readonly reflector: Reflector,
    @InjectAccessControl() private readonly ac: AccessControl,
  ) {}

  private getUserRoles(ctx: ExecutionContext) {
    const req = ctx.switchToHttp().getRequest();

    if (!req.user) throw new InternalServerErrorException('User missing in access control guard');

    return req.user.roles;
  }

  private canActivate(ctx: ExecutionContext) {
    const grant = this.reflector.get<GrantMetadata>(PERMISSION_METADATA, ctx.getHandler());

    if (!grant) return true;

    const roles: Roles[] = this.getUserRoles(ctx);

    const grants: IQueryInfo[] = grant.permissions.map(permission => ({
      role: roles,
      resource: grant.resource,
      action: permission,
    }));

    return grants.every(grant => this.ac.permission(grant).granted);
  }
}
