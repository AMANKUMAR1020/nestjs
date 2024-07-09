import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}

    @Get()
    findAll(@Query('role') role ?: 'INTERN' | 'ENGINEER' | 'ADMIN'):any[]{
        return this.userService.findAll(role)
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id : number){
        return this.userService.findOne(+id)
    }

    @Post()
    create(@Body(ValidationPipe) createUserDto:CreateUserDto){
        return this.userService.create(createUserDto)
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body(ValidationPipe) updateUserDto:UpdateUserDto){
        return this.userService.update(+id,updateUserDto)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id:string){
        return this.userService.delete(+id)
    }

}

















// import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
// import { UsersService } from './users.service';

// @Controller('users')
// export class UsersController {
//     constructor(private readonly userService:UsersService){}

//     @Get()
//     findAll(@Query('role') role ?: 'INTERN' | 'ENGINEER' | 'ADMIN'):any[]{
//         return this.userService.findAll(role)
//     }
    
//     // @Get(':id')
//     // findOne(@Param('id') id : string){
//     //     return this.userService.findOne(id)
//     // }

//     @Get(':id')
//     findOne(@Param('id', ParseIntPipe) id : number){
//         return this.userService.findOne(+id)
//     }

//     @Post()
//     create(@Body() user:{ name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }){
//         return this.userService.create(user)
//     }

//     @Patch(':id')
//     update(@Param('id') id:string, @Body() userUpdate:{ name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }){
//         return this.userService.update(+id,userUpdate)
//     }

//     @Delete(':id')
//     delete(@Param('id', ParseIntPipe) id:string){
//         return this.userService.delete(+id)
//     }

// }
















// import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

// @Controller('users')
// export class UsersController {

//     // @Get()
//     // findAll():any[]{
//     //     return []
//     // }
//     @Get()
//     findAll(@Query('role') role ?: 'INTERN' | 'ENGINEER' | 'ADMIN'):any[]{
//         return [role]
//     }

//     @Get('interns')
//     findAllInterns(){
//         return []
//     }
    
//     @Get(':id')
//     findOne(@Param('id') id : string){
//         return {id}
//     }

//     // @Get('interns')
//     // findAllInterns(){
//     //     return []
//     // }

//     @Post()
//     create(@Body() user:{}){
//         return user
//     }

//     @Patch(':id')
//     update(@Param('id') id:string, @Body() userUpdate:{}){
//         return {id, ...userUpdate};
//     }

//     @Delete(':id')
//     delete(@Param('id') id:string){
//         return { id }
//     }

// }
