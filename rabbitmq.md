# Introduction
RabbitMQ is a message broker — basically, a middleman that helps applications communicate with each other by sending and receiving messages asynchronously.

Think of it like a post office:

A sender (producer) creates a message and drops it into the mailbox.

RabbitMQ (broker) takes care of storing, routing, and delivering the message.

A receiver (consumer) picks it up when ready.

This allows applications to talk to each other without needing to be connected at the exact same time.

## Key Features of RabbitMQ:

Asynchronous Communication – sender and receiver don’t need to run at the same time.

Decoupling – producers and consumers don’t need to know about each other.

Reliability – messages can be stored until they are delivered successfully.

Scalability – multiple consumers can share the workload.

Supports Multiple Protocols – mainly AMQP (Advanced Message Queuing Protocol).

Flexible Routing – supports queues, topics, fanout, direct, headers-based routing.
## Basic Terminology in RabbitMQ

Producer: The sender of messages.

Message: The data being transferred (e.g., JSON, text, binary).

Queue: A buffer where messages are stored until consumed.

Consumer: The receiver of messages.

Exchange: A routing mechanism that decides how messages go to queues (e.g., direct, topic, fanout).

## Simple Producer & Consumer

Let’s consider a real-world scenario:

- Producer: An order service sends a message when a new order is placed.
- Consumer: A notification service receives the message and sends an email confirmation.

**Producer (Send Message)**

