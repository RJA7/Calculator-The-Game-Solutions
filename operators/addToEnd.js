const Operator = require(`./operator`);

module.exports = class extends Operator {
  constructor(value) {
    super();
    this.value = value.toString();
    this.initValue = this.value;
  }

  exec(options) {
    options.total = Number(options.total.toString() + this.value);
    options.moves--;
  }

  add(value) {
    this.value = (Number(this.value) + value).toString();
  }

  reset() {
    this.value = this.initValue;
  }

  toString() {
    return this.value;
  }
};
