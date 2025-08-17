import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModel } from './model/user.model';


@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  async findOne(email: string): Promise<UserModel | undefined> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email
      }
    })
    return user ?? undefined;
  }
  async getMe(username: string): Promise<UserModel> {
    const user = await this.findOne(username)
    if (!user) {
      throw new Error('User not found');
    }
    return user
  }
  async create(userData: Omit<UserModel, 'id'>): Promise<UserModel> {
    try {
      return await this.prisma.user.create({
        data: userData
      })
    } catch (error) {
      throw new Error('Failed to create user');
    }
  }
}
