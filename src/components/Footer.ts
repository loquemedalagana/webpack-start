import { Body } from "../Body";
import { COPYRIGHT_INNERHTML } from "../constants/innerHTML";

export class Footer extends Body {
  private $footerWrapper: HTMLElement;

  constructor() {
    super();
    this.$footerWrapper = document.createElement('footer');
    this.$footerWrapper.innerHTML = COPYRIGHT_INNERHTML;
  }

  createFooter(parent: HTMLElement, position: InsertPosition = 'beforeend') {
    parent.insertAdjacentElement(position, this.$footerWrapper);
  }
}
