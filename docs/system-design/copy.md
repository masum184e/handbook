
# Performance

In system design, performance refers to how efficiently a system responds to and processes requests under normal and peak conditions. It determines how fast, scalable, and resource-efficient the system is.

A performant system is one that:

- Responds quickly (low latency)
- Handles many requests simultaneously (high throughput)
- Uses resources effectively (CPU, memory, bandwidth)

## Performance Metrics

### Availability

The percentage of time the system is operational and accessible.

$$
\text{Availability} = \frac{\text{Uptime}}{\text{Uptime} + \text{Downtime}} \times 100
$$

**Example:** If a system is down for 52.6 minutes in a year, it has 99.99% availability (often called “four nines”).

**Explanation:** Mission-critical systems (e.g., banking, healthcare) require high availability. This is often achieved using redundancy and failover systems

### Reliability

The ability of a system to function correctly and consistently over time without failure.

- Related metric: Mean Time Between Failures (MTBF)

**Example:** A payment gateway that crashes once every 30 days is more reliable than one that crashes weekly.

**Explanation:** Reliability ensures user trust. It is often supported by rigorous testing and graceful error handling.

### Durability

The ability of a system to retain data over time, even in the face of failures.

- Often relevant for storage systems

**Example:** Once a transaction is committed in a database, it will not be lost, even if the server crashes. That’s durability.

**Explanation:** Durability is critical in databases and file systems (e.g., AWS S3 promises 99.999999999% durability).

### Performance Metrics Summary

| Metric       | Unit            | Key Focus           | Example Value             |
| ------------ | --------------- | ------------------- | ------------------------- |
| Latency      | ms              | Speed               | 150 ms                    |
| Throughput   | req/sec         | Capacity            | 10,000 RPS                |
| Availability | %               | Uptime              | 99.99%                    |
| Reliability  | MTBF, errors    | Stability           | 1 crash/month             |
| Scalability  | N/A             | Load handling       | Handles 1M users          |
| Durability   | %               | Data persistence    | 99.999999999%             |
| Consistency  | Strong/Eventual | Data freshness      | Real-time profile updates |
| Error Rate   | %               | Quality             | 0.5%                      |
| Load         | % CPU, etc      | Utilization         | 80% CPU                   |
| Tail Latency | ms              | Outlier performance | 1s at 99th percentile     |

- **Concurrency:** Number of simultaneous users the system supports
- **Resource Utilization:** Efficiency of CPU, memory, disk, and network usage
- **Load Time:** Time required to serve and render content to users

## Performance-Related Concepts

1. **Scalability**

   - The ability to maintain or improve performance as load increases.
   - Horizontal (adding servers) or vertical (more powerful servers) scaling.

2. **Caching**

   - Storing frequently accessed data in fast-access memory (e.g., Redis, CDN).
   - Reduces load on databases and improves latency.

3. **Load Balancing**

   - Distributes incoming requests across multiple servers to prevent overload.

4. **Asynchronous Processing**

   - Defers non-critical work (like sending emails) to background jobs.

5. **Database Optimization**

   - Using indexing, denormalization, and query tuning for faster data access.

6. **Content Delivery Network (CDN)**

   - Distributes content closer to users globally to reduce latency.

7. **Compression & Minification**
   - Reducing the size of payloads (e.g., images, scripts) to speed up responses.

## Example of Performance

**Scenario:** Designing a system like Netflix that needs to serve thousands of videos to millions of users without lag.

| Layer                 | Performance Techniques                            | Effect                        |
| --------------------- | ------------------------------------------------- | ----------------------------- |
| **Frontend**          | Lazy loading, image compression, minified JS/CSS  | Faster page load              |
| **CDN**               | Distribute video content via CloudFront or Akamai | Reduce latency, global access |
| **Backend**           | Caching frequently accessed metadata (Redis)      | Reduce DB hits, faster APIs   |
| **Database**          | Indexing, read replicas, query optimization       | Fast data access              |
| **Load Balancer**     | Round-robin or IP-hash distribution               | Prevent overload              |
| **Asynchronous Jobs** | Transcode video in background                     | Improve responsiveness        |

### Example in Action

User Action: A user clicks "Play" on a video.

1. **Metadata Request:**
   - Handled by backend API.
   - Cache hit returns info instantly (e.g., video title, thumbnail).
2. **Video Streaming:**
   - Served from a CDN node closest to the user.
   - Reduces buffering (low latency).
3. **Recommendation Engine:**
   - Runs asynchronously in the background (no delay in playback).
4. **Logs & Analytics:**
   - Collected via message queues (e.g., Kafka), not blocking the main app.

**Result:** The video starts quickly, system handles thousands of similar requests per second, and users don’t experience noticeable delays.

### Performance Optimization Summary

| Strategy            | Benefit                           |
| ------------------- | --------------------------------- |
| Caching             | Speeds up repeated reads          |
| CDNs                | Reduces latency for global users  |
| Load Balancing      | Prevents bottlenecks              |
| Asynchronous Design | Keeps UIs responsive              |
| Query Optimization  | Improves database response time   |
| Resource Monitoring | Detects and fixes slow components |

# Queue

Queue is a data structure or service that temporarily holds tasks, messages, or requests in a First-In-First-Out (FIFO) manner until they can be processed. It acts as a buffer between components that produce and consume data at different speeds.

## Why Use a Queue

1. **Decoupling**

   - Producers (e.g., web servers) and consumers (e.g., workers) operate independently.
   - A failure or slowdown in one does not directly impact the other.

2. **Scalability**

   - Multiple consumers can be added to process messages in parallel.

3. **Load Buffering**

   - Sudden spikes in traffic can be absorbed by the queue instead of overwhelming the system.

4. **Reliability and Persistence**

   - Messages can be persisted until processed, ensuring tasks aren’t lost on failure.

5. **Asynchronous Processing**
   - Time-consuming tasks (e.g., video rendering, email sending) can be deferred without blocking user requests.

## Types of Queue

| Queue Type         | Description                                 | Example Use Case                |
| ------------------ | ------------------------------------------- | ------------------------------- |
| **Message Queue**  | Carries messages between services.          | RabbitMQ, ActiveMQ, Amazon SQS  |
| **Task Queue**     | Holds jobs/tasks for background workers.    | Celery (Python), Sidekiq (Ruby) |
| **Priority Queue** | Tasks with higher priority go first.        | Support ticketing system        |
| **Delay Queue**    | Messages are held for a period before sent. | Scheduled notifications         |

## Where does a queue build up

| Layer / Component                                     | Where the Queue Builds            | Reason                                    |
| ----------------------------------------------------- | --------------------------------- | ----------------------------------------- |
| **Web Server / Load Balancer**                        | Incoming request queue            | Too many simultaneous user requests       |
| **Message Queue System** (e.g., Kafka, RabbitMQ, SQS) | Task queue                        | Worker is slow or unavailable             |
| **Database**                                          | Connection pool queue             | Too many concurrent queries, slow queries |
| **Thread Pools**                                      | Thread/task execution queue       | CPU-bound or I/O-bound bottlenecks        |
| **Disk / File I/O**                                   | File write buffer queue           | Slow disks, too many write ops            |
| **API Gateway**                                       | Request queue for backend service | Backend throttled or overloaded           |
| **Cache Layer (e.g., Redis)**                         | Command execution queue           | Too many cache ops / eviction pressure    |

## Example of Queue

A user uploads an image, and the system must resize it into multiple resolutions (thumbnail, medium, high-res).

### Without a Queue (Synchronous):

- Upload → Resize → Save → Respond
- Slow, blocks user request

### With a Queue (Asynchronous):

1. User uploads image
2. API Server stores image metadata and sends a task to the queue:

```json
{
  "image_id": "123",
  "resize_sizes": ["100x100", "300x300"]
}
```

3. Queue holds the task
4. Worker picks up the task, resizes the image, and saves the results
5. User gets a fast response, and image processing happens in the background

Queue = buffer between upload and processing

## Common Queue Tools

| Tool           | Description                             |
| -------------- | --------------------------------------- |
| **RabbitMQ**   | Open-source message broker              |
| **Kafka**      | Distributed streaming platform          |
| **Amazon SQS** | Fully managed message queue service     |
| **Redis**      | Can be used for simple in-memory queues |
| **Celery**     | Distributed task queue in Python        |

## Strategy to Prevent Queue

| Strategy                     | Prevents                       | Example Tool/Tech      |
| ---------------------------- | ------------------------------ | ---------------------- |
| Auto-scale consumers         | Slow processing                | AWS Lambda, Kubernetes |
| Rate limiting                | Burst producer load            | API Gateway, NGINX     |
| Queue monitoring             | Silent queue growth            | Prometheus, CloudWatch |
| Backpressure                 | System overload                | Node.js, Kafka         |
| DLQ                          | Retry storm, poisoned messages | SQS DLQ, RabbitMQ      |
| Timeouts + exponential retry | Worker hang, retry floods      | Celery, Sidekiq        |
| Priority or multiple queues  | Starvation of urgent tasks     | RabbitMQ, Redis, Kafka |

# Latency

Latency in system design refers to the time it takes for a request to travel from the client to the server and back with a response. It is a key performance metric that reflects how responsive a system is.

## Types of Latency

1. **Network Latency:** Time taken for data to travel across the network(optical cable) from client to server and back.
2. **Processing Latency:** Time taken by the server or application to process a request.
3. **Queueing Latency:** Time a request waits in a queue before being processed (e.g., due to load, rate limits, etc.).
4. **Disk I/O Latency:** Time required to read/write data from storage systems.
5. **Database Latency:** Time taken to query the database and return the result.

## Why Latency Matters

- User Experience (slower pages, timeouts)
- System Throughput
- Real-time systems (e.g., video conferencing, trading platforms)
- Scalability

## Latency Breakdown

Let’s assume a web app that fetches user data:

```shell
Client <--> API Server <--> Database
```

Typical latency breakdown might look like:

- Network: 50ms (client to server)
- Processing: 20ms
- DB Query: 100ms
- Response Time: 50ms (back to client)

Total Latency: ~220ms

## Example of Latency

```js
const express = require("express");
const app = express();

const port = 3000;

// Simulated DB query with delay
function fakeDBQuery(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "Masum Billah", role: "Admin" });
    }, 100); // 100ms DB latency
  });
}

app.get("/user/:id", async (req, res) => {
  const start = Date.now(); // Start timer

  const user = await fakeDBQuery(req.params.id);

  const end = Date.now(); // End timer
  const latency = end - start;

  res.json({
    user,
    latency: `${latency}ms`, // Show total processing latency
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

## How to Reduce Latency

| Area              | Techniques                                           |
| ----------------- | ---------------------------------------------------- |
| **Network**       | Use CDNs, HTTP/2, minimize payload size              |
| **Processing**    | Optimize algorithms, reduce blocking code            |
| **Database**      | Use indexes, caching (e.g., Redis), optimize queries |
| **Queueing**      | Add workers, increase concurrency                    |
| **Architecture**  | Use microservices, load balancers, edge servers      |
| **Caching**       | Avoid repeated DB queries                            |
| **Load Balancer** | Distribute traffic                                   |
| **Rate limiting** | Throttle excessive calls                             |

Try to achieve 100ms latency.

# Tail Latency

Tail latency refers to the high-end response times (or delays) experienced by a small percentage of requests in a system — usually the slowest 1%, 0.1%, or even 0.01% of requests.

For example, p99 latency means the 99th percentile latency — 99% of requests are faster than this value, but 1% are slower. That slowest 1% is called the tail.

<img src="https://robertovitillo.com/why-you-should-measure-tail-latencies/distribution.png" />

## Why Tail Latency Matters

Even if your system handles most requests quickly, a few very slow responses can:

- Ruin user experience (especially in real-time apps).
- Cascade delays in distributed systems (e.g., microservices).
- Impact SLAs (Service Level Agreements).
- Break systems relying on aggregation (e.g., waiting for 10 services to respond).

## Analogy of Tail Latency

Imagine you're at a fast-food restaurant:

- 95% of customers are served within 2 minutes.
- But the last 5% are waiting 10 minutes because their food is more complex.
  Even if the average time is good, the long waits for the unlucky few are frustrating and degrade trust.

## Example of Tail Latency

Suppose you have a Node.js server handling API requests and fetching data from 3 microservices in parallel. Here's the bottleneck:

```js
const express = require("express");
const axios = require("axios");
const app = express();

