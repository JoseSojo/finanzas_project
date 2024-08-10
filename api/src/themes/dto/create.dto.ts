import { IsNotEmpty, IsString } from "class-validator";

export class ThemeCreateDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    description: string

    @IsString()
    @IsNotEmpty()
    type: string // INGRESO | EGRESO
}
