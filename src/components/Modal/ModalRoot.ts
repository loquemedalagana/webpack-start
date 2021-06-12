import {
  Composable,
  InteractiveComponentConstructor,
  Component,
  ClosableHeaderComponentConstructor,
} from '../Core';
import { ModalType, PostDataType, PostType } from "../../types/item";
import { ModalAction } from "./ModalAction";

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

  openModal(postData?: PostDataType, newPostType?: PostType) {
    const newModal = new this.modalComponentConstructor(postData);
    const modalType: ModalType = postData ? 'view-post-detail' : 'add-card';
    const removeModal = () => newModal.removeFrom(this.$modalRoot);
    const newModalHeader = new this.modalHeaderConstructor(
      modalType === 'view-post-detail' ? postData : `add ${newPostType}`,
      removeModal,
    );
    const newModalAction = new ModalAction();
    const modalChildren = [newModalHeader];

    if(modalType === 'add-card') {
      modalChildren.push(newModalAction);
    }

    newModal.addChildren(modalChildren);

    this.addChildren([newModal], postData);
  }
}
