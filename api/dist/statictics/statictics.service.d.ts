import { PrismaService } from 'src/global/prisma.service';
export declare class StaticticsService {
    private prisma;
    constructor(prisma: PrismaService);
    Create(id: string): Promise<void>;
    IncrementOrCreateMonthByUser(userId: string): Promise<void>;
    IncrementOrCreateYearByUser(userId: string): Promise<void>;
    getYear(): number;
    getMonthInfo(month: number): string;
    getMonth(): number;
    getDay(): number;
}
