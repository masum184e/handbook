# Introduction
Express is built on top of Node.js’ HTTP module, making development faster and easier.


It simplifies handling things like:

- Routing (how your app responds to requests)
- Middleware (functions that run before sending responses)
- Request & Response handling
- Serving static files
- Error handling

## Why Use Express.js?

Without Express, writing server code in Node.js involves a lot of boilerplate code:

- Manually parsing URLs.
- Writing conditional statements for routing (if (req.url === "/home")).
- Handling different request methods (GET, POST, etc.).
- Managing responses.

Express abstracts this complexity and lets you focus on your application logic instead of low-level details.

# Static Files 
Static files are files that don’t change dynamically on the server side.

- HTML files (web pages)
- CSS files (styling)
- JavaScript files (frontend scripts)
- Images (JPG, PNG, SVG, GIF)
- Fonts / PDFs / Docs

Instead of writing routes for every file (like `/about.html`, `/style.css`), Express provides a built-in middleware `express.static` to serve them automatically.

## How It Works

1. Put your static files in a folder (commonly named public).

2. Use the middleware:
```ts
// Serve static files from the "public" directory
app.use(express.static('public'));

// Example route
app.get('/', (req: Request, res: Response) => {
  res.sendFile(__dirname + '/public/index.html');
});
```
3. Now Express will serve files directly from that folder.

# Middleware
In Express.js, middleware refers to functions that execute during the request-response cycle.

It refers to functions that execute during the lifecycle of a request to the server. Middleware functions can perform various tasks, such as modifying the request and response objects, executing code, ending the request-response cycle, or passing control to the next middleware function in the stack.

Middleware are functions that process incoming requests before they reach your routes.
## Key Features

1. **Function Signature:**
   ```js
   function middleware(req, res, next) {
     // Your custom logic here
     next(); // Call the next middleware in the stack
   }
   ```

- `req`: The request object.
- `res`: The response object.
- `next()` → A function that calls the next middleware.
  - If you don’t call `next()`, the request will hang (no response).

2. **Stacking:** Middleware functions are stacked and executed in the order they are defined in the application.

3. **Tasks Middleware Can Perform:**

- Execute any code.
- Modify the request (`req`) or response (`res`) objects.
- End the request-response cycle (e.g., sending a response).
- Call the `next()` function to pass control to the next middleware.

## Types of Middleware

1. **Application-level middleware:** Defined directly in your app.
2. **Router-level middleware:** Attached to specific `routes` or routers.
3. **Built-in middleware:** Provided by Express, such as `express.json()` and `express.static()`.
4. **Third-party middleware:** Middleware provided by external libraries (e.g., `body-parser`, `cookie-parser`).

```ts
import express, { Request, Response, NextFunction } from 'express';

const app = express();

// 1. Application-level middleware (runs for every request)
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} request made to ${req.url}`);
  next(); // Move to the next handler
});

// 2. Built-in middleware to parse JSON body
app.use(express.json());

// 3. Route with middleware
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is the home page!');
});

app.get(
  '/about',
  (req: Request, res: Response, next: NextFunction) => {
    console.log('Route-level middleware for /about');
    next(); // Pass to next handler
  },
  (req: Request, res: Response) => {
    res.send('This is the about page!');
  }
);

// 4. Example POST request
app.post('/data', (req: Request, res: Response) => {
  res.send(`You sent: ${JSON.stringify(req.body)}`);
});

// 5. Error-handling middleware (must have 4 parameters)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```
1. Incoming request → passes through global middleware
2. Passes through route-specific middleware
3. Hits route handler
4. Optionally, passes to error-handling middleware
5. Sends response back to client

## How Middleware Works

When a request is sent to the server, Express processes it through the middleware stack. Middleware functions are executed sequentially in the order they are defined. If a middleware function calls `next()`, the next function in the stack is executed. If a middleware function doesn’t call `next()`, the request-response cycle is terminated.

## Built-In Middleware

- `express.json()` - Parses incoming JSON payloads and makes the data available in `req.body`.
  ```js
  app.use(express.json());
  ```
- `express.urlencoded()` - Parses incoming requests with URL-encoded payloads (`Content-Type: application/x-www-form-urlencoded`) (like form submissions) and makes the data available in req.body.
  ```js
  app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data
  ```
  - Takes an option:
    - `{ extended: true }` → allows nested objects using `qs` library.
    - `{ extended: false }` → only supports simple key-value pairs.
