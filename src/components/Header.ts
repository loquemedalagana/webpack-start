import { Navigation } from "./Navigation";
import { APP_TITLE_INNTERHTML } from '../constants/innerHTML';

export class Header {
  private $element: HTMLElement;
  private $headerContainer: HTMLElement;
  private $navigation: Navigation;

  constructor() {
    this.$element = document.createElement('header');
    this.$element.setAttribute('class', 'appbar appbar-main-color');

    this.$headerContainer = document.createElement('div');
    this.$navigation = new Navigation();

    // setAttribute vs classlist.add 차이점

    this.$headerContainer.setAttribute('class', 'container container-fluid');
    this.$headerContainer.innerHTML = APP_TITLE_INNTERHTML;
    this.$navigation.attachTo(this.$headerContainer, "beforeend");
    this.$element.appendChild(this.$headerContainer);
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.$element);
  }
}