app.get("/aggregate", async (req, res) => {
  try {
    const [serviceA, serviceB, serviceC] = await Promise.all([
      axios.get("http://service-a/data"),
      axios.get("http://service-b/data"),
      axios.get("http://service-c/data"),
    ]);
    res.send({
      a: serviceA.data,
      b: serviceB.data,
      c: serviceC.data,
    });
  } catch (err) {
    res.status(500).send("Error aggregating data");
  }
});

app.listen(3000, () => console.log("API running"));
```

- 3 services are called in parallel.
- If 1 of them is slow (e.g., has a p99 latency of 3 seconds), the whole endpoint waits.
- This causes tail latency propagation.

### Example Tail Latency Data

| Percentile | Latency (ms) |
| ---------- | ------------ |
| p50        | 100          |
| p90        | 200          |
| p99        | 3000         |
| p99.9      | 8000         |

You can see that while most users experience sub-200ms responses, a few users get multi-second delays, causing a bad experience.

## How to Reduce Tail Latency

1. **Timeouts & Fallbacks:** Set timeouts for slow services and return cached/stale/partial data:

```js
const axiosWithTimeout = axios.create({ timeout: 500 });
```

2. **Redundancy / Hedging Requests:** Send requests to multiple replicas and use the fastest response.
3. **Load Balancing:** Avoid overloading specific servers that are slower.
4. **Isolate Slow Paths:** Identify slow services and split critical/fast and slow/non-critical paths.
5. **Queue Management:** Use back-pressure and queues to avoid unbounded waiting.
6. **Monitor p95/p99 metrics** not just average latency.

# Network Latency

Network latency refers to the time delay experienced in a system when data is transmitted from one point to another over a network. It is a critical aspect of distributed systems, client-server architectures, and microservices, where components communicate over networks.

- Measured typically in milliseconds (ms).
- Often described as RTT (Round Trip Time) – the time it takes for a request to go from sender to receiver and back.

## Components of Network Latency

1. **Propagation Delay**
   - Time for a signal to travel through the medium (e.g., fiber optics).
   - Depends on distance and medium speed.
   - Example: Light travels ~200,000 km/s in fiber → 1000 km ≈ 5 ms.
2. **Transmission Delay**
   - Time to push bits onto the wire.
   - Depends on packet size and bandwidth.
   - Formula: Packet size / Bandwidth
3. **Processing Delay**
   - Time for routers/switches to process packet headers and routing logic.
4. **Queuing Delay**
   - Time packets wait in queue due to network congestion or traffic shaping.

## Techniques to Reduce Network Latency

| Technique                           | Description                                             |
| ----------------------------------- | ------------------------------------------------------- |
| **Caching**                         | Use CDN/memory cache to reduce server round trips.      |
| **Data Aggregation**                | Combine multiple service calls into one request.        |
| **CDNs (Content Delivery Network)** | Place content closer to user geolocation.               |
| **Asynchronous Processing**         | Offload non-critical tasks to background queues.        |
| **Connection Optimization**         | Keep-alive, HTTP/2 multiplexing, gRPC over HTTP/2, etc. |
| **Edge Computing**                  | Move computation closer to users/devices.               |
| **Compression**                     | Reduce data size over the network.                      |

# Memory Access Latency

Memory access latency is the time delay between issuing a memory request (read/write) and the moment the data is available to the processor or system component. It is measured in nanoseconds (ns) or CPU cycles, and it plays a critical role in performance-sensitive applications such as databases, in-memory systems, or low-latency services.

## Memory Hierarchy & Latency

Modern systems use a hierarchical memory model to balance speed, capacity, and cost.
| Memory Type | Latency (approx) | Size (typical) | Location |
| ------------ | ---------------- | -------------- | ---------------- |
| CPU Register | 0.25 ns | Bytes | On CPU |
| L1 Cache | 0.5 – 1 ns | \~32 KB | On CPU core |
| L2 Cache | 3 – 10 ns | \~256 KB | On CPU chip |
| L3 Cache | 10 – 30 ns | \~8 MB | Shared on chip |
| RAM (DRAM) | 50 – 100 ns | \~GBs | On motherboard |
| SSD Storage | 50 – 150 μs | \~TBs | PCIe/SATA device |
| HDD | 5 – 10 ms | \~TBs | External disk |

As we move down the hierarchy, latency increases and cost per byte decreases.

## Why Memory Latency Matters

1. CPU is faster than memory → Even small delays stall execution.
2. I/O-bound vs Memory-bound → High latency increases wait time.
3. Performance bottlenecks → Especially in high-throughput systems.
4. Cache misses lead to expensive memory fetches → Cache-efficient code matters.

## Optimization Techniques for Memory Latency

| Strategy                     | Description                                                            |
| ---------------------------- | ---------------------------------------------------------------------- |
| **Caching**                  | Store frequently accessed data in faster memory                        |
| **Prefetching**              | Predict and load future memory needs ahead of time                     |
| **Memory locality**          | Improve access patterns (e.g., access arrays sequentially)             |
| **Data alignment**           | Structure data to fit cache lines better                               |
| **Avoiding cache thrashing** | Reduce conflicts in cache sets by designing access-friendly structures |
| **NUMA-awareness**           | Place data close to the CPU core using it in NUMA systems              |

## Example with In-Memory Database

Scenario: A real-time analytics service stores data in memory (Redis, Memcached).

- Accessing hot data in CPU cache: ~1–5 ns (very fast)
- Accessing cold data in RAM: ~100 ns (20× slower)
- Accessing persisted data in SSD (fallback): ~100,000 ns = 100 μs

# Disk Access Latency

Disk access latency refers to the time it takes for a system to retrieve or write data to storage, such as a hard drive (HDD) or solid-state drive (SSD). It includes all delays between initiating a read/write request and completing the operation.

Disk latency is orders of magnitude slower than memory or CPU cache access, making it a critical bottleneck in system performance—especially for databases, file systems, or I/O-heavy applications.

## Components of Disk Access Latency

For HDDs (mechanical disks):

1. Seek Time – Time for the read/write head to move to the correct track (avg: ~5–10 ms).
2. Rotational Latency – Time for the disk to rotate to the correct sector (avg: ~2–6 ms).
3. Transfer Time – Time to actually read/write the bits (depends on bandwidth).

For SSDs (flash-based storage):

- No mechanical parts.
- Access latency is much lower (tens to hundreds of microseconds, ~0.05–0.15 ms).
- High throughput via parallel flash channels.

## Disk Latency Comparison Table

| Storage Type | Avg Latency | Notes                               |
| ------------ | ----------- | ----------------------------------- |
| CPU Register | \~0.3 ns    | Fastest, on CPU                     |
| L1 Cache     | \~1 ns      | On CPU core                         |
| RAM (DRAM)   | \~100 ns    | Main memory                         |
| SSD (NVMe)   | \~50–150 μs | No mechanical delay, fast           |
| HDD          | \~5–10 ms   | Mechanical delay, slow              |
| Network Disk | 10–100 ms+  | Depends on network and disk backend |

**1 ms = 1,000 μs = 1,000,000 ns**

## Why Disk Latency Matters

1. I/O is often the slowest part of data-intensive systems (e.g., logs, queries, file reads).
2. Blocking disk reads/writes can stall entire threads or services.
3. Can be the primary cause of slow response time or request timeouts in web applications, databases, or APIs.

## Strategies to Minimize Disk Latency

| Technique                            | Description                                                 |
| ------------------------------------ | ----------------------------------------------------------- |
| **Use SSDs over HDDs**               | Orders of magnitude faster                                  |
| **Database Indexing**                | Avoid full scans of large disk tables                       |
| **Caching (e.g., Redis)**            | Store frequently accessed data in memory                    |
| **Batching Writes**                  | Group small writes into large blocks                        |
| **Asynchronous I/O**                 | Avoid blocking the main thread                              |
| **Disk Striping (RAID 0)**           | Increase parallel access to disk                            |
| **Log-structured Merge Trees (LSM)** | Write-optimized storage format (used in Cassandra, RocksDB) |
| **Avoid Random Access**              | Favor sequential reads/writes (important for HDDs)          |

# Throughput

Throughput refers to the number of requests or operations a system can handle within a specific period of time, typically measured in requests per second (RPS) or transactions per second (TPS).

## Key Concepts of Throughput

| Term            | Description                                                                     |
| --------------- | ------------------------------------------------------------------------------- |
| **Throughput**  | The number of successful requests handled by the system per second/minute/hour. |
| **Latency**     | The time it takes to process a single request.                                  |
| **Concurrency** | The number of requests being processed at the same time.                        |

**High throughput with low latency is ideal for performance.**

$$
Throughput = \frac{Number of requests completed}{Time taken}
$$

## Why Throughput Matters in System Design

- It shows how well your system scales under load.
- It helps you determine resource needs (CPU, memory).
- It affects your user capacity and SLA performance.

## Throughput vs Latency

| Metric     | Focus                       | Measured In       |
| ---------- | --------------------------- | ----------------- |
| Latency    | Time per request            | Milliseconds (ms) |
| Throughput | Requests handled per second | RPS (req/sec)     |

## How to Improve Throughput in Node.js

| Method                    | Description                                                          |
| ------------------------- | -------------------------------------------------------------------- |
| **Use Clustering**        | Utilize multiple CPU cores using Node.js `cluster` module            |
| **Offload Work**          | Delegate work to background workers or queues (e.g., RabbitMQ, Bull) |
| **Use Caching**           | Cache DB/API responses to avoid repeated expensive processing        |
| **Use Load Balancer**     | Distribute load across multiple Node.js instances                    |
| **Use Asynchronous Code** | Avoid blocking the event loop with CPU-intensive tasks               |

## Measure Throughput

Install tool:

```shell
npm install -g autocannon
```

Run test:

```shell
autocannon -d 10 -c 50 http://localhost:3000/heavy
```

Explanation:

- `-d 10` = duration: 10 seconds
- `-c 50` = concurrency: 50 clients sending requests
  Output (example):

```shell
Requests/sec: 18
Latency: 51 ms
```

This confirms our estimate. Each request takes ~50ms → throughput ~20 RPS.

## Example of Throughput

```js
const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isMaster) {
  const cpuCount = os.cpus().length;
  console.log(`Master PID: ${process.pid}, forking ${cpuCount} workers...`);
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
} else {
  const app = require("express")();
  app.get("/", (req, res) => {
    const start = Date.now();
    while (Date.now() - start < 50) {}
    res.send(`Handled by PID: ${process.pid}`);
  });

  app.listen(3000, () => {
    console.log(`Worker PID: ${process.pid} running...`);
  });
}
```

# Transmission Control Protocol

TCP (Transmission Control Protocol) is a reliable, connection-oriented protocol in the transport layer of the OSI model (Layer 4) and Internet Protocol Suite (TCP/IP stack). It enables reliable communication between two endpoints (e.g., client and server) over an unreliable network like the Internet.

## Features of TCP

| Feature                 | Description                                                                                                       |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Connection-oriented** | TCP establishes a connection using a 3-way handshake (SYN → SYN-ACK → ACK) before sending data.                   |
| **Reliable delivery**   | Guarantees all packets are delivered in order and without corruption (using acknowledgments and retransmissions). |
| **Error checking**      | Uses checksums to detect errors in data transmission.                                                             |
| **Flow control**        | Uses **sliding window protocol** to prevent overwhelming the receiver.                                            |
| **Congestion control**  | Avoids network congestion via algorithms like **TCP Tahoe, Reno, Cubic**, etc.                                    |
| **Stream-oriented**     | Treats data as a continuous stream (not message-based like UDP).                                                  |

## How TCP Works

1. Client sends a request to server (e.g., HTTP over TCP).
2. TCP handshake ensures both sides are ready to communicate.
3. Data is split into segments, numbered, and sent.
4. Receiver acknowledges each received packet.
5. Missing packets are retransmitted.
6. Connection is gracefully closed using FIN-ACK sequence.

## Example Architecture Using TCP

**Scenario:**

You’re designing a basic web system:

- Frontend (React/Browser)
- Backend API (Node.js)
- Database (PostgreSQL)

All these components use TCP under the hood.

System Design Diagram (simplified):

```
[Client Browser]
     |
     |  HTTP over TCP
     v
