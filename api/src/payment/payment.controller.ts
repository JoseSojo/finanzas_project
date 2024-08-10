import { Body, Controller, Get, Param, Post, Put, Query, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';
import { PaymentService } from './payment.service';
import { AuthGuard } from 'src/global/guard/auth.guard';
import { PayCreateDto } from './dto/create.dto';
import { PayUpdateDto } from './dto/update.dto';
import { RequetsUser } from 'src/global/types/express';

@Controller('payment')
export class PaymentController {

    constructor (
        private pay: PaymentService
    ) {}

    @Get()
    @UseGuards(AuthGuard)
    public async findAll(@Query() query: {skip?:string,take?:string}, @Request() req: RequetsUser) {
        const id = req.user.id as string;
        const takeSend = query.take ? Number(query.take) : 10;
        const skipSend = query.skip ? Number(query.skip) : 0;
        const resultPromise = this.pay.findAll({take:takeSend,skip:skipSend,userId:id});
        return {body:await resultPromise}
    }

    @Get(`:id`)
    @UseGuards(AuthGuard)
    public async findById(@Param() param: {id:string}, @Request() req: RequetsUser) {
        const id = req.user.id as string;
        const result = this.pay.find(param.id,id);
        return { body:await result };
    }

    @Post()
    @UseGuards(AuthGuard)
    @UsePipes(new ValidationPipe())
    public async create(@Body() body: PayCreateDto, @Request() req: RequetsUser) {
        const id = req.user.id as string;
        const result = this.pay.create(body, id);
        return {body:await result} 
    }

    @Put(`:id`)
    @UseGuards(AuthGuard)
    @UsePipes(new ValidationPipe())
    public async update(@Body() body: PayUpdateDto, @Param() param: {id:string}) {
        const result = this.pay.update(body,param.id);
        return result;
    }
}
