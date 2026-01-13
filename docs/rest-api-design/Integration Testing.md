Integration testing verifies that multiple components of a REST API work together correctly as a complete system.


## What Should Be Tested in Integration Testing
| Area           | Description                |
| -------------- | -------------------------- |
| Routing        | Correct endpoint mapping   |
| Middleware     | Auth, validation, logging  |
| Database       | CRUD operations            |
| Error Handling | End-to-end error responses |
| Serialization  | JSON ↔ object mapping      |
| HTTP Contracts | Headers, status codes      |


## Example Scenario
REST API Endpint: `POST /api/users`

**Flow Under Test**

```
HTTP Request
   ↓
Controller
   ↓
Validation Middleware
   ↓
Service Layer
   ↓
Database
   ↓
HTTP Response
```

**Implementation Example**

```ts
// user.integration.test.js
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./app');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/testdb');
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
});

describe("POST /api/users", () => {

  it("should create a user in the database", async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: "Alice", email: "alice@test.com" });

    expect(response.statusCode).toBe(201);
    expect(response.body.email).toBe("alice@test.com");
  });

});
```