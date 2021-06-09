import { ImageItem } from '../types/item';
import { IMAGE_THUMBNAIL_INNERHTML } from '../constants/innerHTML';

export class Image {
  private $element: HTMLImageElement | HTMLElement;

  constructor(imageInfo: ImageItem) {
    const template = document.createElement('template');
    template.innerHTML = IMAGE_THUMBNAIL_INNERHTML;

    this.$element = template.content.firstElementChild! as HTMLElement;

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
