const Operator = require(`./operator`);

module.exports = class extends Operator {
  exec(options) {
    options.total = -options.total;
    options.moves--;
  }

  toString() {
    return `+/-`;
  }
};
