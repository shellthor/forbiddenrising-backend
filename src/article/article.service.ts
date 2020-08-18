import { EntityRepository, FilterQuery, QueryOrder, QueryOrderMap } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import slugify from 'slugify';
import { User } from '../user/user.entity';
import { Article } from './article.entity';
import { CreateArticleDTO } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: EntityRepository<Article>,
  ) {}

  /**
   * Creates a new article.
   *
   * @param user author of the article
   * @param createArticleDto article properties
   */
  public async create(user: User, createArticleDto: CreateArticleDTO): Promise<Article> {
    const article = this.articleRepository.create(createArticleDto);

    article.slug = slugify(createArticleDto.title, {
      lower: true,
      remove: /[*+~.()'"!:@]/g,
    });
    article.author = user;

    await this.articleRepository.persistAndFlush(article);

    return article;
  }

  /**
   * Retrieves all articles starting with the newest first
   * with optional pagination.
   *
   * @param limit maximum number of articles to retrieve
   * @param offset number of articles to skip
   */
  public findAll(limit = 8, offset = 0): Promise<[Article[], number]> {
    return this.articleRepository.findAndCount(
      {},
      {
        orderBy: { id: QueryOrder.DESC },
        limit,
        offset,
      },
    );
  }

  /**
   * Retrieves an individual article, or fails.
   *
   * @param id id of the article
   */
  public findOneOrFail(
    id: number,
    populate?: boolean | string[],
    orderBy?: QueryOrderMap,
  ): Promise<Article>;

  /**
   * Retrieves an article by its slug or fails.
   *
   * @param slug slug of the article
   */
  public findOneOrFail(
    slug: string,
    populate?: boolean | string[],
    orderBy?: QueryOrderMap,
  ): Promise<Article>;

  /**
   * Retrieves an article using a query object or fails.
   *
   * @param where
   * @param populate
   * @param orderBy
   */
  public findOneOrFail(
    where: FilterQuery<Article>,
    populate?: boolean | string[],
    orderBy?: QueryOrderMap,
  ): Promise<Article>;

  public findOneOrFail(
    param: number | string | FilterQuery<Article>,
    populate?: boolean | string[],
    orderBy?: QueryOrderMap,
  ): Promise<Article> {
    const where =
      typeof param === 'number'
        ? { id: param }
        : typeof param === 'string'
        ? { slug: param }
        : param;

    return this.articleRepository.findOneOrFail(where, populate, orderBy);
  }

  /**
   * Updates an article with full privileges.
   *
   * @param id id of the article
   * @param updateArticleDto properties to update
   */
  async update(id: number, updateArticleDto: UpdateArticleDto): Promise<Article> {
    const article = await this.articleRepository.findOneOrFail(id);

    article.assign(updateArticleDto);

    await this.articleRepository.flush();

    return article;
  }

  /**
   * Deletes an article.
   *
   * @param id id of the article
   */
  async delete(id: number): Promise<Article> {
    const article = await this.articleRepository.findOneOrFail(id);

    this.articleRepository.remove(article);

    await this.articleRepository.flush();

    return article;
  }
}
