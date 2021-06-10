import { Core } from '../util/Core';
import { VideoItem } from '../types/item';
import { VIDEO_INNERHTML } from '../constants/innerHTML';

export class Video extends Core<HTMLIFrameElement | HTMLElement>{
  constructor(videoInfo: VideoItem) {
    super(VIDEO_INNERHTML);

    const $videoElement = this.$element.querySelector('video-player')! as HTMLElement; // changed to iframe element
    $videoElement.innerText = videoInfo.videoId;

    const $descriptionElement = this.$element.querySelector('.card-description')! as HTMLElement;
    $descriptionElement.innerText = videoInfo.description;

  }
}
