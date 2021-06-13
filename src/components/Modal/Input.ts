import { Core } from "../Core";
import { OnKeyPressListener } from "../../types/eventlistener";
import { InputType } from "../../types/item";
import { INPUT_INNERHTML } from "../../constants/innerHTML";

interface InputComponent {
  inputValue: string;
}

export class Input extends Core<HTMLElement> implements InputComponent {
  inputValue: string;

  constructor(type: InputType, onKeyPress?: OnKeyPressListener) {
    super(INPUT_INNERHTML, 'input');
    const $labelElement = this.$element.querySelector('.input-label') as HTMLLabelElement;
    const $inputElement = this.$element.querySelector('.input')! as HTMLInputElement;
    $labelElement.innerText = type;
    $inputElement.id = type;
    $inputElement.value = "";
    this.inputValue = $inputElement.value;
    $inputElement.addEventListener('change', (e) => {
      // @ts-ignore
      this.inputValue = e.currentTarget.value;
    });
  }
}
