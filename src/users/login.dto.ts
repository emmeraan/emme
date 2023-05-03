import { IsEmail, IsNotEmpty, IsString, Length, Matches } from "class-validator";

export class LoginDto{
   
   email:string;
   
   password:string;

   
}