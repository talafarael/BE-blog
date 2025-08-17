import { ApiProperty } from "@nestjs/swagger"


export class GetMeResponseDto {
  @ApiProperty()
  id: string
  @ApiProperty({ example: "username" })
  email: string
  @ApiProperty({ example: "Anny Lua" })
  username: string
}
