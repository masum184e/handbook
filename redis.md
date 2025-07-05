# Introduction

Redis (Remote Dictionary Server) is an open-source, in-memory data structure store, used as a database, cache, and message broker. It supports various data structures such as strings, hashes, lists, sets, sorted sets, bitmaps, hyperloglogs, and geospatial indexes, along with streaming and pub/sub messaging.

## Features

| Feature                  | Description                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------- |
| In-memory storage        | Data is stored in RAM, making reads/writes extremely fast.                          |
| Persistence              | Optionally saves data to disk via RDB snapshots or AOF logs.                        |
| Data structures          | Beyond simple key-value, supports rich types like lists, sets, and hashes.          |
| Pub/Sub messaging        | Enables event-driven applications with publish/subscribe channels.                  |
| Atomic operations        | All operations in Redis are atomic, meaning no race conditions.                     |
| Lua scripting            | Supports server-side scripting for complex operations.                              |
| Replication & Clustering | Redis supports master-slave replication and automatic partitioning for scalability. |

## Example

```shell
npm install redis
```

Create a file `server.js`

```js
const express = require("express");
const redis = require("redis");

const app = express();
const port = 3000;

// Create Redis client
const client = redis.createClient(); // default localhost:6379

// Handle Redis connection errors
client.on("error", (err) => {
  console.error("Redis error:", err);
});

// Simulate an expensive data source
function getExpensiveData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🚀 Expensive Data at " + new Date().toLocaleTimeString());
    }, 2000); // Simulate 2 seconds delay
  });
}

// Route with Redis caching
app.get("/data", async (req, res) => {
  const cacheKey = "expensive:data";

  client.get(cacheKey, async (err, data) => {
    if (err) throw err;

    if (data) {
      // Return from cache
      res.send({
        source: "cache",
        data: data,
      });
    } else {
      // Fetch fresh data and cache it
      const freshData = await getExpensiveData();
      client.setex(cacheKey, 10, freshData); // store with 10 seconds TTL
      res.send({
        source: "server",
        data: freshData,
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```
