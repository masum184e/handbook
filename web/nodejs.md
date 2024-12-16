# Contents

- [CommonJS vs ES6 Modules](#commonjs-vs-es6-modules)
- [Modules](#modules)
  - [fs](#fs---file-system-module)
  - [http](#http---http-module)
  - [path](#path---path-module)
  - [events](#events---events-module)
- [Errors Handling](#errors-handling)
  - [Callbacks](#error-handling-in-callbacks)
  - [Promises](#error-handling-with-promises)
  - [asyncawait](#error-handling-with-asyncawait)
- [File Handling](#file-handling)

# CommonJS vs ES6 Modules

## CommonJS

- Modules are loaded synchronously.
- CommonJS works in all Node.js versions without additional configuration.
- Primarily used in Node.js but not natively supported in browsers.

## ES6 c

- Modules are loaded asynchronously.
- It is natively supported in browsers and newer versions of Node.js.
- Promotes a more declarative and standardized approach.

## Differences

| Feature                  | CommonJS                                                         | ES6 Modules                                                                                                                 |
| ------------------------ | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Syntax**               | `require()` and `module.exports`                                 | `import` and `export`                                                                                                       |
| **Default Availability** | Available in Node.js by default                                  | Available in modern JavaScript environments; Node.js requires `"type": "module"` in `package.json` or `.mjs` file extension |
| **Execution**            | Modules are loaded synchronously                                 | Modules are loaded asynchronously                                                                                           |
| **Scope**                | Module scope is wrapped in a function                            | Module scope is true top-level                                                                                              |
| **Exports**              | Exports a single object (can add properties to `module.exports`) | Named or default exports, more flexible                                                                                     |
| **Use Case**             | Common in older Node.js projects                                 | Standard for modern JavaScript                                                                                              |
| **Interop**              | Can use ES6 modules with dynamic `import()` or transpilers       | Supports CommonJS via dynamic `require()` in Node.js                                                                        |
| **Browser Support**      | Requires bundlers like Webpack for browsers                      | Supported in most modern browsers                                                                                           |
| **Example Import**       | `const module = require('./module')`                             | `import module from './module.js'`                                                                                          |
| **Example Export**       | `module.exports = { key: value }`                                | `export default { key: value }` or `export const key = value`                                                               |

# Modules

## `fs` - File System Module

It supports reading, writing, updating, and deleting files, as well as handling directories.

## `http` - HTTP Module

It is used to create HTTP servers and handle HTTP requests and responses.

```js
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

// Listen on port 3000
server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
```

## `path` - Path Module

It handles platform-specific path delimiters.

## `events` - Events Module

It is the foundation of Node.js’s event-driven architecture.

```js
const EventEmitter = require("events");

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define an event listener
eventEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Trigger the event
eventEmitter.emit("greet", "Alice");
```

# Errors Handling

## Error Handling in Callbacks

In callbacks, the first argument is conventionally reserved for errors (known as the error-first callback pattern which is an error object).

```js
// Reading a non-existent file
fs.readFile("nonexistent.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return; // Exit to avoid further processing
  }
  console.log("File content:", data);
});
```

## Error Handling with Promises

Promises handle errors using the `.catch()` method.

```js
// Reading a non-existent file
fs.readFile("nonexistent.txt", "utf8")
  .then((data) => {
    console.log("File content:", data);
  })
  .catch((err) => {
    console.error("Error reading file:", err.message);
  });
```

## Error Handling with `async/await`

Use a `try...catch` block to handle errors in `async` functions.

```js
async function readFile() {
  try {
    const data = await fs.readFile("nonexistent.txt", "utf8");
    console.log("File content:", data);
  } catch (err) {
    console.error("Error reading file:", err.message);
  }
}

readFile();
```

# File Handling

## Key Methods

**Reading Files:**

- `fs.readFile()` (asynchronous)
  ```js
  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log("File content:", data);
  });
  ```
- `fs.readFileSync()` (synchronous)
  `js
try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}
`
  **Writing Files:**
- `fs.writeFile()` (asynchronous)
- `fs.writeFileSync()` (synchronous)
  **Appending Data to Files:**
- `fs.appendFile()` (asynchronous)
- `fs.appendFileSync()` (synchronous)
  **Checking File/Directory Existence:**
- `fs.existsSync()` (synchronous)
  **Deleting Files:**
- `fs.unlink()` (asynchronous)
- `fs.unlinkSync()` (synchronous)
