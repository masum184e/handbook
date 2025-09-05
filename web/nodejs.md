

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


# Package Managemen
## `npm`
- `npm list --depth=0` - Show installed dependencies.
- `npm update express` - Update a specific package.
- `npm update` - Update all packages.
- `npm outdated` - Check for Outdated Packages.
### Install a Package Globally

Global installation makes a package available system-wide, usable from the command line.

```bash
npm install -g nodemon
```
- `-g` → global installation.
- You can now run `nodemon` in any project.

### Install a Package Locally

Local installation installs the package inside your project’s node_modules folder.

```bash
npm install express
```

- This adds express to `node_modules`.
- You can import it in your project


### Install as a Dev Dependency

Dev dependencies are needed only during development (not in production).

```bash
npm install --save-dev nodemon
```

Adds package under `"devDependencies"` in `package.json`.

## `package.json`
- The manifest file of a Node.js project.
- It stores project metadata, dependencies, scripts, and configuration.
- Created using:
```bash
npm init -y
```
### Key Fields Explained
1. `name` → Project name (must be lowercase, no spaces).
2. `version` → Version number (follows semver → major.minor.patch).
3. `description` → Short info about the project.
4. `main` → Entry point file (default: `index.js`).
5. `scripts` → Custom commands:
  - Run with: `npm run dev` or `npm start`.
6. `dependencies` → Packages required for running the app.
```json
"express": "^4.18.2"
```
`^4.18.2` → Allows updates for minor & patch versions (≥4.18.2 <5.0.0).

7. `devDependencies` → Needed only in development (not production). Example: `nodemon`, `eslint`, `jest`.
8. `author` / `license` → Metadata.

## `package-lock.json`
- A file automatically generated when running `npm install`.
- Ensures deterministic installs (same versions across all environments).
- Contains the exact versions of every installed dependency, including nested dependencies.

### Key Points Explained
1. Exact Versions
- While package.json may say `"express": "^4.18.2"`,
  the lock file records `"version": "4.18.2"`.
- Guarantees that all developers get the same version.
2. Resolved URLs
- Stores the exact download link from npm registry.
3. Integrity Hashes
- Ensures security → prevents tampering with packages.
4. Nested Dependencies
- Keeps track of sub-dependencies (e.g., Express depends on `body-parser`).

### Difference Between `package.json` and `package-lock.json`
| Feature        | `package.json`                         | `package-lock.json`                      |
| -------------- | -------------------------------------- | ---------------------------------------- |
| Purpose        | Project manifest & dependency ranges   | Exact versions & dependency tree         |
| Human-readable | Yes (meant to be edited)               | Not meant for manual editing             |
| Created by     | `npm init` or manually                 | Auto-generated by npm                    |
| Controls       | Which dependencies should be installed | Which exact versions should be installed |
| Used for       | Defining project config & dependencies | Reproducible builds across environments  |

## Dependencies
In Node.js projects, we often need external packages (libraries, tools, frameworks).

- These are called dependencies.
- They are installed using npm and stored in the `node_modules` folder.
- The details of installed dependencies are tracked in `package.json`.

### `dependencies`
- These are packages required for the app to run in production.
- Without them, your project won’t work.
```bash
npm install <package-name>
```
👉 Stored inside `package.json` under `"dependencies"`.
### devDependencies

- These are packages needed only during development, not in production.
- Typically include:
  - Testing frameworks (`jest`, `mocha`)
  - Linters (`eslint`)
  - Build tools (`webpack`, `babel`)
  - Utilities like `nodemon`

```bash
npm install --save-dev <package-name>
```

(or the shorthand `npm i -D <package-name>`)

Stored inside `package.json` under `"devDependencies"`.
### Behavior in Deployment

When deploying, most hosting services (Heroku, Vercel, etc.) run:
```bash
npm install --production
```

→ This installs only dependencies, skipping devDependencies.

- You can also manually install only production dependencies:
```bash
npm ci --only=production
```

## Semantic Versioning
npm follows Semantic Versioning (SemVer), which has the format:
```bash
MAJOR.MINOR.PATCH
```
### MAJOR version (breaking changes)

- Incremented when there are incompatible API changes.
- Example: `1.0.0 → 2.0.0`
- Upgrading may break existing code.
### MINOR version (new features, backward compatible)

- Incremented when new functionality is added without breaking old code.
- Example: `1.1.0 → 1.2.0`
- Safe upgrade in most cases.

### PATCH version (bug fixes, small improvements)

- Incremented for backward-compatible bug fixes.
- Example: `1.0.1 → 1.0.2`
- Safe to upgrade.

