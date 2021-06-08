import { Core } from './Core';
import { Footer } from './components/Footer';

export class App extends Core {
  constructor() {
    super();
  }

  createMain() {
    const $message = document.createElement('h1');
    const band = {
      vocal: 'Dani Martin',
      piano: 'Inaki Garcia',
    };
    const newBand = {
      ...band,
      bass: 'Candy Caramelo',
    };
    $message.innerText = `the bassist of the Revetones: ${newBand.bass}`;
    this.$main.appendChild($message);
    console.log('App.js');

    const footer = new Footer();
    footer.createFooter();
  }
}
