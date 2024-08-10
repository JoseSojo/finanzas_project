import { PrismaService } from 'src/global/prisma.service';
import { MoneyCreateDto } from './dto/create.dto';
import { MoneyUpdateDto } from './dto/update.dto';
export declare class MoneyService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll({ take, skip, userId }: {
        take: number;
        skip: number;
        userId: string;
    }): Promise<{
        id: string;
        name: string;
        mount: number;
        createAt: Date;
        updateAt: Date;
        propietaryId: string;
    }[]>;
    find(param: string, userId: string): Promise<{
        id: string;
        name: string;
        mount: number;
        createAt: Date;
        updateAt: Date;
        propietaryId: string;
    }>;
    create(data: MoneyCreateDto, id: string): Promise<{
        id: string;
        name: string;
        mount: number;
        createAt: Date;
        updateAt: Date;
        propietaryId: string;
    }>;
    decrementOrIncrement({ id, type, mount }: {
        id: string;
        mount: number;
        type: `INGRESO` | `EGRESO`;
    }): Promise<void>;
    update(data: MoneyUpdateDto, id: string): Promise<{
        id: string;
        name: string;
        mount: number;
        createAt: Date;
        updateAt: Date;
        propietaryId: string;
    }>;
    delete(): Promise<void>;
}
