import { Inject } from '@nestjs/common';
import { ACCESS_CONTROL } from '../../app.constants';

/**
 * Injects the `AccessControl` module instance into the provider.
 */
export const InjectAccessControl = (): ((
  target: Record<string, unknown>,
  key: string | symbol,
  index?: number,
) => void) => Inject(ACCESS_CONTROL);