- `express.static()` - Serves static files like images, CSS, and JavaScript.
  ```js
  app.use(express.static(path.join(__dirname, "public")));
  ```
- `express.text()` - Parses incoming requests with text payloads and makes the text available in `req.body`.
  ```js
  app.use(express.text());
  ```
- `express.raw()` - Parses incoming requests with binary payloads and makes the raw buffer available in `req.body`.
  ```js
  app.use(express.raw({ type: "application/octet-stream" }));
  ```

## Third-Party Middleware
### Morgan (HTTP request logger)
- Logs HTTP requests in the console (or a file).
- Useful for debugging and monitoring.
```ts
app.use(morgan('dev'));
```
Logs incoming HTTP requests in a short colored format.
```bash
GET /users 200 12ms
POST /login 201 25ms
```
### CORS (Cross-Origin Resource Sharing)
- Controls which domains can access your API.
- By default, browsers block requests from different origins.
- `cors()` middleware allows you to enable or restrict access.

```ts
app.use(cors()); // Allow all origins
app.use(cors({ origin: 'https://example.com' })); // Restrict to specific domain
```
### Helmet (Security)

- Sets HTTP headers to secure your app from common attacks.
- Examples of headers it sets:
  - `X-DNS-Prefetch-Control`
  - `X-Frame-Options`
  - `Strict-Transport-Security`
- Simple way to improve security best practices.
```ts
app.use(helmet());
```
- Adds multiple security-related HTTP headers automatically.
- Helps prevent common attacks like clickjacking, XSS, and MIME-sniffing.


## Middleware Execution Order
- Middleware functions in Express execute in the order they are added in your code.
- The request flows top to bottom until:
  1. A response is sent (`res.send`, `res.json`, etc.), or
  2. `next()` is called to pass control to the next middleware.

# Routing

Routing in Express.js defines how your server responds to client requests at different endpoints (URLs) and HTTP methods.

Each route has:

1. **HTTP Method**: Such as `GET`, `POST`, `PUT`, or `DELETE`.
2. **Path**: The endpoint or route URL.
3. **Callback Function**: Code to execute when the route is matched.

```js
app.METHOD(PATH, HANDLER);
```
## Route parameters
Dynamic values in the URL path, defined using a colon (`:`).
```ts
// GET /users/123
app.get('/users/:id', (req: Request, res: Response) => {
  const userId: string = req.params.id; // Extract :id from URL
  res.send(`You requested user with ID: ${userId}`);
});
```
Useful for identifying resources (user IDs, product IDs, etc.).

- `res.json()` - Automatically sets `Content-Type: application/json`.
- `res.send()` - Automatically sets `Content-Type` based on input:
## Query strings
Key-value pairs added after a `?` in the URL.
```ts
// GET /search?name=Alice&age=25
app.get('/search', (req: Request, res: Response) => {
  const name: string | undefined = req.query.name as string;
  const age: string | undefined = req.query.age as string;

  res.send(`Searching for user. Name: ${name}, Age: ${age}`);
});
```
Useful for filtering, searching, sorting, or optional parameters.
## Grouping Routes
- `express.Router()` lets you create modular route handlers.
- Instead of writing all routes in `index.ts`, you can split them into separate files (e.g., `userRoutes.ts`, `productRoutes.ts`).
- This keeps the code clean, organized, and scalable.

# Response
## Redirection
- `res.redirect()` tells the client (browser or HTTP client) to make a new request to a different URL.
- It sends an HTTP 3xx status code along with the `Location` header.
- Express automatically sets 302 Found by default if no status code is provided.

```ts
res.redirect([statusCode], path)
```
- `statusCode` → Optional. The HTTP status code for the redirect (default: 302).
- `path` → The URL or route to redirect to.

### Common Status Codes for Redirects
| Code | Meaning                                   |
| ---- | ----------------------------------------- |
| 301  | Moved Permanently                         |
| 302  | Found (temporary, default)                |
| 307  | Temporary Redirect (preserve HTTP method) |
| 308  | Permanent Redirect (preserve HTTP method) |

