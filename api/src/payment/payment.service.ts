import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';
import { PayCreateDto } from './dto/create.dto';
import { PayUpdateDto } from './dto/update.dto';

@Injectable()
export class PaymentService {

    constructor(
        private prisma: PrismaService
    ) {}
    
    public async findAll({skip,take,userId}:{skip:number,take:number,userId:string}) {
        console.log(userId);
        return this.prisma.payMethod.findMany({
            include:{moneyReference:true},
            take,
            skip,
            orderBy: { createAt:'desc' },
            where:{propietaryId:userId}
        });
    }

    public async find(id: string,userId:string) {
        return this.prisma.payMethod.findFirst({ 
            where:{
                AND: [
                    {id},
                    {propietaryId:userId}
                ]
            },
            include:{moneyReference:true} 
        });
    }

    public async create(data: PayCreateDto, id:string) {
        return this.prisma.payMethod.create({
            data: {
                description: data.description,
                name: data.name,
                mountTransfer: 0,
                moneyReference: { connect: { id: data.moneyId }},
                propietaryReference: { connect: {id}}
            }
        });
    }

    public async update(data: PayUpdateDto, id: string) {
        return this.prisma.payMethod.update({ data, where:{id} });
    }

    public async decrementOrIncrement({id,type,mount}:{id:string,mount:number,type: `INGRESO` | `EGRESO`}) {
        if(type === 'EGRESO') {
            await this.prisma.payMethod.update({
                where: {id},
                data: {
                    mountEgreso: {increment:mount},
                    mountTransfer: {decrement:mount},
                }
            });
            return;
        }

        await this.prisma.payMethod.update({
            where: {id},
            data: {
                mountIngreso: {increment:mount},
                mountTransfer: {increment:mount},
            }
        })
        return;
    }

    public async delete() {}

}
