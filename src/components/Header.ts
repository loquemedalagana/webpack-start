import { Core } from './Core';
import { Navigation } from './Navigation';
import { APP_TITLE_INNTERHTML, HEADER_INNERHTML } from '../constants/innerHTML';

export class Header extends Core<HTMLElement>{
  private $headerContainer: HTMLElement;
  private $navigation: Navigation;

  constructor() {
    super(HEADER_INNERHTML);

    this.$headerContainer = document.createElement('div');
    this.$navigation = new Navigation();

    // setAttribute vs classlist.add 차이점

    this.$headerContainer.setAttribute('class', 'container container-fluid');
    this.$headerContainer.innerHTML = APP_TITLE_INNTERHTML;
    this.$navigation.attachTo(this.$headerContainer, 'beforeend');
    this.$element.appendChild(this.$headerContainer);
  }
}
