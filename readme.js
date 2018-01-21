const fs = require(`fs`);

let rowTemplate = ({number, moves, goal, total, operators, results}) => `
<tr>
  <td>${number}</td>
  <td>${moves}</td>
  <td>${goal}</td>
  <td>${total}</td>
  <td><code>${operators.map(operator => operator.toString()).join(` | `)}</code></td>
  <td>${results.map((res, i) => `${i + 1}) <code>${res}</code>`).join(`<br>`)}</td>
</tr>`;

let template = model => `
<p align="center">
	<img alt="icon" width="175" src="${model.icon}">
</p>

<p align="center">
  <strong>
    <sub>
      <p align="center">
        <a href="${model.reference}"><img width="75" src="${model.avatar}"></a>
      </p>
    </sub>
  </strong>
</p>

<h1 align="center"> ${model.name} </h1>

<p align="center">
  <strong>
    <sub> By ${model.author} </sub>
  </strong>
</p>

<table>
  <thead>
    <tr>            
      <td>№</td>
      <td>Moves</td>
      <td>Goal</td>
      <td>Total</td>
      <td>Buttons</td>
      <td>Solutions</td>
    </tr>
  </thead>
  <tbody>
    ${model.table.map(row => rowTemplate(row)).join(``)}
  </tbody>
</table>`;

module.exports = class {
  static generate(model) {
    fs.writeFile(`./readme.md`, template(model), err => err ? console.err(err) : console.log(`done`));
  }
};
