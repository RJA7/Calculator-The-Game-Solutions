const Operator = require(`./operator`);

exports.StoreOperator = class extends Operator {
  constructor() {
    super();
    this.value = null;
    this.pasted = true;
  }

  exec(options) {
    let prev = this.value;
    let wasPasted = this.pasted;
    this.value = options.total.toString();
    this.pasted = false;

    return prev !== this.value && wasPasted; // make sens if prev !== current and prev was pasted
  }

  getValue() {
    this.pasted = true;
    return this.value;
  }

  reset() {
    this.pasted = true;
    this.value = null;
  }

  toString() {
    return `Store`;
  }
};

exports.PasteOperator = class extends Operator {
  constructor(store) {
    super();
    this.store = store;
  }

  exec(options) {
    let value = this.store.getValue();

    if (value === null) {
      return false; // no sens if store is empty
    }

    options.total = Number(options.total.toString() + value);
    options.moves--;
  }

  toString() {
    return this.store.value;
  }
};
