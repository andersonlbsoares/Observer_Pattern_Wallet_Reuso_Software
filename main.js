import { Wallet } from "./Wallet.js";
import { DollarObserver, EuroObserver, RealObserver } from "./Observers.js";

const wallet = new Wallet();

const dollarObserver = new DollarObserver();
const euroObserver = new EuroObserver();
const realObserver = new RealObserver();

wallet.addObserver(dollarObserver);
wallet.addObserver(euroObserver);
wallet.addObserver(realObserver);

wallet.setAmount(100);
