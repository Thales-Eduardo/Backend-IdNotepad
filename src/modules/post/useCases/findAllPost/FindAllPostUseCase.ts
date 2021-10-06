import { inject, injectable } from 'tsyringe';

import { Post } from '../../entities/Post';

import { IPostRepository } from '../../repository/IPostRepository';

interface IRequest {
  page: any;
  limit: any;
}

@injectable()
export class FindAllPostUseCase {
  constructor(
    @inject('PostRepository')
    private postRepository: IPostRepository,
  ) {}

  public async execute({ page, limit }: IRequest): Promise<Post[]> {
    return await this.postRepository.findAllPost(page, limit);
  }
}
