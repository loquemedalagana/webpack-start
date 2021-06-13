import { youtubeRegExp } from "../constants/regExp";

export type PostType = "post" | "image" | "video";
export type ComponentType = 'media' | 'description' | 'header' | 'footer' | 'modal' | 'form' | 'input';
export type ModalType = 'view-post-detail' | 'add-card';
export type InputType = 'url-input' | 'title-input' | 'description-input';

export interface PostItem {
  type: PostType;
  id?: string;
  title: string;
  url?: string;
  description?: string;
}


