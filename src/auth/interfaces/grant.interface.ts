export type Permission =
  | 'create:own'
  | 'create:any'
  | 'read:own'
  | 'read:any'
  | 'update:own'
  | 'update:any'
  | 'delete:own'
  | 'delete:any';

export interface Grant {
  resourse: string;
  permissions: Permission | Permission[];
}

export interface GrantMetadata {
  resource: string;
  permissions: Permission[];
}
