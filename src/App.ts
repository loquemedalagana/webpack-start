import { Header } from './components/Header';
import { ModalRoot } from './components/Modal/ModalRoot';
import { Body } from './Body';
import { Footer } from './components/Footer';
import { samplePostList } from './data/sampleData';
import { Modal } from './components/Modal/Modal';
import { ModalHeader } from './components/Modal/ModalHeader';
import { CardList } from './components/Card/CardList';
import { Card } from './components/Card/Card';
import { CardHeader } from './components/Card/CardHeader';

export class App {
  private $header: Header;
  private $body: Body;
  private $footer: Footer;
  private $cardList: CardList;
  private $modalRoot: ModalRoot;

  constructor(appRoot: HTMLElement) {
    this.$cardList = new CardList(Card, CardHeader);

    this.$modalRoot = new ModalRoot(Modal, ModalHeader);
    this.$header = new Header(this.$modalRoot);
    this.$body = new Body(this.$cardList);

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
