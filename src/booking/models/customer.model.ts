import { Matches, IsString, IsEmail } from "class-validator";
import { DataTypes } from "sequelize";
import { AutoIncrement, BeforeValidate, Column, CreatedAt, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { Col } from "sequelize/types/utils";

@Table
export class books extends Model {

   @PrimaryKey
   @AutoIncrement
   @Column
   id:number;

   @Column
   B_name:string

   @Column
   creator_name:string

   @Column
   publishdate:Date;

   @Column
   price:number

   @CreatedAt
   createdAt: Date ;

   @UpdatedAt
   updatedAt: Date ;
}