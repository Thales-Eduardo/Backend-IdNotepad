import { Router } from 'express';

import { CreatePostController } from '../modules/post/useCases/createPost/CreatePostController';
import { DeletePostController } from '../modules/post/useCases/deletePost/DeletePostController';
import { UpdatePostController } from '../modules/post/useCases/updatePost/UpdatePostController';
import { FindAllPostController } from '../modules/post/useCases/findAllPost/FindAllPostController';

const Post = Router();
const createPostController = new CreatePostController();
const deletePostController = new DeletePostController();
const updatePostController = new UpdatePostController();
const findAllPostController = new FindAllPostController();

Post.post('/', createPostController.create);
Post.delete('/delete/:id', deletePostController.delete);
Post.put('/update/:id', updatePostController.update);
Post.get('/find_all', findAllPostController.index);

export { Post };
