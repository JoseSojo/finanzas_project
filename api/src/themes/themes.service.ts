import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';
import { ThemeCreateDto } from './dto/create.dto';

@Injectable()
export class ThemesService {
    constructor(
        private prisma: PrismaService
    ) {}
    
    public async findAll({skip,take,userId}:{skip:number,take:number,userId:string}) {
        return this.prisma.theme.findMany({skip,take,where:{propietaryId:userId}});
    }

    public async find(param: string, userId:string) {
        return this.prisma.theme.findFirst({ 
            where:{
                AND: [
                    {
                        OR:[
                            {id:param},
                            {name:param.toUpperCase()}
                        ]
                    },
                    {
                        propietaryId: userId
                    }
                ]
            }
        });
    }

    public async create(data: ThemeCreateDto, id) {
        return this.prisma.theme.create({ 
            data:{
                ...data,name:data.name.toUpperCase(),
                propietaryReference: { connect: {id}}
            }
        });
    }

    public async delete() {}
}
