//import { SubmitOrderTemplate } from '../templates/submitorder.template';
//import { SubmitOrderTemplate } from '../templates/orderresend.template';
import { SubmitOrderTemplate } from '../templates/ordercomplete.template';

export default class SubmitOrderView {
  constructor() {
    this.el = document.getElementById('app');
  };
  render(data) {
    this.el.innerHTML = SubmitOrderTemplate(data);
  };
}