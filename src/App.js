export class App {
  // $main: HTMLElement;

  constructor() {
    this.$main = document.getElementById("app");
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
    }
    $message.innerText = `the bassist of the Revetones: ${newBand.bass}`;
    this.$main.appendChild($message);
    console.log('App.js');
  }

}
