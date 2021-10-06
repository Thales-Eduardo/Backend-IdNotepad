import { ICreatePostDTO } from '../dtos/ICreatePostDTO';
import { IUpdatePostDTO } from '../dtos/IUpdatePostDTO';
import { Post } from '../entities/Post';

export interface IPostRepository {
  create(data: ICreatePostDTO): Promise<Post>;
  update(data: IUpdatePostDTO): Promise<Post>;
  delete(id: string): Promise<void>;
  findAllPost(): Promise<Post[]>;
  findById(id: string): Promise<Post | undefined>;
}
