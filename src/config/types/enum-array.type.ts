import { Type, ValidationError } from '@mikro-orm/core'

export class EnumArray extends Type {
  convertToDatabaseValue(value: any): string {
    if (value === null) return value

    if (value.length) {
      return `{${value.join(',')}}`
    }

    throw ValidationError.invalidType(EnumArray, value, 'JS')
  }

  toJSON(value: any) {
    return value
  }

  getColumnType() {
    return 'text[]'
  }
}
