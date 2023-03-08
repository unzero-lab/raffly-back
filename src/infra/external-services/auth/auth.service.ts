import {
  ComparePasswordsTask,
  ComparePasswordsTaskParams,
  ComparePasswordsTaskResult,
  GenerateTokenTask,
  GenerateTokenTaskParams
} from '@/application/contracts/tasks/auth'
import { Injectable } from '@nestjs/common'
import * as jwt from 'jsonwebtoken'
import * as crypto from 'crypto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService implements ComparePasswordsTask, GenerateTokenTask {
  async compare(payload: ComparePasswordsTaskParams): Promise<ComparePasswordsTaskResult> {
    const isSame = bcrypt.compare(payload.plainText, payload.hashedText)
    return isSame
  }

  async generateToken(payload: GenerateTokenTaskParams): Promise<string> {
    const secretKey = crypto.randomBytes(64).toString('hex')

    const token = jwt.sign(
      {
        userId: payload.id,
        email: payload.email,
        name: payload.name,
        expiresIn: '24h'
      },
      secretKey
    )

    return token
  }
}
