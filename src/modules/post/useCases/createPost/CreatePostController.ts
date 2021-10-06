import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePostUseCase } from './CreatePostUseCase';

export class CreatePostController {
  public async create(req: Request, res: Response) {
    const { title, check, immediate, urgent } = req.body;

    const createPost = container.resolve(CreatePostUseCase);

    const post = await createPost.execute({
      title,
      check,
      immediate,
      urgent,
    });

    return res.json(post);
  }
}
