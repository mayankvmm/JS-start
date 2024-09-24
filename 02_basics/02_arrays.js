const marvelHeroes = ["spiderman", "wanda", "loki"];
const dc = ["batman", "superman", "wonder woman"]
//marvelHeroes.push(dc);
console.log(marvelHeroes);

// const newArr = marvelHeroes.concat(dc);
// console.log(newArr);

const all_new = [...marvelHeroes, ...dc];
console.log(all_new);
console.log(``);

const depthArr = [1, 2, [3, 4], 6, [7, [8, 9]]];
const flatten = depthArr.flat(Infinity);
console.log(flatten);
 
console.log(Array.isArray('madarchod'));
console.log(Array.from('madarchod'));
console.log(Array.from({name : 'mayank'}));

let score1 = 100, score2 = 200, score3 = 300;
console.log(Array.of(score1, score2, score3));