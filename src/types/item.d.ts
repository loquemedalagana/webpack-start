export type PostType = "post" | "image" | "video";
export type ComponentType = 'media' | 'description' | 'header' | 'footer' | 'modal' | 'form' | 'input';
export type ModalType = 'view-post-detail' | 'add-card';
export type InputType = 'image-url-input' | 'video-url-input' | 'title-input' | 'description-input';

export type PostItem = {
  type: PostType;
  id: string;
  title: string;
  description?: string;
}

export type ImageItem = PostItem & {
  url: string;
}

export type VideoItem = Partial<PostItem> & {
  url: string;
};

// @ts-ignore
export type PostDataType = PostItem | ImageItem | VideoItem;