[Node.js Backend]
     |
     |  TCP (pg driver)
     v
[PostgreSQL DB]
```

**Explanation:**

1. Client ↔ Backend (HTTP over TCP):

   - The browser opens a TCP connection to the server (e.g., port 443 for HTTPS).
   - TCP ensures the request and response are delivered reliably.

2. Backend ↔ Database (TCP Socket):

   - The backend uses a TCP connection to communicate with the database.
   - The Node.js pg driver uses TCP to send SQL queries and receive results.

3. Reliability is critical. If any packets are dropped (common on WiFi or mobile), TCP retransmits them without your app needing to handle it manually.

## Example of TCP with Node.js

TCP Server (Node.js)

```js
const net = require("net");

const server = net.createServer((socket) => {
  console.log("Client connected");

  socket.on("data", (data) => {
    console.log(`Received: ${data}`);
    socket.write("Hello from server!");
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

server.listen(3000, () => {
  console.log("TCP server listening on port 3000");
});
```

TCP Client (Node.js)

```js
const net = require("net");

const client = net.createConnection({ port: 3000 }, () => {
  console.log("Connected to server");
  client.write("Hello from client!");
});

client.on("data", (data) => {
  console.log(`Server says: ${data}`);
  client.end();
});

client.on("end", () => {
  console.log("Disconnected from server");
});
```

## When to Use TCP in System Design

- Web apps (HTTP, HTTPS)
- Database connections
- Microservice communication via HTTP/gRPC
- File transfer protocols (FTP, SFTP)

## Advantages & Disadvantages of TCP

| Advantage                                | Disadvantage                                              |
| ---------------------------------------- | --------------------------------------------------------- |
| Reliable & ordered delivery              | Slower than UDP due to overhead                           |
| Built-in congestion & flow control       | More complex than connectionless protocols                |
| Suited for critical apps (e.g., web, DB) | Not ideal for low-latency needs (e.g., gaming, streaming) |

# TCP Handshake

The TCP 3-way handshake is the process by which a client and server establish a reliable connection before exchanging data. It ensures that both sides are ready to communicate, sequence numbers are synchronized, and the network path is working.

## Step-by-Step: TCP 3-Way Handshake

| Step       | Sender → Receiver | Description                                                                                                                                               |
| ---------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1️⃣ SYN     | Client → Server   | Client sends a **SYN** (synchronize) packet with an initial sequence number (e.g., `Seq = 100`) to start a connection.                                    |
| 2️⃣ SYN-ACK | Server → Client   | Server replies with a **SYN-ACK**: acknowledges client's SYN and sends its own SYN with its own initial sequence number (e.g., `Seq = 500`, `Ack = 101`). |
| 3️⃣ ACK     | Client → Server   | Client sends back an **ACK** acknowledging the server’s SYN (`Ack = 501`). Connection is now established.                                                 |

## Purpose of TCP Handshake in System Design

- **Reliability:** Ensures both ends are ready and capable of communication.
- **Sequence Number Sync:** Sets up both sides to track packet order.
- **Avoids Half-Open Connections:** Prevents unintentional connections caused by dropped packets or old messages.
- **Security (partial):** Helps mitigate some basic spoofing or replay attacks by requiring return traffic.

## Diagram of TCP Handshake

```
Client                                Server
  |                                     |
  | ----------- SYN (Seq=100) --------> |
  |                                     |
  | <------ SYN-ACK (Seq=500, Ack=101)--|
  |                                     |
  | ------- ACK (Seq=101, Ack=501) ---->|
  |                                     |
Connection Established                  |
```

## Example Scenario of TCP Handshake

**Scenario:** Web Client ↔ Web Server (HTTP over TCP)
Let’s say a user visits a website (e.g., https://example.com):

1. Browser initiates TCP connection to example.com on port 443.
2. TCP 3-way handshake happens to establish a reliable connection.
3. Once connected, HTTPS handshake begins, followed by HTTP request/response.

Without this TCP handshake, the HTTP request might go to a server that’s not ready, causing dropped data or errors.

## TCP Handshake with Node.js

Although Node.js abstracts the actual handshake, here’s how the `net` module internally triggers it when `connect()` is called:

**Server**

```js
const net = require("net");

const server = net.createServer((socket) => {
  console.log("Client connected"); // after handshake
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
```

**Client**

```js
const net = require("net");

const client = net.createConnection({ port: 3000 }, () => {
  console.log("Connected to server"); // handshake complete
});
```

- When client.createConnection() is called:
  - OS sends SYN.
  - Waits for SYN-ACK.
  - Sends ACK.
- Only after that will the "connect" callback fire.

## TCP Handshake Use Cases

| Use Case                                  | How TCP Handshake Helps                                                  |
| ----------------------------------------- | ------------------------------------------------------------------------ |
| **Microservices**                         | Ensures gRPC/HTTP clients don’t send data until backend is ready.        |
| **Load balancers (e.g., Nginx, HAProxy)** | Wait for successful handshake before forwarding requests.                |
| **API Gateways**                          | Establishes stable connection before passing request to backend service. |
| **Database Clients**                      | PostgreSQL or MySQL drivers use handshake before sending queries.        |

## System Design Considerations of TCP Handshake

| Challenge                 | Explanation                                                                                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Latency**               | Adds round-trip time before data starts flowing.                                                                                 |
| **Half-open connections** | Clients that disconnect improperly can leave resources open on the server.                                                       |
| **SYN flood attacks**     | Attackers can send many SYNs without completing handshake, overwhelming the server (Mitigated via SYN cookies or rate limiting). |

# TLS Handshake

The TLS (Transport Layer Security) handshake is a multi-step protocol used to establish a secure communication channel between a client and a server over an insecure network (like the Internet). It builds on top of TCP and ensures:

- Confidentiality (encryption)
- Integrity (data not altered)
- Authentication (server identity verified)

TLS is most commonly used in HTTPS, secure email, VPNs, and secure APIs.

## TLS Handshake – Step-by-Step Breakdown

Default Modern TLS 1.2+ (simplified)

| Who    | Message                     | Purpose                                                                        |
| ------ | --------------------------- | ------------------------------------------------------------------------------ |
| Client | `ClientHello`               | Proposes supported TLS versions, cipher suites, and sends random value.        |
| Server | `ServerHello`               | Selects TLS version, cipher suite, and sends its certificate and random value. |
| Server | `Certificate`               | Contains server’s public key signed by a trusted CA.                           |
| Client | `Verify certificate`        | Checks if the cert is valid (via CA chain and hostname).                       |
| Client | `Pre-Master Key`            | Encrypts and sends a pre-master secret using server’s public key.              |
| Both   | `Generate session keys`     | Both generate the same symmetric key using the shared secret + randoms.        |
| Client | `Finished`                  | Sends encrypted handshake message.                                             |
| Server | `Finished`                  | Sends encrypted handshake message.                                             |
| Both   | Secure communication begins | Now both sides use symmetric encryption.                                       |

## Purpose of TLS in System Design

| Goal                | How TLS Handshake Helps                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| **Authentication**  | Client verifies it’s talking to a real, trusted server (via certificate).                       |
| **Encryption**      | All HTTP data is encrypted using symmetric keys generated during handshake.                     |
| **Integrity**       | Protects against tampering or replay attacks using MACs or AEAD encryption.                     |
| **Forward secrecy** | (with ephemeral key exchange like ECDHE) Even if private key is stolen, past sessions are safe. |

## Visual Diagram of TLS Handshake

```
Client                         Server
  |                             |
  | --- ClientHello ----------> |  (Client proposes cipher suites, random)
  |                             |
  | <-- ServerHello ----------- |  (Server picks suite, sends cert & random)
  |                             |
  | <-- Certificate ------------|
  |                             |
  |     [Client verifies cert]  |
  |                             |
  | --- Pre-Master Key (Encrypted) --> |
  |                             |
  |  [Both compute session key] |
  | --- Finished (encrypted) -->|
  | <-- Finished (encrypted) ---|
  |                             |
  🔒 Encrypted communication begins
```

## Example of TLS Handshake

Scenario: A client makes a request to https://api.example.com

1. Client (browser or HTTP client) sends a TCP connection request.
2. After TCP handshake, client sends a ClientHello to begin TLS.
3. TLS handshake negotiates a cipher suite, and verifies the server's certificate.
4. Both generate the same session key.
5. Secure HTTPS communication starts (e.g., sending a JSON payload).
   Why it's important in system design:
   | Component | Role of TLS |
   | ------------------------------------ | -------------------------------------------------------------- |
   | API Gateway (e.g., NGINX, Envoy) | Terminates TLS, protects downstream services |
   | CDN (e.g., Cloudflare) | Uses TLS to secure edge-to-origin traffic |
   | Microservices with mutual TLS (mTLS) | Authenticates both client and server, adds zero-trust security |
   | Mobile apps | Use TLS to securely communicate with backend servers |

## Example of TLS Handshake with Node.js

Server

```js
const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("server.key"), // Private key
  cert: fs.readFileSync("server.crt"), // Certificate (signed by CA)
};

https
  .createServer(options, (req, res) => {
    res.writeHead(200);
    res.end("Hello TLS-secured world!");
  })
  .listen(443);
```

```js
const https = require("https");

https.get("https://localhost", (res) => {
  res.on("data", (d) => {
    process.stdout.write(d);
  });
});
```

Under the hood, the `https` module performs the entire TLS handshake automatically using Node's `tls` module (part of OpenSSL).

## TLS vs TCP

| Feature   | TCP                  | TLS                                              |
| --------- | -------------------- | ------------------------------------------------ |
| Layer     | Transport Layer (L4) | Application Layer (L5–6)                         |
| Security  | None                 | Provides encryption, authentication              |
| Handshake | 3-way                | Multi-step handshake with cryptographic exchange |
| Used In   | HTTP, FTP, DB        | HTTPS, SMTPS, secure APIs, VPN                   |


# Scalability

Scaling in system design refers to the ability of a system to handle increased load or demand by growing in capacity. As your application gains users, handles more requests, or processes more data, scaling ensures it continues to perform well and meet user expectations.

## Vertical Scaling (Scaling Up)

Vertical Scaling (also called scaling up) means increasing the capacity of a single machine/server to handle more load. Instead of adding more servers (like in horizontal scaling), you upgrade the existing machine with:

- More powerful CPU
- More RAM
- Faster SSD storage
- Better network bandwidth

**Vertical scaling is often used in:**

- Monolithic applications
- Databases (before sharding/replication)
- Early-stage startups where architecture is still simple
- Systems with tight dependencies or shared state (where horizontal scaling is hard)

### Benefits of Vertical Scalling

| Advantage               | Explanation                                             |
| ----------------------- | ------------------------------------------------------- |
| ✅ Simpler architecture | No need to manage multiple nodes or distributed systems |
| ✅ No code changes      | App continues to run without refactoring                |
| ✅ Faster to implement  | Just upgrade the hardware or instance type              |
| ✅ Useful for databases | Databases benefit from more memory and CPU              |

### Limitations of Vertical Scalling

| Limitation             | Explanation                                                  |
| ---------------------- | ------------------------------------------------------------ |
| Hardware limit         | You can only scale up to the most powerful machine available |
| Downtime possible      | Upgrading may require rebooting the server                   |
| Cost increases steeply | Higher-tier machines cost disproportionately more            |
| No fault tolerance     | Single point of failure if the machine crashes               |

### Example of Vertical Scaling

**Scenario:** You built a Node.js-based blog platform. It runs on a single server (2 vCPU, 4 GB RAM). As traffic increases, your app slows down—especially under heavy request bursts.

**Solution:** You vertically scale by upgrading to a more powerful instance (8 vCPU, 16 GB RAM).

```js
// server.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // Simulate heavy computation
  let sum = 0;
  for (let i = 0; i < 1e7; i++) sum += i;
  res.send("Welcome to my blog!");
});

app.listen(3000, () => console.log("Server started on port 3000"));
```

On a low-memory, low-CPU server, requests take time and queue up. Users may face timeouts or slow responses.

#### After Vertical Scaling

You upgrade the server (e.g., using AWS EC2):

- From: `t3.small` (2 vCPU, 2GB RAM)
- To: `m6i.2xlarge` (8 vCPU, 32GB RAM)

This boosts:

- Number of concurrent requests handled
- Speed of compute-heavy endpoints
- RAM available for Node.js heap and cache

No code changes needed.

### Vertical Scaling for Databases

A common use case:

- You're using PostgreSQL with high query volume.
- Queries are slow due to lack of memory (no room for indexes/cache).
- You upgrade the DB instance to get more RAM & CPU.

Tools like Amazon RDS, DigitalOcean Managed DB, or Google Cloud SQL allow one-click vertical scaling.

### Performance Comparison of Vertical Scalling

| Metric             | Before Upgrade  | After Upgrade |
| ------------------ | --------------- | ------------- |
| Avg. response time | 800ms           | 150ms         |
| Concurrent users   | 100             | 1000+         |
| Memory usage       | 95% (swap used) | 50% (no swap) |

## Horizontal Scaling (Scaling Out)

Horizontal Scaling (also called scaling out) is the process of adding more machines or nodes to your system to handle increased load. Instead of upgrading a single machine (vertical scaling), you add more instances of your application or database and distribute traffic or data among them behind a load balancer..

It require more complex architecture; requires **stateless** design.

It’s used in:

- Web applications serving high traffic (e.g., Netflix, Facebook)
- Microservices architectures
- Cloud-native systems (Kubernetes, serverless)
- Big data processing systems

### Benefits of Horizontal Scaling

| Advantage         | Explanation                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| High scalability  | Add as many servers as needed to meet demand                           |
| High availability | No single point of failure—if one server fails, others handle the load |
| Cost efficiency   | Use many low-cost servers instead of one expensive one                 |
| Fault tolerance   | Easy to design resilient systems                                       |
| Easy automation   | Works well with autoscaling in cloud environments                      |

### Limitations of Horizontal Scaling

| Limitation               | Explanation                                               |
| ------------------------ | --------------------------------------------------------- |
| 🚫 More complex system   | Requires load balancing, service discovery, etc.          |
| 🚫 Stateless requirement | App logic must avoid using local memory for session/state |
| 🚫 Network overhead      | Data sharing across nodes adds latency and complexity     |

### Horizontal Scaling Architecture

```
             +-------------------+
             |   Load Balancer   |
             +--------+----------+
                      |
   +------------------+------------------+
   |                  |                  |
+-----+          +-----+            +-----+
| App |          | App |            | App |
| #1  |          | #2  |            | #3  |
+-----+          +-----+            +-----+
```

### Example of Horizontal Scalling

**Scenario:** You built a Node.js API using Express. As traffic increases, a single instance isn’t enough. You need to scale out.

#### Step 1: Create a Stateless Node.js App

You deploy multiple Node.js app instances using a load balancer like NGINX or AWS ELB to distribute incoming HTTP traffic.

```js
// server.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`Hello from process ${process.pid}`);
});

app.listen(3000, () => console.log(`Server running on port 3000`));
```

You can deploy this app on 3 servers and use a load balancer to route traffic across them.

To support horizontal scaling, make sure:

- No local in-memory state
- Sessions (if any) are stored in Redis or DB

#### Step 2: Run Multiple Instances (e.g., Using `cluster` or Docker)

1. Using `cluster` module (simulates horizontal scaling on one machine):

```js
// cluster.js
const cluster = require("cluster");
const os = require("os");
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork(); // Spawn worker
  }
} else {
  require("./server"); // Worker runs app
}
```

This runs multiple processes on one machine — like simulating multiple servers.

2. Real Horizontal Scaling (Multiple Servers + Load Balancer)
   - Deploy your Node.js app on multiple VMs/containers (e.g., app1, app2, app3)
   - Use NGINX or cloud load balancer to route traffic across them.

NGINX config (load balancing):

```
http {
  upstream node_backend {
    server 192.168.1.10:3000;
    server 192.168.1.11:3000;
    server 192.168.1.12:3000;
  }

  server {
    listen 80;
    location / {
      proxy_pass http://node_backend;
    }
  }
}
```

### Other Components You Might Add

- **Session Store:** Redis or Memcached (to share sessions across instances)
- **Service Discovery:** If using microservices (e.g., Consul, Eureka)
- **Containerization:** Docker, Kubernetes (to manage scaling and orchestration)
- **Auto Scaling:** AWS Auto Scaling Groups, GCP Instance Groups, or K8s Horizontal Pod Autoscaler

## Strategies to Implement Scaling

### Stateless Services

- Ensure your application doesn’t store session or state data in memory. Use external tools like Redis or databases for session storage.
- This allows easy replication across servers.

### Load Balancing

- Distribute requests across instances.
- Load balancer uses algorithms like Round Robin, Least Connections, or IP Hashing.

```shell
# Sample NGINX config
upstream backend {
    server app1.example.com;
    server app2.example.com;
    server app3.example.com;
}

