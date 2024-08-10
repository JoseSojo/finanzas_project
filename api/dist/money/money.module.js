"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyModule = void 0;
const common_1 = require("@nestjs/common");
const money_service_1 = require("./money.service");
const money_controller_1 = require("./money.controller");
const prisma_service_1 = require("../global/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
let MoneyModule = class MoneyModule {
};
exports.MoneyModule = MoneyModule;
exports.MoneyModule = MoneyModule = __decorate([
    (0, common_1.Module)({
        providers: [money_service_1.MoneyService, prisma_service_1.PrismaService, jwt_1.JwtService, user_service_1.UserService],
        controllers: [money_controller_1.MoneyController]
    })
], MoneyModule);
//# sourceMappingURL=money.module.js.map