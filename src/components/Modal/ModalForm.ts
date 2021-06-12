import { Composable, Core, Component } from "../Core";
import { OnSubmitListener } from "../../types/eventlistener";
import { MODAL_FORM_INNERHTML } from "../../constants/innerHTML";

export class ModalForm extends Core<HTMLElement> implements Composable {
  constructor(onSubmit?: OnSubmitListener) {
    super(MODAL_FORM_INNERHTML, 'form');

    const $firstInputWrapper = this.$element.firstElementChild! as HTMLElement;
    // const $firstInput = $firstInputWrapper.querySelector('input') as HTMLInputElement;
    // $firstInput.focus();
  }

  addChildren(children: Component[]) {
    children.forEach(child => {
      child.attachTo(this.$element, 'beforeend');
    })
  }
}