server {
    listen 80;
    location / {
        proxy_pass http://backend;
    }
}
```

### Database Scaling

- **Read Replicas:** Separate read traffic from write.
- **Sharding:** Partition data across multiple databases.
- **Caching:** Use Redis or Memcached to cache frequent queries.

## Example of Scaling

### Scenario:

You’re building a product catalog service. Initially, you have:

- One Node.js server
- One PostgreSQL DB
  As traffic grows, product searches slow down.

### Solution:

1. **Scale Node.js horizontally:** Use Docker/Kubernetes to spin up multiple Node.js containers.
2. Introduce Redis Cache:\*\* Cache popular search queries.
3. Use PostgreSQL Read Replicas:\*\* Direct read-heavy operations (like product listings) to replicas.
4. Add Load Balancer:\*\* AWS Application Load Balancer routes traffic across Node.js containers.

# Decentralization

Decentralization refers to distributing system components (computation, data, decision-making, control) across multiple nodes or locations, rather than relying on a single central authority or server.

Decentralization is often contrasted with:

- **Centralized systems**, where a single node or server manages everything.
- **Distributed systems**, which may still have centralized control but multiple physical machines.

## Core Characteristics of Decentralized Systems

| Feature                        | Description                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------ |
| **No single point of failure** | Failure in one node doesn't bring down the whole system.                       |
| **Autonomy of nodes**          | Each node can make decisions independently or semi-independently.              |
| **Peer-to-peer communication** | Nodes talk directly without needing a central server.                          |
| **Scalability**                | System can grow without bottlenecking on a central node.                       |
| **Trustless operation**        | Nodes may not fully trust each other; cryptography or consensus is often used. |

## Components of a Decentralized System

- **Multiple Nodes:** Each running an instance of software or service.
- **Consensus Mechanism:** For agreement among nodes (like in blockchain).
- **Replication / Data Redundancy:** Data is often duplicated across nodes.
- **Failure Handling Logic:** Nodes can detect and recover from failures.
- **Communication Protocol:** Peer-to-peer or gossip protocols.

## Pros & Cons of Decentralization

| Advantages                                  | Disadvantages                                  |
| ------------------------------------------- | ---------------------------------------------- |
| High availability and fault tolerance       | Complex to design and manage                   |
| Better scalability                          | Data consistency is hard (CAP theorem)         |
| Greater privacy and control for users       | Security issues between untrusted nodes        |
| Resistance to censorship or central control | Slower consensus mechanisms (e.g., blockchain) |

# Independence

Independence in system design refers to the ability of system components (modules, services, or subsystems) to function, develop, and scale with minimal or no dependency on others.

## Types of Independence

| Type                         | Description                                                             | Example                                       |
| ---------------------------- | ----------------------------------------------------------------------- | --------------------------------------------- |
| **Functional Independence**  | Each module performs a specific task without relying heavily on others. | Logging module, Payment processing            |
| **Deployment Independence**  | Components can be deployed separately.                                  | Microservices                                 |
| **Scaling Independence**     | Only the parts that need more resources are scaled.                     | Independent services for search, analytics    |
| **Failure Independence**     | A crash in one part doesn’t bring down the rest.                        | Docker containers running isolated apps       |
| **Development Independence** | Teams can build and release different modules at different times.       | Frontend and backend teams working separately |


# System Reliability

## Reliability

Reliability in system design refers to the ability of a system to consistently perform its intended function correctly, even in the presence of faults or failures. It means the system should be fault-tolerant, resilient, and able to recover gracefully from errors.

- **Availability:** The system is up and accessible when needed.
- **Fault tolerance:** The system continues operating even if some components fail.
- **Durability:** Once data is written, it remains available without loss.
- **Consistency:** The system behaves in an expected way under all circumstances.

**Goals of a Reliable System**

- **Minimize Downtime** – Keep services running with minimal interruptions.
- **Fail Gracefully** – If a part fails, it doesn’t crash the whole system.
- **Quick Recovery** – Recover fast from outages or failures.
- **Prevent Data Loss** – Data must not be lost during or after failures.
- **Predictable Behavior** – The system works the same way every tim

### Improve Reliability

| Technique                 | Description                                                          |
| ------------------------- | -------------------------------------------------------------------- |
| **Redundancy**            | Duplicate components (servers, DBs) to handle failures               |
| **Load Balancing**        | Distribute traffic across multiple instances                         |
| **Failover Mechanisms**   | Automatically switch to backup systems if the primary one fails      |
| **Replication**           | Copy data across multiple nodes for high availability and durability |
| **Health Checks**         | Monitor services and restart failed ones                             |
| **Retries with Backoff**  | Retry failed requests after increasing intervals                     |
| **Graceful Degradation**  | The system reduces functionality instead of failing completely       |
| **Monitoring & Alerting** | Detect and respond to issues quickly                                 |
| **Backups & Snapshots**   | Recover from disasters or data corruption                            |

### Example of Reliable E-commerce System

Imagine you're designing an e-commerce platform like Amazon. Reliability is crucial—downtime means lost sales and customers.

#### Components

- Frontend Web Servers
- Backend Services (like Product Service, Payment Service)
- Database (e.g., MySQL/PostgreSQL)
- Cache Layer (e.g., Redis)
- Message Queue (e.g., RabbitMQ/Kafka)

#### How to Design for Reliability

1. Web Servers:

   - Use load balancer (like Nginx or AWS ELB) to distribute traffic.
   - Auto-scale using Kubernetes or AWS Auto Scaling.

2. Backend Services:

   - Deploy multiple instances (e.g., 3 replicas of Payment Service).
   - Implement circuit breakers to avoid cascading failures.

3. Database:

   - Use master-slave replication or multi-master.
   - Enable automated backups and point-in-time recovery.

4. Caching Layer:

   - Use Redis in cluster mode with failover support.

5. Message Queue:

   - Use Kafka with replication and acknowledgments to prevent message loss.
   - Retry failed messages with dead-letter queues.

6. Monitoring & Alerts:

   - Tools like Prometheus + Grafana, Datadog, or ELK Stack.
   - Set alerts on latency, error rates, and service health.

## Failure

In system design, failure refers to any event where a system, component, or service stops working as expected. This could mean downtime, data loss, performance degradation, or incorrect results — essentially, anything that breaks the system’s reliability, availability, or correctness.

### Types of Failure

| Type                   | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| **Hardware failure**   | Disk crash, memory error, power outage                   |
| **Software failure**   | Bugs, crashes, memory leaks, unhandled exceptions        |
| **Network failure**    | Packet loss, timeout, DNS issues, latency spikes         |
| **Database failure**   | Corruption, connection timeouts, replication lag         |
| **Dependency failure** | External services (APIs, payment gateways) go down       |
| **Human error**        | Misconfigurations, accidental deletions, bad deployments |
| **Security failure**   | Breach, DDoS attacks, unauthorized access                |

### Failure vs Fault

| Term        | Definition                                                               |
| ----------- | ------------------------------------------------------------------------ |
| **Fault**   | A **bug or issue** in the system (e.g., bad code, misconfiguration)      |
| **Failure** | When a fault **manifests** and the system behaves incorrectly or crashes |

### Examples of Failures

#### 1. Database Failure

Scenario: Your e-commerce app uses a single MySQL instance. One day, the database crashes due to disk failure.
Impact: Entire website becomes read-only or completely non-functional.

#### 2. Service Dependency Failure

Your service uses an external payment gateway. That API becomes unavailable.
Impact: Users can’t complete checkouts, causing loss in revenue.

#### 3. Network Partitioning (Split-Brain)

Two services hosted in separate regions lose connection due to a network partition.
Impact: They operate independently, potentially causing conflicting data writes.

#### 4. Deployment Failure

A new release has a bug that crashes the user authentication service.
Impact: Users cannot log in.

### How to Handle Failures (Design Principles)

| Technique                   | Description                                           |
| --------------------------- | ----------------------------------------------------- |
| **Redundancy**              | Use backup servers/services in case of failure        |
| **Failover**                | Automatically switch to standby systems               |
| **Circuit Breaker Pattern** | Temporarily stop requests to a failing service        |
| **Retries with Backoff**    | Retry failed requests, but not too aggressively       |
| **Timeouts**                | Prevent hanging requests due to slow/failing services |
| **Bulkheads**               | Isolate failures to small parts of the system         |
| **Graceful Degradation**    | Reduce functionality instead of total failure         |
| **Monitoring and Alerts**   | Detect and respond quickly to failures                |
| **Disaster Recovery**       | Plan and test for catastrophic failures               |

### Example of Netflix

Netflix must be resilient to failures since it serves millions globally.

#### Failure Scenario:

A single data center goes down due to a power issue.

##### Design Solutions Netflix uses:

- **Multi-region deployments:** Traffic rerouted to healthy regions.
- **Chaos Monkey (part of the Simian Army):** Intentionally kills services in production to test resilience.
- **Retry and backoff:** If a microservice fails, the caller retries with increasing intervals.
- **Circuit breakers:** If a service fails continuously, calls are stopped temporarily.

Result: End users likely don’t notice the issue.

### Failure Detection & Recovery

| Step          | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| **Detection** | Use health checks, metrics, heartbeat signals                  |
| **Isolation** | Use containerization or process boundaries to localize failure |
| **Recovery**  | Auto-restart, failover, database restore, or fallback services |

## Availability

Availability in system design refers to how accessible and operational a system is at any given time. It answers the question:
“Can users access the system when they need to?”

A highly available system is designed to ensure minimal downtime and maximum uptime, even in the face of failures or heavy load.

```
Availability = (Uptime) / (Uptime + Downtime)
```

For example, a service that is available 99.9% of the time means it may be down for about 43 minutes per month.

| Availability % | Downtime per Year | Downtime per Month |
| -------------- | ----------------- | ------------------ |
| 99%            | \~3.65 days       | \~7.2 hours        |
| 99.9%          | \~8.8 hours       | \~43.8 minutes     |
| 99.99%         | \~52.6 minutes    | \~4.4 minutes      |
| 99.999%        | \~5.26 minutes    | \~26 seconds       |

### Key Concepts for High Availability

| Concept                    | Explanation                                                              |
| -------------------------- | ------------------------------------------------------------------------ |
| **Redundancy**             | Duplicate components to take over if one fails                           |
| **Failover**               | Switch automatically to a backup system or server                        |
| **Load Balancing**         | Distribute incoming traffic to multiple servers                          |
| **Health Checks**          | Constant monitoring to ensure services are running properly              |
| **Stateless Architecture** | Servers don't store session data; allows any instance to handle requests |
| **Scalability**            | Handle traffic surges without going down                                 |
| **Monitoring & Alerts**    | Get notified instantly of any service degradation                        |
| **Disaster Recovery**      | Plans to recover from major failures (like region-wide outages)          |

#### Techniques to Improve Availability

| Technique                   | How It Helps                                                             |
| --------------------------- | ------------------------------------------------------------------------ |
| **Multi-Zone Deployment**   | Deploy services across availability zones or regions                     |
| **Auto Scaling**            | Add/remove servers automatically to maintain service health              |
| **Caching**                 | Reduce load on databases, enabling faster and more resilient performance |
| **Database Replication**    | Keep secondary DBs ready for failover                                    |
| **Circuit Breaker Pattern** | Avoid cascading failures                                                 |

### Example of Highly Available Web App

Let’s say you are designing a food delivery app backend like Uber Eats.

Goal: 99.99% Availability

#### Components:

- Frontend Web Servers
- Backend Microservices (e.g., Order, Payment, Notification)
- Database (e.g., PostgreSQL)
- Cache (Redis)
- Message Queue (e.g., Kafka)
- Load Balancer (e.g., NGINX, AWS ALB)

#### High Availability Design:

1. Load Balancers:

   - Distribute incoming traffic to multiple web servers.
   - If one server goes down, traffic is rerouted.

2. Web and Backend Services:

   - Deployed in multiple availability zones (AZs).
   - Use auto-scaling groups in AWS or Kubernetes deployments with multiple replicas.

3. Database:

   - Master-Slave replication.
   - Automatic failover to replicas using tools like Amazon RDS Multi-AZ or Patroni.

4. Caching Layer:

   - Redis Sentinel or Redis Cluster for high availability and failover.

5. Message Queue:

   - Kafka or RabbitMQ with replication to prevent message loss if a broker fails.

6. Monitoring:

   - Use Prometheus + Grafana or Datadog.
   - Trigger alerts if response times spike or instances fail.

7. Disaster Recovery Plan:

   - Nightly backups.
   - Infrastructure templates (e.g., Terraform) to re-deploy in a new region quickly.

### Availability vs Reliability

| Term         | Focus                                        | Example                                    |
| ------------ | -------------------------------------------- | ------------------------------------------ |
| Availability | System is **accessible** and **working**     | Website loads when the user visits it      |
| Reliability  | System is **functionally correct** over time | The correct product is shown when searched |

### Example Availability in AWS

Imagine hosting your app on AWS:

- EC2 instances in 3 AZs behind an Elastic Load Balancer
- RDS PostgreSQL in Multi-AZ mode
- S3 for asset storage (which is designed for 99.999999999% durability and high availability)
- CloudFront CDN to distribute content globally

This setup ensures that even if one data center (AZ) goes down, your app remains availabl

## Fault Tolerance

Fault tolerance means the system can withstand failures without affecting the overall functionality.

Failures are inevitable in any large-scale system—due to hardware crashes, software bugs, network issues, or human errors. A fault-tolerant system anticipates these failures and is designed to isolate, absorb, or recover from them.

### Fault vs Failure vs Fault Tolerance

| Term                | Meaning                                                         |
| ------------------- | --------------------------------------------------------------- |
| **Fault**           | A defect or abnormal condition (e.g., a bug, hardware failure)  |
| **Failure**         | When a fault causes a system or component to behave incorrectly |
| **Fault Tolerance** | The system’s ability to continue functioning despite the fault  |

### Characteristics of Fault-Tolerant Systems

| Feature                  | Description                                                             |
| ------------------------ | ----------------------------------------------------------------------- |
| **Redundancy**           | Having backup components that can take over in case of failure          |
| **Failover**             | Automatic switching to a backup system/component                        |
| **Replication**          | Duplication of data/services across multiple nodes                      |
| **Isolation**            | Contain failures to prevent cascading breakdowns                        |
| **Graceful Degradation** | If part of the system fails, reduce functionality instead of full crash |
| **Monitoring & Alerts**  | Detect faults early and respond proactively                             |

### Netflix's Fault Tolerance

Netflix is a great real-world example of extreme fault tolerance:

- Runs across multiple AWS regions.
- Uses Chaos Monkey, a tool that intentionally kills random servers to test fault tolerance.
- Relies on microservices with:
  - Redundancy
  - Circuit breakers
  - Service discovery
  - Retry and timeout logic
  - Eventual consistency in distributed systems
    Even if one part of Netflix breaks (e.g., recommendations), the core video streaming still works—thanks to graceful degradation.

### Fault Tolerance in Distributed Systems

Distributed systems (e.g., cloud apps, microservices) face unique challenges:

| Fault Type            | Strategy to Handle                                                         |
| --------------------- | -------------------------------------------------------------------------- |
| **Node failure**      | Use replication and automatic failover                                     |
| **Network partition** | Apply CAP theorem trade-offs (choose between consistency and availability) |
| **Service crash**     | Restart with health checks (e.g., Kubernetes liveness probes)              |
| **Disk failure**      | Use RAID, cloud storage, and backups                                       |
| **Corrupted data**    | Use checksums and versioned backups                                        |

## Redundancy

Redundancy in system design refers to having multiple components or resources that serve the same purpose, so that if one fails, the others can take over. It is a core technique for achieving fault tolerance, high availability, and reliability in modern systems.

**Why is Redundancy Important?**

- Prevents single points of failure (SPOF)
- Improves system availability and reliability
- Enables load balancing and failover
- Supports disaster recovery plans

### Types of Redundancy

| Type                      | Description                                                             |
| ------------------------- | ----------------------------------------------------------------------- |
| **Hardware Redundancy**   | Multiple physical devices (e.g., servers, disks, power supplies)        |
| **Software Redundancy**   | Multiple software instances performing the same function                |
| **Network Redundancy**    | Multiple network paths, routers, ISPs                                   |
| **Data Redundancy**       | Storing copies of data in different places (e.g., replication, backups) |
| **Geographic Redundancy** | Deploying across multiple data centers or regions                       |
| **Service Redundancy**    | Redundant APIs or microservices doing the same job                      |

### Redundancy in a Web Application

Imagine you're building an online ticket booking system. Here’s how redundancy is applied:

Goal: Ensure 99.99% availability and zero data loss

#### Components:

- Web servers
- Backend services (Booking, Payment, Notification)
- Databases
- File storage
- Message queues

#### Where Redundancy is Applied:

1. Web Servers (Software Redundancy)

   - Deploy multiple web server instances behind a load balancer.
   - If one crashes, others continue to serve traffic.

2. Database (Data Redundancy)

   - Use master-slave replication (e.g., MySQL, PostgreSQL).
   - If the master goes down, the slave can take over (automatic failover).

3. File Storage (Geographic Redundancy)

   - Store user-uploaded files in cloud storage (e.g., AWS S3), replicated across multiple availability zones (AZs).

4. Message Queue (Service Redundancy)

   - Kafka cluster with multiple brokers and topic replication.
   - Messages remain safe even if one broker fails.

5. Network (Network Redundancy)
   - Use multiple NICs, routers, and ISPs to ensure internet connectivity even if one fails.

### Failure Scenario

#### Without Redundancy

- You have a single database server.
- It crashes due to disk failure.
- Entire system goes down. Orders can't be placed.

#### With Redundancy

- You have a replicated database setup.
- Master fails → slave takes over in seconds.
- System stays online, users continue booking tickets.

### Redundancy vs Replication vs Backup

| Concept         | Purpose                           | Example                    |
| --------------- | --------------------------------- | -------------------------- |
| **Redundancy**  | Availability during failure       | Multiple web servers       |
| **Replication** | Real-time duplication of data     | MySQL master-slave         |
| **Backup**      | Recovery from long-term data loss | Nightly database snapshots |

### Design Considerations

| Consideration      | Why It Matters                                        |
| ------------------ | ----------------------------------------------------- |
| **Cost**           | More components = more expense                        |
| **Consistency**    | Need to handle data consistency across replicas       |
| **Failover logic** | Must be well-tested and fast                          |
| **Monitoring**     | Alert if primary fails and system switches to backup  |
| **Testing**        | Simulate failures regularly (e.g., Chaos Engineering) |

### Common Redundancy Patterns

| Consideration      | Why It Matters                                        |
| ------------------ | ----------------------------------------------------- |
| **Cost**           | More components = more expense                        |
| **Consistency**    | Need to handle data consistency across replicas       |
| **Failover logic** | Must be well-tested and fast                          |
| **Monitoring**     | Alert if primary fails and system switches to backup  |
| **Testing**        | Simulate failures regularly (e.g., Chaos Engineering) |

## Fault Detection

Fault detection is the process of identifying when a component or service in a system is behaving abnormally or failing, so corrective action can be taken.

It is a key first step in building fault-tolerant, highly available, and resilient systems.

**Why Is Fault Detection Important?**

- Prevents cascading failures by catching issues early
- Improves reliability and uptime
- Enables automated recovery (e.g., auto-restart, failover)
- Helps alert human operators quickly
- Ensures service-level objectives (SLOs) are met

### Fault Detection vs Fault Tolerance

| Concept             | Purpose                               |
| ------------------- | ------------------------------------- |
| **Fault Detection** | Identifies faults when they happen    |
| **Fault Tolerance** | Continues operation despite the fault |

### How Fault Detection Works

Fault detection usually involves observing system behavior and checking if it deviates from the expected state.

**Common Techniques:**
| Technique | Description |
| ----------------------------- | ------------------------------------------------------------------------- |
| **Health Checks** | Regularly ping services to check if they’re responsive |
| **Heartbeats** | Components send periodic signals to confirm they’re alive |
| **Timeouts** | If a service doesn't respond in time, it may be considered faulty |
| **Monitoring & Metrics** | Use tools to watch CPU, memory, error rates, request latency, etc. |
| **Log Analysis** | Scan logs for known error patterns |
| **Synthetic Tests** | Simulate user activity to detect failures in end-to-end flows |
| **Alerting Systems** | Send notifications (email, Slack, PagerDuty) when faults are detected |
| **Anomaly Detection (AI/ML)** | Detect subtle failures by modeling normal behavior and finding deviations |

### Fault Detection in a Web Application

Imagine a ride-sharing app backend with services like:

- User Service
- Ride Matching Service
- Payment Service

All running on Kubernetes.

#### Fault Detection Methods:

1. Liveness and Readiness Probes (Kubernetes)

   ```yaml
   livenessProbe:
   httpGet:
     path: /healthz
     port: 8080
   initialDelaySeconds: 10
   periodSeconds: 5
   ```

   - Kubernetes kills and restarts a container if it fails health checks.
   - Detects fault automatically and triggers self-healing.

2. Heartbeats Between Services

   - Each service sends heartbeats to a central monitoring service.
   - If no heartbeat is received within X seconds → mark as unhealthy.

3. Monitoring with Prometheus + Grafana

   - Track:
     - Error rate > 5% → raise alert
     - CPU usage > 90% → potential overload
     - Request latency > 3s → backend lag

4. Alerting via PagerDuty
   - When a fault is detected (e.g., Payment Service crashes), a notification is sent to an engineer:

```
PaymentService error rate > 10% for last 5 mins on prod cluster
```

## Health Check

A health check is a mechanism that tests whether a component or service in a system is working correctly. It’s a foundational tool used in modern system design for:

- Monitoring service health
- Triggering auto-healing
- Enabling load balancing
- Facilitating graceful startup and shutdown

### Types of Health Checks

| Type                | Purpose                                          | Used By                                         |
| ------------------- | ------------------------------------------------ | ----------------------------------------------- |
| **Liveness Check**  | Checks if the app is running (not dead or stuck) | Restart if it fails (e.g., Kubernetes)          |
| **Readiness Check** | Checks if the app is ready to serve requests     | Add/remove instance from load balancer          |
| **Startup Check**   | Checks if the app has finished initializing      | Delay liveness and readiness until app is ready |

### Where Health Checks Are Used

1. Load Balancers

   - Detect unhealthy nodes and stop sending traffic.
   - Example: AWS ALB/ELB, NGINX, HAProxy

2. Container Orchestrators (like Kubernetes)

   - Kill and restart failed containers automatically.
   - Only send traffic to "ready" pods.

3. Service Meshes

   - Decide routing based on service health (e.g., Istio, Linkerd).

4. Monitoring Systems

   - Collect health status to alert or visualize system state.

### Health Check in Kubernetes

Application: Food Delivery Backend API. Let's say you have a Node.js app running in Kubernetes. You want to:

- Restart it if it crashes (liveness)
- Wait for DB connection before allowing traffic (readiness)

Sample Express API

```js
app.get("/healthz", (req, res) => {
  if (db.isConnected()) {
    res.status(200).send("OK");
  } else {
    res.status(500).send("DB not connected");
  }
});
```

Kubernetes YAML

```yaml
livenessProbe:
  httpGet:
    path: /healthz
    port: 3000
  initialDelaySeconds: 10
  periodSeconds: 5
  failureThreshold: 3

