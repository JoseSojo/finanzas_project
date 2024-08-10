import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';

@Injectable()
export class StaticticsService {

    constructor (
        private prisma: PrismaService
    ) {}

    public async Create(id: string) {
        await this.IncrementOrCreateMonthByUser(id);
        await this.IncrementOrCreateYearByUser(id);
    }

    public async IncrementOrCreateMonthByUser(userId: string) {
        const day = this.getDay();
        const month = this.getMonth();
        const year = this.getYear();

        const found = await this.prisma.month.findFirst({ 
            where: {
                AND: [
                    { monthNumber: month },
                    { propietaryId: userId },
                    { year }
                ]
            }
        });

        if(found) {
            this.prisma.month.update({
                where: { id:found.id },
                data: {
                    totalMonth: { increment: 1 },
                    day1: day === 1 ? { increment: 1 } : { increment: 0 },
                    day2: day === 2 ? { increment: 1 } : { increment: 0 },
                    day3: day === 3 ? { increment: 1 } : { increment: 0 },
                    day4: day === 4 ? { increment: 1 } : { increment: 0 },
                    day5: day === 5 ? { increment: 1 } : { increment: 0 },
                    day6: day === 6 ? { increment: 1 } : { increment: 0 },
                    day7: day === 7 ? { increment: 1 } : { increment: 0 },
                    day8: day === 8 ? { increment: 1 } : { increment: 0 },
                    day9: day === 9 ? { increment: 1 } : { increment: 0 },
                    day10: day === 10 ? { increment: 1 } : { increment: 0 },
                    day11: day === 11 ? { increment: 1 } : { increment: 0 },
                    day12: day === 12 ? { increment: 1 } : { increment: 0 },
                    day13: day === 13 ? { increment: 1 } : { increment: 0 },
                    day14: day === 14 ? { increment: 1 } : { increment: 0 },
                    day15: day === 15 ? { increment: 1 } : { increment: 0 },
                    day16: day === 16 ? { increment: 1 } : { increment: 0 },
                    day17: day === 17 ? { increment: 1 } : { increment: 0 },
                    day18: day === 18 ? { increment: 1 } : { increment: 0 },
                    day19: day === 19 ? { increment: 1 } : { increment: 0 },
                    day20: day === 20 ? { increment: 1 } : { increment: 0 },
                    day21: day === 21 ? { increment: 1 } : { increment: 0 },
                    day22: day === 22 ? { increment: 1 } : { increment: 0 },
                    day23: day === 23 ? { increment: 1 } : { increment: 0 },
                    day24: day === 24 ? { increment: 1 } : { increment: 0 },
                    day25: day === 25 ? { increment: 1 } : { increment: 0 },
                    day26: day === 26 ? { increment: 1 } : { increment: 0 },
                    day27: day === 27 ? { increment: 1 } : { increment: 0 },
                    day28: day === 28 ? { increment: 1 } : { increment: 0 },
                    day29: day === 29 ? { increment: 1 } : { increment: 0 },
                    day30: day === 30 ? { increment: 1 } : { increment: 0 },
                    day31: day === 31 ? { increment: 1 } : { increment: 0 },
                }
            })
            return;
        }

        this.prisma.month.create({
            data:{
                monthNumber: month,
                monthName: this.getMonthInfo(month),
                year,
                objectType: `GENERAL`,
                totalMonth: 1,
                propietaryReference: {
                    connect: {id:userId}
                },
                day1: day === 1 ? 1 : 0,
                day2: day === 2 ? 1 : 0,
                day3: day === 3 ? 1 : 0,
                day4: day === 4 ? 1 : 0,
                day5: day === 5 ? 1 : 0,
                day6: day === 6 ? 1 : 0,
                day7: day === 7 ? 1 : 0,
                day8: day === 8 ? 1 : 0,
                day9: day === 9 ? 1 : 0,
                day10: day === 10 ? 1 : 0,
                day11: day === 11 ? 1 : 0,
                day12: day === 12 ? 1 : 0,
                day13: day === 13 ? 1 : 0,
                day14: day === 14 ? 1 : 0,
                day15: day === 15 ? 1 : 0,
                day16: day === 16 ? 1 : 0,
                day17: day === 17 ? 1 : 0,
                day18: day === 18 ? 1 : 0,
                day19: day === 19 ? 1 : 0,
                day20: day === 20 ? 1 : 0,
                day21: day === 21 ? 1 : 0,
                day22: day === 22 ? 1 : 0,
                day23: day === 23 ? 1 : 0,
                day24: day === 24 ? 1 : 0,
                day25: day === 25 ? 1 : 0,
                day26: day === 26 ? 1 : 0,
                day27: day === 27 ? 1 : 0,
                day28: day === 28 ? 1 : 0,
                day29: day === 29 ? 1 : 0,
                day30: day === 30 ? 1 : 0,
                day31: day === 31 ? 1 : 0,
            }
        })
        return;
    }

    public async IncrementOrCreateYearByUser(userId: string) {
        const year = this.getYear();
        const month = this.getMonth();

        const found = await this.prisma.year.findFirst({ 
            where: {
                AND: [
                    { propietaryId: userId },
                    { year }
                ]
            }
        });

        if(found) {
            this.prisma.year.update({
                where: {id:found.id},
                data: {
                    total: {increment:1},
                    totalMonth1: month === 1 ? {increment:1} : {increment:0},
                    totalMonth2: month === 2 ? {increment:1} : {increment:0},
                    totalMonth3: month === 3 ? {increment:1} : {increment:0},
                    totalMonth4: month === 4 ? {increment:1} : {increment:0},
                    totalMonth5: month === 5 ? {increment:1} : {increment:0},
                    totalMonth6: month === 6 ? {increment:1} : {increment:0},
                    totalMonth7: month === 7 ? {increment:1} : {increment:0},
                    totalMonth8: month === 8 ? {increment:1} : {increment:0},
                    totalMonth9: month === 9 ? {increment:1} : {increment:0},
                    totalMonth10: month === 10 ? {increment:1} : {increment:0},
                    totalMonth11: month === 11 ? {increment:1} : {increment:0},
                    totalMonth12: month === 12 ? {increment:1} : {increment:0},

                }
            });
            return;
        }

        this.prisma.year.create({
            data: {
                total: 1,
                totalMonth1: month === 1 ? 1 : 0,
                totalMonth2: month === 2 ? 1 : 0,
                totalMonth3: month === 3 ? 1 : 0,
                totalMonth4: month === 4 ? 1 : 0,
                totalMonth5: month === 5 ? 1 : 0,
                totalMonth6: month === 6 ? 1 : 0,
                totalMonth7: month === 7 ? 1 : 0,
                totalMonth8: month === 8 ? 1 : 0,
                totalMonth9: month === 9 ? 1 : 0,
                totalMonth10: month === 10 ? 1 : 0,
                totalMonth11: month === 11 ? 1 : 0,
                totalMonth12: month === 12 ? 1 : 0,
                year,
                propietaryReference: { connect: { id:userId } },
            }
        })
    }

    public getYear() {
        const date = new Date();
        return date.getFullYear();
    }

    public getMonthInfo(month: number): string {
        const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      
        if (month < 1 || month > 12) {
          return `Enero`
        }
      
        return monthNames[month - 1];
      }

    public getMonth() {
        const date = new Date();
        return date.getMonth()+1;
    }

    public getDay() {
        const date = new Date();
        return date.getDate();
    }
}
