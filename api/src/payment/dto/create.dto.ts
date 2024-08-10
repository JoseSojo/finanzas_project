import { IsNotEmpty, IsString } from "class-validator";

export class PayCreateDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsString()
    @IsNotEmpty()
    moneyId: string

}