```js
const amqp = require("amqplib");

async function sendMessage() {
  try {
    // 1. Connect to RabbitMQ server
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    // 2. Create a queue
    const queue = "orderQueue";
    await channel.assertQueue(queue, { durable: true });

    // 3. Send a message
    const message = { orderId: 123, product: "Laptop", status: "created" };
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));

    console.log("📤 Sent:", message);

    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 500);
  } catch (error) {
    console.error(error);
  }
}

sendMessage();
```
**Consumer (Receive Message)**
```js
const amqp = require("amqplib");

async function receiveMessage() {
  try {
    // 1. Connect to RabbitMQ server
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    // 2. Create a queue (must be same as producer)
    const queue = "orderQueue";
    await channel.assertQueue(queue, { durable: true });

    // 3. Consume messages
    console.log("📥 Waiting for messages in", queue);
    channel.consume(queue, (msg) => {
      const content = JSON.parse(msg.content.toString());
      console.log("✅ Received:", content);

      // Acknowledge message after processing
      channel.ack(msg);
    });
  } catch (error) {
    console.error(error);
  }
}

receiveMessage();
```
- The Producer connects to RabbitMQ and sends a JSON message (`{ orderId: 123, product: "Laptop" }`) to the `orderQueue`.
- The Consumer listens to the same queue (`orderQueue`).
- When a message arrives, the consumer processes it (e.g., sends a notification).
- The consumer acknowledges (ac`k) that the message is processed so RabbitMQ can remove it from the queue.


**Why is this useful?**

- If the notification service is down, messages will wait in the queue until it’s back online.
- Multiple consumers can read from the same queue to balance the load.
- Systems remain decoupled and scalable.

# Message Brokers vs Queues
## Message Broker

- A message broker is middleware that enables communication between different systems or applications by receiving, storing, and delivering messages.
- RabbitMQ itself is a message broker.
- It doesn’t just store messages — it also routes them intelligently based on rules.

Think of a post office:

- The post office (RabbitMQ = broker) receives letters from senders.
- It decides which mailbox (queue) to put each letter in, depending on the address.
- Finally, people (consumers) come to pick up letters.

## Queue

- A queue is a data structure inside the message broker that stores messages until they are consumed.
- Queues in RabbitMQ follow FIFO (First In, First Out) order (unless priorities or other routing rules are applied).
- They act as mailboxes where messages sit until a consumer reads them.

Continuing the post office example:

- The mailbox is the queue.
- Letters wait inside until the right person (consumer) comes to pick them up.

## Key Differences between Message Broker and Queue

| Feature                 | Message Broker (RabbitMQ)                              | Queue (inside RabbitMQ)                       |
| ----------------------- | ------------------------------------------------------ | --------------------------------------------- |
| **Definition**          | Middleware that manages, routes, and delivers messages | Storage location for messages until processed |
| **Role**                | Acts as a post office / controller                     | Acts as a mailbox                             |
| **Scope**               | Manages multiple queues, exchanges, routing rules      | One single message buffer                     |
| **Responsibilities**    | Routing, persistence, reliability, scaling             | Holding messages until consumed               |
| **Example in RabbitMQ** | RabbitMQ server process                                | `orderQueue`, `paymentQueue` etc.             |

# AMQP Protocol
AMQP stands for Advanced Message Queuing Protocol.
It is the standard protocol that defines how messages should be sent, received, stored, and acknowledged between systems.

RabbitMQ implements AMQP (v0.9.1) under the hood.
Think of AMQP as the rules of the road for messaging — RabbitMQ is the car that drives using those rules.

## Core Concepts of AMQP

AMQP defines five main building blocks:

### 1. Producer
- An application that creates and sends messages.
- It never talks directly to consumers; it only sends to the broker.
### 2. Exchange
- A router inside RabbitMQ.
- It decides where the message should go (to which queue(s)) based on rules.
- Types of exchanges:
    - Direct (routes to specific queue by exact match key)
    - Fanout (broadcasts to all queues)
    - Topic (pattern matching)
    - Headers (based on message headers instead of routing keys)

### 3. Queue
- A mailbox inside RabbitMQ where messages sit until a consumer retrieves them.
- Multiple consumers can share the same queue (load balancing).

### 4. Binding
- A link between an exchange and a queue.
- Defines rules (like a routing key) to decide which messages go where.
### 5. Consumer
- An application that receives messages from a queue.
- It acknowledges (ack) when a message has been processed.

## How AMQP Works (Flow)

1. Producer → Sends a message to an Exchange.
2. Exchange → Uses rules to route the message to the right Queue(s).
3. Queue → Holds the message until it’s picked up.
4. Consumer → Listens to the queue and processes the message.
5. Acknowledgment (Ack) → Consumer tells RabbitMQ the message was handled successfully.

If consumer doesn’t ack, RabbitMQ can re-deliver the message (ensuring reliability).

## Order Processing Flow

Imagine an e-commerce system:

- Producer: Order Service → sends `"New Order Created"`
- Exchange: Routes the order based on routing key
- Queue(s):
    - `orderQueue` → for payment processing
    - `notificationQueue` → for sending emails
- Consumers:
    - Payment Service consumes from `orderQueue`
    - Email Service consumes from `notificationQueue`

Here’s a small demo with Exchange + Queue + Binding.

**Producer (send to exchange)**
```js
const amqp = require("amqplib");

async function producer() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const exchange = "orderExchange";
  const routingKey = "order.created";

  // 1. Assert Exchange
  await channel.assertExchange(exchange, "direct", { durable: true });

  // 2. Send message
  const message = { orderId: 555, product: "Shoes" };
  channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(message)));

  console.log("📤 Sent:", message);

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
}

producer();
```
**Consumer (receive from queue)**
```js
const amqp = require("amqplib");

async function consumer() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const exchange = "orderExchange";
  const queue = "orderQueue";
  const routingKey = "order.created";

  // 1. Assert Exchange
  await channel.assertExchange(exchange, "direct", { durable: true });

  // 2. Assert Queue
  await channel.assertQueue(queue, { durable: true });

  // 3. Bind Queue to Exchange with routing key
  await channel.bindQueue(queue, exchange, routingKey);

  // 4. Consume Messages
  console.log("📥 Waiting for messages in:", queue);
  channel.consume(queue, (msg) => {
    const order = JSON.parse(msg.content.toString());
    console.log("✅ Received order:", order);

    channel.ack(msg);
  });
}

