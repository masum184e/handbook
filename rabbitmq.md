# Contents

- [Introduction](#introduction)
  - [Features](#key-features)
  - [Basic Terminology](#basic-terminology)
  - [Simple Producer & Consumer](#simple-producer--consumer)
- [Message Brokers vs Queues](#message-brokers-vs-queues)
  - [Message Broker](#message-broker)
  - [Queue](#queue)
  - [Differences](#differences-between-message-broker-and-queue)
- [AMQP Protocol](#amqp-protocol)
  - [Core Concepts](#core-concepts-of-amqp)
    - [Producer](#1-producer)
    - [Exchange](#2-exchange)
    - [Queue](#3-queue)
    - [Binding](#4-binding)
    - [Consumer](#5-consumer)
  - [How It Works](#how-amqp-works)
  - [Order Processing Flow](#order-processing-flow)
- [Use Cases of RabbitMQ](#use-cases-of-rabbitmq)
  - [Why Use RabbitMQ](#why-use-rabbitmq)
  - [When to Use RabbitMQ](#when-to-use-rabbitmq)
  - [Example Scenario: Online Shop](#example-scenario-online-shop)
- [Installation](#installation)
  - [Docker](#docker)
  - [Locally](#locally)
    - [On Windows / macOS](#on-windows--macos)
  - [Management UI](#management-ui)
    - [Features](#key-features-of-management-ui)
    - [Example Usage](#example-usage)
    - [Example Workflow](#example-workflow)
- [Core Concepts](#core-concepts)
  - [Producer](#producer)
  - [Consumer](#consumer)
  - [Queue](#queue-1)
    - [Charecterstics of Queue](#key-characteristics-of-a-queue)
    - [Role of Queue](#role-of-queue-in-amqp-flow)
  - [Exchange](#exchange)
    - [Direct Exchange](#direct-exchange)
    - [Fanout Exchange](#fanout-exchange)
    - [Topic Exchange](#topic-exchange)
    - [Headers Exchagne](#headers-exchange)
    - [Example Scenario](#example-scenarios-of-exchange)
  - [Binding & Routing Keys](#binding--routing-keys)
    - [Binding](#binding)
    - [Routing Key](#routing-key)
    - [Binding vs Routing Key](#binding-vs-routing-key)
    - [Example Scenario: Logging System](#example-scenario-logging-system)
  - [Message Acknowledgements](#message-acknowledgements)
    - [Ack (Acknowledgement)](#ack-acknowledgement)
    - [Nack (Negative Acknowledgement)](#nack-negative-acknowledgement)
    - [Reject](#reject)
    - [Summary of Differences](#summary-of-differences)

# Introduction

RabbitMQ is an open-source message broker (also called a message queue system) that helps applications communicate with each other by sending and receiving messages asynchronously.

It acts as a middleman between different services (producers and consumers) to ensure reliable message delivery, even if one service is temporarily unavailable.

Think of RabbitMQ like a post office:

- A producer (sender) writes a message and sends it to the post office (RabbitMQ).
- The post office stores the message in a mailbox (queue).
- A consumer (receiver) comes later to pick up the message and process it.

## Key Features

- **Asynchronous Communication** – sender and receiver don’t need to run at the same time.
- **Decoupling** – producers and consumers don’t need to know about each other.
- **Reliability** – messages can be stored until they are delivered successfully.
- **Scalability** – multiple consumers can share the workload.
- **Supports Multiple Protocols** – mainly AMQP (Advanced Message Queuing Protocol).
- **Flexible Routing** – supports queues, topics, fanout, direct, headers-based routing.

## Basic Terminology

- **Producer:** The sender of messages.
- **Message:** The data being transferred (e.g., JSON, text, binary).
- **Queue:** A buffer where messages are stored until consumed.
- **Consumer:** The receiver of messages.
- **Exchange:** A routing mechanism that decides how messages go to queues (e.g., direct, topic, fanout).
- **Binding:** Rule that connects an exchange to a queue.

## Simple Producer & Consumer

Let’s consider a real-world scenario:

- Producer: An order service sends a message when a new order is placed.
- Consumer: A notification service receives the message and sends an email confirmation.

Steps:

- The Producer connects to RabbitMQ and sends a JSON message (`{ orderId: 123, product: "Laptop" }`) to the `orderQueue`.
- The Consumer listens to the same queue (`orderQueue`).
- When a message arrives, the consumer processes it (e.g., sends a notification).

Why is this useful?

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

## Differences between Message Broker and Queue

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

**Why AMQP is powerful**

- It defines a standardized, reliable way to send/receive messages.
- RabbitMQ uses AMQP to ensure durability, reliability, and flexibility (like fanout, routing, acknowledgments).

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

## How AMQP Works

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

1. Producer publishes a message to `orderExchange` with routing key `"order.created"`.
2. Exchange checks rules → routes it to `orderQueue` (since it’s bound with the same key).
3. Consumer listens on `orderQueue`, receives the message, and processes it.
4. Consumer acks → RabbitMQ deletes the message from the queue.

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

## When to Use RabbitMQ

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
docker run -d --hostname my-rabbit --name rabbitmq -p 5672:5672 -p 15672:15672 -e RABBITMQ_DEFAULT_USER=guest -e RABBITMQ_DEFAULT_PASS=guest rabbitmq:3-management
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

### On Windows / macOS

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

Install dependencies

```
npm install amqplib
```

RabbitMQ Setup

```ts
// types/amqplib.d.ts

declare module "amqplib" {
  type OptionsConnect = string | unknown;

  export interface Message {
    content: Buffer;
    fields: unknown;
    properties: unknown;
  }

  export interface Connection {
    createChannel(): Promise<Channel>;
    close(): Promise<void>;
  }

  export interface Channel {
    assertQueue(queue: string, options?: unknown): Promise<Channel>;
    assertExchange(
      exchange: string,
      type: string,
      options?: unknown
    ): Promise<Channel>;
    sendToQueue(queue: string, content: Buffer, options?: unknown): boolean;
    publish(
      exchange: string,
      routingKey: string,
      content: Buffer,
      options?: unknown
    ): boolean;
    consume(
      queue: string,
      onMessage: (msg: Message | null) => void,
      options?: { noAck?: boolean }
    ): void;
    ack(message: Message): void;
    nack(message: Message, allUpTo?: boolean, requeue?: boolean): void;
    close(): Promise<void>;
    bindQueue(
      queue: string,
      exchange: string,
      routingKey?: string
    ): Promise<void>;
  }

  export function connect(
    url: OptionsConnect,
    socketOptions?: unknown
  ): Promise<Connection>;
}
```

Connection

```ts
import amqp from "amqplib";

let connection: amqp.Connection | null = null;
let channel: amqp.Channel | null = null;

export async function getChannel(): Promise<amqp.Channel> {
  if (!connection) {
    const uri =
      process.env.RABBITMQ_CONNECTION_URI ||
      "amqp://guest:guest@localhost:5672";
    console.log("Connecting to RabbitMQ at:", uri);
    connection = await amqp.connect(uri);
    channel = await connection.createChannel();
  }

  if (!channel) throw new Error("Failed to create RabbitMQ channel");
  return channel;
}
```

`.env` Configuration

```env
RABBITMQ_CONNECTION_URI=amqp://guest:guest@localhost:5672
```

It ensures you have a single RabbitMQ channel that can be reused across your app.

- `await amqp.connect("amqp://localhost")`
  - Creates a new TCP connection to the RabbitMQ server running locally.
- `await connection.createChannel()`
  - Creates a channel within the connection.
  - Channels are lightweight virtual connections for sending/receiving messages

## Producer

In RabbitMQ, a Producer is any application or service that creates and sends messages.
Messages can be in any format (JSON, string, binary, etc.) and are published to an exchange, which decides how they should be routed to one or more queues.

### Producer Workflow

1. **Connect to RabbitMQ**
   - Establish a TCP connection to the RabbitMQ broker.
2. **Create a Channel**
   - Channels are lightweight virtual connections used to send and receive messages.
3. **Declare a Queue (or Exchange)**
   - You can send messages directly to a queue using the default exchange.
   - Or, for more flexibility, publish to a named exchange (e.g., direct, fanout, topic).
4. **Publish Messages**
   - Messages are sent to the queue (via exchange).
   - Persistent messages + durable queues → messages survive broker restarts.

### Flow Diagram

```
Producer ---> [Exchange] ---> [Queue] ---> Consumer
```

- **Producer** → Sends messages
- **Exchange** → Routes messages based on type/rules
- **Queue** → Holds messages until consumed
- **Consumer** → Processes messages

### Order Service as a Producer

In an e-commerce application, the Order Service acts as a producer.
When a customer places an order, the service creates a message and pushes it to RabbitMQ.

```ts
const channel = await getChannel();
const queue = "orders_queue";

await channel.assertQueue(queue, { durable: true });
const message = { orderId, product, status: "created" };
channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
  persistent: true,
});
```

The message will stay in the `orders_queue` until a consumer (e.g., Notification Service, Payment Service) picks it up for processing.

## Consumer

A Consumer is an application or service that receives and processes messages from a queue.
Consumers subscribe to a queue, handle incoming messages, and send an acknowledgment (`ack`) to RabbitMQ when processing is complete.

If a consumer fails or crashes before acknowledging, RabbitMQ requeues the message so it can be delivered again. This ensures reliability and no message loss.

### Consumer Workflow

1. **Connect to RabbitMQ**
   - Reuse the same connection/channel logic as the producer.
2. **Subscribe to a Queue**
   - Listen for messages from the declared queue.
3. **Process Incoming Messages**
   - Each message is handled (e.g., parsing JSON, performing an action).
4. **Acknowledge or Reject**
   - `ack(msg)` → Marks message as successfully processed.
   - `nack(msg, false, true)` → Rejects and requeues the message for retry.

### Flow Diagram

```
Producer ---> Exchange ---> Queue ---> Consumer
                               |
                               v
                          Process Message
                          ↙            ↘
                       ACK ✅         NACK ❌
```

### Notification Service as a Consumer

In the e-commerce example, a Notification Service consumes messages from `orders_queue` and sends an email confirmation to customers.

```ts
import { NextApiRequest, NextApiResponse } from "next";
import { Channel, Message } from "amqplib";
import { getChannel } from "@/lib/rabbitmq";

let consumerStarted = false;

const processMessage = (channel: Channel, msg: Message | null) => {
  if (!msg) return;

  try {
    const order = JSON.parse(msg.content.toString());
    console.log("📧 Sending Email Confirmation Email:", order);
    channel.ack(msg);
    console.log("✅ Message processed and acknowledged:", order);
  } catch (error) {
    console.error("❌ Error processing message:", error);
    channel.nack(msg, false, true); // requeue message
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const channel: Channel = await getChannel();
    const queue = "orders_queue";

    await channel.assertQueue(queue, { durable: true });

    // Start consumer only once
    if (!consumerStarted) {
      channel.consume(
        queue,
        (msg: Message | null) => processMessage(channel, msg),
        { noAck: false }
      );
      consumerStarted = true;
      console.log(`🚀 Consumer started. Listening to queue: ${queue}`);
    } else {
      console.log("ℹ️ Consumer already running");
    }

    res.status(200).json({ message: "Consumer started (or already running)" });
  } catch (error) {
    console.error("❌ Error starting consumer:", error);
    res.status(500).json({ message: "Failed to start consumer", error });
  }
}
```

- If email is sent successfully → `channel.ack(msg)`
- If an error occurs → `channel.nack(msg, false, true)` (requeue for retry).

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

### Message Lifecycle in a Queue

1. **Message published** → Placed into orders_queue.
2. **Message pending** → Waits in the queue until a consumer is ready.
3. **Message consumed** → Consumer processes it.
4. **Acknowledgment sent** → Message removed from the queue.
5. **No acknowledgment** → RabbitMQ requeues the message.

### Inspection

1. Management UI
2. HTTP API: `http://localhost:15672/api/queues`
3. From Code: `const details = await channel.assertQueue(queue, { durable: true });`

## Exchange

An Exchange is the component in RabbitMQ responsible for routing messages from Producers into Queues, based on defined rules.

A producer never sends messages directly to a queue (except via the default exchange). Instead, it publishes messages to an exchange, and the exchange decides how to route them.

RabbitMQ provides four main exchange types:

### Direct Exchange

- Routes messages to queues based on exact matching between the routing key and the binding key.
- Useful when each message should go to a specific queue.
- Best for one-to-one communication.

Example:

- Producer sends a message with routing key `"order.created"`.
- Queue is bound to exchange with the same binding key `"order.created"`.
- Message goes to that queue only.

### Fanout Exchange

- Broadcasts messages to all queues bound to it, ignoring routing keys.
- Best for one-to-many scenarios (e.g., notifications, logs).

Example

- Producer sends `"system update"` to a fanout exchange.
- All bound queues receive the message.

### Topic Exchange

- Routes messages based on pattern matching between the routing key and the binding key.
- Routing keys are dot-separated words (e.g., `"order.us.created"`).
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
async function publishMessage(
  channel: Channel,
  exchange: string,
  type: "direct" | "fanout" | "topic" | "headers",
  routingKey: string,
  message: string,
  options: Record<string, unknown> = {}
) {
  await channel.assertExchange(exchange, type, { durable: true });
  channel.publish(exchange, routingKey, Buffer.from(message), options);
  console.log(`📤 Sent to [${exchange}] (${type}) → ${message}`);
}

const channel = await getChannel();

await publishMessage(channel, "direct_logs", "direct", "error", "❌ Error log");
await publishMessage(
  channel,
  "fanout_logs",
  "fanout",
  "",
  "📢 Broadcast message"
);
await publishMessage(
  channel,
  "topic_logs",
  "topic",
  "order.us.created",
  "🇺🇸 US Order Created"
);
```

**Consumer (listens from different exchange types)**

```js
async function consumeMessage(
  channel: Channel,
  exchange: string,
  queue: string,
  type: "direct" | "fanout" | "topic" | "headers",
  routingKey: string = ""
) {
  // Ensure the exchange exists
  await channel.assertExchange(exchange, type, { durable: true });

  // Declare a queue to consume messages from
  const q = await channel.assertQueue(queue, { durable: true });

  // Ensure 'q' has a 'queue' property
  if (!q || !q.queue) {
    throw new Error(`Failed to assert queue: ${queue}`);
  }
  // Bind the queue to the exchange with the routing key (if applicable)
  if (routingKey) {
    await channel.bindQueue(q.queue, exchange, routingKey);
  } else {
    await channel.bindQueue(q.queue, exchange);
  }

  // Start consuming messages
  console.log(`🔄 Waiting for messages in [${queue}]`);

  // Consume messages from the queue
  channel.consume(q.queue, (msg: Message | null) => {
    if (msg) {
      const messageContent = msg.content.toString();
      console.log(`📩 Received [${exchange}] → ${messageContent}`);

      // Acknowledge the message
      channel.ack(msg);
    }
  });
}

const channel: Channel = await getChannel();

await consumeMessage(channel, "direct_logs", "direct_queue", "direct", "error");
await consumeMessage(channel, "fanout_logs", "fanout_queue", "fanout");
await consumeMessage(
  channel,
  "topic_logs",
  "topic_queue",
  "topic",
  "order.us.created"
);
```

1. **Producer** sends messages to different exchanges (`direct`, `fanout`, `topic`, `headers`).
2. **Exchange** decides how to route messages:
   - Direct → goes only to queues bound with the exact key `"error"`.
   - Fanout → broadcast to all bound queues.
   - Topic → matches routing pattern (e.g., `"order.us.created"` matches `"order.us.*"`).
   - Headers → routes based on message headers (e.g., `format=pdf`).
3. **Consumers** pick up only the messages they are interested in.

**Summary**

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

| Method     | Meaning                           | Requeue?             | Use Case                      |
| ---------- | --------------------------------- | -------------------- | ----------------------------- |
| **ack**    | Processed successfully            | ❌ (message removed) | Normal processing             |
| **nack**   | Failed (can be multiple messages) | ✅/❌                | Retry or discard batch        |
| **reject** | Failed (single message)           | ✅/❌                | Invalid/unprocessable message |


# Declaring Queues

A queue is a buffer that stores messages until a consumer retrieves them.
Key properties when declaring a queue:

- **Name**: The identifier of the queue (e.g., "`task_queue`").
- **Durable**: If `true`, the queue survives broker restarts (messages will persist if also marked as persistent).
- **Exclusive**: If `true`, the queue is only accessible by the connection that declared it and will be deleted once the connection closes.
- **Auto**-delete: If `true`, the queue will automatically be deleted when the last consumer unsubscribes.
- **Arguments**: Optional extra settings like TTL (time-to-live) or max length.

Declaring a queue ensures it exists before you publish or consume messages.

## Durable Queues

- A durable queue survives a broker restart.
- To truly persist messages across restarts:
    - The queue must be durable.
    - Messages must be published as persistent (persistent: true in options).
- If a queue is not durable:
    - It will be deleted when RabbitMQ restarts.
    - Any messages stored will also be lost.

Durable queues are ideal for reliable background tasks (e.g., processing jobs in a worker system).

```ts
const amqp = require('amqplib');

async function producer() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  const queue = 'durable_queue';
  const msg = 'Task needs to be processed';

  // Declare a durable queue
  await channel.assertQueue(queue, { durable: true });

  // Publish persistent message
  channel.sendToQueue(queue, Buffer.from(msg), {
    persistent: true
  });

  console.log(" [x] Sent '%s'", msg);

  await channel.close();
  await connection.close();
}

producer();

```
## Auto-delete Queues

- An auto-delete queue is deleted automatically when the last consumer unsubscribes.
- Useful for temporary or short-lived consumers, like:
    - Real-time chat rooms.
    - Notifications where a queue exists only while someone is listening.
- If you declare a queue as `autoDelete: true`, once no consumers are connected, RabbitMQ removes the queue automatically.
- Note: Auto-delete is triggered only when consumers disconnect, not when the queue is empty.

```ts
const amqp = require('amqplib');

async function consumer() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  const queue = 'temp_notifications';

  // Auto-delete queue (deleted when last consumer unsubscribes)
  await channel.assertQueue(queue, {
    durable: false,
    autoDelete: true
  });

  console.log(" [*] Waiting for messages in %s", queue);

  channel.consume(queue, (msg) => {
    console.log(" [x] Received '%s'", msg.content.toString());
  }, { noAck: true });
}

consumer();
const amqp = require('amqplib');

async function consumer() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  const queue = 'temp_notifications';

  // Auto-delete queue (deleted when last consumer unsubscribes)
  await channel.assertQueue(queue, {
    durable: false,
    autoDelete: true
  });

  console.log(" [*] Waiting for messages in %s", queue);

  channel.consume(queue, (msg) => {
    console.log(" [x] Received '%s'", msg.content.toString());
  }, { noAck: true });
}

consumer();
```
1. Producer side (durable_queue):
    - Declares a queue with `{ durable: true }`.
    - Sends a persistent message.
    - Even if RabbitMQ restarts, the queue and message will still exist.
2. Consumer side (temp_notifications):
    - Declares a queue with `{ autoDelete: true }`.
    - Queue will exist only while at least one consumer is connected.
    - As soon as the consumer disconnects, RabbitMQ deletes the queue automatically
    - 

## Queue Property Matrix
| Property       | Effect                                                                               | Use Case                                          |
| -------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------- |
| **Durable**    | Queue survives broker restarts (persistent storage if messages are also persistent). | Background jobs, task queues, reliable systems    |
| **AutoDelete** | Queue is deleted once the last consumer unsubscribes.                                | Temporary consumers, live sessions, pub/sub rooms |

# Declaring Exchanges
An exchange is responsible for routing messages to queues.
When a producer publishes a message, it sends it to an exchange, not directly to a queue.

Exchange properties:

- **Name**: Identifier (e.g., "`logs_exchange`").
- **Type**: Defines routing strategy:
    - `direct`: Routes messages to queues based on exact routing key.
    - `fanout`: Routes messages to all bound queues (broadcast).
    - `topic`: Routes messages based on pattern matching (wildcards in routing keys).
    - `headers`: Routes messages based on message headers.
- **Durable**: Survives broker restart.
- **Auto-delete**: Deleted once no queues are bound to it.

Declaring an exchange ensures it exists before binding or publishing.

# Binding Queues to Exchanges

A binding links an exchange to a queue with a routing rule.

- In a direct exchange, the binding includes a specific routing key.
- In a fanout exchange, no routing key is needed (messages go everywhere).
- In a topic exchange, the binding includes a pattern (like `*.error`).


```ts
const amqp = require('amqplib');

async function setup() {
  try {
    // 1. Connect to RabbitMQ
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    // 2. Declare exchange
    const exchangeName = 'direct_logs';
    await channel.assertExchange(exchangeName, 'direct', {
      durable: true
    });

    // 3. Declare queue
    const queueName = 'error_logs';
    await channel.assertQueue(queueName, {
      durable: true,
      exclusive: false,
      autoDelete: false
    });

    // 4. Bind queue to exchange with routing key
    const routingKey = 'error';
    await channel.bindQueue(queueName, exchangeName, routingKey);

    console.log(`Queue "${queueName}" bound to exchange "${exchangeName}" with key "${routingKey}"`);

    // 5. Close connection after setup
    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 500);
  } catch (err) {
    console.error('Error setting up RabbitMQ:', err);
  }
}

setup();
```

# Publishing Messages
A producer sends a message to an exchange, which then routes it to one or more queues (depending on bindings).

## Important options when publishing:

- **exchange**: The exchange name (empty string `""` means the default exchange, which routes directly to a queue by its name).
- **routingKey**: Used by `direct`/`topic` exchanges to decide which queue(s) should receive the message.
- **content**: The actual message body (Buffer/string).
- **options**:
    - `persistent: true` → ensures the message is stored on disk (not lost if broker restarts, assuming queue is also durable).
    - `expiration` → message TTL (time-to-live).
    - `headers` → key/value pairs for `headers` exchange type.

Producers don’t care which consumer eventually processes the message—they just publish.

```ts
const amqp = require('amqplib');

async function producer() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  const queue = 'task_queue';
  const msg = 'Hello RabbitMQ!';

  // Declare queue to make sure it exists
  await channel.assertQueue(queue, { durable: true });

  // Publish message to the queue
  channel.sendToQueue(queue, Buffer.from(msg), {
    persistent: true   // ensures message survives broker restart
  });

  console.log(` [x] Sent '${msg}'`);

  await channel.close();
  await connection.close();
}

producer();
```

# Consuming Messages
A consumer connects to a queue and waits for messages.

## Key concepts:
- Queue name: The queue to consume from.
- autoAck (automatic acknowledgement):
    - ``true``: Message is removed immediately after delivery.
    - `false`: Message stays in queue until consumer acknowledges it (via `channel.ack(msg)`).
    - Using manual ack is safer in production, so unprocessed messages can be re-delivered if a consumer crashes.
- prefetch: Limit how many unacknowledged messages a consumer can receive at once (helps load balance).

```ts
const amqp = require('amqplib');

async function consumer() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  const queue = 'task_queue';

  // Ensure the queue exists
  await channel.assertQueue(queue, { durable: true });

  // Only fetch 1 unacknowledged message at a time
  channel.prefetch(1);

  console.log(" [*] Waiting for messages in %s", queue);

  // Consume messages
  channel.consume(queue, async (msg) => {
    if (msg !== null) {
      const content = msg.content.toString();
      console.log(" [x] Received '%s'", content);

      // Simulate some work
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log(" [x] Done processing '%s'", content);

      // Acknowledge after processing
      channel.ack(msg);
    }
  }, {
    noAck: false  // require manual acknowledgement
  });
}

consumer();
```
1. **Producer:**
    - Connects and declares a durable queue (`task_queue`).
    - Publishes `"Hello RabbitMQ!"` into it.
    - Message is persistent, meaning it will be stored on disk.
2. **Consumer:**
    - Connects and ensures the same queue exists.
    - Calls `channel.consume` to start receiving messages.
    - Uses `channel.prefetch(1)` → processes one message at a time (fair dispatch).
    - Uses `channel.ack(msg)` → acknowledges processing is complete, so RabbitMQ removes it from the queue.
  
If the consumer crashes before `ack`, the message will be re-queued and delivered to another consumer.


