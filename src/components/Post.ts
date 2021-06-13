import { Image } from './Image';
import { PostItem } from '../types/post';
import { randomImages, IMAGE_COUNT } from "../constants/images";

export class Post extends Image {
  constructor(postInfo: PostItem) {
    super({
      ...postInfo,
      url: randomImages[Math.floor(Math.random() * IMAGE_COUNT)], // 나중에 렌덤으로 바꾸기
    });
  }
}
