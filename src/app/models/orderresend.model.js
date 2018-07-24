
export default class OrderResendModel {
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