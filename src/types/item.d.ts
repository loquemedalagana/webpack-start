export type Item = {
  id: string;
  title: string;
  description?: string;
}

export type ImageItem = Item & {
  url: string;
}

export type VideoItem = Item & {
  videoId: string;
}
