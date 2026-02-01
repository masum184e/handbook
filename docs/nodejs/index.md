- `async/await` ensures the server doesn’t start before the specified function

## MongoDB

- `const client = new MongoClient(url);`: This object manages the connection pool and communication with MongoDB.
- `await client.connect();` - Establishes a connection to the MongoDB server. Uses `async`/`await` because network calls are asynchronous
- MongoDB creates the database automatically if it doesn’t exist. No explicit “CREATE DATABASE” command
- Collection also created automatically when first used
- `findOne` returns the first matching document, if no match it return `null`

### Reusable Database Connection

```js
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "shopDB";

let client;
let db;

async function connectDB() {
  try {
    if (!client) {
      client = new MongoClient(url);
      await client.connect();
      console.log("MongoDB connected");
    }

    if (!db) {
      db = client.db(dbName);
    }

    return db;
  } catch (error) {
    console.error("Database connection failed:", error.message);
    throw error;
  }
}

module.exports = connectDB;
```

- Ensures only one MongoDB connection
- Prevents reconnecting on every request  
  Lazy connection initialization

```js
if (!client) {
  client = new MongoClient(url);
  await client.connect();
}
```

- Connects only once
- Reuses connection afterward

Use the connections

```js
const db = await connectDB();
const products = await db.collection("products").find().toArray();
console.log(products);
```

### Graceful shutdown (important for production)

```js
process.on("SIGINT", async () => {
  if (client) {
    await client.close();
    console.log("MongoDB connection closed");
  }
  process.exit(0);
});
```

Why this matters

- Prevents corrupted connections
- Ensures clean app termination

## Question

1. What happen when db called after server connection
