"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthCredentialDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var regex_1 = require("../../../@utils/regex");
var AuthCredentialDto = /** @class */ (function () {
    function AuthCredentialDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.Matches(regex_1.BD_PHONE_NUMBER_PATTERN, {
            message: "Phone Number Must be Bangladeshi",
        }),
        tslib_1.__metadata("design:type", String)
    ], AuthCredentialDto.prototype, "phoneNumber", void 0);
    tslib_1.__decorate([
        class_validator_1.IsNotEmpty(),
        tslib_1.__metadata("design:type", String)
    ], AuthCredentialDto.prototype, "password", void 0);
    return AuthCredentialDto;
}());
exports.AuthCredentialDto = AuthCredentialDto;
//# sourceMappingURL=auth-credentials.dto.js.map