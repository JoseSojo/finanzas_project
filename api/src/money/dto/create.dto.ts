import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class MoneyCreateDto {
    
    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    mount: number

}
