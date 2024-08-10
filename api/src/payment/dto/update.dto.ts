import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PayUpdateDto {
    @IsNumber()
    @IsNotEmpty()
    mountTransfer: number
}
