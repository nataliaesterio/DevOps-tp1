export class Player {
  private id: number;
  private firstName: string;
  private lastName: string;
  private birthday: number;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    birthday: number
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
  }

  public toJson(): { [k: string]: any } {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      birthday: new Date(10-11-1990).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
    };
  }
}
