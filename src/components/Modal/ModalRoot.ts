import { v4 as uuidv4 } from 'uuid';
import {
  Composable,
  InteractiveComponentConstructor,
  Component,
  ClosableHeaderComponentConstructor,
} from '../Core';
import { ModalType, PostItem, PostType } from "../../types/post";
import { ModalAction } from './ModalAction';
import { ModalForm } from './ModalForm';
import { Input } from './Input';
import { CardList } from "../Card/CardList";

export class ModalRoot implements Composable {
  private $modalRoot: HTMLElement;

  constructor(
    private readonly cardList: CardList,
    private modalComponentConstructor: InteractiveComponentConstructor, // class Modal
    private modalHeaderConstructor: ClosableHeaderComponentConstructor, // class ModalHeader
  ) {
    this.$modalRoot = document.querySelector('#modal-root');
  }

  clearModal() {
    this.$modalRoot.innerHTML = '';
  }

  addChildren(children: Component[], postData?: PostItem) {
    if (children.length > 1) {
      throw new Error('modal component should be one');
    }
    const [child] = children;

    this.clearModal();
    child.attachTo(this.$modalRoot, 'beforeend');
  }

  openModal(postData?: PostItem, newPostType?: PostType) {
    const newModal = new this.modalComponentConstructor(postData);
    const modalType: ModalType = postData ? 'view-post-detail' : 'add-card';
    let modalFormChildren: Input[] = [];

    const onKeyPress = (e: Event) => {
      // focus는 나중에 추가하자ㅠㅠ
    };

    const removeModal = () => newModal.removeFrom(this.$modalRoot);
    const submitData = () => {
      const initialValue: Partial<PostItem> = {
        type: newPostType,
      };

      const inputResult = modalFormChildren.reduce((result, inputComponent) => {
        switch (inputComponent.inputType) {
          case 'description-input':
            return {
              ...result,
              description: inputComponent.inputValue,
            };
          case 'title-input':
            return {
              ...result,
              title: inputComponent.inputValue,
            };
          case 'url-input':
            return {
              ...result,
              url: inputComponent.inputValue,
            };
        }
      }, initialValue);

      const newCardComponent = this.cardList.makeCardComponent(inputResult);
      this.cardList.addChildren([newCardComponent]);
      removeModal();
    };

    const newModalHeader = new this.modalHeaderConstructor(
      modalType === 'view-post-detail' ? postData : `add ${newPostType}`,
      removeModal,
    );

    const newModalForm = new ModalForm();
    const newModalAction = new ModalAction(submitData);

    const modalChildren = [newModalHeader];

    const urlInput = new Input('url-input');
    const titleInput = new Input('title-input');
    const descriptionInput = new Input('description-input');

    if (newPostType === 'image' || newPostType === 'video') {
      modalFormChildren.push(urlInput);
    }

    modalFormChildren = [...modalFormChildren, titleInput, descriptionInput];

    newModalForm.addChildren(modalFormChildren);

    if (modalType === 'add-card') {
      modalChildren.push(newModalForm);
      modalChildren.push(newModalAction);
    }

    newModal.addChildren(modalChildren);

    this.addChildren([newModal], postData);
  }
}
