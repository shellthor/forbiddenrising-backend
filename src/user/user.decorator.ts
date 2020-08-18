import { createParamDecorator } from '@nestjs/common';

export const Usr = createParamDecorator((data: string, ctx) => {
  const request = ctx.switchToHttp().getRequest();
  const user = request.user;

  return data ? user && user[data] : user;
});
