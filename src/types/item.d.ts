export type PostType = "post" | "image" | "video";
export type ComponentType = 'media' | 'description' | 'header' | 'footer' | 'modal' | 'form' | 'input';
export type ModalType = 'view-post-detail' | 'add-card';
export type InputType = 'url-input' | 'title-input' | 'description-input';

export interface PostItem {
  type: PostType;
  id: string;
  title: string;
  description?: string;
}

export interface ImageItem extends PostItem {
  url: string;
}

export interface VideoItem extends Partial<PostItem> {
  url: string;
  extractId(url: string): string;
}

// @ts-ignore
export type PostDataType = PostItem | ImageItem | VideoItem;
