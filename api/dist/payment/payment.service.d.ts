import { PrismaService } from 'src/global/prisma.service';
import { PayCreateDto } from './dto/create.dto';
import { PayUpdateDto } from './dto/update.dto';
export declare class PaymentService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll({ skip, take, userId }: {
        skip: number;
        take: number;
        userId: string;
    }): Promise<({
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
    })[]>;
    find(id: string, userId: string): Promise<{
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
    }>;
    create(data: PayCreateDto, id: string): Promise<{
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
    update(data: PayUpdateDto, id: string): Promise<{
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
    decrementOrIncrement({ id, type, mount }: {
        id: string;
        mount: number;
        type: `INGRESO` | `EGRESO`;
    }): Promise<void>;
    delete(): Promise<void>;
}
