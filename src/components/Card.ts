import { Core } from '../util/Core';
import { CARD_INNERHTML } from '../constants/innerHTML';
import { ImageItem, VideoItem, PostItem } from "../types/item";

export class Card extends Core<HTMLElement> {
  constructor(postData: ImageItem | VideoItem | PostItem) {
    super(CARD_INNERHTML);
  }
}
