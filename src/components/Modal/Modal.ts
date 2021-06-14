import { Core, Component, InteractiveComponent } from "../Core";
import { OnCloseLister, OnSubmitListener } from "../../types/eventlistener";
import { MODAL_INNERHTML } from '../../constants/innerHTML';

export class Modal extends Core<HTMLElement> implements InteractiveComponent {
  protected handleClose?: OnCloseLister;
  protected handleSubmit?: OnSubmitListener;
  private $modalContainer: HTMLElement;
  $form: HTMLFormElement;

  constructor() {
    super(MODAL_INNERHTML);
    this.$modalContainer = this.$element.querySelector('.modal-container')! as HTMLElement;
    this.$modalContainer.classList.remove('hidden');
    this.$form =  this.$element.querySelector('.modal-form')! as HTMLFormElement;

    this.$element.onclick = () => {
      this.handleClose && this.handleClose();
    }
  }

  addChildren(children: Component[]) {
    const $root = this.$element.querySelector('.modal-container')! as HTMLElement;
    const $body = this.$element.querySelector('.card-body')! as HTMLElement;

    children.forEach((child) => {
      const { type } = child;
      if (type === 'header') {
        child.attachTo($root, 'afterbegin');
      } else if(type === 'footer') {
        child.attachTo(this.$form, 'beforeend');
      } else if(type === 'form') {
        child.attachTo(this.$form, 'afterbegin');
      } else {
        child.attachTo($body, 'beforeend');
      }
    });
  }

  setOnCloseListener(listener: OnCloseLister) {
    this.handleClose = listener;
  }

  setOnSubmitListener(listener: OnSubmitListener) {
    this.handleSubmit = listener;
  }
}
