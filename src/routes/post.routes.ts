import { Router } from 'express';

import { CreatePostController } from '../modules/post/useCases/createPost/CreatePostController';

const Post = Router();
const createPostController = new CreatePostController();

Post.post('/', createPostController.create);

export { Post };
