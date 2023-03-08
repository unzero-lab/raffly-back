export class CreateProviderUserError extends Error {
  constructor() {
    super('Error creating provider user')
    this.name = 'CreateProviderUserError'
  }
}
