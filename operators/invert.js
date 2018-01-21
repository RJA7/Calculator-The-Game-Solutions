const Operator = require(`./operator`);

module.exports = class extends Operator {
  constructor() {
    super();
    this.last = Number.MIN_SAFE_INTEGER; // last move invert was called
  }

  exec(options) {
    if (this.last - options.moves === 0) {
      return false; // double click on invert doesn't make sense
    }

    let sign = Math.sign(options.total);
    let sTotal = Math.abs(options.total).toString();
    let sRes = ``;

    for (let i = 0, l = sTotal.length; i < l; i++) {
      let v = 10 - sTotal.charAt(i);
      v = v === 10 ? 0 : v;
      sRes += v;
    }

    options.total = sign * Number(sRes);
    options.moves--;
    this.last = options.moves;
  }

  reset() {
    this.last = Number.MIN_SAFE_INTEGER;
  }

  toString() {
    return `Inv10`;
  }
};
