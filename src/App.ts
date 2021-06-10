import { Header } from './components/Header';
import { Body } from './Body';
import { Footer } from './components/Footer';
import { samplePostList } from './data/sampleData';

export class App {
  private $header: Header;
  private $body: Body;
  private $footer: Footer;

  constructor(appRoot: HTMLElement) {
    this.$header = new Header();
    this.$body = new Body();
    this.$footer = new Footer();
    this.$header.attachTo(appRoot, 'afterbegin');
    this.$footer.attachTo(appRoot, 'beforeend');

    this.setItemList();
  }

  private setItemList() {
    samplePostList.forEach(samplePost => {
      const foundValue = localStorage.getItem(samplePost.id);
      if(foundValue === null) {
        localStorage.setItem(samplePost.id, JSON.stringify(samplePost));
      }
    });
  }
}
