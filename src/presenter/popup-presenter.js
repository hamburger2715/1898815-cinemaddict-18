import PopupView from '../view/popup-view.js';
import { render } from '../render.js';

export default class PopupPresenter {
  popup = new PopupView;

  init(container) {
    this.container = container;

    render(this.popup, this.container);
  }
}
