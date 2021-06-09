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

export const IMAGE_THUMBNAIL_INNERHTML = `
<section>
  <div class="card-container">
  <div class="image-thumbnail-wrapper">
    <img class="image image-thumbnail" >
  </div>
    <p class="image-thumbnail-description"></p>
  </div>
</section>
`;
