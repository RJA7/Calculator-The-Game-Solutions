const Operator = require(`./operator`);

module.exports = class extends Operator {
  constructor(value) {
    super();
    this.value = value;
  }

  exec(options) {
    options.operators.forEach(operator => operator.add && operator.add(this.value));
    options.moves--;

    return true; // has sens even if total is the same
  }

  toString() {
    let {value} = this;
    let sign = value > 0 ? `+` : `-`;
    return `[${sign}]${Math.abs(value)}`;
  }
};