readinessProbe:
  httpGet:
    path: /healthz
    port: 3000
  initialDelaySeconds: 5
  periodSeconds: 5
```

Kubernetes will:

- Check `/healthz` every 5 seconds.
- If 3 consecutive failures → restart the container (liveness).
- If it fails readiness → stop sending traffic to it.

### Characteristics of a Good Health Check Endpoint

| Characteristic                   | Why It Matters                                                      |
| -------------------------------- | ------------------------------------------------------------------- |
| **Fast**                         | Should respond quickly (e.g., <100ms)                               |
| **Non-blocking**                 | Should not interfere with actual processing logic                   |
| **Minimal logic**                | Avoid full computation — just check essentials (DB, cache, etc.)    |
| **Returns correct status codes** | `200 OK` for healthy, `500`/`503` for unhealthy                     |
| **Customizable**                 | Should allow adding logic like DB/caching/service dependency checks |

**What Happens Without Health Checks?**

- A crashed service keeps receiving traffic, causing errors.
- An initializing service gets hit before it’s ready.
- Failures go unnoticed until users complain or traffic drops.

## Recovery

Recovery is the process of bringing a system or component back to a working state after a failure has occurred.

**Why It Matters:** No matter how robust a system is, failures are inevitable — recovery ensures minimal downtime and data loss.

### Recovery Techniques

| Type                   | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| **Automatic Recovery** | System detects failure and recovers without human intervention |
| **Manual Recovery**    | Requires human to restore from backups or fix configuration    |
| **Checkpointing**      | Periodic snapshots to resume from last good state              |
| **Failover**           | Switch to standby system/service (e.g., secondary DB)          |

**Example**

- A PostgreSQL DB crashes. AWS RDS triggers automatic failover to a read replica.
- Users see minimal downtime (a few seconds) and the system continues operating.

## System Stability

Stability means a system continues operating within expected performance and behavior limits, even under stress or partial failure.

**Why It Matters:**
Unstable systems may:

- Crash under load
- Return incorrect data
- Exhibit erratic behavior

### Stability Strategies

| Strategy               | Description                                                                  |
| ---------------------- | ---------------------------------------------------------------------------- |
| **Load Shedding**      | Drop some requests when system is overwhelmed (return 429 Too Many Requests) |
| **Rate Limiting**      | Control how much traffic a system accepts                                    |
| **Backpressure**       | Tell clients to slow down sending data (common in message queues)            |
| **Resource Isolation** | Separate critical components to avoid full system crash                      |

**Example:**

- If your payment service is getting overloaded, you:
- Temporarily stop accepting new requests (load shedding)
- Let current requests finish without crashing the entire system

## Timeout

A timeout defines how long a system or client should wait for a response before giving up.

**Why It Matters:**

Without timeouts:

- A system might wait forever for a response
- Threads or resources may be blocked
- Cascading failures can occur

**Usage:**

- Set timeouts for API calls, DB queries, external services

```py
import requests
requests.get("https://api.payment.com/pay", timeout=3)  # Wait max 3s
```

- If the payment API doesn’t respond within 3 seconds, retry or fail gracefully.

## Retries

Retries automatically reattempt failed requests in case of transient errors (e.g., network blips, timeouts).

**Why It Matters:**

Many failures are temporary — retrying can resolve the issue without user impact.

### Retry Best Practices

| Practice                | Why It Helps                                        |
| ----------------------- | --------------------------------------------------- |
| **Exponential Backoff** | Avoid overwhelming services with aggressive retries |
| **Jitter**              | Add randomness to prevent retry storms              |
| **Retry Budget**        | Limit number of retries to avoid infinite loops     |

## Circuit Breaker Pattern

A circuit breaker prevents a system from repeatedly trying to use a failing component, giving it time to recover.

Inspired by electrical circuit breakers, it works in three states:

| State         | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| **Closed**    | Requests pass through normally                              |
| **Open**      | Requests fail immediately (service is down)                 |
| **Half-Open** | Send a few trial requests to check if service has recovered |

**Why It Matters:**

- Prevents overwhelming a failing service
- Helps fail fast, rather than wasting time
- Essential for graceful degradation

### Example of Circuit Breaker

Suppose the Payment Service is failing:

- After 5 failures in a row → Circuit opens.
- For the next 30 seconds → All payment calls fail instantly.
- After 30 seconds → Half-open: 1 test request sent.
  - If it succeeds → Circuit closes.
  - If it fails → Circuit remains open.

# Application Security

## Key Principles of Application Security

| Principle                          | Description                                                                           |
| ---------------------------------- | ------------------------------------------------------------------------------------- |
| **Threat Modeling**                | Identifying potential threats and attack vectors early in the design phase.           |
| **Least Privilege**                | Give users and systems the minimal level of access needed to perform their functions. |
| **Defense in Depth**               | Layer multiple security measures so if one fails, others still provide protection.    |
| **Secure by Design**               | Ensure that security is a fundamental part of the system architecture.                |
| **Authentication & Authorization** | Design secure login and access control mechanisms.                                    |
| **Data Protection**                | Encrypt sensitive data at rest and in transit.                                        |
| **Input Validation**               | Prevent injection attacks (SQL, XSS, etc.) by validating and sanitizing inputs.       |
| **Auditing and Logging**           | Keep logs of critical actions for monitoring and incident response.                   |

## Security Components in System Design

1. **Frontend (Client-Side) Security**
   - Input sanitization to prevent XSS
   - Secure cookies and HTTP headers
   - Implement CAPTCHA and rate limiting
2. **Backend (Server-Side) Security**
   - API authentication (OAuth, JWT)
   - Role-based access control (RBAC)
   - Prevent SQL injections via ORM or prepared statements
3. **Database Security**
   - Encrypt sensitive data
   - Use access control policies
   - Backup and secure data from unauthorized access
4. **Network Security**
   - Use HTTPS (TLS)
   - Use firewalls and API gateways
   - DDoS protection

## Example of Secure Online Banking System

### Scenario

Design a secure online banking system that allows users to:

- Log in
- View balances
- Transfer funds

### Security in Design

1. **Threat Modeling**
   - Identify threats like: unauthorized access, session hijacking, SQL injection, phishing.
2. **Authentication & Authorization**
   - Use Multi-Factor Authentication (MFA) for login.
   - Implement OAuth2 + JWT tokens for session management.
   - Use RBAC to control access (e.g., customers vs. admins).
3. **Data Protection**
   - Encrypt user data and transaction details using AES-256 at rest.
   - Use TLS 1.3 to secure data in transit.
4. **Input Validation**
   - Prevent SQL Injection by using prepared statements in database queries.
   - Sanitize user inputs in the transfer form to avoid XSS attacks.
5. **Session Management**
   - Use HttpOnly and Secure flags on cookies.
   - Regenerate session tokens after login.
6. **Auditing**
   - Log every login attempt, fund transfer, and failed access.
   - Set up alerts for unusual login patterns (e.g., geo-based alerts).

## Consequences of Ignoring Application Security

| Issue               | Consequence                               |
| ------------------- | ----------------------------------------- |
| No Input Validation | XSS, SQL Injection, Broken Access Control |
| Weak Authentication | Credential theft, unauthorized access     |
| Unencrypted Data    | Data breach, identity theft               |
| No Audit Logs       | No forensic capability after an attack    |

# Network Security

Network security in system design refers to the strategies, practices, and technologies implemented to protect the integrity, confidentiality, and availability of data as it travels across networks — between clients, services, databases, and external systems.

When designing a system, network security focuses on preventing unauthorized access, data breaches, and attacks (like DDoS, MITM, etc.) by embedding security controls at every network layer.

## Key Goals of Network Security

| Goal                | Description                                                     |
| ------------------- | --------------------------------------------------------------- |
| **Confidentiality** | Ensure data is only accessible to authorized users/systems      |
| **Integrity**       | Ensure data is not altered or tampered with during transmission |
| **Availability**    | Ensure the network and services are available when needed       |
| **Authentication**  | Verify the identity of users and systems                        |
| **Access Control**  | Define and enforce rules for who can access what resources      |

## Network Security Layers

1. **Perimeter Security:** Firewalls, API gateways, VPNs
2. **Transport Security:** TLS/SSL encryption
3. **Application-Level Security:** Authentication tokens, input validation
4. **Internal Network Segmentation:** VPCs, subnets, private IP spaces
5. **Monitoring & Logging:** Intrusion Detection/Prevention Systems (IDS/IPS), log analyzers

## Security Mechanisms

| Mechanism                          | Purpose                                            |
| ---------------------------------- | -------------------------------------------------- |
| **TLS/SSL**                        | Encrypt data in transit (e.g., HTTPS)              |
| **Firewall**                       | Allow or deny network traffic based on rules       |
| **API Gateway**                    | Enforces rate limiting, auth, logging, and routing |
| **IDS/IPS**                        | Detects and blocks suspicious activities           |
| **VPN**                            | Secure communication over public networks          |
| **WAF (Web Application Firewall)** | Filters traffic to web apps, blocks SQLi, XSS      |
| **Network Segmentation**           | Separates sensitive services into private subnets  |
| **Reverse Proxy**                  | Hides backend services and adds a security buffer  |

## Example of Network Security

Design a secure system for a healthcare provider that includes:

- Patient mobile app
- Doctor portal
- Backend services for scheduling, medical records
- Database storing patient data

```
          [Internet]
              │
      ┌───────▼────────┐
      │   API Gateway  │  ← WAF + TLS + Rate Limit
      └───────▲────────┘
              │
    ┌─────────┴────────────┐
    │    Load Balancer     │  ← DDoS protection
    └───────▲──────────────┘
              │
