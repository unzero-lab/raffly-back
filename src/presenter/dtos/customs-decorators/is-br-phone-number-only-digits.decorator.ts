import { registerDecorator, ValidationOptions } from 'class-validator'

export function IsBrPhoneNumberOnlyDigits(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isBrPhoneNumberOnlyDigits',
      target: object.constructor,
      propertyName: propertyName,
      options: {
        ...validationOptions,
        message: 'Invalid phone number format. Please use only digits with 13 characters.'
      },
      constraints: [],
      validator: {
        validate(value: any) {
          const regex = /^([0-9]){13}$/g
          return regex.test(value)
        }
      }
    })
  }
}
