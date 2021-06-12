import { ComponentType, ImageItem, PostItem, PostType, VideoItem } from "../types/item";
import { OnCloseLister } from "../types/eventlistener";
import { Video } from "./Video";
import { Post } from "./Post";
import { Image } from "./Image";

/* interfaces */

export interface Component {
  type?: ComponentType;
  attachTo(parent: HTMLElement, position: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
}

export interface Composable {
  addChildren(children: Component[], id?: string): void;
}

export interface MediaComposable {
  getMediaComponent(postData: ImageItem | VideoItem | PostItem): void;
}

export interface ClosableComponent extends Composable, Component {
  setOnCloseListener(listener: OnCloseLister): void;
}

export interface InteractiveComponent {

}

/* types for dependency injection */

export type MediaComponentConstructor = {
  new (mediaInfo: ImageItem | VideoItem | PostItem): MediaComposable;
}

export type CloseableComponentConstructor = {
  new (id: string): ClosableComponent;
};

export type ClosableHeaderComponentConstructor = {
  new (postData: ImageItem | VideoItem | PostItem, onClose?: OnCloseLister): Component;
}

/* base components */

export class Core<T extends HTMLElement> implements Component {
  protected readonly $element: T; // 자식 클래스에서만 접근 가능
  readonly type: ComponentType;

  constructor(htmlString: string, type?: ComponentType) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.$element = template.content.firstElementChild! as T;
    this.type = type;
  }

  attachTo(parent: HTMLElement, position: InsertPosition) {
    parent.insertAdjacentElement(position, this.$element);
  }

  removeFrom(parent: HTMLElement) {
    if (parent !== this.$element.parentElement) {
      throw new Error('mismatched parentcomponent!');
    }

    parent.removeChild(this.$element);

    if (this.$element.id) {
      localStorage.removeItem(this.$element.id);
    }
  }
}

export class MediaBaseComponent extends Core<HTMLElement> implements MediaComposable {
  constructor(htmlString: string) {
    super(htmlString, 'root');
  }

  getMediaComponent(postData: ImageItem | VideoItem | PostItem) {
    switch (postData.type) {
      case 'video':
        return new Video(postData! as VideoItem);
      case 'post':
        return new Post(postData! as PostItem);
      case 'image':
        return new Image(postData! as ImageItem);
    }
  }
}
