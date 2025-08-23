import { ApiProperty } from '@nestjs/swagger';

export class PostResponse {
  @ApiProperty({
    description: 'ID поста',
    example: '68a9fe4e320f938bd40ae66e',
  })
  id: string;

  @ApiProperty({
    description: 'ID пользователя',
    example: '68a1d7b0939ac6d104d0f484',
  })
  userId: string;

  @ApiProperty({
    description: 'URL изображения',
    example: 'uploads/1755971150576-download.jpeg',
    required: false,
    nullable: true,
  })
  imgUrl?: string | null;

  @ApiProperty({
    description: 'Заголовок (EN)',
    example: 'How to grow Monstera',
    required: false,
    nullable: true,
  })
  titleEn?: string | null;

  @ApiProperty({
    description: 'Заголовок (UA)',
    example: 'Як виростити Монстеру',
  })
  titleUa: string;

  @ApiProperty({
    description: 'Контент (EN)',
    example: 'Step-by-step guide..',
    required: false,
    nullable: true,
  })
  contentEn?: string | null;

  @ApiProperty({
    description: 'Контент (UA)',
    example: 'Покрокова інструкція..',
  })
  contentUa: string;
}
