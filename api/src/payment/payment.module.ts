import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { PrismaService } from 'src/global/prisma.service';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService, PrismaService,JwtService,UserService]
})
export class PaymentModule {}