### 301 – Moved Permanently

**Meaning:**  
The resource has been moved permanently to a new URL.  

**Browser behavior:**  
- Search engines update their index to the new URL.  
- Browsers may cache the redirection aggressively.  

**HTTP Method handling:**  
- Some clients may change non-GET methods (like `POST`) to `GET` when following a 301 (this is not strictly correct but is common).  

**Use case:**  
When a page or resource has a permanent new home (e.g., changing domain name).

### 302 – Found (Temporary Redirect, old default)

**Meaning:**  
The resource is temporarily at another URL.  

**Browser behavior:**  
- Search engines generally do not update their index (they keep the old URL).  
- Browsers treat it as temporary.  

**HTTP Method handling:**  
- Historically, many clients convert `POST` → `GET`, which is not ideal.  

**Use case:**  
Short-term redirects (e.g., A/B testing, maintenance).

### 307 – Temporary Redirect (method preserved)

**Meaning:**  
Resource temporarily resides at a different URL, but…  

**HTTP Method handling:**  
- Unlike 302, it guarantees the same HTTP method and body are preserved.  
- Example: A `POST` request remains a `POST` request after redirection.  

**Use case:**  
When the redirect is temporary, but you want to make sure the request method and data are not lost (e.g., login `POST` requests).

### 308 – Permanent Redirect (method preserved)

**Meaning:**  
Resource has been permanently moved, like 301.  

**HTTP Method handling:**  
- Like 307, it preserves the HTTP method and body.  
- Example: A `PUT` or `POST` request stays the same after redirection.  

**Use case:**  
Permanent changes where the request method must be preserved (e.g., moving an API endpoint to a new path).


## Setting Headers
- `res.set()` allows you to manually set HTTP headers on the response.
- Headers provide metadata about the response (e.g., content type, caching, authentication).

```ts
res.set(field: string | object, value?: string | string[]): this
```
- `field` → Name of the header (or an object with multiple headers).
- `value` → Value of the header (optional if using object).
- Returns the response object so you can chain methods like `.status()` and `.send()`.

**Example**
```ts
res.set({
  'X-App-Version': '1.0.0',
  'Cache-Control': 'no-store',
  'X-Powered-By': 'Express'
});
```

**Common Use Cases**

- Setting `Content-Type` (text, JSON, HTML)
- Adding security headers (custom or for CORS)
- Controlling caching (`Cache-Control`)
- Setting custom headers for APIs (like `X-Rate-Limit`)

# Template Engine
A template engine generates HTML pages dynamically by combining static templates with data from the server.

Popular engines for Express:

- **EJS** → Embedded JavaScript, simple syntax, widely used.
- **Pug** → Indentation-based, concise syntax.
- **Handlebars** → Logic-less templates, clean separation of concerns.

**Benefits**

- Dynamically render content (lists, tables, user data).
- Separate HTML structure from backend logic.
- Avoid sending raw HTML strings manually.

**Configuration**

1. `app.set('view engine', 'ejs');` - Tells Express to use EJS for rendering views.
2. `app.set('views', path.join(__dirname, 'views'));` - Specifies where EJS templates are stored.
3. `res.render('index', { name: 'John Doe', users });`
  - `res.render(templateName, data)` → renders dynamic HTML with provided data.
  - `index.ejs` receives `name` and `users` and renders them into HTML.

## Rendering HTML
### Dynamic Variables
```ejs
<h1>Welcome, <%= user.name %>!</h1>
```
- `<%= %>` injects escaped content (prevents XSS).
- Dynamic data `user.name` comes from the server (`res.render('index', { user, products })`).

### Loops
```ejs
<% products.forEach(product => { %>
  <li><%= product %></li>
<% }) %>
```
- `<% %>` executes JavaScript logic.
- `<%= %>` outputs the value.

### Conditionals
```ejs
<% if (products.length === 0) { %>
  <p>No products available.</p>
<% } else { %>
  <ul>...</ul>
<% } %>
```
- Can dynamically render content based on data values.

### Data Passing
- Server sends data object as second argument of `res.render()`.
- Template can access all properties in that object.

# Error Handling
**Why Handle Errors?**

- By default, if a route doesn’t exist, Express will just hang without a clear response.
- You should explicitly define how your app responds to not found (404) errors and unexpected server errors (500, etc.).

