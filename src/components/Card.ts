import { Component, Core } from './Core';
import { CARD_INNERHTML } from '../constants/innerHTML';
import { Composable } from './CardList';

export class Card extends Core<HTMLElement> implements Composable {
  constructor(id: string) {
    super(CARD_INNERHTML);
    this.$element.id = id;
  }

  addChild(child: Component, type?: 'media' | 'description' | 'header') {
    // 참고: Core.ts
    const $root = this.$element.querySelector('.card-root')! as HTMLElement;
    const $container = this.$element.querySelector('.card-body')! as HTMLElement;

    if (type === 'header') {
      child.attachTo($root, 'afterbegin');
    } else {
      child.attachTo($container, type === 'media' ? 'afterbegin' : 'beforeend');
    }
  }
}
