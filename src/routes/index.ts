import { Router } from 'express';

import { Post } from './post.routes';

const router = Router();

router.use('/post', Post);

export { router };
