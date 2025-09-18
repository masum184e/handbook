# Contents

- [Windows Subsystem for Linux](#windows-subsystem-for-linux)
  - [Key Features of WSL](#key-features-of-wsl)
  - [Installing WSL](#installing-wsl)
  - [Basic Usage Examples of WSL](#basic-usage-examples-of-wsl)
  - [WSL for Development](#wsl-for-development)
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

# Introduction

Redis stands for REmote DIctionary Server.
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
redis-cli -h 127.0.0.1 -p 6379
```

- With authentication (if Redis has a password)

```bash
redis-cli -a mypassword
```

- Run a single command without entering interactive mode

```bash
redis-cli PING
```

## Redis `redis.conf` File

The `redis.conf` file is the main configuration file for Redis.

- When Redis starts, it reads this file to load settings.
- By default, it’s located in `/etc/redis/redis.conf` (Linux) or inside the Redis source folder.
- You can also start Redis with a custom config:

```bash
redis-server /path/to/redis.conf
```

If no config is given, Redis starts with default settings

### Main Sections of `redis.conf`

Here are the most important settings you’ll encounter in `redis.conf` (Introduction & Basics level):

1. . General Settings

- Daemonize (background mode):

```bash
daemonize yes
```

    - yes → Redis runs in the background.
    - no → Redis runs in the foreground (useful for debugging).

- PID file (process ID storage):

```bash
pidfile /var/run/redis/redis-server.pid
```

2. Networking

- Port Redis listens on:

```bash
port 6379
```

Default is 6379. You can change it if needed.

- Bind address:

```bash
bind 127.0.0.1
```

Redis will only accept connections from localhost.

- If you want to allow external access:

```bash
bind 0.0.0.0
```

But for security, you must add a password (see below).

3. Security

Require password for clients:

```bash
requirepass myStrongPassword
```

After setting this, every client must authenticate:

```bash
redis-cli -a myStrongPassword
```

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
- everysec → syncs data every second (good balance between performance and safety).

5. Memory Management

Maximum memory limit:

```bash
maxmemory 256mb
```

Redis will not use more than 256 MB RAM.

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

- Removes the TTL from a key, making it permanent.

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
User:101:Profile
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
  1. DEL → Synchronous delete (blocking)
  2. UNLINK → Asynchronous delete (non-blocking)
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

### Configuring RDB in redis.conf

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

2. Sync Policy (appendfsync)

This controls how often Redis writes AOF changes to disk:

```conf
appendfsync always      # Write every command to disk immediately (safest, slowest)
appendfsync everysec    # Default: write once per second (good balance)
appendfsync no          # Let OS decide when to flush (fastest, risky)
```

Most production systems use `everysec`. 3. Start Redis

```bash
redis-server /etc/redis/redis.conf
```

4. Rewrite Policy

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

Redis provides two kinds of subscriptions:

1. Direct subscriptions → using `SUBSCRIBE channel` (exact channel name).
2. Pattern-based subscriptions → using `PSUBSCRIBE pattern` (wildcard matching).

With PSUBSCRIBE, a client can subscribe to multiple channels at once using glob-style patterns `(*`, `?`, `[]`).

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

## Optimistic locking

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
   Redis runs commands one at a time on a single main thread.
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

## Master-slave replication

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
- The master performs a BGSAVE (background save) to create an RDB snapshot.
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

## Network-level security

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

3. Bind Redis to Private IP

In `redis.conf`, set:

```bash
bind 10.0.1.10          # Redis private IP
protected-mode yes       # Extra safeguard
```

Do not use `0.0.0.0` unless combined with strict firewall rules.

4. Optional: Combine with TLS

If you must allow access across a less-trusted network, enable TLS:

```bash
tls-port 6379
port 0
tls-cert-file /etc/ssl/redis.crt
tls-key-file /etc/ssl/redis.key
tls-ca-cert-file /etc/ssl/ca.crt
```

Encrypts traffic between client and Redis even on private networks.
