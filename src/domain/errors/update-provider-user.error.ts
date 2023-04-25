export class UpdateProviderUserError extends Error {
  constructor() {
    super('Error  when updating provider user')
    this.name = 'UpdateProviderUserError'
  }
}
