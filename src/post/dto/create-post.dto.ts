import { ApiProperty } from "@nestjs/swagger"
import { IsOptional, IsString, Length } from "class-validator";

export class CreatePostDto {
  @ApiProperty({
    description: 'Заголовок (EN)',
    example: 'How to grow Monstera',
    minLength: 1,
    maxLength: 200,
  })
  @IsString()
  @IsOptional()
  @Length(1, 200)
  titleEn?: string;

  @ApiProperty({
    description: 'Заголовок (UA)',
    example: 'Як виростити Монстеру',
    minLength: 1,
    maxLength: 200,
  })
  @IsString()
  @Length(1, 200)
  titleUa: string;

  @ApiProperty({
    description: 'Контент (EN)',
    example: 'Step-by-step guide...',
  })
  @IsOptional()
  @IsString()
  contentEn?: string;

  @ApiProperty({
    description: 'Контент (UA)',
    example: 'Покрокова інструкція...',
  })
  @IsString()
  contentUa: string;
}
