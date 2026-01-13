API Blueprint is a markdown-based API description language designed to document REST APIs in a human-readable and machine-parsable format.

- Created by Apiary
- Uses Markdown + structured syntax
- Emphasizes design-first API development
- Strong focus on clear documentation and discoverability

## Role in Documentation & Discoverability

### Documentation

API Blueprint acts as:

- Executable documentation
- Living reference for API behavior
- A readable contract between frontend and backend teams

Features:

- Clear endpoint descriptions
- Request/response examples
- Status codes and headers
- Markdown readability

### Discoverability

Developers can:

- Read API docs like a tutorial
- Understand API usage through examples
- Discover endpoints without tooling knowledge

> API Blueprint prioritizes clarity for humans first, machines second.

## Key Concepts in API Blueprint

| Concept         | Description                   |
| --------------- | ----------------------------- |
| Resource        | API endpoint (e.g., `/users`) |
| Action          | HTTP method (GET, POST)       |
| Request         | Request payload               |
| Response        | Response payload              |
| Data Structures | Reusable models               |

## API Blueprint Example

Example: User Management API

API Blueprint Document

```apib
FORMAT: 1A
HOST: https://api.example.com/v1

# User Management API

API for managing users.

## Users Collection [/users]

### List all users [GET]

Returns a list of all users.

+ Response 200 (application/json)

        [
          {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com"
          }
        ]

### Create a new user [POST]

Creates a new user.

+ Request (application/json)

        {
          "name": "Jane Doe",
          "email": "jane@example.com"
        }

+ Response 201 (application/json)

        {
          "id": 2,
          "name": "Jane Doe",
          "email": "jane@example.com"
        }

## User [/users/{id}]

+ Parameters
    + id: 1 (number) - Unique user ID

### Get user by ID [GET]

Returns a single user.

+ Response 200 (application/json)

        {
          "id": 1,
          "name": "John Doe",
          "email": "john@example.com"
        }

+ Response 404

        User not found
```

## Explanation of API Blueprint Sections

FORMAT & HOST

```
FORMAT: 1A
HOST: https://api.example.com/v1
```

Defines the API Blueprint version and base URL.

**Resource Grouping**

```
## Users Collection [/users]
```

- Defines a resource
- Improves logical discoverability

**Actions**

```
### List all users [GET]
```

- Action name + HTTP method
- Natural language description

**Requests & Responses**

```
+ Request (application/json)
+ Response 200 (application/json)
```

- Clear examples
- No ambiguity for consumers

## Strengths & Limitations of API Blueprint

**Strengths**

- Extremely readable
- Markdown-friendly
- Great for tutorials
- Excellent discoverability

**Limitations**

- Less strict validation
- Smaller ecosystem
- Limited tooling compared to OpenAPI
