import { Allow, IsAlphanumeric, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, isString } from "class-validator";
import { ProductsEntity } from "src/entities/product.entity";

export class BaseProductDto {
    @Allow()
    @IsNotEmpty(/*isNotEmptyOptios()*/)
    @IsString()
    readonly title: ProductsEntity;

    @IsNotEmpty()
    @IsPositive()
    @IsNumber()
    readonly price: ProductsEntity;

    @IsOptional()
    @IsString()
    @IsAlphanumeric()
    readonly description: ProductsEntity;

    @IsNotEmpty()
    @IsString()
    @IsAlphanumeric()
    readonly image: ProductsEntity;
}

