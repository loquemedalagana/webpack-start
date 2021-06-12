import { Component, Composable, Core, ClosableComponent } from "../Core";
import { CARD_INNERHTML } from '../../constants/innerHTML';
import { ComponentType } from "../../types/item";
import { OnCloseLister } from "../../types/eventlistener";

export class Card extends Core<HTMLElement> implements ClosableComponent {
  protected handleClose?: OnCloseLister;

  constructor(id: string) {
    super(CARD_INNERHTML);
    this.$element.id = id;
  }

  addChild(child: Component, type?: ComponentType) {
    // 참고: Core.ts
    const $root = this.$element.querySelector('.card-root')! as HTMLElement;
    const $container = this.$element.querySelector('.card-body')! as HTMLElement;

    if (type === 'header') {
      child.attachTo($root, 'afterbegin');
    } else {
      child.attachTo($container, type === 'media' ? 'afterbegin' : 'beforeend');
    }
  }

  setOnCloseListener(listener: OnCloseLister) {
    this.handleClose = listener;
  }
}
