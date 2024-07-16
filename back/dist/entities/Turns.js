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
exports.Appointmen = exports.appointmenCoach = exports.appointmentStatus = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
var appointmentStatus;
(function (appointmentStatus) {
    appointmentStatus["ACTIVE"] = "active";
    appointmentStatus["CACELLED"] = "cancelled";
})(appointmentStatus || (exports.appointmentStatus = appointmentStatus = {}));
var appointmenCoach;
(function (appointmenCoach) {
    appointmenCoach["NICOLAS"] = "Nicolas";
    appointmenCoach["GISELA"] = "Gisela";
    appointmenCoach["JIMENA"] = "Jimena";
    appointmenCoach["MARCOS"] = "Marcos";
})(appointmenCoach || (exports.appointmenCoach = appointmenCoach = {}));
let Appointmen = class Appointmen {
};
exports.Appointmen = Appointmen;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Appointmen.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Appointmen.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Appointmen.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Appointmen.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "active", type: "enum", enum: appointmentStatus }),
    __metadata("design:type", String)
], Appointmen.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Appointmen.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: appointmenCoach }),
    __metadata("design:type", String)
], Appointmen.prototype, "coach", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.appointmens),
    (0, typeorm_1.JoinColumn)({ name: "userId" }),
    __metadata("design:type", User_1.User)
], Appointmen.prototype, "user", void 0);
exports.Appointmen = Appointmen = __decorate([
    (0, typeorm_1.Entity)({
        name: "appointmens",
    })
], Appointmen);
