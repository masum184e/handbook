# Express.js

It enables the creation of robust RESTful APIs, handling routing, middleware integration, and serving dynamic/static content.

# Routing

A route is a combination of:

1. **HTTP Method**: Such as `GET`, `POST`, `PUT`, or `DELETE`.
2. **Path**: The endpoint or route URL.
3. **Callback Function**: Code to execute when the route is matched.

```js
app.METHOD(PATH, HANDLER);
```

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

# View Engine
A view engine in Express allows you to render dynamic HTML pages by combining template files with data. It simplifies the process of serving HTML content and is commonly used to generate pages dynamically based on user input, database content, or application logic.

**Set EJS as the view engine**
```js
app.set('view engine', 'ejs');
```

**Folder Structure:**

```text
project
├── views
│   ├── index.ejs
│   ├── about.ejs
├── public
│   └── css
│       └── styles.css
├── app.js
```

**Render Views and Pass Data**

```js
app.get('/', (req, res) => {
  const data = { title: 'Home Page', message: 'Welcome to our website!' };
  res.render('index', data);
});
```

**`views/index.ejs`:**
```js
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <h1><%= message %></h1>
</body>
</html>
```