import {
  ClosableComponent,
  CloseableComponentConstructor,
  Component,
  Composable,
  Core
} from "./Core";
import { Image } from "./Image";
import { Video } from "./Video";
import { Post } from "./Post";
import { ImageItem, PostItem, VideoItem } from "../types/item";
import { CARDWRAPPER_INNERHTML } from "../constants/innerHTML";

import { Card } from "./Card";
import { CardHeader } from "./CardHeader";
import { CardDescription } from "./CardDescription";

export class CardList extends Core<HTMLElement> implements Composable {
  private postComponentList: Array<ClosableComponent>; // Card component로 통합?

  constructor(private cardConstructor: CloseableComponentConstructor) {
    super(CARDWRAPPER_INNERHTML);
    this.postComponentList = this.getLocalStorageData();

    this.postComponentList.forEach((component) => {
      component.attachTo(this.$element, 'beforeend');
    });
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.$element);
  }

  private getMediaComponent(postData: ImageItem | VideoItem | PostItem): Image | Video | Post {
    switch (postData.type) {
      case 'video':
        return new Video(postData! as VideoItem);
      case 'post':
        return new Post(postData! as PostItem);
      case 'image':
        return new Image(postData! as ImageItem);
    }
  }

  private getLocalStorageData() {
    const POST_LIST_LENGTH = localStorage.length;
    const extractedPostList: Array<ClosableComponent> = [];

    for (let i = 0; i < POST_LIST_LENGTH; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key))! as ImageItem | VideoItem | PostItem;

      const cardComponent = new this.cardConstructor(value.id);
      const cardHeaderComponent = new CardHeader(value);
      const mediaComponent = this.getMediaComponent(value);
      const cardDescriptionComponent = new CardDescription(value.description);
      const onCloseListener = () => cardComponent.removeFrom(this.$element);

      cardComponent.addChild(cardHeaderComponent, 'card-header');
      cardComponent.addChild(mediaComponent, 'card-media');
      cardComponent.addChild(cardDescriptionComponent, 'card-description');

      cardComponent.setOnCloseListener(onCloseListener);

      extractedPostList.push(cardComponent);
    }

    return extractedPostList;
  }

  addChild(child: Component, id: string) {
    const cardComponent = new Card(id);

  }
}
