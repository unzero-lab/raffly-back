export class CreateRaffleError extends Error {
  constructor() {
    super('Error creating Raffle')
    this.name = 'CreateRaffleError'
  }
}
