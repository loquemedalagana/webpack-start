import { Body } from './Body';
import { Footer } from './components/Footer';

export class App {
  private $body: Body;
  private $footer: Footer;

  constructor(appRoot: HTMLElement) {
    this.$body = new Body();
    this.$footer = new Footer();
    this.$footer.attachFooter(appRoot);
  }

}
