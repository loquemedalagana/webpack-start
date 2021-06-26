import { CardList } from './components/Card/CardList';

export class Body {
  private $element: HTMLElement;
  private $cardList: CardList;

  constructor(private readonly cardList: CardList) {
    this.$element = document.querySelector('main');
    this.$cardList = cardList;
    this.$cardList.attachTo(this.$element, 'afterbegin');
  }
}
