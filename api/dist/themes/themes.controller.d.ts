import { ThemesService } from './themes.service';
import { ThemeCreateDto } from './dto/create.dto';
import { Response as ResponseType } from 'express';
import { RequetsUser } from 'src/global/types/express';
export declare class ThemesController {
    private theme;
    constructor(theme: ThemesService);
    findAll(query: {
        skip?: string;
        take?: string;
    }, req: RequetsUser): Promise<{
        body: {
            id: string;
            type: string;
            name: string;
            description: string | null;
            propietaryId: string;
        }[];
    }>;
    findById(param: {
        id: string;
    }, req: RequetsUser): Promise<{
        body: {
            id: string;
            type: string;
            name: string;
            description: string | null;
            propietaryId: string;
        };
    }>;
    create(body: ThemeCreateDto, res: ResponseType, req: RequetsUser): Promise<ResponseType<any, Record<string, any>>>;
}
