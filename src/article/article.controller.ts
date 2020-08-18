import {
  Body,
  CacheInterceptor,
  CacheTTL,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { Auth } from '../auth/decorators/auth.decorator';
import { Usr } from '../user/user.decorator';
import { User } from '../user/user.entity';
import { Article } from './article.entity';
import { ArticleService } from './article.service';
import { CreateArticleDTO } from './dto/create-article.dto';
import { FindAllArticlesDTO } from './dto/find-all-articles.dto';
import { FindArticleDTO } from './dto/find-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('article')
@UseInterceptors(CacheInterceptor)
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Auth('article', 'create:any')
  @Post()
  create(@Usr() user: User, @Body() createArticleDto: CreateArticleDTO): Promise<Article> {
    return this.articleService.create(user, createArticleDto);
  }

  @Get()
  @CacheTTL(60)
  findAll(@Query() { limit, offset }: FindAllArticlesDTO): Promise<[Article[], number]> {
    return this.articleService.findAll(limit, offset);
  }

  @Get(':id')
  findOne(@Param() { id }: FindArticleDTO): Promise<Article> {
    return this.articleService.findOneOrFail(id);
  }

  @Auth('article', 'update:any')
  @Patch(':id')
  update(
    @Param() { id }: FindArticleDTO,
    @Body() updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    return this.articleService.update(id, updateArticleDto);
  }

  @Auth('article', 'delete:any')
  @Delete(':id')
  delete(@Param() { id }: FindArticleDTO): Promise<Article> {
    return this.articleService.delete(id);
  }
}
