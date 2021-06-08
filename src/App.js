export class App {
  // $main: HTMLElement;

  constructor() {
    this.$main = document.getElementById("app");
  }

  createMain() {
    const $message = document.createElement('h1');
    $message.innerText = 'hello webpack';
    this.$main.appendChild($message);
  }

}
