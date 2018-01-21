const Operator = require(`./operator`);

module.exports = class extends Operator {
  constructor(value) {
    super();
    this.value = value;
  }

  exec(options) {
    options.total = Math.pow(options.total, this.value);
    options.moves--;
  }

  toString() {
    return `x<sup>${this.value}</sup>`;
  }
};