**Express Error Handling Rules**

1. 404 Errors → Add a middleware at the end of your routes to catch unmatched requests.

2. Other Errors → Use a special error-handling middleware with four parameters:
```ts
(err, req, res, next) => { ... }
```
## 404 Handler
```ts
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Resource not found' });
});
```
- This middleware is placed after all other routes.
- If no route matches, Express falls through to this handler.
- Responds with status 404 Not Found.

## Global Error Handler
```ts
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: err.message,
  });
});
```
- Handles any error thrown in routes or middleware.
- Must have 4 arguments → (`err`, `req`, `res`, `next`) so Express knows it’s an error handler.
- Responds with 500 Internal Server Error and logs the error.

## Complete Example of Error Handling
```ts
import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
const PORT = 3000;

app.use(express.json());

// ---- Sample Routes ----
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Home Page!');
});

app.get('/error', (req: Request, res: Response) => {
  // Force an error for demonstration
  throw new Error('Something went wrong!');
});

// ---- 404 Handler ----
// This runs if no route above matches
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Resource not found',
  });
});

// ---- Global Error Handler ----
// Must have 4 parameters (err, req, res, next)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error stack:', err.stack);

  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: err.message,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
```
## Catching and Responding to Errors
In an Express.js application, errors can happen in many places (routes, middleware, database queries, etc.). To keep the app reliable and user-friendly, you should catch errors and respond consistently.

There are two main ways to handle errors:

1. Synchronous errors → handled with `try/catch` or by throwing inside routes.

2. Asynchronous errors → handled with `try/catch` in async functions, or by passing the error to `next(err)`.

All errors eventually flow into the error-handling middleware, where you send a proper response.
### Synchronous errors
```ts
const express = require('express');
const app = express();

// Example route with error handling
app.get('/divide', (req, res, next) => {
  try {
    const { a, b } = req.query;
    if (!a || !b) {
      throw new Error('Both a and b are required');
    }
    if (b == 0) {
      throw new Error('Division by zero is not allowed');
    }
    const result = Number(a) / Number(b);
    res.json({ success: true, result });
  } catch (err) {
    // Pass error to error-handling middleware
    next(err);
  }
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(400).json({
    success: false,
    message: err.message || 'Unexpected Error',
  });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
```
### Asynchronous errors
Asynchronous operations (like database calls or API requests) need explicit error handling.

```ts
// Async route with error catching
app.get('/user/:id', async (req, res, next) => {
  try {
    const userId = req.params.id;

    // Simulating DB lookup with async function
    const user = await fakeDatabaseFind(userId);

    if (!user) {
      const error = new Error('User not found');
      error.status = 404;
      throw error;
    }

    res.json({ success: true, user });
  } catch (err) {
    next(err); // forward to error middleware
  }
});

// Fake DB function
async function fakeDatabaseFind(id) {
  return id === '1' ? { id: 1, name: 'Alice' } : null;
}
```
## Operational Errors
These are expected runtime errors that happen during normal operation. They don’t mean the app is broken — just that something went wrong while handling a request.

- Invalid user input (missing required fields, wrong data format).
- Database connection failure.
- Requesting a non-existent resource (404).
- Failed external API call.

These should be caught, logged, and handled gracefully by responding to the client with a proper message and status code.
## Programmer Errors

These are bugs in the code itself, caused by mistakes in logic, syntax, or incorrect assumptions.

- Using an undefined variable.
- Forgetting to `await` an async call.
- Incorrect function parameters.
- Infinite loops.

These usually mean the app is in an unrecoverable state. The safest approach is often to crash the process and let a process manager (like PM2, Docker, or Kubernetes) restart the app.

# Advanced Features
## Rate-Limiting
Rate-limiting restricts the number of requests a client can make to your server in a given time window.

- Protect against Denial-of-Service (DoS) attacks.
- Prevent abuse of APIs (e.g., too many login attempts).
- Improve fair usage across users.

