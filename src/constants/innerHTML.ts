import {APP_TITLE} from "./texts";
import { ImageItem } from "../types/item";

export const COPYRIGHT_INNERHTML = `
<div class="container container-fluid">
  <span class="copyright-text">
    &copy; ${new Date().getFullYear()} , developed 
    ❤️
    by
    <a
      href="https://github.com/loquemedalagana"
      target="_blank"
      rel="noreferrer noopener"
    >
      Mrs. Liberty
    </a>
    ${" "}
    for a better world.
  </span>
</div>
`;

export const APP_TITLE_INNTERHTML = `
<div class="header-title">
  <h1>${APP_TITLE}</h1>    
</div>
`;

export const IMAGE_THUMBNAIL_INNERHTML = (imageData: ImageItem) => `
<section>
  <div>
    <img src="${imageData.url}" alt="${imageData.title}" class="image-thumbnail" >
    <p class="image-thumbnail-description">${imageData.description}</p>
  </div>
</section>
`;
