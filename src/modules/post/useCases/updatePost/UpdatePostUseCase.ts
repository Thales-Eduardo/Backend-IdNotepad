import { inject, injectable } from 'tsyringe';

import { Post } from '../../entities/Post';

import { IPostRepository } from '../../repository/IPostRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';

interface IRequest {
  id: string;
  check: boolean;
  immediate: boolean;
  urgent: boolean;
}

@injectable()
export class UpdatePostUseCase {
  constructor(
    @inject('PostRepository')
    private postRepository: IPostRepository,
  ) {}

  public async execute({
    id,
    check,
    immediate,
    urgent,
  }: IRequest): Promise<Post> {
    const post = await this.postRepository.findById(id);

    if (!post) {
      throw new AppErrors('Identificador invalido.');
    }

    if (check === true && immediate === true && urgent === true) {
      throw new AppErrors('Só pode atualizar um apenas como true');
    }
    if (
      (immediate === true && check === true) ||
      (urgent === true && check === true) ||
      (urgent === true && immediate === true)
    ) {
      throw new AppErrors('Só pode atualizar um apenas como true');
    }

    post.check = check;
    post.immediate = immediate;
    post.urgent = urgent;

    return await this.postRepository.update(post);
  }
}
