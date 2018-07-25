import Router from "../router";

export default class OrderResendCtrl {
    constructor(OrderResendModel, OrderResendView) {
      this.model = OrderResendModel;
      this.view = OrderResendView;
    };
    render(){
      const el = this.view.render(this.model.toJSON());
      el.querySelector('.em-btn-cancel').addEventListener("click", () => {
        console.log(Router.lastRouteResolved());
        Router.navigate('*');
      });
    };
    setView(hash) {
      var validURL = /^#\/[\d]{2}\/[\d]{4}$/.test(hash);
  
      this.render();
    };

    orderResend(){
      console.log("adarsh");
    }
  }