import '@elliemae/em-epc-components/dist/bundle';

import { $on } from './utils/util';
import SubmitOrderView from './views/submitorder.view';
import SubmitOrderModel from './models/submitorder.model';
import SubmitOrderCtrl from './controllers/submitorder.controller';
import '../styles/style.scss';
class App {
  constructor() {
    const model = new SubmitOrderModel();
    const view = new SubmitOrderView();
    this.controller = new SubmitOrderCtrl(model, view);
  };
}

const app = new App();

const setView = () => {
  app.controller.setView(document.location.hash);
}

$on(window, 'load', setView);
$on(window, 'hashchange', setView);