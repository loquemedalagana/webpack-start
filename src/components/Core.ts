import { ComponentType } from "../types/item";

export interface Component {
  attachTo(parent: HTMLElement, position: InsertPosition): void;
}

export interface Composable {
  addChild(child: Component, id?: string, type?: ComponentType): void;
}

export class Core<T extends HTMLElement> {
  protected readonly $element: T; // 자식 클래스에서만 접근 가능

  constructor(htmlString: string) {
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
