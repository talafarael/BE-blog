import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './config/db.config';
import jwtConfig from './config/jwt.config';
import { PrismaService } from './prisma/prisma.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig, jwtConfig]
    }),
    AuthModule,
    UsersModule,
    PostModule
  ],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule { }
