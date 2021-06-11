import { v4 as uuidv4 } from 'uuid';
import { Component, Core } from "./Core";
import { Image } from './Image';
import { Video } from './Video';
import { Post } from './Post';
import { ImageItem, PostItem, VideoItem } from '../types/item';
import { CARDWRAPPER_INNERHTML } from '../constants/innerHTML';

import { Card } from './Card';
import { CardHeader } from './CardHeader';
import { CardDescription } from './CardDescription';

export interface Composable {
  addChild(child: Component): void;
}

export class CardList extends Core<HTMLElement> implements Composable {
  private postComponentList: Array<Post | Image | Video>; // Card component로 통합?

  constructor() {
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
    const extractedPostList: Array<Card> = [];

    for (let i = 0; i < POST_LIST_LENGTH; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key))! as ImageItem | VideoItem | PostItem;

      const cardComponent = new Card(value.id);
      const cardHeaderComponent = new CardHeader(value.id, value.title)
      const mediaComponent = this.getMediaComponent(value);
      const cardDescriptionComponent = new CardDescription(value.description);

      cardComponent.addChild(cardHeaderComponent, 'header');
      cardComponent.addChild(mediaComponent, 'media');
      cardComponent.addChild(cardDescriptionComponent, 'description');

      extractedPostList.push(cardComponent);
    }

    return extractedPostList;
  }

  addChild(child: Component) {
    // ..?? 구현체를 쓰자!!!
  }
}
