import FilmsContainerView from '../view/films-container-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import SortView from '../view/sort-view.js';
import { render } from '../render.js';

export default class FilmsPresenter {
  filmsContainerComponent = new FilmsContainerView;
  filmsListComponent = new FilmsListView;

  init(container) {
    this.container = container;

    render(new SortView, this.container);
    render(this.filmsContainerComponent, this.container);
    render(this.filmsListComponent, this.filmsContainerComponent.getElement());

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView, this.filmsListComponent.getElement().querySelector('.films-list__container'));
    }

    render(new ShowMoreButtonView, this.filmsListComponent.getElement());
  }
}


