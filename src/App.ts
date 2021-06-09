import { Header } from "./components/Header";
import { Body } from './Body';
import { Footer } from './components/Footer';

export class App {
  private $header: Header;
  private $body: Body;
  private $footer: Footer;

  constructor(appRoot: HTMLElement) {
    this.$header = new Header();
    this.$body = new Body();
    this.$footer = new Footer();
    this.$header.attachHeader(appRoot);
    this.$footer.attachFooter(appRoot);
  }

}
