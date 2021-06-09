import {Core} from "../Core";
import { APP_TITLE } from '../constants/texts';

export class Header extends Core {
  $headerWrapper: HTMLElement;
  constructor() {
    super();
    this.$headerWrapper = document.createElement('header');

  }

  createHeader() {

  }
}
