import { HomeTemplate } from '../templates/home.template';

export default class HomeView {
  constructor() {
    this.el = document.getElementById('app');
  };
  render(data) {
    this.el.innerHTML = HomeTemplate(data);
    return this.el;
  };
}