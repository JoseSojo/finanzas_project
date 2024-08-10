import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user/user.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MoneyModule } from './money/money.module';
import { PaymentModule } from './payment/payment.module';
import { ThemesModule } from './themes/themes.module';
import { PrismaService } from './global/prisma.service';
import { UserController } from './user/user.controller';
import { MoneyController } from './money/money.controller';
import { PaymentController } from './payment/payment.controller';
import { ThemesController } from './themes/themes.controller';
import { MoneyService } from './money/money.service';
import { PaymentService } from './payment/payment.service';
import { ThemesService } from './themes/themes.service';
import { TransactionModule } from './transaction/transaction.module';
import { StaticticsService } from './statictics/statictics.service';

@Module({
  imports: [ 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, `..`, `upload`)
    }), 
    UserModule, MoneyModule, PaymentModule, ThemesModule, TransactionModule, 
  ],
  controllers: [
    AuthController,
    UserController,
    MoneyController,
    PaymentController,
    ThemesController
  ],
  providers: [
    JwtService, 
    UserService,
    PrismaService,
    MoneyService,
    PaymentService,
    ThemesService,
    StaticticsService
  ],
})
export class AppModule {}
