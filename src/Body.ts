import { CardWrapper } from './components/CardWrapper';

export class Body {
  private $element: HTMLElement;
  private $cardWrapper: CardWrapper;

  constructor() {
    this.$element = document.querySelector('main');
    this.$cardWrapper = new CardWrapper();
    this.$element.setAttribute('class', 'container');
    this.$cardWrapper.attachTo(this.$element);
  }
}
