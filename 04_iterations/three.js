const lang = ['js', 'c++', 'java', 'python']

lang.forEach( function (item) {
    // console.log(item);
} )

lang.forEach( (elem) => {
    // console.log(elem); 
} )

function printMe (elem) {
    console.log(elem);
}
    
// lang.forEach(printMe)

lang.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

const arrObj = [
    {
        langName : "C++",
        fileName : "cpp" 
    },
    {
        langName : "javascript",
        fileName : "js" 
    },
    {
        langName : "python",
        fileName : "py" 
    }
]

arrObj.forEach( (item) => {
    console.log(item.langName);
    
})