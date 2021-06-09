import { COPYRIGHT_INNERHTML } from "../constants/innerHTML";

export class Footer {
  private $footerWrapper: HTMLElement;

  constructor() {
    this.$footerWrapper = document.createElement('footer');
    this.$footerWrapper.innerHTML = COPYRIGHT_INNERHTML;
  }

  attachFooter(parent: HTMLElement, position: InsertPosition = 'beforeend') {
    parent.insertAdjacentElement(position, this.$footerWrapper);
  }
}
