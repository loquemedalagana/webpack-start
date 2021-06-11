import { CardList } from './components/CardList';
import { Card } from './components/Card';

export class Body {
  private $element: HTMLElement;
  private $cardWrapper: CardList;

  constructor() {
    this.$element = document.querySelector('main');
    this.$cardWrapper = new CardList(Card);
    this.$element.setAttribute('class', 'container');
    this.$cardWrapper.attachTo(this.$element);
  }
}
