import {
  ClosableComponent,
  ClosableHeaderComponentConstructor,
  CloseableComponentConstructor,
  Component,
  Composable,
  Core,
} from '../Core';
import { Image } from '../Image';
import { Video } from '../Video';
import { Post } from '../Post';
import { PostItem } from '../../types/post';
import { CARDWRAPPER_INNERHTML } from '../../constants/innerHTML';

import { CardDescription } from './CardDescription';

export class CardList extends Core<HTMLElement> implements Composable {
  private postComponentList: Array<ClosableComponent>; // Card component로 통합?

  constructor(
    private cardConstructor: CloseableComponentConstructor,
    private cardHeaderConstructor: ClosableHeaderComponentConstructor,
  ) {
    super(CARDWRAPPER_INNERHTML);
    this.postComponentList = this.getLocalStorageData();

    this.addChildren(this.postComponentList);
  }

  private static getMediaComponent(postData: Partial<PostItem>): Image | Video | Post {
    switch (postData.type) {
      case 'video':
        return new Video(postData);
      case 'post':
        return new Post(postData);
      case 'image':
        return new Image(postData);
    }
  }

  private getLocalStorageData() {
    const POST_LIST_LENGTH = localStorage.length;
    const extractedPostList: Array<ClosableComponent> = [];

    for (let i = 0; i < POST_LIST_LENGTH; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key))! as PostItem;
      const cardComponent = this.makeCardComponent(value);

      if (extractedPostList.includes(cardComponent)) continue;

      extractedPostList.push(cardComponent);
    }

    return extractedPostList;
  }

  private saveInLocalStorage(newElementId: string, postData: Partial<PostItem>) {
    const foundValue = localStorage.getItem(newElementId);
    if (foundValue === null) {
      localStorage.setItem(newElementId, JSON.stringify(postData));
    }
  }

  makeCardComponent(postData: Partial<PostItem>) {
    const onCloseListener = () => cardComponent.removeFrom(this.$element);

    const cardHeaderComponent = new this.cardHeaderConstructor(postData, onCloseListener);
    const mediaComponent = CardList.getMediaComponent(postData);
    const cardDescriptionComponent = new CardDescription(postData.description);
    const newElementId = mediaComponent.getId(postData.url);

    const cardComponent = new this.cardConstructor(newElementId);
    cardComponent.addChildren([cardHeaderComponent, mediaComponent, cardDescriptionComponent]);
    cardComponent.setOnCloseListener(onCloseListener);

    this.saveInLocalStorage(newElementId, postData);

    return cardComponent;
  }

  addChildren(children: Component[]) {
    children.forEach((child) => {
      child.attachTo(this.$element, 'beforeend');
    });
  }
}
