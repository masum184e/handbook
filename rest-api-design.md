# Contents

- [Application Programming Interface](#application-programming-interface)
  - [API stakeholders](#api-stakeholders)
  - [Major API Stakeholders](#major-api-stakeholders)
- [Lifecycle of an API](#lifecycle-of-an-api)
  - [Planning / Requirements Gathering](#1-planning--requirements-gathering)
  - [Design](#2-design)
  - [Development](#3-development)
  - [Testing](#4-testing)
  - [Deployment](#5-deployment)
  - [Consumption / Usage](#6-consumption--usage)
  - [Versioning & Maintenance](#7-versioning--maintenance)
  - [Deprecation & Retirement](#8-deprecation--retirement)
- [Six Constraints of REST API](#six-constraints-of-rest-api)
  - [Client-Server Architecture](#1-client-server-architecture)
  - [Statelessness](#2-statelessness)
  - [Cacheability](#3-cacheability)
  - [Uniform Interface](#4-uniform-interface)
  - [Layered System](#5-layered-system)
  - [Code on Demand (Optional)](#6-code-on-demand-optional)
- [Richardson Maturity Model](#richardson-maturity-model)
  - [Level 0: The Swamp of POX (Plain Old XML)](#level-0-the-swamp-of-pox-plain-old-xml)
  - [Level 1: Resources](#level-1-resources)
  - [Level 2: HTTP Verbs](#level-2-http-verbs)
  - [Level 3: Hypermedia Controls (HATEOAS)](#level-3-hypermedia-controls-hateoas)
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
- [OAuth 2.0](#oauth-20)
  - [Core Roles](#core-roles)
  - [Authorization Flows (Grant Types)](#authorization-flows-grant-types)
  - [Steps of OAuth](#steps-of-oauth)
- [Max Retry](#max-retry)
  - [Tools](#tools)
- [Jail](#jail)
- [Security Headers](#security-headers)
  - [Content-Security-Policy (CSP)](#content-security-policy-csp)
  - [Strict-Transport-Security (HSTS)](#strict-transport-security-hsts)
  - [X-Content-Type-Options](#x-content-type-options)
  - [Access-Control-Allow-Origin (CORS)](#access-control-allow-origin-cors)
  - [Cache-Control](#cache-control)
  - [Example of Security Header](#example-of-security-header)
  - [Node.js Implementation](#nodejs-implementation)
- [API Management](#api-management)
  - [Agent Based](#agent-based)
  - [Proxy Based](#proxy-based)
    - [Common Proxy-based API Gateways](#common-proxy-based-api-gateways)
  - [Proxy vs Agent-Based API Management](#proxy-vs-agent-based-api-management)
- [API Developer Portal](#api-developer-portal)
  - [Typical Features](#typical-features)

# Application Programming Interface

API stands for Application Programming Interface.
It is like a bridge that allows two different software applications to communicate with each other.

Think of it as a waiter in a restaurant:

- You (the client) look at the menu (API documentation).
- You tell the waiter what you want (make a request).
- The waiter takes the order to the kitchen (server).
- The kitchen prepares the food (processes your request).
- The waiter brings the food back to you (returns a response).

So, an API defines rules and methods for how one program can request data or services from another.

## API stakeholders

API stakeholders are the individuals or groups who have an interest in the development, maintenance, and use of the API. They influence or are impacted by the API at different stages of its lifecycle — from planning and design to development, testing, deployment, usage, and support.

Understanding who your stakeholders are is essential because it helps guide decisions about how the API should be designed, what features are necessary, and how it will be documented and maintained.

### Major API Stakeholders

| Stakeholder                          | Role & Interest                                                                                                             | Example                                                                          |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **API Consumer (Client Developer)**  | Uses the API to build applications. Needs clear documentation, predictable behavior, and stability.                         | A front-end developer integrating a payment API into a mobile app.               |
| **API Provider (Backend Developer)** | Designs and implements the API. Cares about code quality, scalability, and maintainability.                                 | A backend engineer building the endpoints for a hotel booking service.           |
| **Product Manager**                  | Defines API requirements based on business goals and user needs. Ensures the API delivers value.                            | A PM deciding that the API must support search and filtering for user data.      |
| **DevOps / Infrastructure Team**     | Manages the deployment, availability, scalability, and monitoring of the API.                                               | A DevOps engineer setting up auto-scaling and monitoring for API uptime.         |
| **Security Team**                    | Ensures the API is protected from threats and data breaches. Focuses on authentication, authorization, and data encryption. | A security analyst reviewing token-based authentication and CORS policies.       |
| **QA / Testers**                     | Verifies that the API works as expected under different conditions and handles errors properly.                             | A tester writing automated tests to validate REST API responses.                 |
| **End User (Indirect)**              | May not interact with the API directly but uses applications built with it. Their feedback affects future API changes.      | A customer using a food delivery app that consumes restaurant APIs.              |
| **Business Stakeholders**            | Focus on ROI, market fit, pricing, and competitive edge. Want the API to support business goals.                            | A CEO or investor looking to monetize the API via subscriptions or partnerships. |

## HTTP Request

1. `GET`

- Status Codes:
  - 200 OK: The request was successful, and the data is returned.
  - 404 Not Found: The resource was not found.

2. `POST`

- Status Codes:
  - 201 Created: A new resource was successfully created.
  - 400 Bad Request: Invalid input or missing parameters.

3. `PUT` and `PATCH`

- Status Codes:
  - 200 OK: The resource was updated successfully.
  - 404 Not Found: The resource was not found.
  - 400 Bad Request: The request body is not valid.

4. `DELETE`

- Status Codes:
  - 204 No Content: The resource was successfully deleted, and there is no content in the response body.
  - 404 Not Found: The resource to delete was not found.

## HTTP Headers

Headers are extra information sent with requests and responses. They help the client and server understand each other better.

### Common Request Headers

- Host → The domain of the server (e.g., Host: `api.example.com`)
- Authorization → Security credentials (e.g., `Bearer TOKEN`)
- Content-Type → Format of the body (e.g., `application/json`)
- User-Agent → Info about the client (e.g., `Mozilla/5.0 Chrome/139`)

### Common Response Headers

- **Content-Type** → Format of response (`application/json`, `text/html`)
- **Cache-Control** → Tells client how long to store data before re-fetching
- **Set-Cookie** → Server instructs browser to save cookies (for sessions/login)

## HTTP Status Codes

These are numeric codes in responses that indicate the result of the request.

**Categories:**

- 1xx – Informational

  Example: `100 Continue`

- 2xx – Success
  - `200 OK` → Request succeeded
  - `201 Created` → Resource created (common for POST)
  - `204 No Content` → Request succeeded but no data to return
    -3xx – Redirection
  - `301 Moved Permanently` → Resource moved to new URL
  - `302 Found` → Temporary redirect
- 4xx – Client Error
  - `400 Bad Request` → Invalid request format
  - `401 Unauthorized` → No/invalid authentication
  - `403 Forbidden` → You don’t have permission
  - `404 Not Found` → Resource doesn’t exist
  - `410 Gone` → Resource removed
- 5xx – Server Error
  - `500 Internal Server Error` → Generic server failure
  - `503 Service Unavailable` → Server overloaded or down

## Difference between REST, SOAP, and GraphQL

### REST (Representational State Transfer)

- Architectural style (not a strict protocol).
- Uses HTTP methods (`GET`, `POST`, `PUT`, `DELETE`, etc.).
- Works with resources identified by URIs (`/users/1`).
- Responses usually in JSON (sometimes XML, HTML).
- Stateless: every request contains all needed info.

**Request:**

```
GET /users/1
Host: api.example.com
```

**Response:**

```json
{
  "id": 1,
  "name": "Alice",
  "email": "alice@example.com"
}
```

Best for: Simple, scalable web APIs with predictable endpoints.

### SOAP (Simple Object Access Protocol)

- A protocol, not just an architectural style.
- Uses XML for both request and response.
- Strongly typed, with WSDL (Web Services Description Language) contracts.
- Supports built-in security (WS-Security) and transactions.
- More verbose and strict compared to REST.

**Request (XML):**

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetUserRequest>
      <UserId>1</UserId>
    </GetUserRequest>
  </soap:Body>
</soap:Envelope>
```

**Response (XML):**

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetUserResponse>
      <User>
        <Id>1</Id>
        <Name>Alice</Name>
        <Email>alice@example.com</Email>
      </User>
    </GetUserResponse>
  </soap:Body>
</soap:Envelope>
```

Best for: Enterprise systems needing high security, strict contracts, and ACID transactions (e.g., banking, telecom).

### A query language for APIs (developed by Facebook).

- Client asks exactly what it needs, nothing more.
- Uses a single endpoint (`/graphql`).
- Schema defines available types & queries.
- Reduces over-fetching (getting too much data) and under-fetching (not enough data).

**Request (GraphQL query):**

```graphql
{
  user(id: 1) {
    name
    email
  }
}
```

**Response:**

```json
{
  "data": {
    "user": {
      "name": "Alice",
      "email": "alice@example.com"
    }
  }
}
```

Best for: Apps needing flexibility (e.g., mobile apps where bandwidth matters) or when multiple resources need to be fetched in one request.

### REST vs SOAP vs GraphQL (Comparison Table)

| Feature                          | REST 🌐                                 | SOAP 📦                             | GraphQL 🔍                                   |
| -------------------------------- | --------------------------------------- | ----------------------------------- | -------------------------------------------- |
| **Type**                         | Architectural style                     | Protocol                            | Query language                               |
| **Data format**                  | JSON, XML, HTML                         | XML only                            | JSON                                         |
| **Endpoint structure**           | Multiple endpoints (`/users`, `/posts`) | Single endpoint (defined in WSDL)   | Single endpoint (`/graphql`)                 |
| **Flexibility in data fetching** | Limited (fixed response structure)      | Strict (fixed XML schema)           | High (client chooses fields)                 |
| **Performance**                  | Can cause over/under-fetching           | Verbose, heavy payloads             | Optimized, single request                    |
| **Security**                     | Relies on HTTPS & tokens                | Built-in WS-Security                | Relies on HTTPS & custom                     |
| **Use case**                     | General web APIs                        | Enterprise, banking, legacy systems | Modern apps (web/mobile) needing flexibility |

## Idempotent vs Non-Idempotent Methods

### Idempotent

A method is idempotent if making the same request multiple times has the same effect on the server as making it once.

- The result on the server doesn’t change no matter how many times you repeat it.
- The response might differ (like different timestamps), but the state of the resource remains the same.

### Non-Idempotent

A method is non-idempotent if making the same request multiple times causes a different result on the server.

- Repeating the request changes the server state each time.

### Idempotent vs Non-Idempotent (Comparison Table)

| Method     | Idempotent?      | Why                                                   |
| ---------- | ---------------- | ----------------------------------------------------- |
| **GET**    | ✅ Yes           | Just retrieves data, no change                        |
| **POST**   | ❌ No            | Creates new resource each time                        |
| **PUT**    | ✅ Yes           | Replaces resource completely (same result)            |
| **PATCH**  | ✅ Yes (usually) | Same update applied repeatedly → same result          |
| **DELETE** | ✅ Yes           | Resource is deleted, repeating doesn’t change outcome |

# Lifecycle of an API

## 1. Planning / Requirements Gathering

**Objective:** Understand what the API should do and why.

**Activities:**

- Identify stakeholders (client developers, product managers, etc.)
- Define business goals and user needs
- Decide on use cases and expected data models

**Example:**

You’re building a REST API for an Online Bookstore. During planning:

- PM says customers must browse books by genre.
- Frontend devs need a `GET /books?genre=fiction` endpoint.
- Business wants to integrate with external publisher APIs.

## 2. Design

**Objective:** Define the structure and behavior of the API.

**Activities:**

- Define resources and endpoints (`/books`, `/authors`)
- Choose HTTP methods (`GET`, `POST`, `PUT`, `DELETE`)
- Define request/response formats (usually JSON)
- Use tools like OpenAPI (Swagger) to document design

**Example:**

```shell
GET /books           → List books
GET /books/{id}      → Get book by ID
POST /books          → Add a new book
PUT /books/{id}      → Update a book
DELETE /books/{id}   → Delete a book
```

## 3. Development

**Objective:** Implement the API as per design.

**Activities:**

- Write backend code (Node.js, Python, etc.)
- Connect to databases and external services
- Implement validation, authentication, error handling
- Set up CI/CD pipelines

**Example:**

A backend developer uses Express.js to build the `/books` endpoints and applies JWT-based authentication for protected routes.

## 4. Testing

**Objective:** Ensure the API works as expected.

**Types of Testing:**

- Unit testing: Test individual functions/methods
- Integration testing: Test how components work together
- End-to-end testing: Simulate real user interactions
- Load testing: Check how the API performs under stress

**Example:**

A QA engineer writes automated tests using Postman or JUnit to:

- Verify `GET /books` returns correct status codes and data
- Ensure `POST /books` rejects invalid input
- Confirm API performance under 1000 concurrent users

## 5. Deployment

**Objective:** Make the API accessible to consumers.

**Activities:**

- Deploy to a production environment (e.g., AWS, Azure)
- Set up API gateways, rate limiting, monitoring
- Enable HTTPS and security headers

**Example:**

The API is deployed to AWS Lambda behind API Gateway with CloudWatch monitoring. CORS is enabled so frontend apps can access it.

## 6. Consumption / Usage

**Objective:** Clients use the API to build applications.

**Activities:**

- Clients integrate the API into mobile/web apps
- SDKs or API wrappers may be provided
- Monitor usage, track errors, and collect feedback

**Example:**

The mobile app displays books using `GET /books`. Analytics show most requests filter by genre, so you decide to optimize that query.

## 7. Versioning & Maintenance

**Objective:** Improve or fix the API without breaking clients.

**Activities:**

- Fix bugs or performance issues
- Add new features or endpoints
- Apply versioning strategies (`/v1/books`, headers, etc.)

**Example:**

You need to change the response format of `/books`. To avoid breaking existing clients, you release a new version: `GET /v2/books`.

## 8. Deprecation & Retirement

**Objective:** Phase out older or unused versions of the API.

**Activities:**

- Announce deprecation timelines to clients
- Provide migration guides
- Disable or remove old API versions

**Example:**

You notify clients that `/v1/books` will be retired in 6 months. Clients are encouraged to migrate to `/v2/books`, which supports new fields.

# Six Constraints of REST API

## 1. Client-Server Architecture

**Definition:**

The client (consumer) and server (provider) must be separate entities, each responsible for its own concerns.

- The client handles the user interface and user interactions.
- The server manages data, business logic, and processing.

**Benefits:**

- Independent development of client and server
- Easier scaling and deployment

**Example:**

A mobile app (client) calls `GET /books` to fetch book data from the API (server). The app doesn’t need to know how the server stores data—just how to request and display it.

## 2. Statelessness

**Definition:**

Each client request must contain all necessary information for the server to understand and process it.
The server should not store any session state between requests.

**Benefits:**

- Scalability (easier to distribute load across servers)
- Simplifies server logic

**Example:**

When calling `GET /orders/1001`, the client must include authentication info (like a token) with every request:

```shell
GET /orders/1001
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

The server doesn’t store session data — each request is processed independently.

## 3. Cacheability

**Definition:**

Responses must explicitly indicate whether they are cacheable (and for how long) using HTTP headers.

**Benefits:**

- Reduces server load
- Improves client performance

**Example:**

A response from `GET /books` might include:

```shell
Cache-Control: public, max-age=3600
```

This tells clients and proxies they can cache the response for 1 hour.

## 4. Uniform Interface

**Definition:**

REST APIs must have a standardized way of communicating between client and server. This is the core constraint that differentiates REST from other architectures.

**Principles of Uniform Interface:**

1. **Resource Identification:** Use URIs to identify resources (e.g., `/books/10`)
2. **Standard HTTP Methods:**

   - `GET` to retrieve
   - `POST` to create
   - `PUT` to update
   - `DELETE` to remove

3. **Representation of Resources:** Resources are sent in formats like JSON or XML.

4. **Self-descriptive Messages:** Requests and responses contain enough information (e.g., headers like `Content-Type`)

**Example:**

```shell
GET /books/10
Accept: application/json
```

**Server Response:**

```json
{
  "id": 10,
  "title": "RESTful Web Services",
  "author": "Leonard Richardson"
}
```

## 5. Layered System

**Definition:**

A REST API must be designed in layers, where each layer has a specific responsibility.
Clients cannot tell whether they’re connected directly to the server or through intermediaries (like load balancers or caches).

**Benefits:**

- Scalability via load balancing, caching, proxies
- Improved security and modularity

**Example:**

A client sends a request to `api.example.com`, which is routed through:

- a load balancer,
- then to an API gateway,
- then to a service running the actual logic.

The client is unaware of these layers.

## 6. Code on Demand (Optional)

**Definition:**

Servers can optionally send executable code to clients, allowing them to extend functionality.

**Benefits:**

- Flexibility
- Offloads processing to the client

**Example:**

The server responds with JavaScript code that runs on the client’s browser:

```shell
Content-Type: application/javascript
```

Client uses this script to render charts, validate forms, etc.

This is the only optional constraint. Most REST APIs do not use this in practice.

## Summary

| Constraint                | Description                                  | Benefit                   | Example                           |
| ------------------------- | -------------------------------------------- | ------------------------- | --------------------------------- |
| Client-Server             | Separate UI (client) and data logic (server) | Scalability, modularity   | Mobile app calls REST API         |
| Stateless                 | No client session stored on server           | Scalability, simplicity   | JWT token sent with every request |
| Cacheable                 | Responses indicate cache policy              | Performance, reduced load | `Cache-Control` header            |
| Uniform Interface         | Standardized interaction style               | Simplicity, decoupling    | `GET /books`, JSON representation |
| Layered System            | Components are organized in layers           | Scalability, security     | Request goes through API gateway  |
| Code on Demand (Optional) | Server sends code to client                  | Flexibility (rarely used) | JavaScript sent to browser        |

# API Resource Design

## Resource Naming Conventions

When designing RESTful APIs, the URLs (endpoints) represent resources (things/entities in your system), not actions.

- Resources = nouns → represent objects, collections, or entities.
- Actions = verbs → represent operations (like "getUser", "createOrder").

In REST, we avoid verbs in endpoint paths because the HTTP method (GET, POST, PUT, DELETE) already defines the action.

### Why use nouns instead of verbs?

1. Consistency → Easy to understand across APIs.
2. Clarity → URL describes what the resource is, not what to do with it.
3. Flexibility → Operations are handled by HTTP methods instead of encoding them in the URL.
4. REST Best Practice → Keeps endpoints clean, predictable, and uniform.

### Example of API Naming

Bad (using verbs in path):

```bash
/getUsers
/createUser
/deleteUser/123
```

Problem → Verb in path duplicates what HTTP method already specifies.

Good (using nouns):

```bash
GET    /users          → fetch all users
POST   /users          → create a new user
GET    /users/123      → fetch user with ID 123
PUT    /users/123      → update user with ID 123
DELETE /users/123      → delete user with ID 123
```

Explanation: `users` is a resource (noun), HTTP method defines the action.

### Rules of Thumb for Resource Naming

1. Use nouns (plural form)

   - `/users`, `/orders`, `/products`
   - Not `/getUser`, `/createOrder`

2. Use hierarchical structure for relationships

   - `/users/123/orders/77`

3. Use lowercase with hyphens (for readability)

   - `/user-profiles` not `/UserProfiles` or `/user_profiles`

4. Avoid actions/verbs in URLs

   - Don't use `/activateAccount`
   - Instead → `POST /accounts/123/activation`

5. Keep it consistent across the API

   - Don’t mix plural `/users` and singular `/order` in same design.

### When to Use Singular Resource Names?

If the API represents a unique, singular resource, it might make sense to use a singular name. For example, an API for a single user profile might use `/profile` instead of `/profiles`.

## Request & Response Structure

### Request Structure

The request sent by the client typically consists of the following components:

- **URL:** The endpoint or resource being accessed.
- **HTTP Method:** The type of action to be performed (`GET`, `POST`, `PUT`, `DELETE`).
- **Headers:** Contain metadata about the request (e.g., content type, authentication).
- **Body:** For methods like `POST` or `PUT`, the body contains the actual data being sent, typically in JSON format.

### Response Structure

The server's response will also be in JSON format, containing the result of the request. The response typically includes:

- **Status Code:** Indicates the success or failure of the request (e.g., `200 OK`, `201 Created`, `400 Bad Request`).
- **Headers:** Provides additional information about the response (e.g., content type, caching).
- **Body:** Contains the data or message returned by the server.

## Path Parameters

Path parameters (also called URL parameters or route parameters) are used to identify specific resources in an API. They are part of the URL path itself and are usually mandatory.

- Mandatory (usually required to access the resource).
- Identify specific resource(s).
- Part of the URL path.
- Usually represented in curly braces `{}` in API documentation.

When to use:

- To fetch, update, or delete specific resources.
- When the resource hierarchy is clear: `/users/{userId}/orders/{orderId}`.

## Query Parameters

Query parameters are used to filter, sort, or paginate resources. They appear after the `?` in the URL and are usually optional.

- Optional (often).
- Used for filtering, sorting, pagination, or searching.
- Not part of the resource path; instead, they refine the request.
- Key-value pairs, separated by `&`.

**Path Parameters vs Query Parameters**

| Feature           | Path Parameter                                    | Query Parameter                                     |
| ----------------- | ------------------------------------------------- | --------------------------------------------------- |
| Purpose           | Identify specific resource                        | Filter, sort, or refine resource                    |
| Mandatory         | Usually yes                                       | Usually optional                                    |
| Part of URL       | Yes                                               | No (after `?`)                                      |
| Example URL       | `/users/123`                                      | `/users?role=admin&status=active`                   |
| Best use case     | Fetch, update, delete single resource             | Filter, sort, paginate resource list                |
| Impact on caching | Path usually creates new resource URL (cache key) | Same path, different query can be cached separately |

## Pagination

Pagination is the process of splitting large sets of data into smaller chunks (pages) so that the client can request and navigate through them efficiently.

There are three common strategies in REST API design:

### Limit & Offset Pagination

This is the most common and simplest form of pagination.

- limit → how many items to return per request.
- offset → how many items to skip before starting to return results.

```bash
GET /api/v1/products?limit=10&offset=20
```

`limit=10` → return 10 products
`offset=20` → skip the first 20 products, start from the 21st

**Advantages:**

- Easy to implement
- Familiar and intuitive

**Disadvantages:**

- Inefficient for large offsets (e.g., offset=100000 requires skipping a lot of rows).
- Data inconsistency if records are inserted/deleted between requests.

### Page-based Pagination

This is a variant of limit/offset where instead of offset, you use page numbers.

```bash
GET /api/v1/products?page=3&limit=10
```

- `page=3` → return the 3rd page
- `limit=10` → 10 items per page

This internally translates to:

- skip = (page - 1) × limit → (3-1)×10 = 20
- same as offset=20

**Advantages:**

- User-friendly ("Page 1, Page 2...")
- Simple for UI navigation
  **Disadvantages:**
- Suffers from the same large dataset inefficiency as offset

### Cursor-based Pagination (a.k.a. Keyset Pagination)

Instead of numeric offsets, this uses a pointer (cursor) to the last item fetched. The cursor is usually a unique, sequential, or sortable field (like `id` or `created_at`).

```bash
GET /api/v1/products?limit=10&cursor=21
```

- `cursor=21` → start after product with ID=21
- `limit=10` → return next 10 items

**Advantages:**

- Efficient for large datasets
- Consistent results even if new records are inserted/deleted
- Scales well for APIs with continuous scrolling (e.g., Twitter feed)

**Disadvantages:**

- More complex to implement
- Cursors must be securely encoded (not just raw IDs)

## Filtering

Filtering allows clients to narrow down results based on specific fields or conditions.

- Use query parameters for filters.
- Support multiple filters.
- Use consistent naming.
- Consider operators for ranges, dates, etc.

```bash
GET /api/v1/products?category=electronics&minPrice=100&maxPrice=1000&brand=sony
```

**Operators (Advanced Filtering):**

- `price[gt]=100` → greater than 100
- `price[lte]=1000` → less than or equal to 1000
- `created_at[between]=2023-01-01,2023-12-31`

```bash
GET /api/v1/orders?status=completed&price[gte]=100&price[lte]=500
```

## Sorting

Sorting defines the order of returned results.

- Use a `sort` query parameter.
- Prefix with `-` for descending order.
- Allow multiple fields.

```bash
GET /api/v1/products?sort=-price,name
```

- First, sort by price (descending).
- Then, for items with the same price, sort by name (ascending).

## Searching

Searching allows clients to perform keyword-based queries across one or multiple fields.

- Use a general `q` parameter for free-text search.
- Allow field-specific searches if needed.
- For complex cases, integrate with full-text search (Elasticsearch, PostgreSQL `tsvector`, etc.).

```bash
GET /api/v1/products?name=macbook&brand=apple
```

# Richardson Maturity Model

The Richardson Maturity Model (RMM) is a model developed by Leonard Richardson to evaluate how well a web API follows REST principles. It defines four levels (0 to 3), each building on the previous one, showing the maturity of an API in terms of its RESTful characteristics.

| Level | Description                       | Key Features                                                  |
| ----- | --------------------------------- | ------------------------------------------------------------- |
| 0     | **The Swamp of POX**              | Single URI, uses HTTP as a transport tunnel (often only POST) |
| 1     | **Resources**                     | Exposes multiple URIs (endpoints) for resources               |
| 2     | **HTTP Verbs**                    | Uses standard HTTP methods like GET, POST, PUT, DELETE        |
| 3     | **Hypermedia Controls (HATEOAS)** | Uses hyperlinks in responses to guide client interaction      |

## Level 0: The Swamp of POX (Plain Old XML)

**Description:**

- Single URI (`/api`)
- Only uses `POST` for every action
- Request tells the server what to do using action names (RPC-style)
- Often uses XML or JSON, but not in a RESTful way

**Example:**

```json
POST /api
{
  "action": "getBook",
  "bookId": 123
}
```

**Problems:**

- No use of HTTP verbs
- No resource-based URIs
- Violates REST constraints

## Level 1: Resources

**Description:**

- Exposes multiple URIs to represent resources (e.g., `/books`, `/authors`)
- Still may use only `POST`

**Example:**

```json
POST /books/get
{
  "id": 123
}
```

**Improvements:**

- Introduces the concept of resources
- Each resource has its own URI

**Still Lacking:**

- Proper use of HTTP verbs (e.g., still using `POST` for everything)

## Level 2: HTTP Verbs

**Description:**

Uses HTTP methods properly:

- `GET` for retrieving
- `POST` for creating
- `PUT` for updating
- `DELETE` for deleting

Also uses standard HTTP status codes (`200`, `201`, `404`, etc.)

**Example:**

```shell
GET /books/123           → Get a book
POST /books              → Create a book
PUT /books/123           → Update a book
DELETE /books/123        → Delete a book
```

**Improvements:**

- Fully leverages the capabilities of HTTP
- Improves clarity, scalability, and cacheability

**Still Lacking:**

- No discovery or navigation via hyperlinks

## Level 3: Hypermedia Controls (HATEOAS)

**HATEOAS = Hypermedia As The Engine Of Application State**

**Description:**

- The API provides hyperlinks in responses
- Clients can discover available actions by following links
- Fully REST-compliant
- Promotes decoupling and flexibility

**Example:**

```json
GET /books/123

Response:
{
  "id": 123,
  "title": "RESTful Web Services",
  "author": "Leonard Richardson",
  "_links": {
    "self": { "href": "/books/123" },
    "update": { "href": "/books/123", "method": "PUT" },
    "delete": { "href": "/books/123", "method": "DELETE" },
    "author": { "href": "/authors/7" }
  }
}
```

**Benefits:**

- Client doesn’t need to hardcode URIs or workflows
- Server guides the client like a human browsing a website
- Ideal for long-term evolution and discoverability

## Summary of Richardson Maturity Levels

| Level | URI Structure | HTTP Verbs | Hypermedia (HATEOAS) | RESTful?     |
| ----- | ------------- | ---------- | -------------------- | ------------ |
| 0     | No            | No         | No                   | ❌           |
| 1     | ✅            | No         | No                   | ❌           |
| 2     | ✅            | ✅         | No                   | ✅ (Partial) |
| 3     | ✅            | ✅         | ✅                   | ✅ (Full)    |

- Most real-world REST APIs are at Level 2 — they use URIs and HTTP verbs correctly but often skip HATEOAS.
- Level 3 is ideal for discoverability and hypermedia-driven clients, but it requires more complexity and isn't always necessary.

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

Comparison

| Feature              | **URI Versioning** (`/v1/users`)       | **Header Versioning** (`Accept: v2`)        | **Query Param Versioning** (`?version=2`)         |
| -------------------- | -------------------------------------- | ------------------------------------------- | ------------------------------------------------- |
| **Clarity**          | ✅ Very clear, explicit                | ❌ Hidden in headers                        | ⚠️ Somewhat clear, but less prominent             |
| **REST purity**      | ❌ Less RESTful (URI should be stable) | ✅ More RESTful (representation in headers) | ❌ Not ideal (query params aren’t for versioning) |
| **Caching/CDN**      | ✅ Excellent                           | ⚠️ Needs config                             | ⚠️ Sometimes problematic                          |
| **Ease of adoption** | ✅ Easy for devs                       | ⚠️ Requires header setup                    | ✅ Easy to use, but messy                         |
| **Migration**        | ❌ Requires URL change                 | ✅ Only header change                       | ✅ Only param change                              |
| **Best for**         | Public APIs (third-party devs)         | Internal APIs (enterprise apps)             | Experimental APIs, quick testing                  |

## API Versioning Lifecycle

1. 2023 → `/v1` released

```bash
GET /v1/users/123 → { "id": 123, "name": "Alice" }
```

2. 2025 → `/v2` released with breaking changes

```bash
GET /v2/users/123 → { "id": 123, "fullName": "Alice Johnson", "email": "alice@example.com" }
```

3. 2025 (Announcement) → Mark `/v1` deprecated

- Docs updated with deprecation notice.
- Responses from `/v1` include headers:

```bash
Deprecation: true
Sunset: Tue, 31 Dec 2026 23:59:59 GMT
Link: </v2/users/123>; rel="successor-version"
```

4. 2026 → `/v1` fully retired.

- `/v1/users/123` → returns `410 Gone`.
- All clients must use `/v2`.

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

# OAuth 2.0

OAuth 2.0 is a delegation protocol — it lets users authorize applications to act on their behalf, granting access to resources via access tokens.

Instead of apps storing user credentials, they request access tokens from an authorization server, which are then used to access protected APIs.

## Core Roles

| Role                     | Description                                                   |
| ------------------------ | ------------------------------------------------------------- |
| **Resource Owner**       | The user who owns the data (e.g., you)                        |
| **Client**               | The third-party app accessing data (e.g., Spotify)            |
| **Authorization Server** | Issues tokens (e.g., Google, Auth0)                           |
| **Resource Server**      | API that hosts the user’s resources (e.g., `api.example.com`) |

## Authorization Flows (Grant Types)

| Grant Type                    | Use Case                                            |
| ----------------------------- | --------------------------------------------------- |
| **Authorization Code**        | Web apps with frontend + backend (most secure)      |
| **Client Credentials**        | Machine-to-machine (M2M) apps (no user)             |
| **Password Grant**            | Trusted apps (deprecated for public use)            |
| **Implicit Flow**             | Single-page apps (deprecated in favor of PKCE)      |
| **Authorization Code + PKCE** | Recommended for mobile/SPAs (secure public clients) |

## Steps of OAuth

### 1. App Redirects User to Authorization Server

```shell
GET https://auth.example.com/oauth/authorize?
    response_type=code
    &client_id=abc123
    &redirect_uri=https://app.example.com/callback
    &scope=email profile
    &state=xyz
```

User logs in and consents.

### 2. Authorization Server Redirects with Code

```shell
GET https://app.example.com/callback?code=AUTH_CODE&state=xyz
```

### 3. App Requests Token

```shell
POST https://auth.example.com/oauth/token
Content-Type: application/x-www-form-urlencoded

client_id=abc123
&client_secret=shhh
&code=AUTH_CODE
&grant_type=authorization_code
&redirect_uri=https://app.example.com/callback
```

**Response:**

```json
{
  "access_token": "eyJabc...xyz",
  "refresh_token": "def456...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

### 4. App Uses Access Token to Call API

```shell
GET https://api.example.com/user/email
Authorization: Bearer eyJabc...xyz
```

**Response:**

```json
{
  "email": "user@example.com"
}
```

### 5. Refresh Access Token (When expired)

```shell
POST https://auth.example.com/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token
&refresh_token=def456...
&client_id=abc123
&client_secret=shhh
```

## OpenID Connect

- OpenID Connect is an identity layer built on top of OAuth 2.0.
- It adds authentication — confirming who the user is.
- In addition to `access_token`, OIDC issues an ID Token (a JWT) containing user identity information.

So:

- OAuth 2.0 = Delegated Authorization (what app can do)
- OIDC = Authentication + Authorization (who the user is + what app can do)

### How OIDC Works

OIDC uses the same flows as OAuth 2.0 but adds the id_token.

**ID Token**

- A JWT (JSON Web Token) signed by the Identity Provider.
- Contains user claims:

```json
{
  "sub": "1234567890",
  "name": "Masum Billah",
  "email": "masum@example.com",
  "iss": "https://auth.example.com/",
  "aud": "abc123",
  "exp": 1694200300
}
```

### OIDC Flow

1. Client app redirects user to the Identity Provider with `openid` scope:

```bash
GET https://auth.example.com/authorize?
    response_type=code&
    client_id=abc123&
    redirect_uri=https://myapp.com/callback&
    scope=openid profile email
```

2. After login & consent → client exchanges code for tokens:

```bash
POST /oauth/token
grant_type=authorization_code
code=xyz789
client_id=abc123
client_secret=shhh456
```

Response:

```json
{
  "access_token": "eyJhbGciOiJIUzI1...",
  "id_token": "eyJhbGciOiJSUzI1NiIsInR5cCI...",
  "expires_in": 3600,
  "token_type": "Bearer"
}
```

4. The access_token → used to call APIs. The id_token → used to authenticate the user (who they are).

### OAuth 2.0 vs OIDC

| Feature          | OAuth 2.0                        | OpenID Connect (OIDC)          |
| ---------------- | -------------------------------- | ------------------------------ |
| Purpose          | Authorization (what app can do)  | Authentication + Authorization |
| Tokens Returned  | Access Token (and Refresh Token) | Access Token + **ID Token**    |
| Identity Info    | ❌ Not included                  | ✅ Provided in ID Token        |
| Example Use Case | Allow app to access Google Drive | Login with Google              |

## JSON Web Tokens

A JWT (JSON Web Token) is a compact, URL-safe token format used to securely transmit information between a client and server.

It’s a string with 3 parts (separated by dots `.`):

```bash
header.payload.signature
```

It’s often used as a Bearer Token in REST APIs for authentication & authorization.

### JWT Structure

```nginx
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.
eyJzdWIiOiIxMjM0NTYiLCJuYW1lIjoiTWFzdW0gQmlsbGFoIiwiYWRtaW4iOnRydWV9
.
hTDiVfVhS5jqCmyFfXqS-H6vIbiV9TnQ7s02jjCddJY
```

1. Header

Defines metadata: algorithm & type. (Base64 encoded JSON)

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

2. Payload

Contains claims (the actual data). (Base64 encoded JSON)

```json
{
  "sub": "123456",
  "name": "Masum Billah",
  "admin": true,
  "exp": 1736790400
}
```

- `sub`: Subject (user ID)
- `exp`: Expiry time (Unix timestamp)
- `name`, admin: Custom claims

3. Signature

Ensures the token isn’t tampered with.

```bash
HMACSHA256( base64UrlEncode(header) + "." + base64UrlEncode(payload), secret )
```

**Best Practices**

- Keep JWTs short-lived (`exp` claim).
- Use refresh tokens for long sessions.
- Always send via `Authorization: Bearer` header (not query params).
- Sign with strong algorithms (HS256, RS256).
- Validate issuer (`iss`), audience (`aud`), and expiry (`exp`).

# Max Retry

Max retry defines the maximum number of failed login attempts a user (or IP) can make within a certain time window. After exceeding this limit, further attempts are blocked temporarily or permanently, depending on policy.

**Why Use Max Retry?**

- Prevent brute-force attacks
- Protect user accounts
- Reduce load on authentication systems

**Example Settings:**
| Parameter | Value |
| --------------- | ---------- |
| Max Retry Count | 5 attempts |
| Time Window | 15 minutes |
| Block Duration | 30 minutes |

## Tools

| Tool/Library       | Language     | Feature                                     |
| ------------------ | ------------ | ------------------------------------------- |
| Django Ratelimit   | Python       | Rate limiting per view/user/IP              |
| Flask-Limiter      | Python       | Per-endpoint throttling                     |
| Express-rate-limit | Node.js      | Middleware for limiting login tries         |
| Redis (custom)     | Any          | For tracking failed attempts + expiry       |
| Fail2Ban           | System-level | Bans IPs after too many failures (via logs) |

# Jail

Jail is a longer-term or permanent block applied when repeated abusive behavior is detected. It’s often triggered by:

- Multiple max retry violations
- Suspicious or bot-like login patterns
- Known bad IP addresses

**Why Use Jail?**

- Protect against persistent attackers
- Limit abuse from automated scripts
- Enforce stricter penalties after repeated offenses

**Example Jail Policy:**
| Parameter | Value |
| ----------------------- | ------------------------------ |
| Max Retry per Window | 5 attempts |
| Max Violations (in 24h) | 3 violations |
| Jail Duration | 24 hours (or permanent for IP) |

# Security Headers

Security headers are HTTP headers that help secure the communication between clients and servers. These headers protect APIs from a range of attacks such as cross-site scripting (XSS), clickjacking, content sniffing, and more.

## Common Security Headers

### Content-Security-Policy (CSP)

Prevents cross-site scripting (XSS) and code injection by defining which resources are allowed to load.

```shell
Content-Security-Policy: default-src 'none'; script-src 'self'; connect-src 'self' api.example.com
```

- `default-src 'none'`: block all by default
- `script-src 'self'`: only allow JS from the API's own domain
- `connect-src`: restrict fetch/XHR/websocket destinations
  APIs that return HTML or are embedded in browsers benefit the most from CSP.

### Strict-Transport-Security (HSTS)

Forces HTTPS-only connections to prevent man-in-the-middle (MITM) attacks.

```shell
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

- `max-age`: cache HTTPS requirement for 1 year (in seconds)
- `includeSubDomains`: enforce for all subdomains
  Only effective over HTTPS.

### X-Content-Type-Options

Prevents MIME-type sniffing by browsers (which can lead to XSS).

```shell
X-Content-Type-Options: nosniff
```

Ensures the browser uses the declared `Content-Type`, rather than trying to guess it.

### Access-Control-Allow-Origin (CORS)

Controls which domains are allowed to access the API via browser.

```shell
Access-Control-Allow-Origin: https://frontend.example.com
```

Crucial for browser-based clients; not typically needed for server-to-server calls.

### Cache-Control

Prevent sensitive API responses (like tokens or PII) from being cached.

```shell
Cache-Control: no-store
Pragma: no-cache
Expires: 0
```

## Example of Security Header

```shell
HTTP/1.1 200 OK
Content-Type: application/json
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Content-Security-Policy: default-src 'none'; connect-src 'self'
Referrer-Policy: no-referrer
Access-Control-Allow-Origin: https://frontend.example.com
Cache-Control: no-store
Pragma: no-cache
```

## Node.js Implementation

```js
const helmet = require("helmet");
app.use(helmet()); // adds most security headers

// Customize specific headers
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'none'"],
      connectSrc: ["'self'", "api.example.com"],
    },
  })
);

app.get("/api/data", (req, res) => {
  res.set("Cache-Control", "no-store");
  res.json({ data: "Secure Data" });
});
```

# API Management

## Agent Based

An agent in API management is an autonomous or semi-autonomous program that:

- Interprets policies or rules
- Monitors API usage
- Takes actions (e.g., throttling, caching, logging, alerting)
- May use AI/ML or decision trees to optimize or modify API behavior

Agents typically reside in:

- API gateways (like Kong, Apigee, or AWS API Gateway)
- Middleware platforms
- Sidecars in service meshes (e.g., Envoy in Istio)
- Client SDKs (for offline handling, caching, retries)

## Proxy Based

A proxy is an intermediary between clients and servers. In API management, a reverse proxy is used to:

- Accept client requests
- Apply policies (security, rate limits, etc.)
- Forward valid requests to the backend services
- Log, monitor, and transform traffic as needed

A proxy-based API manager often acts like a traffic cop, enforcing rules before requests hit the actual API services.

### Common Proxy-based API Gateways

| Tool                | Type        | Features                              |
| ------------------- | ----------- | ------------------------------------- |
| **Kong**            | OSS & Cloud | Plugins, rate limiting, auth, logging |
| **Apigee**          | Cloud       | Policies, analytics, monetization     |
| **AWS API Gateway** | Cloud       | Lambda auth, usage plans, CORS        |
| **Nginx/OpenResty** | Self-hosted | Scripting, reverse proxy, caching     |
| **Tyk**             | OSS & Cloud | JWT, auth, quotas, caching            |

## Proxy vs Agent-Based API Management

| Feature                 | Proxy-Based API Management | Agent-Based API Management     |
| ----------------------- | -------------------------- | ------------------------------ |
| Central control point   | ✅ Yes                     | ⚠️ Not always centralized      |
| Requires client support | ❌ No                      | ✅ Sometimes (e.g. SDK agent)  |
| Latency impact          | ✅ Slight (adds hop)       | ✅ or ❌ (depends on location) |
| Extensibility           | ✅ via plugins             | ✅ via scripts or AI logic     |
| Offline behavior        | ❌ Cannot handle           | ✅ Client-side agent can       |

# API Developer Portal

An API Developer Portal is a self-service platform that provides:

- API documentation
- API testing tools
- Authentication/token management
- API version info and changelogs
- SDKs or code samples
- Registration for API keys or OAuth credentials

## Typical Features

| Feature                                   | Purpose                                |
| ----------------------------------------- | -------------------------------------- |
| **Interactive API Docs (Swagger, Redoc)** | Try APIs directly from browser         |
| **API Catalog**                           | Lists all available APIs and versions  |
| **Authentication Section**                | Register apps, get API keys/tokens     |
| **Rate Limits & Quotas Info**             | Explain usage limits per plan          |
| **SDK Downloads**                         | Client libraries in popular languages  |
| **Analytics Dashboard**                   | View usage stats, errors, latency      |
| **Changelog & Versioning**                | Track updates and deprecated endpoints |
| **Support & Community**                   | Contact form, forums, issue trackers   |

# Authentication & Authorization

## Digest Authentication

- Digest Auth improves on Basic Auth by avoiding sending raw credentials.
- Instead, it uses hashing with a nonce (number used once) to prove identity.
- Password is never sent directly — the server challenges the client, and the client responds with a hashed value.

### How It Works

1. Initial request → Client sends a request without credentials.

2. Server challenge → Server responds with `401 Unauthorized` and a `WWW-Authenticate` header containing:

- A realm (scope of protection).
- A nonce (unique random string).
- The hashing algorithm.

```bash
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Digest realm="example.com",
                  qop="auth",
                  nonce="dcd98b7102dd2f0e8b11d0f600bfb0c093",
                  opaque="5ccc069c403ebaf9f0171e9517f40e41"
```

3. Client response → Client uses the nonce, username, password, and request details to create a hashed response and resends the request with an `Authorization: Digest` header.

```bash
GET /user/profile HTTP/1.1
Host: api.example.com
Authorization: Digest username="masum",
               realm="example.com",
               nonce="dcd98b7102dd2f0e8b11d0f600bfb0c093",
               uri="/user/profile",
               response="6629fae49393a05397450978507c4ef1",
               opaque="5ccc069c403ebaf9f0171e9517f40e41"
```

4. Server verification → The server calculates the same hash and compares it.

- If it matches → grant access.
- If not → reject.

**Digest Auth Example Explained**

The response value is typically an MD5 hash of:

```scss
MD5( username:realm:password ) + MD5( method:uri ) + nonce
```

This way, the password is never transmitted directly.

# Access Control

## Permission-Based Access Control

- Instead of broad roles, access is controlled by specific permissions (privileges).
- Permissions are fine-grained (e.g., `post:read`, `post:create`, `post:delete`).
- Users can have multiple permissions, either directly or via roles.

### How PBAC Works

1. User authenticates → JWT contains a list of permissions.
2. API checks whether required permission is present.

### PBAC in REST API

JWT Payload

```json
{
  "sub": "123",
  "name": "Masum Billah",
  "permissions": ["post:read", "post:create", "post:update"],
  "exp": 1736790400
}
```

Request (User trying to delete a post)

```bash
DELETE /posts/42 HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1...
```

Server Check

- Extract permissions: [`"post:read"`, `"post:create"`, `"post:update"`]
- Required permission: `post:delete`
- User does not have it → return `403 Forbidden`

Response

```json
{
  "error": "Missing required permission: post:delete"
}
```

### RBAC vs PBAC

| Feature            | RBAC (Role-Based)   | PBAC (Permission-Based)                     |
| ------------------ | ------------------- | ------------------------------------------- |
| Granularity        | Coarse (role level) | Fine-grained (action level)                 |
| Example Assignment | `role = editor`     | `permissions = ["post:read","post:update"]` |
| Easy to Manage     | ✅ (fewer roles)    | ❌ (many permissions)                       |
| Flexibility        | ❌ Limited          | ✅ Very flexible                            |
| Use Case           | Small/medium apps   | Large systems with many actions             |

# Security Best Practices

## HTTPS Everywhere?

- HTTPS (Hypertext Transfer Protocol Secure) = HTTP + TLS (Transport Layer Security).
- Ensures that all communication between the client (browser, mobile app, or service) and the API server is:
  - Encrypted → prevents eavesdropping (man-in-the-middle attacks).
  - Authenticated → guarantees the server is who it claims to be.
  - Integrity-protected → prevents data tampering in transit.

“HTTPS Everywhere” means: Always enforce HTTPS for all REST API requests — no exceptions.

### Why HTTPS is Critical for REST APIs

1. Protects Sensitive Data

- API calls often include tokens, API keys, passwords, user info.
- Without HTTPS, this data can be stolen in plain text.

2. Prevents Man-in-the-Middle (MITM) Attacks

- Attackers can intercept and modify requests on unsecured HTTP.
- With HTTPS, TLS ensures encryption + server authenticity.

3. Secures Authentication & Authorization

- Mechanisms like Basic Auth, OAuth 2.0, JWT are safe only if transported via HTTPS.

4. Builds Trust

- Most modern clients reject HTTP APIs or warn users.
- Browsers block mixed content (HTTPS site calling HTTP API).

### How to Enforce HTTPS in REST APIs

1. Redirect all HTTP requests → HTTPS

- If a client mistakenly calls `http://api.example.com`, the server responds with `301 Moved Permanently` → redirects to `https://api.example.com`.

2. Use HSTS (HTTP Strict Transport Security)

- Tells browsers: “Always use HTTPS, even if the user types HTTP.”

Example header:

```bash
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

3. Disable HTTP completely

- Block port `80` (HTTP) and only accept `443` (HTTPS).

4. Use TLS Certificates (SSL)

- Get a trusted TLS cert (e.g., from Let’s Encrypt).
- Keep certificates updated & rotated.

5. Validate Certificates

- Clients should reject self-signed or invalid certs unless explicitly trusted.

### REST API over HTTPS

Insecure HTTP Request

```bash
GET http://api.example.com/user/profile
Authorization: Bearer abc123token
```

Risk: The token is sent in plain text. Anyone sniffing the network (Wi-Fi hotspot, ISP, proxy) can steal it.

Secure HTTPS Request

```bash
GET https://api.example.com/user/profile
Authorization: Bearer abc123token
```

The request and token are encrypted with TLS.

Even if intercepted, attackers cannot read or modify it.

## Cross-Origin Resource Sharing

- CORS is a browser security mechanism that controls how web applications (running in one origin/domain) can request resources from another origin.
- It prevents malicious websites from making unauthorized requests to your REST API on behalf of a user.

Origin = combination of:

```nginx
scheme + domain + port
```

- `https://app.example.com` → origin
- `https://api.example.com` → different origin

By default, browsers block cross-origin requests for security. CORS defines rules for when to allow them.

### Why CORS is Important in REST APIs

- REST APIs are often consumed by frontend apps hosted on different domains.
- Example:
  - Frontend app → `https://myapp.com`
  - Backend API → `https://api.myapp.com`
- Without CORS → browser blocks API calls.
- With properly configured CORS → only trusted domains can call the API.

### How CORS Works

1. Simple Request (e.g., GET with standard headers):

- Browser sends request directly with an `Origin` header.
- Server responds with `Access-Control-Allow-Origin` header if allowed.

```bash
GET /user/profile HTTP/1.1
Host: api.example.com
Origin: https://myapp.com
```

Response:

```bash
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://myapp.com
Content-Type: application/json

{ "username": "masum", "email": "masum@example.com" }
```

2. Preflight Request (for non-simple requests, e.g., POST with custom headers):

- Browser sends an OPTIONS request first.
- Server replies with allowed methods, headers, origins.
- If valid → browser sends the actual request.

Example (Preflight request):

```bash
OPTIONS /user/profile HTTP/1.1
Host: api.example.com
Origin: https://myapp.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type, Authorization
```

Response:

```bash
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://myapp.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
```

Then the browser proceeds with the real `POST` request.

### CORS Headers Explained

- Access-Control-Allow-Origin → which domains are allowed (e.g., `https://myapp.com` or `*`).

- Access-Control-Allow-Methods → allowed HTTP methods (`GET`, `POST`, `PUT`, `DELETE`).

- Access-Control-Allow-Headers → allowed request headers (`Authorization`, `Content-Type`).

- Access-Control-Allow-Credentials → whether cookies/auth headers are allowed (`true`/`false`).

- Access-Control-Max-Age → how long preflight results are cached (in seconds).

### CORS in REST API

Suppose your API is at `https://api.example.com` and frontend at `https://app.example.com`.

Correct CORS Response

```bash
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
```

- Only requests from `https://app.example.com` are allowed.
- API allows specific methods & headers.
- Cookies or JWT tokens can be sent with `withCredentials = true`.

### Best Practices for CORS in REST APIs

1. Never use `*` for `Access-Control-Allow-Origin` if your API requires authentication.
2. Restrict allowed methods

- Only expose what’s necessary (`GET`, `POST`).

3. Restrict allowed headers

- Avoid letting clients send arbitrary headers.

4. Enable credentials only when needed

- `Access-Control-Allow-Credentials`: true → only for trusted apps.

5. Use short max-age for sensitive APIs

- Prevents browsers from caching bad CORS rules too long.

## Rate Limiting

Rate limiting is the process of restricting the number of requests a client can make to an API within a specific timeframe.

- Prevents DoS/DDoS attacks (attackers flooding API with requests).
- Prevents brute force attacks (guessing passwords or tokens).
- Ensures fair usage so one client doesn’t overload the system.

Example:

- Limit each client to 100 requests per minute.
- If a client exceeds → return `429 Too Many Requests`.

### Example of Rate Limiting

API allows max 5 requests per minute per user.

Request (6th request within 1 minute)

```bash
GET /user/profile HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

Response

```bash
HTTP/1.1 429 Too Many Requests
Retry-After: 30
Content-Type: application/json

{
  "error": "Rate limit exceeded. Try again in 30 seconds."
}
```

`Retry-After: 30` → tells client how long to wait before retrying.

### Common Rate Limiting Strategies

1. Fixed Window

- Example: 100 requests per minute.
- Simple but can cause bursts at window edges.

2. Sliding Window / Rolling Window

- Tracks requests over the last N seconds.
- Smoother enforcement.

3. Token Bucket (most popular)

- Each client has a "bucket" of tokens (e.g., 10 tokens).
- Each request consumes a token.
- Tokens refill at a fixed rate.

4. Leaky Bucket

- Similar to token bucket but enforces steady outflow (good for throttling).

### Best Practices of Rate Limiting

- Different limits for different endpoints
  - Example: `/login` (lower limit) vs `/posts` (higher).
- Different limits per user / API key / IP
- Send helpful headers
  - `X-RateLimit-Limit` → max allowed
  - `X-RateLimit-Remaining` → remaining requests
  - `X-RateLimit-Reset` → reset time

```bash
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 5
X-RateLimit-Reset: 1694200320
```

- Use caching layer (Redis, Memcached) for fast counting.
- Combine with monitoring to detect abuse.

## Throttling

Throttling is slowing down or delaying requests when clients exceed certain thresholds.

- Instead of outright blocking, the API may:
  - Queue requests.
  - Allow fewer requests per second.
- Ensures system stays responsive under heavy load.

Example:

- API allows 10 requests per second.
- If a client sends 20, extra requests are delayed (processed later).

### Example of Throttling

Scenario: API allows max 10 requests per second.

If a client sends 15 requests:

- First 10 are processed immediately.
- Next 5 are delayed and spread out over time.

Client won’t see errors, but responses arrive slower.

### Rate Limiting vs Throttling

| Feature    | Rate Limiting 🚦          | Throttling 🕒                  |
| ---------- | ------------------------- | ------------------------------ |
| Purpose    | Restrict maximum requests | Slow down requests             |
| Behavior   | Block when limit exceeded | Delay or spread requests       |
| Example    | 100 requests/minute max   | 10 requests/sec, others queued |
| Error Code | `429 Too Many Requests`   | Usually still `200` (delayed)  |

## Avoiding common vulnerabilities

### SQL Injection

- SQL Injection happens when untrusted input is concatenated into a database query.
- Attackers can manipulate queries to read, modify, or delete data.

**Vulnerable Example**

```py
# Python pseudo-code
username = request.GET["username"]
query = f"SELECT * FROM users WHERE username = '{username}'"
cursor.execute(query)
# Python pseudo-code
username = request.GET["username"]
query = f"SELECT * FROM users WHERE username = '{username}'"
cursor.execute(query)
```

- If attacker sends: `username=admin' OR '1'='1`
- Generated query: `SELECT * FROM users WHERE username = 'admin' OR '1'='1';` Returns all users instead of just one.

**Prevention**

1. Use Parameterized Queries / Prepared Statements: `cursor.execute("SELECT * FROM users WHERE username = %s", (username,))`
2. Use ORM frameworks (like Django ORM, Hibernate, SQLAlchemy).

3. Validate and sanitize input (ensure type: string, int, etc.).

### Cross-Site Scripting

- XSS occurs when malicious JavaScript is injected into your API’s response.
- If your REST API is consumed by a frontend (like React, Angular), stored XSS can allow attackers to steal cookies, tokens, or session info.

**Vulnerable Example**

API returns unescaped user input:

```json
{
  "comment": "<script>alert('Hacked!')</script>"
}
```

Browser frontend might render this as executable script → attacker code runs.

**Prevention**

1. Escape or sanitize output before sending to clients.

- Use libraries like DOMPurify (JS), OWASP ESAPI (Java).

2. Return only JSON, never raw HTML from REST APIs.

```json
{ "comment": "&lt;script&gt;alert('Hacked!')&lt;/script&gt;" }
```

3. Set correct headers

- `Content-Type: application/json`
- `X-Content-Type-Options: nosniff`

4. Implement CSP (Content Security Policy) on frontend.

### Cross-Site Request Forgery

- CSRF tricks a logged-in user’s browser into making an unintended request to your API.
- Example: If user is logged into a banking app, an attacker could trick them into transferring money using a malicious webpage.

**Vulnerable Example**

- User is logged in to `bank.com`
- Attacker hosts a page with:

```html
<form action="https://bank.com/api/transfer" method="POST">
  <input type="hidden" name="amount" value="1000" />
  <input type="hidden" name="toAccount" value="attacker123" />
</form>
<script>
  document.forms[0].submit();
</script>
```

User unknowingly sends money while visiting attacker’s site.

**Prevention**

1. Use anti-CSRF tokens

- Include random token in forms/requests.

```json
{ "csrf_token": "abc123xyz" }
```

2. Use SameSite cookies

- `Set-Cookie: session=abc123; SameSite=Strict; Secure`
- Prevents cookies from being sent in cross-site requests.

3. Require re-authentication for critical actions (e.g., money transfer).

4. Use JWT in headers instead of cookies for stateless APIs (but still ensure proper CORS rules).

## API Gateway usage

- An API Gateway is a single entry point for all client requests to your REST APIs.
- Instead of clients calling services directly, they go through the gateway.
- The gateway then routes, filters, or modifies the requests before sending them to backend microservices.

### Why Use an API Gateway for Security?

- Centralized authentication & authorization
- Rate limiting & throttling
- Logging & monitoring (audit trails)
- CORS & HTTPS enforcement
- Input validation & threat protection (e.g., blocking SQLi, XSS patterns)
- Acts as a firewall for APIs (protects backend services from direct exposure)

### How an API Gateway Works (Flow)

1. Client makes request to `https://api.example.com`
2. API Gateway intercepts request → applies policies (auth, rate limit, CORS, etc.)
3. If valid → forwards to backend service (e.g., `user-service`, `payment-service`)
4. Collects response and returns it to client

### Key Security Features of API Gateway

1. Authentication & Authorization

- Gateway can check API keys, JWT tokens, OAuth 2.0 tokens before forwarding requests.
- Example: If a request lacks a valid token → rejected at gateway (never reaches backend).

2. Rate Limiting & Throttling

- Prevents abuse and DDoS attacks.
- Example: Limit `100 requests/minute` per user.

3. Data Protection (HTTPS Everywhere)

- Gateway enforces TLS/SSL.
- Backend services can remain private (internal network only).

4. Input Validation / Threat Protection

- Blocks requests with malicious payloads (SQL injection, XSS, etc.).
- Example: API Gateway WAF (Web Application Firewall) integration.

5. CORS Handling

- Centralized CORS configuration instead of every microservice handling it.

6. Logging & Monitoring

- Logs all requests/responses.
- Helps detect anomalies (e.g., brute force attempts).

### Example Scenario with API Gateway

- Frontend app → `https://app.example.com`
- API Gateway → `https://api.example.com`
- Backend services (internal):
  - `user-service.local`
  - `payment-service.local`

Request Flow

```bash
GET /users/profile HTTP/1.1
Host: api.example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

Gateway Actions

1. Check authentication → validate JWT.

2. Check rate limit → ensure client hasn’t exceeded quota.

3. Check CORS policy → ensure request origin is allowed.

4. Forward request → `user-service.local/api/profile`.

Response from Gateway

```bash
HTTP/1.1 200 OK
Content-Type: application/json

{ "id": 101, "username": "masum", "email": "masum@example.com" }
```

If client exceeded limit:

```bash
HTTP/1.1 429 Too Many Requests
Retry-After: 60
Content-Type: application/json

{ "error": "Rate limit exceeded. Try again later." }
```
