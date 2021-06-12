import { Header } from './components/Header';
import { ModalRoot } from './components/Modal/ModalRoot';
import { Body } from './Body';
import { Footer } from './components/Footer';
import { samplePostList } from './data/sampleData';
import { Modal } from "./components/Modal/Modal";
import { ModalHeader } from "./components/Modal/ModalHeader";

export class App {
  private $header: Header;
  private $body: Body;
  private $footer: Footer;
  private $modalRoot: ModalRoot;

  constructor(appRoot: HTMLElement) {
    this.$header = new Header();
    this.$body = new Body();
    this.$modalRoot = new ModalRoot(Modal, ModalHeader);
    this.$footer = new Footer();
    this.$header.attachTo(appRoot, 'afterbegin');
    this.$footer.attachTo(appRoot, 'beforeend');

    this.setItemList();
  }

  private setItemList() {
    if (localStorage.length === 0) {
      samplePostList.forEach((samplePost) => {
        const foundValue = localStorage.getItem(samplePost.id);
        if (foundValue === null) {
          localStorage.setItem(samplePost.id, JSON.stringify(samplePost));
        }
      });
    }
  }
}
