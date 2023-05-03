import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UnauthorizedException, UsePipes, ValidationPipe } from '@nestjs/common';
import { user } from './user.model';
import { LoginDto } from './login.dto';
import { Redirect, Res } from '@nestjs/common/decorators';
import { SignupDto } from './signup.dto';
import { UserDTO } from './user.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { PassThrough } from 'stream';

@ApiTags('Users Signup and Login API')
@Controller('/data')
export class UserController {

  constructor(private readonly userService: UsersService) { }



  @Post('signup')
  @ApiOperation({summary:'Add User Signup Data'})
  @ApiBody({
      schema:{
         type:'object',
         properties:{
            username:{
               type:'string',
               example:'firstname',
               description:'this is username',
            },
            
            email:{
               type:'string',
               example:'email',
               description:'this is user email',
            },
            password:{
               type:'string',
               example:'123456789',
               description:'this is user password that will be saved in Database',
            }
         },
         }
      })
      @ApiResponse({
         status:200,
         description:'Saved'
      })
      @ApiResponse({
         status:403,
         description:'fobidden'
      })
  // @UsePipes(ValidationPipe)
 async signup(@Body() user: SignupDto){
    // return this.userService.createUser(user)
    let res = await this.userService.createUser(user)
    return res
  }
  //............................................................
  @Post('/login')
  @ApiOperation({summary:'Add User Signup Data'})
  @ApiBody({
      schema:{
         type:'object',
         properties:{
            email:{
               type:'string',
               example:'email@gmail.com',
               description:'Enter user email you want login',
            },
            password:{
               type:'string',
               example:'123456789',
               description:'Enter user password',
            }
         },
         }
      })
  //@UsePipes(ValidationPipe)
  async signin(@Body() loginDto: LoginDto,
  @Res({passthrough:true}) response:Response
   ) {
    let res = await this.userService.UserLogin(loginDto)
    return res
  }
  //.................................................
  
  @Put('/update')
  @ApiOperation({summary:'Update User password'})
  @ApiBody({
      schema:{
         type:'object',
         properties:{
            email:{
               type:'string',
               example:'email',
               description:'this is username',
            },
            
            oldpass:{
               type:'string',
               example:'Oldpassword',
               description:'Use the User Old Password',
            },
            newpass:{
               type:'string',
               example:'123456789',
               description:'this will be user new password ',
            }
         },
         }
      })
      @ApiResponse({
         status:200,
         description:'Saved'
      })
      @ApiResponse({
         status:403,
         description:'fobidden'
      })
  @UsePipes(ValidationPipe)
  async updatesignin(@Body() userDto: UserDTO) {
    return await this.userService.userUpdate(userDto)

  }

}