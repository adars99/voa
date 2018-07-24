export default class HomeCtrl {
    constructor(HomeModel, HomeView) {
      this.model = HomeModel;
      this.view = HomeView;
    };
    render(){
      this.view.render(this.model.toJSON());
    };
    setView(hash) {
      var validURL = /^#\/[\d]{2}\/[\d]{4}$/.test(hash);
    
      this.render();
    };

    home(){
      console.log("adarsh");
    }
  }