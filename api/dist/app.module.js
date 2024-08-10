"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const auth_controller_1 = require("./auth/auth.controller");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("./user/user.service");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const money_module_1 = require("./money/money.module");
const payment_module_1 = require("./payment/payment.module");
const themes_module_1 = require("./themes/themes.module");
const prisma_service_1 = require("./global/prisma.service");
const user_controller_1 = require("./user/user.controller");
const money_controller_1 = require("./money/money.controller");
const payment_controller_1 = require("./payment/payment.controller");
const themes_controller_1 = require("./themes/themes.controller");
const money_service_1 = require("./money/money.service");
const payment_service_1 = require("./payment/payment.service");
const themes_service_1 = require("./themes/themes.service");
const transaction_module_1 = require("./transaction/transaction.module");
const statictics_service_1 = require("./statictics/statictics.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, `..`, `upload`)
            }),
            user_module_1.UserModule, money_module_1.MoneyModule, payment_module_1.PaymentModule, themes_module_1.ThemesModule, transaction_module_1.TransactionModule,
        ],
        controllers: [
            auth_controller_1.AuthController,
            user_controller_1.UserController,
            money_controller_1.MoneyController,
            payment_controller_1.PaymentController,
            themes_controller_1.ThemesController
        ],
        providers: [
            jwt_1.JwtService,
            user_service_1.UserService,
            prisma_service_1.PrismaService,
            money_service_1.MoneyService,
            payment_service_1.PaymentService,
            themes_service_1.ThemesService,
            statictics_service_1.StaticticsService
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map