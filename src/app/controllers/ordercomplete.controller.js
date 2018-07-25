import Router from "../router";

export default class OrderCompleteCtrl {
    constructor(OrderCompleteModel, OrderCompleteView) {
      this.model = OrderCompleteModel;
      this.view = OrderCompleteView;
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

    orderComplete(){
      console.log("adarsh");
    }
  }