import { SubmitOrderTemplate } from '../templates/submitorder.template';

export default class SubmitOrderView {
  constructor() {
    this.el = document.getElementById('app');
  };
  render(data) {
    this.el.innerHTML = SubmitOrderTemplate(data);
  };
}