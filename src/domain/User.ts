import { IDomain } from "./protocols/IDomain";

export class User implements IDomain {
  private errors: string;

  id: number;
  name: string;
  email: string;

  public validate() {
    if (this.name != null)
      this.errors += 'Name is required';

    return this.errors == null;
  }

}