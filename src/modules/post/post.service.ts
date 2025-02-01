import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/db.service';
import { CreatePostDTO } from './post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: DatabaseService) {}

  async list() {
    return this.prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(data: CreatePostDTO) {
    return this.prisma.post.create({ data });
  }
}
