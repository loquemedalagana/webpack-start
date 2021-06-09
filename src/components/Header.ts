import { Core } from '../Core';
import { APP_TITLE_INNTERHTML } from '../constants/innerHTML';

export class Header extends Core {
  $headerWrapper: HTMLElement;
  $headerContainer: HTMLElement;

  constructor() {
    super();
    this.$headerWrapper = document.createElement('header');
    this.$headerContainer = document.createElement('div');
    this.$headerContainer.classList.add('container container-fluid');
    this.$headerContainer.innerHTML = APP_TITLE_INNTERHTML;
    this.$headerWrapper.appendChild(this.$headerContainer);
  }

  createHeader() {

    this.$app.prepend(this.$headerWrapper);
  }
}
