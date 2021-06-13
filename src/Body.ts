import { CardList } from './components/Card/CardList';
import { Card } from './components/Card/Card';
import { CardHeader } from './components/Card/CardHeader';
import { ModalRoot } from "./components/Modal/ModalRoot";

export class Body {
  private $element: HTMLElement;
  private $cardList: CardList;

  constructor(modalRoot: ModalRoot) {
    this.$element = document.querySelector('main');
    this.$cardList = new CardList(Card, CardHeader);
    this.$element.setAttribute('class', 'container');
    this.$cardList.attachTo(this.$element, 'afterbegin');
  }
}
