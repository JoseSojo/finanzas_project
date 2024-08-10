import { PrismaService } from 'src/global/prisma.service';
import { ThemeCreateDto } from './dto/create.dto';
export declare class ThemesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll({ skip, take, userId }: {
        skip: number;
        take: number;
        userId: string;
    }): Promise<{
        id: string;
        type: string;
        name: string;
        description: string | null;
        propietaryId: string;
    }[]>;
    find(param: string, userId: string): Promise<{
        id: string;
        type: string;
        name: string;
        description: string | null;
        propietaryId: string;
    }>;
    create(data: ThemeCreateDto, id: any): Promise<{
        id: string;
        type: string;
        name: string;
        description: string | null;
        propietaryId: string;
    }>;
    delete(): Promise<void>;
}
