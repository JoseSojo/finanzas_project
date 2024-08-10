import { Module } from '@nestjs/common';
import { MoneyService } from './money.service';
import { MoneyController } from './money.controller';
import { PrismaService } from 'src/global/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Module({
  providers: [MoneyService,PrismaService,JwtService,UserService],
  controllers: [MoneyController]
})
export class MoneyModule {}
