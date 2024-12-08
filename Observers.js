export class DollarObserver {
  update(subject) {
    console.log(`Saldo em Dólares: $ ${subject.getAmount().toFixed(2)}`);
  }
}

export class EuroObserver {
  update(subject) {
    const amountInEuro = subject.getAmount() * 0.94;
    console.log(`Saldo em Euros: € ${amountInEuro.toFixed(2)}`);
  }
}

export class RealObserver {
  update(subject) {
    const amountInReal = subject.getAmount() * 6;
    console.log(`Saldo em Reais: R$ ${amountInReal.toFixed(2)}`);
  }
}
