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
function functionName<T>(param: T): T {
  // function body
  return param;
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
