import { ComponentType, PostItem } from "../types/post";
import { OnCloseLister } from '../types/eventlistener';
import { ModalRoot } from './Modal/ModalRoot';

export interface Component {
  type?: ComponentType;
  attachTo(parent: HTMLElement, position: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
}

export interface Composable {
  addChildren(children: Component[], postData?: PostItem): void;
}

export interface MediaComponent {
  getId(url?: string): string;
}

export interface ClosableComponent extends Composable, Component {
  setOnCloseListener(listener: OnCloseLister): void;
}

export interface InteractiveComponent extends ClosableComponent {
  $form?: HTMLFormElement;
  setOnSubmitListener(listener: OnCloseLister): void;
}

export interface ModalControllable {
  modalRootComponent: ModalRoot;
}

export type CloseableComponentConstructor = {
  new (id: string): ClosableComponent;
};

export type ClosableHeaderComponentConstructor = {
  new (data: PostItem | string, onClose?: OnCloseLister): Component;
};

export type InteractiveComponentConstructor = {
  new (postData?: PostItem): InteractiveComponent;
};

// media component와 통합?
export type ModalControllableComponentConstructor = {
  new (modalRoot: ModalRoot): ModalControllable;
};

export class Core<T extends HTMLElement> implements Component {
  protected readonly $element: T; // 자식 클래스에서만 접근 가능
  readonly type?: ComponentType;

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