consumer();
```
1. Producer publishes a message to orderExchange with routing key "order.created".
2. Exchange checks rules → routes it to orderQueue (since it’s bound with the same key).
3. Consumer listens on orderQueue, receives the message, and processes it.
4. Consumer acks → RabbitMQ deletes the message from the queue.

**Why AMQP is powerful**

- It defines a standardized, reliable way to send/receive messages.
- RabbitMQ uses AMQP to ensure durability, reliability, and flexibility (like fanout, routing, acknowledgments).

# Use Cases of RabbitMQ
## Why Use RabbitMQ
### 1. Decoupling Services
- Without RabbitMQ: services must know about each other and wait for responses.
- With RabbitMQ: producer and consumer don’t need to know each other — they only talk to the broker.

This makes your system loosely coupled and easier to maintain.

### 2. Asynchronous Processing

- Some tasks take time (e.g., sending emails, resizing images).
- Instead of blocking the user, you send a message to RabbitMQ, and another service processes it in the background.

Improves performance and responsiveness.

### 3. Load Balancing

- Multiple consumers can read from the same queue.
- RabbitMQ distributes messages fairly among them.

Useful for scaling horizontally (adding more workers).

### 4. Reliability

- RabbitMQ stores messages until a consumer acknowledges them.
- If a consumer crashes, the message is not lost — it will be redelivered.

Ensures guaranteed delivery.

### 5. Flexibility in Routing

- Using Exchanges (direct, topic, fanout, headers), you can decide how to route messages.

Useful for broadcasting, filtering, or routing by category.

### 6. Cross-Language / Cross-Platform

- RabbitMQ supports many protocols (mainly AMQP) and clients in almost all languages.

A Python producer can talk to a Node.js consumer without issue.

## When to Use RabbitMQ?

Use RabbitMQ when you need:

1. Asynchronous tasks → Sending emails, processing images, background jobs.
2. Event-driven architecture → Notifying other services when something happens.
3. Work queues → Distributing tasks to multiple workers (load balancing).
4. Reliable messaging → Making sure messages are not lost even if services crash.
5. Message broadcasting → Sending one message to multiple receivers (fanout).
6. Integration between services → Especially in microservices architecture.

## Example Scenario: Online Shop

Let’s say you have an e-commerce app:

- User places an order → Producer (Order Service) sends message: `"Order Created"`.
- RabbitMQ receives it.
- Consumers:
    - `Payment Service` → processes payment.
    - `Notification Service` → sends confirmation email.
    - `Analytics Service` → records the order for reporting.

Without RabbitMQ:

- Order Service must call Payment, Notification, Analytics directly.
- If one fails, the whole process breaks.

With RabbitMQ:

- Order Service just sends one message to RabbitMQ.
- RabbitMQ delivers to multiple consumers reliably.
# Installation
## Docker
Run RabbitMQ container with management UI (web dashboard):
```
docker run -d \
  --hostname my-rabbit \
  --name rabbitmq \
  -p 5672:5672 \
  -p 15672:15672 \
  rabbitmq:3-management
```
- `5672` → Default RabbitMQ port for AMQP protocol (used by apps).
- `15672` → Management UI (web dashboard).
- `rabbitmq:3-management` → Official RabbitMQ image with management plugin enabled.

Access:

- Open browser → `http://localhost:15672`
- Default credentials → `guest / guest`

Example: You can send a test message using Node.js (`amqplib`) and monitor it in the management UI.

## Locally
Since RabbitMQ depends on Erlang, you must install Erlang first.
### On Windows / macOS:

