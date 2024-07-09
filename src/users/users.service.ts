import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            "id":1,
            "name":"Leanne Graham",
            "email":"Sincer2april.biz",
            "role":"INTERN"
        },
        {
            "id":2,
            "name":"2Leanne Graham",
            "email":"2Sincer2april.biz",
            "role":"ENGINEER"
        },
        {
            "id":3,
            "name":"3Leanne Graham",
            "email":"3Sincer2april.biz",
            "role":"ADMIN"
        },
        {
            "id":4,
            "name":"4Leanne Graham",
            "email":"4Sincer2april.biz",
            "role":"ADMIN"
        },
        {
            "id":5,
            "name":"5Leanne Graham",
            "email":"5Sincer2april.biz",
            "role":"ENGINEER"
        }
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        if(role){
            const rolesArray = this.users.filter(user => user.role === role)
            if(rolesArray.length === 0)throw new NotFoundException('User Role not found');
        }
        return this.users
    }

    findOne(id: number){
        const user = this.users.find(user => user.id === id)
        if(!user) throw new NotFoundException("User Not Found");
        return user
    }

    create(createUserDto:CreateUserDto) {
        const usersByHighestId = this.users.sort((a, b) => b.id - a.id);
    
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...createUserDto
        };
        this.users.push(newUser);
        return newUser;
    }
    

    update(id: number, updateUserDto:UpdateUserDto){
        this.users = this.users.map(user =>{
            if(user.id === id){
                return {...user, ...updateUserDto}
            }
            return user
        })
        return this.findOne(id)
    }

    delete(id:number){
        const removeUser = this.findOne(id)

        this.users = this.users.filter(user=> user.id !== id)

        return removeUser;
    }
}
