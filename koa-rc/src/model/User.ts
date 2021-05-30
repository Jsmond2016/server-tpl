import { IsEmpty } from 'class-validator'

export class User {
  @IsEmpty({message: 'not null'})
  id: number;
  name: string;
  age: number
  address: string
  
  getName() {
    console.log('小林子')
  }

  

}