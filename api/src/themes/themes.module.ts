import { Module } from '@nestjs/common';
import { ThemesController } from './themes.controller';
import { ThemesService } from './themes.service';
import { PrismaService } from 'src/global/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [ThemesController],
  providers: [ThemesService,PrismaService,JwtService,UserService]
})
export class ThemesModule {}
