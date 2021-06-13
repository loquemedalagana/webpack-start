import {APP_TITLE} from "./texts";
import { ImageItem } from "../types/post";

/* 자잘한 태그들 */

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

/* card component */

export const CARD_INNERHTML = `
<li class="card">
  <section class="card-root">
    <div class="card-body">
    </div>
  </section>
</li>
`;

export const CARD_HEADER_INNERHTML = `
  <div class="card-header">
    <h2 class="card-title"></h2>
    <div class="card-control">
      <button class="close-button">&times;</button>
    </div>
  </div>
`;


export const CARD_DESCRIPTION_INNERHTML = `
  <div class="card-description-wrapper">
    <p class="card-description"></p>
  </div>
`;

/* media component */

export const IMAGE_INNERHTML = `
<div class="card-media-wrapper image-thumbnail-wrapper">
  <img class="image image-thumbnail" >
</div>
`;

export const VIDEO_INNERHTML = `
<div class="card-media-wrapper">
  <div class="video-player-wrapper">
    <iframe class="video-player" frameborder="0"></iframe>
  </div>
</div>
`;

/* layout components */

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

/* modal components */

export const MODAL_INNERHTML = `
<div class="modal-wrapper modal-full-screen">
  <div class="modal-container hidden">
    <div class="modal-body"></div>
    <form class="modal-form"></form>
  </div>
</div>
`;

export const MODAL_HEADER_INNERHTML = `
<div class="modal-header">
    <h2 class="modal-title"></h2>
    <div class="modal-control">
      <button class="close-button">&times;</button>
    </div>
</div>
`;

export const MODAL_ACTION_INNERHTML = `
<div class="modal-action">
  <button class="modal-action-button button button-outlined"></button>
</div>
`;

export const MODAL_FORM_INNERHTML = `
<section class="modal-form-inputs-wrapper">
</section>
`;

export const INPUT_INNERHTML = `
<div class="input-wrapper">
    <label class="input-label">
    </label>
    <input class="input" value="">
</div>
`;
