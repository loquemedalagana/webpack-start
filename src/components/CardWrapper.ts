export class CardWrapper {
  private $element: HTMLElement;

  constructor() {
    this.$element = document.createElement('section');
    this.$element.setAttribute('id', 'card-list-wrapper');
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.$element);
  }

  // add image item

  // add video item

  // add post item
}
