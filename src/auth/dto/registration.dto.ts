import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class RegistrationDto {
  @ApiProperty({ example: "antoni" })
  @IsString()
  username: string
  @ApiProperty({ example: "anton@gmail.com" })
  @IsEmail()
  email: string
  @ApiProperty({ example: "password" })
  @IsString()
  password: string
}
