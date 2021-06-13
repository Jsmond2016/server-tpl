import { IsNotEmpty, MinLength } from "class-validator";

export class User {
  @IsNotEmpty({ message: "id必填" })
  public id!: string;

  @MinLength(6)
  @IsNotEmpty({ message: "名字必填" })
  public name!: string;

  getName() {
    console.log("this is a test");
  }
}
