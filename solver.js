const {StoreOperator, PasteOperator} = require(`./operators/store`);

module.exports = class Solver {
  constructor({moves, goal, total, operators, portal}) {
    this.moves = moves;
    this.goal = goal;
    this.total = total;
    this.operators = operators.slice();
    this.portal = portal;
    this.store = false;
    this.cash = null;

    for (let i = 0, l = this.operators.length; i < l; i++) {
      if (this.operators[i].constructor === StoreOperator) {
        this.store = this.operators[i];
        this.operators.push(new PasteOperator(this.store));
      }
    }
  }

  exec() {
    let {moves, operators, store} = this;
    let results = {};
    let maxOrderLen = moves * (store ? 2 : 1); // if we have store operator, then we can click it before each move
    this.cash = {};

    for (let i = 0; true; i++) {
      let radix = operators.length;
      let sOrder = radix > 1 ? i.toString(radix) : `0`.repeat(i + 1);
      if (sOrder.length > maxOrderLen) break;
      sOrder = `0`.repeat(maxOrderLen - sOrder.length) + sOrder;

      let inCashLen = this._inCash(sOrder);

      if (inCashLen) {
        i += Math.pow(radix, sOrder.length - inCashLen - 1) - 1;  // todo check
        continue;
      }

      let res = this._process(sOrder);
      res && (!store || store.pasted) ? results[res] = 1 : ``;
      operators.forEach(operator => operator.reset());
    }

    return Object.keys(results);
  }

  _process(sOrder) {
    let {moves, goal, total, operators, portal, cash} = this;
    let order = sOrder.split(``);
    let options = {moves, total, operators};
    let res = ``;
    let success;
    let i;

    for (i = 0; true; i++) {
      let operator = operators[order[i]];
      let prevTotal = options.total;
      let hasSens = operator.exec(options) || prevTotal !== options.total;

      if (!hasSens || options.total > 999999 || options.total % 1 !== 0) break;

      res += `${operator.toString()} | `;
      portal && portal.exec(options);
      success = options.total === goal;

      if (success || options.moves === 0) break;
    }

    cash[sOrder.slice(0, i + 1)] = true;
    return success ? res.slice(0, -3) : ``;
  }

  _inCash(order) {
    let {cash} = this;
    let part = order;

    while (part.length !== 0) {
      if (cash[part]) {
        return part.length;
      }

      part = part.slice(0, -1);
    }

    return false;
  }
};
