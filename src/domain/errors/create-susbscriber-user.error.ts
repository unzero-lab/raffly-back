export class CreateSubscriberUserError extends Error {
  constructor() {
    super('Error creating a subscriber user')
    this.name = 'CreateSubscriberUserError'
  }
}
