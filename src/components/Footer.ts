import { Core } from "../Core";
import { COPYRIGHT_INNERHTML } from "../constants/innerHTML";

export class Footer extends Core {
  $footerWrapper: HTMLElement;
  constructor() {
    super();
    this.$footerWrapper = document.createElement('footer');
    this.$footerWrapper.innerHTML = COPYRIGHT_INNERHTML;
  }

  createFooter() {
    this.$app.appendChild(this.$footerWrapper);
  }
}
