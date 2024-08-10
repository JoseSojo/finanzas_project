import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { PrismaService } from 'src/global/prisma.service';
import { UserService } from 'src/user/user.service';
import { MoneyService } from 'src/money/money.service';
import { PaymentService } from 'src/payment/payment.service';
import { ThemesService } from 'src/themes/themes.service';
import { JwtService } from '@nestjs/jwt';
import { StaticticsService } from 'src/statictics/statictics.service';

@Module({
  providers: [TransactionService, PrismaService, UserService, MoneyService, PaymentService,ThemesService,JwtService,StaticticsService],
  controllers: [TransactionController]
})
export class TransactionModule {}
