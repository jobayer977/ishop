import { IsNotEmpty, IsOptional, IsString } from "class-validator"

import { BaseAttributeDto } from "../../../@base/dto/base-attribute.dto"

export class DepartmentDto extends BaseAttributeDto {
	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	name: string

	@IsOptional()
	slug?: string

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	image: string
}
