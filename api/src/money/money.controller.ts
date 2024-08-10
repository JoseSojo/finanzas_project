import { Body, Controller, Get, Param, Post, Put, Query, Request, Response, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { MoneyService } from './money.service';
import { MoneyCreateDto } from './dto/create.dto';
import { AuthGuard } from 'src/global/guard/auth.guard';
import { MoneyUpdateDto } from './dto/update.dto';
import { Response as ResponseType } from 'express';
import { RequetsUser } from 'src/global/types/express';

@Controller('money')
export class MoneyController {

    constructor (
        private money: MoneyService
    ) {}

    @Get()
    @UseGuards(AuthGuard)
    public async findAll(@Query() query: {skip?:string,take?:string}, @Request() req: RequetsUser) {
        const id = req.user.id as string;
        const takeSend = query.take ? Number(query.take) : 10;
        const skipSend = query.skip ? Number(query.skip) : 0;
        const resultPromise = this.money.findAll({take:takeSend,skip:skipSend,userId:id});
        return {body:await resultPromise}
    }

    @Get(`:id`)
    @UseGuards(AuthGuard)
    public async findById(@Param() param: {id:string}, @Request() req: RequetsUser) {
        const id = req.user.id as string;
        const result = this.money.find(param.id, id);
        return { body:await result };
    }

    @Post()
    @UseGuards(AuthGuard)
    @UsePipes(new ValidationPipe())
    public async create(@Body() body: MoneyCreateDto, @Response() res: ResponseType, @Request() req: RequetsUser) {
        const id = req.user.id as string;
        const found = await this.money.find(body.name,id);
        if(found) {
            return res.status(400).json({response:`Moneda ya creada`});
        }
        const result = this.money.create(body, id);
        return res.status(201).json({body:await result});
    }

    @Put(`:id`)
    @UseGuards(AuthGuard)
    @UsePipes(new ValidationPipe())
    public async update(@Body() body: MoneyUpdateDto, @Param() param: {id:string}) {
        const result = this.money.update(body,param.id);
        return result;
    }
}
