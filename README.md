
# Clean TypeScript Example

## Description

This project is designed for training in clean architecture principles using TypeScript. It includes examples and implementations to help developers understand and apply clean architecture concepts in their projects.

## Requirements

- Node.js 12 or higher

## Mode of Use

1. Clone the repository:
   ```bash
   git clone https://github.com/ferrerallan/clean-typescript-example.git
   ```
2. Navigate to the project directory:
   ```bash
   cd clean-typescript-example
   ```
3. Install the dependencies:
   ```bash
   yarn install
   ```
4. Run the application:
   ```bash
   yarn start
   ```

## Example Usage

Here is a basic example of a use case implementation in this project:

```typescript
// src/useCases/getUser/GetUserUseCase.ts

import { IUserRepository } from "../../repositories/IUserRepository";

class GetUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(userId: string) {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
}

export { GetUserUseCase };
```

This example shows a simple use case for retrieving a user by their ID using a repository pattern.

## License

This project is licensed under the MIT License.
