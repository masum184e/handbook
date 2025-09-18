# Contents

- [Introduction](#introduction)
  - [Why Use Express.js?](#why-use-expressjs)
- [Static Files](#static-files)
  - [How It Works](#how-it-works)
- [Routing](#routing)
  - [Route parameters](#route-parameters)
  - [Query strings](#query-strings)
  - [Grouping Routes](#grouping-routes)
- [Middleware](#middleware)
  - [Features](#key-features)
  - [Types of Middleware](#types-of-middleware)
  - [How Middleware Works](#how-middleware-works)
  - [Built-In Middleware](#built-in-middleware)
  - [Third-Party Middleware](#third-party-middleware)
    - [Morgan (HTTP request logger)](#morgan-http-request-logger)
    - [CORS (Cross-Origin Resource Sharing)](#cors-cross-origin-resource-sharing)
    - [Helmet (Security)](#helmet-security)
  - [Middleware Execution Order](#middleware-execution-order)
- [Response](#response)
  - [Redirection](#redirection)
  - [Setting Headers](#setting-headers)
- [Template Engine](#template-engine)
  - [Rendering HTML](#rendering-html)
    - [Dynamic Variables](#dynamic-variables)
    - [Loops](#loops)
    - [Conditionals](#conditionals)
    - [Data Passing](#data-passing)
- [Error Handling](#error-handling)
  - [404 Handler](#404-handler)
  - [Global Error Handler](#global-error-handler)
  - [Catching and Responding to Errors](#catching-and-responding-to-errors)
    - [Synchronous errors](#synchronous-errors)
    - [Asynchronous errors](#asynchronous-errors)

# Introduction

Express is a web framework built on top of Node.js’ HTTP module, designed to make development faster and more straightforward.

It streamlines tasks such as:

- **Routing:** Managing how your app responds to different requests
- **Middleware:** Running functions before sending responses
- **Request & Response Handling:** Simplifying the processing of client requests and server responses
- **Serving Static Files:** Easily delivering images, CSS, JavaScript, and other assets
- **Error Handling:** Managing and responding to errors efficiently

## Why Use Express.js?

Without Express, building a server in Node.js requires writing a lot of **boilerplate code**:

- Parsing URLs manually
- Writing conditional statements for routing (e.g., `if (req.url === "/home")`)
- Handling different request methods (`GET`, `POST`, etc.)
- Managing responses

Express simplifies all of this, allowing you to focus on your application logic rather than low-level details by managing the **boilerplate**.

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
   app.use(express.static("public"));

   // Example route
   app.get("/", (req: Request, res: Response) => {
     res.sendFile(__dirname + "/public/index.html");
   });
   ```

3. Now Express will serve files directly from that folder.

# Routing

Routing in Express.js defines how your server responds to client requests at different endpoints (URLs) and HTTP methods.

Each route has:

1. **HTTP Method**: Such as `GET`, `POST`, `PUT`, or `DELETE`.
2. **Path**: The endpoint or route URL.
3. **Callback Function**: Code to execute when the route is matched.

```ts
app.METHOD(PATH, HANDLER);
```

## Route parameters

Dynamic values in the URL path, defined using a colon (`:`).

```ts
// GET /users/123
app.get("/users/:id", (req: Request, res: Response) => {
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
app.get("/search", (req: Request, res: Response) => {
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

# Middleware

In Express.js, middleware are functions that run during the request-response lifecycle.

These functions can:

- Modify the `request` and resp`onse objects
- Execute code or perform operations
- End the request-response cycle
- Pass control to the next middleware function in the stack

In short, middleware process incoming requests before they reach your route handlers, allowing you to handle tasks like logging, authentication, or data parsing in a centralized way.

## Key Features

1. **Function Signature:**

   ```ts
   function middleware(req, res, next) {
     // Your custom logic here
     next(); // Call the next middleware in the stack
   }
   ```

   - `req`: The request object.
   - `res`: The response object.
   - `next()` → A function that calls the next middleware.
     - If you don’t call `next()`, the request will hang (no response).

2. **Stacking:**

   - Middleware functions are stacked and executed in the order they are defined in the application.

3. **Tasks Middleware Can Perform:**

   - Execute any code.
   - Modify the request (`req`) or response (`res`) objects.
   - End the request-response cycle (e.g., sending a response).
   - Call the `next()` function to pass control to the next middleware.

## Types of Middleware in Express

Middleware functions are executed in the order they are defined. They can run for every request, specific routes, or handle errors.

### 1. Application-level middleware

Defined globally with `app.use()`, runs for every request.

```ts
import express, { Request, Response, NextFunction } from "express";
const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} request → ${req.url}`);
  next(); // Continue to the next middleware or route handler
});
```

### 2. Built-in middleware

Express provides ready-to-use middleware like `express.json()` and `express.static()`.

```ts
// Parses incoming JSON request bodies
app.use(express.json());
```

### 3. Router-level middleware

Runs only on specific routes or routers.

```ts
app.get(
  "/about",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("Middleware specific to /about");
    next();
  },
  (req: Request, res: Response) => {
    res.send("About Page");
  }
);
```

### 4. Third-party middleware

Installed via npm, e.g., `cookie-parser`, `morgan`, `cors`.

```ts
import morgan from "morgan";
app.use(morgan("dev")); // Logs HTTP requests
```

### 5. Error-handling middleware

Special middleware with 4 parameters. Must be placed after all routes.

```ts
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err.message);
  res.status(500).send("Something went wrong!");
});
```

### Middleware Flow

1. Incoming request → application-level middleware
2. Passes through built-in/third-party middleware
3. Runs router-level middleware (if any)
4. Executes route handler
5. If errors occur → handled by error-handling middleware
6. Sends response back to client

## How Middleware Works

When a request is sent to the server, Express processes it through the middleware stack. Middleware functions are executed sequentially in the order they are defined. If a middleware function calls `next()`, the next function in the stack is executed. If a middleware function doesn’t call `next()`, the request-response cycle is terminated.

## Built-In Middleware

- `express.json()`

  - Parses incoming JSON payloads and makes the data available in `req.body`.

    ```ts
    app.use(express.json());
    ```

- `express.urlencoded()`

  - Parses incoming requests with URL-encoded payloads (`Content-Type: application/x-www-form-urlencoded`) (like form submissions) and makes the data available in req.body.

    ```ts
    app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data
    ```

    - Takes an option:
      - `{ extended: true }` → allows nested objects using `qs` library.
      - `{ extended: false }` → only supports simple key-value pairs.

- `express.static()`

  - Serves static files like images, CSS, and JavaScript.

    ```ts
    app.use(express.static(path.join(__dirname, "public")));
    ```

- `express.text()`

  - Parses incoming requests with text payloads and makes the text available in `req.body`.

    ```ts
    app.use(express.text());
    ```

- `express.raw()`

  - Parses incoming requests with binary payloads and makes the raw buffer available in `req.body`.

    ```ts
    app.use(express.raw({ type: "application/octet-stream" }));
    ```

## Third-Party Middleware

### Morgan (HTTP request logger)

- Logs HTTP requests in the console (or a file).
- Useful for debugging and monitoring.

```ts
app.use(morgan("dev"));
```

Logs incoming HTTP requests in a short colored format.

```bash
GET /users 200 12ms
POST /login 201 25ms
```

**Format options**

When you call `morgan()`, you must provide a format argument.
This defines how logs are displayed.

- Built-in strings:
  - `"combined"` → Apache-style logs (with referrer & user-agent)
  - `"common"` → Shorter Apache-style logs
  - `"dev"` → Color-coded concise logs
  - `"short"` → Shorter than common
  - `"tiny"` → Minimal output
- Or, you can pass a formatting function: `(tokens, req, res) => string`

### CORS (Cross-Origin Resource Sharing)

- Controls which domains can access your API.
- By default, browsers block requests from different origins.
- `cors()` middleware allows you to enable or restrict access.

```ts
app.use(cors()); // Allow all origins
app.use(cors({ origin: "https://example.com" })); // Restrict to specific domain
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

# Response

## Redirection

- `res.redirect()` tells the client (browser or HTTP client) to make a new request to a different URL.
- It sends an HTTP 3xx status code along with the `Location` header.
- Express automatically sets 302 Found by default if no status code is provided.

**Syntax:**

```ts
res.redirect([statusCode], path);
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

#### 301 – Moved Permanently

**Meaning:** The resource has been moved permanently to a new URL.

**Browser behavior:**

- Search engines update their index to the new URL.
- Browsers may cache the redirection aggressively.

**HTTP Method handling:**

- Some clients may change non-GET methods (like `POST`) to `GET` when following a 301 (this is not strictly correct but is common).

**Use case:** When a page or resource has a permanent new home (e.g., changing domain name).

#### 302 – Found (Temporary Redirect, old default)

**Meaning:** The resource is temporarily at another URL.

**Browser behavior:**

- Search engines generally do not update their index (they keep the old URL).
- Browsers treat it as temporary.

**HTTP Method handling:**

- Historically, many clients convert `POST` → `GET`, which is not ideal.

**Use case:** Short-term redirects (e.g., A/B testing, maintenance).

#### 307 – Temporary Redirect (method preserved)

**Meaning:** Resource temporarily resides at a different URL, but…

**HTTP Method handling:**

- Unlike 302, it guarantees the same HTTP method and body are preserved.
- Example: A `POST` request remains a `POST` request after redirection.

**Use case:** When the redirect is temporary, but you want to make sure the request method and data are not lost (e.g., login `POST` requests).

#### 308 – Permanent Redirect (method preserved)

**Meaning:** Resource has been permanently moved, like 301.

**HTTP Method handling:**

- Like 307, it preserves the HTTP method and body.
- Example: A `PUT` or `POST` request stays the same after redirection.

**Use case:** Permanent changes where the request method must be preserved (e.g., moving an API endpoint to a new path).

## Setting Headers

- `res.set()` allows you to manually set HTTP headers on the response.
- Headers provide metadata about the response (e.g., content type, caching, authentication).

```ts
res.set(field: string | object, value?: string | string[]): this
```

- `field` → Name of the header (or an object with multiple headers).
- `value` → Value of the header (optional if using object).
- Returns: the response object so you can chain methods like `.status()` and `.send()`.

**Example**

```ts
res.set({
  "X-App-Version": "1.0.0",
  "Cache-Control": "no-store",
  "X-Powered-By": "Express",
});
```

**Common Use Cases**

- Setting `Content-Type` (text, JSON(`res.set("Content-Type", "application/json");`), HTML)
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

1. `app.set('view engine', 'ejs');` → Tells Express to use EJS for rendering views.
2. `app.set('views', path.join(__dirname, 'views'));` → Specifies where EJS templates are stored.
3. `res.render('index', { name: 'John Doe', users });` → renders dynamic HTML with provided data.
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
  res.status(404).json({ success: false, message: "Resource not found" });
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
    message: "Internal Server Error",
    error: err.message,
  });
});
```

- Handles any error thrown in routes or middleware.
- Must have 4 arguments → (`err`, `req`, `res`, `next`) so Express knows it’s an error handler.
- It can be placed any where in the code, but must contain 4 arguments.

## Catching and Responding to Errors

In an Express.js application, errors can happen in many places (routes, middleware, database queries, etc.). To keep the app reliable and user-friendly, you should catch errors and respond consistently.

There are two main ways to handle errors:

1. Synchronous errors → handled with `try/catch` or by throwing inside routes.

2. Asynchronous errors → handled with `try/catch` in async functions and by passing the error to `next(err)`.

All errors eventually flow into the error-handling middleware, where you send a proper response.

### Synchronous errors

```ts
app.get("/sync-error", (req: Request, res: Response) => {
  throw new Error("Synchronous error occurred!");
});
```

- Throwing an error inside a route is automatically caught by Express if an error handler exists.

### Asynchronous errors

Asynchronous operations (like database calls or API requests) need explicit error handling.

```ts
app.get(
  "/async-error",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Promise.reject(new Error("Async error occurred!"));
    } catch (err) {
      next(err);
    }
  }
);
```

- In `async/await` routes, errors must be passed to `next(err)` manually.
- Otherwise, Express won’t catch them automatically.
