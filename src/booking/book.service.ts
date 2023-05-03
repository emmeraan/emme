import { Body, Injectable, Delete } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { comparePassword, encodepassowrd } from 'src/utils/bcrypt';
import { where } from 'sequelize';
import { books } from './models/book.model';
//import { customer } from './models/customer.model';

@Injectable()
export class BookingService {
  constructor(
    
  @InjectModel(books) private bookingModel: typeof books
  ) { }
 async createbook(books) {
  console.log(books);
    let create = await this.bookingModel.create({
      B_name:books.name, creator_name:books.creator_name, publishdate:books.date, price:books.price
    })
    console.log(create);
    
    return({
      message:'user information updated successfully',
    })
  }
}