import { RegisterProviderUserUseCaseParams } from '@/domain/usecases'
import { Test, TestingModule } from '@nestjs/testing'
import { RegisterProviderUserService } from './register-provider-user.service'

describe('services/RegisterProviderUserService', () => {
  let service: RegisterProviderUserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: 'RegisterProviderUserUseCase',
          useClass: RegisterProviderUserService
        },
        {
          provide: 'CreateProviderUserRepository',
          useClass: class {
            async create(params: RegisterProviderUserUseCaseParams) {
              return {
                id: 'any_id',
                ...params
              }
            }
          }
        }
      ]
    }).compile()

    service = module.get<RegisterProviderUserService>('RegisterProviderUserUseCase')
  })

  it('should return success', async () => {
    expect(service).toBeDefined()

    const result = await service.execute({
      name: 'John Doe',
      email: 'john.doe@email.com',
      password: '123456'
    })

    expect(result).toHaveProperty('id')
    expect(result).toHaveProperty('name')
    expect(result).toHaveProperty('email')
    expect(result).toHaveProperty('password')
  })
})
