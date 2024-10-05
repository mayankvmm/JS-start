// for in
// This loop basically gives keys
const myObj = {
    cpp : "C++",
    js : "Javascript", 
    rb : "Ruby"
}

for (const key in myObj) {
    // console.log(`${key} is shortcut for ${myObj[key]}`);
}

const programLang = ['js', 'c++', 'java', 'python']
for (const key in programLang) {
    // console.log(programLang[key]);
}

const map = new Map();
map.set('Mc', 'MAdarchod')
map.set('bkl', 'Bhen ke laude')
map.set("bc", "Bhenchod")
// cannot iterate in map using for in
for (const key in map) {
    console.log(key);
    
}