# Index

- [Javascript](#javascript)
  - [ECMAScript](#ecmascript)
  - [Array](#array)
  - [Loop](#loop)
  - [REPL](#repl)
  - [Console](#console)
  - [DOM](#dom)
  - [Window Object](#window-object)
  - [Syntactic Sugar](#syntactic-sugar)
  - [Expression](#expression)
  - [Statement](#statement)
  - [Variable Declaration](#variable-declaration)
  - [Temporal Dead Zone](#temporal-dead-zone)
  - [Hoisting](#hoisting)
  - [Error](#error)
  - [Exception](#exception)
  - [throw](#throw)
  - [Error Object](#error-object)
  - [Truthy](#truthy)
  - [Falsy](#falsy)
  - [Console](#console)
  - [IIFE](#iife)
  - [First Class Function](#first-class-function)
  - [Lexical Scoping](#lexical-scoping)
  - [Template Literal](#template-literal)
  - [Spread Opertor](#spread-opertor)
  - [Map](#map)
  - [String](#string)
  - [Type Conversion](#type-conversion)
  - [Math Object](#math-object)
- [Engine](#engine)
- [Runtime](#runtime)
- [Prototype](#prototype)
- [Thread](#thread)
- [Execution Context](#execution-context)
- [Synchronous](#synchronous)
- [Asynchronous](#asynchronous)
- [Callback Function](#callback-function)
- [Promise](#promise)
- [async/await](#asyncawait)
- [Class](#class)
- [Constructor](#constructor)
- [OOP](#oop)

# Javascript

**Dynamic Typing:** JavaScript is a dynamically typed language, meaning you don't need to declare variable types explicitly. The type is determined at runtime.
**Interpreted Language:** Unlike compiled languages like C or Java, JavaScript code is interpreted by the browser in real-time, which makes development and debugging more flexible and fast.
**Prototype-based Object Orientation:** JavaScript uses prototypes rather than classical inheritance models (like in Java or C++). This means objects can inherit properties directly from other objects.
**First-class Functions:** Functions in JavaScript are first-class citizens, meaning they can be treated like any other variable. They can be passed as arguments, returned from other functions, and assigned to variables.

- high-level
- just-in-time-compiled
- multi-paradigm
- event-driven
- functional
- imperative-programming-style

## ECMAScript

It is the standard that defines JavaScript, providing guidelines for its implementation and the syntax that modern JavaScript adheres to. It is the specification of scripting language which set rules.

Javascript first introduced in 1995 as `LiveScript`, but during development it called `Mocha`. But in the next year, in 1995 it changed to `Javascript`.

**Key Features of ES6:**

- Arrow Functions
- Classes
- Template Literals
- Destructuring Assignment
- Default Parameters
- Modules
- Promises
- Let and Const
- Rest and Spread Operators

## Array

### `map()`

- **creates a new array** by applying a function to each element of the original array.
- It does not modify the original array
- callback return transformed value

### `filter()`

- **creates a new array** with all elements that pass a test (specified by a function).
- It does not modify the original array
- callback return boolean value

### `reduce()`

- **applies a function against an accumulator** and each element in the array (from left to right) to reduce it to a single value.
- callback return updated accumulator

### Differences

| Aspect                   | `map()`                                                     | `filter()`                                                                                   | `reduce()`                                                   |
| ------------------------ | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **Purpose**              | Transforms each element in the array                        | Selects elements that pass a test                                                            | Reduces all elements to a single value                       |
| **Return Value**         | New array with transformed elements                         | New array with filtered elements                                                             | Single accumulated value                                     |
| **Callback Behavior**    | Callback should return a transformed value for each element | Callback should return `true` or `false` (indicating whether the element should be included) | Callback should return an updated accumulator                |
| **Use Cases**            | Data transformation, like multiplying each element          | Filtering out elements, like even numbers                                                    | Aggregating values, like calculating sum or product          |
| **Callback Parameters**  | Element, index (optional), and array (optional)             | Element, index (optional), and array (optional)                                              | Accumulator, element, index (optional), and array (optional) |
| **Initial Value Needed** | No                                                          | No                                                                                           | Yes (recommended but not required)                           |

### `some()`

It tests whether **at least one element** in the array passes the condition defined in the callback function. If it finds an element that satisfies the condition, it returns `true`; otherwise, it returns `false`.

### `every()`

It tests whether **all elements** in the array passes the condition defined in the callback function. If it finds all elements that satisfies the condition, it returns `true`; otherwise, it returns `false`.

### Differences

| Method    | Description                                                     | Stops at      |
| --------- | --------------------------------------------------------------- | ------------- |
| `some()`  | Returns `true` if at least one element satisfies the condition. | First `true`  |
| `every()` | Returns `true` only if all elements satisfy the condition.      | First `false` |

## Loop

### Differences between `for...of` and `for...in`

| Feature           | `for...of`                              | `for...in`                         |
| ----------------- | --------------------------------------- | ---------------------------------- |
| Works with        | Iterables (arrays, strings, maps, etc.) | Objects and their keys             |
| Iterates over     | Values                                  | Keys (property names)              |
| Suitable for      | Arrays, strings, Maps, Sets             | Objects                            |
| Prototype chain   | Does not include prototype properties   | Includes properties from prototype |
| Example Structure | `for (const item of iterable) {}`       | `for (const key in object) {}`     |

## REPL

REPL stands for Read-Eval-Print Loop, and it’s an interactive programming environment often used for testing code snippets. In JavaScript, REPL allows you to execute code line by line and see the output immediately, which is especially useful for debugging, experimenting, and learning how JavaScript works

Here's how the REPL process works:

1. **Read**: It reads the user input (a JavaScript expression or command).
2. **Eval**: It evaluates or executes the code entered.
3. **Print**: It prints the result of the evaluation back to the user.
4. **Loop**: It repeats the process, allowing you to enter new commands.

REPL is accessible in environments like Node.js, the browser console, or other JavaScript runtimes that support interactive execution.

If you have Node.js installed, you can access its REPL environment by simply typing node in your command line or terminal.

In most browsers, you can open the developer console (usually via F12 or Ctrl+Shift+J/Cmd+Option+J) to access a JavaScript REPL. Here, you can type JavaScript code and get instant feedback just like in Node.js.

## Console

In the JavaScript console, if you assign a value to a variable, you might notice that the console outputs `undefined` on the next line. This behavior happens because the console evaluates the entire expression, but variable assignment itself doesn’t have a return value, which results in `undefined`.

So, seeing `undefined` is just a signal that the variable was assigned successfully, and there was no value to display from that operation itself.

1. `console.log()` - Logs general information, such as variable values or messages, useful for debugging.
2. `console.error()` - Logs error messages in red to indicate issues, helping with error debugging.
3. `console.warn()` - Logs warning messages in yellow, often used for deprecated features or potential issues.
4. `console.info()` - Logs informational messages; similar to `console.log()` but semantically meant for information.
5. `console.table()` - Displays data in a table format, great for visualizing arrays or objects in an organized way.
6. `console.assert()` - Logs an error message if a specified condition is `false`.
7. `console.group()` - Starts a new inline group, allowing you to visually organize logs into expandable sections.
8. `console.groupCollapsed()` - Starts a new inline group, but the group is initially collapsed. Useful for less important log groups.
9. `console.groupEnd()` - Ends the most recently opened `console.group()` or `console.groupCollapsed().`
10. `console.time()` - Starts a timer with a given label, useful for measuring time taken for code execution.
11. `console.timeEnd()` - Stops a timer started with `console.time()` and logs the elapsed time.
12. `console.clear()` - Clears the console, useful for resetting the view.
13. `console.trace()` - Outputs a stack trace, showing the sequence of function calls leading to a specific point in code.
14. `console.count()` - Logs the number of times it has been called with a given label, useful for counting occurrences.
15. `console.countReset()` - Resets the count for a given label started with `console.count()`.
16. `console.dir()` - Displays an interactive list of properties of a JavaScript object, useful for inspecting detailed object structure.

## DOM

The Document Object Model (DOM) is a programming interface for web documents(XML/HTML). It represents the structure of a web page in a tree-like model, allowing developers to access and manipulate elements on a page using JavaScript.

**Key Concepts of DOM:**

- Tree Structure
- Nodes and Elements
- DOM Manipulation

NodeJS doesn't have DOM, DOM can only be accessed in the browser.

### DOM Tree Structure

The DOM tree represents the hierarchical structure of an HTML document, where:

- **Nodes**: Each part of the document is a "node" in the DOM tree. There are different types of nodes:
  - **Element Nodes**: Represent HTML elements (like `<div>`, `<p>`, `<a>`, etc.).
  - **Attribute Nodes**: Represent the attributes of elements (like `id`, `class`, `src`).
  - **Text Nodes**: Represent the actual text within elements.
  - **Document Node**: The root of the tree, representing the entire document.
- **Parent-Child Relationship**: The DOM tree establishes parent-child relationships based on the HTML structure. For instance, if an element is nested within another element, it becomes a child of that element in the DOM tree.

### `document` object

It is a part of the Document Object Model (DOM), which represents the structure of an HTML or XML document. This object serves as the entry point for accessing and manipulating the elements, attributes, and content of the webpage, allowing developers to dynamically change the HTML structure, style, and content of a page.

### Key Aspects of the Document Object

1. **Accessing Elements**: The `document` object provides methods for accessing HTML elements by ID, class, tag name, or other selectors.

2. **Modifying Content**: You can change the text, HTML, and other attributes of elements on the page.

3. **Handling Events**: You can add event listeners to elements to handle user interactions.

4. **Creating and Removing Elements**: The `document` object allows you to create new elements and remove existing ones from the DOM.

The document object is structured like a tree, with the document itself as the root node, containing various nodes (HTML elements) as branches and leaves.

## `window` object

It is the global object that represents the browser's window or the environment in which JavaScript code is running. It's the top-level object in the browser’s hierarchy, meaning every other object (like `document`, `console`, etc.) is part of the `window` object.

### Key Aspects of the `window` Object

1. **Global Scope**: Variables and functions declared globally in JavaScript are added as properties or methods of the `window` object.

2. **Browser Environment Access**: The `window` object provides methods and properties to interact with the browser, such as setting timeouts, managing browser history, handling alerts, and more.

3. **Global Properties**: Properties like `document`, `location`, `navigator`, `screen`, and `history` are part of the `window` object, providing access to various browser functionalities.

## Syntactic Sugar

It refers to syntax that makes code easier to write and read but doesn't add new functionality to the language. It actually a shorthand for a common operation that could be expressed in an alternate.

- Arrow Functions
- Template Literals
- Destructuring Assignments
- Defautl Parameters
- Class

## Expression and Statement

Expression produce value, statement perform an action

### Expression

A valid unit of code that resolves to a value.

- as simple as a number or a variable or a function.
- expression written in a single line
- a function stored in a variable(`var`, `let`, `const`) will be called expression as it's produce(return) value which may stored in that variable.
- Example: `5`, `x+2`, `Mat.max(1,2)`

```js
const someFunc = () => {
  // Function Expression
};
```

### Statement

A complete unit of execution.

- do not return a vaule but execute some some logic.
- a normal function without variable declaration(`var`, `let`, `const`) is a statement as it's perform an action when it is called
- Example: `let x=5;`, `if(x<4){`

```js
someFunc(){
    // Function Statement
}
```

## Variable Declaration

- updating/re-assigning `const` variable create `TypeError: Assignment to constant variable.` error.
  ```js
  const a = "hello";
  a = "hi";
  ```
- a variable with same name can be declare twice with `var` but not with `let` and `const`, it will create `SyntaxError: Identifier 'a' has already been declared`.

  ```JS
  let a='hello'; // ERROR
  let a="hi"; // ERROR

  var b="hello";
  var b="hello";
  ```

  a variable with same name can be declare twice with `let` if both are in different scope, this is not applicable for `const`.

  ```js
  let a = 5;
  console.log(a);
  {
    let a = 4;
    console.log(a);
  }
  console.log(a);
  ```

- `var` maintain function/global scope, `let` and `const` maintain local scope.
- Using any variable before declaration with `var` return `undefined` due to hoisting but with `let` and `const` it will return an error of `ReferenceError: Cannot access 'myVariable' before initialization` due to temporal deadzone.
  ```js
  console.log(myVariable);
  let myVariable = "Hello";
  ```

**ReferenceError**: Occurs when a variable that isn’t declared or isn’t accessible is referenced. This often happens due to misspellings, accessing variables in the temporal dead zone, or outside their scope.

**SyntaxError**: Occurs when code does not conform to the correct syntax of the language. This type of error is detected before the code is executed and typically involves missing or incorrect syntax elements.

**TypeError**: Occurs when a value is not of the expected type, such as calling a non-function as a function, or accessing properties on `null` or `undefined`.

**Explaination:**

```js
let i = 50;
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);
```

- memory allocate for initial `a` in script object with global scope
- memory allocate for last `a` in script object with local scope

### Temporal Dead Zone

Variables declared with `var` are hoisted at the top of their function scope. It means they are initialized with `undefined` even before the code execution reaches the declaration.

However, variables declared with `let` and `const` are also hoisted but they are not initialized. Instead, they are placed in the Temporal Dead Zone frome the start ot the block until the declaration is encountered.

TDZ refers to the period during which a variable is in scope but cannot be accessed because it has not been initialized.

`var` variable allocate memory in global `window` object but `let` and `const` memory allocate memory in `script` object which is why it handle differntly and value is not initialized. you can access `var` variable within `window` object(`window.variable_name`) but you can't access `let`, `const` variable except their name.

```js
console.log(x);
console.log(y); // ReferenceError
var x = 5;
let y = 6;
```

## Hoisting

It's a mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase, before the code is executed. This means that you can use functions and variables before they are declared in the code.

However, **only declarations are hoisted, not initializations**. The declaration is moved to the top, but the assignment or initialization stays in its place.

### Types of Hoisting

**1.Variable Hoisting**: - Variables declared with `var` are hoisted to the top of their scope but are initialized with `undefined` until they are assigned a value. - `let` and `const` declarations are hoisted but are not initialized. They are in a "temporal dead zone" (TDZ) from the start of the block until the declaration is encountered.

**2.Function Hoisting**: - Function declarations are fully hoisted. This means you can call the function even before it is declared in the code. - Function expressions assigned to variables (using `var`, `let`, or `const`) are not hoisted in the same way as function declarations

```js
greet(); // Output: Hello, World!

function greet() {
  console.log("Hello, World!");
}
```

**Function Expression:**

```js
sayHello(); // TypeError: sayHello is not a function

var sayHello = function () {
  console.log("Hello!");
};
```

## Error

### Error

An object that represents an issue that occurs during the execution of a program. It is a buit-in object with several types such as `TypeError`, `ReferenceError`, `SyntaxError`, `RangeError`.

```js
let x = 1;
console.log(y); // ReferenceError
```

### Exception

When an error occurs, it creates an exception that handleed using `try`, `catch`, `finally`.

```js
try {
  let x = 1;
  console.log(y); // ReferenceError
} catch (error) {
  console.log(error);
}
```

In summary, error is a problem and exception is the handling mechanism for such problems.

### throw

It is used to create and throw custom errors or exceptions. By using `throw` you are generating an exception that disrupts the normal flow of the code, allowing it to be caught and handled by `try...catch` blocks.

```js
const age = 17;
try {
  if (age < 18) {
    throw "You are too young";
    console.log("will not execute");
  } else {
    console.log("your are adult");
  }
} catch (error) {
  console.log("will not execute");
  console.log(error);
}
```

It allows you to create and propagate exceptions, enabling you to handle errors and control the flow of your program when something goes wrong.

### Error Object

The `Error` object is a buit-in object that provides a standarized way to handle and describe errors in a program.

**Properties:**

- `name` - represent the name of the error type.
- `message` - describe the error.
- `stack` - details about the error.

**Handle Error:**

```js
try {
  if (age < 18) {
    throw new Error("You are too young");
  } else {
    console.log("your are adult");
  }
} catch (error) {
  console.log(error.name); // Error
  console.log(error.message); // You are too young
  console.log(error.stack);
}
```

**Custom Error:**

```js
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "Custom Error";
    this.stack = "Error Occured at specific line";
  }
}
let customError = new CustomError("Error Occurred");
console.log(customError.name); // Custom Error
console.log(customError.message); // Error Occurred
console.log(customError.stack); // Error Occured at specific line
```

## Truthy

A `truthy` value is any value that is considered `true` when encountered a boolean context. All values are truthy unless they are defined as falsy.

- non-zero numbers
- no-empty strings
- objects and arrays even empty object and array
- any function
- `new Date()` is truthy
- `Symbol()` is truthy
- `Infinity` and `-Infinity` both are truthy

## Falsy

A `falsy` value is any value that is considered `false` when encountered a boolean context. There are only few falsy values in javascript:

- `0`, `-0`, `false` are falsy
- BigInt zero `0n` is falsy
- empty string
- `null`, `undefined`, `NaN` is falsy

## Console

- to write multiple line in console use `shift+Enter`

## IIFE

`Immediatley Invoked Function Expression` is a function that runs as soon as it is defined.

### Syntax

```js
(function () {
  // your code here
})();
```

**OR**

```js
(function () {
  // your code here
})();
```

Function Expression also works with IIFE

```js
const sum = (function () {
  return 10 + 20;
})();
console.log(sum);
```

`sum` will be `30`, don't need call the function

# First Class Function

- Function can be used as value like storing in variable, passing as arguments, returning as value.

## HOF

High Order Function is a function that either:

- takes one or more functions as arguments.
- returns a function as its result.

**Common HOF in Javascript:**

- [map()](#map)
- [filter()](#filter)
- [reduce()](#reduce)
- [forEach()](#forEach)
- [sort()](#sort)

### Custom HOF

**Example:**

```js
const performOperation = (operation) => {
  console.log("Operation Request Accepted");
  return operation;
};
const add = (a, b) => {
  return a + b;
};
const addOperation = performOperation(add);
console.log(addOperation(4, 5));
```

`performOperation` is a HOF

## Lexical Scoping

It determines how variable names are resolved in nested functions which is by their position within the source code, specifically where they are declared within the nested scopes (such as functions or blocks).

## Template Literal

It enclosed by backticks(`) rather than a single quote or double quote.

1. **String Interppolation** - embed expressions directly within the string using `${}`
   ```js
   const name = "Masum";
   console.log(`Hello ${name}`);
   consle.log(`The sume of 5 and 6: ${5 + 6}`);
   ```
   It memorize space, new line and display as you written it like `<pre>` tag in html
2. **Multi-line String** - create multi-line string without using special character like `\n`
3. **Nesting**

```js
const person = {
  name: "Masum",
  school: "SSS",
  college: "HAC",
  university: "NSTU",
};
console.log(`
Name: ${person.name}
Education:
${`School: ${person.school},
College: ${person.school},
University: ${person.university}
`}
`);
```

4. **Tagged Template Literals** - It allow to parse template literals with a function.

```js
const tag = (strings, ...values) => {
  console.log(strings);
  console.log(values);
};
const firstperson = "Masum";
const secondperson = "Billah";
tag`Hello ${firstperson} and ${secondperson}`;
```

- `strings` - An array containing the literal portions of the template(the parts of the string that are not expressions)
- `values` - the rest parameter(`...values`) contains the evaluated values of the embeded expressions(the parts inside `${}`)

**Output:**

```js
["Hello ", " and ", ""][("Masum", "Billah")];
```

Don't forget to call the tagged function with backtick. Regular functin output this.

```js
tag(`Hello ${firstperson} and ${secondperson}`);
// Hello Masum and Billah
// []
```

### Comparison: Concatenation vs. Template Literals

| Feature                  | Concatenation                                        | Template Literals                                                 |
| ------------------------ | ---------------------------------------------------- | ----------------------------------------------------------------- |
| **Syntax**               | Uses `+` operator                                    | Uses backticks (`` ` ``) and `${}` for expressions                |
| **Readability**          | Can become cluttered with long strings and variables | More readable, especially with embedded variables and expressions |
| **Multi-line Strings**   | Requires `\n` or concatenation of multiple lines     | Supports multi-line strings directly                              |
| **Embedded Expressions** | Difficult to include logic or calculations directly  | Can embed expressions, e.g., `${2 + 3}` = `5`                     |
| **Performance**          | No significant performance difference in most cases  | Similar to concatenation in terms of performance                  |

## Spread Opertor

It's commonly used to create a shallow copy of an array without altering the original array.

**Reference:** It create a new copy of the original array with a new reference. So when you change the copy of the array it update the new reference, doesn't affect the original array

```js
const x = [1, 2, 3];
const z = [...x];
console.log(z);
z.push(100);
console.log(z);
console.log(x);
```

**Shallow copy** meaning that it copies the elements at the top level of the array but does not deeply clone nested objects or arrays. If the array contains objects, only the references to those objects are copied, not the objects themselves. Changes to nested objects will affect both arrays.

```js
const originalArray = [{ a: 1 }, { b: 2 }];
const copiedArray = [...originalArray];

copiedArray[0].a = 10;
console.log(originalArray); // Output: [{ a: 10 }, { b: 2 }]
console.log(copiedArray); // Output: [{ a: 10 }, { b: 2 }]
```

- It can be used with strings to treat each character of a string as an individual element.

## Map

It is a built-in object that allow to store key-value pairs, where any value (both objects and primitive values) can be used as either a key or a value. Unlike plain JavaScript objects, a Map retains the **order** of the keys and allows keys of any data type.

- Maps remember the original insertion order of the keys. This means if you iterate over a Map, the items will be iterated in the order they were added.
- Unlike objects, where keys are automatically converted to strings, a Map can use keys of any type, such as objects, functions, or primitive types like numbers and strings
- **Map Methods**: `Map` comes with various built-in methods that make it easier to interact with its data. Some of the most used methods are:
- `set(key, value)`: Adds or updates a key-value pair.
- `get(key)`: Retrieves the value for a given key.
- `has(key)`: Checks if a key exists in the `Map`.
- `delete(key)`: Removes a specific key-value pair.
- `clear()`: Removes all key-value pairs.
- `keys()`: Returns an iterator for keys.
- `values()`: Returns an iterator for values.
- `entries()`: Returns an iterator for `[key, value]` pairs.

```js
const map = new Map();

map.set("name", "Alice");
map.set("age", 30);
map.set(true, "boolean key");
map.set({ id: 1 }, "object key");

for (let [key, value] of map.entries()) {
  console.log(`${key}: ${value}`);
}
```

## String

- [repeat](#repeat)
  String methods are only used with string, never use it with other data type

### repeat

It is used to repeat a string multiple time

```js
console.log(`${"Alhamdulillah ".repeat(5)}`);
// Alhamdulillah Alhamdulillah Alhamdulillah Alhamdulillah Alhamdulillah
```

## Type Conversion

It happens in two forms:

- [Implicit Conversion (Type Coercion)](#implicit-conversion-type-coercion)
- [Explicit Conversion](#explicit-conversion)

### Implicit Conversion (Type Coercion)

JavaScript automatically converts types when needed. This can happen with operations like addition, comparison, or when using logical operators.

1. JavaScript will convert a value to a string when it is used with the `+` operator alongside a string.

```js
let result1 = "Hello" + 5;
console.log(result1); // Output: "Hello5"
let result2 = "10" + 20 + 30;
console.log(result2); // Output: "102030"
let result3 = 20 + 30 + "40";
console.log(result3); // Output: "5040"
```

2. When using arithmetic operators other than `+` (like `-`, `*`, `/`, `%`), JavaScript converts non-numeric values to numbers.

```js
let result1 = "5" - 2;
console.log(result1); // Output: 3
let result2 = "10" * "2";
console.log(result2); // Output: 20
```

3. JavaScript considers certain values as **truthy** or **falsy**.
4. JavaScript performs implicit conversion in loose equality checks (`==`). It tries to make both values the same type before comparing them.

### Explicit Conversion

Explicit conversion is done manually using JavaScript's built-in functions. Common methods include:

- `String()` to convert to string
- `Number()` to convert to number
- `Boolean()` to convert to boolean
- `parseInt()` and `parseFloat()` to convert strings to numbers

## Math Object

It's not a constructor, so we don't use `new Math()`. Instead, we call the methods and properties directly on `Math`.

### Constants

- Math.PI
- Math.E
- Math.LN2
- Math.LN10
- Math.SQRT2

### Rounding Methods

- Math.round(x)
- Math.ceil(x)
- Math.floor(x)
- Math.trunc(x)

### Arithmetic Methods

- Math.abs(x)
- Math.pow(base, exponent)
- Math.sqrt(x)
- Math.cbrt(x)
- Math.max(a, b, ..., n)
- Math.min(a, b, ..., n)

### Trigonometric Methods

- `Math.sin(x)`, `Math.cos(x)`, and `Math.tan(x)` – Return the sine, cosine, and tangent of `x` (in radians).
- `Math.asin(x)`, `Math.acos(x)`, `Math.atan(x)` – Return the inverse sine, cosine, and tangent of `x`.
- `Math.atan2(y, x)` – Returns the angle (in radians) between the positive x-axis and the point `(x, y)`.

### Logarithmic and Exponential Methods

- `Math.exp(x)` – Returns Euler’s number raised to the power of `x`.
- `Math.log(x)` – Returns the natural logarithm (base e) of `x`.
- `Math.log10(x)` – Returns the base-10 logarithm of `x`.
- `Math.log2(x)` – Returns the base-2 logarithm of `x`.

# Engine

## Components

1. **Parser**

   - The JavaScript engine first parses the JavaScript code into a data structure called an **Abstract Syntax Tree (AST)**.
   - The parser analyzes the syntax of the code to ensure it’s valid.

2. **Interpreter**

   - The engine initially uses an interpreter to convert the AST into bytecode and executes it directly.
   - This is fast to start execution but can be inefficient for repetitive operations.

3. **JIT Compiler (Just-In-Time Compiler)**

   - Modern engines (like Google Chrome's V8) use a Just-In-Time (JIT) compiler to optimize code during runtime.
   - The JIT compiler converts frequently used code (hot code) into machine code for faster execution.
   - Optimization: The engine identifies repeated code patterns and optimizes them dynamically.

4. **Garbage Collector**

   - The garbage collector automatically manages memory by removing objects that are no longer in use, freeing up space.

5. **Execution Stack (Call Stack)**

   - JavaScript has a single-threaded execution model with an execution stack (also called the call stack) where functions are pushed and popped as they are executed.

6. **Event Loop and Callback Queue**

   - JavaScript uses an event loop to handle asynchronous code (e.g., `setTimeout`, HTTP requests, promises).
   - The engine places callback functions in a queue and executes them when the call stack is empty.

## Step-by-Step Process

1. **JavaScript Code:** The engine takes your JavaScript code as input.
2. **Parsing:** The code is parsed into an Abstract Syntax Tree (AST) to understand its structure.
3. **Compilation:**

   - Code is first interpreted into bytecode for quick execution.
   - The JIT compiler further optimizes the bytecode into machine code for better performance.

4. **Execution:**

   - The engine executes the code, pushing and popping functions from the call stack.
   - If there’s asynchronous code, the event loop manages it.

5. **Garbage Collection:** Memory cleanup is performed in the background.

## Dependencies

Two critical dependencies of Node.js are:

1. V8 Engine – Executes JavaScript code.
2. Libuv – Provides an asynchronous, event-driven I/O model.

### V8 Engine

1. **Compilation to Machine Code**

   - V8 uses a Just-In-Time (JIT) compiler that converts JavaScript into optimized machine code instead of interpreting it line-by-line.

2. **Memory Management**

   - V8 includes a garbage collector to automatically free unused memory.

3. **Optimizations**

   - V8 optimizes JavaScript execution through inline caching, hidden classes, and other techniques.

4. **Execution of JavaScript APIs**

   - It supports JavaScript features like `Array`, `Promise`, and `Map`.

### Libuv

1. **Event Loop**

   - Libuv implements the event loop, which allows Node.js to handle multiple asynchronous tasks efficiently in a single thread.

2. **Thread Pool**

   - For tasks that cannot be performed asynchronously (e.g., file I/O), libuv uses a thread pool to offload blocking operations.

3. **Timers**

   - Libuv provides support for functions like setTimeout and setInterval.

4. **File System I/O**

   Libuv enables non-blocking file system operations.

5. **Networking**

   - Libuv supports TCP, UDP, and DNS functionalities.

6. **Child Processes**

   Libuv helps Node.js spawn child processes using its threading capabilities.

# Runtime

![Runtime](jsruntime.png)

## Components

1. **JavaScript Engine**

   - Responsible for parsing and executing JavaScript code.
   - Examples: V8 Engine (Chrome), SpiderMonkey (Firefox), JavaScriptCore (Safari).

2. **Call Stack**

   -A stack-like data structure where function calls are pushed and popped as the code executes.

   - Follows a Last In, First Out (LIFO) approach.

3. Web APIs

   - Provided by the browser to handle tasks like DOM manipulation, setTimeout, HTTP requests (AJAX, fetch), and more.
   - Examples:
     - setTimeout (Timers API)
     - fetch or XMLHttpRequest (Networking API)
     - Event listeners for user interaction.

4. **Callback Queue**

   - A queue that holds callback functions (from asynchronous operations) that are ready to be executed.

5. **Event Loop**

   - A mechanism that continuously checks whether the call stack is empty.
   - If the call stack is empty, it moves callbacks from the callback queue to the call stack for execution.

6. **Microtask Queue**

   - Handles higher-priority asynchronous tasks, such as `Promise` callbacks or `MutationObserver`.
   - Microtasks are executed before tasks in the callback queue.

## How Runtime Works

1. **Synchronous Code Execution**

   - JavaScript executes synchronous code line by line using the call stack.

2. **Web APIs**

   - If asynchronous code (e.g., `setTimeout`, `fetch`) is encountered, the task is offloaded to the browser's Web APIs.

3. **Callback Queue and Microtask Queue**

   - Once the asynchronous task is complete, the browser places the callback in either the callback queue (for `setTimeout` and events) or the microtask queue (for Promises).

4. **Event Loop**

   - The event loop checks whether the call stack is empty.
   - If it is, it first processes any tasks in the microtask queue, and then processes tasks in the callback queue.

5. **Execution of Callbacks**

   -Callbacks are moved to the call stack and executed.

# Prototype

It is a mechanism by which objects inherit properties and methods from other objects. JavaScript is prototype-based, meaning that inheritance is achieved through prototypes rather than traditional classes (although ES6 introduced `class` syntax, it’s still built on prototypes under the hood).

## Key Concepts

1. **Prototype Chain**: Every JavaScript object has an internal link to another object called its prototype. This chain of linked objects continues until it reaches an object with a `null` prototype, known as the end of the prototype chain. When a property or method is accessed on an object, JavaScript will look for it on the object itself first, then on its prototype, and so forth, traversing up the chain until it finds the property or reaches the end of the chain.

2. **Prototype Property** (**proto** and **.prototype**):

- **proto**: Every JavaScript object has a hidden **proto** property, which points to its prototype.
- **.prototype**: Only functions (constructor functions) have the **.prototype** property. This property allows you to add properties and methods that should be inherited by all instances created from the constructor.

3. **Inheritance in JavaScript**: By using prototypes, objects can share properties and methods without duplicating them for each instance. This is memory-efficient and allows methods to be updated or modified once on the prototype, affecting all instances that inherit from it.

## Example

```js
// Step 1: Create a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Step 2: Add a method to the prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Step 3: Create instances of Person
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

// Step 4: Call the prototype method
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 30 years old.
```

# Thread

## Process

A process is an independent program in execution with its own memory space

## Thread

A thread is the smallest unit of execution within a process. It allow a program to perform multiple task simultaneously.

## Multithread

Multiple threads can exist within the same process sharing the same space but executiong independently.

## Threads in Javascript

Javascript is inherently single-threaded, meaning it execute one operation at a time within a single thread.

1. **Heap** is s region of memory where javascript store variables.
2. **Call Stack**

   Where js keeps track of function calls and their execution context. When a function is invoked, it gets added to the call stack. Once the execution is complete, it gets removed from the stack.

3. **Execution Context**

   Before any code runs, javascript creates an execution context which is responsible for setting up the environment where your code runs.

## Multithreads in Javascript

Modern js environment offer ways to simulate multit-hreading through web workers and other concurrency mechanisms.

1. **Web Workers**

   It allow js to run scripts in the background, independent of the main execution thread. It enable task that are computionally heavy run without blocking the user interface

2. **Callback Queue**

   Contain a list of tasks that are waiting to be executed. When an asynchronous operation completes, its callback is placed in the callback queue.

3. **Event Loop**

   Its primary job is to continously monitor the call stack and callback queue, managing the execution of code, collectiong and processing events and executiong sub-tasks.

# Execution Context

## Types

- [Global Execution Context](#global-execution-context)
- [Functon Execution Context](#functon-execution-context)
- [Eval Execution Context](#eval-execution-context)

```js
const root=5;
const squareNumber=(n)=>{
    int a=n*n;
    return a;
}
const square=squareNumber(root);
```

## Memory Management

- [Heap](#heap)
- [Callstack](#callstack)

## Phases of Execution

- [Creation Phase](#creation-phase)
- [Execution Phase](#execution-phase)

### Global Execution Context

- Created when javascript starts executing
- It's the base execution context
- It hase the global object
  - `window` in browser
  - `global` in Node.js
- `this` pointing the global object
- variable and functions declared at the global level are stored in this context

### Functon Execution Context

- Created whenever a function is invoked
- Each funtion call has its own execution context
- contain local variable, `arguments` object

### Eval Execution Context

- Created when code is executed inside an `eval` function

### Creation Phase

Memory is allocated for variables and functions. Variables are set to `undefined`([Hoisting](#hoisting)), and functions are stored the function body.

**Explaination:**

- Global Execution Context
  - memory allocate for `root` and values set to `undefined`
  - memory allocate for `squareNumber` and values set to the description of the function
- Function Execution Context
  - memory allocate for `a` and values set to `undefined`
  - pushed the new execution context onto the stack

### Execution Phase

- Code is executed line by line
- variables are assigned their actual values(replacing `undefined`)

**Explaination:**

- Global Execution Context
  - `root` variable replace it's value with `5` instead of `undefined`
  - return the value of `squareNumber` whenver it is called
- Function Execution Context
  - replace the value of `a` with `n*n`
  - return the value of `a` when the function is invoked

## Callstack

- its also called `Execution Context Stack`
- whenever a new execution context is created(a function is invoked), it is pushed onto the stack
- when a function is completes, its execution context is popped off the stack

## Heap

- it stores the value of the variables, functions.

# Synchronous vs Asynchronous

Most of the language work synchronously by default. Javascript is a synchronous programming language also but if we want to work with any remote server which is called ajax call, javascript behaves like asynchronous.

## Synchronous

It means each statement is executed one after the other, in order they appear in the code(Top to Bottom). Synchronous code `blocks`(whole browser, user can't even click any event) the execution of subsequent code until the current operation finishes. It's operations is slow and you can predict the order of execution as well.

```js
const processOrder = (orderNumber) => {
  console.log(`Processing Order ${orderNumber}`);

  let currentTime = new Date().getTime();
  while (currentTime + 3000 >= new Date().getTime());

  console.log(`Proceed Order ${orderNumber}`);
};
console.log("Take Order 1");
processOrder(1);
console.log("Completed Order 1");
console.log("Take Order 1");
processOrder(2);
console.log("Completed Order 1");
```

## Asynchronous

It allow to handle operations that take time to complete such as network request, file reading, timers erct `without blocking` the main thread.

```js
const processOrder = (orderNumber, requiredTime) => {
  console.log(`Proces Order Start ${orderNumber}`);

  setTimeout(() => {
    console.log(`Processing Order ${orderNumber}`);
  }, requiredTime);

  console.log(`Proceed Order ${orderNumber}`);
};
console.log("Take Order 1");
processOrder(1, 3000);
console.log("Completed Order 1");
console.log("Take Order 1");
processOrder(2, 5000);
console.log("Completed Order 1");
```

But if you look into the output sequence, this doesn't follow proper order, though it execute asynchronously.

```
Take Order 1
Proces Order Start 1
Proceed Order 1
Completed Order 1
Take Order 2
Proces Order Start 2
Proceed Order 2
Completed Order 2
Processing Order 1
Processing Order 2
```

See the output, order completion execute before processing order. But it should be execute sequentially, like take order, process order, complete order. Callback function solve this problem, with callback function we can execute function sequentially as well as asynchronously.

Look at this example, order 1 and order 2 execute sequentially and asynchroously.

```js
const takeOrder = (orderNumber, callback) => {
  console.log(`Take Order ${orderNumber}`);
  callback(orderNumber);
};
const processOrder = (orderNumber, callback) => {
  console.log(`Proces Order Start ${orderNumber}`);

  setTimeout(() => {
    console.log(`Proceed Order ${orderNumber}`);
    callback(orderNumber);
  }, 3000);
};
const completeOrder = (orderNumber, callback) => {
  console.log(`Completed Order ${orderNumber}`);
};

takeOrder(1, (orderNumber) => {
  processOrder(1, (orderNumber) => {
    completeOrder(1);
  });
});
takeOrder(2, (orderNumber) => {
  processOrder(2, (orderNumber) => {
    completeOrder(2);
  });
});
```

# Callback Function

A callback function is a function that is passed as an `argument` to another function and is `executed after the completion` of that function.

The idea behind a callback function is to make sure that a certain code is executed only after another code has finished executing.

In the script below, due to the asynchronous behaviour of javascript, the processing script run first, then the fetching script. But this shouldn't happen, fetching script should run first, then processing script.

```js
const fetchData = () => {
  console.log("Fetching Data...");
  setTimeout(() => {
    console.log("Data Fetched");
  }, 3000);
};
const processData = (data) => {
  console.log("Processing Data -> " + data);
};
fetchData();
processData("completed");
```

Callback function solve this problem by ensuring the execution of argument function before completion the parente function.

```js
const fetchData = (callback) => {
  console.log("Fetching Data...");
  setTimeout(() => {
    console.log("Data Fetched");
    callback("Completed");
  }, 3000);
};
const processData = (data) => {
  console.log("Processing Data -> " + data);
};
fetchData(processData);
```

**Real Example:** How api works

```js
function getSomeData(url, callback) {
  setTimeout(() => {
    const fakeData = "Fetched data from " + url;
    callback(fakeData);
  }, 2000);
}

getSomeData("https://api.example.com", (data) => console.log(data));
```

## Callback Hell

A situation where multiple nested callbacks are used in asynchronous code, resulting look like pyramid, difficult to read, maintain and debug.

```js
const readFile = (filename, callback) => {
  setTimeout(() => {
    console.log(`Reading file: ${filename}`);
    callback(null, "file data");
  }, 1000);
};
const processData = (data, callback) => {
  setTimeout(() => {
    console.log("Processing data");
    callback(null, "processed data");
  }, 1000);
};
const saveFile = (filename, data, callback) => {
  setTimeout(() => {
    console.log(`Saving file: ${filename}`);
    callback(null);
  }, 1000);
};
const logSuccess = (filename, callback) => {
  setTimeout(() => {
    console.log(`Success: ${filename} saved successfully`);
    callback(null);
  }, 1000);
};
readFile("file1.txt", (error, data) => {
  processData(data, (error, processedData) => {
    saveFile("file2.txt", processedData, (error) => {
      logSuccess("file2.txt", (error) => {
        console.log("All operations completed successfully!");
      });
    });
  });
});
```

# Promise

A promise is an object that represent the eventual completion or failure of an `asynchronouse` operation and its resulting value.

## Structure of a Promise

It is created using the `Promise` constructor, which takes a function(called the executor function) with two parameter: `resolve` and `reject`.

```js
const promise = new Promise((resolve, reject) => {
  // ASYNCHRONOUS OPERATION
  const successful = true;

  successful ? resolve() : reject();
});
```

The value passed in resolve method catch in the callback function of `then()` method and the value passed in reject method catch in the callback function of `catch()` method

## Using Promise

Promises are used with `.then()` and `.catch()` method to handle the outcomes.

- `then()` is called when the promise is fulfilled
- `catch()` is called when promise is rejected

```js
const promise = new Promise((resolve, reject) => {
  // ASYNCHRONOUS OPERATION
  const successful = true;

  successful ? resolve("Resolve") : reject("Reject");
});

promise
  .then((resolve) => {
    console.log(resolve);
    console.log("Then");
  })
  .catch(() => {
    console.log("Catch");
  })
  .finally(() => {
    console.log("Finally");
  });
```

## Promise.all()

Promise is used to resolve callback hell which occur during multiple function call sequentially. What if there have multiple funtionality where multiple function called sequentialy. Then for each of the sequential call we need a promise. So, when there have multiple promise and this promises also have a sequence, we need to use `Promise.all()`

```js
const promise1 = new Promise((resolve, reject) => {
  const successful = true;
  successful ? resolve("Resolve 1") : reject("Reject 1");
});
const promise2 = new Promise((resolve, reject) => {
  const successful = true;
  successful ? resolve("Resolve 2") : reject("Reject 2");
});
Promise.all([promise1, promise2]).then((data) => {
  console.log(data);
});
```

## Promise Chain

Promises can be chained to run asynchronouse task sequenially which resolve callback hell.

1.  **Convert Functions to Return Promises**
    For each function that uses a callback, refactor it to return a Promise instead.

    ````js
    const takeOrder=(orderNumber)=>{
        return new Promise((resolve)=>{
            console.log(`Take Order ${orderNumber}`)
            resolve(orderNumber);
        })
    }
    const processOrder=(orderNumber)=>{
        return new Promise((resolve)=>{
            console.log(`Proces Order Start ${orderNumber}`);

                setTimeout(()=>{
                    console.log(`Proceed Order ${orderNumber}`);
                    resolve(orderNumber)
                },3000);
            })

        }
        const completeOrder=(orderNumber)=>{
            return new Promise((resolve)=>{
                console.log(`Completed Order ${orderNumber}`);
                resolve(orderNumber);
            })
        }
        ```

    ````

2.  **Chain the Promises**
    Once the functions return Promises, chain them using `.then()` and `.catch()` method.
    `js
takeOrder(1)
    .then(orderNumber=>processOrder(orderNumber))
    .then((orderNumber)=>completeOrder(orderNumber))
    .catch(()=>console.log("Error Occurred"))
takeOrder(2)
    .then(orderNumber=>processOrder(orderNumber))
    .then((orderNumber)=>completeOrder(orderNumber))
    .catch(()=>console.log("Error Occurred"))
`

# async/await

It is a syntax built on top of Promises that allows writting asynchronous code in a manner that looks synchronouse, making it easier to read and write.

- `async` is a function that returns promises.
- `await` - is a keyword which use to pause execution of the function until the promise is resolved or rejected. It can only be used inside `async` function.

```js
const handleOrder = async (orderNumber) => {
  const takedOrder = await takeOrder(orderNumber);
  const proceedOrder = await processOrder(takedOrder);
  const compltedOrder = await completeOrder(proceedOrder);
};
handleOrder(1);
handleOrder(2);
```

# Class

Unlike other programming language, there is nothing about `class` programming till ES5. Which create confusion about is it really a oop laguage or not?

But the actual scenario is, yes, it is a oop language, but unlike other language it is not `class` based language. ES6 solved the issue.

## ES5

```js
var Parent = function (name, dob) {
  this.name = name;
  this.dob = dob;
  this.details = function () {
    return "name: " + name + " dob:" + dob;
  };
};
```

## ES6

```js
class Parent {
  constructor(name, dob) {
    this.name = name;
    this.dob = dob;
  }
  details = () => {
    return `name: ${this.name} age: ${this.dob}`;
  };
}
```

# Constructor

## Default Function Constructor

### ES5

```js
var Parent = function (name, dob) {
  name ? (name = name) : (name = "masum");
  dob ? (dob = dob) : (dob = "june");

  this.name = name;
  this.dob = dob;
};
```

### ES6

```js
var Parent = function (name = "masum", dob = "june") {
  this.name = name;
  this.dob = dob;
};
```

# OOP

- [Encapsulation](#encapsulation)
- [Inheritance](#inheritance)
- [Polymorphism](#polymorphism)
- [Abstraction](#abstraction)

## Encapsulation

Encapsulation is about bundling the data (properties) and methods that operate on that data within a single unit, typically an object or a class.

```js
class BankAccount {
  #accountNumber; // Private field using #

  constructor(accountNumber) {
    this.#accountNumber = accountNumber;
  }

  getAccountNumber() {
    return this.#accountNumber;
  }
}
```

- `public` - all properties and methods of a class are public by default.
- `private` - Properties or methods defined with `#` cannot be accessed or modified outside the class
- `protected`- Properties or methods defined with `_` can be accessible within the class and its subclasses but not from outside.

## Inheritance

```js
class Teacher extends Parent {
  constructor(name, dob, subject) {
    super(name, dob);
    this.subject = subject;
  }
  details = () => {
    return `name: ${this.name} age: ${this.dob} sub: ${this.subject}`;
  };
}
```

## Polymorphism

Polymorphism allows methods to do different things based on the object they are called on. It allows a child class to provide a specific implementation of a method already defined in its parent class.

```js
class Animal {
  speak() {
    return "The animal makes a sound.";
  }
}

class Dog extends Animal {
  speak() {
    return "The dog barks.";
  }
}

class Cat extends Animal {
  speak() {
    return "The cat meows.";
  }
}

const myDog = new Dog();
const myCat = new Cat();

console.log(myDog.speak());
console.log(myCat.speak());
```

## Abstraction

Abstraction means hiding the complexity of the implementation and exposing only the essential details.

```js
class BankAccount {
  constructor(balance) {
    this._balance = balance; // Private variable (conventionally)
  }

  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Invalid deposit amount.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      console.log(`Withdrew: $${amount}`);
    } else {
      console.log("Invalid withdrawal amount.");
    }
  }

  getBalance() {
    return this._balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
account.withdraw(300);
console.log(account.getBalance()); // Output: 1200
```

**Explaination:**

- The `_balance` property is conventionally treated as private (though it can still be accessed directly). This encapsulates the balance from direct modification.
- `deposit()`, `withdraw()`, and `getBalance()` methods provide controlled ways to interact with \_balance.
- The user of the `BankAccount` class doesn't need to know how the balance is updated internally—they just use the methods

# Ajax

AJAX stands for Asynchronous JavaScript and XML. It's a technique used in web development to send and receive data from a server asynchronously (in the background) without reloading the entire web page.

## How Does AJAX Work?

1. A user event occurs (like clicking a button).
2. JavaScript creates an XMLHttpRequest object (or uses fetch()).
3. The request is sent to a server-side script (like PHP, Node.js, etc.).
4. The server processes the request and sends back a response (usually in JSON).
5. JavaScript handles the response and updates the HTML content.

## Methods

### GET

```js
function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const data = response.body;
      return data;
    }
  };

  xhr.send();
}
```

**Modern Approach:**

```js
function getData() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      return data.body;
    })
    .catch((error) => console.error("Error:", error));
}
```

### POST

```js
function sendData() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "server.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const data = response.body;
      return data;
    }
  };

  xhr.send("name=" + encodeURIComponent(formData));
}
```

**Modern Approach:**

```js
fetch("api.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Response:", data);
  });
```
