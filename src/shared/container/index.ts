import { container } from 'tsyringe';

import { IPostRepository } from '../../modules/post/repository/IPostRepository';
import { PostRepository } from '../../modules/post/repository/implementations/PostRepository';

container.registerSingleton<IPostRepository>('PostRepository', PostRepository);
