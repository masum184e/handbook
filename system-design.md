# Contents

- [Fundamentals](#fundamentals)
  - [System Design](#system-design)
- [Software Architecture](#software-architecture)
  - [Key Elements](#key-elements-of-software-architecture)
  - [Monolithic (1-Tier Architecture)](#monolithic-1-tier-architecture)
  - [Client-Server(2-Tier Architecture)](#client-server2-tier-architecture)
  - [N-Tier Architecture](#n-tier-architecture)
  - [Modular Monolithic](#modular-monolithic)
  - [Microservices](#microservices)
  - [Event-Driven Architecture](#event-driven-architecture)
  - [Cloud Native](#cloud-native)
  - [Serverless Architecture](#serverless-architecture)
- [Concepts](#concepts)
  - [Category of Data](#category-of-data)
- [Performance](#performance)
  - [Performance Metrics](#performance-metrics)
    - [Availability](#availability)
    - [Reliability](#reliability)
    - [Durability](#durability)
    - [Performance Metrics Summary](#performance-metrics-summary)
  - [Performance-Related Concepts](#performance-related-concepts)
  - [Performance Example](#example-of-performance)
- [Queue](#queue)
  - [Why Use a Queue](#why-use-a-queue)
  - [Types of Queue](#types-of-queue)
  - [Where does a queue build up](#where-does-a-queue-build-up)
  - [Example of Queue](#example-of-queue)
  - [Common Queue Tools](#common-queue-tools)
  - [Strategy to Prevent Queue](#strategy-to-prevent-queue)
- [Latency](#latency)
  - [Types of Latency](#types-of-latency)
  - [Why Latency Matters](#why-latency-matters)
  - [Latency Breakdown](#latency-breakdown)
  - [Example of Latency](#example-of-latency)
  - [How to Reduce Latency](#how-to-reduce-latency)
- [Tail Latency](#tail-latency)
  - [Why Tail Latency Matters](#why-tail-latency-matters)
  - [Analogy of Tail Latency](#analogy-of-tail-latency)
  - [Example of Tail Latency](#example-of-tail-latency)
  - [How to Reduce Tail Latency](#how-to-reduce-latency)
- [Network Latency](#network-latency)
  - [Components](#components-of-network-latency)
  - [Techniques to Reduce Network Latency](#techniques-to-reduce-network-latency)
- [Memory Access Latency](#memory-access-latency)
  - [Memory Hierarchy & Latency](#memory-hierarchy--latency)
  - [Why Memory Latency Matters](#why-memory-latency-matters)
  - [Optimization Techniques for Memory Latency](#optimization-techniques-for-memory-latency)
  - [Example with In-Memory Database](#example-with-in-memory-database)
- [Disk Access Latency](#disk-access-latency)
  - [Components of Disk Access Latency](#components-of-disk-access-latency)
  - [Disk Latency Comparison Table](#disk-latency-comparison-table)
  - [Why Disk Latency Matters](#why-disk-latency-matters)
  - [Strategies to Minimize Disk Latency](#strategies-to-minimize-disk-latency)
- [Throughput](#throughput)
  - [Key Concepts of Throughput](#key-concepts-of-throughput)
  - [Why Throughput Matters in System Design](#why-throughput-matters-in-system-design)
  - [Throughput vs Latency](#throughput-vs-latency)
  - [How to improve Throughput](#how-to-improve-throughput-in-nodejs)
  - [Measure Throughput](#measure-throughput)
  - [Example of Throughput](#example-of-throughput)
- [Transmission Control Protocol](#transmission-control-protocol)
  - [Features of TCP](#features-of-tcp)
  - [How TCP Works](#how-tcp-works)
  - [Example Architecture Using TCP](#example-architecture-using-tcp)
  - [Example of TCP with Node.js](#example-of-tcp-with-nodejs)
  - [When to Use TCP in System Design](#when-to-use-tcp-in-system-design)
  - [Advantages & Disadvantages of TCP](#advantages--disadvantages-of-tcp)
- [TCP Handshake](#tcp-handshake)
  - [Step-by-Step: TCP 3-Way Handshake](#step-by-step-tcp-3-way-handshake)
  - [Purpose of TCP Handshake in System Design](#purpose-of-tcp-handshake-in-system-design)
  - [Diagram of TCP Handshake](#diagram-of-tcp-handshake)
  - [Example Scenario of TCP Handshake](#example-scenario-of-tcp-handshake)
  - [TCP Handshake with Node.js](#tcp-handshake-with-nodejs)
  - [TCP Handshake Use Cases](#tcp-handshake-use-cases)
  - [System Design Considerations of TCP Handshake](#system-design-considerations-of-tcp-handshake)
- [TLS Handshake](#tls-handshake)
  - [TLS Handshake – Step-by-Step Breakdown](#tls-handshake--step-by-step-breakdown)
  - [Purpose of TLS in System Design](#purpose-of-tls-in-system-design)
  - [Visual Diagram of TLS Handshake](#visual-diagram-of-tls-handshake)
  - [Example of TLS Handshake](#example-of-tls-handshake)
  - [Example of TLS Handshake with Node.js](#example-of-tls-handshake-with-nodejs)
  - [TLS vs TCP](#tls-vs-tcp)
- [Caching](#caching)
  - [How Caching Works](#how-caching-works)
  - [Types of Caching](#types-of-caching)
  - [Example of Cache](#example-of-cache)
  - [Cache Invalidation & Expiry](#cache-invalidation--expiry)
  - [Challenges of Caching](#challenges-of-caching)
- [Scalability](#scalability)
  - [Vertical Scaling (Scaling Up)](#vertical-scaling-scaling-up)
    - [Benefits of Vertical Scalling](#benefits-of-vertical-scalling)
    - [Limitations of Vertical Scalling](#limitations-of-vertical-scalling)
    - [Example of Vertical Scaling](#example-of-vertical-scaling)
    - [Vertical Scaling for Databases](#vertical-scaling-for-databases)
    - [Performance Comparison of Vertical Scalling](#performance-comparison-of-vertical-scalling)
  - [Horizontal Scaling (Scaling Out)](#horizontal-scaling-scaling-out)
    - [Benefits of Horizontal Scaling](#benefits-of-horizontal-scaling)
    - [Limitations of Horizontal Scaling](#limitations-of-horizontal-scaling)
    - [Horizontal Scaling Architecture](#horizontal-scaling-architecture)
    - [Example of Horizontal Scalling](#example-of-horizontal-scalling)
    - [Other Components](#other-components-you-might-add)
  - [Strategies to Implement Scaling](#strategies-to-implement-scaling)
  - [Example of Scaling](#example-of-scaling)
- [Decentralization](#decentralization)
  - [Core Characteristics of Decentralized Systems](#core-characteristics-of-decentralized-systems)
  - [Components of a Decentralized System](#components-of-a-decentralized-system)
  - [Pros & Cons of Decentralization](#pros--cons-of-decentralization)
- [Independence](#independence)
  - [Types of Independence](#types-of-independence)
- [Load Balancer](#load-balancer)
  - [Load Balancer Does](#load-balancer-does)
  - [Types of Load Balancer](#types-of-load-balancers)
  - [Load Balancing Algorithms](#load-balancing-algorithms)
  - [Architecture Diagram Example of Load Balancer](#architecture-diagram-example-of-load-balancer)
  - [Example of Load Balancer](#example-of-load-balancer)
  - [Where Load Ualancer Used](#where-load-balancer-used)
  - [Layer 4 vs Layer 7 Load Balancers](#layer-4-vs-layer-7-load-balancers)
  - [Real Deployment](#real-deployment-example-using-aws)
  - [How Load Balancer Work](#how-load-balancer-work)
- [Reverse Proxy](#reverse-proxy)
  - [Why Use a Reverse Proxy?](#why-use-a-reverse-proxy)
  - [How It Works (Request Flow)](#how-it-works-request-flow)
  - [Example of reverse proxy](#example-of-reverse-proxy)
  - [Example of reverse proxy with NGINX](#example-of-reverse-proxy-with-nginx)
  - [Security Benefits](#security-benefits)
  - [Tools Commonly Used as Reverse Proxies](#tools-commonly-used-as-reverse-proxies)
  - [Reverse Proxy vs Load Balancer](#reverse-proxy-vs-load-balancer)
- [API Gateway](#api-gateway)
  - [Features of API Gateway](#features-of-api-gateway)
  - [Why Use an API Gateway?](#why-use-an-api-gateway)
  - [API Gateway Worflow](#api-gateway-worflow)
  - [Example of API Gateway](#example-of-api-gateway)
  - [Benefits and Trade-offs of API Gateway]()
- [Rate Limiting](#rate-limiting)
  - [Why Use Rate Limiting?](#why-use-rate-limiting)
  - [Where Rate Limiting Applied](#where-rate-limiting-applied)
  - [Rate Limiting Algorithms](#rate-limiting-algorithms)
  - [Example of Rate Limiting](#example-of-rate-limiting)
  - [GitHub API Example](#github-api-example)
  - [Node.js Example of Rate Limiting](#nodejs-example-of-rate-limiting)
  - [Tech Stack for Rate Limiting](#tech-stack-for-rate-limiting)
  - [Best Practices of Rate Limiting](#best-practices-of-rate-limiting)
  - [What Happens Without Rate Limiting?](#what-happens-without-rate-limiting)
- [Replication](#replication)
  - [Types of Replication](#types-of-replication)
  - [Replication Strategies](#replication-strategies)
  - [Example of Replication](#example-of-replication)
  - [Data Replication vs Component Replication](#data-replication-vs-component-replication)
- [Stateless Replication](#stateless-replication)
  - [Characteristics of Stateless Replication](#characteristics-of-stateless-replication)
  - [Stateless Replication Architecture](#stateless-replication-architecture)
  - [Example of Stateless Replication](#example-of-stateless-replication)
  - [Stateless vs Stateful Replication](#stateless-vs-stateful-replication)
- [Stateful Replication](#stateful-replication)
  - [Components That Require Stateful Replication](#components-that-require-stateful-replication)
  - [Common Replication Models for Stateful Systems](#common-replication-models-for-stateful-systems)
  - [Flow of Stateful Replication](#flow-of-stateful-replication)
  - [Trade-offs of Stateful Replication](#trade-offs-of-stateful-replication)
  - [Technologies Supporting Stateful Replication](#technologies-supporting-stateful-replication)
  - [Diagram of Stateful Replication](#diagram-of-stateful-replication)
  - [Example: PostgreSQL Streaming Replication](#example-postgresql-streaming-replication)
  - [Web Application Replication](#web-application-replication)
  - [Sticky Sessions](#sticky-sessions)
  - [Session Clustering](#session-clustering)
  - [Database Replication](#database-replication)
- [Master-Slave Architecture](#master-slave-architecture)
  - [Key Concepts of Master-Slave](#key-concepts-of-master-slave)
  - [How it works](#how-it-works)
  - [Replication Modes](#replication-modes)
  - [Example: MySQL Master-Slave Setup](#example-mysql-master-slave-setup)
  - [Tools that Use Master-Slave](#tools-that-use-master-slave)
  - [Pros and Cons of Master Slave](#pros-and-cons-of-master-slave)
  - [Compared to Multi-Master](#compared-to-multi-master)
- [Master-Master Architecture](#master-master-architecture)
  - [Characteristics of Master-Master](#characteristics-of-master-master)
  - [How it work](#how-it-work)
  - [Use Cases of Master-Master](#use-cases-of-master-master)
  - [Technologies Supporting Master-Master](#technologies-supporting-master-master)
  - [Conflict Resolution](#conflict-resolution)
  - [Pros and Cons of Master-Master](#pros-and-cons-of-master-master)
  - [Master-Slave vs Master-Master](#master-slave-vs-master-master)
- [Application Security](#application-security)
  - [Key Principles of Application Security](#key-principles-of-application-security)
  - [Security Components in System Design](#security-components-in-system-design)
  - [Example of Secure Online Banking System](#example-of-secure-online-banking-system)
  - [Consequences of Ignoring Application Security](#consequences-of-ignoring-application-security)
- [Network Security](#network-security)
  - [Key Goals of Network Security](#key-goals-of-network-security)
  - [Network Security Layers](#network-security-layers)
  - [Security Mechanisms](#security-mechanisms)
  - [Example of Network Security](#example-of-network-security)
  - [Network Security Design Decisions](#network-security-design-decisions)
  - [Common Network Security Threats](#common-network-security-threats)
  - [Best Practices for Network Security](#best-practices-for-network-security)
- [Symmetric Encryption](#symmetric-encryption)
  - [Key Concepts of Symmetric Encryption](#key-concepts-of-symmetric-encryption)
  - [Common Symmetric Encryption Algorithms](#common-symmetric-encryption-algorithms)
  - [Example using AES](#example-using-aes)
  - [Symmetric vs Asymmetric](#symmetric-vs-asymmetric)
- [Public Key Encryption](#public-key-encryption)
  - [Key Concepts of Public Key Encryption](#key-concepts-of-public-key-encryption)
  - [Common Algorithm of Public Key Encryption](#common-algorithm-of-public-key-encryption)
  - [Where Public Key Encryption is used](#where-public-key-encryption-is-used)
  - [Example of Public Key Encryption](#example-of-public-key-encryption)
  - [Security Benefits of Public Key Encryption](#security-benefits-of-public-key-encryption)
- [SSL](#ssl)
  - [SSL Workflow](#ssl-workflow)
- [Hashing](#hashing)
  - [Purpose of Hashing](#purpose-of-hashing)
  - [How Hashing Works](#how-hashing-works)
  - [Example with Hash Map](#example-with-hash-map)
  - [Example of Password Storage](#example-of-password-storage)
  - [Common Hash Functions](#common-hash-functions)
  - [Hashing Caveats](#hashing-caveats)
- [Digital Signature](#digital-signature)
  - [How Digital Signatures Work](#how-digital-signatures-work)
  - [Uses of Digital Signature](#uses-of-digital-signature)
  - [Workflow of Digital Signature](#workflow-of-digital-signature)
- [Digital Certificate](#digital-certificate)
  - [Uses of Digital Certificates](#uses-of-digital-certificates)
  - [Structure of a Digital Certificate](#structure-of-a-digital-certificate)
  - [How Digital Certificate Works](#how-digital-certificate-works)
  - [TLS Handshake with Digital Certificate](#tls-handshake-with-digital-certificate)
  - [Tools used for Digital Certificate](#tools-used-for-digital-certificate)
  - [Trust Hierarchy in Digital Certificates](#trust-hierarchy-in-digital-certificates)
- [VPN](#vpn)
  - [Why Use a VPN](#why-use-a-vpn)
  - [How VPN Work](#how-vpn-work)
  - [VPN Workflow](#vpn-workflow)
  - [VPN Types](#vpn-types)
  - [VPN Tunneling Protocols](#vpn-tunneling-protocols)
  - [Example of VPN](#example-of-vpn)
  - [VPN Authentication Methods](#vpn-authentication-methods)
  - [Network Security and VPN Integration](#network-security-and-vpn-integration)
- [Firewall](#firewall)
  - [Types of Firewall](#types-of-firewall)
  - [Firewall Workflow](#firewall-workflow)
  - [Where Firewalls Fit](#where-firewalls-fit)
  - [Stateful vs Stateless Firewall](#stateful-vs-stateless-firewall)
  - [Firewall Rule Syntax](#firewall-rule-syntax)
  - [Examplf of Firewall](#examplf-of-firewall)

# Fundamentals

## System Design

System Design is the process of defining the architecture, components, modules, interfaces, and data flow of a system to meet specific requirements.

### Two Levels of System Design

**1. High-Level Design (HLD)**

- Big-picture view.
- Focuses on architecture, components, and how they interact.
- Example: “We need a frontend (React), backend (Node.js), database (PostgreSQL), caching (Redis), and load balancing (NGINX).”

**2. Low-Level Design (LLD)**

- Detailed view.
- Focuses on class diagrams, database schema, APIs, algorithms, data structures.
- Example: “User table has columns: `id, name, email, password_hash`. Passwords will be hashed using bcrypt. The API `/login` validates credentials and generates JWT.”

### Designing a URL Shortener

Let’s go through system design fundamentals with an example.

**Step 1: Requirements**

- Functional:
  - Shorten a long URL into a small one.
  - Redirect when someone hits the short link.
- Non-functional:
  - System should handle millions of requests per day.
  - Fast lookups (<100 ms).
  - Highly available.

**Step 2: High-Level Design**

- Frontend → user enters long URL.
- Backend (API Server) → generates short code, stores mapping.
- Database → stores mapping (shortCode → longURL).
- Cache → for fast lookup of popular links (Redis).
- Load Balancer → distributes traffic across servers.

```
User → Load Balancer → API Servers → Database
                          ↓
                        Cache
```

**Step 3: Low-Level Design**

Database Schema:

```sql
Table: URL_Mapping
- id (primary key)
- short_code (unique)
- long_url (text)
- created_at
- expiry_date
```

Algorithm for Short Code:

- Take a unique ID.
- Convert it to Base62 (digits + letters).
- Example: `125` → `"cb"` → `short.ly/cb`.

API Example:

- `POST /shorten` → `{ "long_url": "https://example.com/article/1234" }`
- Response: `{ "short_url": "https://short.ly/cb" }`
- `GET /cb` → Redirects to original link.

**Step 4: Scalability & Optimization**

- Sharding DB when data grows.
- CDN for global users.
- Monitoring & Logging for failures.

## Requirements

When we design any system, we first figure out what the system should do and how well it should do it.

That’s exactly the difference between functional and non-functional requirements.

### Functional Requirements

These describe what the system should do — the features, behaviors, and services the system must provide.
They are business-oriented and directly visible to the user.

**Key Points:**

- Define functions or operations of the system.
- Answer: What must the system do?
- Usually written as use-cases, user stories, or API specifications.
- If not implemented → the system is incomplete.

**Examples:**

- In an E-commerce System:

  - Users can sign up, log in, and reset password.
  - Users can search for products.
  - Users can add products to cart and place orders.
  - Admin can manage inventory.

- In a Chat Application:

  - Send/receive messages.
  - Create/join chat rooms.
  - Show online/offline status.

**Explanation:** These are things the system must perform to be useful. They define core functionality.

### Non-Functional Requirements (NFRs)

These describe how the system performs its functions — focusing on quality attributes like speed, reliability, security, scalability, and usability.
They are system-oriented and often not visible directly to the user.

**Key Points:**

- Define performance constraints, quality attributes, and standards.
- Answer: How well must the system work?
- Usually measured with metrics (latency, uptime, throughput, etc.).
- If not implemented → the system may still work, but poorly (slow, insecure, unstable).

**Examples:**

- In an E-commerce System:
  - The system should handle 10,000 concurrent users.
  - API response time must be <200ms for 95% of requests.
  - 99.99% system uptime.
  - PCI-DSS compliance for secure payment processing.
  - Multi-language support for international users.
- In a Chat Application:
  - Messages should be delivered in under 1 second.
  - System should scale to 1M daily active users.
  - Should support end-to-end encryption.
  - Mobile app should use <100MB storage.
  - **Explanation:** These don’t add new features but define constraints and expectations that make the system usable, reliable, and scalable.

### Functional vs Non-Functional

| Aspect                   | Functional Requirements 🛠️ | Non-Functional Requirements ⚙️     |
| ------------------------ | -------------------------- | ---------------------------------- |
| **Definition**           | What the system should do  | How the system should perform      |
| **Focus**                | Features, behavior         | Performance, quality, standards    |
| **User visibility**      | Directly visible           | Indirect, experienced as "quality" |
| **Example (E-commerce)** | Add to cart, checkout      | Fast checkout (<3s), 99.9% uptime  |
| **Impact if missing**    | System doesn’t work        | System works but poorly/unreliable |

### FR and NFR of Online Banking System

**Functional Requirements:**

- User can log in using credentials.
- User can transfer money to another account.
- User can view transaction history.
- Bank admin can approve loans.

**Non-Functional Requirements:**

- Logins must happen within 2 seconds.
- Transactions must be atomic (either fully succeed or fail, no partial).
- System must be available 24/7 with 99.99% uptime.
- Must comply with financial regulations (e.g., KYC, GDPR).

**Why Important?** Imagine a banking app that has functional requirements (transfer money, view balance) but no proper NFRs →

- Transfers take 10 minutes (performance issue).
- Sometimes app crashes during transfer (reliability issue).
- Data not encrypted (security issue).

The system technically “works” but is unusable and unsafe.

# Software Architecture

Software architecture refers to the fundamental structures of a software system and the discipline of creating such structures and systems. It includes:

- Components (modules/services/classes)
- Relationships between components
- Design decisions and trade-offs
- Architectural patterns (like MVC, microservices)
- Technology stack

It is a high-level blueprint that defines the structure, behavior, and interactions of software systems. It focuses on how components are organized and how they communicate, considering both functional and non-functional requirements.

**In system design, architecture helps to:**

- Ensure scalability and performance
- Improve maintainability and extensibility
- Support reusability
- Enhance security and reliability
- Guide team collaboration and reduce technical debt

## Key Elements of Software Architecture

| Element                  | Description                                                           |
| ------------------------ | --------------------------------------------------------------------- |
| **Components**           | The functional units (e.g., services, controllers, databases)         |
| **Connectors**           | How components interact (e.g., APIs, message queues)                  |
| **Configurations**       | The topology of the system (how components are arranged and interact) |
| **Architectural Styles** | Patterns like monolith, microservices, layered, event-driven, etc.    |
| **Technology Stack**     | Chosen tools/libraries/languages used (e.g., React, Node.js, MongoDB) |

## Common Software Architecture Patterns

### Monolithic (1-Tier Architecture)

Monolithic architecture is a traditional software architecture pattern where all components of an application are tightly coupled and run as a single service or executable. It's often used in small to medium-sized applications or in the early stages of development due to its simplicity.

#### Structure of a Monolithic Architecture

A monolithic application typically has the following layers:

1. Presentation Layer (UI)
2. Business Logic Layer
3. Data Access Layer
4. Database

All of these layers are part of a single codebase and compiled/deployed together.

#### Characteristics of Monolithic Architecture

| Feature                         | Description                                                   |
| ------------------------------- | ------------------------------------------------------------- |
| **Single Codebase**             | All functionality is in one project/application.              |
| **Tightly Coupled**             | Components are dependent on each other.                       |
| **Single Deployment**           | Whole application is built and deployed together.             |
| **Shared Memory**               | No network calls between components; function calls are used. |
| **Simple to Develop Initially** | Easy to set up and run during the early phase.                |

#### Advantages

- **Simplicity** – Easy to understand, develop, and deploy initially.
- **Performance** – Inter-component calls are in-memory, hence faster.
- **Development Tools** – Mature support in frameworks like Django, Spring Boot, Laravel, etc.
- **Ease of Testing** – Can perform end-to-end testing easily in one place.

#### Disadvantages

- **Scalability Limitations** – You can’t scale individual components independently.
- **Tight Coupling** – A change in one part may require redeploying the entire system.
- **Limited Agility** – Difficult for multiple teams to work independently.
- **Deployment Risk** – One bug can crash the whole app.
  Harder Maintenance – As the app grows, complexity becomes hard to manage.

#### When to Use Monolithic Architecture

- Small teams or projects with limited scope.
- MVPs (Minimum Viable Products).
- Applications that don't require high scalability or complex integrations.
- Projects where time-to-market is more important than flexibility.

#### Transition Path

Many startups begin with a monolithic architecture and later migrate to a microservices or modular architecture as the application scales and requires more flexibility.

#### Example of Monolithic Architecture

Let’s consider an e-commerce platform with the following features:

- User Authentication
- Product Catalog
- Shopping Cart
- Order Management
- Payment Processing

```
MonolithicApp/
│
├── controllers/
│   ├── AuthController.js
│   ├── ProductController.js
│   ├── CartController.js
│   └── OrderController.js
│
├── services/
│   ├── AuthService.js
│   ├── ProductService.js
│   ├── CartService.js
│   └── OrderService.js
│
├── models/
│   ├── User.js
│   ├── Product.js
│   └── Order.js
│
└── app.js
```

All these features are in one project and deployed together.

### Client-Server(2-Tier Architecture)

It is a software design pattern where the system is divided into two main layers:

1. Client Tier (Presentation Layer)
2. Server Tier (Data Layer)

#### Layers of 2-Tier Architecture

1. **Client Tier (Presentation Layer)**

- This is the front-end interface that users interact with.
- Responsible for:
  - Displaying data to the user
  - Taking user inputs
  - Sending requests to the server

2. **Server Tier (Data Layer)**

- This is the back-end server that processes requests and interacts with the database.
- Responsible for:
  - Handling business logic (optional in simple 2-tier)
  - Querying/updating the database
  - Sending results back to the client

#### Communication Flow of 2-Tier Architecture

```
[ Client Application ] ⇄ [ Server with Database ]
```

- The client directly communicates with the database server using protocols like SQL or APIs.
- No middle-layer (like an application server or API gateway) exists between the client and server.

#### Characteristics of 2-Tier Architecture

| Feature        | Description                             |
| -------------- | --------------------------------------- |
| Simplicity     | Easy to develop and deploy              |
| Tight coupling | Client is tightly coupled with server   |
| Performance    | Good for small systems with fewer users |
| Scalability    | Poor — not suitable for large systems   |
| Security       | Less secure as DB is exposed to clients |

#### Example of 2-Tier Architecture

**Scenario:** A small desktop-based library management system used by staff.

**Client Application (Tier 1)**

- A desktop GUI built using Java Swing or .NET
- Users can:
  - Add new books
  - Issue/return books
  - Search for books

**Server with Database (Tier 2)**

- MySQL or PostgreSQL running on a local server
- The client connects directly using JDBC (Java Database Connectivity)

**How it works:**

1. A librarian searches for a book.
2. The desktop app sends a SQL query directly to the MySQL server.
3. The server fetches the data and returns it to the GUI for display.

#### Limitations

- **Scalability:** Can’t handle thousands of users well.
- **Maintainability:** Business logic scattered between UI and DB logic.
- **Security:** Exposes DB to clients directly.

#### Suitable For

- Small-scale internal applications
- Single-location systems (like school software, small inventory tools)
- Rapid development with limited infrastructure

#### Comparison Table: 2-Tier vs. Monolithic Architecture

| Feature                     | 2-Tier Architecture                         | Monolithic Architecture                             |
| --------------------------- | ------------------------------------------- | --------------------------------------------------- |
| **Definition**              | System divided into client and server tiers | Entire application built as one large unit          |
| **Structure**               | - Client (UI) <br> - Server (DB + logic)    | All logic (UI, business, data access) in one app    |
| **Business Logic Location** | Usually on the server (sometimes shared)    | Part of the monolith; often tightly coupled         |
| **Deployment Unit**         | Two separate tiers (UI + server)            | Single deployment (usually a large binary or app)   |
| **Scalability**             | Limited scalability                         | Can be scaled vertically, but not horizontally well |
| **Maintainability**         | Moderate – client/server split helps a bit  | Hard to maintain as codebase grows                  |
| **Performance**             | Good for small apps (less overhead)         | Good initially, but performance degrades with size  |
| **Communication**           | Direct DB calls (e.g., via JDBC, ODBC)      | Internal method calls within the same app           |
| **Example**                 | Java Swing app connecting directly to MySQL | E-commerce site built with Spring Boot monolith     |
| **Security**                | Less secure – DB exposed to client          | Better control since access is internal             |
| **Technology Stack**        | Often mixed (desktop + DB)                  | Unified stack (Java, Python, etc.)                  |

**Visualization:**

2-Tier Architecture

```
[ Client App (UI) ] ⇄ [ Server (DB + Business Logic) ]
```

### N-Tier Architecture

N-Tier Architecture (also called Multi-Tier Architecture) is a client-server architecture that separates an application into logical layers (or "tiers"), where each tier is responsible for a specific concern or function. The "N" refers to the number of tiers, typically 3-tier, but it can go up to 4 or more depending on the complexity.

#### Characteristics of N-Tier Architecture:

- **Separation of Concerns:** Each tier handles a specific responsibility (presentation, logic, data).
- **Scalability:** Individual tiers can be scaled independently.
- **Maintainability:** Easy to update or modify a specific tier without affecting the others.
- **Security:** Layers can be isolated to improve security boundaries.
- **Deployment Flexibility:** Tiers can be deployed on separate physical or virtual machines.

#### Typical Tiers in N-Tier Architecture

1. Presentation Tier (Client Layer)

   - The user interface layer.
   - Interacts with the user and presents data.
   - Example: HTML/CSS/JavaScript frontend or mobile app.

2. Application Tier (Business Logic Layer)

   - Contains the core functionality and business rules.
   - Processes data between the UI and the database.
   - Example: REST API built with Node.js, Django, Spring Boot, etc.

3. Data Tier (Database Layer)
   - Responsible for storing and retrieving data.
   - Contains database management systems.
   - Example: MySQL, PostgreSQL, MongoDB.

In more complex systems, you may also see:

- Integration Tier (for APIs, services)
- Caching Tier (for performance)
- Security Tier (authentication and authorization)

#### Conceptual View of N-Tier Architecture

```
┌──────────────────────┐
│   Presentation Tier  │   ← Web Browser / Mobile App
│  (React, Angular)    │
└────────▲─────────────┘
         │ HTTP Requests
         ▼
┌──────────────────────┐
│ Application Tier     │   ← REST API / Business Logic
│ (Node.js, Django)    │
└────────▲─────────────┘
         │ SQL Queries
         ▼
┌──────────────────────┐
│    Data Tier         │   ← Database Server
│ (PostgreSQL, MongoDB)│
└──────────────────────┘
```

#### Benefits of N-Tier Architecture

- Modular development (different teams can work on different tiers).
- Improved fault tolerance (a failure in one layer can be isolated).
- Better reusability and testing.
- Scalability (e.g., scale database separately from frontend).

#### Example of N-Tier Architecture

Let’s look at an e-commerce web application built with 3-tier architecture.

1. Presentation Tier

   - Technology: React.js or Angular
   - Function: Allows users to browse products, add to cart, checkout.
   - Example:
     - User accesses https://shop.com
     - UI loads product list and displays them.

2. Application Tier (Backend/API)

   - Technology: Node.js with Express, or Django REST Framework
   - Function: Handles user requests, applies business logic (e.g., check product availability, apply discount, process orders).
   - Example:
     - When user clicks “Buy”, frontend calls an API: `POST /api/order`
     - Backend verifies inventory, updates stock, and processes payment.

3. Data Tier
   - Technology: PostgreSQL or MongoDB
   - Function: Stores product details, user information, order history, etc.
   - Example:
     - The backend runs a query like: `SELECT \* FROM products WHERE category = 'electronics'`

### Modular Monolithic

Modular Monolithic Architecture is a type of system design where the application is deployed as a single unit (monolith) but is logically divided into well-defined, independent modules. Each module encapsulates a specific business capability and communicates with other modules via function calls, not network calls.

It combines the simplicity of monolithic deployment with the separation of concerns and code organization benefits of modularization.

#### Characteristics of Modular Monolithic

| Aspect              | Description                                                                 |
| ------------------- | --------------------------------------------------------------------------- |
| **Deployment**      | Single deployable unit (e.g., a WAR, JAR, or binary).                       |
| **Modularity**      | Code is divided into self-contained modules.                                |
| **Communication**   | Modules interact via in-memory calls.                                       |
| **Database**        | Often a single database shared across modules.                              |
| **Scaling**         | Cannot scale modules independently—must scale the entire monolith.          |
| **Code Management** | Encourages clean architecture patterns, such as domain-driven design (DDD). |

#### Structure of a Modular Monolith

```
Application (Monolith)
│
├── Module: User Management
│   ├── Controller
│   ├── Service
│   └── Repository
│
├── Module: Order Management
│   ├── Controller
│   ├── Service
│   └── Repository
│
├── Module: Inventory
│   ├── Controller
│   ├── Service
│   └── Repository
│
└── Shared Utilities (Logging, Error Handling, etc.)
```

**Benefits of a Modular Monolith:**

- **Single deployment pipeline** – easier to deploy and test.
- **Code organization** – better maintainability with clear module boundaries.
- **Refactor-friendly** – ideal for teams considering future migration to microservices.
- **Performance** – no network latency between modules.

**Limitations of a Modular Monolith:**

- **Cannot scale parts independently** – whole application must scale as one.
- **Module boundaries are not enforced at runtime** – developers can bypass boundaries if not disciplined.
- **Large codebase over time** – can become difficult to manage without good practices.

#### Example

Let’s say you’re building an e-commerce system.

**Modules:**

1. User Management Module: Handles registration, login, profile updates.
2. Product Catalog Module: Manages products, categories, search.
3. Order Management Module: Handles shopping cart, checkout, order tracking.
4. Payment Module: Manages payments, refunds, invoices.

**Each of these modules:**

- Has its own domain logic.
- Has a controller, service, and data layer.
- Shares the same database (but different tables or schemas).
- Communicates with other modules internally via method calls.

**Deployment:**

- A single deployable .jar or .war file contains all modules.
- CI/CD pipeline builds, tests, and deploys it as one application.

#### Comparison with Other Architectures

| Feature       | Modular Monolith | Monolith (Non-Modular) | Microservices     |
| ------------- | ---------------- | ---------------------- | ----------------- |
| Deployment    | Single unit      | Single unit            | Multiple services |
| Modularity    | Logical modules  | Mixed code             | Separate services |
| Communication | In-memory        | In-memory              | API/Network       |
| Scalability   | Whole app        | Whole app              | Per service       |
| Complexity    | Medium           | Low                    | High              |

#### Suitable for

- You're starting small but expect future growth.
- You want to maintain structure without microservices complexity.
- You prefer simpler operations and deployment.

### Microservices

Microservices architecture is a software design approach where an application is structured as a collection of small, independent services that communicate over well-defined APIs. Each service is focused on a specific business capability and can be developed, deployed, and scaled independently.

#### Key Characteristics of Microservices Architecture

1. **Independently Deployable Services:** Each microservice is self-contained and can be deployed without affecting others.
2. **Decentralized Data Management:** Every service has its own database or data source to prevent data coupling.
3. **Technology Agnostic:** Different services can be written in different languages and use different data stores.
4. **Service Communication via APIs:** Services communicate with each other using lightweight protocols like HTTP/REST or messaging queues (e.g., RabbitMQ, Kafka).
5. **Domain-Driven Design (DDD):** Services are modeled around business domains (bounded contexts).
6. **Scalability and Resilience:** Individual services can scale horizontally, and if one fails, others continue to function.
7. **DevOps & CI/CD Friendly:** Microservices enable continuous integration and deployment because services are small and isolated.

#### Architecture Diagram

```
   [ API Gateway ]
        /   |   \
 [User Service] [Product Service] [Order Service]
       |            |                 |
   [User DB]   [Product DB]       [Order DB]
```

#### Example

1. User Service

   - Handles registration, login, profile.
   - Owns `UserDB`.
   - Exposes APIs like:
     - `POST /users/register`
     - `GET /users/{id}`

2. Product Service

   - Manages products, categories, inventory.
   - Owns `ProductDB`.
   - Exposes APIs like:
     - `GET /products`
     - `POST /products/add`

3. Order Service

   - Handles orders, checkout, payments.
   - Owns OrderDB.
   - Exposes APIs like:
     - `POST /orders/create`
     - `GET /orders/{userId}`

4. API Gateway
   - Entry point for clients (web/mobile).
   - Routes requests to the appropriate service.
   - Can handle authentication, rate-limiting, and logging.

#### How It Works Together

1. A user registers via the API Gateway, which forwards the request to the User Service.
2. The user adds items to a cart (frontend logic), and when checking out:

   - Product Service is queried for item availability.
   - Order Service processes the order and stores it in OrderDB.
   - Payment is handled via a third-party or separate Payment Service.

#### Advantages of Microservices Architecture

- **Scalability:** Scale services independently.
- **Resilience:** Failure in one service doesn't crash the whole system.
- **Flexibility:** Use best-fit technologies for each service.
- **Faster Development:** Teams can work on services in parallel.
- **Easier Maintenance:** Smaller codebases per service.

#### Challenges

- **Complex Deployment:** Managing many services is harder than a monolith.
- **Data Consistency:** Harder to maintain ACID properties across services.
- **Distributed Debugging:** Tracing bugs across services can be tough.
- **Network Latency & Failures:** Inter-service calls introduce overhead.

#### Technologies Commonly Used

- **Service Communication:** REST, gRPC, GraphQL, Kafka, RabbitMQ
- **Service Discovery:** Eureka, Consul, Kubernetes DNS
- **API Gateway:** NGINX, Kong, AWS API Gateway
- **Containerization:** Docker, Kubernetes
- **Monitoring:** Prometheus, Grafana, ELK Stack
- **CI/CD:** Jenkins, GitHub Actions, GitLab CI

### Event-Driven Architecture

Event-Driven Architecture (EDA) is a software architecture paradigm where components communicate by producing and responding to events. It's particularly useful for decoupling producers and consumers of information, making systems more scalable, flexible, and maintainable.

#### Core Concepts of Event-Driven Architecture

1. **Event:** A signal that something has happened in the system (e.g., `OrderPlaced`, `UserRegistered`). Usually immutable data, often in a structured format like JSON.
2. **Event Producer:** A service or component that detects a change and emits an event (e.g., Order Service emits `OrderPlaced`).
3. **Event Consumer:** A service or component that listens for specific events and reacts (e.g., Inventory Service listens for `OrderPlaced` to reserve items).
4. **Event Broker (Optional):** A middleware (like `Apache Kafka`, `RabbitMQ`) that routes events from producers to consumers, often handling persistence, queuing, and delivery guarantees.
5. **Event Channel:** The logical `pipe` or topic where events flow through from producers to consumers.

#### Architecture View

```
[Order Service] --- emits ---> [Event Broker: Kafka/RabbitMQ] ---> [Inventory Service]
                                                                 ---> [Billing Service]
                                                                 ---> [Notification Service]
```

- The Order Service emits an "OrderPlaced" event after a customer places an order.
- The Event Broker distributes this event to all interested consumers.
- Each consumer acts independently:
  - Inventory Service reserves stock.
  - Billing Service charges the customer.
  - Notification Service sends a confirmation email.

#### Advantages

- **Loose Coupling:** Producers don't need to know who is consuming events.
- **Scalability:** Consumers can scale independently.
- **Asynchronicity:** Systems can process events in the background.
- **Extensibility:** New consumers can be added without touching the producer.

#### Challenges

- **Debugging Complexity:** Harder to trace event flows.
- **Event Ordering:** Ensuring order of events can be tricky.
- **Event Schema Evolution:** Updating event structure without breaking consumers.
- **At-Least-Once vs Exactly-Once Delivery:** Ensuring correct handling of duplicated events.

#### Example

1. Order Service:

   - Receives the HTTP request.
   - Saves the order to the database.
   - Emits OrderPlaced event with order details.

2. Event Broker (e.g., Kafka):

   - Topic: order-events
   - Stores the OrderPlaced event.

3. Inventory Service:
   - Subscribes to order-events.
   - On receiving OrderPlaced, reserves items from the inventory.
4. Billing Service:
   - Listens to order-events.
   - Charges the customer’s credit card.
5. Notification Service:

   - Also listens to order-events.
   - Sends an order confirmation email.

Benefits in this case:

- New services (like Analytics or Loyalty Points) can start listening to OrderPlaced without changing the Order Service.
- Each component can fail and recover independently.

#### Technologies Often Used in EDA

- **Event Brokers:** Kafka, RabbitMQ, Amazon SNS/SQS, NATS
- **Languages/Frameworks:** Node.js (EventEmitter), Spring Cloud Streams, Akka, .NET with MediatR or MassTransit
- **Patterns:** Event Sourcing, CQRS, Pub/Sub

### Cloud Native

Cloud-Native Architecture in system design refers to an approach that leverages the full benefits of cloud computing to build and run scalable, resilient, and manageable applications. It emphasizes microservices, containerization, orchestration, DevOps practices, and automated infrastructure provisioning.

#### Key Characteristics of Cloud-Native Architecture

1. Microservices-Based

   - Applications are decomposed into small, loosely coupled services.
   - Each microservice performs a single business function and can be developed, deployed, and scaled independently.

2. Containerization

   - Each microservice runs in its own container (e.g., Docker).
   - Containers package application code with dependencies, ensuring consistent environments across dev, test, and production.

3. Dynamic Orchestration

   - Tools like Kubernetes manage container lifecycle, scaling, networking, and failover.
   - Services are registered and discovered dynamically.

4. DevOps & CI/CD

   - Agile practices and CI/CD pipelines allow faster development, testing, and deployment.
   - Tools: Jenkins, GitHub Actions, GitLab CI, ArgoCD, etc.

5. Infrastructure as Code (IaC)

   - Infrastructure (networks, VMs, databases) is defined and managed using code.
   - Tools: Terraform, AWS CloudFormation, Pulumi.

6. Elastic Scalability

   - Cloud-native apps can automatically scale in/out based on load using cloud provider services or Kubernetes Horizontal Pod Autoscaler.

7. Resilience and Fault Tolerance
   - Built-in failover mechanisms.
   - Services handle errors gracefully and recover without manual intervention.

#### Conceptual View of Cloud-Native Architecture

```
+------------------------------------------------------------+
|                         Cloud Platform                     |
|     (AWS / Azure / GCP / Kubernetes / OpenShift etc.)      |
+----------------------+-------------------+-----------------+
                       |                   |
         +-------------+-----------+       |
         |    Load Balancer / API Gateway  |
         +-------------+-----------+       |
                       |                   |
      +----------------+--------------+    |
      |         Microservices Layer        |
      |                                    |
      | +-------------+  +-------------+   |
      | | Auth Service|  | Order Service|  |
      | +-------------+  +-------------+   |
      | +-------------+  +-------------+   |
      | | User Service|  | Payment Svc |   |
      | +-------------+  +-------------+   |
      +----------------+------------------+
                       |
      +----------------+------------------+
      |              Data Layer            |
      | +------------+  +----------------+ |
      | | SQL DB     |  | NoSQL / Cache | |
      | +------------+  +----------------+ |
      +-----------------------------------+
```

#### Benefits of Cloud-Native Architecture

| Benefit                       | Description                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------- |
| **Scalability**               | Services can scale independently.                                               |
| **Resilience**                | Self-healing and fault-tolerant design.                                         |
| **Faster Time to Market**     | Frequent deployments via CI/CD pipelines.                                       |
| **Cloud Agnostic (Optional)** | With Kubernetes and IaC, the architecture can be cloud-agnostic.                |
| **Observability**             | Built-in monitoring, logging, tracing (e.g., Prometheus, Grafana, ELK, Jaeger). |

#### Example of Cloud-Native Architecture

Design a cloud-native e-commerce platform with user login, product catalog, cart, payment, and order management.

| Service             | Responsibility                                |
| ------------------- | --------------------------------------------- |
| **User Service**    | Handles registration, authentication, profile |
| **Product Service** | Manages product listings, categories, search  |
| **Cart Service**    | Manages shopping cart per user                |
| **Order Service**   | Manages orders, order history, status updates |
| **Payment Service** | Integrates with Stripe/PayPal for payments    |

Containerization:
Each service is packaged as a Docker container and deployed via Kubernetes.

**Orchestration:** Kubernetes manages service discovery, scaling, and failover.

Horizontal Pod Autoscaler scales services based on CPU/memory load.

**CI/CD:**

- GitHub Actions triggers builds/tests on push.
- ArgoCD handles continuous delivery into the Kubernetes cluster.

**Infrastructure:**
Defined via Terraform:

- Cloud Load Balancer
- Kubernetes cluster (e.g., EKS/GKE/AKS)
- RDS for SQL
- Redis for caching
- S3 for static file storage (e.g., product images)

**Fault Tolerance:**

- Each service retries on failure.
- Kubernetes auto-restarts failed containers.
- Circuit breakers (via Istio or Resilience4j) prevent cascading failures.

### Serverless Architecture

Serverless architecture is a cloud-native design pattern where applications are built using Function-as-a-Service (FaaS) and Backend-as-a-Service (BaaS) components. The term "serverless" doesn't mean there are no servers — rather, it means that developers don’t manage the servers. The cloud provider automatically provisions, scales, and manages infrastructure.

#### Characteristics of Serverless Architecture

| Feature                  | Description                                                                |
| ------------------------ | -------------------------------------------------------------------------- |
| **Event-driven**         | Functions execute in response to events (e.g., HTTP request, file upload). |
| **Auto-scaling**         | Automatically scales up/down based on load.                                |
| **No server management** | Abstracted infrastructure — no provisioning, patching, or maintenance.     |
| **Pay-per-use**          | Billed only for the time your function runs (e.g., per 100ms).             |
| **Stateless**            | Functions don’t persist data between executions; external storage is used. |

#### Components in Serverless System Design

1. Frontend/UI
   - Static frontend hosted on services like Amazon S3, Netlify, or Vercel.
   - Communicates with APIs via HTTPS.
2. API Gateway

   - Entry point for all HTTP requests (e.g., AWS API Gateway).
   - Routes requests to the appropriate function.

3. Function-as-a-Service (FaaS)

   - Each function is a small unit of business logic (e.g., AWS Lambda, Azure Functions).
   - Executes on demand in isolated containers.

4. Backend-as-a-Service (BaaS)

   - Pre-built services like:
     - Authentication (e.g., Firebase Auth, Amazon Cognito)
     - Storage (e.g., S3, Firebase Storage)
     - Database (e.g., DynamoDB, Firebase Realtime DB)

5. Database
   - Serverless-friendly databases:
   - NoSQL (e.g., DynamoDB, Firestore)
   - Serverless SQL (e.g., Aurora Serverless, PlanetScale)

#### Example of Serverless Image Processing

Build a web app where users upload images, and the system creates thumbnails.

```
User → [Frontend (React/HTML)]
     → [API Gateway (AWS API Gateway)]
     → [Upload Endpoint (Lambda Function)]
         → [Store in S3]
         → [Trigger Event: S3 Upload]
             → [Resize Function (Lambda)]
                 → [Save Thumbnail to S3]
```

#### Workflow Explanation

1. Frontend

   - User uploads image via a web form.
   - Sends image to an API Gateway endpoint.

2. API Gateway

   - Routes the request to the uploadImage Lambda function.

3. Upload Function (Lambda)

   - Stores the image in an S3 bucket.

4. S3 Bucket Event Trigger

   - When a new file is uploaded, it triggers another Lambda function (resizeImage).

5. Resize Function (Lambda)

   - Reads the uploaded image.
   - Resizes it to thumbnail size.
   - Stores it in a different S3 bucket (or folder).

#### Advantages

- **Scalability**: Automatically handles hundreds or millions of uploads.
- **Cost-Effective**: Pay only when users upload images.
- **Rapid Development**: Focus on core logic, not infrastructure.
- **Resilience**: Built-in fault tolerance and retries in services like AWS Lambda

#### Challenges of Serverless Image Processing

| Challenge                | Description                                                           |
| ------------------------ | --------------------------------------------------------------------- |
| **Cold starts**          | Functions may experience delay if inactive for a while.               |
| **Vendor lock-in**       | Tied to a cloud provider's ecosystem.                                 |
| **Stateless nature**     | Requires external systems for session management or persistent state. |
| **Debugging complexity** | Logs are distributed across functions — harder to trace flows.        |

#### When to Use Serverless Architecture

- Lightweight microservices or APIs.
- Event-driven workflows (e.g., file processing, notifications).
- Real-time data processing (e.g., chat apps, IoT ingestion).
- Startups or MVPs that need fast deployment and low ops.

#### When NOT to Use

- Long-running tasks or heavy compute workloads.
- Applications requiring very low latency.
- Complex stateful workflows.

# Concepts

## Category of Data

| Term               | Access Frequency   | Latency  | Storage Layer         | Typical Use Case                          |
| ------------------ | ------------------ | -------- | --------------------- | ----------------------------------------- |
| **Hot Data**       | Very frequent      | Very low | Cache, RAM, CPU cache | Recently accessed user sessions, counters |
| **Cold Data**      | Rare/infrequent    | High     | Disk, archive, remote | Old logs, user history, old orders        |
| **Persisted Data** | Durable, long-term | Varies   | Disk, SSD, databases  | Durable state, critical records           |

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

# Caching

Caching is a system design strategy used to store a copy of data in a temporary storage location — known as a cache — so future requests for that data can be served faster. The primary purpose is to reduce latency, improve performance, and reduce the load on the main data source (like a database or API).

- Caching is used to optimized read operation.
- Queue is used to optimized write operation.

## How Caching Works

When a client (like a browser or a backend system) requests data:

1. **Check the cache:**

   - If the data is present (called a cache hit), it is returned immediately.
   - If the data is absent (called a cache miss), the system fetches it from the main source, stores it in the cache, and then returns it.

2. **Future requests** for the same data will be faster because they are served from the cache.

## Types of Caching

| Type                  | Description                                                            |
| --------------------- | ---------------------------------------------------------------------- |
| **In-Memory Cache**   | Fastest, stores data in RAM (e.g., Redis, Memcached).                  |
| **Database Cache**    | Results of DB queries cached inside or near the DB system.             |
| **Application Cache** | Cached within the application layer (e.g., objects or method results). |
| **Browser Cache**     | Stores static assets like HTML, CSS, JS on the client-side.            |
| **CDN Cache**         | Stores static resources in geographically distributed servers (CDNs).  |

## Example of Cache

Suppose your system shows user profiles retrieved from a database.

**Without Cache:**

```
User Request → App Server → Database → Fetch Data → Return to User (slow)
```

If 1000 users request the same profile, the DB is hit 1000 times.

**With Cache:**

```
User Request → App Server → Check Redis Cache
              → [If Hit] Return Cached Data (fast)
              → [If Miss] Fetch from DB → Save to Redis → Return to User
```

Now, the DB is only hit once, and subsequent requests are served from Redis.

### Code Example

```js
const redis = require("redis");
const express = require("express");
const app = express();
const client = redis.createClient();

// Simulated database call
const getUserFromDB = async (id) => {
  console.log("Fetching from database...");
  return { id, name: "John Doe", age: 30 };
};

app.get("/user/:id", async (req, res) => {
  const userId = req.params.id;

  client.get(userId, async (err, cachedData) => {
    if (cachedData) {
      return res.send(JSON.parse(cachedData)); // Cache hit
    }

    const userData = await getUserFromDB(userId); // Cache miss
    client.setex(userId, 3600, JSON.stringify(userData)); // Store in Redis for 1 hour
    res.send(userData);
  });
});

app.listen(3000, () => console.log("Server running"));
```

When you perform update or delete, you should also delete the cache.

## Cache Invalidation & Expiry

Caching isn’t useful without a strategy to expire or update data:

- **Time-based Expiry (TTL):** Data expires after a certain time.
- **Manual Invalidation:** Delete/update cache when underlying data changes.
- **LRU (Least Recently Used):** Evict least-used items when cache is full.

## Challenges of Caching

- Cache invalidation is hard.
- Stale data can cause inconsistencies.
- Memory constraints in cache storage.
- Complexity in managing distributed caches.

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

# Load Balancer

A load balancer is a key component in system design that distributes incoming network or application traffic across multiple servers. Its primary goal is to optimize resource use, maximize throughput, reduce latency, and ensure fault tolerance.

## Load Balancer Does

- Distributes client requests to multiple backend servers (web/app servers).
- Prevents overloading a single server.
- Provides high availability—if one server fails, traffic is rerouted to healthy servers.
- Improves scalability—more servers can be added easily to handle increased load.

## Types of Load Balancers

| Type                       | Description                                                                |
| -------------------------- | -------------------------------------------------------------------------- |
| **Layer 4 (Transport)**    | Operates at TCP/UDP level. Balances based on IP and port. Fast and simple. |
| **Layer 7 (Application)**  | Operates at HTTP/HTTPS level. Can inspect content (URLs, cookies, etc.).   |
| **Global Load Balancer**   | Routes traffic between data centers or regions.                            |
| **Internal Load Balancer** | Routes traffic between microservices or internal systems.                  |

## Load Balancing Algorithms

| Algorithm             | Description                                                             |
| --------------------- | ----------------------------------------------------------------------- |
| **Round Robin**       | Requests are sent to each server in order.                              |
| **Least Connections** | Sends traffic to the server with the fewest active connections.         |
| **IP Hash**           | Uses client's IP address to determine which server handles the request. |
| **Weighted**          | Assigns more traffic to stronger servers with more capacity.            |

## Architecture Diagram Example of Load Balancer

```
                +---------------------+
                |     Clients         |
                +---------------------+
                          |
                          v
               +----------------------+
               |     Load Balancer    |  <--- Entry point (L4 or L7)
               +----------------------+
              /           |            \
             v            v             v
    +------------+  +------------+  +------------+
    | WebServer1 |  | WebServer2 |  | WebServer3 |
    +------------+  +------------+  +------------+
```

## Example of Load Balancer

Let’s say you are building an online store like Amazon:

- Traffic increases dramatically during sales events.
- You deploy three web servers behind a Layer 7 Load Balancer (e.g., AWS ELB, Nginx, HAProxy).

What happens:

1. User A accesses www.store.com.
2. Request goes to the Load Balancer.
3. The Load Balancer:
   - Checks which server is least loaded.
   - Sends User A’s request to WebServer2.
4. WebServer2 handles the request and returns the response.

If WebServer2 crashes:

- Load balancer detects health check failure.
- Redirects future requests to WebServer1 and WebServer3.

## Where Load Balancer used

- **Frontend Traffic Management**: Distributes user traffic across web servers.
- **Microservices Communication**: Distributes service-to-service calls.
- **Multi-region Deployments**: Global load balancers distribute traffic across continents.
- **Autoscaling**: Automatically routes traffic to newly created instances.

## Layer 4 vs Layer 7 Load Balancers

| Feature             | **Layer 4 Load Balancer**                            | **Layer 7 Load Balancer**                                                |
| ------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------ |
| **OSI Layer**       | Transport Layer (TCP/UDP)                            | Application Layer (HTTP/HTTPS)                                           |
| **Traffic Type**    | Low-level protocols (TCP, UDP)                       | High-level protocols (HTTP, WebSocket, gRPC)                             |
| **Routing Logic**   | Based on IP address and port                         | Based on URL path, headers, cookies, request content, etc.               |
| **Performance**     | Faster, lower latency (less inspection)              | Slightly slower due to deep packet inspection                            |
| **Use Case**        | Game servers, database traffic, generic TCP services | Web applications, REST APIs, websites                                    |
| **Sticky Sessions** | Via IP hash or custom setup                          | Supports cookie-based session persistence                                |
| **SSL Termination** | Often not supported or limited                       | Fully supported                                                          |
| **Flexibility**     | Limited routing logic                                | Highly flexible (can route `/api/` to one service, `/admin/` to another) |
| **Examples**        | HAProxy (TCP mode), AWS NLB                          | NGINX (HTTP mode), AWS ALB, Envoy, Traefik                               |

- **Layer 4**: You’re routing database or chat server traffic (TCP-based).
- **Layer 7**: You’re routing different API endpoints to different microservices based on URL path.

## Real Deployment Example Using AWS

Components:

- 3 EC2 Instances (Web Servers)
- Amazon Application Load Balancer (ALB - Layer 7)
- Auto Scaling Group
- Amazon Route 53 (optional, for domain)

### Diagram

```
     User (Browser)
          |
     Route 53 (DNS)
          |
   Application Load Balancer (Layer 7)
          |
   Auto Scaling Group (EC2 Instances)
     /         |         \
 EC2-1     EC2-2     EC2-3 (Web servers)
```

#### Flow Explaination

1. User visits www.example.com.
2. Route 53 resolves the domain to ALB IP.
3. ALB inspects the HTTP request:
   - If request is /api/, route to Service A
   - If request is /admin/, route to Service B
4. The ALB sends the request to one of the EC2 instances in the Auto Scaling Group, using Least Connections or Round Robin.
5. If one instance fails, ALB detects it via health checks and reroutes traffic to healthy instances.
6. You can scale up/down the number of EC2s automatically based on CPU or request rate.

#### Tools Used

| Component         | AWS Service                         |
| ----------------- | ----------------------------------- |
| Load Balancer     | **Application Load Balancer (ALB)** |
| Backend Servers   | **EC2 Auto Scaling Group**          |
| Routing Domain    | **Route 53**                        |
| Health Monitoring | **ALB Health Checks**               |
| SSL Support       | **SSL Termination at ALB**          |

### Example of Load Balancer

```
           Client
             |
      Node.js Load Balancer (custom)
         /         |        \
   App Server 1  App Server 2  App Server 3
   (Node.js)     (Node.js)     (Node.js)
```

#### Custom Load Balancer in Node.js (Layer 4 Style)

You can create a basic TCP/HTTP round-robin load balancer in Node.js using the `http` and `http-proxy` or `net` modules.

**Create Load Balancer (`load-balancer.js`):**

```js
const http = require("http");
const httpProxy = require("http-proxy");

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Backend server targets
const targets = [
  { host: "localhost", port: 3001 },
  { host: "localhost", port: 3002 },
  { host: "localhost", port: 3003 },
];

let current = 0;

// Create the load balancer server
const server = http.createServer((req, res) => {
  // Round-robin selection
  const target = targets[current];
  current = (current + 1) % targets.length;

  proxy.web(
    req,
    res,
    { target: `http://${target.host}:${target.port}` },
    (err) => {
      res.writeHead(502);
      res.end("Bad Gateway");
    }
  );
});

server.listen(8000, () => {
  console.log("Load balancer listening on http://localhost:8000");
});
```

**Create Backend App Servers (`app-server.js`):**

```js
const http = require("http");

const port = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end(`Response from server on port ${port}`);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

**Run Everything:**

```shell
PORT=3001 node app-server.js
PORT=3002 node app-server.js
PORT=3003 node app-server.js
node load-balancer.js
```

- Now, open `http://localhost:8000` in the browser.
- Refresh multiple times — you'll see responses rotating from each app server.

#### Production Setup: Node.js Behind NGINX (Layer 7 Load Balancer)

Use NGINX to load balance requests across multiple Node.js servers.

**File Structure:**

```
project/
├── server1.js
├── server2.js
├── server3.js
├── nginx.conf
```

Each can be the same as earlier (`serverX.js`):

```js
// server1.js
const http = require("http");
const port = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end(`Hello from Node server on port ${port}`);
});

server.listen(port, () => console.log(`Server running on port ${port}`));
```

Launch:

```shell
PORT=3001 node server1.js
PORT=3002 node server2.js
PORT=3003 node server3.js
```

Configure NGINX (`nginx.conf`)

```shell
http {
    upstream node_servers {
        server 127.0.0.1:3001;
        server 127.0.0.1:3002;
        server 127.0.0.1:3003;
    }

    server {
        listen 8000;

        location / {
            proxy_pass http://node_servers;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
}
```

Reload or restart NGINX:

```shell
nginx -c /path/to/nginx.conf
nginx -s reload
```

Now when you visit `http://localhost:8000`, NGINX will load balance between Node.js servers.

#### Summary of uses

| Approach                | Use Case                         | Tools              |
| ----------------------- | -------------------------------- | ------------------ |
| Node.js custom balancer | Learning, dev testing            | `http-proxy`       |
| NGINX + Node.js         | Production-grade, static routing | NGINX              |
| AWS ALB + Node.js       | Scalable cloud apps              | EC2, ALB, Route 53 |
| Kubernetes + Ingress    | Containerized Node.js apps       | K8s, Ingress       |

## How Load Balancer Work

Imagine you have multiple Node.js servers, each running the same app (like an API or website). A load balancer sits in front of these servers and acts like a traffic controller:

- It accepts incoming requests from users.
- It decides which server should handle each request (based on a strategy like round robin or least connections).
- It forwards the request to that chosen server.
- The chosen server sends the response back, and the load balancer relays it to the user.

Let’s say you have this setup:

- 3 Node.js servers on ports 3001, 3002, and 3003
- 1 Load balancer on port 8000 (either NGINX or a custom one with `http-proxy`)

### 1. Client Sends Request

User opens a browser and visits:

```shell
http://localhost:8000/api/products
```

This request hits the load balancer, not the app servers directly.

### 2. Load Balancer Receives Request

The load balancer server (Node.js or NGINX) listens on port 8000.

It receives the request like this:

```shell
GET /api/products HTTP/1.1
Host: localhost:8000
```

### 3. Load Balancer Chooses a Backend Server

It uses a load balancing algorithm such as:

- Round robin: rotates through the server list.
- Least connections: chooses the least busy server.
- IP hash: chooses based on the user’s IP.
  Let’s say it's round robin and the current turn is:

```js
target = { host: "localhost", port: 3002 };
```

### 4. Request Is Forwarded

Using a proxy (like `http-proxy` in Node.js or `proxy_pass` in NGINX), the load balancer forwards the original HTTP request to the selected server:

```shell
GET /api/products HTTP/1.1
Host: localhost:3002
```

### 5. Backend Server Handles It

Node.js server on port 3002 receives the request and runs the handler:

```js
res.end("Product list from server 3002");
```

### 6. Response Is Sent Back to Client

The response travels:

```js
Node.js server → Load Balancer → Client
```

The user sees:

```js
Product list from server 3002
```

Even though the client sent the request to port 8000, the load balancer internally managed all the routing.

### Behind the scene

| Layer       | Role                                                                                                                 |
| ----------- | -------------------------------------------------------------------------------------------------------------------- |
| **Layer 4** | If using TCP/UDP only, load balancer just reroutes IP + port (doesn't inspect HTTP data).                            |
| **Layer 7** | Load balancer looks inside HTTP headers and URLs, enabling smart routing (e.g., send `/admin` to different backend). |

### Real Example with Node.js Proxy

```js
proxy.web(req, res, {
  target: `http://${target.host}:${target.port}`,
});
```

- `proxy.web()` forwards the HTTP request to the chosen backend.
- It streams data in real-time, handling headers, body, and response.
- It also listens for errors and falls back if one server is down.

### Health Check

A good load balancer (like NGINX, HAProxy, or AWS ALB) periodically checks if each server is healthy by sending a small test request (`GET /healthz`).
If a server is down:

- It’s removed from the rotation automatically.
- Traffic continues flowing to the healthy servers.

### Workflow of Load Balancer

```
[Client Request]
      ↓
[Load Balancer]
      ↓ (decides which backend to use)
[Forwarded to Node.js Server]
      ↓
[Node.js Server Response]
      ↓
[Load Balancer relays response]
      ↓
[Client gets the result]
```

# Reverse Proxy

A reverse proxy is a server that sits in front of backend servers and routes client requests to the appropriate server, then returns the response to the client as if it came from the proxy itself.

It is called “reverse” because it works in the opposite direction of a forward proxy (which forwards internal requests to external servers).

**Where Does It Sit?**

```
Client --> Reverse Proxy --> Backend Servers
```

## Why Use a Reverse Proxy?

| Feature                           | Benefit                                                                   |
| --------------------------------- | ------------------------------------------------------------------------- |
| **Load Balancing**                | Distributes traffic across multiple servers to prevent overload.          |
| **SSL Termination**               | Handles HTTPS encryption/decryption so backend servers don’t have to.     |
| **Caching**                       | Stores responses to reduce load on backend servers.                       |
| **Compression**                   | Optimizes data sent to clients, improving performance.                    |
| **Security (WAF)**                | Hides backend servers, filters malicious traffic (e.g., DDoS protection). |
| **Routing & Path-based Proxying** | Directs requests to the right service or endpoint based on rules.         |
| **Authentication**                | Can require and validate tokens or credentials before passing to backend. |

## How It Works (Request Flow)

1. User sends a request to a public IP/domain (e.g., `https://example.com`).
2. The DNS points to the reverse proxy server (e.g., NGINX, HAProxy).
3. The reverse proxy:

   - Checks rules (e.g., load balance, path match).
   - Forwards the request to the correct backend server.

4. The backend processes the request and returns a response.
5. The reverse proxy sends the response back to the user.

## Example of reverse proxy

System Design

```shell
Client (Browser)
      ↓
NGINX Reverse Proxy (HTTPS)
 ├──> Web Server 1 (Node.js)
 ├──> Web Server 2 (Node.js)
 └──> API Server (Python Flask)
```

NGINX Reverse Proxy Configuration Example:

```shell
server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://web_servers;
    }

    location /api/ {
        proxy_pass http://api_server;
    }
}

upstream web_servers {
    server 10.0.0.1;
    server 10.0.0.2;
}

upstream api_server {
    server 10.0.0.3;
}
```

**What This Does:**

- `/` path goes to one of the two web servers (load-balanced).
- `/api/` path goes to the backend API server.
- Client only knows about `example.com`, not the internal IPs.

## Example of reverse proxy with NGINX

A reverse proxy like NGINX or Traefik is often used in microservices-based architectures to:

- Expose a single entry point (API Gateway style)
- Route `/users`, `/orders`, `/products` to the correct microservices
- Handle authentication, rate limiting, logging, etc.

```
           ┌─────────────────────────┐
Client --> │   Reverse Proxy (Traefik)  │
           └─────────────────────────┘
              ├── /users  ──> User Service
              ├── /orders ──> Order Service
              └── /cart   ──> Cart Service
```

## Security Benefits

- Backend IPs and ports are never exposed to the public.
- Reverse proxy can act as a Web Application Firewall (WAF).
- Supports rate limiting, IP whitelisting, and DDOS mitigation.

## Tools Commonly Used as Reverse Proxies

| Tool             | Notes                                                          |
| ---------------- | -------------------------------------------------------------- |
| **NGINX**        | Lightweight, widely used, supports caching and load balancing. |
| **HAProxy**      | High performance, advanced load balancing, used in enterprise. |
| **Apache HTTPD** | Can be configured as a reverse proxy.                          |
| **Traefik**      | Cloud-native reverse proxy with automatic service discovery.   |
| **Envoy**        | Modern proxy used in service meshes (e.g., Istio).             |

## Reverse Proxy vs Load Balancer

| Feature           | Reverse Proxy                        | Load Balancer                          |
| ----------------- | ------------------------------------ | -------------------------------------- |
| **Main Function** | Routes requests to internal services | Balances traffic load                  |
| **Visibility**    | Hides backend logic                  | Hides server identity                  |
| **Traffic**       | Can go to different apps             | Goes to same app on multiple instances |
| **Caching**       | Often used for caching               | Rarely used for caching                |
| **Security Role** | Protects backend, enforces policies  | Less focused on security               |
| **Common Tools**  | Nginx, Apache, Traefik               | HAProxy, AWS ELB, Nginx, Envoy         |

```
Client → Reverse Proxy → Load Balancer → App Servers
```

# API Gateway

An API Gateway is a critical component in system design, particularly in microservices architecture. It acts as a single entry point for all client requests and routes them to the appropriate backend services.

## Features of API Gateway

| Feature            | Purpose                                  |
| ------------------ | ---------------------------------------- |
| **Routing**        | Request goes to the right microservice   |
| **Auth**           | Verifies user credentials (e.g., JWT)    |
| **Rate Limiting**  | Protects backend from overload           |
| **Caching**        | Reduces load, speeds up repeated queries |
| **Load Balancing** | Distributes traffic across instances     |
| **Monitoring**     | Logs metrics for observability           |

## Why Use an API Gateway?

In microservices, services are often broken into small units (e.g., auth, order, payment, etc.). If clients (like mobile apps or browsers) directly interact with all these, it:

- Increases complexity
- Exposes internal service structure
- Requires handling cross-cutting concerns multiple times

An API Gateway abstracts these concerns and centralizes them.

## API Gateway Worflow

Let’s say you’re designing an e-commerce system:

Services:

- `User Service` (`/users`)
- `Product Service` (`/products`)
- `Order Service` (`/orders`)

Client Flow:

- The client sends a request to `/api/products`.
- The API Gateway receives the request.
- It authenticates the user (via token).
- It routes the request to the `Product Service`.
- The response comes back to the gateway.
- The gateway may transform the response.
- The client gets the response.

## Example of API Gateway

```js
// api-gateway.js
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Middleware: Log all requests
app.use((req, res, next) => {
  console.log(`[Gateway] ${req.method} ${req.originalUrl}`);
  next();
});

// Forward /users requests
app.use(
  "/users",
  createProxyMiddleware({
    target: "http://localhost:5001", // User Service
    changeOrigin: true,
  })
);

// Forward /products requests
app.use(
  "/products",
  createProxyMiddleware({
    target: "http://localhost:5002", // Product Service
    changeOrigin: true,
  })
);

// Forward /orders requests
app.use(
  "/orders",
  createProxyMiddleware({
    target: "http://localhost:5003", // Order Service
    changeOrigin: true,
  })
);

app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});
```

## Benefits and Trade-offs of API Gateway

| **Benefits**                             | **Trade-offs**                                            |
| ---------------------------------------- | --------------------------------------------------------- |
| Simplifies client interaction            | Single point of failure (if not replicated)               |
| Centralizes security and logging         | Adds latency (extra network hop)                          |
| Enables decoupled service development    | Can become complex (requires scaling & config management) |
| Supports versioning, throttling, caching |                                                           |

# Rate Limiting

Rate limiting is a technique used in system design to control the number of requests a user or system can make to a resource within a given time window. It protects services from abuse, overload, and ensures fair resource usage

## Why Use Rate Limiting?

1. Prevent Abuse: Throttle bots, scrapers, or malicious users.
2. Protect Backend Resources: Databases, APIs, or microservices.
3. Ensure Fair Usage: Distribute resources fairly among users.
4. Avoid Cost Spikes: Especially in cloud-based services (e.g., APIs with metered billing).
5. Maintain System Stability: Prevent cascading failures by not overloading services.

## Where Rate Limiting Applied

- API Gateways
- Load Balancers
- Microservices
- Reverse Proxies (e.g., NGINX, Envoy)
- Databases (at query level)

## Rate Limiting Algorithms

| Algorithm                  | Description                                              | Pros                              | Cons                    |
| -------------------------- | -------------------------------------------------------- | --------------------------------- | ----------------------- |
| **Token Bucket**           | Tokens are added at fixed rate; requests consume tokens. | Smooth flow; allows bursts        | Slightly complex        |
| **Leaky Bucket**           | Requests added to queue; processed at fixed rate         | Smoother output rate              | May drop bursts         |
| **Fixed Window**           | Count resets every window (e.g., every minute)           | Simple                            | Traffic spikes at edges |
| **Sliding Window Log**     | Logs timestamps of requests, checks time window          | Accurate                          | High memory usage       |
| **Sliding Window Counter** | Counts spread over sub-windows                           | Balance between accuracy & memory | Slightly complex        |

## Example of Rate Limiting

**Scenario:** You have a public REST API. To avoid abuse, you allow:

- 100 requests per user per minute.

Design with Token Bucket (Example):

1. Each user gets a bucket with capacity = 100 tokens.
2. 1 token = 1 API request.
3. Tokens refill at 100/min (≈1.67 tokens/sec).
4. If the bucket is empty → Reject request with `429 Too Many Requests`.

Flow:

```
User A makes 5 requests -> consumes 5 tokens
Bucket has 95 left
If User A sends 101 requests in a minute -> last one is rejected
```

## GitHub API Example

- **Unauthenticated users:** 60 requests/hour.
- **Authenticated users:** 5000 requests/hour.
- Clients get headers like:

```yaml
X-RateLimit-Limit: 5000
X-RateLimit-Remaining: 4990
X-RateLimit-Reset: 1664579460
```

## Node.js Example of Rate Limiting

Each client (IP) gets:

- `maxTokens = 5`
- `refillRate = 1 token every 12 seconds`

Tokens are stored per IP in Redis with timestamp and count.

```js
const express = require("express");
const Redis = require("ioredis");

const app = express();
const redis = new Redis(); // Connects to Redis at localhost:6379

const RATE_LIMIT = {
  MAX_TOKENS: 5,
  REFILL_INTERVAL_MS: 60 * 1000,
};

function getKey(ip) {
  return `rate_limit:${ip}`;
}

async function rateLimiter(req, res, next) {
  const ip = req.ip;
  const key = getKey(ip);

  const now = Date.now();

  // Get existing token info from Redis
  const data = await redis.hgetall(key);
  let tokens = parseInt(data.tokens || RATE_LIMIT.MAX_TOKENS);
  let lastRefill = parseInt(data.lastRefill || now);

  // Calculate time since last refill
  const timeElapsed = now - lastRefill;
  const refillTokens = Math.floor(
    (timeElapsed / RATE_LIMIT.REFILL_INTERVAL_MS) * RATE_LIMIT.MAX_TOKENS
  );

  tokens = Math.min(RATE_LIMIT.MAX_TOKENS, tokens + refillTokens);
  lastRefill = refillTokens > 0 ? now : lastRefill;

  if (tokens > 0) {
    tokens--;
    await redis.hmset(key, {
      tokens,
      lastRefill,
    });
    await redis.expire(key, 60); // auto-expire in 60 sec
    next();
  } else {
    res.set("Retry-After", 60);
    res.status(429).send("Rate limit exceeded. Try again later.");
  }
}

app.use(rateLimiter);

app.get("/", (req, res) => {
  res.send("Hello! You are within the rate limit.");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

### How It Works

- First-time users start with 5 tokens.
- Each request consumes 1 token.
- Redis keeps track of tokens + last refill time.
- Tokens are refilled proportionally every minute.
- If tokens are 0 → respond with HTTP 429.

### Headers for Clients

To improve UX, you can add headers like:

```shell
res.set('X-RateLimit-Limit', 5);
res.set('X-RateLimit-Remaining', tokens);
```

## Tech Stack for Rate Limiting

- **API Gateway** (e.g., Amazon API Gateway, Kong, Apigee): Applies user-level rate limiting.
- **Redis:** Stores counters per user (good for distributed systems).
- **NGINX:** Can enforce rate limiting via limit_req_zone.

## Best Practices of Rate Limiting

- Implement graceful degradation (e.g., retries, backoff).
- Provide users with rate limit headers (e.g., `X-RateLimit-Limit`, `X-RateLimit-Remaining`).
- Log and monitor rejected requests to detect abuse or misconfigurations.
- Use exponential backoff in clients to reduce retry pressure.

## What Happens Without Rate Limiting?

- Denial-of-Service (DoS) risk.
- Cost explosion from excessive compute/API calls.
- Poor performance for legitimate users.
- Data inconsistency under high concurrent writes.

# Replication

Replication in system design refers to the process of copying data or services across multiple machines (called replicas) to improve availability, fault tolerance, read scalability, and sometimes performance.

**Why Replication?**

- **High Availability:** If one server goes down, others can take over.
- **Fault Tolerance:** Protects against data loss due to hardware/software failure.
- **Scalability:** Allows horizontal scaling of read operations.
- **Low Latency:** Serve data from geographically closer replicas.

**How It Works**

- Client writes to the primary/master node.
- Primary node applies the change and sends it to the replicas.
- Replicas acknowledge the write or update once the data is received.
- Client reads from any replica.

**When to Use Replication?**

- You need high availability.
- You want to scale read operations.
- You require geo-redundancy.
- You want disaster recovery and backup redundancy.

**Notes**

- Always pair replication with consistency strategies like eventual consistency, quorum reads/writes, or consensus protocols (e.g., Paxos, Raft).
- Be aware of replication lag and how it might affect user experience.

## Types of Replication

| Type             | Description                                                               | Example Use Case                        |
| ---------------- | ------------------------------------------------------------------------- | --------------------------------------- |
| **Master-Slave** | One master (primary) node handles writes; slaves (replicas) handle reads. | Databases with high read-to-write ratio |
| **Multi-Master** | Multiple nodes can handle both reads and writes.                          | Distributed databases like Cassandra    |
| **Peer-to-Peer** | All nodes are equal; data is replicated among all.                        | P2P file systems like BitTorrent        |
| **Log Shipping** | Changes are sent via logs to replicas.                                    | PostgreSQL streaming replication        |

## Replication Strategies

| Strategy             | Description                                         |
| -------------------- | --------------------------------------------------- |
| **Synchronous**      | Master waits for acknowledgment from replicas.      |
| **Asynchronous**     | Master does not wait; replicas update later.        |
| **Semi-synchronous** | Waits for acknowledgment from at least one replica. |

## Example of Replication

### System: MySQL Master-Slave Replication

1. **Master Node**
   - Handles all write operations.
   - Maintains a binary log of changes.
2. **Slave Nodes**
   - Connect to the master and replicate data from the binary log.
   - Used primarily for read operations (queries, reports).

### Example Scenario

- User A writes a new blog post.
  - This write hits the Master MySQL node.
  - The post is stored and logged.
  - The Slaves read the binary log and update their copies.
- User B visits the blog.
  - Their read request is routed to a Slave.
  - They see the newly posted blog (with some delay if async).

### Diagram

```
             +--------+
             | Client |
             +--------+
                  |
        +---------+---------+
        |                   |
   +---------+         +---------+
   | Master  |  ---->   |  Slave  |
   | DB Node |   Log    | DB Node |
   +---------+  Replay  +---------+
                        (Read-Only)
```

## Data Replication vs Component Replication

| Feature                  | Data Replication                       | Component Replication                       |
| ------------------------ | -------------------------------------- | ------------------------------------------- |
| **Scope**                | Data layer (DB, file system)           | Application layer (services, APIs)          |
| **Purpose**              | Ensure data availability & consistency | Ensure service availability & scalability   |
| **Typical Technologies** | MongoDB, PostgreSQL, Cassandra, Redis  | Docker, Kubernetes, NGINX, ECS, EC2         |
| **Example**              | Read from multiple DB replicas         | Load balance between 5 backend API replicas |
| **Failure Handling**     | Another replica serves data            | Another service instance handles traffic    |

# Stateless Replication

Stateless replication refers to replicating components or services that do not store any user or session-specific data locally. Each replicated instance is independent and can handle any request without relying on previous ones.

This design pattern is common in modern scalable architectures, especially in cloud-native and microservices systems, where services are designed to be stateless and horizontally scalable.

**Why Stateless Design Matters**
Stateless services are ideal for replication because:

- All replicas are identical and interchangeable
- No need for session synchronization between replicas
- Makes load balancing and autoscaling easier
- Simplifies fault recovery and deployment

## Characteristics of Stateless Replication

| Feature                    | Description                                                      |
| -------------------------- | ---------------------------------------------------------------- |
| **No Local Session State** | Requests do not depend on any data stored in the server instance |
| **Interchangeable Nodes**  | Any replica can handle any request                               |
| **Easy Load Balancing**    | Load balancer can send traffic to any instance                   |
| **Scales Horizontally**    | Add more replicas to handle more traffic                         |
| **Resilient to Failures**  | If one replica fails, another picks up seamlessly                |

## Stateless Replication Architecture

```
                +--------------------+
                |   Load Balancer    |
                +--------+-----------+
                         |
         +---------------+---------------+
         |               |               |
  +-------------+  +-------------+  +-------------+
  |  Replica 1  |  |  Replica 2  |  |  Replica 3  |
  | (Stateless) |  | (Stateless) |  | (Stateless) |
  +-------------+  +-------------+  +-------------+
```

- All replicas run the same stateless service.
- Load is evenly distributed among them.
- Any replica can start/stop/restart without losing state.

## Example of Stateless Replication

### Scenario: E-commerce Frontend API

- The frontend API is stateless: it processes HTTP requests like “view product,” “search,” etc.
- It doesn’t store session data locally – instead, it stores sessions in Redis or uses JWT tokens for authentication.
- Requests come through a load balancer (like AWS ELB or NGINX).
- The app runs on 3 stateless container replicas (e.g., Docker containers on Kubernetes).

### Request Flow

- User logs in → receives a JWT token.
- The browser sends a request: `GET /products?category=shoes`
- Load balancer routes the request to any replica.
- The replica processes the request, fetches data from the database, and responds.
- No session state is stored in the replica.

### Benefits

- If Replica 2 goes down, others handle the load.
- You can scale up to 10+ replicas during Black Friday sales.
- Easy to do rolling deployments with zero downtime

## Stateless vs Stateful Replication

| Aspect             | Stateless Replication                            | Stateful Replication                            |
| ------------------ | ------------------------------------------------ | ----------------------------------------------- |
| **State Storage**  | No local state (external store or none)          | State is kept inside the component              |
| **Scalability**    | Easy (add more replicas freely)                  | Harder (must synchronize state across replicas) |
| **Example**        | Web frontend, REST APIs, authentication services | Database nodes, shopping cart sessions          |
| **Failure Impact** | Minimal (just redirect traffic)                  | Can cause data loss or failover complexity      |

# Stateful Replication

Stateful replication is the process of replicating components or services that manage internal state or data (like databases, caches, session-aware services) to provide fault tolerance, high availability, and consistency.

Unlike stateless systems, each replica in a stateful system must maintain or synchronize internal state, which introduces complexity in replication, especially regarding consistency, failover, and synchronization.

**Key Goals of Stateful Replication**

- Ensure no data loss even during node failure
- Provide read/write availability across replicas
- Maintain data consistency across replicated instances
- Enable automatic failover and recovery

## Components That Require Stateful Replication

- Databases (PostgreSQL, MySQL, Cassandra)
- Message Queues (Kafka, RabbitMQ)
- Stateful Microservices (e.g., real-time game servers)
- File Storage Systems (like HDFS, Ceph)

## Common Replication Models for Stateful Systems

| Model               | Description                                                                  |
| ------------------- | ---------------------------------------------------------------------------- |
| **Primary-Replica** | One leader handles writes; replicas sync and serve reads (may lag behind).   |
| **Multi-Leader**    | Multiple nodes handle writes and must sync with each other (conflict-prone). |
| **Quorum-based**    | Consensus protocols (e.g., Paxos, Raft) determine consistency.               |

## Flow of Stateful Replication

- Client writes go to the primary node.
- Primary persists the state and sends updates to replicas.
- Replicas acknowledge the update.
- In case of primary failure, a replica is promoted as the new primary.

## Trade-offs of Stateful Replication

| Pros                                  | Cons                                                          |
| ------------------------------------- | ------------------------------------------------------------- |
| Data durability & fault tolerance     | Complexity in state synchronization                           |
| Enables high availability and backups | Risk of **replication lag** or **inconsistency** (async mode) |
| Resilient to node failures            | Harder to scale than stateless systems                        |

## Technologies Supporting Stateful Replication

| System             | Mechanism                        |
| ------------------ | -------------------------------- |
| **PostgreSQL**     | Streaming replication, WAL logs  |
| **Kafka**          | Partition leader + ISR replicas  |
| **Cassandra**      | Peer-to-peer with hinted handoff |
| **Redis**          | Primary-replica with AOF/RDB     |
| **Raft-based DBs** | Leader election, log replication |

## Diagram of Stateful Replication

          +-------------------+
          |    Client App     |
          +-------------------+
                   |
                   v
         +---------------------+
         |     Primary Node    |  <-- handles all writes
         +---------------------+
                 ||
     Replication || (state sync)
                 vv
    +----------------+   +----------------+
    | Replica Node 1 |   | Replica Node 2 |
    +----------------+   +----------------+
           (read-only or standby)

## Example: PostgreSQL Streaming Replication

### System Setup

- 1 Primary PostgreSQL node
- 2 Replica nodes
- Replicas use streaming replication to stay up to date

### Scenario

- A financial application stores user transactions.
- All writes go to the primary database.
- The replica nodes copy write-ahead logs (WAL) and replay them to stay consistent.
- If the primary node crashes, a replica is promoted using failover tools (like Patroni).

### Flow

1. User makes a transaction → goes to primary node.
2. Primary saves the transaction and logs it.
3. WAL logs are streamed to replicas.
4. Replicas apply the changes and update their state.
5. Read-only queries go to replicas for load distribution.

## Web Application Replication

Web applications typically store user session state (e.g., login info, cart contents, form data). If this session is stored locally in memory on one server, users need to be routed back to the same server for consistent experience.

This leads to stateful web app replication where the app servers maintain state and need careful routing.

## Sticky Sessions

Sticky sessions (also called session affinity) ensure that a user's requests are always routed to the same server where their session state is stored.

**Use Case**

- Simple session management (no external session store).
- Useful for small-scale deployments.

**Trade-offs**

- Load imbalance (some servers may get overloaded).
- Fails if the server crashes (session lost unless session replication is used).

**Flow**

```
User A sends login request
→ Routed to App Server 1
→ App Server 1 stores session in memory
→ Sticky session ensures all future requests go to App Server 1
```

**Tools**

- NGINX, HAProxy (supports sticky sessions via cookies/IP hash)
- AWS ELB (Application Load Balancer supports sticky sessions)

## Session Clustering

Session clustering replicates or shares session data across all app server instances. So, any server can handle any request, even in case of failure.

**Benefits**

- High availability
- No reliance on sticky sessions
- Easy to scale horizontally

**How it's implemented**

- In-memory data grids (e.g., Hazelcast, Apache Ignite)
- Distributed session stores (e.g., Redis, Memcached)
- Servlet container clustering (e.g., Tomcat session replication)

**Flow**

```
User A logs in on App Server 1
→ Session is saved in Redis
→ User's next request goes to App Server 2
→ App Server 2 retrieves session from Redis
→ Continues seamlessly
```

## Database Replication

Databases also require stateful replication to maintain durability, consistency, and availability.

**Common Replication Strategies**
| Strategy | Description |
| ------------------- | ----------------------------------------------------------------------- |
| **Primary-Replica** | One primary handles writes; replicas sync for reads (PostgreSQL, MySQL) |
| **Multi-Master** | Multiple nodes can write (e.g., Cassandra, CockroachDB) |
| **Quorum-Based** | Distributed consensus (e.g., Raft in etcd or Consul) |

**Flow Example**

- Primary DB handles transaction writes
- Data is streamed (e.g., via WAL logs) to one or more replica DBs
- Read replicas handle heavy read operations (e.g., for analytics, reports)
- On failure, a failover mechanism promotes a replica to become primary

**Example Architecture**

```
                          +-------------------------+
                          |      Load Balancer      |
                          +-----------+-------------+
                                      |
                        Sticky Sessions OR Stateless (Session Store)
                                      |
         +----------------+   +----------------+   +----------------+
         |  App Server 1  |   |  App Server 2  |   |  App Server 3  |
         | (Stores session|   |  (or shares via|   |  Redis/Memcache|
         |  or uses Redis)|   |  session cluster) |  or Hazelcast   |
         +--------+-------+   +--------+-------+   +----------------+
                  \                    |                     /
                   \                   |                    /
                    \         +--------v---------+        /
                     \-------->   Redis Cluster   <--------
                              +--------+---------+
                                       |
                              +--------v--------+
                              |   Primary DB     |
                              +--------+--------+
                                       |
                             +---------v--------+
                             |  Read Replica(s)  |
                             +-------------------+
```

# Master-Slave Architecture

Master-Slave Replication (also called Primary-Secondary) is a design pattern where one node (master/primary) handles write operations, and one or more slave/secondary nodes replicate the data and serve read operations.

It is commonly used in databases, file systems, caches, and message brokers to improve scalability, read performance, and fault tolerance.

## Key Concepts of Master-Slave

| Concept               | Description                                                            |
| --------------------- | ---------------------------------------------------------------------- |
| **Master (Primary)**  | The node that handles all write operations and propagates updates.     |
| **Slave (Secondary)** | One or more nodes that replicate data from the master and serve reads. |
| **Replication**       | The process of copying data from master to slave (sync or async).      |
| **Failover**          | A mechanism to promote a slave to master in case the master fails.     |

## How it works

1. Client writes data to the master.
2. The master stores the data and logs the changes.
3. Slaves pull or receive changes from the master (depending on the replication mode).
4. Clients read data from slave nodes (or optionally from the master).

## Replication Modes

| Mode                 | Description                                                                             |
| -------------------- | --------------------------------------------------------------------------------------- |
| **Synchronous**      | Master waits until slaves confirm the write. Strong consistency.                        |
| **Asynchronous**     | Master writes immediately; slaves update later. Faster but can lag.                     |
| **Semi-synchronous** | Master waits for **one** slave to confirm. Balance between consistency and performance. |

## Example: MySQL Master-Slave Setup

Let’s consider an e-commerce application using MySQL:

- Master MySQL node: receives all INSERT, UPDATE, and DELETE operations.
- Two Slave nodes: replicate changes from the master using binary log (binlog).
- The app:
  - Sends writes (e.g., orders, user registrations) to the master.
  - Sends reads (e.g., product catalog, order history) to the slaves.

### Flow Example

1. User places an order.
2. API server writes the order to the master DB.
3. Master writes to disk and appends to binlog.
4. Slave DBs read the binlog and replicate the change.
5. User checks order history — the app reads it from a slave DB.

### Diagram

```
                          +-------------+
                          |   Clients   |
                          +------+------+
                                 |
                +-------------------------------+
                |         Load Balancer         |
                +-------------------------------+
                   | Write (INSERT/UPDATE/DELETE)
                   v
           +------------------+         +------------------+
           |   Master (DB)    | ----->  |   Slave (DB)     |
           |  Writes + Reads  |         |    Read-only     |
           +------------------+         +------------------+
                                              |
                                          +------------------+
                                          |   Slave (DB)     |
                                          |    Read-only     |
                                          +------------------+
```

## Tools that Use Master-Slave

| System               | Role                                                      |
| -------------------- | --------------------------------------------------------- |
| **MySQL/PostgreSQL** | Native support for master-slave replication               |
| **Redis**            | Supports primary-replica setup for caching                |
| **MongoDB (legacy)** | Before replica sets, Mongo used master-slave              |
| **Kafka**            | Topic partitions have a leader (master) and ISR followers |
| **HDFS**             | NameNode (master) and DataNodes (slaves)                  |

## Pros and Cons of Master Slave

| ✅ **Pros**                             | ❌ **Cons**                                          |
| --------------------------------------- | ---------------------------------------------------- |
| Scales reads horizontally               | Writes are not scalable (bottleneck at master)       |
| Enables fault tolerance (with failover) | Replication lag in async mode                        |
| Allows backup without impacting master  | Failover handling is complex                         |
| Can replicate to remote locations       | Master is a single point of failure (unless managed) |

## Compared to Multi-Master

| Feature              | Master-Slave                      | Multi-Master                          |
| -------------------- | --------------------------------- | ------------------------------------- |
| **Write Scaling**    | Only master handles writes        | All nodes can write                   |
| **Consistency**      | Easier to ensure consistency      | Harder (conflict resolution needed)   |
| **Complexity**       | Simpler                           | More complex                          |
| **Example Use Case** | Traditional SQL, Redis, analytics | Collaborative apps (e.g. Google Docs) |

# Master-Master Architecture

Master-Master replication, also known as Peer-to-Peer replication, is a system design pattern where multiple nodes (or instances) are all capable of handling reads and writes. Each node is considered a master, and they synchronize data between each other to stay consistent.

Unlike master-slave, where only one node handles writes, in master-master all nodes can perform write operations.

## Characteristics of Master-Master

| Characteristic           | Description                                                            |
| ------------------------ | ---------------------------------------------------------------------- |
| **Write at any node**    | Any master node can handle client write requests                       |
| **Bi-directional sync**  | All nodes replicate data to each other to stay in sync                 |
| **Conflict resolution**  | Needed when the same data is modified at multiple nodes simultaneously |
| **High availability**    | No single point of failure; all nodes are active                       |
| **Eventual consistency** | Ensures all replicas eventually converge to the same state             |

## How it work

1. Client sends write request to any master node.
2. The node updates its local copy and then propagates the change to other master nodes.
3. Other nodes apply the update, resolving any conflicts if needed.
4. All nodes now reflect the same final state (eventually consistent).

## Use Cases of Master-Master

| Use Case                          | Reason for Master-Master                                            |
| --------------------------------- | ------------------------------------------------------------------- |
| Globally distributed databases    | Handle local writes without latency from cross-region calls         |
| High availability apps            | Prevent downtime if one node fails                                  |
| Offline-first or mobile sync apps | Allow clients to write offline, sync later with conflict resolution |

## Technologies Supporting Master-Master

| Technology               | Description                                              |
| ------------------------ | -------------------------------------------------------- |
| **CouchDB**              | Built-in multi-master with sync protocols                |
| **Cassandra**            | Peer-to-peer with eventual consistency                   |
| **MySQL (with Galera)**  | Provides multi-master synchronous replication            |
| **Redis Enterprise**     | Active-active geo-distributed Redis                      |
| **Firebase Realtime DB** | Supports syncing across clients with conflict resolution |

## Conflict Resolution

When two masters write to the same key at the same time, a conflict arises.

**Solutions:**

- Last Write Wins (LWW): Use timestamps to keep the latest update.
- Application-level merge logic: E.g., merging two versions of a document.
- Operational Transformation (OT) or CRDTs: Used in collaborative editing apps like Google Docs.

## Example of Master-Master

### Scenario

A company runs a shopping app with users in Europe and Asia.

- Data is stored in two MySQL nodes:
  - `EU_DB`
  - `ASIA_DB`
- Both are masters with Galera Cluster for synchronous replication.

### Flow

1. A user in Europe updates their shipping address → write goes to EU_DB.
2. Galera replicates this update to ASIA_DB.
3. A user in Asia updates their phone number → write goes to ASIA_DB.
4. The change is replicated back to EU_DB.

All changes are synchronized in real-time across both regions.

### Diagram

```
                   +-----------+
                   |  Client 1 |
                   +-----------+
                        |
                   +----------+
                   | Master A |◄─────────────────────────┐
                   +----------+                          │
                        ▲                                │
                        │ bi-directional replication     │
                        ▼                                │
                   +----------+                          │
                   | Master B |──────────────────────────┘
                   +----------+
                        |
                   +-----------+
                   |  Client 2 |
                   +-----------+
```

## Pros and Cons of Master-Master

| ✅ Pros                                        | ❌ Cons                                 |
| ---------------------------------------------- | --------------------------------------- |
| High availability (no single point of failure) | Conflict resolution complexity          |
| Scalable for global apps                       | Harder to guarantee strict consistency  |
| Writes are locally fast (geo-distributed)      | Potential for **write-write conflicts** |
| Load can be evenly distributed                 | More complex deployment and monitoring  |

## Master-Slave vs Master-Master

| Feature              | Master-Slave            | Master-Master                           |
| -------------------- | ----------------------- | --------------------------------------- |
| Write node(s)        | Only master             | Any node (all are writable)             |
| Conflict possibility | No (single writer)      | Yes (must be resolved)                  |
| Availability         | Lower (if master fails) | Higher (no single point of failure)     |
| Performance          | Read-heavy workloads    | Read/write-heavy & globally distributed |
| Complexity           | Lower                   | Higher                                  |

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
