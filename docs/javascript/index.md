---
title: Introduction
sidebar_position: 1
---


## Core Characteristics of JavaScript

### High Level Language

JavaScript is considered a high-level language because it abstracts away most of the complex details of the computer, such as memory management and low-level operations, allowing developers to focus on logic and problem-solving.

```js
let num = 42; // No need to allocate memory manually
```

**What if JavaScript were not high-level?**

It would be more like Assembly language or machine code. That means:

- You’d have to manage memory yourself (decide where variables live in RAM).
- You’d need to use CPU instructions directly (MOV, ADD, etc.).
- Writing even simple programs would be harder, longer, and less readable.

Example (x + y):

```asm
MOV A, 5      ; Put 5 into register A
MOV B, 10     ; Put 10 into register B
ADD A, B      ; Add A and B, result in A
PRINT A       ; Print the result
```

**Comparison with C**

| Feature            | C                              | JavaScript                    |
| ------------------ | ------------------------------ | ----------------------------- |
| Level              | High-level (but lower than JS) | High-level                    |
| Memory Management  | Manual                         | Automatic (garbage collected) |
| Closest to Machine | Yes, allows pointers           | No, abstracted                |
| Ease of Writing    | Moderate                       | Very easy                     |

### Dynamic Typing
JavaScript is dynamically typed, meaning you don't need to declare variable types explicitly. The type is determined at runtime.

```js
let x = 10; // number
x = "hello"; // now string
```

### Interpreted & Just-in-Time (JIT) Compiled Languages

JavaScript started as an interpreted language but now runs through Just-In-Time (JIT) compilation in modern engines like V8 (Chrome), SpiderMonkey (Firefox), and JavaScriptCore (Safari).

This means JavaScript code is parsed, optimized, and compiled into machine code at runtime, combining the flexibility of interpretation with the speed of compilation.

```js
console.log("Executed in real-time by the browser/engine");
```
#### Interpreted Languages

The code is read and executed line by line — no separate compilation step.

Imagine you’re reading a comic book out loud to your friends — you don’t prepare ahead of time, you just read as you go.

- The interpreter reads each line and executes it immediately.
- Great for flexibility and rapid testing.
- Slower than compiled languages because code isn’t pre-optimized.
- Examples: JavaScript, Python, Ruby

Originally, JavaScript was a purely interpreted language — the engine would:

1. Read your source code line by line.
2. Immediately execute it without converting it to machine code first.

This made JS flexible and dynamic, perfect for browsers — but it was slow. Modern JavaScript engines introduced JIT (Just-In-Time) compilation to fix that.

#### Compiled Languages

The entire source code is translated into machine code before execution.

It’s like translating the entire comic book into another language before reading it to your friends.

- Produces a standalone executable.
- Runs faster since the translation happens once, not every time.
- Less flexible for quick changes.
- Examples: C, C++, Rust, Go

#### Just-In-Time (JIT) Compiled Languages

A hybrid approach where code is compiled while it’s running, not entirely beforehand.

You’re reading the comic book but translating each sentence quickly into your friend’s language as you go — faster than reading line by line, but still flexible.

- The code starts running immediately (like an interpreter).
- Frequently used code paths are optimized and compiled into machine code.
- Provides both speed and adaptability.
- Used In: Modern JavaScript engines, Java Virtual Machine (JVM), .NET CLR

**If It’s Not Interpreted or JIT-Compiled**

Then it’s a fully compiled language.
- You must “translate the whole book” (compile the program) before it can run.
- The computer won’t start execution until compilation is complete.
- You need to build the project every time you make changes.
- Examples: C, Rust, Swift

**JavaScript and Node.js Context**

Even though JavaScript is interpreted (with JIT optimization), Node.js lets you run JavaScript outside the browser — for server-side applications.

You might still “build” Node.js apps (especially when using TypeScript or modern JS features) for these reasons:

1. Syntax Compatibility: Not all Node.js versions support the latest ECMAScript features (like `import/export`, `async/await`).
2. Transpilation: TypeScript and Babel convert modern code into backward-compatible JavaScript.
3. Performance & Optimization: Building ensures consistent performance and compatibility across environments.

Note: Node.js can execute plain `.js` files directly without building — but TypeScript (`.ts`) must be transpiled first.

| Type             | Description                     | Example Languages  | Speed        | Flexibility |
| ---------------- | ------------------------------- | ------------------ | ------------ | ----------- |
| **Interpreted**  | Executes line-by-line           | JavaScript, Python | Medium     | High      |
| **Compiled**     | Fully translated before running | C, Rust            |  Very High | Low       |
| **JIT-Compiled** | Compiled during execution       | JS (V8), Java      |  High      | Medium    |

## Programming Paradigms

### Multi-paradigm
JavaScript supports multiple programming paradigms, including object-oriented, functional, and imperative programming.

```js
// Functional
[1, 2, 3].map((n) => n * 2);

// OOP
class Dog {
  bark() {
    console.log("Woof");
  }
}

// Imperative
for (let i = 0; i < 3; i++) console.log(i);
```

### Prototype-based Object Orientation
Instead of classical inheritance (like Java or C++), JavaScript uses prototypes, where objects can directly inherit from other objects.

```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound");
};

const dog = new Animal("Rex");
dog.speak(); // Rex makes a sound
```

### Functional
With higher-order functions, closures, immutability practices, and functions as first-class citizens, JavaScript allows developers to follow a functional programming style.

```js
function greet(name) {
  return "Hi " + name;
}
function executor(fn, value) {
  return fn(value);
}

console.log(executor(greet, "Alice")); // Hi Alice
```

### Imperative Programming Style
JavaScript also supports imperative programming, where tasks are defined step by step using constructs like loops, conditionals, and assignments.

If it’s not Imperative Programming Style, that means you wouldn’t give the computer step-by-step instructions. Instead you might use a Declarative style (like SQL or HTML), where you just say what you want, not how to do it.

Instead of saying

```js
// Imperative Style
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum); // 15
```

you’d just say:

```sql
SELECT SUM(numbers) FROM 1_to_5;
```

and the computer figures out the steps.

## Runtime Behavior

### First-class Functions
Functions are treated like any other variable—they can be passed as arguments, returned from other functions, and stored in variables.

```js
const sayHi = () => console.log("Hi");
const run = (fn) => fn();
run(sayHi); // Hi
```

### Event-driven
JavaScript is inherently event-driven, making it suitable for building interactive applications. Events (like user clicks, network responses, or timers) drive execution, supported by asynchronous features such as callbacks, promises, and async/await.

```js
// Browser example
document.querySelector("button").addEventListener("click", () => {
  console.log("Button clicked!");
});

// Async example
setTimeout(() => console.log("Runs later"), 1000);
```

It can executes after triggering an event(input is not an event) that's why it called event-driven.

**Event**

- An event is something that happens in the system or browser.
- It could be user actions (click, key press, typing), or system actions (page loaded, timer finished, data received).
- Events are signals that something occurred.

**Input**

- Input usually means the data that comes from the user into the program.
- It can be text typed in a box, numbers entered, choices made, etc.
- Input is often collected because of an event, but it’s the actual value the user provides.

## Fun Facts

- Atom, Brackets are build on top of Javascript
- Visual Studio Code is build on Typescript

