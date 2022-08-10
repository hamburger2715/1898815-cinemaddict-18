import {createElement} from '../render.js';

const createFilmsContainerTemplate = () => '<section class="films"></section>';

export default class FilmsListContainerView {
  getTemplate() {
    return createFilmsContainerTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
