import { IsEmail, IsNotEmpty, IsString, Length, Matches } from "class-validator";

export class customerDto{
   firstname:string;
   
   lastname:string;

   email:string;

   telephone:number;

   
}