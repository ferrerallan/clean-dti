import { User } from "../../../domain/User";
import { IAddUserRepository } from "../protocols/IAddUserRepository";
import { AddUserDTO } from "./protocols/addUserDTO";

export class addUser {
  addUserRepository: IAddUserRepository;
  constructor(addUserRepository: IAddUserRepository) {
    this.addUserRepository = addUserRepository;
  }
  add(user: AddUserDTO): Promise<User> {
    return null;
  }
}