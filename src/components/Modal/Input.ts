import { Core } from "../Core";
import { OnKeyPressListener } from "../../types/eventlistener";
import { InputType } from "../../types/item";

export class Input extends Core<HTMLElement>{
  constructor(id: InputType, onKeyPress: OnKeyPressListener) {
    super(`
      <section>
        <input>      
      </section>
    `);

    const $inputElement = this.$element.querySelector('.input')! as HTMLInputElement;
    $inputElement.id = id;
    $inputElement.addEventListener('', onKeyPress);
  }
}
