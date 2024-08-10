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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../global/prisma.service");
const statictics_service_1 = require("../statictics/statictics.service");
const money_service_1 = require("../money/money.service");
const payment_service_1 = require("../payment/payment.service");
const themes_service_1 = require("../themes/themes.service");
let TransactionService = class TransactionService {
    constructor(prisma, money, pay, theme, statictics) {
        this.prisma = prisma;
        this.money = money;
        this.pay = pay;
        this.theme = theme;
        this.statictics = statictics;
    }
    async create(data) {
        await this.statictics.Create(data.userId);
        const payment = await this.pay.find(data.payId, data.userId);
        const theme = await this.theme.find(data.themeId, data.userId);
        if (!payment || !theme)
            return {};
        const themeSend = theme.type === `INGRESO` ? `INGRESO` : `EGRESO`;
        this.money.decrementOrIncrement({ id: payment.moneyId, mount: data.mount, type: themeSend });
        this.pay.decrementOrIncrement({ id: data.payId, mount: data.mount, type: themeSend });
        return this.prisma.transaction.create({
            data: {
                payReference: { connect: { id: data.payId } },
                themeReference: { connect: { id: data.themeId } },
                userReference: { connect: { id: data.userId } },
                date: data.date,
                mount: data.mount
            }
        });
    }
    async findAll({ skip, take, userId }) {
        return this.prisma.transaction.findMany({
            where: {
                userId,
            },
            skip,
            take,
            include: {
                payReference: {
                    include: { moneyReference: true }
                },
                themeReference: true,
                userReference: true,
            }
        });
    }
};
exports.TransactionService = TransactionService;
exports.TransactionService = TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        money_service_1.MoneyService,
        payment_service_1.PaymentService,
        themes_service_1.ThemesService,
        statictics_service_1.StaticticsService])
], TransactionService);
//# sourceMappingURL=transaction.service.js.map