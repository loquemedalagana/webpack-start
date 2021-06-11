import { Core } from './Core';
import { CARD_DESCRIPTION_INNERHTML } from '../constants/innerHTML';

export class CardDescription extends Core<HTMLElement> {
  constructor(description?: string) {
    super(CARD_DESCRIPTION_INNERHTML);

    const $descriptionElement = this.$element.querySelector('.card-description')! as HTMLElement;
    $descriptionElement.innerText = description || "해당 포스트에는 내용이 없습니다.";
  }
}
