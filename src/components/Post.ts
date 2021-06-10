import { Image } from './Image';
import { PostItem } from '../types/item';

export class Post extends Image {
  constructor(postInfo: PostItem) {
    super({
      ...postInfo,
      url: 'https://musicsseolprise.com/_next/static/images/guitar-50ecaff69e9777ee67ed5b083073bfee.jpg', // 나중에 렌덤으로 바꾸기
    });
  }
}
