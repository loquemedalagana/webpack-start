import { Core } from './Core';
import { Card } from './Card';
import { CARD_HEADER_INNERHTML } from '../constants/innerHTML';
import { OnCloseLister } from '../types/eventlistener';
import { ImageItem, PostItem, VideoItem } from '../types/item';

export class CardHeader extends Core<HTMLElement> {
  private handleClose?: OnCloseLister;

  constructor(postData: ImageItem | VideoItem | PostItem) {
    const { title } = postData;
    super(CARD_HEADER_INNERHTML);
    const $cardTitle = this.$element.querySelector('.card-title')! as HTMLHeadingElement;
    const $closeButton = this.$element.querySelector('.card-close-button')! as HTMLButtonElement;
    $cardTitle.innerText = title || '제목 없음';

    $closeButton.onclick = () => {
      this.handleClose && this.handleClose();
    };

    console.log(this.$element);
  }

  setOnCloseLister(listener: OnCloseLister) {
    this.handleClose = listener;
  }
}
