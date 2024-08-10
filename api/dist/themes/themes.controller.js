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
exports.ThemesController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../global/guard/auth.guard");
const themes_service_1 = require("./themes.service");
const create_dto_1 = require("./dto/create.dto");
let ThemesController = class ThemesController {
    constructor(theme) {
        this.theme = theme;
    }
    async findAll(query, req) {
        const id = req.user.id;
        const takeSend = query.take ? Number(query.take) : 10;
        const skipSend = query.skip ? Number(query.skip) : 0;
        const resultPromise = this.theme.findAll({ take: takeSend, skip: skipSend, userId: id });
        return { body: await resultPromise };
    }
    async findById(param, req) {
        const id = req.user.id;
        const result = this.theme.find(param.id, id);
        return { body: await result };
    }
    async create(body, res, req) {
        const id = req.user.id;
        const found = await this.theme.find(body.name, id);
        console.debug(`theme ${id} user...`);
        if (found) {
            return res.status(400).json({ message: `Tema ya creado`, error: true });
        }
        const result = this.theme.create(body, id);
        return res.status(201).json({ body: await result });
    }
};
exports.ThemesController = ThemesController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ThemesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(`:id`),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ThemesController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Response)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.ThemeCreateDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ThemesController.prototype, "create", null);
exports.ThemesController = ThemesController = __decorate([
    (0, common_1.Controller)('themes'),
    __metadata("design:paramtypes", [themes_service_1.ThemesService])
], ThemesController);
//# sourceMappingURL=themes.controller.js.map