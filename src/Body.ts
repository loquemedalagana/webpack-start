export class Body {
  $app: HTMLElement;
  $main: HTMLElement;

  constructor() {
    this.$app = document.querySelector('body');
    this.$main = document.getElementById('app');
    this.$main.classList.add('container', 'container-fluid');
  }
}
