import { Composable, Core, Component } from "../Core";
import { MODAL_FORM_INNERHTML } from "../../constants/innerHTML";

export class ModalForm extends Core<HTMLElement> implements Composable {
  constructor() {
    super(MODAL_FORM_INNERHTML, 'form');
  }

  addChildren(children: Component[]) {
    children.forEach(child => {
      child.attachTo(this.$element, 'beforeend');
    })
  }
}
