import { Core } from '../Core';
import { CARD_HEADER_INNERHTML } from '../../constants/innerHTML'
import { PostItem } from "../../types/post";
import { OnCloseLister } from "../../types/eventlistener";

export class CardHeader extends Core<HTMLElement> {
  constructor(postData: Partial<PostItem>, onClose?: OnCloseLister) {
    super(CARD_HEADER_INNERHTML, 'header');
    const { title } = postData;

    const $cardTitle = this.$element.querySelector('.card-title')! as HTMLHeadingElement;
    const $closeButton = this.$element.querySelector('.close-button')! as HTMLButtonElement;
    $cardTitle.innerText = title || '제목 없음';

    $closeButton.onclick = () => {
      onClose && onClose();
    };
  }
}