┌─────────────┴─────────────┐
│      Backend Services     │  ← Private subnet (not exposed to public)
│ ┌───────────────────────┐ │
│ │ Scheduling Service     │ │
│ │ Medical Record Service │ │
│ └───────────────────────┘ │
└─────────────▲─────────────┘
              │
     ┌────────┴────────┐
     │   Database (DB) │  ← Encrypted, private access only
     └─────────────────┘

         [Authentication Server]
        ↕ Token-based Auth (OAuth2)

           [Monitoring System]
     ↕ Network logs, alerts, anomaly detection
```

## Network Security Design Decisions

| Decision                             | Explanation                                                         |
| ------------------------------------ | ------------------------------------------------------------------- |
| **TLS Everywhere**                   | Ensures data in transit (medical records, credentials) is encrypted |
| **Private Subnets**                  | Backend and DB are hidden from public internet                      |
| **Firewall Rules**                   | Only API Gateway and Auth Server can access backend services        |
| **WAF on API Gateway**               | Blocks SQL injection, XSS, bad bots                                 |
| **DDoS Protection on Load Balancer** | Protects from high-volume attack attempts                           |
| **VPN Access for Admins**            | Secure remote access to internal systems                            |
| **Monitoring & Alerts**              | Detects intrusions or unusual traffic in real time                  |

## Common Network Security Threats

| Threat                       | Example                      | Mitigation                              |
| ---------------------------- | ---------------------------- | --------------------------------------- |
| **Man-in-the-Middle (MITM)** | Intercepting login data      | Use HTTPS (TLS)                         |
| **DDoS**                     | Flooding system with traffic | Use rate limiting, load balancing, CDNs |
| **SQL Injection over API**   | Malicious query strings      | Use WAF, input validation               |
| **Unauthorized Access**      | Direct DB access from web    | VPCs, IAM, firewall rules               |
| **Data Leakage**             | Sensitive data in logs       | Mask PII, encrypt logs, RBAC            |

## Best Practices for Network Security

- Use HTTPS by default on all endpoints.
- Segment the network using VPCs and subnets.
- Block all unused ports and protocols.
- Use IAM roles instead of hardcoded credentials.
- Monitor continuously and set up automated alerts.
- Design systems with a zero-trust mindset.

# Symmetric Encryption

Symmetric encryption is a cryptographic method where the same key is used for both encryption and decryption of data. It is fast and efficient, making it ideal for encrypting large amounts of data.

In system design, symmetric encryption is used to secure sensitive data like:

- Stored files and database records (data at rest)
- Network communication (data in transit)
- Cached session data
- API keys or tokens

## Key Concepts of Symmetric Encryption

| Term               | Description                                          |
| ------------------ | ---------------------------------------------------- |
| **Plaintext**      | Original data before encryption                      |
| **Ciphertext**     | Encrypted data                                       |
| **Encryption Key** | Secret key used to encrypt and decrypt data          |
| **Block Cipher**   | Encrypts data in fixed-size blocks (e.g., AES)       |
| **Stream Cipher**  | Encrypts data bit-by-bit or byte-by-byte (e.g., RC4) |

## Common Symmetric Encryption Algorithms

| Algorithm                              | Description                                                   |
| -------------------------------------- | ------------------------------------------------------------- |
| **AES (Advanced Encryption Standard)** | Most widely used, supports 128, 192, and 256-bit keys         |
| **DES (Data Encryption Standard)**     | Older, less secure                                            |
| **3DES (Triple DES)**                  | DES applied three times; still slower and largely deprecated  |
| **ChaCha20**                           | Modern, fast stream cipher, good for mobile/low-power devices |

## Example using AES

**Scenario:** You are designing a healthcare app that stores users’ medical records in a database. These records must be encrypted to meet compliance requirements (like HIPAA or GDPR).

```
User Enters Data
       │
       ▼
