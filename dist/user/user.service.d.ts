import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './user.entity';
export declare class UserService extends TypeOrmCrudService<User> {
    constructor(repo: any);
}
