import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostModel } from './model/post.model';

@Injectable()
export class PostService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  async createPost(data: CreatePostDto, id: string, file: Express.Multer.File) {
    return this.prisma.post.create({
      data: {
        titleEn: data.titleEn,
        titleUa: data.titleUa,
        contentEn: data.contentEn,
        contentUa: data.contentUa,
        userId: id,
        imgUrl: file.path
      }
    });
  }
  async getPosts(page: number = 1): Promise<PostModel[]> {
    return await this.prisma.post.findMany({
      skip: (page - 1) * 20,
      take: page * 20,
    })
  }
}