[Backend API Server]
       │
       ├── Encrypt Data using AES-256 and a secure key (K)
       │
       ▼
[Encrypted Data Stored in Database]

           Later...

       ▲
       │
[Backend Decrypts Data using same key (K)]
       │
       ▼
User Sees Decrypted Medical Record

```

## Symmetric vs Asymmetric

| Feature   | Symmetric                        | Asymmetric                                       |
| --------- | -------------------------------- | ------------------------------------------------ |
| Key Type  | Single secret key                | Public/Private key pair                          |
| Speed     | Very fast                        | Slower                                           |
| Use Cases | Encrypting data, files, sessions | Key exchange, TLS handshakes, digital signatures |
| Example   | AES, ChaCha20                    | RSA, ECC                                         |

# Public Key Encryption

Public Key Encryption, also called Asymmetric Encryption, is a cryptographic system that uses two different keys:

- A public key (shared openly)
- A private key (kept secret)

Data encrypted with one key can only be decrypted with the other.

This allows for secure data transmission between parties without sharing a secret key in advance, and is essential for:

- Authentication
- Secure communication
- Digital signatures

## Key Concepts of Public Key Encryption

| Concept                | Description                                                                |
| ---------------------- | -------------------------------------------------------------------------- |
| **Public Key**         | Used to encrypt data; can be shared openly                                 |
| **Private Key**        | Used to decrypt data; must be kept secret                                  |
| **Asymmetric**         | Different keys for encryption and decryption                               |
| **One-way encryption** | You can encrypt with the public key, but only decrypt with the private key |
| **Digital Signature**  | Created by encrypting a hash with the private key to verify authenticity   |

## Common Algorithm of Public Key Encryption

| Algorithm                             | Use                                                           |
| ------------------------------------- | ------------------------------------------------------------- |
| **RSA** (Rivest–Shamir–Adleman)       | Most common, used for encryption and digital signatures       |
| **ECC** (Elliptic Curve Cryptography) | Lighter and faster alternative to RSA, used in modern systems |
| **ElGamal**                           | Less common, but also used in secure messaging                |

## Where Public Key Encryption is used

| Use Case                | Description                                                                  |
| ----------------------- | ---------------------------------------------------------------------------- |
| **TLS/HTTPS**           | Public/private keys establish secure connections between clients and servers |
| **Authentication**      | Private key signs a token; public key verifies it (e.g., JWT, OAuth)         |
| **Secure Key Exchange** | Used to share symmetric keys securely (e.g., in hybrid encryption)           |
| **Data Protection**     | Encrypt sensitive data for a specific recipient                              |
| **Email Encryption**    | PGP/GPG uses public key crypto to secure messages                            |

## Example of Public Key Encryption

**Scenario:** A client (browser or app) connects to a backend server using HTTPS. We want to ensure:

- The server is authentic (not a fake)
- Data is encrypted during transmission

### TLS Handshake Using Public Key Encryption

1. Server has a public/private key pair
   - Public key is included in its SSL certificate (issued by a Certificate Authority)
2. Client initiates connection
   - Requests server's public key (via the certificate)
3. Client encrypts a random symmetric key with the server’s public key
4. Server decrypts it using its private key
5. Both now use the symmetric key to encrypt the session (fast and secure)

## Security Benefits of Public Key Encryption

| Benefit                       | Explanation                                            |
| ----------------------------- | ------------------------------------------------------ |
| **No shared secret required** | Safer for open networks                                |
| **Identity verification**     | Private key signatures prove authenticity              |
| **Hybrid encryption support** | Works with symmetric encryption for speed and security |
| **Widely trusted**            | Forms the backbone of HTTPS, SSH, and JWTs             |

# SSL

SSL (Secure Sockets Layer) plays a crucial role in securing communication between components over a network. Though it's often used interchangeably with TLS (Transport Layer Security) — which is the modern, more secure version — the term SSL is still commonly used to refer to the entire HTTPS security mechanism.

**What is SSL in System Design?**

SSL is a cryptographic protocol that ensures:

- **Confidentiality** – Data is encrypted so that third parties can't read it.
- **Integrity** – Data isn't altered during transmission.
- **Authentication** – The identity of servers (and optionally clients) is verified.

**Where SSL Fits in System Design**

SSL is applied at the transport layer (between the application and network layers). In system design, it's often used in:

- Web applications (HTTPS)
- Microservices (mutual TLS)
- Mobile apps communicating with APIs
- Database access over networks

## SSL Workflow

1. Client connects to server using HTTPS(Initialized request are always HTTPS)
2. SSL/TLS Handshake begins:
   - Server sends its SSL certificate (with public key - server have both public and private key, so its distribute its public to all the client)
   - Client verifies certificate (using Certificate Authority)
   - A shared session/symmetric key is negotiated using public/private key encryption (e.g., Diffie-Hellman)
     - Client generate a symmetric(it's fast) with the public key
     - symmetric key is shared with server and decrypted by servers private key
     - connection established and symmetric key will be used for further uses
3. Encrypted communication starts using the session key

# Hashing

Hashing is the process of converting input data (of any size) into a fixed-size string of characters, typically a short string of letters and numbers, using a mathematical function called a hash function.

## Purpose of Hashing

In system design, hashing is crucial for:

- Data lookup efficiency (e.g., using hash tables)
- Security (e.g., storing passwords or verifying data integrity)
- Data partitioning (e.g., consistent hashing in distributed systems)
- Load balancing (distributing requests to servers)

## How Hashing Works

A hash function takes an input (e.g., a username) and returns a hash value (a fixed-size code). A good hash function ensures:

- **Determinism** – same input gives same output
- **Uniformity** – distributes input evenly across the output space
- **Efficiency** – fast computation
- **Non-reversibility (in cryptographic hashing)** – hard to reverse-engineer

## Example with Hash Map

**Problem:** You want to store and retrieve user records by username quickly.

**Solution:** Use a hash table where the key is the username, and the value is the user’s data.

```
Input username: "alice123"
Hash function: hash("alice123") → 142
Store in table at index 142: users[142] = {name: "Alice", age: 25}
```

When retrieving:

```
Get hash("alice123") → 142
Fetch users[142]
```

This lookup is done in constant time O(1) on average.

## Example of Password Storage

You should never store raw passwords. Instead, hash them:

```
Password: "mySecret123"
Hash: SHA256("mySecret123") = "a5dcb3b7e69..."
Store this hash in DB
```

When the user logs in, hash the provided password and compare it to the stored hash.

This keeps passwords safe even if the database is compromised.

## Common Hash Functions

| Function   | Use Case                   |
| ---------- | -------------------------- |
| MD5        | Fast but insecure (legacy) |
| SHA-1      | Deprecated (vulnerable)    |
| SHA-256    | Secure password hashing    |
| MurmurHash | Fast and non-cryptographic |
| CRC32      | Data integrity             |

## Hashing Caveats

- **Collisions:** Different inputs may produce the same hash. Good hash functions minimize this.
- **Security:** Cryptographic hash functions are needed for passwords or digital signatures.
- **Hash table limitations:** Poor hash functions may cause clustering and performance drops.

# Digital Signature

A digital signature is a cryptographic technique that ensures:

- **Authenticity** – verifies the sender’s identity
- **Integrity** – confirms that the message has not been altered
- **Non-repudiation** – the sender cannot deny sending the message

It is the digital equivalent of a handwritten signature or stamped seal, but much more secure and verifiable through public-key cryptography.

## How Digital Signatures Work

### Based on Asymmetric (Public Key) Cryptography

Each user has:

- A private key (kept secret)
- A public key (shared with everyone)

### Signing Process

1. Sender creates a message.
2. Computes the hash of the message.
3. Encrypts the hash using their private key → digital signature
4. Sends the message + signature to the receiver.

### Verification Process:

1. Receiver receives the message and digital signature.
2. Computes the hash of the message.
3. Decrypts the signature using sender’s public key.
4. If the two hashes match → message is authentic and unchanged.

## Uses of Digital Signature

| Feature             | Benefit                                  |
| ------------------- | ---------------------------------------- |
| Message Integrity   | Detects tampering                        |
| Authentication      | Confirms sender identity                 |
| Non-repudiation     | Prevents sender from denying the message |
| Trust Establishment | Enables secure communication             |

## Workflow of Digital Signature

```
+-----------+             +-------------------+             +-------------+
|   Client  | -- Sign --> |   Send Message    | --> Verify →|   Server    |
+-----------+             +-------------------+             +-------------+
     |                             |                                |
     |-- Private Key --(hash & sign)--->              -- Public Key -->
     |                             |                                |
