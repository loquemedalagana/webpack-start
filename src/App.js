export class App {
  // $main: HTMLElement;

  constructor() {
    this.$main = document.getElementById("app");
  }

  createMain() {

    this.$main.innerHTML = `<h1>hello</h1>`
  }

}
