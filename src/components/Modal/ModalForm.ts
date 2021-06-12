import { Composable, Core, Component } from "../Core";
import { OnSubmitListener } from "../../types/eventlistener";

export class ModalForm extends Core<HTMLFormElement> implements Composable {
  constructor(onSubmit?: OnSubmitListener) {
    super(`
      <form>
      </form>
    `);

    const $firstInputWrapper = this.$element.firstElementChild! as HTMLElement;
    const $firstInput = $firstInputWrapper.querySelector('input') as HTMLInputElement;
    $firstInput.focus();
  }

  addChildren(children: Component[]) {
    children.forEach(child => {
      child.attachTo(this.$element, 'beforeend');
    })
  }
}
