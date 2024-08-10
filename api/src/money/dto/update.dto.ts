import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class MoneyUpdateDto {
    @IsNumber()
    @IsNotEmpty()
    mount: number
}
