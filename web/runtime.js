var varGlobal = "var Global"
let letGlobal = "let Global"
const constGlobal = "const Global"

console.log(undefinedVariable)

function es5(){
    console.log("ES5 Function Executed")
}

varArrowFunc()

var varArrowFunc = () => {
    console.log("var Arrow Function Executed")
}
let cletArrowFunc = () => {
    console.log("let Arrow Function Executed")
}
const constArrowFunc = () => {
    console.log("const Arrow Function Executed")
}

const show = (x, y, z) => {
    console.log(`${x} - ${y} - ${z}`)
}

show(varGlobal, letGlobal, constGlobal);
{
    var varGlobal = "var Global"
    let letGlobal = "let Global"
    const constGlobal = "const Global"
    show(varGlobal, letGlobal, constGlobal);
}
show(varGlobal, letGlobal, constGlobal);

var varGlobal = "var Global - Changed"
let letGlobal = "let Global - Changed"
const constGlobal = "const Global - Changed"

show(varGlobal, letGlobal, constGlobal);