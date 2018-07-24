
export default class HomeModel {
    constructor() {
      
    };
    toJSON() {
      const event = this.submitOrder;
  
      return { event };
    };
  
    submitOrder(){
      console.log("adarsh");
    }
  }