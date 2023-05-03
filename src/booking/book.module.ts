import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookingService } from './book.service';
import { BookingController } from './book.controller';
import { books } from './models/book.model';

@Module({
  imports: [SequelizeModule.forFeature([books])],
  providers: [BookingService],
  controllers: [BookingController],
  exports:[SequelizeModule]
})
export class BookingModule {}