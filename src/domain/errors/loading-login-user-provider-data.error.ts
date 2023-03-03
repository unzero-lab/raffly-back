export class LoadingDataUserError extends Error {
  constructor() {
    super('Error loading logged user data')
    this.name = 'LoadingDataUserError'
  }
}
