import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { user } from './users/user.model';
import { UsersModule } from './users/users.module';
import { books } from './booking/models/book.model';
import { BookingModule } from './booking/book.module';

@Module({
  imports: [
   SequelizeModule.forRoot({
    //ConfigModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'shop_sequelize',
      models: [user,books],
      autoLoadModels: true,
      synchronize:true
    }),
    UsersModule,BookingModule
  ],
  controllers: [],
  providers: [],
  exports:[]
})
export class AppModule {}
