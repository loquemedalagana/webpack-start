import { Core, MediaComponent } from "./Core";
import { VideoItem } from '../types/post';
import { VIDEO_INNERHTML } from '../constants/innerHTML';
import { youtubeRegExp } from '../constants/regExp';

export class Video extends Core<HTMLIFrameElement | HTMLElement> implements MediaComponent {
  videoURL: string;

  constructor(videoInfo: VideoItem) {
    super(VIDEO_INNERHTML, 'media');
    this.videoURL = this.convertToEmbeddedURL(videoInfo.url);

    const $videoElement = this.$element.querySelector('.video-player')! as HTMLIFrameElement;
    $videoElement.src = this.videoURL;
  }

  getId (url: string): string {
    const defaultVideoId = 'OSXOC45wDRA';
    const match = url.match(youtubeRegExp);
    const videoId = match ? match[1] || match[2] : undefined;
    return videoId || defaultVideoId;
  }

  private convertToEmbeddedURL(url: string): string {
    return `https://www.youtube.com/embed/${this.getId(url)}`;
  }
}
