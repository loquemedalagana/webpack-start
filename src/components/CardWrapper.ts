import { v4 as uuidv4 } from 'uuid';
import { Core } from '../util/Core';
import { Image } from './Image';
import { CARDWRAPPER_INNERHTML } from '../constants/innerHTML';

export class CardWrapper extends Core<HTMLElement>{
  constructor() {
    super(CARDWRAPPER_INNERHTML);

    const imageTest = new Image({
      id: uuidv4(),
      url: 'https://yt3.ggpht.com/ytc/AAUvwniV3e0j1NQbR2l1RW5C01DNjglP_gjnHuPz8JHM=s800-c-k-c0x00ffffff-no-rj',
      title: 'Jeon Inhyuk Band',
      description: 'Jeon Inhyuk band official image',
    });

    imageTest.attachTo(this.$element, 'afterbegin');
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.$element);
  }

  // add image item

  // add video item

  // add post item
}
