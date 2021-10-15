import { Response, Request } from "express";


export class AddUserController {
  async handle(request: Request, response: Response) {
    console.log(request);
    if (!request.body['name']) {
      response.statusCode = 400;
      return await response.send({ msg: 'name field is requirede' });
    }

    return await response.send({ msg: 'ok' }).status(200);

  }
}