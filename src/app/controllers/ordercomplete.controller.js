export default class OrderCompleteCtrl {
    constructor(OrderCompleteModel, OrderCompleteView) {
      this.model = OrderCompleteModel;
      this.view = OrderCompleteView;
    };
    render(){
      this.view.render(this.model.toJSON());
    };
    setView(hash) {
      var validURL = /^#\/[\d]{2}\/[\d]{4}$/.test(hash);
    
      this.render();
    };

    orderComplete(){
      console.log("adarsh");
    }
  }