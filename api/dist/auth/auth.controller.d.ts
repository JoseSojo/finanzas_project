import { Response as ResponseType } from 'express';
import { LoginDto } from 'src/user/dto/login.dto';
import { RegisterDto } from 'src/user/dto/register.dto';
import { UserService } from 'src/user/user.service';
export declare class AuthController {
    private user;
    constructor(user: UserService);
    login(body: LoginDto, res: ResponseType): Promise<ResponseType<any, Record<string, any>>>;
    register(body: RegisterDto, res: ResponseType): Promise<ResponseType<any, Record<string, any>>>;
}
