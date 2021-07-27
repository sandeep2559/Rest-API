import { User } from './user.entity';
import { CrudController } from "@nestjsx/crud";
import { UserService } from './user.service';
export declare class UsersController implements CrudController<User> {
    service: UserService;
    constructor(service: UserService);
}
