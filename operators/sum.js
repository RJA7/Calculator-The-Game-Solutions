const Operator = require(`./operator`);

module.exports = class extends Operator {
  exec(options) {
    options.total = Math.sign(options.total) * Math.abs(options.total).toString().split(``).reduce((a, b) => a + Number(b), 0);
    options.moves--;
  }

  toString() {
    return `SUM`;
  }
};
