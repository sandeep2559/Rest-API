import { Controller, Get } from '@nestjs/common';
import { User } from './user.entity';
import { Crud, CrudController } from "@nestjsx/crud";
import { UserService } from './user.service';

@Crud({
    model:{
        type:User
    }
})
@Controller('user')
export class UsersController implements CrudController<User> {
    constructor(public service: UserService){

    }
  
}
