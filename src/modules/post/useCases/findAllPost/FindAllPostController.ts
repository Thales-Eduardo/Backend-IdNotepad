import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllPostUseCase } from './FindAllPostUseCase';

export class FindAllPostController {
  public async index(req: Request, res: Response) {
    const { page, limit } = req.query;

    const findAllPost = container.resolve(FindAllPostUseCase);

    const post = await findAllPost.execute({
      page,
      limit,
    });

    return res.json(post);
  }
}
