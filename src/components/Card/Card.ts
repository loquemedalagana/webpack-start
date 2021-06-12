import { Component, Composable, Core, ClosableComponent } from "../Core";
import { CARD_INNERHTML } from '../../constants/innerHTML';
import { ComponentType } from "../../types/item";
import { OnCloseLister } from "../../types/eventlistener";
import { CardHeader } from "./CardHeader";

export class Card extends Core<HTMLElement> implements ClosableComponent {
  protected handleClose?: OnCloseLister;

  constructor(id: string) {
    super(CARD_INNERHTML, 'card');
    this.$element.id = id;
  }

  addChildren(children: Component[]) {
    const $root = this.$element.querySelector('.card-root')! as HTMLElement;
    const $container = this.$element.querySelector('.card-body')! as HTMLElement;

    children.forEach(child => {
      if (child.type === 'header') {
        child.attachTo($root, 'afterbegin');
      } else {
        child.attachTo($container, child.type === 'media' ? 'afterbegin' : 'beforeend');
      }
    })
  }

  setOnCloseListener(listener: OnCloseLister) {
    this.handleClose = listener;
  }
}
