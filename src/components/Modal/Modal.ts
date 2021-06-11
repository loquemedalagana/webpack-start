import { ClosableComponent, Core, Component } from '../Core';
import { OnCloseLister } from '../../types/eventlistener';
import { ComponentType } from '../../types/item';
import { MODAL_INNERHTML } from '../../constants/innerHTML';

export class Modal extends Core<HTMLElement> implements ClosableComponent {
  protected handleClose?: OnCloseLister;
  private $modalRoot: HTMLElement;

  constructor() {
    super(MODAL_INNERHTML);
    this.$modalRoot = this.$element.querySelector('.modal-container')! as HTMLElement;
  }

  addChild(child: Component, type?: ComponentType) {
    child.attachTo(this.$modalRoot, type === 'header' ? 'afterbegin' : 'beforeend');
  }

  setOnCloseListener(listener: OnCloseLister) {
    this.handleClose = listener;
  }
}
