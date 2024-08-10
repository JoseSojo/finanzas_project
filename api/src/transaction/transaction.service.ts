import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';
import { CreateTransactionDto } from './dto/create.dto';
import { StaticticsService } from 'src/statictics/statictics.service';
import { MoneyService } from 'src/money/money.service';
import { PaymentService } from 'src/payment/payment.service';
import { ThemesController } from 'src/themes/themes.controller';
import { ThemesService } from 'src/themes/themes.service';

@Injectable()
export class TransactionService {

    constructor (
        private prisma: PrismaService,
        private money: MoneyService,
        private pay: PaymentService,
        private theme: ThemesService,
        private statictics: StaticticsService
    ) {}

    public async create(data: CreateTransactionDto) {
        await this.statictics.Create(data.userId);
        const payment = await this.pay.find(data.payId,data.userId);
        const theme = await this.theme.find(data.themeId, data.userId);

        if(!payment || !theme) return {};
        const themeSend = theme.type === `INGRESO` ? `INGRESO` : `EGRESO`
        this.money.decrementOrIncrement({ id:payment.moneyId,mount:data.mount,type:themeSend  });
        this.pay.decrementOrIncrement({ id:data.payId,mount:data.mount,type:themeSend });

        return this.prisma.transaction.create({
            data:{
                payReference: { connect: {id:data.payId} },
                themeReference: { connect: {id:data.themeId} },
                userReference: { connect: {id:data.userId} },
                date: data.date,
                mount: data.mount
            }
        })
    }

    public async findAll({skip, take, userId}: {skip:number,take:number,userId: string}) {
        return this.prisma.transaction.findMany({
            where: {
                userId,
            },
            skip, 
            take,
            include: {
                payReference: {
                    include: { moneyReference: true }
                },
                themeReference: true,
                userReference: true,
            }
        })
    }

    public async 

}
