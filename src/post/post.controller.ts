import { Body, Controller, Get, Post, Query, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { GetMeRequestDto } from 'src/users/dto/get-me.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePostDto } from './dto/create-post.dto';
import { PostModel } from './model/post.model';
import { ApiBody, ApiConsumes, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { PostResponse } from './dto/response-get-posts.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) { }
  @Post("")
  @ApiOperation({ summary: 'Create a new post' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        img: {
          type: 'string',
          format: 'binary',
          description: 'Image file for the post',
        },
        titleEn: { type: 'string', example: 'How to grow Monstera' },
        titleUa: { type: 'string', example: 'Як виростити Монстеру' },
        contentEn: { type: 'string', example: 'Step-by-step guide...' },
        contentUa: { type: 'string', example: 'Покрокова інструкція...' },
      },
      required: ['titleUa', 'contentUa'],
    },
  })
  @ApiResponse({ status: 201, description: 'Post created successfully', type: PostResponse })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseInterceptors(FileInterceptor('img'))
  @UseGuards(JwtAuthGuard)
  async createPost(@Body() data: CreatePostDto, @Req() req: GetMeRequestDto, @UploadedFile() file: Express.Multer.File,) {
    console.log(req.user.userId)
    return await this.postService.createPost(data, req.user.userId, file)
  }

  @Get()
  @ApiOperation({
    summary: 'Get posts',
    description: 'Retrieve a list of posts with pagination',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number (default is 0)',
  })
  @ApiResponse({
    status: 200,
    description: 'Successful retrieval of posts',
    type: [PostResponse],
  })
  async getPosts(@Query('page') page?: number): Promise<PostModel[]> {
    return await this.postService.getPosts(page)
  }

}
