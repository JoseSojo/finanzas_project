import { TransactionService } from './transaction.service';
import { RequetsUser } from 'src/global/types/express';
import { CreateTransactionDto } from './dto/create.dto';
export declare class TransactionController {
    private transaction;
    constructor(transaction: TransactionService);
    findAll(query: {
        skyp: string;
        take: string;
    }, req: RequetsUser): Promise<{
        body: ({
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
        })[];
    }>;
    create(body: CreateTransactionDto): Promise<{
        body: {};
    }>;
}