### Special Version Ranges in `package.json`
When you install a package, npm adds a version range in package.json.
1. Exact version: `"express": "4.18.2"`
- Always installs version `4.18.2`.
- No automatic updates.
2. Caret (^): `"express": "^4.18.2"`
- Allows updates that do not change the leftmost non-zero digit.
- Example: `^4.18.2` allows:
  - `4.18.3`, `4.19.0`, …
  - NOT `5.0.0`
- Default when you install packages with `npm install`.

3. Tilde (~): `"express": "~4.18.2"`
- Allows patch updates only.
- Example: `~4.18.2` allows:
  - `4.18.3`, `4.18.4`
  - NOT `4.19.0`
- Useful when you want stability with bug fixes only.
4. Latest: `"express": "latest"`
- Always installs the latest version available.
- Can be risky (may include breaking changes).
















---

## Publish Package
### Set up the Project
1. Create a folder for your package and make sure your `package.json has the following fields
```json
{
  "name": "my-utils-package",     
  "version": "1.0.0",
  "description": "A simple utility package with helper functions",
  "main": "index.js",             
  "scripts": {
    "test": "node test.js"
  },
  "keywords": ["utils", "helper", "math"],
  "author": "Masum Billah",
  "license": "MIT"
}
```
- `name`: Unique name for your package (must not conflict with existing npm packages).
- `version`: Starts at `1.0.0` (follows semantic versioning).
- `main`: Entry file (what users get when they `require` your package).
- `keywords`: Helps others find your package.
2. Create an `index.js` file and write your package code
```ts
// Function to add two numbers
export function add(a: number, b: number): number {
  return a + b;
}

// Function to multiply two numbers
export function multiply(a: number, b: number): number {
  return a * b;
}
```
3. Create a `test.js` file to test locally
```ts
import { add, multiply } from './index';

console.log(add(2, 3));       // 5
console.log(multiply(4, 5));  // 20

```
Run the test
```bash
npm run test
```
4. Login to npm
```bash
npm login
```
5. Publish the package
```bash
npm publish
```
6. Update Your Package

If you make changes, update the version in `package.json` (following SemVer rules):

- Bug fix → `1.0.1`
- New feature → `1.1.0`
- Breaking change → `2.0.0`

Then republish:
```
npm version patch   # or minor / major
npm publish
```
7. Private Packages (Optional)

If you don’t want the package to be public:

In `package.json`, set:
```json
"private": true
```

→ prevents accidental publishing.

Or, publish a scoped private package (requires paid npm account):
```bash
npm publish --access=restricted
```
# Asynchronous Programming
## Callback-based APIs
In Node.js, many built-in modules (like `fs`, `dns`, `crypto`) were originally written in the callback style (error-first callbacks).

```ts
import fs from 'fs';

// Read the file asynchronously
fs.readFile('data.txt', 'utf-8', (err: NodeJS.ErrnoException | null, data: string | undefined) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content:', data);
  }
});
```
Problem → Harder to manage if you want to use Promises or async/await.
### Solution: util.promisify

Node.js provides `util.promisify` to convert a callback-based function into a Promise-based one.

Without promisify (callback-based)
```ts
import fs from 'fs';

fs.readFile('data.txt', 'utf-8', (err: NodeJS.ErrnoException | null, data: string | undefined) => {
  if (err) throw err;
  console.log('File content:', data);
});
```
With `util.promisify` (Promise-based)
```ts
import fs from 'fs';
import { promisify } from 'util';

// Promisify fs.readFile
const readFileAsync = promisify(fs.readFile);

// Read the file
readFileAsync('data.txt', 'utf-8')
  .then((data: string) => console.log('File content:', data))
  .catch((err: NodeJS.ErrnoException) => console.error('Error:', err));
```
Now, `readFileAsync` returns a Promise, so we can use `.then/.catch` or `async/await`.

With `async/await`
```ts
import fs from 'fs';
import { promisify } from 'util';

// Promisify fs.readFile
const readFileAsync = promisify(fs.readFile);

async function run(): Promise<void> {
  try {
    const data: string = await readFileAsync('data.txt', 'utf-8');
    console.log('File content:', data);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Error:', err.message);
    } else {
      console.error('Unexpected error:', err);
    }
  }
}

run();
```
Promisifying `setTimeout`
```ts
import { promises as fs } from 'fs';

fs.readFile('data.txt', 'utf-8')
  .then((data: string) => console.log('File content:', data))
  .catch((err: unknown) => {
    if (err instanceof Error) {
      console.error('Error:', err.message);
    } else {
      console.error('Unexpected error:', err);
    }
  });
```
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
