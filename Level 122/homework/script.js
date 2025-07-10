
class OrderManager {

  constructor() {
    this.activeOrders = new Map(
      JSON.parse(localStorage.getItem("activeOrders") || "[]")
    );

    this.completedOrders = new Set(
      JSON.parse(localStorage.getItem("completedOrders") || "[]")
    );

    this.nextId = parseInt(localStorage.getItem("nextId")) || 1;
    this.render();
  }

  save() {
    localStorage.setItem(
      "activeOrders",
      JSON.stringify([...this.activeOrders.entries()])
    );

    localStorage.setItem(
      "completedOrders",
      JSON.stringify([...this.completedOrders.values()])
    );
    localStorage.setItem("nextId", this.nextId);
  }

  processOrder(customerName, food) {

    const orderId = this.nextId++;
    this.activeOrders.set(orderId, { customerName, food });
    console.log(
      `New Order: #${orderId} - ${customerName} (${food})`
    );

    this.save();
    this.render();
    setTimeout(() => {
      this.activeOrders.delete(orderId);
      this.completedOrders.add(`${customerName}: ${food}`);
      this.save();
      this.render();
    }, 3000);

  }

  render() {
    const a = document.getElementById("activeList");
    const c = document.getElementById("completedList");

    a.innerHTML = "";
    for (const [id, v] of this.activeOrders.entries()) {
      const li = document.createElement("li");
      li.textContent = `#${id} — ${v.customerName}: ${v.food}`;
      a.appendChild(li);
    }

    c.innerHTML = "";
    for (const v of this.completedOrders.values()) {
      const li = document.createElement("li");
      li.textContent = v;
      c.appendChild(li);
    }
  }
}

const manager = new OrderManager();

document.getElementById("orderBtn").addEventListener("click", () => {

  const name = document.getElementById("nameInput").value.trim();
  const food = document.getElementById("foodInput").value.trim();

  if (!name || !food) return;

  manager.processOrder(name, food);
  document.getElementById("nameInput").value = "";
  document.getElementById("foodInput").value = "";
});
