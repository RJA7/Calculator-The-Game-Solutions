module.exports = class {
  constructor(inputIndex, outputIndex = -1) {
    this.inputIndex = inputIndex;
    this.outputIndex = outputIndex;
  }

  exec(options) {
    let total;

    while (total = this._input(options.total.toString())) {
      options.total = total;
    }
  }

  _input(sValue) {
    let index = sValue.length + this.inputIndex;
    let char = sValue.charAt(index);

    if (!char) return;

    return this._output(sValue.slice(0, index) + sValue.slice(index + 1), Number(char));
  }

  _output(sValue, number) {
    let index = sValue.length + this.outputIndex + 1;
    let sStart = sValue.slice(0, index);
    let sEnd = sValue.slice(index);

    return Number(String(Number(sStart) + number) + sEnd);
  }
};
