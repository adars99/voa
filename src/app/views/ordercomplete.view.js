import { OrderCompleteTemplate } from '../templates/ordercomplete.template';

export default class SubmitOrderView {
  constructor() {
    this.el = document.getElementById('app');
  };
  render(data) {
    this.el.innerHTML = OrderCompleteTemplate(data);
    return this.el;
  };
}