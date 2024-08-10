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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../global/prisma.service");
let PaymentService = class PaymentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll({ skip, take, userId }) {
        console.log(userId);
        return this.prisma.payMethod.findMany({
            include: { moneyReference: true },
            take,
            skip,
            orderBy: { createAt: 'desc' },
            where: { propietaryId: userId }
        });
    }
    async find(id, userId) {
        return this.prisma.payMethod.findFirst({
            where: {
                AND: [
                    { id },
                    { propietaryId: userId }
                ]
            },
            include: { moneyReference: true }
        });
    }
    async create(data, id) {
        return this.prisma.payMethod.create({
            data: {
                description: data.description,
                name: data.name,
                mountTransfer: 0,
                moneyReference: { connect: { id: data.moneyId } },
                propietaryReference: { connect: { id } }
            }
        });
    }
    async update(data, id) {
        return this.prisma.payMethod.update({ data, where: { id } });
    }
    async decrementOrIncrement({ id, type, mount }) {
        if (type === 'EGRESO') {
            await this.prisma.payMethod.update({
                where: { id },
                data: {
                    mountEgreso: { increment: mount },
                    mountTransfer: { decrement: mount },
                }
            });
            return;
        }
        await this.prisma.payMethod.update({
            where: { id },
            data: {
                mountIngreso: { increment: mount },
                mountTransfer: { increment: mount },
            }
        });
        return;
    }
    async delete() { }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentService);
//# sourceMappingURL=payment.service.js.map