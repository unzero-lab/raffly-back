import {
  ComparePasswordsTask,
  ComparePasswordsTaskParams,
  ComparePasswordsTaskResult,
  CriptographPasswordTask,
  CriptographPasswordTaskParams,
  CriptographPasswordTaskResult,
  GenerateTokenTask,
  GenerateTokenTaskParams
} from '@/application/contracts/tasks/auth'
import { Injectable } from '@nestjs/common'
import * as jwt from 'jsonwebtoken'
import * as crypto from 'crypto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService implements ComparePasswordsTask, CriptographPasswordTask, GenerateTokenTask {
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

  async save(payload: CriptographPasswordTaskParams): Promise<CriptographPasswordTaskResult> {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(payload.password, salt)
    return hash
  }
}
