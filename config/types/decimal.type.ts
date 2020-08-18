import { Type } from '@mikro-orm/core';

/**
 * Decimal type for PostgreSQL in MikroORM.
 * The decimal value is considered a number and requires no further conversion.
 * However, the migration feature tries to convert it to json.
 */

export class DecimalType extends Type {
  convertToDatabaseValue(value: any) {
    return value;
  }

  toJSON(value: any) {
    return value;
  }

  getColumnType() {
    return 'decimal';
  }
}
