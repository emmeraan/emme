import { UserController } from './users.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { user} from './user.model';
import { UsersService } from './users.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([user]),
  JwtModule.register({
    global:true,
    secret:"secret",
    signOptions:{expiresIn:'1d'},
  })
  ],
  providers: [UsersService],
  controllers: [UserController],
  exports:[SequelizeModule]
})
export class UsersModule {}