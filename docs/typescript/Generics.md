
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
