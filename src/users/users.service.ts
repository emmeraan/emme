import { LoginDto } from './login.dto';
import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { user } from './user.model';
import { comparePassword, encodepassowrd } from 'src/utils/bcrypt';
import { where } from 'sequelize';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(user)
    private loginModel: typeof user,
    private jwtService: JwtService
  ) { }
  //.................................................................
 async createUser(user) {
  console.log(user);
    const password = encodepassowrd(user.password);
    // return this.userModel.create({ ...user, password });
    let create = await this.loginModel.create({
      username:user.username,email:user.email,password:password
    })
    console.log(create);
    
    return({
      message:'user registered successfully',
    })
  }
  //..................................................................

  async UserLogin(LoginDto) {
    let email = LoginDto.email
    let db = await this.loginModel.findOne({
      where: {
        email: email
      },
    });
    if(db){
    //console.log(db.email);
    //console.log(db.password);

    if (LoginDto.email == db.email) {
      console.log("email is correct")
      let encrypted = await comparePassword(LoginDto.password, db.password)
      //console.log(encrypted);
      if (encrypted) 
      {
       const jwt=await this.jwtService.signAsync({id:db.id,name:db.username});
        console.log(jwt)
        return {access_token:jwt}
        //return{ message:'Login successful',jwt};
      } else {
        return ('password does not matched')
      }
    }
    // else {
    //   return ('Email is not matching')
    // }
  } else{
    return({
      message:'this email does not exist in database'
    })
  }
  
  }
  //.........................................................................
  async userUpdate(userDTO) {
    let emails = userDTO.email;
    let newpassword = encodepassowrd(userDTO.newpass);
    console.log(newpassword)
    let db = await this.loginModel.findOne({
      where: {
        email: emails,
      },
    });
    console.log(db.email);
    if (emails == db.email) {
      console.log("email is correct")
      let encrypted = await comparePassword(userDTO.oldpass, db.password)
      console.log(encrypted);
      if (encrypted) {
        let db = await this.loginModel.update({ password: newpassword }, {
          where: {
            email: emails
          },
        });
        return { message: "password changed" }
      } else {
        return ('password does not matched')
      }
    }
    else {
      return ('Email is not matching')
      {
      }
    }
  }

}