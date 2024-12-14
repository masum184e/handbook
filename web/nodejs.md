# Node.js

Node.js uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient. The event loop is the mechanism that handles asynchronous operations in Node.js, allowing the application to manage multiple I/O operations (such as reading files, making HTTP requests, or querying a database) without blocking the main thread.

Node.js is built to handle multiple I/O operations efficiently while using a single-threaded event-driven architecture. This approach allows Node.js to scale well for applications that deal with a large number of concurrent I/O operations, such as APIs or real-time applications.

# CommonJS vs ES6 Modules

## CommonJS

- Modules are loaded synchronously.
- CommonJS works in all Node.js versions without additional configuration.
- Primarily used in Node.js but not natively supported in browsers.

## ES6 Modules

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
