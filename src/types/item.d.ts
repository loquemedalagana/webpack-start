export type PostItem = {
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
