import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';
import * as bcrypt from 'bcrypt';
import {  } from 'jsonwebtoken';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/global/constant';

@Injectable()
export class UserService {

    constructor(
        private prisma: PrismaService,
        private jwt: JwtService
    ) {}

    public async GenerateDashboard({userId}: {userId:string}) {
        const moneyPromise = this.prisma.user.findFirst({
            where: {id:userId},
            include: {
                _count: true
            }
        })

        return await moneyPromise;
    }

    public async findBySession(token:string) {
        return this.prisma.session.findFirst({ where: { token },include:{userReference:true} });
    }

    public async findFirsh(param: string) {  
        console.debug(param);
        return this.prisma.user.findFirst({
            where: {
                OR: [
                    { username:param },
                    { email:param }
                ]
            }
        });
    }

    public async create(data: RegisterDto) {
        return this.prisma.user.create({ data });
    }

    public async HandleSession(id: string) {
        const date = new Date();
        const token = await this.jwt.signAsync(id.toString(), { secret: jwtConstants.secret });
        return await this.prisma.session.create({
            data: {
                startSession: date,
                token,
                userReference: { connect: { id } }
            },
            include: {
                userReference: true
            }
        });
    }

    public async Hash(password: string) {
        return bcrypt.hash(password, 11);
    }

    public async Compare(password: string, passwordHash: string) {
        return await bcrypt.compare(password, passwordHash);
    }
}
