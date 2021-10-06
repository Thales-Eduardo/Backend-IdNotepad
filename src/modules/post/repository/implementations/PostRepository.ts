import { getRepository, Repository } from 'typeorm';
import { Post } from '../../entities/Post';
import { IPostRepository } from '../IPostRepository';
import { ICreatePostDTO } from '../../dtos/ICreatePostDTO';
import { IUpdatePostDTO } from '../../dtos/IUpdatePostDTO';

export class PostRepository implements IPostRepository {
  private PostRepository: Repository<Post>;

  constructor() {
    this.PostRepository = getRepository(Post);
  }

  public async create({
    title,
    check,
    immediate,
    urgent,
  }: ICreatePostDTO): Promise<Post> {
    const post = await this.PostRepository.create({
      title,
      check,
      immediate,
      urgent,
    });

    return await this.PostRepository.save(post);
  }

  public async update(data: IUpdatePostDTO): Promise<Post> {
    return await this.PostRepository.save(data);
  }

  public async delete(id: string): Promise<void> {
    const post = await this.PostRepository.findOne(id);

    if (post) {
      await this.PostRepository.remove(post);
    }
  }

  public async findAllPost(): Promise<Post[]> {
    return await this.PostRepository.find();
  }

  public async findById(id: string): Promise<Post | undefined> {
    return await this.PostRepository.findOne(id);
  }
}
