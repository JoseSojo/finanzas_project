import { MoneyService } from './money.service';
import { MoneyCreateDto } from './dto/create.dto';
import { MoneyUpdateDto } from './dto/update.dto';
import { Response as ResponseType } from 'express';
import { RequetsUser } from 'src/global/types/express';
export declare class MoneyController {
    private money;
    constructor(money: MoneyService);
    findAll(query: {
        skip?: string;
        take?: string;
    }, req: RequetsUser): Promise<{
        body: {
            id: string;
            name: string;
            mount: number;
            createAt: Date;
            updateAt: Date;
            propietaryId: string;
        }[];
    }>;
    findById(param: {
        id: string;
    }, req: RequetsUser): Promise<{
        body: {
            id: string;
            name: string;
            mount: number;
            createAt: Date;
            updateAt: Date;
            propietaryId: string;
        };
    }>;
    create(body: MoneyCreateDto, res: ResponseType, req: RequetsUser): Promise<ResponseType<any, Record<string, any>>>;
    update(body: MoneyUpdateDto, param: {
        id: string;
    }): Promise<{
        id: string;
        name: string;
        mount: number;
        createAt: Date;
        updateAt: Date;
        propietaryId: string;
    }>;
}
