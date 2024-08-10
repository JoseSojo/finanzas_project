import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTransactionDto {
    
    @IsString()
    @IsNotEmpty()
    themeId: string

    @IsString()
    @IsNotEmpty()
    payId: string

    @IsString()
    @IsNotEmpty()
    userId: string

    @IsString()
    @IsNotEmpty()
    date: string

    @IsNumber()
    @IsNotEmpty()
    mount: number

}
