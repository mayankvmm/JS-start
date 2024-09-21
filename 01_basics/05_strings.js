const name = "mayank";
const repoCount = 50;

console.log(`Hello name is ${name} and age ${repoCount} , ...`);

const gameName = new String('Mayank-vm');
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); // No change in original value

console.log(gameName.charAt(2));
console.log(gameName.indexOf("a"));

const s_name = gameName.substring(0, 4);
console.log(s_name);

const temp_name = gameName.slice(-3, 9);
console.log(temp_name);

const newString = "    laude   ";
console.log(newString.trim());

const url = "https://mk.com/mayank%28verma"
console.log(url.replace("%28", "-"));
console.log(url.includes("verma"));

console.log(gameName.split('-'));