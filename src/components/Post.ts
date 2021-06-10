import { Image } from './Image';
import { PostItem } from '../types/item';

export class Post extends Image {
  constructor(postInfo: PostItem) {
    super({
      ...postInfo,
      url: 'random image url',
    });
  }
}
