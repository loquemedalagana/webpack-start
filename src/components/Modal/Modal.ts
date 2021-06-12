import { Core, Component, InteractiveComponent } from "../Core";
import { OnCloseLister, OnSubmitListener } from "../../types/eventlistener";
import { MODAL_INNERHTML } from '../../constants/innerHTML';

export class Modal extends Core<HTMLElement> implements InteractiveComponent {
  protected handleClose?: OnCloseLister;
  protected handleSubmit?: OnSubmitListener;
  private $modalRoot: HTMLElement;

  constructor() {
    super(MODAL_INNERHTML);
    this.$modalRoot = this.$element.querySelector('.modal-container')! as HTMLElement;
  }

  addChildren(children: Component[]) {
    const $root = this.$element.querySelector('.modal-root')! as HTMLElement;
    const $body = this.$element.querySelector('.card-body')! as HTMLElement;

    children.forEach((child) => {
      const { type } = child;
      if (type === 'header') {
        child.attachTo($root, 'afterbegin');
      } else if(type === 'footer') {
        child.attachTo($root, 'beforeend');
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
