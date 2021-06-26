import { Core } from "../Core";
import { OnKeyPressListener } from "../../types/eventlistener";
import { InputType } from "../../types/post";
import { INPUT_INNERHTML } from "../../constants/innerHTML";

interface InputComponent {
  inputValue: string;
  inputType: InputType;
}

export class Input extends Core<HTMLElement> implements InputComponent {
  inputValue: string;
  inputType: InputType;
  private $inputElement: HTMLInputElement;

  constructor(type: InputType, onKeyPress?: OnKeyPressListener) {
    super(INPUT_INNERHTML, 'input');
    const $labelElement = this.$element.querySelector('.input-label') as HTMLLabelElement;
    this.$inputElement = this.$element.querySelector('.input')! as HTMLInputElement;
    $labelElement.innerText = type;
    this.$inputElement.id = type;
    this.inputType = type;
  }

  get getInputValue(): string {
    return this.$inputElement.value;
  }
}
