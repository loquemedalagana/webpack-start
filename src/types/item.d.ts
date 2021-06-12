export type PostType = "post" | "image" | "video";
export type ComponentType = 'media' | 'header' | 'card' | 'action' | 'body' | 'footer' | 'root' | 'description' | 'navigation';

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
