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
  
      if (validURL) {
        var matches = hash.match(/^#\/([\d]{2})\/([\d]{4})$/);
        var month = parseInt(matches[1], 10) - 1;
        var year = parseInt(matches[2], 10);
  
        this.model.setDate(month,year);
      }
  
      this.render();
    };
  }