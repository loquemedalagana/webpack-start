type NavItemsId = {
  name: string;
  id: string;
}

export class Navigation {
  private $element: HTMLElement;
  private $navItems: HTMLElement[];
  private navItemsName = ['image', 'video', 'note'];

  constructor() {
    this.$element = document.createElement('ul');
    this.$element.setAttribute('class', 'nav');

    this.$navItems = this.createNavItems();

    this.$navItems.forEach($navItem => {
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

      $navItemElement.appendChild($navButtonElement);

      return $navItemElement;
    });
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "beforeend") {
    parent.insertAdjacentElement(position, this.$element);
  }
}
