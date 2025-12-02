# Contents

- [Introduction](#introduction)
  - [Features](#features)
  - [Why Storing Data in RAM are Fast](#why-storing-data-in-ram-are-fast)
  - [Architecture](#architecture)
    - [Single Threaded Model](#single-threaded-model)
    - [Event Loop](#event-loop)
    - [How it works step by step](#how-it-works-step-by-step)
    - [Why Single-Threaded but Still Fast?](#why-single-threaded-but-still-fast)
    - [Example Workflow](#example-workflow)
- [Windows Subsystem for Linux](#windows-subsystem-for-linux)
  - [Key Features of WSL](#key-features-of-wsl)
  - [Installing WSL](#installing-wsl)
  - [Basic Usage Examples of WSL](#basic-usage-examples-of-wsl)
  - [WSL for Development](#wsl-for-development)
  - [Why we need to install Redis](#why-we-need-to-install-redis)
- [Installation](#installation)
  - [Installing Redis in Local](#installing-redis-in-local)
  - [Installing Redis with Docker](#installing-redis-with-docker)
- [Redis CLI](#redis-cli)
  - [Redis CLI Configuration](#redis-cli-configuration)
  - [Redis `redis.conf` File](#redis-redisconf-file)
- [Most Common Commands](#most-common-commands)
  - [Key](#key-commands)
  - [String](#string-commands)
  - [Hash](#hash-commands)
  - [List](#list-commands)
  - [Set](#set-commands)
  - [ZSet](#sorted-set-zset-commands)
  - [Pub/Sub](#pubsub-commands)
  - [Server/Utility](#serverutility-commands)
- [Key Management](#key-management)
  - [Key expiration](#key-expiration)
    - [`EXPIRE`](#expire)
    - [`TTL`](#ttl)
    - [`PERSIST`](#persist)
  - [Pattern matching](#pattern-matching)
    - [KEYS](#keys)
    - [SCAN](#scan)
  - [Key naming conventions](#key-naming-conventions)
  - [Deleting data](#deleting-data)
    - [DEL](#del)
    - [UNLINK](#unlink)
- [Persistence & Durability](#persistence--durability)
  - [Redis Database Backup](#redis-database-backup)
    - [How RDB Works](#how-rdb-works)
    - [Configuring RDB in `redis.conf`](#configuring-rdb-in-redisconf)
    - [Performance Considerations](#performance-considerations)
  - [Append Only File](#append-only-file)
    - [Configuring AOF](#configuring-aof-in-redisconf)
    - [Recovery with AOF](#recovery-with-aof)
    - [Commands for Managing AOF](#commands-for-managing-aof)
  - [Hybrid Persistence](#hybrid-persistence)
    - [How It Works](#how-hybrid-persistence-works)
    - [Configuring Hybrid Persistence](#configuring-hybrid-persistence)
    - [Check AOF File](#check-aof-file)
  - [Backup & Restore Strategies](#backup--restore-strategies)
    - [Restore from RDB](#restore-from-rdb)
    - [Restore from AOF](#restore-from-aof)
    - [Restore from Hybrid Persistence](#restore-from-hybrid-persistence)
- [Pub/Sub](#pubsub)
  - [Subscriber](#terminal-1-subscriber)
  - [Publisher](#terminal-2-publisher)
  - [Pattern Subscription](#pattern-subscription)
- [Transactions](#transactions--atomicity)
  - [MULTI, EXEC, DISCARD, WATCH](#multi-exec-discard-watch)
  - [Optimistic Locking](#optimistic-locking)
  - [Atomicity](#ensuring-atomic-operations)
- [Replication](#replication)
  - [Master-Slave replication](#master-slave-replication)
  - [Read Replicas](#read-replicas-in-redis)
  - [Redis Sentinel for Failover](#redis-sentinel-for-failover)
  - [Redis Cluster](#redis-cluster)
- [Security](#security)
  - [Redis AUTH](#redis-auth)
  - [Redis ACLs](#redis-acls-access-control-lists)
  - [Network-level security](#network-level-security)
  - [Private Network](#private-network)

# Introduction

Redis stands for Remote DIctionary Server.
It is an open-source, in-memory data structure store that can be used as:

1. Database (stores data in memory with optional persistence to disk)
2. Cache (fast retrieval of frequently accessed data)
3. Message broker (publish/subscribe, streaming, and queueing system)

Redis is known for speed because it stores data in RAM instead of slower disk storage. It can perform hundreds of thousands of operations per second.

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

## Why Storing Data in RAM are Fast

### Core Reason: Physical Design

| Component          | Made Of                                             | How It Works                                                         | Speed                                        |
| ------------------ | --------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------- |
| **RAM (Memory)**   | Tiny electronic circuits (transistors & capacitors) | Stores bits as _electric charges_ directly accessible by the CPU     | ⚡ Nanoseconds (10⁻⁹ sec)                    |
| **Disk (Storage)** | Moving parts (HDD) or flash cells (SSD)             | Data must be _located, read, and transferred_ through several layers | 🐢 Microseconds–milliseconds (10⁻⁶–10⁻³ sec) |

**In simple terms:**

- RAM is electronic: data is stored in active circuits the CPU can access instantly.
- Disk is mechanical (in HDDs) or block-based (in SSDs), requiring extra steps to find and read data.

### Different Access Path

#### RAM

```
CPU → Memory Controller → RAM chip → Data returned
```

- Data is fetched directly from memory chips sitting right beside the CPU.
- No moving parts, no searching, no delays.

### Disk

```
CPU → OS → File System → Storage Controller → Disk → Locate file block → Read data → Return
```

- The CPU must ask the OS, which must find the file, then the disk driver must locate the block, and finally read it.
- Even SSDs, while fast, involve these multiple layers.

## Architecture

Redis is designed to be lightweight, simple, and blazing fast. Its architecture is centered around a single-threaded model and an event loop.

### Single Threaded Model

Redis runs on a single main thread for executing commands.

- This means one command is executed at a time.
- No context-switching overhead like in multi-threaded systems.
- Simpler design → avoids race conditions and locks.
- Extremely fast because operations are done in memory.

Even though Redis is single-threaded for command execution, it can still handle hundreds of thousands of requests per second because most operations are O(1) (constant time).

**Example:**

If two clients send commands:

1. Client A: `SET user:1 "Masum"`
2. Client B: `GET user:1`

Redis processes them one after another in sequence (not simultaneously).
So the output is deterministic and no data corruption occurs.

### Event Loop

Redis uses an event-driven architecture based on an event loop.

- The event loop listens for incoming connections, commands, and responses.
- Uses epoll (Linux), kqueue (BSD/Mac), or select/poll (older systems) for efficient I/O multiplexing.
- Allows Redis to manage thousands of client connections concurrently without spawning multiple threads.

Redis doesn’t block while waiting for I/O. Instead, it registers events and processes them asynchronously.

### How it works step by step

1. Clients send requests (commands).
2. The event loop listens and queues requests.
3. Redis processes commands sequentially (single-threaded execution).
4. Responses are sent back to clients.
5. Event loop continues without blocking.

### Why Single-Threaded but Still Fast?

- Data stored in RAM → super fast access.
- Operations are simple (like SET, GET, INCR) → most are O(1).
- No overhead of locks or thread synchronization.
- Network I/O handled efficiently with non-blocking event loop.

That’s why Redis can easily achieve >100,000 operations per second on normal hardware.

### Example Workflow

1. Client Request 1: `SET session:101 "Masum" EX 60`. Stores a session with 60-second expiry.
2. Client Request 2 (immediately after): `GET session:101`. Returns "Masum" instantly.
3. Event Loop Handling:

   - Event loop receives both requests.
   - Adds them to the queue.
   - Processes `SET` first, then `GET`.
   - Since it’s sequential, there’s no risk that `GET` runs before `SET`.

This guarantees consistency and simplicity, even with thousands of concurrent clients.

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

## Why we need to install Redis

Redis was originally built for Linux/Unix systems, not Windows. While there used to be a Windows port years ago, it’s no longer officially maintained. That’s why, on Windows 10 or 11, the easiest and most reliable way to run Redis is through Linux — and that’s exactly what WSL provides.

# Installation

## Installing Redis in Local

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

## Installing Redis with Docker

Using Docker is often easier because Redis runs in an isolated container.

```bash
docker run --name redis-server -d -p 6379:6379 redis
```

- `--name redis-server` → container name
- `-d` → detached mode (run in background)
- `-p 6379:6379` → maps Redis default port to local machine

**Connect to Redis Container:**

```bash
docker exec -it redis-server redis-cli
>>SET product:5001 "Laptop"
>>GET product:5001
```

# Redis CLI

- `redis-cli` is the command-line interface for interacting with a Redis server.
- It allows you to send commands, configure settings, and test data operations.
- By default, it connects to:
  - Host: `127.0.0.1` (localhost)
  - Port: `6379` (default Redis port)

## Redis CLI Configuration

You can connect with options:

- Specify host & port

```bash
docker exec -it redis-server redis-cli -h 127.0.0.1 -p 6379
```

- With authentication (if Redis has a password)

```bash
docker exec -it redis-server redis-cli -a mypassword
```

- Run a single command without entering interactive mode

```bash
docker exec -it redis-server redis-cli PING
```

## Redis `redis.conf` File

The `redis.conf` file is the main configuration file for Redis.

- When Redis starts, it reads this file to load settings.
- By default, it’s located in `/etc/redis/redis.conf` (Linux) or inside the Redis source folder.

Docker container does not include a `redis.conf` file by default.

1. Create a folder on your host(project): `mkdir redis-config`
2. Download a `redis.conf` template: `curl -o redis-config/redis.conf https://raw.githubusercontent.com/redis/redis/7.0/redis.conf`
3. Use `redis.conf` in Docker container

   ```shell
   docker stop redis-server
   docker rm redis-server

   docker run -d ^
     --name redis-server ^
     -p 6379:6379 ^
     -v "%cd%\redis-config\redis.conf":/usr/local/etc/redis/redis.conf ^
     redis redis-server /usr/local/etc/redis/redis.conf
   ```

If no config is given, Redis starts with default settings

### Main Sections of `redis.conf`

Here are the most important settings you’ll encounter in `redis.conf`:

1. General Settings

   - Daemonize (background mode): `daemonize yes`

     - yes → Redis runs in the background.
     - no → Redis runs in the foreground (useful for debugging).

   - PID file (process ID storage): `pidfile /var/run/redis/redis-server.pid`

2. Networking

   - Port Redis listens on `port 6379`, Default is 6379. You can change it if needed.
   - Bind address: `bind 127.0.0.1`, Redis will only accept connections from localhost.
   - If you want to allow external access: `bind 0.0.0.0`. But for security, you must add a password (see below).

3. Security

   - Require password for clients: `requirepass myStrongPassword`
   - After setting this, every client must authenticate: `redis-cli -a myStrongPassword`

4. Persistence (Saving Data)

   Redis stores data in memory, but persistence ensures data is saved to disk.

   - RDB snapshots (point-in-time saves):

     ```bash
     save 900 1   # Save if at least 1 key changed in 900 seconds (15 min)
     save 300 10  # Save if at least 10 keys changed in 300 seconds (5 min)
     save 60 10000 # Save if 10000 keys changed in 60 seconds
     ```

   - AOF (Append-Only File) logging:

     ```bash
     appendonly yes
     appendfsync everysec
     ```

     - Keeps a log of all write operations.
     - `everysec` → syncs data every second (good balance between performance and safety).

5. Memory Management

   - Maximum memory limit:

     ```bash
     maxmemory 256mb
     ```

   - Redis will not use more than 256 MB RAM.
   - Eviction policy (when memory is full):

     ```bash
     maxmemory-policy allkeys-lru
     ```

     Options:

     - `noeviction` → return error when memory full.
     - `allkeys-lru` → remove least recently used keys.
     - `volatile-lru` → remove LRU keys with TTL set.

6. Logging

   - Log level:

     ```bash
     loglevel notice
     ```

     Options: debug, verbose, notice, warning.

   - Log file path:

     ```bash
     logfile /var/log/redis/redis-server.log
     ```

7. Replication (Master/Replica setup)

   Make this Redis a replica of another:

   ```bash
   replicaof 192.168.1.100 6379
   ```

   This makes Redis sync data from the given master.

# Most Common Commands

## Key Commands

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

# Key Management

## Key expiration

- Redis allows you to set a time-to-live (TTL) on keys.
- After the TTL expires, the key is automatically deleted from Redis.
- This is useful for:
  - Caching temporary data
  - Session management
  - Limiting memory usage

The main commands are:

- `EXPIRE` → Set TTL on a key
- `TTL` → Check remaining time to live
- `PERSIST` → Remove TTL (make key permanent)

### `EXPIRE`

- Sets a time-to-live in seconds on a key.
- Alternative: `PEXPIRE` → TTL in milliseconds.

### `TTL`

- Returns the remaining time-to-live in seconds.
- Returns:
  - Positive integer → seconds remaining
  - `-1` → key exists but has no TTL (persistent)
  - `-2` → key does not exist

### `PERSIST`

Removes the TTL from a key, making it permanent.

```bash
SET temp:key "value"
EXPIRE temp:key 30
TTL temp:key
# Output: 30

PERSIST temp:key
TTL temp:key
# Output: -1
```

The key will no longer expire.

## Pattern matching

- Pattern matching allows you to find keys based on a pattern (like wildcards).

- Useful for operations like:

  - Cleaning up keys
  - Querying specific sets of keys
  - Debugging or monitoring

- Redis provides two main commands:
  - `KEYS` → returns all keys matching a pattern
  - `SCAN` → iteratively returns keys matching a pattern (safe for production)

### `KEYS`

Pattern supports wildcards:

- `*` → matches any number of characters
- `?` → matches exactly one character
- `[abc]` → matches one character in the set
- `[a-z]` → matches one character in range

  ```bash
  SET user:1 "Masum"
  SET user:2 "Billah"
  SET session:101 "active"

  KEYS user:*
  # Output:
  # 1) "user:1"
  # 2) "user:2"

  KEYS session:?
  # Output:
  # 1) "session:1"
  ```

- `KEYS` scans the entire keyspace.
- Not recommended in production if you have millions of keys → can block Redis.

### `SCAN`

Iterative key scanning command.

```bash
SCAN cursor [MATCH pattern] [COUNT count]
```

- `cursor` → iteration position (start with 0)
- `MATCH pattern` → optional, only return keys matching pattern
- `COUNT count` → optional, hints how many keys to return per call

### Key Differences: KEYS vs SCAN

| Feature     | KEYS                       | SCAN                        |
| ----------- | -------------------------- | --------------------------- |
| Blocking?   | Yes (blocks Redis)         | No (non-blocking)           |
| Pattern     | Yes                        | Yes                         |
| Use Case    | Small keyspaces, debugging | Production, large keyspaces |
| Return Type | All matching keys          | Partial keys + cursor       |

For production environments, always use SCAN instead of KEYS to avoid performance issues while performing pattern matching or key management tasks.

## Key naming conventions

### 1. Use Namespaces with Colons

- Use : to create logical namespaces.
- Format: `namespace:entity:id`

  ```bash
  user:101:name → "Masum"
  user:101:email → "masum@example.com"
  session:2021-09-01 → "active"
  cache:homepage → "<html>...</html>"
  ```

- Groups related keys together
- Simplifies pattern matching:

### 2. Be Descriptive but Concise

- Include meaningful information in the key.
- Avoid cryptic abbreviations unless widely understood.

  ```bash
  # Good
  cart:user:101:item:202 → quantity of item 202 in user 101's cart

  # Bad
  c:u101:i202 → hard to read
  ```

### 3. Avoid Using Spaces

- Redis keys cannot contain spaces reliably.
- Use `:` or `_` instead.

### 4. Keep Key Length Reasonable

Redis stores keys in memory → longer keys = more memory used.
Recommended: < 64 bytes if possible.

### 5. Use Consistent Case

- Use lowercase consistently to avoid confusion.
- Mixed-case keys can lead to mistakes:

  ```bash
  # Consistent
  user:101:profile

  # Inconsistent (bad)
  user:101:Profile
  ```

### 6. Use Suffixes for Type Clarity

Include type in key name when useful:

```bash
user:101:hash → hash type
user:101:list → list type
user:101:set → set type
```

Helps during debugging or migrations.

### 7. Use Versioning If Needed

For cached data or keys that may evolve:

```bash
cache:v1:homepage
cache:v2:homepage
```

Allows safe updates without overwriting existing data.

### 8. Avoid Special Characters

- Stick to letters, numbers, colons, underscores.
- Avoid \* `? [] { }` unless used intentionally for SCAN/KEYS patterns.

### Example of Well-Structured Keyspace

```bash
# User data
user:101:name → "Masum"
user:101:email → "masum@example.com"
user:101:cart → list of item IDs

# Sessions
session:101 → "active"
session:102 → "expired"

# Cache
cache:v1:homepage → HTML content
cache:v1:products → JSON list of products

# Counters
counter:logins:2025-09-04 → 120
counter:signups:2025-09-04 → 15
```

## Deleting data

- Redis allows you to delete one or more keys when they are no longer needed.
- Two main commands:
  1. `DEL` → Synchronous delete (blocking)
  2. `UNLINK` → Asynchronous delete (non-blocking)
- Choosing the right command is important for performance, especially in production with large datasets.

### `DEL`

- Deletes one or more keys immediately.
- Returns the number of keys actually deleted.

  ```bash
  DEL key [key ...]
  ```

- Synchronous: Redis frees memory immediately.
- Blocking: For large keys (like big hashes or lists), deletion can block other clients temporarily.

### `UNLINK`

```bash
UNLINK key [key ...]
```

- Deletes keys asynchronously:
  - Redis removes references immediately.
  - Actual memory freeing happens in background threads.

### Key Differences: `DEL` vs `UNLINK`

| Feature        | DEL                 | UNLINK                 |
| -------------- | ------------------- | ---------------------- |
| Operation      | Synchronous         | Asynchronous           |
| Blocking?      | Yes                 | No                     |
| Use Case       | Small keys, scripts | Large keys, production |
| Memory freeing | Immediate           | Background thread      |

**Summary**

| Command       | Operation Type             | Blocking | Use Case                             |
| ------------- | -------------------------- | -------- | ------------------------------------ |
| DEL           | Synchronous delete         | Yes      | Small keys, scripts                  |
| UNLINK        | Asynchronous delete        | No       | Large keys, production, non-blocking |
| SCAN + UNLINK | Iterative pattern deletion | No       | Safe bulk deletion of multiple keys  |

# Persistence & Durability

## Redis Database Backup

- RDB (Redis Database Backup) is one of the two main persistence mechanisms in Redis (the other is AOF).
- It works by taking point-in-time snapshots of your dataset and saving them to disk as a binary file (`dump.rdb`).
- These snapshots can later be loaded when Redis restarts → ensuring data durability.

Think of it like taking a photo of your data at specific intervals.

### How RDB Works

- When certain conditions are met, Redis forks a background process.
- This process writes the entire dataset from memory into an RDB file (`dump.rdb`).
- Redis keeps serving clients during this snapshot (thanks to forking).

### Configuring RDB in `redis.conf`

1. Automatic Snapshots

   Defined using save rules:

   ```bash
   save 900 1      # Snapshot if 1 key changed in 900 seconds (15 min)
   save 300 10     # Snapshot if 10 keys changed in 300 seconds (5 min)
   save 60 10000   # Snapshot if 10000 keys changed in 60 seconds
   ```

   - Format: `save <seconds> <changes>`
   - You can define multiple rules.
   - To disable RDB snapshots:

   ```bash
   save ""
   ```

2. RDB File Settings

   ```bash
   dbfilename dump.rdb        # Default snapshot file name
   dir /var/lib/redis/        # Directory to save RDB files
   ```

3. Manual Snapshots

   You can force snapshots with commands:

   - `SAVE` → Creates snapshot in main thread (blocks clients).
   - `BGSAVE` → Forks a background process (non-blocking, preferred).

   ```bash
   127.0.0.1:6379> BGSAVE
   Background saving started
   ```

   The file `dump.rdb` will be created in your Redis data directory.

### Performance Considerations

**Advantages of RDB**

- Compact binary format → good for backups & replication.
- Faster recovery time compared to AOF.
- Low overhead during normal operations (most work is done in background).

**Drawbacks**

- Data loss risk → since snapshots happen at intervals, any changes after the last snapshot may be lost if Redis crashes.
  (e.g., if snapshot every 5 minutes, and crash happens after 4 minutes, you lose last 4 minutes of data).
- Forking can be expensive for very large datasets (can cause CPU + memory spikes).

## Append Only File

- AOF (Append Only File) is a persistence method where every write operation Redis executes is logged to a file.
- Instead of taking snapshots (like RDB), Redis appends commands to a log file (`appendonly.aof`).
- On restart, Redis replays the log to rebuild the dataset.

Think of it as a black box recorder — every change is stored so nothing is lost.

### Configuring AOF in redis.conf

1. Enable AOF

   ```conf
   appendonly yes
   appendfilename "appendonly.aof"
   ```

2. Sync Policy (`appendfsync`)

   This controls how often Redis writes AOF changes to disk:

   ```conf
   appendfsync always      # Write every command to disk immediately (safest, slowest)
   appendfsync everysec    # Default: write once per second (good balance)
   appendfsync no          # Let OS decide when to flush (fastest, risky)
   ```

   Most production systems use `everysec`.

3. Rewrite Policy

   Since AOF keeps growing, Redis rewrites the log periodically to compact it.
   Settings:

   ```conf
   auto-aof-rewrite-percentage 100   # Rewrite when AOF file is 100% larger than last rewrite
   auto-aof-rewrite-min-size 64mb    # Minimum file size before rewriting
   ```

### Recovery with AOF

When Redis restarts:

1. It reads the AOF file.
2. Replays the commands one by one.
3. Reconstructs the dataset in memory.

This guarantees minimal data loss (at most 1 second if using `everysec`).

### Commands for Managing AOF

- Rewrite AOF manually: `BGREWRITEAOF`. Creates a new compact AOF file in the background.
- Check AOF status: `CONFIG GET appendonly`
- Enable AOF at runtime: `CONFIG SET appendonly yes`

## Hybrid Persistence

- Redis originally supported RDB (snapshots) and AOF (append-only file) separately.
- Since Redis 4.0, a hybrid persistence mode was introduced.
- It stores a binary RDB snapshot (fast to reload) plus AOF logs (for recent changes).

Think of it as:

- Take a photo (RDB) of the dataset → fast to recover.
- Record the video (AOF) of changes after that snapshot → durable with minimal data loss.

The combined persistence file is written to AOF.

### How Hybrid Persistence Works

1. Redis periodically creates RDB snapshots.
2. Instead of writing only commands to AOF, Redis writes:

   - The latest RDB snapshot (as binary dump).
   - Plus incremental AOF commands since that snapshot.

3. On restart, Redis:

   - Loads the RDB part (fast load).
   - Replays the AOF portion (ensures recent durability).

### Configuring Hybrid Persistence

In `redis.conf`, enable AOF persistence and allow RDB preamble:

```conf
appendonly yes
aof-use-rdb-preamble yes
appendfsync everysec
```

- `appendonly yes` → Enables AOF logging.
- `aof-use-rdb-preamble yes` → Hybrid persistence ON (default since Redis 4.0).
- `appendfsync everysec` → Sync once per second (balance durability + performance).

### Check AOF File

Open `appendonly.aof` → you’ll see it begins with an RDB binary block, followed by AOF commands:

```bash
<binary RDB data>
*3
$3
SET
$6
user:2
$6
Billah
```

The first part is RDB, the rest are AOF commands.

### Restart Redis

```bash
sudo systemctl restart redis-server
```

Redis reloads:

1. RDB portion (fast load of bulk data).
2. AOF portion (applies latest changes).

### Performance

**Advantages of Hybrid Persistence**

- Faster restart than pure AOF (thanks to RDB snapshot).
- More durable than pure RDB (thanks to AOF tail).
- Smaller AOF files (since bulk dataset is stored as RDB).

**Drawbacks**

- Slightly more complex than pure RDB or AOF.
- Still some performance overhead compared to RDB-only.

## Backup & Restore Strategies

### Restore from RDB

1. Stop Redis server:

```bash
sudo systemctl stop redis-server
```

2. Replace the current `dump.rdb` with your backup:

```bash
cp /backups/dump-2025-09-04.rdb /var/lib/redis/dump.rdb
```

3. Restart Redis:

```bash
sudo systemctl start redis-server
```

4. Verify:

```bash
redis-cli GET user:1
```

### Restore from AOF

1. Stop Redis:

```bash
sudo systemctl stop redis-server
```

2. Replace `appendonly.aof` with your backup:

```bash
cp /backups/appendonly-2025-09-04.aof /var/lib/redis/appendonly.aof
```

3. Restart Redis → Redis will replay all commands from AOF.

### Restore from Hybrid Persistence

1. Stop Redis.
2. Copy backup AOF (with RDB preamble) into place.
3. Restart Redis → it loads the RDB snapshot, then replays the AOF tail.

### Example Workflow of Backup

Backup (Daily RDB Backup with Cron)

```bash
0 2 * * * redis-cli BGSAVE && cp /var/lib/redis/dump.rdb /backups/dump-$(date +\%F).rdb
```

Runs every day at 2 AM.

Restore

```
sudo systemctl stop redis-server
cp /backups/dump-2025-09-04.rdb /var/lib/redis/dump.rdb
sudo systemctl start redis-server
```

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

1) "subscribe"
2) "chatroom"
3) "Hello, world!"
```

Terminal 1 is now listening for all messages on the `chatroom` channel.

| Index | What it represents                          | Meaning                                     |
| ----- | ------------------------------------------- | ------------------------------------------- |
| `1)`  | Event type                                  | `"subscribe"` = you subscribed to a channel |
| `2)`  | Channel name                                | `"chatroom"`                                |
| `3)`  | Number of channels you’re subscribed to now | `1`                                         |

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

Redis provides two kinds of subscriptions:

1. Direct subscriptions → using `SUBSCRIBE channel` (exact channel name).
2. Pattern-based subscriptions → using `PSUBSCRIBE pattern` (wildcard matching).

With `PSUBSCRIBE`, a client can subscribe to multiple channels at once using glob-style patterns `(*`, `?`, `[]`).

### How It Works

- A pattern is matched against channel names.
- When a `PUBLISH` command sends a message to a channel, Redis checks if the channel name matches any active patterns.
- If it matches, all pattern-subscribed clients receive the message, in addition to any direct subscribers.

### Supported Wildcards in Patterns

- `*` → matches zero or more characters.
  - Example: news.\* matches news.sports, news.politics.
- `?` → matches exactly one character.
  - Example: user.? matches user.1, user.a, but not user.10.
- `[]` → matches one character from the set.
  - Example: room[123] matches room1, room2, room3.

### Example Walkthrough

1. Subscribe with a Pattern

   In one terminal:

   ```bash
   redis-cli
   127.0.0.1:6379> PSUBSCRIBE news.*
   ```

   Output:

   ```bash
   Reading messages... (press Ctrl-C to quit)
   1) "psubscribe"
   2) "news.*"
   3) (integer) 1
   ```

2. Publish to Matching Channels

   In another terminal:

   ```bash
   127.0.0.1:6379> PUBLISH news.sports "Sports update: Redis is awesome!"
   (integer) 1

   127.0.0.1:6379> PUBLISH news.weather "Weather update: Sunny day!"
   (integer) 1
   ```

3. Subscriber Receives Messages

   Back in the subscriber terminal:

   ```bash
   1) "pmessage"
   2) "news.*"
   3) "news.sports"
   4) "Sports update: Redis is awesome!"

   1) "pmessage"
   2) "news.*"
   3) "news.weather"
   4) "Weather update: Sunny day!"
   ```

   - `pmessage` → type of message (pattern-based).
   - `news.*` → the pattern that matched.
   - `news.sports` → actual channel.
   - `"Sports update: Redis is awesome!"` → message content.

# Transactions & Atomicity

## MULTI, EXEC, DISCARD, WATCH

A transaction in Redis is a sequence of commands that are executed in order, as a single isolated operation.

- It ensures atomicity → either all commands execute or none do.
- Transactions in Redis use the commands:
  - `MULTI` → Start a transaction
  - `EXEC` → Execute the transaction
  - `DISCARD` → Cancel the transaction
  - `WATCH` → Watch keys for changes (optimistic locking)

### `MULTI`

- Marks the start of a transaction.
- After `MULTI`, commands are queued, not executed immediately.
- The queued commands will run only when `EXEC` is called.

```bash
MULTI
SET user:1 "Masum"
INCR counter
EXEC
```

- `MULTI` → starts transaction
- `SET` and `INCR` are queued
- `EXEC` → executes both in sequence
- Atomicity ensures that either both run successfully or none run

### `EXEC`

- Executes all commands queued after `MULTI`.
- If a command fails (like syntax error), only that command fails, but others run.
- The whole transaction is atomic from an isolation perspective → no other client’s command can interleave between them.

### `DISCARD`

- Cancels a transaction.
- Clears all commands queued after `MULTI`.

### `WATCH`

- Provides optimistic locking.
- You can `WATCH` one or more keys.
- If any watched key is modified by another client before `EXEC`, the transaction is aborted (returns `nil`).

Useful for implementing check-and-set (CAS) logic.

### Preventing Race Conditions with WATCH

Client A:

```bash
WATCH balance
val = GET balance   # suppose balance = 100
MULTI
SET balance 90      # deduct 10
EXEC
```

If Client B modifies `balance` before Client A executes `EXEC`:

```bash
SET balance 50
```

Then Client A’s `EXEC` will fail:

```bash
(nil)
```

- `WATCH` balance → monitors the `balance` key.
- Since another client modified it before `EXEC`, Redis aborts the transaction.
- This prevents race conditions (like double spending).

### Transaction Flow Summary

- `WATCH key1 key2` → (optional) watch keys for changes.
- `MULTI` → start transaction.
- `Queue` commands (`SET`, `INCR`, etc.).
- `EXEC` → execute transaction if watched keys unchanged.
  - If watched keys were modified → transaction aborts.
- `DISCARD` → cancel transaction manually if needed.

## Optimistic Locking

- Optimistic locking is a technique to handle concurrent updates safely without using traditional locks.
- In Redis, it is implemented via the `WATCH` command.
- The idea: “I hope no one else changes this key while I’m working on it.”
- If the key changes before the transaction executes, Redis aborts the transaction to prevent race conditions.

This is particularly useful in high-concurrency environments like counters, wallets, or stock management.

### How Optimistic Locking Works

1. WATCH keys → Redis monitors these keys.

2. Read the key(s) → get their current values.

3. MULTI → start a transaction and queue commands.
4. EXEC → attempt to execute transaction.

   - If any watched key changed since `WATCH`, transaction fails (returns `nil`).
   - Otherwise, all queued commands execute atomically.

Key point: Optimistic locking is non-blocking. Other clients can still read/write the key; your transaction simply aborts if conflict occurs.

### Bank Account Transfer

Imagine we want to deduct $10 from Alice’s balance safely, even if multiple clients try to modify it.

1. Setup: `SET balance:alice 100`
2. Safe Deduction Using WATCH

```bash
WATCH balance:alice         # Monitor the key

val = GET balance:alice      # Suppose val = 100
if val >= 10:
    MULTI                    # Start transaction
    DECRBY balance:alice 10  # Deduct 10
    EXEC                     # Attempt to execute transaction
```

Scenario 1: No other client modifies balance

- `EXEC` succeeds → balance becomes 90.

Scenario 2: Another client modifies balance before EXEC

```bash
SET balance:alice 50
```

- `EXEC` fails → returns (`nil`)
- You can retry the transaction if needed.

## Ensuring atomic operations

- Atomic operations are operations that are completed entirely or not at all, with no interference from other clients.
- In Redis, atomicity is built into many commands by default.
- For example, commands like `INCR`, `DECR`, `SETNX`, `HSET`, and list operations like `LPUSH` are atomic.
- This means you don’t need a transaction for single operations, even in a concurrent environment.

### How Redis Ensures Atomicity

1. Single-threaded execution:

   - Redis runs commands one at a time on a single main thread.
     This ensures no two commands from different clients can interleave.

2. MULTI/EXEC transactions:

   - For multi-command operations, you can use `MULTI` → `EXEC`.
   - Redis executes all queued commands atomically after `EXEC`.

3. Optimistic locking (`WATCH`):

   - Ensures atomicity when you need to check a key’s value before modifying it.

### Examples of Atomic Operations

1. Atomic INCR

   ```bash
   SET counter 0
   INCR counter
   ```

   Even if multiple clients run `INCR counter` simultaneously, Redis ensures each increment is applied exactly once.

2. Atomic Check-and-Set (SETNX)

   ```bash
   SETNX lock "1"
   ```

   - `SETNX` = "SET if Not eXists"
   - If the key doesn’t exist → sets it and returns `1`
   - If the key exists → does nothing and returns `0`
   - Useful for implementing distributed locks safely.

3. Atomic Multi-Key Operation with Transaction

   Suppose you want to transfer money from Alice to Bob:

   ```bash
   WATCH balance:alice balance:bob   # Watch keys for changes
   alice_balance = GET balance:alice

   if alice_balance >= 10:
       MULTI
       DECRBY balance:alice 10
       INCRBY balance:bob 10
       EXEC
   else:
       DISCARD
   ```

- `MULTI` → queue multiple commands
- `EXEC` → executes all commands atomically
- `WATCH` → ensures no one else modifies balances during this transaction

4. Atomic List Operation

   ```bash
   LPUSH queue "task1"
   ```

   Even if multiple clients push to the same list simultaneously, Redis ensures each push is atomic.

### Tips to Ensure Atomicity in Redis

1. Use single commands whenever possible → they are already atomic.
2. For multiple commands on related keys, use `MULTI/EXEC` to group them.
3. Use `WATCH` if you need to implement conditional updates safely.
4. Avoid long-running scripts or operations inside transactions → can block other clients.

# Replication

## Master-Slave replication

Redis provides asynchronous replication that allows you to set up one master node and one or more slave (replica) nodes.

**The master:**

- Handles all write operations (SET, INCR, DEL, etc.).
- Propagates data changes to the replicas.

**The slaves:**

- Get a copy of the master’s dataset.
- Keep synchronized with the master by receiving a continuous stream of changes.
- Can handle read-only queries (GET, MGET, etc.), reducing load on the master.

This model is often used for high availability (HA), load balancing, and data redundancy.

**Limitations**

- Asynchronous replication → data may be lost if the master crashes before changes are propagated.
- Slaves are read-only → writes always go to master.
- No automatic failover → unless you use Redis Sentinel or Cluster.

### How Replication Works in Redis

1. **Initial Sync**

   - When a slave connects to the master, it requests a full synchronization.
   - The master performs a `BGSAVE` (background save) to create an RDB snapshot.
   - It sends this snapshot to the slave, which loads it into memory.
   - While the snapshot is being sent, the master buffers write commands.
   - After the snapshot is loaded, the master sends the buffered commands to the slave.

2. **Ongoing Replication**

   - After the initial sync, the master continuously sends write commands to the slave so it stays up-to-date.
   - This is asynchronous, meaning there could be a slight lag.

3. **Automatic Reconnection**

   - If the slave disconnects, it automatically tries to reconnect and resync with the master.

### Configuration

On the Master (redis.conf)

```sh
# Master’s config (default)
replica-serve-stale-data yes
```

On the Slave (redis.conf)

```sh
# Point to the master
replicaof 127.0.0.1 6379
```

Or dynamically in the CLI:

```sh
127.0.0.1:6380> REPLICAOF 127.0.0.1 6379
```

### Example Setup

Let’s say we want 1 master and 2 slaves.

1. **Start Master**

   ```sj
   redis-server --port 6379
   ```

2. **Start Slaves**

   ```sh
   redis-server --port 6380
   redis-server --port 6381
   ```

3. **Configure Slaves**

   In the Redis CLI:

   ```sh
   127.0.0.1:6380> REPLICAOF 127.0.0.1 6379
   127.0.0.1:6381> REPLICAOF 127.0.0.1 6379
   ```

4. **Test Replication**

   On master:

   ```sh
   127.0.0.1:6379> SET user:1 "Alice"
   OK
   ```

   On slave (port 6380 or 6381):

   ```sh
   127.0.0.1:6380> GET user:1
   "Alice"
   ```

   The data written to the master is automatically replicated to the slaves.

## Read Replicas in Redis

A read replica in Redis is simply a replica node (slave) configured to receive data from the master and serve read-only queries.

- Master: Handles all write operations (e.g., `SET`, `INCR`, `DEL`).
- Replica: Receives replicated data from the master and can serve read operations (e.g., `GET`, `MGET`, `HGET`).

This improves performance and scalability, since you can distribute read queries across multiple replicas, reducing load on the master.

### Key Characteristics of Read Replicas

1. **Read-only by default**

   - By default, replicas are read-only (replica-read-only yes in config).
   - This prevents accidental writes.
   - You can override with CONFIG SET replica-read-only no, but it breaks consistency.

2. **Asynchronous Replication**

   - Replicas might be slightly behind the master (called replication lag).

3. **Scaling Reads**

   - Applications can direct read-heavy traffic (like analytics or reporting queries) to replicas.

4. **High Availability**

   - If the master goes down, replicas can be promoted to master (manually, or automatically via Sentinel).

### Limitations of Read Replicas

- Replication Lag: Replicas may serve slightly outdated data compared to the master.
- No Writes Allowed: You cannot perform writes on replicas unless explicitly allowed.
- Manual Promotion: By default, replicas don’t automatically take over as master (requires Sentinel or Cluster).

## Redis Sentinel for Failover

Redis Sentinel is a distributed system that provides:

1. **Monitoring**

   - Keeps track of whether the master and replicas are working properly.

2. **Notification**

   - Alerts administrators or external systems when something goes wrong.

3. **Automatic Failover**

   - If the master is not reachable, Sentinel promotes one of the replicas to master and reconfigures the other replicas to follow it.

4. **Configuration Provider**

   - Applications can query Sentinel to know the current master’s address (no need to hardcode the master IP).

### Why Sentinel?

- Normal master-replica setup gives redundancy but requires manual intervention when the master fails.
- Sentinel automates failover, ensuring high availability with minimal downtime.
- Useful for production deployments where availability is critical.

### How Sentinel Works

1. **Monitoring**

   - Each Sentinel constantly checks the health of the master and replicas via PINGs.

2. **Failure Detection**

   - If a master doesn’t respond within a configured time (down-after-milliseconds), the Sentinel marks it as subjectively down.
   - Other Sentinels must agree to mark it objectively down (majority vote).

3. **Failover**

   - Sentinels elect a leader.
   - The leader promotes one replica to master.
   - Other replicas are reconfigured to follow the new master.
   - Applications connected through Sentinel will automatically discover the new master.

### Sentinel Configuration Example

Suppose we have:

- Master → Port 6379
- Replicas → Ports 6380, 6381
- Sentinels → Ports 26379, 26380, 26381

1. **Configure Redis Master**

   ```sh
   # redis-master.conf
   port 6379
   ```

2. **Configure Replicas**

   ```sh
   # redis-slave.conf (for each replica)
   port 6380
   replicaof 127.0.0.1 6379
   ```

3. **Configure Sentinel**

   Create a `sentinel.conf`:

   ```sh
   port 26379
   sentinel monitor mymaster 127.0.0.1 6379 2
   sentinel down-after-milliseconds mymaster 5000
   sentinel failover-timeout mymaster 10000
   sentinel parallel-syncs mymaster 1
   ```

   Explanation:

   - `mymaster` → Name of monitored master.
   - `127.0.0.1 6379` → Master’s address and port.
   - `2` → Number of Sentinels that must agree master is down.
   - `down-after-milliseconds` → Time after which a master is considered down (5s).
   - `failover-timeout` → Max time for failover (10s).
   - `parallel-syncs` → Number of replicas syncing with new master at once.

4. **Start Components**

   ```sh
   redis-server redis-master.conf
   redis-server redis-slave.conf --port 6380
   redis-server redis-slave.conf --port 6381
   redis-sentinel sentinel.conf --port 26379
   redis-sentinel sentinel.conf --port 26380
   redis-sentinel sentinel.conf --port 26381
   ```

### Example Walkthrough of Sentinel

1. Normal Operation

   - Master: `6379`
   - Replicas: `6380`, `6381`
   - Sentinels monitor the master.

2. Insert Data

   ```sh
   127.0.0.1:6379> SET user:1 "Alice"
   OK
   ```

   Check replica:

   ```
   127.0.0.1:6380> GET user:1
   "Alice"
   ```

3. Simulate Failure

   Stop the master:

   ```sh
   pkill -f "redis-server.*6379"
   ```

4. Failover Happens

   - Sentinels detect master is down after 5 seconds.
   - They vote and promote one replica (say 6380) as new master.
   - Other replica (6381) is reconfigured to follow 6380.

   Check with Sentinel:

   ```sh
   redis-cli -p 26379 SENTINEL get-master-addr-by-name mymaster
   1) "127.0.0.1"
   2) "6380"
   ```

   The master has changed automatically!

5. Client Auto-Discovery

   Applications can connect to Sentinel to always find the current master:

   ```sh
   redis-cli -p 26379 SENTINEL get-master-addr-by-name mymaster
   ```

   This avoids hardcoding the master’s address in the app.

## Redis Cluster

Redis Cluster is Redis’s built-in distributed solution that provides:

1. Automatic Sharding (Data Partitioning)

   - Splits the dataset across multiple nodes.
   - Each node holds only part of the data.

2. High Availability with Replication

   - Each shard (master) can have replicas.
   - If a master fails, a replica is promoted automatically.

3. No Single Point of Failure

   - Cluster survives as long as the majority of masters are available.

### Sharding in Redis Cluster

Instead of storing all keys on one master, Redis Cluster divides the keyspace into 16384 hash slots.

- Each master node is responsible for a subset of slots.
- When a client issues a command, Redis determines the slot for the key using CRC16 hashing:

```sh
HASH_SLOT = CRC16(key) mod 16384
```

- That slot tells Redis which node holds the key.

Example:

- Key `user:1` → Slot `5798`
- Key `user:2` → Slot `15296`

If you have 3 masters, Redis divides 16384 slots across them (roughly ~5461 slots each).

### Hash Slots

- 16384 slots → fixed, not configurable.
- Each master manages some slots.
- Replicas mirror their master’s slots (but are read-only).
- During rebalancing, slots can be moved between masters.

This makes scaling horizontal:

- Add a new master → some slots are migrated to it.

### Replication in Cluster

Each master has at least one replica:

- If master fails → a replica is promoted.
- Ensures high availability with automatic failover.

### Example Setup of Cluster (3 Masters, 3 Replicas)

We want a 6-node cluster:

- 3 Masters: ports `7000`, `7001`, `7002`
- 3 Replicas: ports `7003`, `7004`, `7005`

1. **Start Nodes**

```sh
redis-server --port 7000 --cluster-enabled yes --cluster-config-file nodes-7000.conf --cluster-node-timeout 5000 --appendonly yes
redis-server --port 7001 --cluster-enabled yes --cluster-config-file nodes-7001.conf --cluster-node-timeout 5000 --appendonly yes
redis-server --port 7002 --cluster-enabled yes --cluster-config-file nodes-7002.conf --cluster-node-timeout 5000 --appendonly yes
redis-server --port 7003 --cluster-enabled yes --cluster-config-file nodes-7003.conf --cluster-node-timeout 5000 --appendonly yes
redis-server --port 7004 --cluster-enabled yes --cluster-config-file nodes-7004.conf --cluster-node-timeout 5000 --appendonly yes
redis-server --port 7005 --cluster-enabled yes --cluster-config-file nodes-7005.conf --cluster-node-timeout 5000 --appendonly yes
```

2. **Create the Cluster**

   ```sh
   redis-cli --cluster create 127.0.0.1:7000 \
                             127.0.0.1:7001 \
                             127.0.0.1:7002 \
                             127.0.0.1:7003 \
                             127.0.0.1:7004 \
                             127.0.0.1:7005 \
                             --cluster-replicas 1
   ```

- `--cluster-replicas 1` → Each master will have one replica.
- Redis will automatically assign slots across the 3 masters.

### Example Walkthrough

1. Check Cluster Info

   ```sh
   redis-cli -c -p 7000 cluster info
   ```

2. Check Slot Assignment

   ```sh
   redis-cli -c -p 7000 cluster slots
   ```

   Example output:

   ```sh
   0-5460       -> 7000 (master), 7003 (replica)
   5461-10922   -> 7001 (master), 7004 (replica)
   10923-16383  -> 7002 (master), 7005 (replica)
   ```

3. Insert a Key

   ```
   redis-cli -c -p 7000 SET user:1 "Alice"
   ```

   The client will:

   - Compute slot for `user:1` (e.g., `5798`).
   - Redirect request to the correct master (`7001`).

   With `-c` (cluster mode), `redis-cli` automatically follows redirects.

4. Read a Key

   ```
   redis-cli -c -p 7002 GET user:1
   "Alice"
   ```

   Even though you connected to `7002`, the client redirects you to the correct node.

### Benefits of Redis Cluster

- Horizontal scaling → Distributes data across multiple nodes.
- High availability → Failover handled by replicas.
- No single point of failure (if majority of masters remain).
- Auto rebalancing of slots when nodes are added/removed.

### Limitations of Redis Cluster

- Cross-slot operations: Multi-key operations must be in the same slot (use hash tags like `{user}:1` and `{user}:2`).
- Strong network requirements: All nodes must communicate with each other.
- Higher complexity than standalone/sentinel setups.

# Security

## Redis AUTH

Redis allows you to require a password to access the server. This is the first layer of security.

**How it Works:**

A password is defined in `redis.conf`:

```bash
requirepass myStrongPassword
```

When enabled, all clients must authenticate before running commands.

**Connecting with AUTH:**

```bash
redis-cli
127.0.0.1:6379> AUTH myStrongPassword
OK
127.0.0.1:6379> SET user:1 "Masum"
OK
```

If you try to run a command without AUTH, Redis responds:

```bash
(error) NOAUTH Authentication required.
```

## Redis ACLs (Access Control Lists)

Introduced in Redis 6.0, ACLs allow fine-grained role-based access control.

- You can define multiple users with different permissions.
- Permissions can restrict:
  - Commands (`GET`, `SET`, `DEL`, `FLUSHALL`, etc.)
  - Keys or key patterns (`user:*`, `session:*`, etc.)
- Provides better security than a single global password.

### ACL Configuration

In `redis.conf` or dynamically using ACL commands:

**Example: Create a user**

```bash
ACL SETUSER alice on >AlicePass ~user:* +GET +SET
```

- `alice` → username
- `on` → enable the user
- `>AlicePass` → set password
- `~user:*` → can access keys matching user:\*
- `+GET +SET` → allowed commands

**Example: Connect as Alice**

```bash
redis-cli -u redis://alice@127.0.0.1:6379
```

- Alice can now only run `GET` and `SET` on keys starting with `user:`
- Any other command or key is forbidden.

**View Users**

```bash
ACL LIST
```

**Delete or Disable User**

```bash
ACL DELUSER alice
ACL SETUSER alice off
```

## Network-level Security

Network-level security protects Redis from unauthorized access over the network. Even if your Redis server is running with proper authentication and ACLs, if the network is exposed, attackers can still try to connect.

Network-level security involves controlling access to Redis via networking configurations and secure communication protocols.

### Key Network-Level Security Measures in Redis

1. Bind Address

   - Redis binds to a specific network interface. By default:

     ```bash
     bind 127.0.0.1
     ```

   - `127.0.0.1` → only accessible locally.
   - To allow external access:

     ```bash
     bind 0.0.0.0
     ```

     Warning: Exposing Redis to the public without security is very dangerous.

2. Protected Mode

   Enabled by default in Redis >= 3.2:

   ```bash
   protected-mode yes
   ```

   - Redis refuses connections from external hosts if no password is set.
   - Provides an extra layer for safeguarding default installations.

3. Firewall Rules

   Use firewalls to allow only trusted IPs to connect.

   Example: UFW on Linux

   ```bash
   # Allow Redis port 6379 only from 192.168.1.10
   sudo ufw allow from 192.168.1.10 to any port 6379
   ```

   Example: iptables

   ```bash
   sudo iptables -A INPUT -p tcp -s 192.168.1.0/24 --dport 6379 -j ACCEPT
   sudo iptables -A INPUT -p tcp --dport 6379 -j DROP
   ```

4. TLS/SSL Encryption

   - Redis >= 6 supports TLS for encrypted network traffic.
   - Protects data in transit and prevents man-in-the-middle attacks.

   Example: Enabling TLS

   In `redis.conf`:

   ```bash
   tls-port 6379
   port 0
   tls-cert-file /etc/ssl/redis.crt
   tls-key-file /etc/ssl/redis.key
   tls-ca-cert-file /etc/ssl/ca.crt
   ```

   - `port 0` disables non-TLS connections.
   - Clients must connect using TLS:

   ```bash
   redis-cli -h redis.example.com -p 6379 --tls
   ```

5. Network Segmentation

   - Place Redis in a private network or VPC.
   - Only application servers that need Redis can access it.
   - Avoid exposing Redis directly to the internet.

6. Disable Dangerous Commands

   While not strictly “network-level,” disabling commands like `FLUSHALL` or `CONFIG` can prevent attackers from damaging your system if they somehow gain network access.

   ```
   rename-command FLUSHALL ""
   rename-command CONFIG ""
   ```

### Summary of Measures

| Security Layer                 | Purpose                                 | Example                                    |
| ------------------------------ | --------------------------------------- | ------------------------------------------ |
| **Bind Address**               | Limit network interfaces                | `bind 127.0.0.1`                           |
| **Protected Mode**             | Prevent unauthorized remote access      | `protected-mode yes`                       |
| **Firewall / IP Whitelisting** | Restrict access to trusted IPs          | `ufw allow from 10.0.0.5 to any port 6379` |
| **TLS/SSL Encryption**         | Encrypt traffic in transit              | `tls-port 6379`                            |
| **Network Segmentation**       | Isolate Redis in private network        | VPC / Private Subnet                       |
| **Disable Dangerous Commands** | Mitigate risk if network is compromised | `rename-command FLUSHALL ""`               |

## Private Network

### Private Networks / VPCs

- Place Redis inside a private subnet in a Virtual Private Cloud (VPC).
- Only application servers or trusted IP addresses inside the VPC can communicate with Redis.
- Redis is not exposed to the public internet.

Example (Cloud Setup)

- AWS VPC with two subnets:
  - Public subnet → Web servers
  - Private subnet → Redis servers
- Web servers access Redis via internal IP (e.g., `10.0.1.10`)

### Firewall Rules

- Control which IPs or subnets can access Redis.
- On Linux, use `ufw` or `iptables`.
- In the cloud, use security groups or network ACLs.

Example: Linux Firewall (UFW)

```bash
# Allow only application server (10.0.1.5) to connect
sudo ufw allow from 10.0.1.5 to any port 6379

# Deny all other connections
sudo ufw deny 6379
```

Example: AWS Security Group

- Inbound rule: TCP 6379 → Source: 10.0.1.0/24 (private subnet)
- Outbound rule: allow Redis responses back to the app servers

**Bind Redis to Private IP**

In `redis.conf`, set:

```bash
bind 10.0.1.10          # Redis private IP
protected-mode yes       # Extra safeguard
```

Do not use `0.0.0.0` unless combined with strict firewall rules.

**Optional: Combine with TLS**

If you must allow access across a less-trusted network, enable TLS:

```bash
tls-port 6379
port 0
tls-cert-file /etc/ssl/redis.crt
tls-key-file /etc/ssl/redis.key
tls-ca-cert-file /etc/ssl/ca.crt
```

Encrypts traffic between client and Redis even on private networks.

# Redis Modules

Redis Modules extend Redis beyond its core capabilities, allowing you to add new data types, commands, indexing engines, machine-learning components, and more—without modifying Redis itself.

Modules were introduced in Redis 4.0 to make Redis adaptable for specialized workloads such as search, graph processing, timeseries, and probabilistic data structures.

**Why Redis Modules?**

By default, Redis is fast and powerful but intentionally minimalistic:

- Only a limited set of data structures (strings, hashes, lists, sets…)
- No full-text search
- No built-in graph traversal
- No native time-series engine
- Limited analytics and query features

Redis Modules solve this by allowing plug-in extensions.

| Module              | Purpose                                      |
| ------------------- | -------------------------------------------- |
| **RediSearch**      | Full-text search & secondary indexing        |
| **RedisJSON**       | Store & query JSON documents                 |
| **RedisGraph**      | Graph database using Cypher                  |
| **RedisBloom**      | Bloom, Cuckoo, Count-Min filters             |
| **RedisTimeSeries** | Time-series ingestion, queries, downsampling |
| **RedisAI**         | Serving machine-learning models              |

## Advanced Redis Features

### 1. New Data Types

Modules can introduce entirely new structures:

- Bloom filters (RedisBloom)
- Time-series buckets (RedisTimeSeries)
- JSON documents (RedisJSON)
- Graph nodes/edges (RedisGraph)

### 2. New Commands

Modules add command namespaces:

- `FT.*` for RediSearch
- `JSON.*` for RedisJSON
- `TS.*` for RedisTimeSeries
- `GRAPH.*` for RedisGraph

### 3. Optimized Workloads

Modules can execute heavy computations inside Redis:

- Searching
- Aggregations
- ML inference (RedisAI)

### 4. Plug-and-Play

Modules can be loaded dynamically without altering Redis core.

## RedisJSON – Storing and Querying JSON

RedisJSON lets you store structured JSON documents with a JSON-native API.

```json
JSON.SET user:1 $ '{"name":"Alice","age":25,"skills":["redis","python"]}'
```

- `JSON.SET` → command from RedisJSON module
- `user:1` → key
- `$` → root path of JSON document
- JSON content stored in Redis in a tree structure

**Example: Retrieving a JSON field**

```
JSON.GET user:1 $.name
```

Output:

```
["Alice"]
```

- `$` refers to the root path
- `$.name` extracts only the “name” field

## RediSearch – Full-Text Search & Secondary Indexing

RediSearch enables fast indexing, search, filtering, and aggregations.

Create an Index:

```sh
FT.CREATE idx:users ON HASH PREFIX 1 user: SCHEMA name TEXT age NUMERIC
```

- Creates an index named `idx:users`
- Works on keys beginning with `user:`
- Indexes two fields:
  - `name (text)`
  - `age (numeric)`

**Example: Inserting User Data**

```sh
HSET user:1 name "Alice" age 25
HSET user:2 name "Bob" age 30
```

**Example: Search query**

```sh
FT.SEARCH idx:users "Alice"
```

Output:

```
1) 1) "user:1"
   2) "name"
   3) "Alice"
   4) "age"
   5) "25"
```

**Example: Filter query (Age between 20 and 28)**

```sh
FT.SEARCH idx:users "@age:[20 28]"
```

## RedisBloom – Probabilistic Filters

RedisBloom adds advanced filters for large-scale analytics.

**Example: Create a Bloom filter**

```sh
BF.RESERVE myFilter 0.01 1000
```

- false positive rate: 1%
- expected entries: 1,000

**Add an item**

```sh
BF.ADD myFilter "alice"
```

**Check existence**

```sh
BF.EXISTS myFilter "alice"
```

Output:

```sh
1 (means: probably present)
```

## RedisTimeSeries – Time Series Data Engine

**Example: Create a time-series key**

```sh
TS.CREATE temperature:room1 RETENTION 600000
```

- Time-series for "room1"
- Retains data for 600,000 ms (10 minutes)

**Add data points**

```sh
TS.ADD temperature:room1 1670000000 22.5
TS.ADD temperature:room1 1670000060 23.0
```

**Query with range**

```sh
TS.RANGE temperature:room1 1670000000 1670001000
```

Returns the list of data points in that time range.

## RedisGraph – Graph Database

RedisGraph enables graph modeling and Cypher queries.

**Example: Create nodes**

```sh
GRAPH.QUERY social "CREATE (:Person {name:'Alice'}), (:Person {name:'Bob'})"
```

**Example: Create relationship**

```sh
GRAPH.QUERY social "
MATCH (a:Person {name:'Alice'}), (b:Person {name:'Bob'})
CREATE (a)-[:FRIEND]->(b)
"
```

**Query relationships**

```sh
GRAPH.QUERY social "
MATCH (a)-[:FRIEND]->(b)
RETURN a.name, b.name
"
```

# Redis Geospatial Indexes

Redis provides built-in geospatial capabilities that allow you to:

- Store geographic locations (longitude, latitude)
- Query nearby points within a radius
- Calculate distances between two locations
- Sort by distance
- Use bounding boxes and circular radius queries

Redis geospatial features are built on top of the sorted set (ZSET) data structure using a technique called Geohash encoding.

## How Redis Geospatial Works Internally

1. Every geospatial point is stored as a Geohash, which is a 52-bit integer.
2. Redis stores that integer inside a sorted set.
3. Geospatial commands (`GEOADD`, `GEORADIUS`, etc.) handle encoding and querying.

Redis does not store altitude or 3D coordinates—just latitude & longitude.

## Redis Geospatial Commands

| Command                                | Description                                       |
| -------------------------------------- | ------------------------------------------------- |
| `GEOADD`                               | Add a location with longitude, latitude, and name |
| `GEOPOS`                               | Get coordinates of a member                       |
| `GEODIST`                              | Get distance between two points                   |
| `GEORADIUS`                            | Find members within a radius (circle)             |
| `GEORADIUSBYMEMBER`                    | Radius query based on another member              |
| `GEORADIUS_RO`, `GEORADIUSBYMEMBER_RO` | Read-only versions                                |
| `GEOHASH`                              | Get geohash strings                               |

1. Adding Geospatial Data

   ```sh
   GEOADD cities -74.00597 40.71427 "NewYork"
   ```

   - cities = key name holding geospatial index
   - Each entry requires: longitude, latitude, member name
   - Redis converts data → geohash → stores in sorted set

2. Retrieve Coordinates of a City

   ```
   GEOPOS cities "NewYork"
   ```

   Output:

   ```
   1) 1) "-74.00596940505599976"
      2) "40.71426910448555265"
   ```

   Redis returns the actual stored coordinates (with high precision).

3. Get Distance Between Cities

   ```
   GEODIST cities "NewYork" "Chicago" km
   ```

   Output

   ```
   1146.3023
   ```

   Redis uses spherical Earth approximation (Haversine formula).

4. Find Nearby Locations (Radius Query)

   Example: Find cities within 1500 km of New York

   ```
   GEORADIUS cities -74.00597 40.71427 1500 km
   ```

   Output:

   ```
   1) "Chicago"
   1) "NewYork"
   ```

   - Center → given manually (longitude/latitude)
   - Radius → 1500 km
   - Returns matching cities sorted by distance from center (closest first)

5. Radius Query Based on Another

   Example: Cities within 1800 km of Chicago

   ```
   GEORADIUSBYMEMBER cities "Chicago" 1800 km
   ```

   Output:

   ```
   1) "NewYork"
   1) "Chicago"
   ```

   - Uses Chicago’s coordinates as the center automatically
   - Very useful for “find nearby users”, “find nearby restaurants”, etc.

6. Radius Query with Extra Details

   Example: Include coordinates + distance + geohash

   ```sh
   GEORADIUS cities -74 40 1500 km WITHCOORD WITHDIST WITHHASH
   ```

   Output:

   ```
   1) 1) "NewYork"
      2) "14.1"                 ← distance
      3) "3478007285230310"     ← geohash
      4) 1) "-74.0059"          ← longitude
         2) "40.7142"           ← latitude
   ```

   Additional flags:

   - `WITHDIST` → distance from center
   - `WITHCOORD` → return lat/lon
   - `WITHHASH` → internal hash used in Redis

7. Get Geohash Values

   ```
   GEOHASH cities "NewYork"
   ```

   Output:

   ```
   1) "dr5regw3pg0"
   ```

   Geohashes provide:

   - Location encoding
   - Prefix similarity → spatial proximity (Locations close on map share geohash prefixes)

# Memory Optimization

Redis is an in-memory database, meaning performance and cost depend heavily on how efficiently memory is used.
Optimizing memory helps you:

- Reduce RAM usage
- Improve throughput
- Lower latency
- Store more data on the same hardware
- Prevent eviction due to memory limits

Redis provides several built-in mechanisms and settings to control memory use.

## Compression Using Listpacks / Ziplist Encoding

Redis automatically stores small data structures in compact forms:

- Listpack (newer)
- Ziplist (older)

Used in:

- Hashes
- Lists
- Sorted sets

Example: Small Sorted Set

```sh
ZADD leaders 100 "Alice" 200 "Bob"
```

Stored as a small optimized list, not a full skiplist + dictionary.
This drastically reduces memory.

## Bitmaps, Bitfields, and HyperLogLogs

Redis provides specialized structures for massive memory savings.

### Using Bitmaps Instead of Sets

#### Storing user login status (1 million users)

**Using a Set**

```sh
SADD loggedIn 1 5 10 200000
```

- A set entry ≈ 50–80 bytes → potentially tens of MB.

**Using a Bitmap**

```sh
SETBIT loginBitmap 200000 1
```

- Bitmap uses 1 bit per user
- 1,000,000 bits → 125 KB only
- Huge savings compared to large sets

#### Using HyperLogLog for Approximated Counting

Counting unique visitors:

**Using a Set**

```sh
SADD visitors user123
```

- Memory grows unbounded.

**Using HyperLogLog (fixed ≈ 12 KB)**

```sh
PFADD uv user123
PFCOUNT uv
```

Perfect for:

- Daily unique visitors
- Counting unique IPs
- Measuring cardinality at scale

## Memory Policies & Eviction Strategy

Redis can use different eviction policies when memory limit is reached (`maxmemory-policy`).

**Common Policies:**

- `allkeys-lru` → evict least-recently used keys
- `volatile-lru` → LRU but only keys with TTL
- `allkeys-random`
- `noeviction` (default)

```sh
maxmemory 512mb
maxmemory-policy allkeys-lru
```

Redis automatically frees memory by removing the least-used keys when it reaches 512 MB.

# Lua scripting

Redis includes a built-in Lua interpreter that allows you to run server-side scripts using the command:

```sh
EVAL <script> <numkeys> key1 key2 arg1 arg2 ...
```

## Why Lua Scripting Matters for Performance

When you execute multiple Redis commands from your application:

### Without optimization

Your app → Redis → app → Redis (many round trips)

This creates:

- high latency
- many network packets
- slow client-side logic

### With Lua scripting

Your app → Redis (one script) → Redis runs everything internally

Huge performance improvements because:

- 0 network round trips inside script
- Atomicity guaranteed

## Atomic Increment with Logic

Suppose you want: Increment a counter only if a limit is not exceeded.

Without Lua (multiple round trips):

1. `GET counter`
2. compute in app
3. `SET counter newValue`

This can cause race conditions in concurrent environments.

```sh
EVAL "
local current = redis.call('GET', KEYS[1])
if not current then
  redis.call('SET', KEYS[1], 1)
  return 1
elseif tonumber(current) < tonumber(ARGV[1]) then
  redis.call('INCR', KEYS[1])
  return redis.call('GET', KEYS[1])
else
  return current
end
" 1 counter 10
```

- `KEYS[1]` = `"counter"`
- `ARGV[1]` = `10` (limit)
- Logic:
  - If counter doesn't exist → set to 1
  - If under limit → increment
  - If over limit → return current value
- All done atomically and in one server-side script

## Why Lua is Faster Than Multi-Command Client Logic

Because Redis runs Lua scripts without releasing the CPU until finished.

This makes it:

- Safer (no race conditions)
- Faster (no network calls)
- More powerful (conditional logic on server)

## Lua Scripting vs MULTI/EXEC

| Feature                 | Lua Scripting                     | MULTI/EXEC                                           |
| ----------------------- | --------------------------------- | ---------------------------------------------------- |
| **Atomic?**             | ✔ Entire script atomic            | ✔ Entire transaction atomic                          |
| **Conditional logic?**  | ✔ Fully flexible                  | ❌ No logic inside transaction (client must compute) |
| **Network round trips** | ✔ 1 round trip                    | ❌ Multiple (commands are queued)                    |
| **Performance**         | ⭐ Fastest for multi-ops          | ⚡ Fast                                              |
| **Error behavior**      | Script runs fully or errors early | Errors only on EXEC                                  |
| **Server-side loops?**  | ✔ Yes                             | ❌ No                                                |
| **Ideal for**           | complex logic, repeated patterns  | simple atomic sequences                              |

## Lua Scripting vs Pipelining

Pipelining sends multiple commands in one batch but:

| Feature                   | Lua Scripting  | Pipelining                   |
| ------------------------- | -------------- | ---------------------------- |
| **Atomic**                | ✔ Yes          | ❌ No                        |
| **Conditional logic**     | ✔ Yes          | ❌ No                        |
| **Network round trips**   | ✔ 1            | ✔ 1                          |
| **Executes server-side?** | ✔ Yes          | ❌ No (just client batching) |
| **Order guarantee**       | ✔ Yes          | ✔ Yes                        |
| **Ideal for**             | stateful logic | high-volume simple commands  |

## Compare Lua, MULTI/EXEC, and Pipelining

Requirement: Increment three keys and return their sum

### Approach 1: Without Optimization (3 round trips)

```
INCR k1
INCR k2
INCR k3
```

- 3 network round trips
- 3 server executions
- client computes sum

### Approach 2: Pipelining (1 round trip)

```
INCR k1
INCR k2
INCR k3
```

Sent as a pipeline → 1 round trip

BUT:

- Still 3 server operations
- No atomicity
- Client computes last step

### Approach 3: MULTI/EXEC (Atomic but more round trips)

```
MULTI
INCR k1
INCR k2
INCR k3
EXEC
```

- ✔ atomic
- ❌ 2 network round trips (MULTI + EXEC)
- ❌ cannot compute sum server-side

### Approach 4: Lua Scripting (Best)

```
EVAL "
local a = redis.call('INCR', KEYS[1])
local b = redis.call('INCR', KEYS[2])
local c = redis.call('INCR', KEYS[3])
return a + b + c
" 3 k1 k2 k3
```

- 1 round trip
- All increments occur inside Redis
- Sum computed server-side
- Atomic
- Fastest option

## Between Lua, MULTI/EXEC, and Pipelining

| If you need…                                  | Use                   |
| --------------------------------------------- | --------------------- |
| Complex logic                                 | **Lua**               |
| Atomicity + logic                             | **Lua**               |
| Many simple commands with no logic            | **Pipelining**        |
| Strict atomic multi-command bundle            | **MULTI/EXEC**        |
| Server-side computation (loops, conditionals) | **Lua**               |
| Minimizing network latency                    | **Lua or Pipelining** |

# Connection pooling

Connection pooling is a technique where a client application maintains a set of pre-established Redis connections and reuses them instead of creating a new connection for every request.

**Without pooling:**

- Application opens a new TCP connection → sends a request → closes it
- High overhead
- Slow
- Causes connection churn on Redis server
- Leads to TIME_WAIT and socket exhaustion

**With pooling:**

- A pool of persistent Redis connections is created once
- Each request picks an idle connection
- Returns it to the pool after use

**This significantly improves:**

- Latency
- Throughput
- Server stability
- Concurrent request handling

## Why Connection Pooling Improves Performance

Opening/closing a TCP connection is expensive:

**TCP overhead includes:**

- Handshake (SYN → SYN-ACK → ACK)
- TLS handshake (if SSL enabled)
- Kernel allocation for sockets
- Redis authentication (AUTH)
- Redis handshake (HELLO/RESP negotiation)

All of these add milliseconds per operation.

If an app performs 1,000 operations/sec, but each requires creating a connection, the overhead becomes huge.

Connection pooling eliminates all this by keeping connections alive.

## Redis Server Connection Limits

Redis is fast with commands, but slow to handle thousands of new connections per second.

Default connection limit:

```
maxclients 10000
```

If your application does not pool connections, it may exhaust `maxclients` under load.

Pooling minimizes client count.

## How Connection Pooling Works (Architecture)

```
Application
 ├── Worker Thread A ---┐
 ├── Worker Thread B ---|--> Connection Pool (10–100 connections)
 ├── Worker Thread C ---┘
 └── Worker Thread D → Redis Server
```

Workers borrow connections from the pool → execute → return connections.

# Monitoring

## Redis MONITOR — Real-Time Command Inspection

`MONITOR` streams every command that Redis processes in real time.

**What it shows:**

- Every Redis command executed
- The exact arguments
- The client issuing it
- Millisecond timestamps

**When to use:**

- Debugging application behavior
- Detecting unexpected commands
- Real-time auditing
- Checking if clients are overloading Redis with unnecessary calls

**Caution:**

- `MONITOR` is slow and CPU-heavy because it logs every operation.
- Use on development or temporary debugging, not production long-term.

**Output Example:**

```
1617043000.123456 [0 127.0.0.1:51726] "SET" "user:1" "Alice"
1617043000.123789 [0 127.0.0.1:51726] "INCR" "visits"
1617043000.124001 [0 127.0.0.1:51726] "LPUSH" "tasks" "task1"
```

- Timestamp: `1617043000.123456`
- DB index: `[0`
- Client IP: `127.0.0.1`
- Command: `"SET"`, `"INCR"`, `"LPUSH"`

## Redis INFO — Health, Stats, and System Overview

INFO gives a complete snapshot of Redis server status.

It has many sections, including:
| Section | Shows |
| ------------- | ---------------------------------- |
| `server` | Redis version, uptime |
| `clients` | Connected clients, blocked clients |
| `memory` | RAM usage, fragmentation |
| `persistence` | RDB/AOF status |
| `stats` | Command statistics |
| `replication` | Master/slave info |
| `cpu` | CPU usage |
| `cluster` | Cluster status |
| `keyspace` | Key counts, expirations |

**Output Example:**

```
# Server
redis_version:7.0.0
uptime_in_seconds:3600

# Clients
connected_clients:42
blocked_clients:1

# Memory
used_memory:25600000
used_memory_peak:30000000
mem_fragmentation_ratio:1.12

# Stats
total_commands_processed:105000
instantaneous_ops_per_sec:1200

# Keyspace
db0:keys=5000,expires=2000,avg_ttl=60000
```

- Server section
  - Redis has been running for 1 hour
  - Version: 7.0.0
- Clients
  - 42 active connections
  - 1 blocked client (likely due to BRPOP or Lua script)
- Memory
  - used_memory: ~25 MB
  - mem_fragmentation_ratio: 1.12 (healthy)
- Stats
  - 105,000 commands processed overall
  - Throughput: 1200 ops/sec
- Keyspace
  - Database db0 has 5,000 keys
  - 2,000 of them have TTLs

**Useful options**

- Get only memory info: `INFO memory`
- Get only clients info: `INFO clients`

## Redis SLOWLOG — Detect Slow Commands

SLOWLOG records Redis commands that exceed a configured execution time threshold.

Redis is fast, so anything > 1 millisecond is often suspicious.

### How to configure Slow Log

- Set threshold to 1000 microseconds (1ms): `CONFIG SET slowlog-log-slower-than 1000`
- Set number of entries stored: `CONFIG SET slowlog-max-len 128`

### Adding a Slow Command

If your application runs:

```
LRANGE huge_list 0 -1
```

…on a list with millions of items, it may take >1ms.

Redis will record it in the slow log.

### Viewing the Slow Log

```
SLOWLOG GET 5
```

Example output:

```
1) 1) (integer) 15
   2) (integer) 1617043400
   3) (integer) 1200
   4) 1) "LRANGE"
      2) "biglist"
      3) "0"
      4) "-1"
   5) "127.0.0.1:51726"
```

| Field                         | Meaning                                |
| ----------------------------- | -------------------------------------- |
| `(integer) 15`                | Slowlog entry ID                       |
| `1617043400`                  | Unix timestamp                         |
| `1200`                        | Execution time in microseconds (1.2ms) |
| `"LRANGE" "biglist" "0" "-1"` | Command that was slow                  |
| `"127.0.0.1:51726"`           | Client that executed it                |

Redis caught a slow command.

- Get slowlog length: `SLOWLOG LEN`
- Reset slowlog: `SLOWLOG RESET`

## Memory Usage Inspection

| Command             | Purpose                   |
| ------------------- | ------------------------- |
| INFO memory         | High-level memory stats   |
| MEMORY USAGE key    | Inspect single key memory |
| MEMORY STATS        | Deep memory metrics       |
| MEMORY DOCTOR       | Automated advice          |
| MEMORY MALLOC-STATS | Allocator-level stats     |
| MEMORY PURGE        | Defrag attempt            |

# Log Analysis

## Where Redis Logs Are Stored

The Redis configuration file `redis.conf` determines where logs are written.

```sh
logfile /var/log/redis/redis-server.log
```

If `logfile ""` is set, Redis logs to stdout (useful for Docker environments).

## Redis Log Levels

Redis supports multiple log levels:

| Level     | Description                          |
| --------- | ------------------------------------ |
| `debug`   | Very verbose, for deep debugging     |
| `verbose` | Detailed info, useful for tracing    |
| `notice`  | Default; normal but important events |
| `warning` | Only warnings and errors             |

Configure via `redis.conf`: `loglevel notice` Or dynamically: `CONFIG SET loglevel verbose`

# Debugging Blocking

Redis is single-threaded (for command execution), so any blocking operation stops the server from processing other commands.
This leads to:

- High latency
- Timeouts in applications
- Replication lag
- Slow clients
- Stuck transactions
- Load imbalance

Understanding and debugging blocking operations is crucial for Redis performance and stability.

## Common Blocking Commands

A blocking operation is any Redis command that waits for something instead of responding immediately.

| Command                            | Blocking Reason                                           |
| ---------------------------------- | --------------------------------------------------------- |
| `BLPOP`, `BRPOP`, `BRPOPLPUSH`     | Waits for elements in a list                              |
| `XREAD BLOCK`                      | Waits for new messages in a stream                        |
| `XREADGROUP BLOCK`                 | Waits for pending stream entries                          |
| `WAIT`                             | Waits for replication                                     |
| `DEBUG SLEEP`                      | Explicitly blocks Redis execution                         |
| Long Lua scripts                   | Redis cannot process other commands until script finishes |
| Slow commands scheduled by clients | Eg. `KEYS *`, `LRANGE biglist 0 -1`, `HGETALL huge_hash`  |

## To debug blocking

| Tool             | Purpose                      |
| ---------------- | ---------------------------- |
| `CLIENT LIST`    | Find blocked clients         |
| `SLOWLOG`        | Find slow/expensive commands |
| `MONITOR`        | Live command stream          |
| `INFO clients`   | Count blocked clients        |
| `LATENCY DOCTOR` | Analyze latency spikes       |

# Real-world Integrations
## Redis as a Cache Layer
Apps often connect to slow data sources (SQL databases, APIs). Redis is used as a caching layer to store frequently accessed data.

```
Client → Application → Redis Cache → (fallback) Database
```
Node.js Implementation
```ts
import express from "express";
import Redis from "ioredis";
import fetch from "node-fetch";

const app = express();
const redis = new Redis();

// GET /user/123
app.get("/user/:id", async (req, res) => {
  const userId = req.params.id;

  // 1. Check cache
  const cached = await redis.get(`user:${userId}`);
  if (cached) {
    return res.json({ source: "redis-cache", data: JSON.parse(cached) });
  }

  // 2. Fetch from external DB/API
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const userData = await response.json();

  // 3. Save to Redis for 60 sec
  await redis.setex(`user:${userId}`, 60, JSON.stringify(userData));

  res.json({ source: "api", data: userData });
});

app.listen(3000, () => console.log("Server running"));
```
## Redis for Session Storage
```ts
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";

const RedisStore = connectRedis(session);
const redis = new Redis();

app.use(
  session({
    store: new RedisStore({ client: redis }),
    secret: "mySecret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  })
);
```
- Sessions are stored inside Redis.
- Any server instance can access the same session.
- Helps with load-balanced architectures.


## Redis for Message Queues (Using Pub/Sub or Streams)

Redis can integrate with microservices as a message broker.

Publisher
```ts
import Redis from "ioredis";
const pub = new Redis();

pub.publish("orders", "Order #5001 created");
```
Subscriber
```ts
import Redis from "ioredis";
const sub = new Redis();

sub.subscribe("orders");
sub.on("message", (channel, message) => {
  console.log(`Received from ${channel}: ${message}`);
});
```
Explanation

- The publisher sends messages to a channel.
- All subscribers listening to the channel receive the message.

Used in:

- Notification systems
- Realtime logging
- Realtime analytics dashboards

## Redis Streams for Event Processing (Advanced Integration)

Redis Streams are used for:

- Event pipelines
- Background workers
- Ordered message processing

Producer
```ts
await redis.xadd("payments-stream", "*", "user", "42", "amount", "99.00");
```
Consumer
```ts
const messages = await redis.xread(
  { block: 5000 },
  "STREAMS",
  "payments-stream",
  "0"
);

console.log(messages);
```
- Stream stores messages with IDs.
- Consumers process them in order.
- Supports consumer groups for load balancing.


## Redis for Distributed Locks (Redlock Pattern)

Used to prevent:
- Duplicate payments
- Race condition updates
- Concurrency issues

```ts
import Redis from "ioredis";
const redis = new Redis();

async function runCriticalSection() {
  const lockKey = "lock:payment:501";
  const lock = await redis.set(lockKey, "locked", "NX", "EX", 10);

  if (!lock) {
    console.log("Another process is already handling this!");
    return;
  }

  console.log("Running critical work...");
  
  // critical logic here...

  await redis.del(lockKey);
}
```

- `NX` ensures key is set only if it doesn’t exist.
- `EX 10` auto-expires lock in case of crash.
- Only one worker can hold the lock at a time.


## Redis with Real-time Analytics / Leaderboards

Redis sorted sets (ZSET) are perfect for:

- Game leaderboards
- Ranking systems
- Trending items

Leaderboard
```ts
await redis.zadd("game:leaderboard", 1500, "player1");
await redis.zadd("game:leaderboard", 2200, "player2");

const topPlayers = await redis.zrevrange("game:leaderboard", 0, 2, "WITHSCORES");
console.log(topPlayers);
```
- Sorted sets keep elements ordered automatically.
- You can get top `N` users instantly.

## Redis as a Rate Limiter

Used for:

- API rate limits
- Login attempt limits
- Preventing abuse

10 Requests Per Minute Limit
```ts
async function isRateLimited(userId) {
  const key = `rate:${userId}`;
  const count = await redis.incr(key);

  if (count === 1) {
    await redis.expire(key, 60);
  }

  return count > 10;
}
```
- `incr()` automatically increments request count.
- Key expires after 60 seconds.
- If count exceeds limit → block user.