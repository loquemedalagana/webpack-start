import { Core } from './Core';
import { COPYRIGHT_INNERHTML, FOOTER_INNERHTML } from '../constants/innerHTML';

export class Footer extends Core<HTMLElement>{
  constructor() {
    super(FOOTER_INNERHTML);
    this.$element.innerHTML = COPYRIGHT_INNERHTML;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'beforeend') {
    parent.insertAdjacentElement(position, this.$element);
  }
}
