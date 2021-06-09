import { Navigation } from "./Navigation";
import { APP_TITLE_INNTERHTML } from '../constants/innerHTML';

export class Header {
  private $element: HTMLElement;
  private $headerContainer: HTMLElement;
  private $navigation: Navigation;

  constructor() {
    this.$element = document.createElement('header');
    this.$headerContainer = document.createElement('div');
    this.$navigation = new Navigation();

    // setAttribute vs classlist.add 차이점
    this.$element.setAttribute('class', 'appbar appbar-main-color')
    this.$headerContainer.setAttribute('class', 'container container-fluid');
    this.$headerContainer.innerHTML = APP_TITLE_INNTERHTML;
    this.$navigation.attachNavigation(this.$headerContainer);
    this.$element.appendChild(this.$headerContainer);
  }

  attachHeader(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.$element);
  }
}
