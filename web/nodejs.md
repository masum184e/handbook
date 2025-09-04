# Contents

- [Introduction](#introduction)
  - [Event-Driven Architecture](#event-driven-architecture)
    - [How it works](#how-it-works)
    - [Event-Driven Program](#event-driven-program)
    - [Event-Driven HTTP Server](#event-driven-http-server)
  - [Global Objects](#global-objects)
    - [`__dirname`](#__dirname)
    - [`__filename`](#__filename)
    - [`process`](#process)
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

# Introduction

**What is Node.js?**

- Node.js is an open-source, cross-platform runtime environment that allows you to run JavaScript outside the browser (mainly on servers).
- It is built on Google Chrome’s V8 JavaScript engine (which makes it very fast).
- Unlike traditional server-side languages (like PHP, Java, or Python), Node.js uses an asynchronous, non-blocking I/O model that makes it lightweight and efficient.

## Event-Driven Architecture

At the core of Node.js is the concept of events.

- Node.js runs on a single thread, but it uses an event loop to manage multiple client requests asynchronously.
- Instead of waiting for one task to finish before starting another, Node.js listens for events and executes the corresponding callback functions when those events occur.

### How it works

1. **Event Loop** – A loop that continuously checks for new events (like file read, HTTP request, DB query).
2. **Event Emitter** – An object that emits (triggers) events.
3. **Listeners (Callbacks)** – Functions that are executed when a specific event occurs.

This makes Node.js scalable because it doesn’t block execution while waiting for tasks (like database queries or file I/O).

### Event-Driven Program

```js
// Import the 'events' module
const EventEmitter = require("events");

// Create an event emitter object
const myEmitter = new EventEmitter();

// Define an event listener for 'greet'
myEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}! Welcome to Node.js`);
});

// Trigger (emit) the 'greet' event
myEmitter.emit("greet", "Masum");
myEmitter.emit("greet", "Billah");
```

This shows how Node.js reacts to events instead of executing code in a fixed order.

### Event-Driven HTTP Server

```js
const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js Server!");
});

// Listen for 'request' event
server.on("request", () => {
  console.log("New request received!");
});

// Start the server
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
```

1. The `http` module creates a server.
2. When a client makes a `request`, the request event is emitted.
3. The event listener (`server.on('request')`) logs a message whenever a new request is received.
4. The server listens on port `3000`.

This shows Node.js handling multiple client requests asynchronously using its event-driven architecture.

## Global Objects

In Node.js, global objects are available everywhere in your code without needing to `require()` them. They provide useful information and functionality about the system, files, or runtime environment.

Unlike the `window` object in browsers, Node.js has its own set of global objects.

### `__dirname`

- Represents the absolute path of the directory where the current JavaScript file resides.
- Useful when dealing with file operations (reading/writing files relative to the script).

```js
console.log("Current directory:", __dirname);
```

### `__filename`

- Represents the absolute path of the current JavaScript file including its name.

```js
console.log("Current file path:", __filename);
```

This is often used when you need the full file path, for example when working with file system (`fs` module).

### `process`

Provides information and control about the current Node.js process (running program).

It is an instance of the `EventEmitter` class.

Common uses:

- `process.pid` → Process ID
- `process.version` → Node.js version
- `process.platform` → OS platform (`win32`, `linux`, `darwin`)
- `process.cwd()` → Current working directory
- `process.argv` → Command-line arguments
- `process.exit()` → Exit the program

```js
console.log("Process ID:", process.pid);
console.log("Node.js version:", process.version);
console.log("Platform:", process.platform);
console.log("Current working directory:", process.cwd());

// Command line arguments
console.log("Arguments:", process.argv);

// Exit example
if (process.argv[2] === "exit") {
  console.log("Exiting program...");
  process.exit();
}
```

Running

```js
node demo.js hello world
```

Output

```js
Process ID: 12345
Node.js version: v20.11.1
Platform: win32
Current working directory: C:\Users\Masum\projects\node-demo
Arguments: [ 'C:\\Program Files\\nodejs\\node.exe', 'C:\\Users\\Masum\\projects\\node-demo\\demo.js', 'hello', 'world' ]
```

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
