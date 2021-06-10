import { Core } from '../util/Core';
import { ImageItem } from '../types/item';
import { IMAGE_INNERHTML } from '../constants/innerHTML';

export class Image extends Core<HTMLElement | HTMLImageElement> {
  constructor(imageInfo: ImageItem) {
    super(IMAGE_INNERHTML);

    const $imageElement = this.$element.querySelector('.image')! as HTMLImageElement;

    $imageElement.src = imageInfo.url;
    $imageElement.alt = imageInfo.title;
  }

}
