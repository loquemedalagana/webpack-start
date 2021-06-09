import { ImageItem } from '../types/item';

export class Image {
  private $element: HTMLImageElement | HTMLElement;

  constructor(imageInfo: ImageItem) {
    this.$element = document.createElement('image');
    this.$element.setAttribute('alt', imageInfo.title);
    this.$element.setAttribute(`id`, `image-${imageInfo.id}`);
    this.$element.setAttribute('src', imageInfo.url);
  }

  addImage(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.$element);
  }
}
