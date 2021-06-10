import { v4 as uuidv4 } from 'uuid';
import { Core } from '../util/Core';
import { Image } from './Image';
import { Video } from './Video';
import { Post } from './Post';
import { ImageItem, PostItem, VideoItem } from '../types/item';
import { CARDWRAPPER_INNERHTML } from '../constants/innerHTML';

export class CardList extends Core<HTMLElement> {
  private postComponentList: Array<Post | Image | Video>; // PostComponent, ImageComponent, VideoComponent

  constructor() {
    super(CARDWRAPPER_INNERHTML);
    this.postComponentList = this.getLocalStorageData();
    console.log(this.postComponentList);

    this.postComponentList.forEach(component => {
      component.attachTo(this.$element, "beforeend");
    })
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.$element);
  }

  private getLocalStorageData() {
    const POST_LIST_LENGTH = localStorage.length;
    const extractedPostList: Array<Post | Image | Video> = [];

    for (let i = 0; i < POST_LIST_LENGTH; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key))! as ImageItem | VideoItem | PostItem;

      switch (value.type) {
        case "video":
          extractedPostList.push(new Video(value! as VideoItem));
          break;
        case "post":
          extractedPostList.push(new Post(value! as PostItem));
          break;
        case "image":
          extractedPostList.push(new Image(value! as ImageItem));
          break;
      }
    }

    return extractedPostList;
  }
}
