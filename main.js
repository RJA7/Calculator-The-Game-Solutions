const Solver = require(`./solver`);
const levels = require(`./levels`);
const Readme = require(`./readme`);

const model = {
  name     : `Calculator: The Game Solutions`,
  icon     : `https://appclarify.com/wp-content/uploads/2017/07/Calculator-The-Game.png`,
  avatar   : `https://avatars2.githubusercontent.com/u/16480809?s=460&v=4`,
  reference: `https://github.com/RJA7`,
  author   : `RJA`,

  table: Object
    .keys(levels)
    .sort((a, b) => a.slice(2) - b.slice(2))
    .map((key, i) => Object.assign({number: i + 1}, levels[key], {results: new Solver(levels[key]).exec()})),
};

Readme.generate(model);
