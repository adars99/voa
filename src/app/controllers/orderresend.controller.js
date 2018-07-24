export default class OrderResendCtrl {
    constructor(OrderResendModel, OrderResendView) {
      this.model = OrderResendModel;
      this.view = OrderResendView;
    };
    render(){
      this.view.render(this.model.toJSON());
    };
    setView(hash) {
      var validURL = /^#\/[\d]{2}\/[\d]{4}$/.test(hash);
  
      this.render();
    };

    orderResend(){
      console.log("adarsh");
    }
  }