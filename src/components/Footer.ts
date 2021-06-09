import { COPYRIGHT_INNERHTML } from "../constants/innerHTML";

export class Footer {
  private $element: HTMLElement;

  constructor() {
    this.$element = document.createElement('footer');
    this.$element.innerHTML = COPYRIGHT_INNERHTML;
  }

  attachFooter(parent: HTMLElement, position: InsertPosition = 'beforeend') {
    parent.insertAdjacentElement(position, this.$element);
  }
}
