import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePostUseCase } from './CreatePostUseCase';

export class CreatePostController {
  public async create(req: Request, res: Response) {
    const { title, check, immediate, urgent } = req.body;

    const createProduct = container.resolve(CreatePostUseCase);

    const product = await createProduct.execute({
      title,
      check,
      immediate,
      urgent,
    });

    return res.json(product);
  }
}
