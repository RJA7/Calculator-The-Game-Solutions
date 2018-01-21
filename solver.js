const {StoreOperator, PasteOperator} = require(`./operators/store`);

module.exports = class Solver {
  constructor({moves, goal, total, operators, portal}) {
    this.moves = moves;
    this.goal = goal;
    this.total = total;
    this.operators = operators.slice();
    this.portal = portal;
    this.store = false;
    this.cache = null;

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
    this.cache = {};

    for (let i = 0; true; i++) {
      let radix = operators.length;
      let sOrder = radix > 1 ? i.toString(radix) : `0`.repeat(i + 1);
      if (sOrder.length > maxOrderLen) break;
      sOrder = `0`.repeat(maxOrderLen - sOrder.length) + sOrder;

      let part = this._inCache(sOrder);

      if (part) {
        i += Math.pow(radix, sOrder.length - part.length) - sOrder.slice(part.length) - 1;
        continue;
      }

      let res = this._process(sOrder);
      res && (!store || store.pasted) ? results[res] = 1 : ``;
      operators.forEach(operator => operator.reset());
    }

    return Object.keys(results).sort((a, b) => a.split(`|`).length - b.split(`|`).length);
  }

  _process(sOrder) {
    let {moves, goal, total, operators, portal, cache} = this;
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

    cache[sOrder.slice(0, i + 1)] = true;
    return success ? res.slice(0, -3) : ``;
  }

  _inCache(order) {
    let {cache} = this;
    let part = order;

    while (part.length !== 0) {
      if (cache[part]) {
        return part;
      }

      part = part.slice(0, -1);
    }
  }
};
