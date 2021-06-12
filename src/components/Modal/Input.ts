import { Core } from "../Core";
import { OnKeyPressListener } from "../../types/eventlistener";
import { InputType } from "../../types/item";
import { INPUT_INNERHTML } from "../../constants/innerHTML";

export class Input extends Core<HTMLElement>{
  constructor(id: InputType, onKeyPress: OnKeyPressListener) {
    super(INPUT_INNERHTML, 'input');

    const $inputElement = this.$element.querySelector('.input')! as HTMLInputElement;
    $inputElement.id = id;
    $inputElement.addEventListener('', onKeyPress);
  }
}
