import { v4 as uuidv4 } from 'uuid';
import { Image } from './Image';

export class CardWrapper {
  private $element: HTMLElement;

  constructor() {
    this.$element = document.createElement('div');
    this.$element.setAttribute('id', 'card-list-wrapper');
    this.$element.setAttribute('class', 'container container-fluid');
    const imageTest = new Image({
      id: uuidv4(),
      url: "https://yt3.ggpht.com/ytc/AAUvwniV3e0j1NQbR2l1RW5C01DNjglP_gjnHuPz8JHM=s800-c-k-c0x00ffffff-no-rj",
      title: "Jeon Inhyuk Band",
      description: "Jeon Inhyuk band official image",
    });

    imageTest.attachTo(this.$element);
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.$element);
  }

  // add image item

  // add video item

  // add post item
}
