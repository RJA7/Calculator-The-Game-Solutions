const Operator = require(`./operator`);

module.exports = class extends Operator {
  exec(options) {
    let sign = Math.sign(options.total);
    let value = Math.abs(options.total).toString();
    options.total = sign * Number(value.split(``).reverse().join(``));
    options.moves--;
  }

  toString() {
    return `Reverse`;
  }
};
