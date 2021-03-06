"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentEntity = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var base_attribute_entity_1 = require("../../../@base/entities/base-attribute.entity");
var category_entity_1 = require("./category.entity");
var product_entity_1 = require("./product.entity");
var DepartmentEntity = /** @class */ (function (_super) {
    tslib_1.__extends(DepartmentEntity, _super);
    function DepartmentEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], DepartmentEntity.prototype, "name", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], DepartmentEntity.prototype, "slug", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], DepartmentEntity.prototype, "image", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function (type) { return category_entity_1.CategoryEntity; }, function (category) { return category.department; }),
        tslib_1.__metadata("design:type", Array)
    ], DepartmentEntity.prototype, "categories", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return product_entity_1.ProductEntity; }, function (product) { return product.department; }),
        tslib_1.__metadata("design:type", Array)
    ], DepartmentEntity.prototype, "products", void 0);
    DepartmentEntity = tslib_1.__decorate([
        typeorm_1.Entity("department")
    ], DepartmentEntity);
    return DepartmentEntity;
}(base_attribute_entity_1.BaseAttributeEntity));
exports.DepartmentEntity = DepartmentEntity;
//# sourceMappingURL=department.entity.js.map