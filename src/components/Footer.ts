import { Core } from "../Core";
import { COPYRIGHT_INNERHTML } from '../constants/texts';

export class Footer extends Core {
  $footerWrapper: HTMLElement;
  constructor() {
    super();
    this.$footerWrapper = document.createElement('footer');
    this.$footerWrapper.innerHTML = COPYRIGHT_INNERHTML;
    this.$footerWrapper.classList.add('container', 'container-fluid');
  }

  createFooter() {
    this.$app.appendChild(this.$footerWrapper);
  }
}
