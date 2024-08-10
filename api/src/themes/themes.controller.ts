import { Body, Controller, Get, Param, Post, Query, Req, Request, Response, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from 'src/global/guard/auth.guard';
import { ThemesService } from './themes.service';
import { ThemeCreateDto } from './dto/create.dto';
import { Response as ResponseType } from 'express';
import { RequetsUser } from 'src/global/types/express';

@Controller('themes')
export class ThemesController {

    constructor (
        private theme: ThemesService
    ) {}

    @Get()
    @UseGuards(AuthGuard)
    public async findAll(@Query() query: {skip?:string,take?:string}, @Request() req: RequetsUser) {
        const id = req.user.id as string;
        const takeSend = query.take ? Number(query.take) : 10;
        const skipSend = query.skip ? Number(query.skip) : 0;
        const resultPromise = this.theme.findAll({take:takeSend,skip:skipSend,userId:id});
        return {body:await resultPromise}
    }

    @Get(`:id`)
    @UseGuards(AuthGuard)
    public async findById(@Param() param: {id:string}, @Request() req: RequetsUser) {
        const id = req.user.id as string;
        const result = this.theme.find(param.id,id);
        return { body:await result };
    }

    @Post()
    @UseGuards(AuthGuard)
    @UsePipes(new ValidationPipe())
    public async create(@Body() body: ThemeCreateDto, @Response() res: ResponseType, @Request() req: RequetsUser) {
        const id = req.user.id as string;
        const found = await this.theme.find(body.name, id);
        console.debug(`theme ${id} user...`);
        if(found) {
            return res.status(400).json({message:`Tema ya creado`, error:true});
        }
        const result = this.theme.create(body, id);
        return res.status(201).json({body:await result}); 
    }
}
