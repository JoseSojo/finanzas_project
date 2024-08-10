import { Controller, Get, Post, Request, Response, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/global/guard/auth.guard';
import { RequetsUser } from 'src/global/types/express';
import { UserService } from './user.service';
import { Response as ResponseType } from 'express';

@Controller('user')
export class UserController {

    constructor(
        private user: UserService
    ) {}

    @Post(`/`)
    @UseGuards(AuthGuard)
    public async userFn(@Request() req: any) {
        return req.user;
    }

    @Get(`/dashboard`)
    @UseGuards(AuthGuard)
    public async dashboard(@Request() req: RequetsUser, @Response() res: ResponseType) {
        const result = this.user.GenerateDashboard({userId:req.user.id})
        
        return res.status(200).json({ body:await result });
    }

}
