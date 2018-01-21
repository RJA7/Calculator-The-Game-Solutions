const Operator = require(`./operator`);

module.exports = class extends Operator {
  exec(options) {
    options.total = Math.sign(options.total) * Number(Math.abs(options.total).toString().slice(0, -1));
    options.moves--;
  }

  toString() {
    return `&lt;&lt;`;
  }
};
