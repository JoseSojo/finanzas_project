import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @IsString()
    @IsNotEmpty()
    access: string

    @IsString()
    @IsNotEmpty()
    password: string
}
