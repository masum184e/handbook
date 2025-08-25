# Contents

- [Introduction](#introduction)
  - [Features](#features)
- [Windows Subsystem for Linux](#windows-subsystem-for-linux)
  - [Key Features of WSL](#key-features-of-wsl)
  - [Installing WSL](#installing-wsl)
  - [Basic Usage Examples of WSL](#basic-usage-examples-of-wsl)
  - [WSL for Development](#wsl-for-development)
- [Installation](#installation)
- [Most Common Commands](#most-common-commands)
  - [Key Management](#key-management)
  - [String Commands](#string-commands)
  - [Hash Commands](#hash-commands)
  - [List Commands](#list-commands)
  - [Set Commands](#set-commands)
  - [Sorted Set (ZSet) Commands](#sorted-set-zset-commands)
  - [Pub/Sub Commands](#pubsub-commands)
  - [Server/Utility Commands](#serverutility-commands)
- [Pub/Sub](#pubsub)
  - [Key Concepts](#key-concepts)
  - [Example](#example)
    - [Terminal 2: Subscriber](#terminal-1-subscriber)
    - [Terminal 2: Publisher](#terminal-2-publisher)
  - [Pattern Subscription](#pattern-subscription)
- [Node.js Example](#nodejs-example)

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

# Windows Subsystem for Linux

WSL (Windows Subsystem for Linux) is a compatibility layer developed by Microsoft that allows you to run a GNU/Linux environment (like Ubuntu, Debian, Kali, etc.) directly on Windows, without needing a virtual machine (VM) or dual-boot setup.

It lets developers and system admins use Linux tools (like `bash`, `grep`, `sed`, `awk`, etc.) alongside their Windows apps.

## Key Features of WSL

1. Run Linux inside Windows – Access Linux terminal and tools directly from Windows.
2. No Virtual Machine overhead – Unlike VMware or VirtualBox, WSL is lightweight and efficient.
3. Direct file access – You can access Windows files from Linux and vice versa.

   - From Linux: `/mnt/c/Users/...`
   - From Windows: `\\wsl$\<distro_name>`

4. Supports Linux commands & software – You can install software via `apt`, `dnf`, or other Linux package managers.
5. Interoperability – Run Linux commands inside Windows and Windows executables inside Linux (`explorer.exe`, `notepad.exe`).
6. Two Versions:

   - WSL 1 → Uses a translation layer, slower for I/O.
   - WSL 2 → Uses a lightweight virtualized Linux kernel, faster, supports Docker & full system calls.

## Installing WSL

Search `Windows feature on or off` in the search bar and enable `Windows subsystem for linux` and `Virtual Machine Platform`

### Step 1: Enable WSL

Open PowerShell as Administrator and run:

```bash
wsl --install
```

This installs the latest version of WSL (by default WSL 2) with Ubuntu.

### Step 2: Check installed distributions

```bash
wsl --list --verbose
```

Example Output:

```bash
  NAME      STATE           VERSION
* Ubuntu    Running         2
```

### Step 3: Launch Linux

From PowerShell or CMD:

```bash
wsl
```

Or open Ubuntu from Start Menu.

## Basic Usage Examples of WSL

### 1. Running Linux Commands

Inside WSL terminal:

```bash
ls -la
pwd
uname -r
```

- `ls -la` → lists files with details
- `pwd` → prints current directory
- `uname` -r → shows Linux kernel version

### 2. Accessing Windows Files from Linux

```bash
cd /mnt/c/Users/YourName/Desktop
ls
```

This shows your Windows Desktop files from Linux.

### 3. Accessing Linux Files from Windows

In Windows Explorer, type:

```bash
\\wsl$\Ubuntu\home\your_username
```

This opens your Linux home directory from Windows.

### 4. Running Windows Programs inside Linux

```bash
notepad.exe myfile.txt
explorer.exe .
```

- Opens `myfile.txt` in Notepad (Windows).
- Opens current Linux directory in Windows File Explorer.

### 5. Installing Linux Packages

Example: Installing Git and Node.js in WSL:

```
sudo apt update
sudo apt install git nodejs -y
```

## WSL for Development

Suppose you are a web developer:

1. Install Ubuntu with WSL:

```bash
wsl --install -d Ubuntu
```

`wsl -l -o` return all the available distrubution 2. Inside Ubuntu, install Nginx and start server:

```
sudo apt update
sudo apt install nginx -y
sudo service nginx start
```

3. Open browser in Windows → visit `http://localhost` → Nginx welcome page appears (because WSL shares the same network).

This allows you to develop Linux-based applications directly from Windows.

# Installation

1. Open **PowerShell** (or CMD) and install Ubuntu:

   ```bash
   wsl --install -d Ubuntu
   ```

   Or if already installed:

   ```bash
   wsl -d Ubuntu
   ```

2. Once **inside Ubuntu** (real WSL, not Docker shell), run your Redis setup:

   ```bash
   sudo apt update
   sudo apt install -y curl gnupg
   curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
   ```

3. Start Redis service:

   ```bash
   sudo service redis-server start
   ```

4. Check if Redis is running:

   ```
   sudo service redis-server status
   ```

5. Test Redis CLI

   ```bash
   redis-cli ping
   ```

# Most Common Commands

## Key Management

| Command              | Description                                        |
| -------------------- | -------------------------------------------------- |
| `SET key value`      | Set a key to hold a string value.                  |
| `GET key`            | Get the value of a key.                            |
| `DEL key`            | Delete a key.                                      |
| `EXISTS key`         | Check if a key exists.                             |
| `EXPIRE key seconds` | Set a timeout on a key.                            |
| `TTL key`            | Get the remaining time to live of a key.           |
| `KEYS pattern`       | Find all keys matching a pattern (e.g., `user:*`). |
| `TYPE key`           | Determine the type stored at key.                  |

## String Commands

| Command                        | Description                             |
| ------------------------------ | --------------------------------------- |
| `APPEND key value`             | Append a value to a string key.         |
| `INCR key`                     | Increment a key's integer value by one. |
| `DECR key`                     | Decrement a key's integer value by one. |
| `MGET key1 key2`               | Get values of multiple keys.            |
| `MSET key1 value1 key2 value2` | Set multiple keys at once.              |

## Hash Commands

| Command                       | Description                                                       |
| ----------------------------- | ----------------------------------------------------------------- |
| `HSET key field value`        | Set the value of a hash field.                                    |
| `HGET key field`              | Get the value of a hash field.                                    |
| `HMSET key field1 value1 ...` | Set multiple fields in a hash. _(Deprecated, use `HSET` instead)_ |
| `HGETALL key`                 | Get all fields and values in a hash.                              |
| `HDEL key field`              | Delete one or more hash fields.                                   |
| `HEXISTS key field`           | Determine if a hash field exists.                                 |

- `field`: the field inside the hash to set

If you want to set multiple fields at once, you can do:

```bash
HSET name firstName masum lastName billah
```

## List Commands

| Command                 | Description                           |
| ----------------------- | ------------------------------------- |
| `LPUSH key value`       | Insert value at the head of the list. |
| `RPUSH key value`       | Insert value at the tail of the list. |
| `LPOP key`              | Remove and get the first element.     |
| `RPOP key`              | Remove and get the last element.      |
| `LRANGE key start stop` | Get elements between two indices.     |
| `LLEN key`              | Get the length of the list.           |

## Set Commands

| Command                | Description                            |
| ---------------------- | -------------------------------------- |
| `SADD key member`      | Add one or more members to a set.      |
| `SMEMBERS key`         | Get all members of a set.              |
| `SREM key member`      | Remove one or more members from a set. |
| `SISMEMBER key member` | Check if a member exists in the set.   |
| `SCARD key`            | Get the number of members.             |

## Sorted Set (ZSet) Commands

| Command                     | Description                    |
| --------------------------- | ------------------------------ |
| `ZADD key score member`     | Add a member with a score.     |
| `ZRANGE key start stop`     | Get members by index range.    |
| `ZRANGEBYSCORE key min max` | Get members by score range.    |
| `ZREM key member`           | Remove member from sorted set. |
| `ZCARD key`                 | Get number of members.         |

## Pub/Sub Commands

| Command                   | Description                  |
| ------------------------- | ---------------------------- |
| `PUBLISH channel message` | Post a message to a channel. |
| `SUBSCRIBE channel`       | Subscribe to a channel.      |
| `UNSUBSCRIBE channel`     | Unsubscribe from a channel.  |

## Server/Utility Commands

| Command    | Description                                           |
| ---------- | ----------------------------------------------------- |
| `PING`     | Test connection.                                      |
| `INFO`     | Get information about the server.                     |
| `FLUSHALL` | Delete all keys in all databases.                     |
| `FLUSHDB`  | Delete all keys in the current DB.                    |
| `MONITOR`  | See all requests received by the server in real time. |

# Pub/Sub

Redis Pub/Sub (Publish/Subscribe) is a messaging paradigm where:

- Senders (called publishers) send messages to channels.
- Receivers (called subscribers) listen to channels and receive messages in real time.

This is asynchronous, fire-and-forget messaging. Messages are not stored in Redis — they are only delivered to currently active subscribers.

## Key Concepts

| Term          | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| `PUBLISH`     | Sends a message to a channel.                               |
| `SUBSCRIBE`   | Listens for messages on a channel.                          |
| `UNSUBSCRIBE` | Stops listening to a channel.                               |
| `PSUBSCRIBE`  | Subscribe to channel(s) using pattern matching.             |
| `PUBSUB`      | Inspect the state of Pub/Sub (like list of channels, etc.). |

## Example

Let's simulate a basic chat system using Redis Pub/Sub.
**Step-by-step in Redis CLI**

### Terminal 1: Subscriber

```bash
SUBSCRIBE chatroom
```

Output

```s
Reading messages... (blocking)

1) "message"
2) "chatroom"
3) "Hello, world!"
```

Terminal 1 is now listening for all messages on the `chatroom` channel.

### Terminal 2: Publisher

```bash
PUBLISH chatroom "Hello, world!"
```

Output:

```bash
(integer) 1
```

It means 1 subscriber received the message.

### Explanation

- The subscriber was already listening on chatroom.
- When the publisher sent "Hello, world!" to chatroom, Redis delivered it instantly.
- If no subscribers are listening, the message is discarded.

## Pattern Subscription

Use PSUBSCRIBE to match multiple channels:

```bash
PSUBSCRIBE chat*
```

Will match: `chatroom`, `chat_general`, `chat123`, etc.

# Node.js Example

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

# Authentication and Authorization

Authentication and authorization using Redis is not built-in like it is in full-fledged identity providers (e.g., Auth0, Firebase Auth, or Keycloak), but Redis can be used to support or enhance these processes due to its high-speed in-memory nature

# Transactions

A Redis transaction allows you to group multiple commands into a single, atomic operation. That means either all commands execute or none do—but not partially.

Redis transactions use three main commands:

- `MULTI` – Start the transaction
- `EXEC` – Execute the queued commands
- `DISCARD` – Cancel the transaction

Redis does not support full rollback like relational databases. If one command fails (e.g., syntax error), other commands still execute.

## Key Concepts of Transactions

| Concept                | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| **Atomicity**          | All commands in a transaction are executed in a single step. |
| **Command queueing**   | Commands are queued after `MULTI` and executed on `EXEC`.    |
| **Optimistic Locking** | Redis supports conditional execution using `WATCH`.          |

## Basic Transaction Flow

- `MULTI` starts a transaction block.
- Commands are queued.
- `EXEC` executes the queue.
- `DISCARD` cancels the transaction (optional).

## Example of Transactions

Imagine you have two Redis keys representing user balances:

```bash
SET user:1:balance 100
SET user:2:balance 50
```

You want to transfer $30 from `user:1` to `user:2`.

**Without Transaction:**

If process crashes halfway between `DECRBY` and `INCRBY`, the data becomes inconsistent.

**With Redis Transaction:**

```bash
MULTI
DECRBY user:1:balance 30     # deduct $30 from user 1
INCRBY user:2:balance 30     # add $30 to user 2
EXEC
```

All operations will be applied atomically.
