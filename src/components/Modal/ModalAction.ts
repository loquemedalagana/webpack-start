import { Core } from "../Core";
import { MODAL_ACTION_INNERHTML } from "../../constants/innerHTML";
import { OnSubmitListener } from "../../types/eventlistener";

export class ModalAction extends Core<HTMLElement> {
  constructor(onSubmit?: OnSubmitListener) {
    super(MODAL_ACTION_INNERHTML, 'footer');
    const $submitButton = this.$element.querySelector('.modal-action-button')! as HTMLButtonElement;
    $submitButton.innerText = 'add';

    $submitButton.addEventListener('click', () => {
      onSubmit && onSubmit();
    });
  }
}
