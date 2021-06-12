export type PostType = "post" | "image" | "video";
export type ComponentType = 'media' | 'description' | 'header' | 'footer' | 'modal';

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
