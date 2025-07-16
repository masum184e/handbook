# Contents

- [Partial Response](#partial-response)
  - [Why Partial Response Matters](#why-partial-response-matters)
  - [How Partial Response Works](#how-partial-response-works)
  - [Example of Partial Response](#example-of-partial-response)
  - [How to implement partial response](#how-to-implement-partial-response)
  - [Best Practices of partial response](#best-practices-of-partial-response)
- [Error Response](#error-response)
  - [Key Components of errror response](#key-components-of-errror-response)
  - [HTTP Status Codes for REST Errors](#http-status-codes-for-rest-errors)
  - [Example Error Response](#example-error-response)
  - [How to implement error response](#how-to-implement-error-response)
- [Cache Control](#cache-control)
  - [Importance of Cache Control](#importance-of-cache-control)
  - [Key Cache-Control Header Directives](#key-cache-control-header-directives)
  - [How Cacheability Is Controlled](#how-cacheability-is-controlled)
  - [Example of cache control](#example-of-cache-control)
  - [How Cache-Control Fits into REST API Workflow](#how-cache-control-fits-into-rest-api-workflow)
  - [Implement Cache Control](#implement-cache-control)
  - [Other Related HTTP Headers](#other-related-http-headers)
- [E-Tag](#e-tag)
  - [How E-Tag Works](#how-e-tag-works)
  - [Caching with `If-None-Match`](#caching-with-if-none-match)
  - [Optimistic Concurrency Control with `If-Match`](#optimistic-concurrency-control-with-if-match)
  - [Generating ETags](#generating-etags)
- [API Versioning](#api-versioning)
  - [Why API Versioning Is Important](#why-api-versioning-is-important)
  - [Common API Versioning Strategies](#common-api-versioning-strategies)
- [Changes](#changes)
  - [Non-Breaking Change](#non-breaking-change)
  - [Breaking Change](#breaking-change)
- [Code-First Approach](#code-first-approach)
  - [Pros of Code-First Approach](#pros-of-design-first-approach)
  - [Example of Code-First Approach](#example-of-code-first-approach)
- [Design-First Approach](#design-first-approach)
  - [Pros of Design-First Approach](#pros-of-design-first-approach)
  - [Tools You Can Use](#tools-you-can-use)
  - [Example of Design-First Approach](#example-of-design-first-approach)
  - [Differences from Code-First](#differences-from-code-first)
- [API Specification](#api-specification)
  - [OpenAPI Specification](#openapi-specification)
  - [OpenAPI Core Structure](#openapi-core-structure)

# Partial Response

Partial Response is a REST API design technique where clients can request only specific fields or properties of a resource rather than the entire resource.
This reduces unnecessary data transfer, improving performance and efficiency—especially in cases where resources have many attributes, but the client only needs a few.

## Why Partial Response Matters

- **Performance:** Reduces payload size and speeds up response time.
- **Bandwidth Efficiency:** Especially important for mobile or limited-bandwidth environments.
- **Flexibility:** Gives clients more control over the data they receive.

## How Partial Response Works

Partial response is usually implemented using query parameters like `fields`.
The client specifies which fields they want by passing them in the request:

```shell
GET /users/123?fields=id,name,email
```

The server parses the `fields` parameter and returns only those fields in the response.

## Example of Partial Response

Imagine a `User` resource with many fields:

```json
{
  "id": 123,
  "name": "Alice",
  "email": "alice@example.com",
  "address": "123 Main St",
  "phone": "123-456-7890",
  "createdAt": "2025-01-01T00:00:00Z",
  "updatedAt": "2025-06-01T12:00:00Z"
}
```

A client only needs `id`, `name`, and `email`.

**Request Example:**

```shell
GET /users/123?fields=id,name,email
```

## How to implement partial response

1. **Parse Query Parameter:** Extract the fields value from the query string.
2. **Validate Fields:** Ensure the requested fields exist in the resource model and that the client has permission to access them.
3. **Dynamically Build Response:** Use techniques like object filtering or projection in your backend language to send only the specified fields.

```js
app.get("/users/:id", async (req, res) => {
  const fields = req.query.fields ? req.query.fields.split(",") : null;
  const user = await getUserFromDB(req.params.id);

  if (!fields) {
    return res.json(user);
  }

  const partialUser = {};
  fields.forEach((field) => {
    if (user[field] !== undefined) {
      partialUser[field] = user[field];
    }
  });

  res.json(partialUser);
});
```

## Best Practices of partial response

- **Security:** Be careful not to expose sensitive fields accidentally.
- **Field Whitelisting:** Only allow fields that are explicitly permitted.
- **Default Behavior:** If no fields parameter is provided, return all fields (or a default subset).
- **Tooling Support:** Some libraries/frameworks offer automatic support for partial response, especially in GraphQL or with ORM libraries.

# Error Response

Error responses inform the client that a request was invalid, could not be processed, or failed due to server-side issues. Well-structured error responses make debugging easier for developers and improve the overall API usability.

## Key Components of errror response

A standard REST error response typically includes:

1. **HTTP Status Code:** Indicates the type of error using standard HTTP status codes.
2. **Error Code (Optional):** A custom application-level code for easier programmatic error handling.
3. **Error Message:** A human-readable description of what went wrong.
4. **Details (Optional):** Additional information, such as validation errors or hints on how to fix the issue.
5. **Timestamp (Optional):** Helps with logging and debugging, especially in distributed systems.

## HTTP Status Codes for REST Errors

| Status Code | Meaning                           | When to Use                         |
| ----------- | --------------------------------- | ----------------------------------- |
| 400         | Bad Request                       | Invalid request parameters          |
| 401         | Unauthorized                      | Missing or invalid authentication   |
| 403         | Forbidden                         | Lack of permission                  |
| 404         | Not Found                         | Resource does not exist             |
| 409         | Conflict                          | Resource conflict (e.g., duplicate) |
| 422         | Unprocessable Entity (Validation) | Validation errors                   |
| 500         | Internal Server Error             | Unexpected server errors            |

## Example Error Response

```json
{
  "status": 400,
  "error": "Bad Request",
  "message": "User ID must be a numeric value.",
  "code": "INVALID_USER_ID",
  "timestamp": "2025-07-14T09:45:00Z"
}
```

### Validation Error

```json
{
  "status": 422,
  "error": "Unprocessable Entity",
  "message": "Validation failed.",
  "details": [
    {
      "field": "email",
      "message": "Email format is invalid."
    },
    {
      "field": "password",
      "message": "Password must be at least 8 characters."
    }
  ],
  "timestamp": "2025-07-14T09:46:00Z"
}
```

## How to implement error response

```js
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    status: err.status || 500,
    error: err.error || "Internal Server Error",
    message: err.message || "An unexpected error occurred.",
    code: err.code || "INTERNAL_ERROR",
    timestamp: new Date().toISOString(),
  });
});
```

# Cache Control

Cache control in REST API design refers to how a server communicates caching policies to clients and intermediaries (like browsers, proxies, and CDNs) using HTTP headers. Proper cache control helps improve performance, reduce server load, and provide a better user experience by avoiding unnecessary repeat requests.

## Importance of Cache Control

- **Reduces Latency:** Cached responses are served faster.
- **Minimizes Server Load:** Fewer requests hit the backend.
- **Saves Bandwidth:** Avoids transferring the same data repeatedly.
- **Consistency vs. Freshness:** Balances performance with ensuring up-to-date information.

## Key Cache-Control Header Directives

The `Cache-Control` header is the primary way to control caching behavior in REST APIs.

| Directive           | Meaning                                                              |
| ------------------- | -------------------------------------------------------------------- |
| `public`            | Response can be cached by any cache (browser, proxy, CDN).           |
| `private`           | Response is intended for a single user (e.g., personalized content). |
| `no-cache`          | Forces revalidation before using cached data.                        |
| `no-store`          | Prevents any caching at all.                                         |
| `max-age=<seconds>` | Specifies how long (in seconds) the response can be cached.          |
| `must-revalidate`   | Forces caches to obey expiration times strictly.                     |

## How Cacheability Is Controlled

Cacheability in REST APIs is mainly controlled using HTTP cache headers:

| Header          | Purpose                                    |
| --------------- | ------------------------------------------ |
| `Cache-Control` | Main directive for caching policies        |
| `ETag`          | Entity Tag for validating cached responses |
| `Last-Modified` | Timestamp for resource freshness           |
| `Expires`       | Date-time when response becomes stale      |

## Example of cache control

### Static Resource

Header Example

```shell
Cache-Control: public, max-age=31536000
```

Explanation:

- Cached for 1 year.
- Publicly cacheable by CDNs and browsers.

### API Response

Request

```shell
GET /products
```

Response Header

```shell
Cache-Control: public, max-age=60
```

Explanation:

- Cached for 60 seconds.
- Public caches and browsers can store the response for a short duration.

### Sensitive/Dynamic Data

Request

```shell
GET /user/profile
```

Response Header

```shell
Cache-Control: private, no-store
```

Explanation:

- Private: Only for the specific user’s browser cache.
- No-store: Avoid caching altogether to prevent sensitive information from being stored.

### Combining Directives

Header Example:

```shell
Cache-Control: private, max-age=0, no-cache, must-revalidate
```

Behavior:

- Private: Only for that user.
- max-age=0: Response expires immediately.
- no-cache: Client must check with the server before using cached data.
- must-revalidate: Cache must not serve stale content.

## How Cache-Control Fits into REST API Workflow

- **Server Sets the Cache-Control Header:** During the response.
- **Client or Intermediary Respects It:** Determines whether to use cached content or request new data.
- **Stale Content Handling:** APIs can use other headers like ETag and Last-Modified for conditional requests.

## Implement Cache Control

```js
app.get("/products", (req, res) => {
  res.set("Cache-Control", "public, max-age=60");
  res.json({
    products: [
      /* product data */
    ],
  });
});
```

### Other Related HTTP Headers

- ETag: Entity tag used to check if the cached version is still valid.
- Last-Modified: Timestamp indicating when the resource was last updated.
- Expires: Legacy header; often replaced by Cache-Control: max-age.

# E-Tag

ETag (short for Entity Tag) is a mechanism used in HTTP headers to manage web cache validation and optimistic concurrency control. It is part of the HTTP specification (defined in RFC 7232) and is commonly used in REST APIs to:

- Avoid unnecessary data transfers (by caching and validating resources).
- Prevent lost updates (by safely updating only the latest version of a resource).

## How E-Tag Works

When a client retrieves a resource via a `GET` request, the server responds with an `ETag` header. This `ETag` is a hash or version identifier representing the current state of the resource.

The client can then:

- Send that ETag back to the server on subsequent requests using conditional headers:

  - `If-None-Match` (for `GET`)
  - `If-Match` (for `PUT`, `DELETE`, etc.)

The server compares the sent ETag with the current version and acts accordingly.

## Caching with `If-None-Match`

### Client Request (initial GET)

```shell
GET /products/123 HTTP/1.1
Host: api.example.com
```

### Server Response

```shell
HTTP/1.1 200 OK
ETag: "abc123"
Content-Type: application/json

{
  "id": 123,
  "name": "Wireless Mouse",
  "price": 29.99
}
```

### Client Request (subsequent GET with ETag)

```shell
GET /products/123 HTTP/1.1
Host: api.example.com
If-None-Match: "abc123"
```

### Server Response (not modified)

```shell
HTTP/1.1 304 Not Modified
```

**Benefit:** Saves bandwidth and reduces server load if the resource hasn’t changed.

## Optimistic Concurrency Control with `If-Match`

Client Wants to Update a Product:

1. It first `GET`s the product and receives:

   ```
   ETag: "abc123"
   ```

2. It modifies the data locally and sends a `PUT`:

   ```shell
   PUT /products/123 HTTP/1.1
   Host: api.example.com
   If-Match: "abc123"
   Content-Type: application/json

   {
     "name": "Wireless Mouse",
     "price": 24.99
   }
   ```

3. Server checks the current ETag. If it still matches `abc123`, the update is accepted. If another client has already modified it, the ETag would be different.

**If Outdated**

```shell
HTTP/1.1 412 Precondition Failed
```

## Generating ETags

**Weak ETags:** prefixed with W/, allow for semantically equivalent content changes.

```shell
ETag: W/"xyz456"
```

**Strong ETags:** strict bit-by-bit comparison.

```shell
ETag: "abc123"
```

ETags can be:

- A hash of the resource (e.g. MD5 or SHA).
- A version number, timestamp, or database record version field (e.g., `updated_at`, `row_version`).

# API Versioning

REST API versioning is the practice of managing changes to a RESTful API by creating different versions of the API.
It helps maintain backward compatibility so existing clients continue to work even after updates or changes to the API.

## Why API Versioning Is Important

- Allows adding new features without breaking old clients.
- Supports gradual migration for consumers.
- Maintains predictable API behavior.

If you deploy changes to request formats, response structures, authentication, or behavior, versioning provides a controlled way to introduce those changes.

## Common API Versioning Strategies

| Versioning Method              | Example                                 | Pros                                 | Cons                            |
| ------------------------------ | --------------------------------------- | ------------------------------------ | ------------------------------- |
| **URI Versioning**             | `/v1/users`                             | Simple, explicit in the URL          | Can clutter URLs                |
| **Query Parameter Versioning** | `/users?version=1`                      | Easy to add dynamically              | Less visible, not RESTful       |
| **Header Versioning**          | `Accept: application/vnd.myapi.v1+json` | Clean URLs, flexible                 | Harder for clients to implement |
| **Content Negotiation**        | `Accept: application/json; version=1`   | Flexible, aligns with HTTP standards | Less common, more complex       |

# Changes

## Non-Breaking Change

A non-breaking change is any update to the API that does not require existing clients to change their behavior or implementation. Existing clients continue to work as expected.

### Example of Non-Breaking Change

| Scenario                              | Why It's Non-Breaking                           |
| ------------------------------------- | ----------------------------------------------- |
| Adding a new optional field           | Clients can ignore fields they don't recognize. |
| Adding a new endpoint                 | Clients using old endpoints remain unaffected.  |
| Extending enum values                 | Clients can default to ignoring unknown values. |
| Increasing a limit (e.g., pagination) | Clients using previous limits still function.   |

#### Example: Adding a New Field

Old Response:

```json
{
  "id": 1,
  "name": "Alice"
}
```

New Response(Non-Breaking)

```json
{
  "id": 1,
  "name": "Alice",
  "nickname": "Ally"
}
```

Why it's non-breaking: Existing clients that don't expect `nickname` will simply ignore it.

## Breaking Change

A breaking change is any modification that requires existing clients to change their code in order to continue functioning properly.

### Example of Breaking Changes

| Scenario                               | Why It's Breaking                                |
| -------------------------------------- | ------------------------------------------------ |
| Removing an existing field             | Clients depending on it may break.               |
| Renaming a field                       | Client parsing will fail.                        |
| Changing a field’s data type           | Data may be incompatible.                        |
| Changing URL structure or HTTP methods | Clients using hardcoded URLs/methods will break. |
| Changing authentication mechanism      | Clients using the old auth method fail.          |

#### Example: Renaming a Field

Old Response:

```json
{
  "id": 1,
  "name": "Alice"
}
```

New Response(Breaking)

```json
{
  "id": 1,
  "fullName": "Alice"
}
```

Why it's breaking: Existing clients looking for `name` will no longer find it and may throw errors.

# Code-First Approach

The Code-First approach (also known as bottom-up) is a way of designing REST APIs where you start by writing code first—typically the actual backend logic and route handlers—and then (optionally) generate documentation or OpenAPI (Swagger) specs from the existing code.

## Pros of Code-First Approach

- **Fast development:** Great for small teams or when you're iterating rapidly.
- **Easy to test early:** You can immediately test endpoints using tools like Postman.
- **Auto-generate documentation:** Use packages like Swagger JSDoc to generate OpenAPI docs from comments.

## Example of Code-First Approach

`index.js`(Main App)

```js
const express = require("express");
const userRoutes = require("./routes/users");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

const app = express();
app.use(express.json());

// API Routes
app.use("/api/users", userRoutes);

// Swagger Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
  console.log("Swagger docs at http://localhost:3000/api-docs");
});
```

`routes/users.js`(Code-First Route)

```js
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 */
router.post("/", (req, res) => {
  const { name } = req.body;
  res.status(201).json({ id: 3, name });
});

module.exports = router;
```

`docs/swagger.js` (Swagger JSDoc Config)

```js
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Code-First API",
      version: "1.0.0",
      description: "Simple REST API with Swagger & Code-First Approach",
    },
  },
  apis: ["./routes/*.js"], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
```

# Design-First Approach

The Design-First approach (also known as top-down) means you define your API contract first—typically using OpenAPI/Swagger, RAML, or API Blueprint—before writing any backend code. This contract serves as a single source of truth for developers, frontend/backend teams, QA, and clients.

## Pros of Design-First Approach

- **Clear contract:** Ensures all teams agree on how the API behaves before code is written.
- **Documentation first:** You get clean API docs from day one.
- **Stub generation:** Can generate boilerplate server code & client SDKs automatically.
- **Validation:** Helps validate requests/responses against a defined schema.

## Tools You Can Use

- **OpenAPI/Swagger:** Specification language for REST APIs.
- **Swagger Editor:** Online tool to design API visually and export YAML/JSON.
- **swagger-codegen or openapi-generator:** Generate Node.js server stubs.
- **express-openapi-validator:** Middleware to enforce schema validation.

## Example of Design-First Approach

Create `openapi.yaml` file

```yaml
openapi: 3.0.0
info:
  title: Design-First API Example
  version: 1.0.0

paths:
  /users:
    get:
      summary: Get all users
      responses:
        "200":
          description: A list of users
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/User"

    post:
      summary: Create a new user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/UserInput"
      responses:
        "201":
          description: User created
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/User"

components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string

    UserInput:
      type: object
      properties:
        name:
          type: string
      required:
        - name
```

`index.js`

```js
const express = require("express");
const YAML = require("yamljs");
const { OpenApiValidator } = require("express-openapi-validator");

const apiSpec = YAML.load("./openapi.yaml");

const app = express();
app.use(express.json());

// Serve the OpenAPI spec
app.use("/spec", (req, res) => res.json(apiSpec));

// Init OpenAPI Validator
new OpenApiValidator({
  apiSpec: "./openapi.yaml",
  validateRequests: true, // auto validate request bodies
  validateResponses: true, // auto validate responses
})
  .install(app)
  .then(() => {
    // Routes go after validator is set up
    const userRoutes = require("./routes/users");
    app.use("/users", userRoutes);

    app.use((err, req, res, next) => {
      res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,
      });
    });

    app.listen(3000, () => {
      console.log("API running on http://localhost:3000");
      console.log("Docs available at Swagger Editor or Redoc");
    });
  });
```

`routes/users.js`

```js
const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

router.get("/", (req, res) => {
  res.status(200).json(users);
});

router.post("/", (req, res) => {
  const { name } = req.body;
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
```

## Differences from Code-First

| Feature            | Design-First                           | Code-First                       |
| ------------------ | -------------------------------------- | -------------------------------- |
| Start Point        | API Contract (YAML/JSON)               | Application Code (routes)        |
| Tooling            | Swagger Editor, OpenAPI Generator      | Swagger JSDoc, Comment Parsers   |
| Contract Authority | Spec is the source of truth            | Code is the source of truth      |
| Ideal for          | Team collaboration, SDK generation, QA | Quick prototyping, smaller teams |

# API Specification

| Specification                            | Description                                                                             |
| ---------------------------------------- | --------------------------------------------------------------------------------------- |
| **OpenAPI (Swagger)**                    | The most popular and widely adopted specification. Describes REST APIs in YAML or JSON. |
| **RAML** (RESTful API Modeling Language) | Designed for modeling REST APIs. Less popular now but still used.                       |
| **API Blueprint**                        | Markdown-based spec for writing and testing REST APIs.                                  |
| **JSON\:API**                            | Opinionated spec focused on data structures in REST APIs.                               |
| **GraphQL SDL**                          | Not REST-based, but defines GraphQL APIs declaratively.                                 |
| **WSDL**                                 | Used for SOAP APIs, not REST.                                                           |

## OpenAPI Specification

OpenAPI Specification is a language-agnostic standard for defining REST APIs. Originally developed by Swagger, it’s now maintained by the OpenAPI Initiative (under the Linux Foundation).

It’s typically written in YAML or JSON and can be used to:

- Auto-generate interactive documentation.
- Generate server/client code.
- Generate mock servers.
- Drive contract testing.

OpenAPI versions: `2.0` (Swagger), `3.0`, and now `3.1`.

### OpenAPI Core Structure

```yaml
openapi: 3.0.3
info:
  title: API title
  version: 1.0.0
  description: API description

servers:
  - url: https://api.example.com/v1

paths:
  /resource:
    get:
      summary: Get resource
      responses:
        "200":
          description: Success
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Resource"

components:
  schemas:
    Resource:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
```
