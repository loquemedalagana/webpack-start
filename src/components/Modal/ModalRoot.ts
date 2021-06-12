import {
  Composable,
  InteractiveComponentConstructor,
  Component,
  ClosableHeaderComponentConstructor,
} from '../Core';
import { ModalType, PostDataType } from '../../types/item';

export class ModalRoot implements Composable {
  private $modalRoot: HTMLElement;

  constructor(
    private modalComponentConstructor: InteractiveComponentConstructor, // class Modal
    private modalHeaderConstructor: ClosableHeaderComponentConstructor, // class ModalHeader
  ) {
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
    const modalType: ModalType = postData ? 'view-post-detail' : 'add-card';
    const removeModal = () => newModal.removeFrom(this.$modalRoot);
    const newModalHeader = new this.modalHeaderConstructor(
      modalType === 'view-post-detail' ? postData : '모달 제목',
      removeModal,
    );

    newModal.addChildren([newModalHeader]);

    this.addChildren([newModal], postData);
  }
}
