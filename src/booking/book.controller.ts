import { customerDto } from './models/dto/customer.dto';
import { Body, Controller, Delete, Get, Param, Post, Put, UnauthorizedException, UsePipes, ValidationPipe } from '@nestjs/common';
import { Redirect } from '@nestjs/common/decorators';
import { BookingService } from './book.service';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BookDto } from './models/dto/book.dto';


@ApiTags('Books')
@Controller('/data')
export class BookingController {

  constructor(private readonly bookingService: BookingService) { }

  @Post('addbooks')
  @ApiOperation({summary:'Add customers Data'})
  @ApiBody({
      schema:{
         type:'object',
         properties:{
            firstname:{
               type:'string',
               example:'firstname',
               description:'this is user first name',
            },
            lastname:{
               type:'string',
               example:'lastname',
               description:'this is user last name',
            },
            
            email:{
               type:'string',
               example:'email',
               description:'this is user email',
            },
            telephone:{
               type:'string',
               example:'034555555',
               description:'this is user email',
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
 async adduser(@Body() user: BookDto){

    let res = await this.bookingService.createbook(user)
    return res
  }
}