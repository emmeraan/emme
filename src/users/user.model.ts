import { AutoIncrement, Column, CreatedAt, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";

@Table
export class user extends Model {
 
   @PrimaryKey
   @AutoIncrement
   @Column
   id:number;

   @Column
   username: string;

   @Column
   email: string;

   @Column
   password: string;

   @CreatedAt
   createdAt: Date ;

   @UpdatedAt
   updatedAt: Date ;
}