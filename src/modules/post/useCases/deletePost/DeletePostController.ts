import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeletePostUseCase } from './DeletePostUseCase';

export class DeletePostController {
  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deleteProduct = container.resolve(DeletePostUseCase);

    await deleteProduct.execute({
      id,
    });

    return res.status(204).send();
  }
}
