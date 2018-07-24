
export default class SubmitOrderModel {
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