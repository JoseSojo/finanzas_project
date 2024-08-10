import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';
import { MoneyCreateDto } from './dto/create.dto';
import { MoneyUpdateDto } from './dto/update.dto';

@Injectable()
export class MoneyService {

    constructor(
        private prisma: PrismaService
    ) {}
    
    public async findAll({take,skip,userId}:{take:number,skip:number,userId:string}) {
        return this.prisma.money.findMany({take,skip,orderBy: { createAt:'desc' }, where:{propietaryId:userId}});
    }

    public async find(param: string, userId: string) {
        return this.prisma.money.findFirst({ where:{
            AND:[
                {
                    OR:[
                        {id:param},
                        {name:param.toUpperCase()}
                    ]
                },
                {
                    propietaryId:userId
                }
            ]}
        });
    }

    public async create(data: MoneyCreateDto, id:string) {
        return this.prisma.money.create({ data:{
            ...data,
            name:data.name.toUpperCase(),
            propietaryReference: {
                connect: {id}
            }
        }});
    }

    public async decrementOrIncrement({id,type,mount}:{id:string,mount:number,type: `INGRESO` | `EGRESO`}) {
        if(type === 'EGRESO') {
            await this.prisma.money.update({
                where: {id},
                data: {
                    mount: {decrement:mount}
                }
            });
            return;
        }
        await this.prisma.money.update({
            where: {id},
            data: {
                mount: {increment:mount}
            }
        })
        return;
    }

    public async update(data: MoneyUpdateDto, id: string) {
        return this.prisma.money.update({ data, where:{id} });
    }

    public async delete() {}
}
