import { inject, injectable } from 'tsyringe';
import { AppErrors } from '../../../../shared/errors/AppErrors';

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
    if (check === true && immediate === true && urgent === true) {
      throw new AppErrors('Apenas uma das prioridade pode ser true');
    }
    if (
      (immediate === true && check === true) ||
      (urgent === true && check === true) ||
      (urgent === true && immediate === true)
    ) {
      throw new AppErrors('Apenas uma das prioridade pode ser true');
    }

    const product = await this.postRepository.create({
      title,
      check,
      immediate,
      urgent,
    });

    return product;
  }
}
