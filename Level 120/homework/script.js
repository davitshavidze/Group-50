
class OrderManager {
  constructor() {
    this.activeOrders = new Map();
    this.completedOrders = new Set();
  }

  processOrder(orderId, customerName, callback) {

    this.activeOrders.set(orderId, customerName);

    console.log(`Got new order #${orderId} from ${customerName}`);

    setTimeout(() => {
      const customer = this.activeOrders.get(orderId);

      this.activeOrders.delete(orderId);
      this.completedOrders.add(customer);

      callback(orderId);

      this.printStatus();

    }, 3000);
  }

  printStatus() {
    console.log("Active orders");

    if (this.activeOrders.size === 0) {
      console.log("No active orders");
    } else {

      for (const [id, name] of this.activeOrders) {
        console.log(`Order #${id} - Costumer: ${name}`);
      }

    }

    console.log("Already done");

    if (this.completedOrders.size === 0) {

      console.log("Not done yet");

    } else {

      for (const name of this.completedOrders) {
        console.log(`User: ${name}`);

      }
    }
  }
}
