import { Component, Composable, Core } from "./Core";
import { CARD_INNERHTML } from '../constants/innerHTML';
import { ComponentType } from "../types/item";

export class Card extends Core<HTMLElement> implements Composable {
  constructor(id: string) {
    super(CARD_INNERHTML);
    this.$element.id = id;
  }

  addChild(child: Component, type?: ComponentType) {
    // 참고: Core.ts
    const $root = this.$element.querySelector('.card-root')! as HTMLElement;
    const $container = this.$element.querySelector('.card-body')! as HTMLElement;

    if (type === 'card-header') {
      child.attachTo($root, 'afterbegin');
    } else {
      child.attachTo($container, type === 'card-media' ? 'afterbegin' : 'beforeend');
    }
  }
}
