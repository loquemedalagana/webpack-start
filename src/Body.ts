import { CardList } from './components/CardList';

export class Body {
  private $element: HTMLElement;
  private $cardWrapper: CardList;

  constructor() {
    this.$element = document.querySelector('main');
    this.$cardWrapper = new CardList();
    this.$element.setAttribute('class', 'container');
    this.$cardWrapper.attachTo(this.$element);
  }
}
