
export default class OrderCompleteModel {
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