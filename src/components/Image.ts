import { ImageItem } from '../types/item';
import { IMAGE_THUMBNAIL_INNERHTML } from '../constants/innerHTML';

export class Image {
  private $element: HTMLImageElement | HTMLElement;

  constructor(imageInfo: ImageItem) {
    this.$element = document.createElement('template');
    this.$element.innerHTML = IMAGE_THUMBNAIL_INNERHTML;

    const $imageElement = this.$element.querySelector('img')! as HTMLImageElement;
    $imageElement.src = imageInfo.url;
    $imageElement.alt = imageInfo.title;

    const $descriptionElement = this.$element.querySelector('p')! as HTMLElement;
    $descriptionElement.innerText = imageInfo.description;
  }

  addImage(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.$element);
  }
}