- [Download](https://www.rabbitmq.com/download.html) installer
- Install Erlang first, then RabbitMQ.
- Start RabbitMQ service from Services (Windows) or via brew services (macOS).

Verify Installation:
```bash
rabbitmqctl status
```
Enable Management Plugin:
```bash
rabbitmq-plugins enable rabbitmq_management
```

Then access → `http://localhost:15672`

Example: After installing locally, you can run producers/consumers on the same machine without Docker.
## Management UI
The RabbitMQ Management UI is a web-based interface that allows you to monitor, configure, and manage RabbitMQ visually.
It’s provided by the management plugin, which usually comes with the `rabbitmq:3-management` Docker image or can be enabled on local installs.

### Key Features of Management UI

1. Overview Dashboard
- Shows the status of the RabbitMQ server, memory usage, connections, channels, and queues.
- Quick health check for your RabbitMQ instance.
2. Queues
- List all queues and their current state: messages ready, messages unacknowledged, consumers connected.
- Allows you to create, delete, purge, or view messages.
3. Exchanges
- Lists all exchanges (direct, fanout, topic, headers).
- Allows you to create, delete, or inspect bindings.
4. Connections & Channels
- Shows all active client connections (producers & consumers).
- Displays channels, which are lightweight virtual connections inside a connection.
5. Bindings
- Displays which queues are bound to which exchanges with which routing keys.
- Essential for understanding message flow.
6. Admin Tools
- Manage users, permissions, and virtual hosts.
- Useful for security & multi-tenant setups.
7. Message Publishing
- Allows you to publish test messages directly from the UI.
- Can specify the exchange, routing key, headers, and payload.
### Example Usage
1. Monitoring Queues
- Go to Queues tab → Click `orderQueue`
- View:
  - Ready messages → waiting to be consumed
  - Unacknowledged messages → being processed by consumers
  - Consumers → number of active consumers
2. Publishing a Message
- Click Publish message on a queue or exchange:
  - Choose Exchange: `orderExchange`
  - Routing Key: `order.created`
  - Payload: `{"orderId": 101, "product": "Phone"}`
- Click Publish → The message is sent to the queue immediately.
3. Inspecting Messages
- Go to Queues → orderQueue → Get messages
- You can fetch messages without consuming them, useful for debugging.
4. Creating a New Queue
- Go to Queues → Add a new queue
  - Queue name: `testQueue`
  - Durable: `true`
  - Auto-delete: `false`
- Click Add queue → Ready to receive messages.

### Example Workflow

Imagine you have an Order Service and Notification Service:

1. Producer publishes messages to `orderExchange` with routing key `"order.created"`.
2. Messages appear in `orderQueue`.
3. Consumer picks messages from `orderQueue`.
4. Using Management UI, you can:
  - See messages waiting in the queue.
  - Check consumer activity.
  - Manually publish test messages to debug the system.

# Core Concepts
## Producer

- A producer is any application (or service) that creates and sends messages to RabbitMQ.
- The producer does not send messages directly to consumers.
- Instead, it publishes messages to an exchange inside RabbitMQ.
- The exchange then decides which queue(s) should hold the message (based on routing rules).

Example in real life:

- In an e-commerce app, the Order Service acts as a producer.
- When a user places an order, the Order Service produces a message like:
```json
{ "orderId": 123, "product": "Laptop", "status": "created" }
```
## Consumer

- A consumer is any application (or service) that receives messages from a queue.
- Consumers subscribe to queues and process messages one by one.
- After processing a message, the consumer usually sends an acknowledgment (ack) back to RabbitMQ.
- If the consumer crashes before sending an ack, RabbitMQ re-queues the message and delivers it again → ensuring reliability.

Example in real life:

- In the e-commerce app, the Notification Service is a consumer.
- It listens for new order messages and sends an email confirmation to the customer.

## How Producer, Consumer Work Together

1. Producer → Sends a message to RabbitMQ.
2. Exchange → Routes the message to a queue.
3. Queue → Stores the message until it’s picked up.
4. Consumer → Retrieves the message, processes it, and acknowledges.

Producer = sender of messages

Consumer = receiver of messages

## Queue
A Queue is the storage buffer inside RabbitMQ where messages live until a consumer picks them up.

Think of a queue like a mailbox in a post office:

- Messages (letters) are placed inside.
- They stay there until the intended recipient (consumer) picks them up.
### Key Characteristics of a Queue

1. FIFO (First In, First Out)
- Messages are delivered in the order they were added.
- (Unless special configurations like priority queues are used).
2. Durability
- Queues can be durable (survive broker restarts) or temporary.
- If marked durable and messages are persistent, RabbitMQ ensures messages survive crashes.
3. Exclusive Queues
- Only one connection can use them.
- They are deleted once that connection closes.
4. Auto-delete Queues
  - Deleted automatically when no consumers are connected.
5. Multiple Consumers
- Several consumers can share a queue.
- RabbitMQ will distribute messages fairly (load balancing).

### Role of Queue in AMQP Flow

1. Producer publishes a message → sends it to an Exchange.
2. Exchange routes it → places it into one or more Queues.
3. Consumers listen to queues and process messages.
4. RabbitMQ removes a message from a queue only after the consumer acknowledges (ack).

The queue acts as the middle buffer that allows producer and consumer to work independently.

## Exchange
An Exchange is responsible for receiving messages from producers and routing them to queues based on rules.

A producer never sends messages directly to a queue. Instead: Producer → Exchange → Queue(s) → Consumer(s).


RabbitMQ provides four main exchange types:

### Direct Exchange
- Routes messages to queues based on exact matching between the routing key and the binding key.
- Useful when each message should go to a specific queue.

Example:

- Producer sends a message with routing key `"order.created"`.
- Queue is bound to exchange with the same binding key `"order.created"`.
- Message goes to that queue only.

### Fanout Exchange

- Routes messages to all queues bound to it, ignoring routing keys.
- Basically a broadcast.
Example:
- Producer sends a message to the `fanout` exchange.
- Every queue bound to that exchange receives the message.
- Useful for events like notifications or broadcasting system updates.
### Topic Exchange
- Routes messages based on pattern matching between the routing key and the binding key.
- Routing keys are dot-separated words (e.g., "order.us.created").
- Binding keys can include wildcards:
  - `*` (matches one word)
  - `#` (matches zero or more words)

Example:

- Routing key = `"order.us.created"`.
- Binding key = `"order.*.created"` → matches.
- Binding key = `"order.#"` → matches all orders.

Useful for event filtering, like different services handling different regions or categories.

### Headers Exchange

- Routes messages based on headers (key-value pairs) instead of routing keys.
- Consumers bind to exchanges with matching header rules.
- More flexible but less commonly used than Direct/Topic.

Example:

- Message headers: `{ type: "pdf", format: "A4" }`.
- Queue bound with rule `type = pdf` will receive it.

### Example Scenarios of Exchange

- Direct: Route `"order.created"` only to `OrderQueue`.
- Fanout: Broadcast `"new promotion"` to all subscribers.
- Topic: Send `"order.us.created"` to US services, `"order.eu.created"` to EU services.
- Headers: Route only `"content-type: application/pdf"` to a document processing service.

**Producer (sends messages to different exchanges)**
```js
const amqp = require("amqplib");

async function producer() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  // Direct Exchange Example
  const directExchange = "direct_logs";
  await channel.assertExchange(directExchange, "direct", { durable: true });
  channel.publish(directExchange, "error", Buffer.from("❌ Error log message"));

  // Fanout Exchange Example
  const fanoutExchange = "fanout_logs";
  await channel.assertExchange(fanoutExchange, "fanout", { durable: true });
  channel.publish(fanoutExchange, "", Buffer.from("📢 Broadcast message"));

  // Topic Exchange Example
  const topicExchange = "topic_logs";
  await channel.assertExchange(topicExchange, "topic", { durable: true });
  channel.publish(topicExchange, "order.us.created", Buffer.from("🇺🇸 US Order Created"));

  // Headers Exchange Example
  const headersExchange = "headers_logs";
  await channel.assertExchange(headersExchange, "headers", { durable: true });
  channel.publish(headersExchange, "", Buffer.from("📄 PDF Document"), {
    headers: { format: "pdf", type: "report" }
  });

  console.log("📤 Sent messages to all exchanges");

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
}

producer();
```
**Consumer (listens from different exchange types)**
```js
const amqp = require("amqplib");

async function consumer() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  // 1. Direct Exchange Consumer
  const directExchange = "direct_logs";
  await channel.assertExchange(directExchange, "direct", { durable: true });
  const { queue: directQueue } = await channel.assertQueue("", { exclusive: true });
  await channel.bindQueue(directQueue, directExchange, "error");
  channel.consume(directQueue, msg => {
    console.log("📥 [Direct] Received:", msg.content.toString());
    channel.ack(msg);
  });

  // 2. Fanout Exchange Consumer
  const fanoutExchange = "fanout_logs";
  await channel.assertExchange(fanoutExchange, "fanout", { durable: true });
  const { queue: fanoutQueue } = await channel.assertQueue("", { exclusive: true });
  await channel.bindQueue(fanoutQueue, fanoutExchange, "");
  channel.consume(fanoutQueue, msg => {
    console.log("📥 [Fanout] Received:", msg.content.toString());
    channel.ack(msg);
  });

  // 3. Topic Exchange Consumer
  const topicExchange = "topic_logs";
  await channel.assertExchange(topicExchange, "topic", { durable: true });
  const { queue: topicQueue } = await channel.assertQueue("", { exclusive: true });
  await channel.bindQueue(topicQueue, topicExchange, "order.us.*");
  channel.consume(topicQueue, msg => {
    console.log("📥 [Topic] Received:", msg.content.toString());
    channel.ack(msg);
  });

  // 4. Headers Exchange Consumer
  const headersExchange = "headers_logs";
  await channel.assertExchange(headersExchange, "headers", { durable: true });
  const { queue: headersQueue } = await channel.assertQueue("", { exclusive: true });
  await channel.bindQueue(headersQueue, headersExchange, "", { "x-match": "all", format: "pdf" });
  channel.consume(headersQueue, msg => {
    console.log("📥 [Headers] Received:", msg.content.toString(), msg.properties.headers);
    channel.ack(msg);
  });

  console.log("👂 Listening on Direct, Fanout, Topic, and Headers exchanges...");
}

consumer();
```
1. **Producer** sends messages to different exchanges (`direct`, `fanout`, `topic`, `headers`).
2. **Exchange** decides how to route messages:
  - Direct → goes only to queues bound with the exact key `"error"`.
  - Fanout → broadcast to all bound queues.
  - Topic → matches routing pattern (e.g., `"order.us.created"` matches `"order.us.*"`).
  - Headers → routes based on message headers (e.g., `format=pdf`).

3. **Consumers** pick up only the messages they are interested in.

Summary

- Direct → Exact match (one-to-one).
- Fanout → Broadcast (one-to-many).
- Topic → Pattern matching (flexible many-to-many).
- Headers → Match by headers (rare, but powerful).

## Binding & Routing Keys
RabbitMQ uses bindings and routing keys to decide how messages flow from an exchange into one or more queues.
### Binding
- A binding is a link between an exchange and a queue.
- It tells RabbitMQ: “Send messages from this exchange to that queue if certain conditions are met.”
- Without a binding, an exchange cannot deliver messages to any queue.

Example:

- Queue = `errorQueue`
- Exchange = `direct_logs`
- Binding key = `"error"`
- → Any message with routing key `"error"` will be routed to `errorQueue`.

### Routing Key

- A routing key is a label attached to a message when a producer sends it to an exchange.
- RabbitMQ compares the routing key with the binding key(s) to decide where the message should go.
- Works differently depending on the exchange type:
    - Direct Exchange → Routing key must exactly match the binding key.
    - Topic Exchange → Routing key compared with binding key patterns (with `*` and `#` wildcards).
    - Fanout Exchange → Routing key is ignored (all queues get the message).
    - Headers Exchange → Routing key is ignored, matching is based on message headers.
### Binding vs Routing Key
| Concept         | Who Defines It?                                | Purpose                                     |
| --------------- | ---------------------------------------------- | ------------------------------------------- |
| **Binding**     | Consumer side (when binding queue to exchange) | Tells RabbitMQ which messages a queue wants |
| **Routing Key** | Producer side (when publishing message)        | Tells RabbitMQ what the message is about    |

Together, they act like addressing & filtering in a postal system.

### Example Scenario: Logging System
Imagine an app that produces log messages: `"info"`, `"warn"`, `"error"`.
- Exchange: `logsExchange` (type = `direct`)
- Queues:
  - `infoQueue` (interested in `"info"`)
  - `errorQueue` (interested in `"error"`)
- Bindings:
  - `infoQueue` bound with `"info"`
  - `errorQueue` bound with `"error"`

**Producer (sends log messages with routing keys)**
```js
const amqp = require("amqplib");

async function producer() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const exchange = "logsExchange";
  await channel.assertExchange(exchange, "direct", { durable: true });

  // Messages with different routing keys
  channel.publish(exchange, "info", Buffer.from("ℹ️ Info log message"));
  channel.publish(exchange, "error", Buffer.from("❌ Error log message"));

  console.log("📤 Sent logs with routing keys [info, error]");

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
}

producer();
```
**Consumer 1 (listens only to `"info"` logs)**
```js
const amqp = require("amqplib");

async function infoConsumer() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const exchange = "logsExchange";
  const queue = "infoQueue";

  await channel.assertExchange(exchange, "direct", { durable: true });
  await channel.assertQueue(queue, { durable: true });

  // Bind queue with binding key "info"
  await channel.bindQueue(queue, exchange, "info");

  console.log("📥 Waiting for [info] logs...");
  channel.consume(queue, (msg) => {
    console.log("✅ [Info Consumer] Received:", msg.content.toString());
    channel.ack(msg);
  });
}

infoConsumer();
```
**Consumer 2 (listens only to `"error"` logs)**
```js
const amqp = require("amqplib");

async function errorConsumer() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const exchange = "logsExchange";
  const queue = "errorQueue";

  await channel.assertExchange(exchange, "direct", { durable: true });
  await channel.assertQueue(queue, { durable: true });

  // Bind queue with binding key "error"
  await channel.bindQueue(queue, exchange, "error");

  console.log("📥 Waiting for [error] logs...");
  channel.consume(queue, (msg) => {
    console.log("🚨 [Error Consumer] Received:", msg.content.toString());
    channel.ack(msg);
  });
}

errorConsumer();
```
1. **Producer** sends messages to `logsExchange` with routing keys `"info"` and `"error"`.
2. **Bindings** tell RabbitMQ:
  - `infoQueue` only wants `"info"` messages.
  - `errorQueue` only wants `"error"` messages.
3. RabbitMQ compares routing keys with binding keys:
  - `"ℹ️ Info log message"` → goes to `infoQueue`.
  - `"❌ Error log message"` → goes to `errorQueue`.
4. **Consumers** pick up messages from their queues and process them.

## Message Acknowledgements

By default, RabbitMQ delivers a message from a queue → consumer and then removes it immediately.
But what happens if the consumer crashes before processing the message?The message would be lost.

To solve this, RabbitMQ uses Acknowledgements.

### Ack (Acknowledgement)

- Sent by the consumer to RabbitMQ after it has successfully processed a message.
- Tells RabbitMQ: "You can safely remove this message from the queue."
- If no ack is received, RabbitMQ will requeue the message and send it again (to the same or another consumer).
- Example: Consumer processes "Order #123 created" successfully → sends ack → message deleted from queue.

### Nack (Negative Acknowledgement)

- Sent by the consumer when it fails to process a message.
- Tells RabbitMQ: "I couldn’t process this message."
- Options:
  - `nack(requeue=true)` → put the message back in the queue.
  - `nack(requeue=false)` → discard the message (send to dead-letter queue if configured).
- Example: Consumer tries to process `"Payment failed"` but DB is down → sends `nack(requeue=true)` → message returned to queue for retry later.

### Reject

- Similar to `nack` but works only on a single message (not batch).
- Options:
  - `reject(requeue=true)` → message is returned to the queue.
  - `reject(requeue=false)` → message is discarded (or sent to DLQ if configured).
- Example: Consumer finds message `"Invalid format"` → calls `reject(false)` → message discarded.
### Summary of Differences
| Method     | Meaning                           | Requeue?            | Use Case                      |
| ---------- | --------------------------------- | ------------------- | ----------------------------- |
| **ack**    | Processed successfully            | ❌ (message removed) | Normal processing             |
| **nack**   | Failed (can be multiple messages) | ✅/❌                 | Retry or discard batch        |
| **reject** | Failed (single message)           | ✅/❌                 | Invalid/unprocessable message |
