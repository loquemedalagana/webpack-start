import { Composable, InteractiveComponentConstructor, Component } from '../Core';
import { PostDataType } from '../../types/item';

export class ModalRoot implements Composable {
  private $modalRoot: HTMLElement;

  constructor(private modalComponentConstructor: InteractiveComponentConstructor) {
    this.$modalRoot = document.querySelector('#modal-root');
  }

  clearModal() {
    this.$modalRoot.innerHTML = '';
  }

  addChildren(children: Component[], postData?: PostDataType) {
    if (children.length > 1) {
      throw new Error('modal component should be one');
    }
    const [child] = children;

    this.clearModal();
    child.attachTo(this.$modalRoot, 'beforeend');
  }

  openModal(postData?: PostDataType) {
    const newModal = new this.modalComponentConstructor(postData);
    this.addChildren([newModal], postData);
  }
}
