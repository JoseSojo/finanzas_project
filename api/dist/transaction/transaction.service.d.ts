import { PrismaService } from 'src/global/prisma.service';
import { CreateTransactionDto } from './dto/create.dto';
import { StaticticsService } from 'src/statictics/statictics.service';
import { MoneyService } from 'src/money/money.service';
import { PaymentService } from 'src/payment/payment.service';
import { ThemesService } from 'src/themes/themes.service';
export declare class TransactionService {
    private prisma;
    private money;
    private pay;
    private theme;
    private statictics;
    constructor(prisma: PrismaService, money: MoneyService, pay: PaymentService, theme: ThemesService, statictics: StaticticsService);
    create(data: CreateTransactionDto): Promise<{}>;
    findAll({ skip, take, userId }: {
        skip: number;
        take: number;
        userId: string;
    }): Promise<({
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
        themeReference: {
            id: string;
            type: string;
            name: string;
            description: string | null;
            propietaryId: string;
        };
        payReference: {
            moneyReference: {
                id: string;
                name: string;
                mount: number;
                createAt: Date;
                updateAt: Date;
                propietaryId: string;
            };
        } & {
            id: string;
            name: string;
            description: string;
            propietaryId: string;
            moneyId: string;
            mountTransfer: number;
            mountIngreso: number;
            mountEgreso: number;
            createAt: Date;
            updateAt: Date;
        };
    } & {
        id: string;
        date: string;
        themeId: string;
        payId: string;
        userId: string;
        mount: number;
        createAt: Date;
    })[]>;
    async: any;
}