```bash
npm install express-rate-limit
```
```ts
const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Define a rate limiter: max 5 requests per minute per IP
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5,                  // limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after a minute.'
  }
});

// Apply rate limiter to all routes
app.use(limiter);

app.get('/', (req, res) => {
  res.send('Welcome! You have not been rate-limited yet.');
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
```
1. Each IP address gets tracked.
2. If the same IP makes more than 5 requests in 1 minute, Express blocks further requests.
3. The client gets a 429 Too Many Requests error with the custom message.
## Clustering
**What is Clustering?**
- By default, a Node.js app runs in a single thread.
- This means it can only use one CPU core, even if your server has many.
- The cluster module (built into Node.js) lets you spawn multiple worker processes that share the same server port.
- Each worker runs a copy of your Express app, distributing load across CPU cores.

**Relation to Error Handling**

- If a single worker process crashes due to an error, the master process can detect it and spawn a new worker.
- This prevents your entire app from going down because of one unhandled error.

```ts
const cluster = require('cluster');
const os = require('os');
const express = require('express');

if (cluster.isMaster) {
  // Master process
  const numCPUs = os.cpus().length;
  console.log(`Master ${process.pid} is running`);
  console.log(`Forking ${numCPUs} workers...`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Restart worker if it crashes
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  // Worker processes
  const app = express();

  app.get('/', (req, res) => {
    res.send(`Hello from worker ${process.pid}`);
  });

  // Example crash route (simulating an unhandled error)
  app.get('/crash', () => {
    throw new Error('Worker crashed!');
  });

  app.listen(3000, () => {
    console.log(`Worker ${process.pid} started`);
  });
}
```
### How This Works

1. Master process runs first.
  - It creates as many worker processes as CPU cores.
  - Example: On a 4-core machine → 4 workers are spawned.
2. Each worker runs the same Express.js app, listening on port `3000`.
- The OS load balancer distributes incoming requests across workers.
3. If you visit:
  - `/` multiple times → you’ll see responses from different workers (`Hello from worker 1234`).
  - `/crash` → worker throws an error and dies, but the master spawns a new worker.

**Benefits for Error Handling**

- Fault tolerance → If one worker crashes, others continue serving requests.
- Automatic recovery → Master respawns dead workers.
- Better load distribution → Errors from heavy traffic (e.g., request overload) are minimized.

**Best Practices**

1. Always use a process manager like PM2 (which uses clustering internally).
  - Easier than managing cluster code manually.
2. Still implement error-handling middleware in each worker.
3. Log crashes and monitor them (don’t just silently restart).
4. Be careful with shared state — workers do not share memory. Use Redis, DB, or message queues for shared data.


# Contents

