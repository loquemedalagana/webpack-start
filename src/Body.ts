export class Body {
  $main: HTMLElement;

  constructor() {
    this.$main = document.getElementById('app');
    this.$main.classList.add('container', 'container-fluid');
  }
}
