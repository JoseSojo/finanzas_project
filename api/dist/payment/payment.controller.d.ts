import { PaymentService } from './payment.service';
import { PayCreateDto } from './dto/create.dto';
import { PayUpdateDto } from './dto/update.dto';
import { RequetsUser } from 'src/global/types/express';
export declare class PaymentController {
    private pay;
    constructor(pay: PaymentService);
    findAll(query: {
        skip?: string;
        take?: string;
    }, req: RequetsUser): Promise<{
        body: ({
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
        })[];
    }>;
    findById(param: {
        id: string;
    }, req: RequetsUser): Promise<{
        body: {
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
    }>;
    create(body: PayCreateDto, req: RequetsUser): Promise<{
        body: {
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
    }>;
    update(body: PayUpdateDto, param: {
        id: string;
    }): Promise<{
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
    }>;
}