Message + Signature       →        API Gateway        →     Validated
```

# Digital Certificate

A Digital Certificate is an electronic document that proves the ownership of a public key. It links a public key to the identity of an individual, organization, or device, and is issued by a trusted third party called a Certificate Authority (CA).

Think of it like a digital passport for websites or systems — it validates who owns a public key and whether you can trust them.

## Uses of Digital Certificates

Digital certificates are critical in secure communication, especially over the internet. They are the backbone of:

- HTTPS (SSL/TLS) security
- Authenticating servers and clients
- Preventing man-in-the-middle attacks
- Public Key Infrastructure (PKI)

## Structure of a Digital Certificate

A typical certificate contains:

| Field               | Description                                            |
| ------------------- | ------------------------------------------------------ |
| Subject             | The identity (domain, user, org)                       |
| Public Key          | Public key of the subject                              |
| Issuer              | Certificate Authority (CA) that issued the certificate |
| Validity Period     | Start and end dates                                    |
| Serial Number       | Unique identifier                                      |
| Signature Algorithm | Algorithm used to sign the certificate                 |
| Digital Signature   | CA’s signature on the certificate                      |

## How Digital Certificate Works

1. User visits `https://bank.com`
2. Server sends its digital certificate to the user's browser.
3. Browser checks:
   - Is the certificate issued by a trusted CA?
   - Is the domain name correct?
   - Is the certificate expired or revoked?
4. If valid:
   - Browser extracts the server’s public key from the certificate.
   - Browser uses that key to establish an encrypted connection (via TLS handshake).
5. Communication is now encrypted and authenticated.

## TLS Handshake with Digital Certificate

```
Client (Browser)                           Server (https://bank.com)
      |                                             |
      | --------- Client Hello (TLS request) ------>|
      |<----- Server Hello + Certificate (X.509) ---|
      |                                             |
Validate Certificate:                               |
- Issuer is trusted (e.g., DigiCert)                |
- Not expired                                       |
- Matches domain (bank.com)                        |
      |                                             |
Extract Public Key from Certificate                 |
Encrypt shared secret with server's public key      |
      |                                             |
      |---- Encrypted Key Exchange ---------------->|
      |<------ Server Finished (secured) -----------|
      |------ Client Finished (secured) ------------|
==> Secure HTTPS Communication Starts (TLS session)
```

## Tools used for Digital Certificate

| Tool/Technology         | Use Case                                 |
| ----------------------- | ---------------------------------------- |
| **OpenSSL**             | Generate certificates, CSR, private keys |
| **Let’s Encrypt**       | Free, automated TLS certificates         |
| **X.509**               | Standard for certificate structure       |
| **TLS/SSL**             | Secure channel using certs               |
| **Browsers (CA store)** | Manage trusted Root CAs                  |

## Trust Hierarchy in Digital Certificates

Public Key Infrastructure (PKI)

```
              +--------------------------+
              | Root Certificate Authority|
              +--------------------------+
                         |
              +--------------------------+
              | Intermediate CA          |
              +--------------------------+
                         |
              +--------------------------+
              | Server/Device Certificate|
              +--------------------------+
```

- **Root CA:** Highest authority, pre-installed in browsers/OS.
- **Intermediate CA:** Issued by Root CA, used to issue server certs.
- **Server Certificate:** Used by websites, APIs, services.

Your browser trusts the Root CAs and any certs they sign, directly or indirectly.

# VPN

A VPN (Virtual Private Network) is a secure, encrypted connection between a user and a private network over the public internet. It allows users to access network resources as if they were directly connected to a private network, while hiding their traffic from eavesdroppers.

## Why Use a VPN

From a system design perspective, VPNs are used to:

- Secure data transmission over untrusted networks (like public Wi-Fi)
- Enable remote access to private corporate networks
- Protect sensitive services (e.g., internal APIs, databases)
- Mask IP addresses and protect user privacy
- Segment networks for better access control

## How VPN Work

| Component              | Role                                                               |
| ---------------------- | ------------------------------------------------------------------ |
| **Client Device**      | The user's laptop/phone that connects to the VPN                   |
| **VPN Server**         | The endpoint that authenticates, encrypts, and forwards traffic    |
| **Tunneling Protocol** | Defines how data is encapsulated (e.g., OpenVPN, IPSec, WireGuard) |
| **Encryption**         | Protects data inside the tunnel (e.g., AES-256)                    |

## VPN Workflow

1. VPN Client initiates a connection to the VPN Server.
2. Authentication is performed (using username/password or digital certificates).
3. A secure tunnel is established (using SSL/TLS or IPSec).
4. All traffic from the client is encrypted and routed through the VPN server.
5. The VPN server forwards the traffic to its destination (e.g., internal app, internet).
6. Responses are encrypted back through the tunnel to the client.

## VPN Types

| Type                  | Description                                                         |
| --------------------- | ------------------------------------------------------------------- |
| **Remote Access VPN** | Connects individual users to a private network from anywhere        |
| **Site-to-Site VPN**  | Connects entire networks (e.g., branch offices) across the internet |
| **SSL VPN**           | Uses SSL/TLS, often through a browser                               |
| **Split Tunneling**   | Some traffic goes through VPN; rest goes directly to the internet   |

## VPN Tunneling Protocols

| Protocol      | Encryption | Use Case                         |
| ------------- | ---------- | -------------------------------- |
| **OpenVPN**   | SSL/TLS    | Very secure, widely used         |
| **IPSec**     | AES        | Used in site-to-site VPNs        |
| **WireGuard** | ChaCha20   | Modern, lightweight, fast        |
| **L2TP**      | With IPSec | Older, less secure without IPSec |

## Example of VPN

**Scenario:** A company has internal tools (like `admin.internal-corp.com`) that should only be accessed by employees.

**Problem:** Remote employees need secure access to internal systems.

```
+--------------------+        Encrypted VPN Tunnel        +-----------------------+
|  Remote Employee   | <-------------------------------> |    VPN Server         |
|  (VPN Client)      |                                    | (Inside Corp Network) |
+--------------------+                                    +-----------+-----------+
                                                                      |
                                                                      v
                                                   +----------------------------+
                                                   |  Internal Web App (Admin)  |
                                                   +----------------------------+
```

### Steps

1. Employee opens VPN client → connects to VPN server.
2. VPN server authenticates the user using username + certificate.
3. A secure tunnel is created.
4. The employee accesses admin.internal-corp.com via internal IP.
5. External users cannot access the internal service, even if they know the domain.

## VPN Authentication Methods

| Method              | Description                                    |
| ------------------- | ---------------------------------------------- |
| Username + Password | Basic auth, usually combined with MFA          |
| Certificates        | Client certificates issued by a CA             |
| Token-based         | Integrated with SSO providers like Okta, Azure |
| MFA (TOTP/SMS)      | Enhances security                              |

## Network Security and VPN Integration

VPN often works with other system components:

- **Firewall:** Only allow traffic from VPN IPs to sensitive systems
- **Access Control:** Users get access based on roles after VPN login
- **Monitoring/Logging:** Track who accessed what and when

# Firewall

A Firewall is a security component in system and network design that monitors, filters, and controls incoming and outgoing traffic based on pre-defined security rules. It acts as a barrier between trusted and untrusted networks, such as a corporate network and the public internet.

Think of it as a gatekeeper: it decides what traffic is allowed to pass and what should be blocked.

**Why Use a Firewall in System Design?**
In modern system design, firewalls are essential for:

- Network security
- Preventing unauthorized access
- Monitoring suspicious activities
- Segmenting internal services
- Compliance (e.g., PCI-DSS, HIPAA)

## Types of Firewall

| Type                                   | Description                                                 |
| -------------------------------------- | ----------------------------------------------------------- |
| **Packet-filtering Firewall**          | Filters traffic based on IPs, ports, protocols              |
| **Stateful Firewall**                  | Tracks active connections; allows return traffic            |
| **Application-layer Firewall (Proxy)** | Filters traffic for specific applications (e.g., HTTP, FTP) |
| **Next-Gen Firewall (NGFW)**           | Includes IDS/IPS, deep packet inspection, malware filtering |
| **Cloud-based Firewall (FWaaS)**       | Firewall as a service for cloud-native apps                 |

## Firewall Workflow

Typical Rules Defined in a Firewall:

- Allow HTTP (port 80) and HTTPS (port 443) from public
- Block all access to internal databases from outside
- Only allow SSH from internal network

```
                    +------------------------+
                    |    Internet (Public)   |
                    +-----------+------------+
                                |
                                v
                      +------------------+
                      |   Firewall (NGFW)|
                      +--------+---------+
                               |
        +----------------------+----------------------+
        |                      |                      |
        v                      v                      v
  Web Server (80/443)   App Server (8080)      DB Server (3306)
   [Public Access]      [Internal Access]      [No Internet Access]
```

Behavior:

- Firewall allows HTTP/HTTPS from the internet to Web Server
- App Server only accepts traffic from Web Server IPs
- DB Server only accepts traffic from App Server, not from outside

## Where Firewalls Fit

| Layer                 | Example                            |
| --------------------- | ---------------------------------- |
| **Network Layer**     | AWS Security Groups, VPC ACLs      |
| **Host-based**        | Linux `iptables`, Windows Firewall |
| **Application Layer** | Web Application Firewall (WAF)     |
| **Cloud-native**      | GCP Firewall Rules, Azure NSGs     |

## Stateful vs Stateless Firewall

| Feature         | Stateless       | Stateful                            |
| --------------- | --------------- | ----------------------------------- |
| Tracks sessions | ❌ No           | ✅ Yes                              |
| Performance     | ⚡ Fast         | 🚦 Slightly slower due to tracking  |
| Security        | Basic filtering | More intelligent, prevents spoofing |
| Example Use     | Edge routers    | Internal firewalls, app security    |

## Firewall Rule Syntax

In a cloud provider like AWS, this could look like:

```
Security Group: WebServerSG
Inbound:
- Protocol: TCP, Port: 80, Source: 0.0.0.0/0 (Allow HTTP)
- Protocol: TCP, Port: 443, Source: 0.0.0.0/0 (Allow HTTPS)
Outbound:
- Protocol: ALL, Destination: 0.0.0.0/0 (Allow all)

Security Group: DBServerSG
Inbound:
- Protocol: TCP, Port: 3306, Source: AppServerSG (Allow only app)
```

## Examplf of Firewall

**Problem:** You’re building an online store with web servers, application servers, and a database. You want to:

- Allow customers to browse and buy products online
- Prevent hackers from directly accessing the database
- Protect against DDoS or port scans

**Solution:** Implement a firewall with rules like:

| Rule                              | Action   |
| --------------------------------- | -------- |
| Allow TCP 80/443 to web server    | ✅ Allow |
| Allow TCP 3306 from App Server IP | ✅ Allow |
| Block all incoming traffic to DB  | ❌ Deny  |
| Block all unused ports            | ❌ Deny  |
| Limit SSH to internal IPs         | ✅ Allow |
