import "reflect-metadata"

import { AuthChangePasswordController } from "./app/@modules/auth/controllers/auth-change-password.controller"
import { AuthLoginController } from "./app/@modules/auth/controllers/auth-login.controller"
import { AuthRegisterController } from "./app/@modules/auth/controllers/auth-register.controller"
import { BannerController } from "./app/@modules/ecommarce/controllers/banner.controller"
import { BrandController } from "./app/@modules/ecommarce/controllers/brand.controller"
import { CategoryController } from "./app/@modules/ecommarce/controllers/category.controller"
import { DepartmentController } from "./app/@modules/ecommarce/controllers/department.controller"
import { ENV } from "./ENV"
import { OrderController } from "./app/@modules/ecommarce/controllers/order.controller"
import { ProductController } from "./app/@modules/ecommarce/controllers/product.controller"
import { UserController } from "./app/@modules/user/controllers/user.controller"
import { UserInfoController } from "./app/@modules/user/controllers/user-info.controller"
import { UtilsController } from "./app/@modules/utils/controllers/util.controller"
import { getMetadataArgsStorage } from "routing-controllers"
import { routingControllersToSpec } from "routing-controllers-openapi"
import { validationMetadatasToSchemas } from "class-validator-jsonschema"

const { defaultMetadataStorage } = require("class-transformer/cjs/storage")
//* DOCS
const schemas: any = validationMetadatasToSchemas({
	classTransformerMetadataStorage: defaultMetadataStorage,
	refPointerPrefix: "#/components/schemas/",
})
const storage = getMetadataArgsStorage()
const _controllers = [
	AuthLoginController,
	AuthRegisterController,
	AuthChangePasswordController,
	UserController,
	DepartmentController,
	CategoryController,
	BrandController,
	BannerController,
	ProductController,
	UserInfoController,
	UtilsController,
	OrderController,
]
export const spec: any = routingControllersToSpec(
	storage,
	{
		controllers: _controllers,

		routePrefix: ENV.API_PREFIX,
	},
	{
		components: {
			schemas,
			securitySchemes: {
				basicAuth: {
					scheme: "basic",
					type: "http",
				},
			},
		},
		info: {
			description: ENV.API_DESC,
			title: ENV.API_TITLE,
			version: ENV.API_TITLE,
		},
	}
)

// let i = true
// if (i === true) {
// 	fs.writeFileSync("ishopApi.json", JSON.stringify(spec))
// 	i = false
// }
