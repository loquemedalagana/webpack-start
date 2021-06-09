export type PostItem = {
  id: string;
  title: string;
  description?: string;
}

export type ImageItem = PostItem & {
  url: string;
}

export type VideoItem = PostItem & {
  videoId: string;
}
