RAML is a YAML-based language for describing REST APIs with a strong emphasis on:

- Reusability
- Modularity
- Design-first approach

Developed by MuleSoft.

## Role in Documentation & Discoverability

### Documentation

RAML provides:

- Highly structured API descriptions
- Automatic documentation generation
- Consistent API modeling

### Discoverability

RAML improves discoverability through:

- Clear resource hierarchy
- Reusable traits and resource types
- Consistent patterns across APIs

> RAML is ideal for large, enterprise APIs.

## Key Concepts in RAML

| Concept        | Description                           |
| -------------- | ------------------------------------- |
| Resources      | URI paths                             |
| Methods        | HTTP verbs                            |
| Traits         | Reusable behaviors (e.g., pagination) |
| Resource Types | Templates for endpoints               |
| Data Types     | Schema definitions                    |

## RAML Example

Example: User Management API

```yaml
#%RAML 1.0
title: User Management API
version: v1
baseUri: https://api.example.com/{version}

types:
  User:
    type: object
    properties:
      id: number
      name: string
      email: string

/users:
  get:
    description: Get all users
    responses:
      200:
        body:
          application/json:
            type: User[]
  post:
    description: Create a new user
    body:
      application/json:
        type: object
        properties:
          name: string
          email: string
    responses:
      201:
        body:
          application/json:
            type: User

/users/{id}:
  uriParameters:
    id:
      type: number
      description: User ID
  get:
    description: Get user by ID
    responses:
      200:
        body:
          application/json:
            type: User
      404:
        description: User not found
```

- Header (`#%RAML 1.0`) Specifies the RAML version.
- API Metadata
  ```yaml
  title:
  version:
  baseUri:
  ```
  Provides API identity and versioning.
- Types

  ```yaml
  types:
    User:
  ```

  Reusable schema definitions improve:

  - Consistency
  - Discoverability
  - Maintainability

- Resources & Methods

      ```yaml
      /users:
        get:
        post:
      ```

  Hierarchical resource modeling reflects REST structure.

- Responses
  ```yaml
  responses:
    200:
    404:
  ```

Explicit response definitions clarify behavior.

## API Blueprint vs RAML
| Feature         | API Blueprint  | RAML              |
| --------------- | -------------- | ----------------- |
| Format          | Markdown-based | YAML-based        |
| Readability     | Very high      | High              |
| Tooling         | Apiary         | MuleSoft Anypoint |
| Reusability     | Limited        | Strong            |
| Discoverability | Example-driven | Structure-driven  |
| Validation      | Lightweight    | Strong            |

## When to Use Which?
**Use API Blueprint if:**

- You want human-friendly documentation
- API is small to medium
- Tutorial-style docs matter

**Use RAML if:**

- You build large or enterprise APIs
- Reusability & consistency are critical
- You use MuleSoft ecosystem
