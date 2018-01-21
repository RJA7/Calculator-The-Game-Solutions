const Operator = require(`./operator`);

module.exports = class extends Operator {
  constructor(from, to) {
    super();
    this.from = from.toString();
    this.to = to.toString();
  }

  exec(options) {
    let sRes = options.total.toString().replace(new RegExp(`${this.from}`, `g`), this.to);
    options.total = Number(sRes);
    options.moves--;
  }

  toString() {
    return `${this.from}=>${this.to}`;
  }
};
