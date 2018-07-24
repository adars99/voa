export default class SubmitOrderCtrl {
    constructor(SubmitOrderModel, SubmitOrderView) {
      this.model = SubmitOrderModel;
      this.view = SubmitOrderView;
    };
    render(){
      this.view.render(this.model.toJSON());
    };
    setView(hash) {
      
      var validURL = /^#\/[\d]{2}\/[\d]{4}$/.test(hash);
      console.log("here is my url", validURL, hash);
      this.render();
    };

    submitOrder(){
      console.log("adarsh");
    }
  }