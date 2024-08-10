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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionController = void 0;
const common_1 = require("@nestjs/common");
const transaction_service_1 = require("./transaction.service");
const auth_guard_1 = require("../global/guard/auth.guard");
const create_dto_1 = require("./dto/create.dto");
let TransactionController = class TransactionController {
    constructor(transaction) {
        this.transaction = transaction;
    }
    async findAll(query, req) {
        const id = req.user.id;
        const skip = query.skyp ? Number(query.skyp) : 0;
        const take = query.take ? Number(query.take) : 10;
        const result = await this.transaction.findAll({ skip, take, userId: id });
        return { body: result };
    }
    async create(body) {
        const result = await this.transaction.create(body);
        return { body: result };
    }
};
exports.TransactionController = TransactionController;
__decorate([
    (0, common_1.Get)(``),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(``),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateTransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "create", null);
exports.TransactionController = TransactionController = __decorate([
    (0, common_1.Controller)('transaction'),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], TransactionController);
//# sourceMappingURL=transaction.controller.js.map