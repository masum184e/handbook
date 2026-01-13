## What Is RFC 7807?

RFC 7807 defines a standard, machine-readable format for HTTP API error responses.

Instead of every API inventing its own error structure, RFC 7807 provides a consistent and interoperable way to describe problems that occur while processing requests.

**Official Name:** Problem Details for HTTP APIs

Media Type

```
Content-Type: application/problem+json
```

## Why Use a Standard Error Format?

Problems Without a Standard

- Every API returns errors differently
- Clients must write custom parsing logic
- Inconsistent error handling across services

Benefits of RFC 7807

1. Consistency across APIs
2. Machine-readable and human-readable
3. Standardized semantics
4. Extensible
5. Widely adopted (Spring, ASP.NET, FastAPI, etc.)

## Core Fields Defined by RFC 7807

RFC 7807 defines five standard fields.

| Field      | Type   | Required | Description                        |
| ---------- | ------ | -------- | ---------------------------------- |
| `type`     | URI    | No       | Identifies the problem type        |
| `title`    | String | Yes      | Short, human-readable summary      |
| `status`   | Number | No       | HTTP status code                   |
| `detail`   | String | No       | Human-readable explanation         |
| `instance` | URI    | No       | Specific occurrence of the problem |

Minimal Valid Example

```json
{
  "title": "Bad Request",
  "status": 400
}
```

## Meaning of Each Field (In Detail)

### `type`

- A URI identifier for the error category
- Should be stable and documented
- Can be:
  - A URL pointing to documentation
  - A URN
- Defaults to `"about:blank"` if omitted

```json
"type": "https://api.example.com/errors/validation-error"
```

Clients can use this field to programmatically identify errors.

### `title`

- Short, generic summary
- Should NOT change per occurrence
- Similar to an exception name

```json
"title": "Validation Error"
```

### `status`

- HTTP status code (duplicated in body for convenience)
- Helps when response metadata is lost (e.g., logs)

```json
"status": 422
```

### `detail`

- Human-readable explanation of the specific issue
- May vary per request
- Should be safe (no internal details)

```json
"detail": "The email field must contain a valid email address."
```

### `instance`

- URI identifying the specific error occurrence
- Often maps to request path or request ID

```json
"instance": "/users/123"
```

## Validation Error Example (RFC 7807)

**Scenario:** Client submits invalid data while creating a user.

Request

```
POST /users
Content-Type: application/json
```

```json
{
  "username": "",
  "email": "invalid-email",
  "age": 15
}
```

Response

```
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/problem+json
```

```json
{
  "type": "https://api.example.com/problems/validation-error",
  "title": "Validation Error",
  "status": 422,
  "detail": "One or more fields failed validation",
  "instance": "/users",
  "errors": [
    {
      "field": "username",
      "message": "Must not be empty"
    },
    {
      "field": "email",
      "message": "Invalid email format"
    },
    {
      "field": "age",
      "message": "Must be at least 18"
    }
  ]
}
```

**Explanation**

- Fields `type`, `title`, `status`, `detail`, `instance` → RFC 7807 standard
- `errors` → custom extension
- Extensions are allowed as long as they don’t conflict with standard fields

## Extending RFC 7807 (Very Important)

RFC 7807 is designed to be extended.

Rules for Extensions

- Field names must not conflict with standard fields
- Extensions should be documented
- Keep them consistent across API

Common Extensions

```json
{
  "errors": [],
  "timestamp": "2026-01-09T10:15:30Z",
  "requestId": "abc-123",
  "errorCode": "VALIDATION_ERROR"
}
```

## Authentication Error Example

Missing Token

```
HTTP/1.1 401 Unauthorized
Content-Type: application/problem+json
```

```json
{
  "type": "https://api.example.com/problems/authentication-required",
  "title": "Authentication Required",
  "status": 401,
  "detail": "Authorization header is missing or invalid",
  "instance": "/orders"
}
```

**Explanation**

- Clear semantic meaning
- Safe error detail
- Standard format reused

## Resource Not Found Example

```
HTTP/1.1 404 Not Found
Content-Type: application/problem+json
```

```json
{
  "type": "https://api.example.com/problems/resource-not-found",
  "title": "Resource Not Found",
  "status": 404,
  "detail": "User with ID 9999 does not exist",
  "instance": "/users/9999"
}
```

## Client-Side Handling Example

Why Clients Love RFC 7807

```ts
if (response.status === 422) {
  if (problem.type.endsWith("validation-error")) {
    displayFieldErrors(problem.errors);
  }
}
```

- Clients rely on `type`, not message text
- Messages can be localized later
- Less brittle error handling

## RFC 7807 vs Custom Error Format

| Aspect         | RFC 7807 | Custom |
| -------------- | -------- | ------ |
| Standardized   | ✅       | ❌     |
| Interoperable  | ✅       | ❌     |
| Extensible     | ✅       | ✅     |
| Learning curve | Low      | Medium |
| Tool support   | High     | Low    |
