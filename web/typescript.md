# Contents

- [Basics](#basics)
  - [What is TypeScript?](#what-is-typescript)
  - [Why use TypeScript?](#why-use-typescript)
  - [Self Hosting](#self-hosting)
  - [TypeScript Compiler](#typescript-compiler)
  - [Setting up TypeScript](#setting-up-typescript)
- [Types](#types)
  - [Type Annotations](#type-annotations)
  - [Type Inferences](#type-inferences)
  - [Union Types](#union-types)
  - [Intersection Types](#intersection-types)
  - [Readonly properties](#readonly-properties)
  - [Type Aliases](#type-aliases)
- [Functions]()
  - [Function Annotations]()
    - [Function Returning `never`]()
    - [Optional & Default Parameters]()
    - [Function Type Alias]()
    - [Rest Parameter]()
  - [Function Overloading]()
  - [`this` in functions]()
    - [Declaring `this` Type in Functions]()
    - [Incorrect `this` Usage (Type Safety)Incorrect `this` Usage (Type Safety)]()
  - [Objects]()
    - [Object Type Annotations]()
      - [Readonly Properties]()
      - [Index Signatures]()
      - [Function as a Property]()
    - [Interfaces]()
      - [Extending Interfaces]()
      - [Declaration Merging]()
  - [Class]()
    - [Class Properties]()
    - [Access Modifiers]()
    - [Static Properties & Methods]()
    - [Getters and Setters]()
    - [Abstract Methods & Properties]()
    - [Abstract Class vs Interface]()
    - [`implements` keyword]()
- [Generic]()
  - [Why Use Generics]()
  - [Generic Functions]()
    - [Example of Identity Function]()
    - [Generic Function with Arrays]()
    - [Generic Function with Multiple Types]()
    - [Generic Constraints]()
    - [Default Generic Types]()
    - [Explicit vs. Inferred Generics]()
    - [API Response Wrapper]()
  - [Generic Interface]()
    - [Generic Property]()
    - [Generic Method]()
    - [Multiple Type Parameters]()
    - [Generic Interface with Constraints]()
    - [Default Generic Types]()
    - [Using Generic Interfaces in Functions]()
- []()
- []()
- []()
- [Modules & Namespaces]()
  - [Named Export]()
  - [Default Export]()
  - [Export All]()
  - [Import Styles]()
  - [Namespaces vs. Modules]()
  - [Re-export]()
- [Tooling & Ecosystem](#tooling--ecosystem)
  - [Setting Up TypeScript with Node.js](#setting-up-typescript-with-nodejs)
    - [Adding Development Tools]()
    - [Running the Project]()

# Basics

## What is TypeScript?

TypeScript is a superset of JavaScript created by Microsoft.

- "Superset" means it builds on top of JavaScript, adding extra features.
- It is not a completely new language — any valid JavaScript code is also valid TypeScript code.
- The most important feature it adds is static typing.

TypeScript code cannot run directly in browsers or Node.js. It needs to be compiled (transpiled-source(ts) to source(js) compilation) into JavaScript using the TypeScript compiler (`tsc`).

## Why use TypeScript?

### Static Typing

- In JavaScript, variables can hold any type of value, which often leads to runtime/unexpected errors.
- TypeScript lets you declare types for variables, function parameters, and return values.
- This allows catching errors at compile-time instead of at runtime.

Example (JavaScript problem):

```js
function add(a, b) {
  return a + b;
}

console.log(add(5, 10)); // 15 ✅
console.log(add(5, "10")); // "510" ❌ (unexpected)
```

Example (TypeScript solution):

```tsx
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10)); // 15 ✅
console.log(add(5, "10")); // ❌ Compile-time error
```

### Better IDE Support (IntelliSense & Autocomplete)

- TypeScript provides better code suggestions, hints, and autocompletion in editors like VS Code.
- This makes development faster and reduces mistakes.

### Improved Code Quality and Maintainability

- Large projects with many developers benefit from TypeScript because types make the code more predictable and self-documenting.
- Helps new developers understand the codebase quickly.

### Modern JavaScript Features with Backward Compatibility

- TypeScript supports new JavaScript features (ES6+) and compiles them into older JavaScript that works on older browsers.

### Error Detection Before Execution

- With TypeScript, many bugs are caught at compile-time, reducing runtime crashes.

## Self Hosting

A programming language’s compiler or interpreter is written in the same language it is compiling.

So, a self-hosting compiler can “compile itself.”

This usually doesn’t happen right away — because when a language is brand new, you can’t write its compiler in that language (since you don’t yet have a compiler to translate it).
So the very first compiler is usually written in another language (like C, JavaScript, or assembly).

Once the language is stable enough, developers rewrite the compiler in that same language.

### Real Examples

#### C Language

- The very first C compiler was written in assembly.
- Once C was reliable, they rewrote the compiler in C itself.
- From then on, C could compile its own compiler → self-hosting.

#### TypeScript

- The very first TypeScript compiler was written in JavaScript (2012).
- Later, the compiler was rewritten in TypeScript.
- That compiler was compiled once using the old JavaScript compiler.
- After that, TypeScript could compile its own compiler → self-hosting.

### Why Self-Hosting?

1. Dogfooding → The language proves it’s strong enough to build large, complex software (like its own compiler).
2. Maintainability → Compiler developers get the same language features as normal developers.
3. Better Testing → Every change to the compiler tests the language itself.
4. Trust & Adoption → If a compiler is written in the language itself, it shows confidence and maturity.

### Bootstrapping Steps

1. The Very First Compiler (2012)
   - Written in JavaScript.
   - Its job: take `.ts` code and produce `.js` output.
   - At this point, TypeScript itself was too new and unstable to be used for building its own compiler.
2. Bootstrapping (Self-Hosting Transition)

   - Once TypeScript became stable enough, the team rewrote the compiler in TypeScript.
   - But here’s the trick:
     - The new compiler source code was in TypeScript (`.ts`).
     - To run it, they still needed the old JavaScript-based compiler to compile it once into JavaScript.
     - After that, the newly compiled version could take over future builds.

   This is the self-hosting loop.

3. Current Compiler

   - Today’s compiler (tsc) is written in TypeScript itself.
   - Each new version of TypeScript is compiled using the previous version’s compiler.
   - The result is distributed as JavaScript (so it can run on Node.js, since Node doesn’t understand TypeScript directly).

So yes — the current compiler is ultimately built on top of that very first JavaScript compiler, which “bootstrapped” the process.

## TypeScript Compiler

The TypeScript Compiler (`tsc`) is the tool that takes TypeScript code (`.ts` or `.tsx` files) and compiles (or transpiles) it into plain JavaScript, which browsers or Node.js can run.

Since browsers don’t understand TypeScript directly, the compiler ensures all TypeScript features (types, interfaces, enums, decorators, etc.) are converted into valid JavaScript.

### Key Responsibilities of TypeScript Compiler

1. Type Checking

   - Ensures variables, function arguments, and return values match declared types.
   - Prevents common bugs during development.

2. Transpiling

   - Converts modern TypeScript/JavaScript features into target JavaScript versions (e.g., ES5, ES6, ES2020).

3. Configuration via `tsconfig.json`

   - Developers can customize compilation: target JavaScript version, module system (CommonJS, ESModules), include/exclude files, strictness, etc.

4. Incremental Builds

   - The TypeScript compiler compiles all files in your project every time — even if only one file was changed. This can be slow for big projects.
   - With incremental builds (`--watch` mode or `"incremental": true` in `tsconfig.json`), TypeScript remembers what was already compiled and only recompiles changed files (and their dependencies).

5. Error Reporting

   - Shows compilation errors with line numbers and hints.

### Compiler Architecture

The TypeScript Compiler (`tsc`) is built in TypeScript itself, and its architecture can be broken into three main stages:

```ts
class Person {
  constructor(public name: string) {}
  greet(): string {
    return `Hello, ${this.name}`;
  }
}

let p = new Person("Alice");
console.log(p.greet());
```

1. **Parsing**

- The compiler reads your `.ts` source code.
- It breaks it into tokens (keywords, identifiers, operators, literals, etc.) and builds an Abstract Syntax Tree (AST) — a tree structure representing the code.

```yaml
SourceFile
 ├─ ClassDeclaration: Person
 │   ├─ Constructor
 │   │   └─ Parameter: name: string
 │   └─ Method: greet(): string
 └─ VariableDeclaration: p: Person
```

Parsing does no type checking yet — it just understands the structure of your code.

2. **Binding & Type Checking**

- The compiler now binds identifiers (variables, classes, functions) to their declarations using a symbol table.
- It performs type checking:
  - Ensures variables, parameters, and return values match their declared types.
  - Checks function calls, classes, interfaces, generics, etc.

```ts
let p: number = new Person("Alice"); // ❌ Error
```

- `new Person("Alice")` returns a `Person` object.
- `p` expects a `number`.
- TypeScript throws a compile-time error:

```
Type 'Person' is not assignable to type 'number'.
```

This prevents runtime errors before the code even runs.

3. **Emit (Code Generation)**

- If no blocking errors exist, the compiler converts the AST into plain JavaScript.
- Type annotations are removed because JavaScript doesn’t understand them.
- The compiler may also target different JS versions (ES5, ES6, etc.) and module systems (CommonJS, ES Modules).

Input (TypeScript):

```ts
class Person {
  constructor(public name: string) {}
  greet(): string {
    return `Hello, ${this.name}`;
  }
}

let p = new Person("Alice");
console.log(p.greet());
```

Output (JavaScript ES5):

```js
var Person = /** @class */ (function () {
  function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function () {
    return "Hello, " + this.name;
  };
  return Person;
})();
var p = new Person("Alice");
console.log(p.greet());
```

The `public name: string` annotation is removed, but the code still works in any JavaScript environment.

If we run with:

```bash
tsc --noEmitOnError
```

No JS files will be produced even after there have an error.

If we allow emit:

```bash
tsc
```

We’ll still get compiled JavaScript (types removed), but the error will be shown in the console.

## Setting up TypeScript

### Installing TypeScript

TypeScript compiler (`tsc`) is required to convert `.ts` files into `.js`.

Install globally (for all projects):

```bash
npm install -g typescript
```

- This installs the `tsc` (TypeScript Compiler) command globally.

Check Installation

```bash
tsc -v
```

### Compiling TypeScript Files Manually

Let’s say you have a file `app.ts`:

```ts
let message: string = "Hello, TypeScript!";
console.log(message);
```

Compile it to JavaScript:

```bash
tsc app.ts
```

This creates `app.js`:

```bash
var message = "Hello, TypeScript!";
console.log(message);
```

Then run it with Node:

```bash
node app.js
```

**Problem:** If you have multiple `.ts` files or want custom settings (like targeting ES6, strict mode, etc.), compiling manually each time becomes painful.

**Solution:** `tsconfig.json`

### What is `tsconfig.json`?

`tsconfig.json` is a configuration file that tells the TypeScript compiler how to compile your project.

You create it with:

```bash
tsc --init
```

This generates a file like:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true
  }
}
```

### Why use `tsconfig.json`?

- Instead of typing `tsc file.ts` again and again, you just run:

```bash
tsc
```

and it compiles the whole project based on rules inside `tsconfig.json`.

- Makes collaboration easier: All developers follow the same TypeScript rules.

- Helps organize source files (`src/`) and output files (`dist/`).

- Enforces strict checks (like type safety) automatically.

### integrate TypeScript with `npm scripts`

In `package.json`, add a `scripts` section like this:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "build": "tsc",
    "watch": "tsc --watch",
    "start": "npm run build && node dist/index.js",
    "dev": "ts-node-dev src/index.ts"
  },
  "devDependencies": {
    "typescript": "^5.2.0",
    "ts-node-dev": "^2.0.0"
  }
}
```

- `"build": "tsc"` → Runs TypeScript compiler according to your tsconfig.json.
- `"watch": "tsc --watch"` → Watches for file changes and recompiles automatically.

### Example Project Structure

```
my-project/
 ├── src/
 │    ├── app.ts
 │    └── utils.ts
 ├── dist/   (will be generated)
 └── tsconfig.json
```

`src/app.ts`

```ts
import { add } from "./utils";

let result: number = add(5, 10);
console.log("Result:", result);
```

`src/utils.ts`

```ts
export function add(a: number, b: number): number {
  return a + b;
}
```

`tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true
  }
}
```

Compile & Run

```bash
tsc       # compiles everything in src/ to dist/
node dist/app.js
```

### Key `tsconfig.json` Options

Here are some important ones:

1. `target`

- Specifies which version of JavaScript to compile into.
  - `"ES5"` → older browsers
  - `"ES6"` or `"ES2015"` → modern JavaScript

2. `module`
   Defines how modules are compiled.
   - `"commonjs"` → for Node.js
   - `"esnext"` → for modern browsers with ES modules
3. `rootDir`: Where your TypeScript source files are located.
4. `outDir`: Where compiled JavaScript files will be stored.
5. `strict`

- Turns on strict type-checking.
- It enables multiple rules like:
  - `noImplicitAny`
  - `strictNullChecks`
  - `strictBindCallApply`

6. `esModuleInterop`
   Helps when importing CommonJS modules (like `express`).

```json
"esModuleInterop": true
```

Without this, you’d need:

```ts
import * as express from "express";
```

With it, you can write:

```ts
import express from "express";
```

7. `include` & `exclude`

- Control which files TS should compile.

```json
"include": ["src/**/*"],
"exclude": ["node_modules", "dist"]
```

- `include` → compile all files in `src/`.
- `exclude` → ignore `node_modules` & `dist/`.

# Types

## Type Annotations

In TypeScript, a type annotation tells the compiler what type of value a variable, parameter, or function will hold.
It improves type safety by catching errors during compilation rather than at runtime.

```ts
let variableName: type = value;
```

| **Category**         | **Type** / **Feature** | **Example**                                         | **Use Case**                      |                         |
| -------------------- | ---------------------- | --------------------------------------------------- | --------------------------------- | ----------------------- |
| **Primitives**       | `string`               | `let name: string = "Masum";`                       | Text data                         |                         |
|                      | `number`               | `let age: number = 25;`                             | Numbers (int/float)               |                         |
|                      | `boolean`              | `let isActive: boolean = true;`                     | True/false                        |                         |
|                      | `bigint`               | `let big: bigint = 123n;`                           | Arbitrary large integers          |                         |
|                      | `symbol`               | `let id: symbol = Symbol("id");`                    | Unique IDs                        |                         |
|                      | `null`                 | `let empty: null = null;`                           | Explicit empty value              |                         |
|                      | `undefined`            | `let notDef: undefined = undefined;`                | Variable not initialized          |                         |
| **Special**          | `any`                  | `let anything: any = "hi";`                         | Opt-out of type checking (unsafe) |                         |
|                      | `unknown`              | `let value: unknown = "hi";`                        | Safer alternative to `any`        |                         |
|                      | `never`                | `function fail(): never { throw new Error("x"); }`  | Functions that never return       |                         |
|                      | `void`                 | `function log(msg: string): void {}`                | No return value                   |                         |
| **Objects**          | `object`               | `let obj: object = { x: 10 };`                      | Non-primitive types               |                         |
|                      | **Interface**          | `interface User { id: number; name: string }`       | Define object shape               |                         |
|                      | **Class**              | `class Person { constructor(public n: string) {} }` | OOP style                         |                         |
|                      | **Type alias**         | `type Point = { x: number; y: number };`            | Custom named type                 |                         |
| **Collections**      | `Array`                | `let nums: number[] = [1,2,3];`                     | Ordered lists                     |                         |
|                      | `Tuple`                | `let p: [string, number] = ["Alice", 30];`          | Fixed-length array                |                         |
|                      | `ReadonlyArray`        | `let arr: ReadonlyArray<number> = [1,2];`           | Immutable arrays                  |                         |
| **Combinations**     | \*\*Union (\`          | \`)\*\*                                             | `let id: string \| number;`       | Multiple possible types |
|                      | **Intersection (`&`)** | `type P = A & B;`                                   | Combine multiple types            |                         |
|                      | **Literal types**      | `let dir: "north" \| "south";`                      | Restrict to exact values          |                         |
| **Enums & Generics** | **Enum**               | `enum Role { Admin, User }`                         | Named constants                   |                         |
|                      | **Generics**           | `function id<T>(x: T): T { return x; }`             | Reusable, type-safe               |                         |
| **Utility Types**    | `Partial<T>`           | `Partial<User>`                                     | Make all fields optional          |                         |
|                      | `Required<T>`          | `Required<User>`                                    | Make all fields required          |                         |
|                      | `Readonly<T>`          | `Readonly<User>`                                    | Make fields immutable             |                         |
|                      | `Pick<T,K>`            | `Pick<User,"id">`                                   | Pick subset of fields             |                         |
|                      | `Omit<T,K>`            | `Omit<User,"age">`                                  | Exclude certain fields            |                         |
|                      | `Record<K,V>`          | `Record<string, number>`                            | Map keys to values                |                         |
| **Functions**        | Function type          | `let add: (a:number,b:number)=>number;`             | Explicit function typing          |                         |
|                      | Constructor type       | `type C<T> = new (...a:any[]) => T;`                | Class constructors                |                         |

### `unknown`

The `unknown` type is similar to `any`, but safer.
You can assign anything to `unknown`, but before using it, you must check its type.

```ts
let input: unknown;

input = "Hello";
input = 42;

// TypeScript requires a type check before using
if (typeof input === "string") {
  console.log(input.toUpperCase()); // Safe ✅
}

// Directly calling input.toUpperCase() would be an error ❌
```

With `unknown`, TypeScript forces you to narrow down the type before using it.

## Type Inferences

In TypeScript, Type Inference means that the compiler can automatically determine the type of a variable, function return, or expression even if you don’t explicitly specify it.

**Why is Type Inference Important?**

- Reduces boilerplate → You don’t need to annotate everything with types.
- Keeps code clean → Less clutter from explicit types everywhere.
- Maintains type safety → Even without annotations, TypeScript enforces correct usage.

### Basic Example

```ts
let message = "Hello, TypeScript!";
```

- Here, you didn’t write `let message: string`.
- TypeScript infers that message is a string because the initial value is a string.
- So now:

```ts
message = "Hi!"; // ✅ Allowed
message = 42; // ❌ Error: Type 'number' is not assignable to type 'string'
```

### Common Scenarios of Type Inference

1. Variable Initialization

   If you assign a value at declaration, TypeScript infers the type.

   ```ts
   let age = 25; // inferred as number
   let isActive = true; // inferred as boolean
   ```

2. Function Return Type

   If you don’t explicitly declare the return type, TypeScript infers it.

   ```ts
   function add(a: number, b: number) {
     return a + b;
   }
   // inferred return type: number
   ```

   You didn’t write `: number` after the function, but TypeScript knows the result of `a + b` is a number.

3. Array Inference

   TypeScript infers array types from initial elements.

   ```ts
   let numbers = [1, 2, 3];
   // inferred as number[]

   numbers.push(4); // ✅ Allowed
   numbers.push("hi"); // ❌ Error: string not assignable to number
   ```

   If you mix types:

   ```ts
   let mixed = [1, "hello", true];
   // inferred as (string | number | boolean)[]
   ```

4. Contextual Typing

   Sometimes inference works from context.

   ```ts
   window.addEventListener("click", (event) => {
     console.log(event.clientX); // event is inferred as MouseEvent
   });
   ```

   Here, you didn’t type `event: MouseEvent`. TypeScript inferred it because `"click"` handlers receive a `MouseEvent`.

5. Best Common Type

   When multiple types are possible, TypeScript finds a common type.

   ```ts
   let values = [1, 2, null];
   // inferred as (number | null)[]
   ```

### Type Widening

- If you don’t give a type or initial value, TypeScript infers `message: any`.
- If you don't give a type, Typescripts infers the type as values type.

When you declare a variable without assignment:

```ts
let data;
// inferred as 'any'
data = 42; // allowed
data = "hi"; // allowed
```

If you assign a literal:

```ts
let status = "loading";
// inferred as string (not the literal "loading")
```

But if you want a literal type:

```ts
const status = "loading";
// inferred as "loading" (literal type)
```

**Object Literals Losing Strictness**

```ts
let user = { name: "Alice", age: 25 };
user.location = "USA"; // ❌ Error: Property 'location' does not exist
```

But if you use any inference:

```ts
let user: any = {};
user.name = "Alice"; // ✅
user.age = 25; // ✅
user.location = "USA"; // ✅ (but unsafe!)
```

- TypeScript loses track of structure.

**`null` and `undefined` Issues**

```ts
let value = null;
// inferred type: any
value = 123; // ✅ allowed
value = "hello"; // ✅ allowed
```

This can cause confusion because `value` doesn’t stay consistent.

```tss
let value: number | null = null;
value = 123;     // ✅
value = "hi";    // ❌ Error
```

## Union Types

A Union Type allows a value to be one of several possible types.
It’s written with the `|` (pipe) symbol.

```ts
let value: string | number;
```

Here, `value` can be either a string or a number.

**Type Narrowing with Union**

When you use a union, you may need type checks to access type-specific properties.

```ts
function formatId(id: string | number) {
  if (typeof id === "string") {
    return id.toUpperCase(); // ✅ Works only for string
  }
  return id.toFixed(2); // ✅ Works only for number
}
```

## Intersection Types

An Intersection Type combines multiple types into one single type that must include all members of those types.
It’s written with the `&` (ampersand) symbol.

```ts
type A = { name: string };
type B = { age: number };

type Person = A & B;

const user: Person = {
  name: "Alice",
  age: 30,
};
```

Here, `Person` must have both `name` and `age`.

**Intersection with Primitives**

```ts
type Impossible = string & number;
```

- This type is never possible (a value can’t be both `string` and `number`).
- So `Impossible` becomes `never` (an impossible type).

### Union vs Intersection

| Feature | Union (`\|`) – OR                          | Intersection (`&`) – AND           |
| ------- | ------------------------------------------ | ---------------------------------- |
| Meaning | Value can be **one of many types**         | Value must satisfy **all types**   |
| Usage   | Flexibility (e.g., `id: string \| number`) | Combination (e.g., `User & Admin`) |
| Symbol  | `\|` (pipe)                                | `&` (ampersand)                    |

## Readonly properties

### `readonly` with Arrays

TypeScript also supports ReadonlyArray<T>.

```ts
const numbers: ReadonlyArray<number> = [1, 2, 3];

numbers[0] = 10; // ❌ Error
numbers.push(4); // ❌ Error
```

- `ReadonlyArray<T>` means you cannot modify the array’s contents.
- You can still read from it.
- If you want a mutable array → use `number[]`.
- If you want an immutable array → use `ReadonlyArray<number>`.

### `readonly` vs `const`

Many beginners confuse `readonly` and `const`. They are different:

- `const`: prevents reassignment of the variable binding (not the object properties).
- `readonly`: prevents reassignment of the property inside an object or interface.

```ts
const obj = {
  id: 1,
  name: "Alice",
};

obj.name = "Bob"; // ✅ allowed (const doesn't protect properties)

type Person = {
  readonly id: number;
};

const person: Person = { id: 1 };
person.id = 2; // ❌ Error (readonly protects property)
```

### `Readonly<T>` Utility Type

TypeScript has a built-in `Readonly<T>` utility type that makes all properties of an object immutable.

```ts
interface Student {
  id: number;
  name: string;
}

const s: Readonly<Student> = {
  id: 1,
  name: "Masum",
};

s.id = 2; // ❌ Error
s.name = "Ali"; // ❌ Error
```

### `readonly` at Declaration

You can assign a default value directly.

```ts
class Config {
  readonly appName: string = "MyApp"; // initialized at declaration
  readonly version: number;

  constructor(version: number) {
    this.version = version; // ✅ allowed
  }
}

const config = new Config(1.0);

console.log(config.appName); // MyApp
console.log(config.version); // 1
// config.appName = "OtherApp"; // ❌ Error
```

## Type Aliases

A Type Alias lets you create a new name (alias) for a type.
It doesn’t create a new type — it just gives a custom label to an existing type, which makes code more readable, reusable, and maintainable.

You define a type alias with the `type` keyword.

```ts
type AliasName = TypeDefinition;
```

**Example**

```ts
type UserId = string | number;

let id1: UserId = "abc123"; // ✅ allowed
let id2: UserId = 42; // ✅ allowed
let id3: UserId = true; // ❌ Error (boolean not part of UserId)
```

- `UserId` is just an alias for `string | number`.
- This avoids repeating `string | number` everywhere.

**Recursive Type Alias**

```ts
type Category = {
  name: string;
  subCategories?: Category[]; // recursive alias
};

const category: Category = {
  name: "Electronics",
  subCategories: [{ name: "Phones" }, { name: "Laptops" }],
};
```

Type Aliases cannot be reopened or changed later (unlike interfaces).

### Differences between Type Aliases and Interfaces

1. Definition

- A `type` gives a new name to any type (primitive, union, intersection, object, etc.).
- An `interface` is specifically used to describe the shape of an object (or function, class, etc.).

2. Inheritance

- Interface can be extended using extends:

```ts
interface Point {
  x: number;
  y: number;
}

interface Point3D extends Point {
  z: number;
}

const point: Point3D = { x: 1, y: 2, z: 3 };
```

- Type aliases can use intersections to achieve similar results:

```ts
type Point = { x: number; y: number };
type Point3D = Point & { z: number };

const point: Point3D = { x: 1, y: 2, z: 3 };
```

3. Declaration Merging

- Interfaces can merge if you declare them multiple times with the same name:

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = { name: "Masum", age: 22 }; // ✅ Works
```

- Type aliases cannot merge. Declaring the same type twice causes an error:

```ts
type User = { name: string };
type User = { age: number }; // ❌ Error: Duplicate identifier 'User'
```

4. Other Type Features

- Type aliases can represent:
  - Union types `type ID = string | number;`
  - Tuples `type PointTuple = [number, number];`
  - Primitive type `type Name = string;`
- Interfaces cannot represent unions, primitives, or tuples. They are only for object shapes, function types, or classes.

5. When to use which?

- Use `interface`:
  - When you expect to extend or implement it.
  - When you want declaration merging.
  - Mostly for object-oriented programming patterns.
- Use `type`:
  - When you need unions, intersections, tuples, or primitives.
  - For more flexible type compositions.

**Interface vs Type Alias**

| Feature                 | Interface          | Type Alias    |
| ----------------------- | ------------------ | ------------- |
| Object shape            | ✅ Yes             | ✅ Yes        |
| Extend / Inherit        | ✅ Yes (`extends`) | ✅ Yes (`&`)  |
| Declaration merging     | ✅ Yes             | ❌ No         |
| Union / Intersection    | ❌ No              | ✅ Yes        |
| Primitive / Tuple alias | ❌ No              | ✅ Yes        |
| Flexibility             | Less flexible      | More flexible |

# Functions

## Function Annotations

In TypeScript, function annotations are a way to explicitly define the types of a function’s parameters and its return value.

```ts
function functionName(param1: Type, param2: Type, ...): ReturnType {
  // function body
}
```

- `param: Type` → Type annotation for each parameter.
- `: ReturnType` → Type annotation for the value the function returns.

**Why use Function Annotations?**

- Type safety → prevents passing wrong argument types.
- Code readability → makes functions self-documenting.
- Better tooling → helps IDEs provide autocomplete & hints.

### Function Returning `never`

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

`never` indicates that the function never successfully returns (it either throws an error or runs forever).

### Optional & Default Parameters

```ts
function welcomeUser(
  name: string,
  age?: number,
  country: string = "Unknown"
): string {
  return `Hello ${name}, Age: ${age ?? "Not provided"}, Country: ${country}`;
}

console.log(welcomeUser("Alice"));
// Hello Alice, Age: Not provided, Country: Unknown
console.log(welcomeUser("Bob", 30, "USA"));
// Hello Bob, Age: 30, Country: USA
```

- `age?` → optional parameter (Must always come after required parameters, If not provided, it will be `undefined`).
- `country = "Unknown"` → default parameter. Unlike optional parameters, default parameters don’t have to be at the end.

```ts
function greet(name: string = "Guest", age: number): string {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

console.log(greet(undefined, 25)); // ✅ "Hello, my name is Guest and I am 25 years old."
```

If you want to use the default for `name`, you must explicitly pass `undefined` since `age` is required.

Recommended order: `required → default → optional`
**Difference Between `optional (?)` vs. `| undefined`**

These look similar but are not exactly the same.

```ts
type A = { age?: number }; // optional property
type B = { age: number | undefined }; // required property but can hold undefined
```

- `age?: number` → property may be missing entirely.
- `age: number | undefined` → property must exist, but value may be `undefined`.

### Function Type Alias

```ts
type MathOperation = (a: number, b: number) => number;

const multiply: MathOperation = (x, y) => x * y;

console.log(multiply(4, 5)); // 20
```

This defines a reusable function type.

### Rest Parameter

```ts
function functionName(...paramName: Type[]): ReturnType {
  // function body
}
```

- `...paramName` → rest parameter, collects all remaining arguments into an array.
- `Type[]` → type annotation (array of a specific type).

Pass value with rest parameter not reference.

**Differences between Rest Parameters and Spread Operator**

| Feature            | Rest Parameters (`...`)                   | Spread Operator (`...`)                       |
| ------------------ | ----------------------------------------- | --------------------------------------------- |
| **Where used?**    | Function definition                       | Function call, array/object creation          |
| **What it does?**  | Collects multiple arguments into an array | Expands array/object into individual elements |
| **Data Direction** | Many → One (arguments → array)            | One → Many (array → arguments/elements)       |
| **Example**        | `function sum(...nums: number[]) {}`      | `sum(...[1,2,3])`                             |

## Function Overloading

In TypeScript, function overloading allows you to define multiple function signatures (different parameter types/number of parameters) for the same function name.

- It’s a way to describe different call patterns for one function.
- At runtime, there’s still only one function implementation, but TypeScript uses the overload signatures to check types at compile time.

**Syntax**

```ts
// Overload Signatures
function functionName(param1: TypeA): ReturnTypeA;
function functionName(param1: TypeB, param2: TypeC): ReturnTypeB;

// Implementation Signature
function functionName(param1: any, param2?: any): any {
  // single implementation
}
```

1. You write multiple overload signatures (only declarations, no body).
2. You provide one implementation that handles all cases.
3. The implementation must be compatible with all overload signatures.

**Function Overload by Parameter Type**

```ts
// Overload signatures
function getLength(value: string): number;
function getLength(value: any[]): number;

// Implementation
function getLength(value: string | any[]): number {
  return value.length;
}

console.log(getLength("Hello")); // 5
console.log(getLength([1, 2, 3])); // 3
```

## `this` in functions

- In JavaScript, `this` refers to the context in which a function is called.
- In TypeScript, we can annotate the type of `this` inside a function for type checking.
- This prevents bugs where `this` is used incorrectly.

### Declaring `this` Type in Functions

In TypeScript, the first parameter of a function can be a special `this` parameter (not counted as a real argument).

```ts
function functionName(this: Type, param1: Type, param2: Type): ReturnType {
  // function body
}
```

- `this: Type` → defines the expected type of `this`.
- It’s only used by TypeScript’s type checker (not compiled into JavaScript).

### Incorrect `this` Usage (Type Safety)

```ts
type Person = {
  name: string;
  greet(this: Person): void;
};

const person: Person = {
  name: "Alice",
  greet(this: Person) {
    console.log(`Hello, ${this.name}`);
  },
};

const greetFn = person.greet;
// greetFn(); // ❌ Error in TypeScript: 'this' has type 'void' here
```

- When `greet` is extracted into `greetFn`, `this` becomes `undefined`.
- TypeScript prevents calling it without a proper `this`.

**Use `.bind` to preserve `this`**

```ts
const greetFn = person.greet.bind(person);
greetFn(); // ✅ Hello, Alice
```

- `.bind(person)` creates a new function where `this` is always person.

# Objects

## Object Type Annotations

In TypeScript, Object Type Annotations let you explicitly describe the shape of an object — i.e., what properties it has and what types those properties are.

This helps TypeScript check correctness at compile time and prevents mistakes like missing or wrongly typed properties.

```ts
let obj: {
  key1: Type1;
  key2: Type2;
};
```

- Keys represent property names.
- Values represent property types.

### Readonly Properties

- Use `readonly` to prevent modification after initialization.
- It enforces immutability at the type level (compile-time safety).

```ts
let config: {
  readonly apiKey: string;
  mode: "dev" | "prod";
};

config = { apiKey: "12345", mode: "dev" };

// config.apiKey = "67890"; ❌ Error (readonly)
config.mode = "prod"; // ✅ Allowed
```

`apiKey` cannot be reassigned after initialization.

### Index Signatures

Use index signatures when you don’t know all property names ahead of time.

```ts
let salaries: {
  [employeeName: string]: number;
};

salaries = {
  Alice: 50000,
  Bob: 60000,
  Charlie: 55000,
};
```

Any string key is allowed, and its value must be a `number`.

**Number Index Signature**

You can use numbers as keys.

```ts
interface NumberArray {
  [index: number]: string;
}

const myArray: NumberArray = ["apple", "banana", "cherry"];

console.log(myArray[0]); // apple
```

- Here, `index: number` means array-like indexing.
- All elements must be strings.

Note: In JavaScript, object keys are always strings under the hood, so number index signatures are converted to strings internally.

**Mixed Keys (String + Number)**

If you mix string and number index signatures, the number index must be a subtype of the string index (since JavaScript converts numbers → strings).

```ts
interface MixedDictionary {
  [key: string]: string; // string keys allowed
  [index: number]: string; // number keys allowed
}

const data: MixedDictionary = {
  a: "alpha",
  1: "one",
};
```

- Both string and number keys are allowed.
- Values must be `string`.

**Restricting Index Signatures**

You can still add specific properties alongside index signatures.

```ts
interface EmployeeDirectory {
  [id: string]: string; // index signature
  company: string; // fixed property
}

const employees: EmployeeDirectory = {
  company: "TechCorp",
  e101: "Alice",
  e102: "Bob",
};
```

- `company` is a required property.
- Any other string key is allowed, but must have a `string` value.

**API Response Map**

Index signatures are common when dealing with dynamic data structures like dictionaries, configuration maps, or JSON responses.

```ts
interface ApiResponse {
  [field: string]: string | number | boolean;
}

const response: ApiResponse = {
  status: "success",
  code: 200,
  isLoggedIn: true,
};
```

### Function as a Property

You can annotate functions inside objects.

```ts
let mathUtils: {
  add: (a: number, b: number) => number;
  square: (x: number) => number;
};

mathUtils = {
  add: (a, b) => a + b,
  square: (x) => x * x,
};
```

Ensures methods inside objects follow specific signatures.

## Interfaces

An interface in TypeScript is a way to define the shape of an object.

It tells TypeScript:

- What properties an object must have.
- What types those properties should be.
- Optionally, what methods the object should include.

Think of it as a contract: if a variable claims to follow an interface, it must satisfy that contract.

```ts
interface InterfaceName {
  propertyName: Type;
  anotherProperty: Type;
}
```

### Extending Interfaces

TypeScript allows interfaces to extend:

1. Other interfaces (most common case).
2. Object types (via `type` aliases).

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  id: number;
  department: string;
}

let emp: Employee = {
  id: 1,
  name: "Alice",
  department: "HR",
};
```

- `Employee` must have everything from `Person` plus its own properties.
- You can extend multiple interfaces (similar to multiple inheritance).

```ts
type Person = {
  name: string;
  age: number;
};

interface Employee extends Person {
  employeeId: number;
}
```

**Interface vs. Type Extension**

- Interface `extends` Interface / Type → only works with object-like shapes.
- Type alias `&` (intersection) → combines multiple types.

```ts
type Person = {
  name: string;
  age: number;
};

type Address = {
  city: string;
  country: string;
};

// Intersection
type Employee = Person &
  Address & {
    employeeId: number;
  };
```

### Declaration Merging (Special Feature of Interfaces)

If you declare the same interface name twice, TypeScript merges them.

```ts
interface Car {
  brand: string;
}

interface Car {
  model: string;
}

let myCar: Car = {
  brand: "Toyota",
  model: "Corolla",
};
```

Useful when extending library types without modifying them directly.

# Class

A class in TypeScript is a blueprint for creating objects with properties (data) and methods (behaviors).

TypeScript extends JavaScript’s classes with strong typing, access modifiers, and property declarations.

## Class Properties

Properties are variables inside a class that hold data.

```ts
class ClassName {
  propertyName: Type; // property declaration
  readonly id: number; // readonly property
  private secret: string; // private property
  protected status: boolean; // protected property

  constructor(id: number, secret: string, status: boolean) {
    this.id = id; // assign values in constructor
    this.secret = secret;
    this.status = status;
  }
}
```

## Access Modifiers

TypeScript introduces access modifiers to control visibility.

- `public` → default, accessible everywhere.
- `private` → accessible only inside the class.
- `protected` → accessible inside the class and its subclasses.
- `readonly` → property cannot be reassigned after initialization.

### Shorthand Property Declaration with Modifiers

Instead of declaring properties separately, you can define them directly in the constructor.

```ts
class Student {
  constructor(
    public name: string,
    private roll: number,
    protected batch: string
  ) {}
}

const s = new Student("Masum", 101, "2025");
console.log(s.name); // ✅ public
// console.log(s.roll); // ❌ private
// console.log(s.batch);// ❌ protected
```

## Static Properties & Methods

- Belong to the class itself (not to instances).
- Accessed with `ClassName.property` or `ClassName.method`.

```ts
class MathUtil {
  static PI: number = 3.1416;

  static circleArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI); // 3.1416
console.log(MathUtil.circleArea(5)); // 78.54
```

## Getters and Setters

Provide controlled access to private/protected properties.

```ts
class BankAccount {
  private _balance: number = 0;

  get balance(): number {
    return this._balance;
  }

  set balance(amount: number) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    this._balance = amount;
  }
}

const account = new BankAccount();
account.balance = 1000; // ✅ calls setter
console.log(account.balance); // ✅ calls getter → 1000
```

-`get balance()` → behaves like a property when accessed. -`set balance()` → behaves like assignment but with validation logic.

## Abstract Methods & Properties

Used in abstract classes.

Must be implemented by subclasses.

```ts
abstract class Shape {
  abstract area(): number; // abstract method
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const c = new Circle(5);
console.log(c.area()); // 78.54
```

## Abstract Class vs Interface

Both abstract classes and interfaces define a contract, but:
| Feature | Abstract Class | Interface |
| --------------------------- | -------------------------------------------- | ----------------------------------------- |
| Can contain implementation? | ✅ Yes (concrete methods & properties) | ❌ No (only declarations) |
| Can have fields? | ✅ Yes | ❌ No (only method/property signatures) |
| Multiple inheritance? | ❌ No (only one abstract class) | ✅ Yes (can implement multiple interfaces) |
| Use case | Common base with **shared logic** + contract | Pure **shape/structure** definition |

## `implements` keyword

- A class can use the `implements` keyword to enforce a contract defined by an interface.
- The class must provide concrete implementations for all the methods and properties declared in the interface.
- Unlike `extends`, `implements` does not bring any implementation — only the shape (structure) must match.

So, `implements` is like a promise: "This class promises to have everything the interface says."

```ts
interface Person {
  name: string;
  age: number;
  greet(): void;
}

class Student implements Person {
  name: string;
  age: number;
  roll: number;

  constructor(name: string, age: number, roll: number) {
    this.name = name;
    this.age = age;
    this.roll = roll;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

const s = new Student("Alice", 20, 101);
s.greet(); // Hello, my name is Alice, I am 20 years old.
```

# Advance Types

## Literal Types

In TypeScript, Literal Types allow you to specify exact values that a variable can hold, rather than just a general type like `string` or `number`.

- A `string` type means any string (`"hello"`, `"world"`, `"foo"`, …).
- A `string literal type` means only one specific string (like `"hello"`).

This is extremely useful when you want to restrict values to a limited set of possibilities.

```ts
let direction: "north" | "south" | "east" | "west";

direction = "north"; // ✅ allowed
direction = "south"; // ✅ allowed
direction = "up"; // ❌ Error: Type '"up"' is not assignable
```

## Type Narrowing

In TypeScript, narrowing means reducing a broad type (like `string | number`) into a more specific type at runtime based on some checks.

```ts
function printLength(value: string | number) {
  if (typeof value === "string") {
    // TypeScript knows value is a string here
    console.log(value.length);
  } else {
    // Here, value must be a number
    console.log(value.toFixed(2));
  }
}
```

### Ways to Narrow Types

There are several techniques:

- `typeof` checks
- `instanceof` checks
- Custom Type Guards (`value is Type`)

### Narrowing with typeof

The typeof operator is used to check primitive types (`string`, `number`, `boolean`, `bigint`, `symbol`, `undefined`, and `object`).

```ts
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + value; // padding is number
  } else {
    return padding + value; // padding is string
  }
}

console.log(padLeft("Hello", 4)); // "    Hello"
console.log(padLeft("Hello", ">> ")); // ">> Hello"
```

- `typeof` works great for primitives.
- It won’t help for objects or classes — that’s where `instanceof` comes in.

### Narrowing with `instanceof`

`instanceof` is used to check whether an object is created from a particular class or constructor function.

```ts
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // animal is narrowed to Dog
  } else {
    animal.meow(); // animal is narrowed to Cat
  }
}

makeSound(new Dog()); // Woof!
makeSound(new Cat()); // Meow!
```

- Use `instanceof` when dealing with classes and objects.
- It doesn’t work for primitives (use `typeof` instead).

### Narrowing with Type Guards (Custom Functions)

Sometimes, you need your own checks for more complex types.
A type guard is a function that returns a type predicate (`param is Type`).

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim(); // animal is narrowed to Fish
  } else {
    animal.fly(); // animal is narrowed to Bird
  }
}
```

- `isFish` is a user-defined type guard.
- The `animal is Fish` return type tells TypeScript that when this function returns `true`, the variable is of type `Fish`.

## Mapped Types

A Mapped Type lets you create a new type by transforming each property of an existing type according to some rule.

Think of it as: Take a type → iterate over its keys → create a new type with modified properties.

```ts
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
```

- `keyof Type` → gets all property names of `Type` as a union.
- `Property in keyof Type` → iterate over each key.
- The mapped type assigns new property types.

### Basic Mapped Types

```ts
type Features = {
  darkMode: () => void;
  multiLanguage: () => void;
};

type FeatureFlags = {
  [K in keyof Features]: boolean;
};

// Equivalent to:
type FeatureFlagsManual = {
  darkMode: boolean;
  multiLanguage: boolean;
};
```

Every property of `Features` got transformed into `boolean`.

### Built-in Mapped Types (`Readonly`, `Partial`, `Required`)

TypeScript provides some utility types built using mapped types.

**ReadOnly**

```ts
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type User = {
  id: number;
  name: string;
};

type ReadonlyUser = Readonly<User>;

// Equivalent:
type ReadonlyUserManual = {
  readonly id: number;
  readonly name: string;
};
```

**Partial**

```ts
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type UserPartial = Partial<User>;

// Equivalent:
type UserPartialManual = {
  id?: number;
  name?: string;
};
```

All properties are now optional.

**Required**

```ts
type Required<T> = {
  [P in keyof T]-?: T[P];
};

type UserOptional = {
  id?: number;
  name?: string;
};

type UserRequired = Required<UserOptional>;

// Equivalent:
type UserRequiredManual = {
  id: number;
  name: string;
};
```

- The `-?` removes the optional modifier.
- So all properties are required.

### Remapping Keys

You can also remap keys using `as`.

```ts
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type Person = {
  name: string;
  age: number;
};

type PersonGetters = Getters<Person>;

// Equivalent:
type PersonGettersManual = {
  getName: () => string;
  getAge: () => number;
};
```

- Each key is transformed into a new key (`getName`, `getAge`).
- Each value becomes a function returning the original property type.

## Conditional Types

A Conditional Type looks like this:

```ts
T extends U ? X : Y
```

Meaning:

- If `T` can be assigned to `U` → return `X`
- Otherwise → return `Y`

This is checked at compile-time, not at runtime.

### Basic Conditional Type

```ts
type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<string>; // "Yes"
type B = IsString<number>; // "No"
```

You can use this to create type-level conditions.

### Extracting Return Types

```ts
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type A = GetReturnType<() => number>; // number
type B = GetReturnType<(x: string) => boolean>; // boolean
type C = GetReturnType<string>; // never
```

- `infer R` → captures the return type of the function.
- If `T` is a function, return its return type. Otherwise → `never`.
  This is how TypeScript’s built-in `ReturnType<T>` works.

### Conditional Type with Unions (Distributive Behavior)

Conditional types are distributive over unions.

```ts
type ToArray<T> = T extends any ? T[] : never;

type A = ToArray<number>; // number[]
type B = ToArray<number | string>; // number[] | string[]
```

When you pass `number | string`, TypeScript distributes: `ToArray<number> | ToArray<string>` → `number[] | string[]`.

This is powerful, but sometimes you don’t want distributive behavior → you can wrap in square brackets:

```ts
type ToArrayNonDistributive<T> = [T] extends [any] ? T[] : never;

type C = ToArrayNonDistributive<number | string>; // (number | string)[]
```

### Filtering Types

You can use conditional types to filter properties.

```ts
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
```

- ``"a"` extends `"a"` → becomes `never` → excluded.
- ``"b"` and `"c"` remain.

### Conditional Type with `infer`

The `infer` keyword lets you extract a type inside a conditional.

```ts
type FirstElement<T> = T extends [infer U, ...any[]] ? U : never;

type A = FirstElement<[string, number, boolean]>; // string
type B = FirstElement<[]>; // never
```

- If `T` is a tuple, extract the first element type.
- If not, return `never`.

## Utility Types

### `Partial<T>`

Makes all properties optional.

```ts
type User = {
  id: number;
  name: string;
  age: number;
};

type PartialUser = Partial<User>;
// Equivalent:
type PartialUserManual = {
  id?: number;
  name?: string;
  age?: number;
};
```

### `Required<T>`

Makes all properties required (opposite of `Partial`).

```ts
type UserOptional = {
  id?: number;
  name?: string;
};

type UserRequired = Required<UserOptional>;
// Equivalent:
type UserRequiredManual = {
  id: number;
  name: string;
};
```

### `Readonly<T>`

Makes all properties read-only.

```ts
type User = {
  id: number;
  name: string;
};

type ReadonlyUser = Readonly<User>;
// Equivalent:
type ReadonlyUserManual = {
  readonly id: number;
  readonly name: string;
};

const user: ReadonlyUser = { id: 1, name: "Alice" };
user.id = 2; // ❌ Error: Cannot assign to 'id'
```

### `Pick<T, K>`

Creates a type by picking a subset of properties.

```ts
type User = {
  id: number;
  name: string;
  age: number;
};

type UserPreview = Pick<User, "id" | "name">;
// Equivalent:
type UserPreviewManual = {
  id: number;
  name: string;
};
```

### `Omit<T, K>`

Creates a type by removing specific properties.

```ts
type User = {
  id: number;
  name: string;
  age: number;
};

type UserWithoutAge = Omit<User, "age">;
// Equivalent:
type UserWithoutAgeManual = {
  id: number;
  name: string;
};
```

### `Record<K, T>`

Constructs a type with keys K and values T.

```ts
type Roles = "admin" | "editor" | "viewer";

type RolePermissions = Record<Roles, boolean>;
// Equivalent:
type RolePermissionsManual = {
  admin: boolean;
  editor: boolean;
  viewer: boolean;
};

const permissions: RolePermissions = {
  admin: true,
  editor: false,
  viewer: true,
};
```

### `Exclude<T, U>`

Excludes types from a union.

```ts
type Letters = "a" | "b" | "c";

type WithoutA = Exclude<Letters, "a">;
// "b" | "c"
```

### Extract<T, U>

Extracts types that are assignable to U.

```ts
type Letters = "a" | "b" | "c";

type OnlyA = Extract<Letters, "a" | "d">;
// "a"
```

Opposite of Exclude.

# Generic

Generics let you write flexible, reusable, and type-safe functions, classes, or types.
Instead of fixing a type (like string or number), you use a type placeholder that gets filled in when the function is used.

Think of generics as variables for types.

## Why Use Generics

Without generics, you have two problems:

- Too specific → Function only works with one type.
- Too loose (any) → Function works with everything but loses type safety.

Generics give you the best of both worlds: flexibility + type safety.

## Generic Functions

```ts
function identity<T>(value: T): T {
  return value;
}
```

- `T` is a type parameter (like a variable, but for types).
- When calling the function, `T` will be replaced with the actual type.

### Example of Identity Function

```ts
function identity<T>(value: T): T {
  return value;
}

let num = identity(42); // inferred T = number
let str = identity("hello"); // inferred T = string
```

- Here, `identity(42)` returns a number, `identity("hello")` returns a string.
- Unlike `any`, you don’t lose type safety.

### Generic Function with Arrays

```ts
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

let firstNum = getFirst([10, 20, 30]); // inferred as number
let firstStr = getFirst(["a", "b", "c"]); // inferred as string
```

- `T[]` means an array of type `T`.
- If you pass numbers, `T` becomes `number`.
- If you pass strings, `T` becomes `string`.

### Generic Function with Multiple Types

```ts
function merge<A, B>(obj1: A, obj2: B): A & B {
  return { ...obj1, ...obj2 };
}

const merged = merge({ name: "Alice" }, { age: 25 });
// inferred type: { name: string } & { age: number }
```

- The function works for any two objects.
- The result is an intersection of both types.

### Generic Constraints

Sometimes you need to restrict what types are allowed with a generic.
Use `extends` to apply constraints.

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello"); // ✅ string has length
getLength([1, 2, 3]); // ✅ array has length
getLength(42); // ❌ number has no length property
```

- `T extends { length: number }` → T must be something that has a length property.

### Default Generic Types

You can give a default type to a generic.

```ts
function wrap<T = string>(value: T): T[] {
  return [value];
}

let wrapped1 = wrap(10); // inferred as number[]
let wrapped2 = wrap("hi"); // inferred as string[]
let wrapped3 = wrap(); // ❌ Error (no value given)
```

- If you omit `T`, it defaults to `string`.

### Explicit vs. Inferred Generics

You can let TypeScript infer the type OR pass it explicitly.

```ts
identity<number>(100); // explicitly specify <number>
identity("hello"); // type inferred automatically
```

### API Response Wrapper

```ts
type ApiResponse<T> = {
  status: number;
  data: T;
};

function fetchUser(): ApiResponse<{ id: number; name: string }> {
  return {
    status: 200,
    data: { id: 1, name: "Alice" },
  };
}

const userResponse = fetchUser();
console.log(userResponse.data.name); // ✅ type-safe
```

## Generic Interface

An interface in TypeScript defines the shape of an object.
When you make it generic, you add type parameters (like `<T>`) so the interface can work with different data types, while staying type-safe.

In simple words: A Generic Interface is a blueprint for objects that can handle different types without rewriting the interface.

```ts
interface InterfaceName<T> {
  property: T;
  method(value: T): T;
}
```

- `<T>` is a generic type parameter.
- The actual type for `T` is supplied when you use the interface.

### Generic Property

```ts
interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "Hello" };
const numberBox: Box<number> = { content: 42 };
```

- `Box<string>` → content must be a string.
- `Box<number>` → content must be a number.
- This avoids duplicating separate `StringBox`, `NumberBox`, etc.

### Generic Method

```ts
interface Identity<T> {
  getValue: (value: T) => T;
}

const stringIdentity: Identity<string> = {
  getValue: (val) => val.toUpperCase(),
};

const numberIdentity: Identity<number> = {
  getValue: (val) => val * 2,
};
```

- `Identity<string>` works with strings.
- `Identity<number>` works with numbers.
- Same structure, different types, type-safe.

### Multiple Type Parameters

```ts
interface Pair<K, V> {
  key: K;
  value: V;
}

const numberStringPair: Pair<number, string> = {
  key: 1,
  value: "One",
};

const stringBooleanPair: Pair<string, boolean> = {
  key: "isAdmin",
  value: true,
};
```

- `Pair<K, V>` can represent a key-value pair with any types.
- Similar to how `Map` or `Record` works.

### Generic Interface with Constraints

You can restrict generic types using `extends`.

```ts
interface HasLength<T extends { length: number }> {
  item: T;
  getLength(): number;
}

const stringItem: HasLength<string> = {
  item: "Hello",
  getLength() {
    return this.item.length;
  },
};

const arrayItem: HasLength<number[]> = {
  item: [1, 2, 3],
  getLength() {
    return this.item.length;
  },
};

// ❌ Error: number doesn't have length
// const invalidItem: HasLength<number> = { item: 42, getLength() { return 0 } };
```

- `T` must have a `length` property.
- Works for strings, arrays, and custom objects with `length`.

### Default Generic Types

You can assign a default type if none is provided.

```ts
interface ApiResponse<T = string> {
  status: number;
  data: T;
}

const response1: ApiResponse = { status: 200, data: "Success" };
// inferred T = string

const response2: ApiResponse<number> = { status: 200, data: 123 };
```

If no type is given, `T` defaults to `string`.

### Using Generic Interfaces in Functions

```ts
interface Repository<T> {
  getAll: () => T[];
  getById: (id: number) => T;
}

type User = { id: number; name: string };

const userRepo: Repository<User> = {
  getAll: () => [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ],
  getById: (id) => ({ id, name: "Unknown" }),
};

console.log(userRepo.getAll()); // ✅ returns User[]
console.log(userRepo.getById(1)); // ✅ returns User
```

- `Repository<User>` means this repository handles Users only.
- All functions are automatically type-safe for `User`.

## Generic Class

A class defines a blueprint for creating objects.
When you make it generic, you add type parameters (like `<T>`) so the class can work with different types, while remaining type-safe.

In simple terms: A Generic Class is like a container that can store different types, but you decide the type when you create an instance.

```ts
class ClassName<T> {
  property: T;
  constructor(value: T) {
    this.property = value;
  }
  method(value: T): T {
    return value;
  }
}
```

- `<T>` = type parameter.
- `T` is decided when you create an object.

### Generic Storage Class

```ts
class Box<T> {
  content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }
}

const stringBox = new Box<string>("Hello");
console.log(stringBox.getContent()); // "Hello"

const numberBox = new Box<number>(42);
console.log(numberBox.getContent()); // 42
```

- `Box<string>` → only strings allowed.
- `Box<number>` → only numbers allowed.
- If you try to put the wrong type, TypeScript throws an error.

### Generic Class with Arrays

```ts
class DataStore<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const names = new DataStore<string>();
names.add("Alice");
names.add("Bob");
// names.add(123); ❌ Error

console.log(names.getAll()); // ["Alice", "Bob"]

const numbers = new DataStore<number>();
numbers.add(10);
numbers.add(20);

console.log(numbers.getAll()); // [10, 20]
```

- `DataStore<string>` → only strings allowed in this instance.
- `DataStore<number>` → only numbers allowed in that instance.

### Multiple Generic Parameters

```ts
class Pair<K, V> {
  key: K;
  value: V;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }
}

const p1 = new Pair<number, string>(1, "One");
console.log(p1.key, p1.value); // 1 "One"

const p2 = new Pair<string, boolean>("isAdmin", true);
console.log(p2.key, p2.value); // "isAdmin" true
```

- `Pair<K, V>` holds a key-value pair with flexible types.

### Generic Constraints (extends)

You can restrict what types a generic can accept.

```ts
class Collection<T extends { id: number }> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  findById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }
}

type User = { id: number; name: string };

const users = new Collection<User>();
users.add({ id: 1, name: "Alice" });
users.add({ id: 2, name: "Bob" });

console.log(users.findById(2)); // { id: 2, name: "Bob" }

// ❌ Error: number doesn’t have an id property
// const numbers = new Collection<number>();
```

- `T extends { id: number }` → only objects with an `id` property are allowed.
- Prevents misuse and ensures type safety.

### Default Generic Type

```ts
class Response<T = string> {
  data: T;
  constructor(data: T) {
    this.data = data;
  }
}

const res1 = new Response("Success"); // inferred as Response<string>
const res2 = new Response<number>(200); // explicit Response<number>
```

If you don’t pass a type, it defaults to `string`.

### Generic Class with Methods

```ts
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const numStack = new Stack<number>();
numStack.push(10);
numStack.push(20);
console.log(numStack.pop()); // 20

const strStack = new Stack<string>();
strStack.push("a");
strStack.push("b");
console.log(strStack.pop()); // "b"
```

- `Stack<T>` behaves like a type-safe stack (LIFO structure).
- Each instance can only handle one type.

## Constraints with `extends`

When you create a generic type or function, it can accept any type by default:

```ts
function identity<T>(value: T): T {
  return value;
}
```

Here, `T` could be `string`, `number`, `boolean`, even a custom object.

But sometimes, you want to restrict which types are allowed.
That’s where constraints come in, using the `extends` keyword.

```ts
function functionName<T extends Constraint>(arg: T): T {
  return arg;
}
```

- `T` must follow the shape or type defined in `Constraint`.

### Constraining to Objects with length

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("Hello"); // ✅ string has length
getLength([1, 2, 3]); // ✅ array has length
getLength({ length: 10 }); // ✅ object with length
// getLength(42); ❌ Error: number doesn’t have length
```

- Here, `T` must have a `length` property.
- Prevents passing numbers (since numbers don’t have `length`).

### Constraining to a Specific Type

```ts
function printId<T extends string | number>(id: T): void {
  console.log("ID:", id);
}

printId("abc"); // ✅ string allowed
printId(123); // ✅ number allowed
// printId(true); ❌ Error: boolean not allowed
```

- `T` is restricted to string or number.
- This is a union constraint.

### Constraint with Interfaces

```ts
interface Person {
  name: string;
}

function greet<T extends Person>(person: T): string {
  return "Hello, " + person.name;
}

greet({ name: "Alice" }); // ✅ Works
greet({ name: "Bob", age: 25 }); // ✅ Works (extra props allowed)
greet({ age: 30 }); // ❌ Error: 'name' missing
```

- Any object that has a `name` property can be passed.
- Extra properties are allowed because of TypeScript’s structural typing.

### Generic Classes with Constraints

```ts
class Collection<T extends { id: number }> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  findById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }
}

type User = { id: number; name: string };

const users = new Collection<User>();
users.add({ id: 1, name: "Alice" });
console.log(users.findById(1)); // { id: 1, name: "Alice" }

// ❌ Error: 'number' does not satisfy constraint '{ id: number }'
// const numbers = new Collection<number>();
```

- The class only works with objects that have an `id: number`.
- Prevents invalid types like plain numbers.

### Using `keyof` Constraint

Sometimes you want a generic to be limited to keys of an object.

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { id: 1, name: "Alice" };

console.log(getProperty(user, "id")); // ✅ 1
console.log(getProperty(user, "name")); // ✅ "Alice"
// getProperty(user, "age"); ❌ Error: "age" not a key of user
```

- `K extends keyof T` → ensures `key` must be a property of `T`.
- Prevents invalid property access.

### Default Constraint (`unknown`)

If no constraint is added, TypeScript assumes `T extends unknown`.

```ts
function identity<T extends unknown>(value: T): T {
  return value;
}
```

- Equivalent to just `function identity<T>(value: T): T`.
- But `unknown` means: "could be anything, but you must be explicit before using it."

## Default Generic Types

When you create a generic function, class, or interface, you can give the type parameter a default type.

- If the user does not provide a type, TypeScript will use the default.
- If the user does provide a type, that one will be used instead.

```ts
type Example<T = DefaultType> = T;
```

- `T = DefaultType` means `T` will default to `DefaultType` if not specified.

### Generic Function with Default

```ts
function identity<T = string>(value: T): T {
  return value;
}

let a = identity("hello"); // inferred as string
let b = identity(42); // explicitly number
let c = identity(); // ❌ Error: argument missing
```

- Here, `T` defaults to `string`.
- If you call `identity("hello")`, TypeScript infers `T = string`.
- If you call `identity(42)`, it overrides with `number`.

### Generic Interface with Default

```ts
interface ApiResponse<T = string> {
  status: number;
  data: T;
}

const res1: ApiResponse = {
  status: 200,
  data: "Success",
}; // ✅ T defaults to string

const res2: ApiResponse<number> = {
  status: 200,
  data: 123,
}; // ✅ explicitly number
```

- If no type is given, `T` defaults to `string`.
- Flexible and avoids repeating types.

### Generic Class with Default

```ts
class Box<T = string> {
  content: T;
  constructor(value: T) {
    this.content = value;
  }
}

const box1 = new Box("Hello"); // inferred as Box<string>
const box2 = new Box<number>(42); // explicitly Box<number>
```

- `Box` defaults to `string` type.
- But you can still override with `number`.

### Multiple Generics with Defaults

```ts
interface Pair<K = string, V = number> {
  key: K;
  value: V;
}

const p1: Pair = { key: "id", value: 1 }; // defaults (string, number)
const p2: Pair<boolean, string> = { key: true, value: "Yes" }; // custom
```

- You can set defaults for multiple parameters.
- If user doesn’t provide, both `K` and `V` fall back to defaults.

### Default with Constraints

You can combine constraints (`extends`) with defaults.

```ts
interface Collection<T extends { id: number } = { id: number; name: string }> {
  items: T[];
}

const users: Collection = {
  items: [{ id: 1, name: "Alice" }], // ✅ uses default type
};

const products: Collection<{ id: number; price: number }> = {
  items: [{ id: 1, price: 99 }],
};
```

- `T` must extend `{ id: number }`.
- Default is `{ id: number; name: string }`.
- You can override with a custom type.

# Modules & Namespaces

## Named Export

You can export multiple things by their names.

```ts
export const PI = 3.14;

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
```

- Use `{}` to import specific named exports.
- You can rename imports with `as`
- Must import using the exact exported name (case-sensitive).

```ts
import { PI, add, subtract } from "./mathUtils";
// import { add as sum } from "./mathUtils";
```

## Default Export

A module can export **one default** thing.

```ts
export default function log(message: string): void {
  console.log("Log:", message);
}
```

- Each file can have only one default export.
- Import without `{}`.
- You can give it any name on import.

```ts
import log from "./logger";
```

## Export All (`export *`)

You can re-export everything from another module.

```ts
export function greet(name: string) {
  return `Hello, ${name}`;
}
```

```ts
export * from "./utils";
```

## Import Styles

1. Import Entire Module as an Object

```ts
import * as MathUtils from "./mathUtils";

console.log(MathUtils.add(2, 3)); // 5
```

2. Import Side Effects Only

```ts
// 📂 setup.ts
console.log("Setup done!");

// 📂 main.ts
import "./setup"; // runs the file but imports nothing
```

## Namespaces vs. Modules

- Namespaces (old way): Used inside one file/project to organize code.
- Modules (modern way): Each file is a module. Import/export is used between files.

### Namespaces

- A namespace in TypeScript is a way to group related code (variables, functions, classes, interfaces) under a single logical name.
- Prevents naming conflicts in large projects.
- Similar to “packages” in Java or “namespaces” in C#.

Before ES6 import/export, namespaces were the main way to organize TypeScript code.

```ts
namespace NamespaceName {
  export const variableName = "value";

  export function functionName() {
    // function body
  }

  export class ClassName {
    // class body
  }
}
```

- `export` keyword → makes items accessible outside the namespace.
- Without `export`, items remain private inside the namespace.

Namespaces are mostly used in older TypeScript projects or when not using module systems like ES6/CommonJS.

- Can be nested for hierarchy.
- Can be split across files using `/// <reference path="..." />`.

## Re-export

- Re-exporting means taking something exported from one module and exporting it again from another module.
- It’s often used to create a “barrel file” (a single entry point that re-exports everything from multiple modules).
- This makes imports cleaner and more maintainable.

```ts
export * from "./module";
```

# Type Declarations

## Ambient Declarations

In TypeScript, ambient declarations are a way to tell the compiler about the existence and shape of code that’s defined outside TypeScript — like in JavaScript libraries, global variables, or external APIs.

They live inside `.d.ts` files (declaration files), and do not generate JavaScript output.
They’re purely for type checking and editor IntelliSense.

Think of them as “type definitions without implementation”.

### Why Do We Need `.d.ts` Files?

- TypeScript needs type information, but plain JavaScript libraries don’t provide it.
- `.d.ts` files bridge the gap: they describe the types of values, functions, and classes that come from elsewhere.
- Popular JS libraries (React, Express, Lodash, etc.) ship with `.d.ts` files, or you can install them via DefinitelyTyped (`npm install @types/react`).

### Syntax of Ambient Declarations

They often use the declare keyword. Examples:

- `declare var` → for global variables
- `declare function` → for global functions
- `declare class` → for global classes
- `declare module` → for modules
- `declare namespace` → for grouping related declarations

### Declaring a Global Variable

Suppose a JavaScript file adds a global variable:

```js
// script.js
window.myGlobal = "Hello world!";
```

In TypeScript, we can declare it:

```ts
// globals.d.ts
declare var myGlobal: string;
```

### Declaring a Module

If you’re using a JavaScript library that doesn’t have types, you can declare a module:

```ts
// lodash.d.ts
declare module "lodash" {
  export function chunk<T>(array: T[], size?: number): T[][];
}
```

Now in your TypeScript code:

```ts
import { chunk } from "lodash";

let result = chunk([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
```

Even though Lodash is written in JS, you get type safety + autocomplete.

### Declaring a Namespace

```ts
// myLib.d.ts
declare namespace MyLib {
  function greet(name: string): void;
  let version: string;
}
```

Usage:

```ts
MyLib.greet("Alice");
console.log(MyLib.version);
```

### Merging with Existing Types

You can augment existing modules:

```ts
// express-custom.d.ts
import "express";

declare module "express" {
  interface Request {
    user?: { id: number; name: string };
  }
}
```

Now in Express code:

```ts
app.use((req, res, next) => {
  req.user = { id: 1, name: "Alice" }; // ✅ recognized
  next();
});
```

### Key Rules of `.d.ts` Files

1. They don’t generate JS output — only types.
2. They must use `declare` for globals, modules, etc.
3. You can place them:

- in your project (`src/types/` or `@types/`)
- or install from DefinitelyTyped (`@types/*` packages).

4. TypeScript automatically picks up `.d.ts` files if they’re in your project or `node_modules/@types`.

## DefinitelyTyped

- DefinitelyTyped is a huge open-source repository that contains type declaration files (`.d.ts`) for popular JavaScript libraries.
- Since many JS libraries don’t ship with TypeScript support, the community maintains these declaration files separately.
- You can install them via npm as @types/<library-name>.

Example:

- React itself is plain JS (historically).
- To use React in TypeScript, you install:
  ```bash
  npm install react react-dom
  npm install --save-dev @types/react @types/react-dom
  ```
- Now your TS project knows the types of React components, hooks, etc.

### How It Works

1. Install a JS library (`npm install lodash`).
2. Install its type declarations (`npm install --save-dev @types/lodash`).
3. TypeScript automatically finds the `.d.ts` file in `node_modules/@types`.
4. You get type safety + IntelliSense without writing your own declarations.

### Using Lodash with `@types/lodash`

Without types, TypeScript doesn’t know what `_.chunk` does:

```ts
import _ from "lodash";

let result = _.chunk([1, 2, 3, 4], 2);
console.log(result);
```

If `@types/lodash` is installed:

- TypeScript knows `chunk<T>(array: T[], size?: number): T[][]`.
- `result` is correctly inferred as `number[][]`.
- If you misuse it:

```ts
_.chunk(123, 2); // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'any[]'
```

TypeScript catches the error at compile time.

### Using Express with @types/express

```bash
npm install express
npm install --save-dev @types/express
```

Now in TypeScript:

```ts
import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
```

- `Request` and `Response` come from `@types/express`.
- You get full IntelliSense for Express APIs.

## Declaring types for external libraries

This is needed when you use a JavaScript library with no built-in types and no @types/... package.
In such cases, you must declare the types yourself so TypeScript knows how to handle the library.

### Why Do We Need to Declare Types?

- TypeScript only understands types it has definitions for.
- Many modern libraries include their own `.d.ts` files ✅
- Others rely on DefinitelyTyped (`@types/...`) ✅
- But sometimes: ❌ no built-in types, ❌ no `@types` available → you must declare types manually.

### Ways to Declare Types for External Libraries

- Quick and dirty: declare the module as `any`.
- Create a `.d.ts` file with basic type definitions.
- Write a full declaration file (`index.d.ts`) with detailed typings.
- Publish to DefinitelyTyped if it’s useful for the community.

### Declaring a Module as `any`

Suppose you import a JS library called `cool-lib`, but TS has no idea about it:

```ts
import cool from "cool-lib"; // ❌ Error: Cannot find module 'cool-lib'
```

Fix with a quick `.d.ts`:

```ts
// cool-lib.d.ts
declare module "cool-lib";
```

Now TypeScript stops complaining, but everything is `any`:

```ts
cool.doSomething(); // no IntelliSense, no type safety
```

Useful as a temporary fix, but not recommended long term.

### Declaring a Module with Specific Functions

Suppose `cool-lib` exports a function `greet(name: string): string`.

```ts
// cool-lib.d.ts
declare module "cool-lib" {
  export function greet(name: string): string;
}
```

Now in your TS code:

```ts
import { greet } from "cool-lib";

console.log(greet("Alice")); // ✅ typed as string
```

TypeScript knows `greet` takes a string and returns a string.

If you misuse it:

```ts
greet(123); // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'
```

# Advance Features

## Decorators

A decorator is a special kind of declaration that can be attached to:

- Classes
- Methods
- Properties
- Parameters

They are functions that take metadata about the thing they decorate and optionally modify it.

You must enable them in `tsconfig.json`:

```ts
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

### General Syntax

A decorator is just a function, prefixed with `@` when used:

```ts
function MyDecorator(target: any) {
  console.log("Decorator called on:", target);
}

@MyDecorator
class Example {}
```

### Class Decorators

Applied to a class declaration.

They receive the class constructor as their only argument.

```ts
function Logger(constructor: Function) {
  console.log(`Class ${constructor.name} is created`);
}

@Logger
class Person {
  constructor(public name: string) {}
}
```

Output when class is defined:

```bash
Class Person is created
```

- `@Logger` runs when the class is declared, not when instantiated.
- Can be used for logging, dependency injection, or modifying the class.

Modifying a Class

```ts
function Seal(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@Seal
class Car {
  model = "Tesla";
}
```

Now the class and its prototype are sealed (no new properties can be added).

### Method Decorators

Applied to a method inside a class.

They receive:

1. The prototype of the class (or constructor for static methods).
2. The method name.
3. The property descriptor (can be modified).

```ts
function LogMethod(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyName} with`, args);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @LogMethod
  add(a: number, b: number) {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3));
```

Output:

```bash
Calling add with [ 2, 3 ]
5
```

- We intercepted the method call.
- Useful for logging, caching, validation, performance measurement.

## Mixins

A Mixin is a way to combine reusable pieces of functionality into classes without using traditional inheritance (i.e., `extends`).

- Unlike classical inheritance (single base class), mixins allow you to compose multiple behaviors into a single class.
- They help achieve multiple inheritance–like behavior in TypeScript.

Think of them like "function helpers" that add behavior to classes."

### Why Use Mixins?

1. Code Reuse → Reuse functionality across multiple classes.
2. Avoid Deep Inheritance → Instead of building tall class hierarchies, you "mix in" behavior.
3. Composition over Inheritance → A common design principle.

### How Mixins Work in TypeScript

TypeScript doesn’t directly support multiple inheritance (like in C++), but you can use mixins with a special pattern:

1. Create classes (or traits) that define behaviors.
2. Use a helper type (`Constructor`) to allow extending.
3. Use `Object.assign` to mix functionality into the target class.

### Example of Mixins

1. Define a Constructor Type

```ts
type Constructor<T = {}> = new (...args: any[]) => T;
```

This is a generic constructor type — it allows mixins to accept any class as a base. 2. Create Mixins

```ts
// A mixin for adding logging capability
function Logger<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    log(message: string) {
      console.log(`[LOG]: ${message}`);
    }
  };
}

// A mixin for adding timestamp capability
function Timestamp<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    getTimestamp() {
      return new Date().toISOString();
    }
  };
}
```

- `Logger` adds a `.log()` method.
- `Timestamp` adds a `.getTimestamp()` method.
- Both are reusable and can be applied to any class.

3. Apply Mixins

```ts
// Base class
class Person {
  constructor(public name: string) {}
}

// Apply mixins (Person -> Logger -> Timestamp)
class Employee extends Logger(Timestamp(Person)) {
  constructor(name: string, public role: string) {
    super(name);
  }
}
```

4. Use It

```ts
const emp = new Employee("Alice", "Developer");

console.log(emp.name); // Alice
console.log(emp.role); // Developer
emp.log("Started working!"); // [LOG]: Started working!
console.log(emp.getTimestamp()); // e.g. 2025-09-03T13:45:10.123Z
```

`Employee` class now inherits multiple behaviors via mixins.

### Key Notes

1. Mixins are composable → You can chain them in different orders.
2. Order matters → The last mixin in the chain overrides previous ones if they define the same method.
3. Better than multiple inheritance → Avoids diamond problem in C++.
4. Helps code reuse → Without bloating single base classes.

## `keyof`, `typeof`, and `infer`

### `keyof`

keyof is a type operator that takes an object type and produces a union of its keys as string (or number) literal types.

```ts
type Person = {
  name: string;
  age: number;
  isAdmin: boolean;
};

type PersonKeys = keyof Person;
```

```ts
// PersonKeys = "name" | "age" | "isAdmin"
```

So `keyof` extracts `"name" | "age" | "isAdmin"`.

**Usage with Generics**

You can use it to ensure function parameters are valid property names:

```ts
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = { name: "Alice", age: 25, isAdmin: true };

const name = getValue(person, "name"); // ✅ string
const age = getValue(person, "age"); // ✅ number
// getValue(person, "salary"); ❌ Error: "salary" is not a key of Person
```

`keyof` helps us enforce type safety when accessing object properties.

### `typeof`

`typeof` in TypeScript has two meanings:

1. Runtime JavaScript operator → Returns the type of a value as a string (e.g., `"string"`, `"number"`).
2. TypeScript type operator → Gets the type of a value/variable so you can reuse it in type annotations.

```ts
let person = {
  name: "Alice",
  age: 25,
  isAdmin: true,
};

type PersonType = typeof person;
```

```ts
// PersonType = { name: string; age: number; isAdmin: boolean }
```

### `infer`

`infer` is a keyword used in conditional types that allows TypeScript to "infer" a type variable inside a type definition.

It’s often used when building utility types.

```ts
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type A = UnwrapPromise<Promise<string>>; // A = string
type B = UnwrapPromise<number>; // B = number
```

- If `T` is a `Promise<U>`, then infer `U`.
- Otherwise, just return `T`.

**Example with Arrays:**

```ts
type ElementType<T> = T extends (infer U)[] ? U : T;

type A = ElementType<string[]>; // string
type B = ElementType<number[]>; // number
type C = ElementType<boolean>; // boolean
```

`infer` lets us extract inner types from complex structures.

## Template Literal Types

Template Literal Types in TypeScript are similar to JavaScript template strings (`${...}`), but they work at the type level.

They allow you to create new string literal types by combining unions, literals, or interpolating types into strings.

```ts
type Role = "admin" | "user" | "guest";

type RoleMessage = `Welcome, ${Role}`;
```

```ts
type RoleMessage = "Welcome, admin" | "Welcome, user" | "Welcome, guest";
```

### String Manipulation with Built-in Helpers

TypeScript has utility types that work with template literals: `Uppercase<T>`, `Lowercase<T>`, `Capitalize<T>`, `Uncapitalize<T>`

```ts
type Greeting = "hello";
type Shout = Uppercase<Greeting>; // "HELLO"
type Capital = Capitalize<Greeting>; // "Hello"
```

## Indexed Access Types

An Indexed Access Type lets you retrieve the type of a specific property (or set of properties) from another type using the `T[K]` syntax.

👉 If you know how you access object properties at runtime with `obj["key"]`, indexed access types do the same thing at the type level.

```ts
type Person = {
  name: string;
  age: number;
  isAdmin: boolean;
};

type NameType = Person["name"]; // string
type AgeType = Person["age"]; // number
type AdminType = Person["isAdmin"]; // boolean
```

**Union of Keys**

You can pass multiple keys (a union) to extract multiple property types:

```ts
type PersonInfo = Person["name" | "age"];
// string | number
```

**Using keyof with Indexed Access**

You can use keyof to extract all property types from an object:

```ts
type PersonValues = Person[keyof Person];
// string | number | boolean
```

# Practical Topics

## Type Assertions vs Type Casting

### Type Assertions in TypeScript

- A type assertion tells the TypeScript compiler: “I know more about this value’s type than you do.”
- It doesn’t change the actual runtime value — it’s only a compile-time hint.

There are two ways to write type assertions:

```ts
// Angle-bracket syntax
let value: unknown = "hello";
let strLength = (<string>value).length;

// `as` syntax (preferred in modern TS)
let strLength2 = (value as string).length;
```

Both mean: “Treat value as a string.”

Example

```ts
type Person = {
  name: string;
  age: number;
};

const person = {} as Person;
person.name = "Alice";
person.age = 25;
```

- The empty object `{}` doesn’t match `Person`.
- But `as Person` tells TypeScript: “trust me, this is a `Person`.”
- Dangerous if misused:

```ts
const person = {} as Person;
console.log(person.age.toFixed()); // Runtime error (age is undefined)
```

Type assertions don’t do runtime checks. They only silence the compiler.

### Type Casting

In JavaScript, type casting usually means converting values from one type to another at runtime, e.g.:

```ts
let num = Number("123"); // string → number
let str = String(123); // number → string
let bool = Boolean(1); // number → boolean
```

This is runtime conversion, not just a compile-time hint.

```ts
const str = "123";
const num: number = Number(str); // runtime conversion
```

- `"123"` is actually converted into `123`.
- If you pass `"abc"`, `Number("abc")` → `NaN`.

### Differences between Type Casting and Type Assertion

| Feature             | Type Assertion (`as`, `<T>`)     | Type Casting (runtime conversion)               |
| ------------------- | -------------------------------- | ----------------------------------------------- |
| **When it happens** | Compile-time only                | Runtime (JS execution)                          |
| **Effect**          | Just changes how TS checks types | Actually changes the data value                 |
| **Safety**          | Can be unsafe if misused         | Safe but may fail (e.g., `Number("abc") → NaN`) |
| **Example**         | `(value as string).length`       | `Number("123") → 123`                           |

- Use type assertions sparingly, only when you’re sure about the type.
- Use type casting (conversion functions) when you really need to change the data type.
- Avoid overusing assertions like `as any` → defeats the purpose of TypeScript.

## Non-null Assertion Operator `!`

The non-null assertion operator (`!`) tells TypeScript:

“I’m sure this value is not `null` or `undefined`, trust me.”

It doesn’t do anything at runtime — it’s only a compile-time hint to the TypeScript type checker.

### Why Do We Need It?

TypeScript has strict null checks (`strictNullChecks: true` in `tsconfig.json`), meaning:

```ts
let value: string | null = null;

// Error ❌: value might be null
console.log(value.length);
```

The compiler complains because `value` could be `null`.
But sometimes, you know for sure that it won’t be null at runtime. That’s when you use `!`.

```ts
let value: string | null = "Hello";

// Tell TypeScript: value is definitely not null
console.log(value!.length); // ✅ OK
Here:
```

- Without `!`, TS warns that `value` might be `null`.
- With `!`, TS trusts you.

## Strict Mode (`strictNullChecks`, etc.)

Strict mode is a set of compiler options that make TypeScript more type-safe and strict.

You enable it in your `tsconfig.json`:

```ts
{
  "compilerOptions": {
    "strict": true
  }
}
```

`strict: true` is shorthand for turning on all strict type-checking options.

### `strictNullChecks`

`null` and `undefined` are not assignable to other types unless explicitly allowed.

```ts
let name: string = "Alice";
name = null; // ❌ Error
name = undefined; // ❌ Error
```

To allow null/undefined, you must declare them explicitly:

```ts
let name: string | null = null; // ✅
```

This avoids runtime errors like: Cannot read property 'length' of null.

### `strictPropertyInitialization`

Ensures class properties are initialized before use.

```ts
class Person {
  name: string; // ❌ Error: Property 'name' has no initializer
}
```

Fix 1: Initialize directly

```ts
class Person {
  name: string = "Default";
}
```

Fix 2: Initialize in constructor

```ts
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
```

Fix 3: Use definite assignment assertion (!)

```ts
class Person {
  name!: string; // tells TS: "I will assign this before use"
}
```

### `noImplicitAny`

Disallows variables/functions from having an implicit any type.

```ts
function greet(message) {
  // ❌ Error: message implicitly has type 'any'
  console.log(message);
}
```

Fix: Add explicit type

```ts
function greet(message: string) {
  console.log(message);
}
```

This prevents TypeScript from silently defaulting to any.

### `strictFunctionTypes`

Makes function parameter types checked more strictly, ensuring safe assignments.

```ts
type Fn = (x: number) => void;

let f1: Fn;
let f2 = (x: number | string) => {};

f1 = f2; // ❌ Error in strict mode
```

Prevents unsafe function assignments.

### `strictBindCallApply`

Ensures the methods `.bind`, `.call`, and `.apply` are type-safe.

```ts
function greet(name: string) {
  return `Hello ${name}`;
}

greet.call(null, "Alice"); // ✅
greet.call(null, 123); // ❌ Error
```

Without this, `.call` could accept wrong arguments silently.

### `alwaysStrict`

Ensures that every file is parsed in ECMAScript strict mode (`"use strict";`).

```ts
// with alwaysStrict: true
"use strict"; // enforced automatically
```

This matches modern JavaScript behavior and avoids subtle bugs.

# Tooling & Ecosystem

## Setting Up TypeScript with Node.js

1. Initialize a Node.js Project

```bash
mkdir ts-node-app
cd ts-node-app
npm init -y
```

2. Install TypeScript

```bash
npm install typescript --save-dev
```

3. Install Node.js type definitions

TypeScript needs type definitions for Node.js APIs:

```bash
npm install @types/node --save-dev
```

4. Initialize TypeScript Configuration

```bash
npx tsc --init
```

Basic `tsconfig.json` for Node.js:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### Adding Development Tools

1. **ts-node:** Run TypeScript directly without compiling manually.

```bash
npm install ts-node --save-dev
```

2. **nodemon:** Automatically restarts Node server on code changes.

```bash
npm install nodemon --save-dev
```

3. Add a script in `package.json`:

```json
"scripts": {
  "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts"
}
```

Now, `npm run dev` will run your TypeScript Node.js server and reload on changes.

### Running the Project

1. Compile manually (optional):

```bash
npx tsc
```

- Compiles TypeScript from `src/` to `dist/`.
- Run compiled JS:

```bash
node dist/index.js
```

2. Or run directly with ts-node:

```bash
npm run dev
```

# Question

1. how to run typescript with .html
2. `3. Better Testing → Every change to the compiler tests the language itself.`
3. Code Example of :Bootstrapping (Self-Hosting Transition)
4. How does `4. Incremental Builds` works
5. What's the role of AST, why do we need it, how it work, how it goes from AST to binding & type checking
6. how `Person.prototype.greet` is correct?
7. let const sob ki convert hoeye var hoi?
8. list of `target` and `module` in `tsconfig.json` file
9. list of uses of function returning `never`
10. explore method overloading in details
11. explore Incorrect `this` Usage (Type Safety)
