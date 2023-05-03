import { IsEmail, IsNotEmpty, IsString, Length, Matches } from "class-validator";
import { Column } from "sequelize-typescript";

export class SignupDto {
   username: string;
   password: string;
   email: string;
}