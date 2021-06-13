import { CardList } from './components/Card/CardList';
import { Card } from './components/Card/Card';
import { CardHeader } from './components/Card/CardHeader';

export class Body {
  private $element: HTMLElement;
  private $cardList: CardList;

  constructor() {
    this.$element = document.querySelector('main');
    this.$cardList = new CardList(Card, CardHeader);
    this.$element.setAttribute('class', 'container');
    this.$cardList.attachTo(this.$element, 'afterbegin');
  }
}
