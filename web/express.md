# Express.js
It enables the creation of robust RESTful APIs, handling routing, middleware integration, and serving dynamic/static content.
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
- `express.json()` - Parses incoming JSON payloads and makes the data available in req.body.
    ```js
    app.use(express.json());
    ```
- `express.urlencoded()` - Parses incoming requests with URL-encoded payloads (like form submissions) and makes the data available in req.body.
    ```js
    app.use(express.json());
    ```
- `express.static()` - Serves static files like images, CSS, and JavaScript.
    ```js
    app.use(express.static(path.join(__dirname, 'public')));
    ```
- `express.text()` - Parses incoming requests with text payloads and makes the text available in `req.body`.
    ```js
    app.use(express.text());
    ```
- `express.raw()` - Parses incoming requests with binary payloads and makes the raw buffer available in `req.body`.
    ```js
    app.use(express.raw({ type: 'application/octet-stream' }));
    ```
