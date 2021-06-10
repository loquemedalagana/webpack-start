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

export const CARD_INNERHTML = `
<li class="card-root">

</li>
`;

export const IMAGE_INNERHTML = `
<section>
  <div class="card-container">
  <div class="card-media-wrapper image-thumbnail-wrapper">
    <img class="image image-thumbnail" >
  </div>
  <div class="card-description-wrapper">
    <h2 class="card-title"></h2>
    <p class="card-description"></p>
  </div>
  </div>
</section>
`;

export const VIDEO_INNERHTML = `
<section>
  <div class="card-container">
  <div class="card-media-wrapper">
    <div class="video-player-wrapper">
    <iframe class="video-player" frameborder="0"></iframe>
  </div>
  </div>
  <div class="card-description-wrapper">
    <h2 class="card-title"></h2>
    <p class="card-description"></p>
  </div>
  </div>
</section>
`;

export const HEADER_INNERHTML = `
<header class="appbar appbar-main-color"></header>
`;

export const FOOTER_INNERHTML = `
<footer></footer>
`;

export const CARDWRAPPER_INNERHTML = `
<ul id="card-list-wrapper" class="container container-fluid">
</ul>
`;

export const NAVIGATION_INNERHTML = `
<ul class="nav"></ul>
`;
