const Operator = require(`./operator`);

module.exports = class extends Operator {
  exec(options) {
    let sTotal = Math.abs(options.total).toString();
    options.total = Math.sign(options.total) * (sTotal.slice(-1) + sTotal.slice(0, -1));
    options.moves--;
  }

  toString() {
    return `Shift&gt;`;
  }
};
