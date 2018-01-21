const Operator = require(`./operator`);

module.exports = class extends Operator {
  exec(options) {
    let sTotal = Math.abs(options.total).toString();
    options.total = Math.sign(options.total) * (sTotal + sTotal.split(``).reverse().join(``));
    options.moves--;
  }

  toString() {
    return `Mirror`;
  }
};
