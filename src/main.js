import UserProfileView from './view/user-profile-view.js';
import FiltersView from './view/filters-view';
import StatisticsView from './view/statistics-view.js';
import FilmsPresenter from './presenter/films-presenter.js';
// import PopupPresenter from './presenter/popup-presenter.js';
import { render } from './render.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');

const filmsPresenter = new FilmsPresenter;
// const popupPresenter = new PopupPresenter;

render(new UserProfileView, siteHeaderElement);
render(new FiltersView, siteMainElement);
render(new StatisticsView, siteFooterElement);

filmsPresenter.init(siteMainElement);
// popupPresenter.init(document.querySelector('body'));