- [req object](#req-object)
  - [Parsing Bodies](#parsing-request-bodies)
- [res object](#res-object)
  - [res.send()](#ressend)
  - [res.json()](#resjson)
  - [res.status()](#resstatus)
- [Error Handling](#error-handling-middleware)

# `req` Object

**Common Properties of req:**
1 `req.method`: The HTTP method of the request (e.g., GET, POST, PUT, DELETE). 2. `req.url`: The full URL of the request. 3. `req.query`: An object containing the query string parameters. 4. `req.params`: An object containing route parameters (e.g., from dynamic routes). 5. `req.body`: Contains data sent in the body of the request (available after parsing middleware like `body-parser`). 6. `req.headers`: An object containing the headers of the request. 7. `req.cookies`: Contains cookies sent by the client (if cookie-parser middleware is used).

## Parsing Request Bodies

When clients send data in an HTTP request (e.g., through forms or APIs), that data often resides in the request body. Express does not parse the request body automatically; instead, middleware is required to handle and parse it.

### Common Types of Request Bodies

1. **JSON:** Often used in APIs where data is sent in JSON format.
2. **URL-encoded:** Common in form submissions where key-value pairs are URL-encoded.
3. **Raw/Plain Text:** Used when sending raw text data.
4. **Multipart:** Used for file uploads and complex data, typically with `multipart/form-data`.

# `res` Object

**Common Methods of res:**

1. `res.status(code)`: Sets the HTTP status code for the response.
2. `res.send(body)`: Sends a response body of various types (e.g., string, object, Buffer).
3. `res.json(obj)`: Sends a JSON response.
4. `res.redirect(url)`: Redirects the client to a different URL.
5. `res.render(view, data)`: Renders a view template with optional data.
6. `res.set(header, value)`: Sets a specific response header.
7. `res.end()`: Ends the response process.

## `res.send()`

The `res.send()` method sends a response body to the client. The body can be a string, Buffer, or object. If an object is passed, it is automatically converted to JSON unless `Content-Type` is set manually.

**Key Points:**

- Ends the response process.
- Automatically sets Content-Type based on the data type.

## `res.json()`

The `res.json()` method sends a JSON-formatted response to the client. It's similar to `res.send()`, but it explicitly sets the `Content-Type` header to `application/json`.

**Key Points:**

- Automatically serializes JavaScript objects or arrays to JSON.
- Best practice for APIs returning structured data.

## `res.status()`

The `res.status()` method sets the HTTP status code for the response. It can be chained with other methods like `res.send()` or `res.json()`.

**Key Points:**

- Should be called before sending a response body.
- Useful for indicating the outcome of a request (e.g., 200 for success, 404 for not found, 500 for server errors).

# Middleware

It refers to functions that execute during the lifecycle of a request to the server. Middleware functions can perform various tasks, such as modifying the request and response objects, executing code, ending the request-response cycle, or passing control to the next middleware function in the stack.

## Key Features

1. **Function Signature:**
   ```js
   function middleware(req, res, next) {
     // Your custom logic here
     next(); // Call the next middleware in the stack
   }
   ```

- `req`: The request object.
- `res`: The response object.
- `next`: A function to pass control to the next middleware.

2. **Stacking:** Middleware functions are stacked and executed in the order they are defined in the application.

3. **Tasks Middleware Can Perform:**

- Execute any code.
- Modify the request (`req`) or response (`res`) objects.
- End the request-response cycle (e.g., sending a response).
- Call the `next()` function to pass control to the next middleware.

## Types of Middleware

- **Application-level middleware:** Defined directly in your app.
- **Router-level middleware:** Attached to specific `routes` or routers.
- **Built-in middleware:** Provided by Express, such as `express.json()` and `express.static()`.
- **Third-party middleware:** Middleware provided by external libraries (e.g., `body-parser`, `cookie-parser`).

## How Middleware Works

When a request is sent to the server, Express processes it through the middleware stack. Middleware functions are executed sequentially in the order they are defined. If a middleware function calls `next()`, the next function in the stack is executed. If a middleware function doesn’t call `next()`, the request-response cycle is terminated.

## Built-In Middleware

- `express.json()` - Parses incoming JSON payloads and makes the data available in `req.body`.
  ```js
  app.use(express.json());
  ```
- `express.urlencoded()` - Parses incoming requests with (`Content-Type: application/x-www-form-urlencoded`) URL-encoded payloads (Content-Type: application/x-www-form-urlencoded`) (like form submissions) and makes the data available in req.body.
  ```js
  app.use(express.json());
  ```
- `express.static()` - Serves static files like images, CSS, and JavaScript.
  ```js
  app.use(express.static(path.join(__dirname, "public")));
  ```
- `express.text()` - Parses incoming requests with text payloads and makes the text available in `req.body`.
  ```js
  app.use(express.text());
  ```
- `express.raw()` - Parses incoming requests with binary payloads and makes the raw buffer available in `req.body`.
  ```js
  app.use(express.raw({ type: "application/octet-stream" }));
  ```

# Error-handling Middleware

It is used to catch and handle errors in an application. It ensures that the app doesn't crash and provides a mechanism for handling errors gracefully by sending appropriate responses to the client.

**Arguments:**

1. `err` - The error object, which contains details about the error.
2. `req` - The request object.
3. `res` - The response object.
4. `next` - A callback to pass control to the next middleware.

The key difference is the presence of the `err` parameter.

**Key Characteristics**

1. Error-handling middleware must have four parameters.
2. It should be registered after all other routes and middleware in the app.

## Setup

### 1. Route that introduces an error

```js
app.get("/error", (req, res, next) => {
  const error = new Error("Something went wrong!");
  error.status = 500;
  next(error);
});
```

This route explicitly creates an error and passes it to the next middleware using `next(error)`.

### 2. Error-handling middleware

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    error: {
      message: message,
      status: statusCode,
    },
  });
});
```

`console.error(err.stack)` logs the error stack trace for debugging purposes.

### 3. Middleware order

The error-handling middleware is added after all other routes and middleware. This ensures that it can catch errors from any part of the app.

