import { Core } from './Core';
import { MediaComponent, PostItem } from '../types/post';
import { IMAGE_INNERHTML } from '../constants/innerHTML';

export class Image extends Core<HTMLElement | HTMLImageElement> implements MediaComponent {
  constructor(imageInfo: Partial<PostItem>) {
    super(IMAGE_INNERHTML, 'media');

    const $imageElement = this.$element.querySelector('.image')! as HTMLImageElement;

    $imageElement.src = imageInfo.url;
    $imageElement.alt = imageInfo.title;
  }

  getId(url: string): string {
    throw new Error('in this component id should be created before');
  }
}
