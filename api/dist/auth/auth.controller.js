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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const login_dto_1 = require("../user/dto/login.dto");
const register_dto_1 = require("../user/dto/register.dto");
const user_service_1 = require("../user/user.service");
let AuthController = class AuthController {
    constructor(user) {
        this.user = user;
    }
    async login(body, res) {
        const user = await this.user.findFirsh(body.access);
        if (!user) {
            return res.status(400).json({ message: `Datos incorrectos` });
        }
        const compare = await this.user.Compare(body.password, user.password);
        if (!compare) {
            return res.status(400).json({ message: `Datos incorrectos` });
        }
        const session = await this.user.HandleSession(user.id);
        return res.status(200).json({ body: session, token: session.token });
    }
    async register(body, res) {
        try {
            const usernameValid = await this.user.findFirsh(body.email);
            const emailValid = await this.user.findFirsh(body.username);
            if (usernameValid) {
                return res.status(400).json({ message: `Nombre de usuario en uso` });
            }
            if (emailValid) {
                return res.status(400).json({ message: `Nombre de email en uso` });
            }
            body.password = await this.user.Hash(body.password);
            const result = await this.user.create(body);
            const token = await this.user.HandleSession(result.id);
            return res.json({ body: result, token: token.token });
        }
        catch (error) {
            return res.status(400).json({ message: `Nombre de email en uso`, error: true });
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)(`login`),
    (0, common_1.HttpCode)(200),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)(`register`),
    (0, common_1.HttpCode)(201),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map