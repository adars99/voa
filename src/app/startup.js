import '@elliemae/em-epc-components/dist/bundle';
import Router from 'es6-router';
import { $on } from './utils/util';
import SubmitOrderView from './views/submitorder.view';
import SubmitOrderModel from './models/submitorder.model';
import SubmitOrderCtrl from './controllers/submitorder.controller';

import OrderResendView from './views/orderresend.view';
import OrderResendModel from './models/orderresend.model';
import OrderResendCtrl from './controllers/orderresend.controller';

import OrderCompleteView from './views/ordercomplete.view';
import OrderCompleteModel from './models/ordercomplete.model';
import OrderCompleteCtrl from './controllers/ordercomplete.controller';

import HomeView from './views/home.view';
import HomeModel from './models/home.model';
import HomeCtrl from './controllers/home.controller';

import '../styles/style.scss';
class App {
  constructor() {
    const submitOrderModel = new SubmitOrderModel();
    const submitOrderView = new SubmitOrderView();
    this.submitOrderCtrl = new SubmitOrderCtrl(submitOrderModel, submitOrderView);

    const orderResendModel = new OrderResendModel();
    const orderResendView = new OrderResendView();
    this.orderResendCtrl = new OrderResendCtrl(orderResendModel, orderResendView);

    const orderCompleteModel = new OrderCompleteModel();
    const orderCompleteView = new OrderCompleteView();
    this.orderCompleteCtrl = new OrderCompleteCtrl(orderCompleteModel, orderCompleteView);

    const homeModel = new HomeModel();
    const homeView = new HomeView();
    this.homeCtrl = new HomeCtrl(homeModel, homeView);
  };
}

const app = new App();

const setView = () => {
  console.log("document.location.hash", document.location.hash);
  if(document.location.hash === '#submitorder'){
  app.submitOrderCtrl.setView(document.location.hash);
  }else if(document.location.hash === '#orderresend'){
    app.orderResendCtrl.setView(document.location.hash);
  }else if(document.location.hash === '#ordercomplete'){
    app.orderCompleteCtrl.setView(document.location.hash);
  }else {
    app.homeCtrl.setView(document.location.hash);
  }
}

 

$on(window, 'load', setView);
$on(window, 'hashchange', setView);