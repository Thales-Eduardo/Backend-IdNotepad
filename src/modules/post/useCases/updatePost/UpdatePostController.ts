import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdatePostUseCase } from './UpdatePostUseCase';

export class UpdatePostController {
  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { check, immediate, urgent } = req.body;

    const updatePost = container.resolve(UpdatePostUseCase);

    const update = await updatePost.execute({
      id,
      check,
      immediate,
      urgent,
    });

    return res.json(update);
  }
}
