import { Subject } from "./Subject.js";

export class Wallet extends Subject {
  constructor() {
    super();
    this.amount = 0;
  }

  setAmount(amount) {
    this.amount = amount;
    this.notifyObservers();
  }

  getAmount() {
    return this.amount;
  }
}
