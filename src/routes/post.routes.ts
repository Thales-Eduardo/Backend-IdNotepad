import { Router } from 'express';

import { CreatePostController } from '../modules/post/useCases/createPost/CreatePostController';
import { DeletePostController } from '../modules/post/useCases/deletePost/DeletePostController';
import { UpdatePostController } from '../modules/post/useCases/updatePost/UpdatePostController';

const Post = Router();
const createPostController = new CreatePostController();
const deletePostController = new DeletePostController();
const updatePostController = new UpdatePostController();

Post.post('/', createPostController.create);
Post.delete('/delete/:id', deletePostController.delete);
Post.put('/update/:id', updatePostController.update);

export { Post };
