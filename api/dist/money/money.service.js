"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../global/prisma.service");
let MoneyService = class MoneyService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll({ take, skip, userId }) {
        return this.prisma.money.findMany({ take, skip, orderBy: { createAt: 'desc' }, where: { propietaryId: userId } });
    }
    async find(param, userId) {
        return this.prisma.money.findFirst({ where: {
                AND: [
                    {
                        OR: [
                            { id: param },
                            { name: param.toUpperCase() }
                        ]
                    },
                    {
                        propietaryId: userId
                    }
                ]
            }
        });
    }
    async create(data, id) {
        return this.prisma.money.create({ data: {
                ...data,
                name: data.name.toUpperCase(),
                propietaryReference: {
                    connect: { id }
                }
            } });
    }
    async decrementOrIncrement({ id, type, mount }) {
        if (type === 'EGRESO') {
            await this.prisma.money.update({
                where: { id },
                data: {
                    mount: { decrement: mount }
                }
            });
            return;
        }
        await this.prisma.money.update({
            where: { id },
            data: {
                mount: { increment: mount }
            }
        });
        return;
    }
    async update(data, id) {
        return this.prisma.money.update({ data, where: { id } });
    }
    async delete() { }
};
exports.MoneyService = MoneyService;
exports.MoneyService = MoneyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MoneyService);
//# sourceMappingURL=money.service.js.map