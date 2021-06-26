import { Core, ModalControllable } from "./Core";
import { NAVIGATION_INNERHTML } from '../constants/innerHTML';
import { PostType } from '../types/post';
import { ModalRoot } from "./Modal/ModalRoot";

export class Navigation extends Core<HTMLElement> implements ModalControllable {
  modalRootComponent: ModalRoot;
  private $navItems: HTMLElement[];
  private navItemsName: Array<PostType> = ['image', 'video', 'post'];

  constructor(modalRoot: ModalRoot) {
    super(NAVIGATION_INNERHTML);
    this.modalRootComponent = modalRoot;
    this.$navItems = this.createNavItems();
    this.$navItems.forEach(($navItem) => {
      this.$element.appendChild($navItem);
    });
  }

  private createNavItems() {
    return this.navItemsName.map((itemTitle, index) => {
      const $navItemElement = document.createElement('li');
      const $navButtonElement = document.createElement('button');
      $navItemElement.setAttribute('id', `nav-${index}`);
      $navButtonElement.setAttribute('id', `new-${itemTitle}`);
      $navButtonElement.setAttribute('class', 'button-transparent nav-button');
      $navButtonElement.innerText = itemTitle;

      $navButtonElement.onclick = () => this.modalRootComponent.openModal(undefined, itemTitle);

      $navItemElement.appendChild($navButtonElement);

      return $navItemElement;
    });
  }
}
