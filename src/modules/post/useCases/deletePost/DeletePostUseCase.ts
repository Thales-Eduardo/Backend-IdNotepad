import { inject, injectable } from 'tsyringe';

import { IPostRepository } from '../../repository/IPostRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';

interface IRequest {
  id: string;
}

@injectable()
export class DeletePostUseCase {
  constructor(
    @inject('PostRepository')
    private postRepository: IPostRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    const post = await this.postRepository.findById(id);

    if (!post) {
      throw new AppErrors('Identificador invalido.');
    }

    await this.postRepository.delete(id);
  }
}
