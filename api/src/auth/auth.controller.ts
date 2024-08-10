import { Body, Controller, HttpCode, Post, Query, Response, UnauthorizedException, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response as ResponseType } from 'express';
import { LoginDto } from 'src/user/dto/login.dto';
import { RegisterDto } from 'src/user/dto/register.dto';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {

    constructor(
        private user: UserService,
    ) {}

    @Post(`login`)
    @HttpCode(200)
    @UsePipes(new ValidationPipe())
    public async login(@Body() body: LoginDto, @Response() res: ResponseType) {
        const user = await this.user.findFirsh(body.access);
        if(!user) {
            return res.status(400).json({ message:`Datos incorrectos` });
        }

        const compare = await this.user.Compare(body.password, user.password);
        if(!compare) {
            return res.status(400).json({ message:`Datos incorrectos` });
        }

        const session = await this.user.HandleSession(user.id);
        return res.status(200).json({ body:session,token:session.token })
    }

    @Post(`register`)
    @HttpCode(201)
    @UsePipes(new ValidationPipe())
    public async register(@Body() body: RegisterDto,@Response() res: ResponseType) {
        try {
            const usernameValid = await this.user.findFirsh(body.email);
            const emailValid = await this.user.findFirsh(body.username);

            if(usernameValid) {
                return res.status(400).json({message:`Nombre de usuario en uso`});
            }

            if(emailValid) {
                return res.status(400).json({message:`Nombre de email en uso`});
            }

            body.password = await this.user.Hash(body.password);
            const result = await this.user.create(body);
            const token = await this.user.HandleSession(result.id);
            
            return res.json({ body: result,token:token.token });
        } catch (error) {
            return res.status(400).json({message:`Nombre de email en uso`,error:true});
        }

        
    }
}
