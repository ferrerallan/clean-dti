import { AddUserController } from "./AddUserController"
import { Request, Response } from 'express';
const httpMocks = require('node-mocks-http');

describe('Controller User', () => {
  test('should return 400 if no name is provided', async () => {
    const sut = new AddUserController();
    const mockRequest = {
      body: {
        email: 'jdoe@abc123.com',
      },
    } as Request;
    const response = httpMocks.createResponse();
    await sut.handle(mockRequest, response);
    expect(response.statusCode).toBe(400);
  })
})