// store the differences in hoisting
console.log(show1)
console.log(show2)

function show1() {
    console.log("Hello")
}
var show2 = () => {
    console.log("Hello")
}

// store the execution in call method
var custObj = {
    name: 'Masum Billah',
    age: 21,
    anotherObj: {
        name: "Billah Masum",
        value: function () {
            console.log(`My name is ${this.name}`);
        }.call(custObj)
    }
}

// strict mode/execution context/hoisting
address = "Cumilla";
function aFunc(){
    job = "student";
    console.log("A Function with strict mode is enabled");
}
aFunc();
console.log(`I ama a ${job} and i am from ${address}`)


var Person = function(name, age) {
    this.name = name;
    this.age = age;
}
console.log(Person("masum", 21));

// this
function show(){
    console.log(this);
}
const display = () => {
    console.log(this);
}
show()
display()

// this and lexical scope
const lex = {
    aFunc: function(){
        console.log(this);
        return function(){
            console.log(this)
        }
    }
}

// new
console.dir(new Array())
console.dir(Array)
console.dir(Array())


// rest parameter
function argMeth(){
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.map((item)=>{
        console.log(item)
    })
}