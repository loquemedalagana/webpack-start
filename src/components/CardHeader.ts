import { Core } from '../util/Core';
import { CARD_HEADER_INNERHTML } from '../constants/innerHTML';

export class CardHeader extends Core<HTMLElement> {
  constructor(id: string, title?: string) {
    super(CARD_HEADER_INNERHTML);
    const $cardTitle = this.$element.querySelector('.card-title')! as HTMLHeadingElement;
    const $closeButton = this.$element.querySelector('.card-close-button')! as HTMLButtonElement;
    $cardTitle.innerText = title || "제목 없음";
  }
}
