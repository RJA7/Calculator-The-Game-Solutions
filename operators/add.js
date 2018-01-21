const Operator = require(`./operator`);

module.exports = class extends Operator {
  constructor(value) {
    super();
    this.value = value;
    this.initValue = this.value;
  }

  exec(options) {
    options.total += this.value;
    options.moves--;
  }

  add(value) {
    this.value = Math.sign(this.value) * (Math.abs(this.value) + value);
  }

  reset() {
    this.value = this.initValue;
  }

  toString() {
    let {value} = this;
    let sign = value > 0 ? `+` : ``;
    return `${sign}${value}`;
  }
};
