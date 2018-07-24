import { OrderResendTemplate } from '../templates/orderresend.template';

export default class SubmitOrderView {
  constructor() {
    this.el = document.getElementById('app');
  };
  render(data) {
    this.el.innerHTML = OrderResendTemplate(data);
  };
}