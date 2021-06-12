import {
  Composable,
  InteractiveComponentConstructor,
  Component,
  ClosableHeaderComponentConstructor,
} from '../Core';
import { ModalType, PostDataType, PostType } from '../../types/item';
import { ModalAction } from './ModalAction';
import { ModalForm } from './ModalForm';
import { Input } from './Input';

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
    const submitData = () => {
      // make output based on inputted data

      removeModal();
    };

    const newModalHeader = new this.modalHeaderConstructor(
      modalType === 'view-post-detail' ? postData : `add ${newPostType}`,
      removeModal,
    );

    const newModalForm = new ModalForm();
    const newModalAction = new ModalAction(submitData);

    const modalChildren = [newModalHeader];
    const modalFormChildren = []; // inputs will be added

    const urlInput = new Input('url-input');
    const titleInput = new Input('title-input');
    const descriptionInput = new Input('description-input');

    if (newPostType === 'image' || newPostType === 'video') {
      modalFormChildren.push(urlInput);
    }

    newModalForm.addChildren([...modalFormChildren, titleInput, descriptionInput]);

    if (modalType === 'add-card') {
      modalChildren.push(newModalForm);
      modalChildren.push(newModalAction);
    }

    newModal.addChildren(modalChildren);

    this.addChildren([newModal], postData);
  }
}
