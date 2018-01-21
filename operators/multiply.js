const Operator = require(`./operator`);

module.exports = class extends Operator {
  constructor(value) {
    super();
    this.value = value;
    this.initValue = this.value;
  }

  exec(options) {
    options.total *= this.value;
    options.moves--;
  }

  add(value) {
    if (this.value > 1 || this.value < -1) {
      this.value = Math.sign(this.value) * (Math.abs(this.value) + value);
    } else {
      this.value = Math.sign(this.value) * (1 / (1 / Math.abs(this.value) + value));
    }
  }

  reset() {
    this.value = this.initValue;
  }

  toString() {
    let {value} = this;
    return value > 1 || value < -1 ? `x${value}` : `/${1 / value}`;
  }
};
