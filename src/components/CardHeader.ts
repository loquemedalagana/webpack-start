import { Core } from './Core';
import { CARD_HEADER_INNERHTML } from '../constants/innerHTML'
import { ImageItem, PostItem, VideoItem } from '../types/item';
import { OnCloseLister } from "../types/eventlistener";

export class CardHeader extends Core<HTMLElement> {
  constructor(postData: ImageItem | VideoItem | PostItem, onClose?: OnCloseLister) {
    super(CARD_HEADER_INNERHTML);
    const { title } = postData;

    const $cardTitle = this.$element.querySelector('.card-title')! as HTMLHeadingElement;
    const $closeButton = this.$element.querySelector('.card-close-button')! as HTMLButtonElement;
    $cardTitle.innerText = title || '제목 없음';

    $closeButton.onclick = () => {
      onClose && onClose();
    };
  }
}
