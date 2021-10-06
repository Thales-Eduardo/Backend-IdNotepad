import { inject, injectable } from 'tsyringe';

import { Post } from '../../entities/Post';

import { IPostRepository } from '../../repository/IPostRepository';

interface IRequest {
  title: string;
  check: boolean;
  immediate: boolean;
  urgent: boolean;
}

@injectable()
export class CreatePostUseCase {
  constructor(
    @inject('PostRepository')
    private postRepository: IPostRepository,
  ) {}

  public async execute({
    title,
    check,
    immediate,
    urgent,
  }: IRequest): Promise<Post> {
    const product = await this.postRepository.create({
      title,
      check,
      immediate,
      urgent,
    });

    return product;
  }
}
