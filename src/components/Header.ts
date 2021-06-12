import { Core, ModalControllable } from "./Core";
import { Navigation } from './Navigation';
import { APP_TITLE_INNTERHTML, HEADER_INNERHTML } from '../constants/innerHTML';
import { ModalRoot } from "./Modal/ModalRoot";

export class Header extends Core<HTMLElement> implements ModalControllable{
  private $headerContainer: HTMLElement;
  private $navigation: Navigation;

  constructor(modalRoot: ModalRoot) {
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
