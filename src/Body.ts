import { CardList } from './components/Card/CardList';

export class Body {
  private $element: HTMLElement;
  private $cardList: CardList;

  constructor(cardList: CardList) {
    this.$element = document.querySelector('main');
    this.$cardList = cardList;
    this.$element.setAttribute('class', 'container');
    this.$cardList.attachTo(this.$element, 'afterbegin');
  }
}
