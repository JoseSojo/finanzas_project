"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModule = void 0;
const common_1 = require("@nestjs/common");
const transaction_service_1 = require("./transaction.service");
const transaction_controller_1 = require("./transaction.controller");
const prisma_service_1 = require("../global/prisma.service");
const user_service_1 = require("../user/user.service");
const money_service_1 = require("../money/money.service");
const payment_service_1 = require("../payment/payment.service");
const themes_service_1 = require("../themes/themes.service");
const jwt_1 = require("@nestjs/jwt");
const statictics_service_1 = require("../statictics/statictics.service");
let TransactionModule = class TransactionModule {
};
exports.TransactionModule = TransactionModule;
exports.TransactionModule = TransactionModule = __decorate([
    (0, common_1.Module)({
        providers: [transaction_service_1.TransactionService, prisma_service_1.PrismaService, user_service_1.UserService, money_service_1.MoneyService, payment_service_1.PaymentService, themes_service_1.ThemesService, jwt_1.JwtService, statictics_service_1.StaticticsService],
        controllers: [transaction_controller_1.TransactionController]
    })
], TransactionModule);
//# sourceMappingURL=transaction.module.js.map