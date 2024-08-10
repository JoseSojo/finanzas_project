import { RequetsUser } from 'src/global/types/express';
import { UserService } from './user.service';
import { Response as ResponseType } from 'express';
export declare class UserController {
    private user;
    constructor(user: UserService);
    userFn(req: any): Promise<any>;
    dashboard(req: RequetsUser, res: ResponseType): Promise<ResponseType<any, Record<string, any>>>;
}
