import { User } from "../../../domain/User";
import { AddUserDTO } from "../add-user/protocols/addUserDTO";

export interface IAddUserRepository {
  add(user: AddUserDTO): Promise<User>;
}