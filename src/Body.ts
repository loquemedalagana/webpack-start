import { CardList } from './components/Card/CardList';
import { Card } from './components/Card/Card';
import { CardHeader } from './components/Card/CardHeader';
import { ModalControllable } from "./components/Core";
import { ModalRoot } from "./components/Modal/ModalRoot";

export class Body implements ModalControllable {
  private $element: HTMLElement;
  private $cardWrapper: CardList;

  constructor(modalRoot: ModalRoot) {
    this.$element = document.querySelector('main');
    this.$cardWrapper = new CardList(Card, CardHeader);
    this.$element.setAttribute('class', 'container');
    this.$cardWrapper.attachTo(this.$element, 'afterbegin');
  }
}
