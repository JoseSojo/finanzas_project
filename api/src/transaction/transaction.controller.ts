import { Body, Controller, Get, Post, Query, Request, Response, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { AuthGuard } from 'src/global/guard/auth.guard';
import { RequetsUser } from 'src/global/types/express';
import { CreateTransactionDto } from './dto/create.dto';

@Controller('transaction')
export class TransactionController {

    constructor(
        private transaction: TransactionService,
    ) {}

    @Get(``)
    @UseGuards(AuthGuard)
    public async findAll(@Query() query: {skyp:string,take:string}, @Request() req: RequetsUser) {
        const id = req.user.id;
        const skip = query.skyp ? Number(query.skyp) : 0;
        const take = query.take ? Number(query.take) : 10;
        const result = await this.transaction.findAll({ skip,take,userId:id });
        return {body:result};
    }

    @Post(``)
    @UseGuards(AuthGuard)
    @UsePipes(new ValidationPipe())
    public async create(@Body() body: CreateTransactionDto) {
        const result = await this.transaction.create(body);
        return {body:result};
    }
}
