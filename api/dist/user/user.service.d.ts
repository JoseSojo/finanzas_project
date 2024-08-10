import { PrismaService } from 'src/global/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    GenerateDashboard({ userId }: {
        userId: string;
    }): Promise<{
        _count: {
            sessions: number;
            notifications: number;
            transactions: number;
            money: number;
            pay: number;
            theme: number;
            yearStatictics: number;
            monthStatictics: number;
        };
    } & {
        id: string;
        name: string;
        lastname: string;
        password: string;
        email: string;
        username: string;
        createAt: Date;
        updateAt: Date;
        last_session: Date | null;
    }>;
    findBySession(token: string): Promise<{
        userReference: {
            id: string;
            name: string;
            lastname: string;
            password: string;
            email: string;
            username: string;
            createAt: Date;
            updateAt: Date;
            last_session: Date | null;
        };
    } & {
        id: string;
        startSession: Date;
        endSession: Date | null;
        token: string;
        userId: string;
    }>;
    findFirsh(param: string): Promise<{
        id: string;
        name: string;
        lastname: string;
        password: string;
        email: string;
        username: string;
        createAt: Date;
        updateAt: Date;
        last_session: Date | null;
    }>;
    create(data: RegisterDto): Promise<{
        id: string;
        name: string;
        lastname: string;
        password: string;
        email: string;
        username: string;
        createAt: Date;
        updateAt: Date;
        last_session: Date | null;
    }>;
    HandleSession(id: string): Promise<{
        userReference: {
            id: string;
            name: string;
            lastname: string;
            password: string;
            email: string;
            username: string;
            createAt: Date;
            updateAt: Date;
            last_session: Date | null;
        };
    } & {
        id: string;
        startSession: Date;
        endSession: Date | null;
        token: string;
        userId: string;
    }>;
    Hash(password: string): Promise<string>;
    Compare(password: string, passwordHash: string): Promise<boolean>;
}
