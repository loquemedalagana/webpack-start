import { ComponentType, ImageItem, PostItem, PostType, VideoItem } from "../types/item";
import { OnCloseLister } from "../types/eventlistener";

export interface Component {
  type?: ComponentType;
  attachTo(parent: HTMLElement, position: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
}

export interface Composable {
  addChild(child: Component, type?: ComponentType): void;
}

export interface ClosableComponent extends Composable, Component {
  setOnCloseListener(listener: OnCloseLister): void;
}

export interface InteractiveComponent {

}

export type CloseableComponentConstructor = {
  new (id: string): ClosableComponent;
};

export type ClosableHeaderComponentConstructor = {
  new (postData: ImageItem | VideoItem | PostItem, onClose?: OnCloseLister): Component;
}

export class Core<T extends HTMLElement> implements Component {
  protected readonly $element: T; // 자식 클래스에서만 접근 가능
  readonly type?: ComponentType;

  constructor(htmlString: string, type?: ComponentType) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    // console.log(htmlString);
    this.$element = template.content.firstElementChild! as T;
    // console.log(this.$element);
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
