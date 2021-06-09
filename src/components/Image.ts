import { ImageItem } from '../types/item';
import { IMAGE_THUMBNAIL_INNERHTML } from '../constants/innerHTML';

export class Image {
  private $element: HTMLImageElement | HTMLElement;

  constructor(imageInfo: ImageItem) {
    this.$element = document.createElement('template');
    this.$element.innerHTML = IMAGE_THUMBNAIL_INNERHTML(imageInfo);
  }

  addImage(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.$element);
  }
}
