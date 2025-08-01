import { afterAll, describe, expect, it } from 'vitest'
import request from 'supertest'
import { before } from 'node:test'
import { app } from '@/app'

describe('Register Controller', () => {
  before(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to register', async () => {
    const response = await request(app.server).post('/users').send({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(response.statusCode).toEqual(201)
  })
})
