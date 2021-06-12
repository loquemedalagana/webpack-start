import { Core } from '../Core';
import { MODAL_HEADER_INNERHTML } from '../../constants/innerHTML';
import { OnCloseLister } from '../../types/eventlistener';
import { PostType } from '../../types/item';

export class ModalHeader extends Core<HTMLElement> {
  constructor(title: PostType | string, onClose: OnCloseLister) {
    super(MODAL_HEADER_INNERHTML, 'header');

    const $modalTitle = this.$element.querySelector('.modal-title')! as HTMLHeadingElement;
    const $closeButton = this.$element.querySelector('.modal-close-button')! as HTMLButtonElement;
    $modalTitle.innerText = title || '제목 없음';

    $closeButton.onclick = () => {
      onClose && onClose();
    };
  }
}
