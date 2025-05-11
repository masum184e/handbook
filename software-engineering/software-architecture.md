# Contents

- [Software Architecture](#software-architecture)
  - [Rationale of Software Architecture](#rationale-of-software-architecture)
  - [Architectural Drivers](#architectural-drivers)
  - [Misconceptions](#misconceptions)
  - [Architectural Elements](#architectural-elements)
  - [Different Levels of Design](#different-levels-of-design)
- [Quality Attribute](#quality-attributes)
  - [Functional Requirements](#funtional-requirements)
  - [Non Functional Requirements](#non-functional-requirements)
  - [Quality Model](#quality-model)
    - [McCall](#mccall)
    - [Boehm](#boehmhh)
  - [Quality Attribute Scenario](#quality-attribute-scenario)
- [Stakeholders](#stakeholders)
  - [Internal Stakeholders vs External Stakeholders](#internal-stakeholders-vs-external-stakeholders)
  - [Stakeholder vs Shareholder](#stakeholder-vs-shareholder)
  - [Importance](#importance)
  - [Quality Attribute Workshop](#quality-attribute-workshop)
  - [Utility Tree](#utility-tree)
- [Designing Software Architecture](#designing-software-architecture)
  - [Inputs of the Design Process](#inputs-of-the-design-process)
  - [Outputs of the Design Process](#outputs-of-the-design-process)
  - [Top Down Approach](#top-down-approach)
  - [Bottom-Up Approach](#bottom-up-approach)
  - [Greenfield](#greenfield)
  - [Brownfield](#brownfield)
  - [Attribute Driven Design - Context Diagram](#attribute-driven-design---context-diagram)
- [Architectural Styles](#architectural-styles)
  - [Layered Architecture Style](#1-layered-architecture-style)
  - [Client-Server Architecture Style](#2-client-server-architecture-style)
  - [Event-Driven Architecture Style](#3-event-driven-architecture-style)
  - [Microkernel (Plugin) Architecture Style](#4-microkernel-plugin-architecture-style)
  - [Microservices Architecture Style](#5-microservices-architecture-style)
- [Architectural Patterns](#architectural-patterns)
  - [MVC (Model-View-Controller)](#1-mvc-model-view-controller)
  - [Command Query Responsibility Segregation](#2-cqrs-command-query-responsibility-segregation)
  - [Broker Pattern](#3-broker-pattern)
  - [Pipe and Filter Pattern](#4-pipe-and-filter-pattern)
  - [Service-Oriented Architecture](#5-service-oriented-architecture-soa)
  - [Difference Between Style and Pattern](#difference-between-style-and-pattern)
- [Design and Architecture Principles](#design-and-architecture-principles)
  - [General Software Design Principles](#general-software-design-principles)
  - [Object-Oriented Design (SOLID) Principles](#object-oriented-design-solid-principles)
  - [Software Architecture Principles](#software-architecture-principles)
- [Architectural View](#architectural-view)
  - [4+1 View Model](#41-view-model)
    - [Overview](#overview)
    - [Logical View](#1-logical-view---class-diagram)
    - [Process View](#3-process-view---activity-diagram)
    - [Implementation View](#2-implementation-view---component-diagram)
    - [Phisycal View](#4-physical-view---deployment-diagram)
    - [Use Case](#5-use-case-diagram)
  - [Module View](#module-view)
  - [Component and Connector View](#component-and-connector-view)
  - [Allocaiton View](#allocaiton-view)
- [Architecture Evaluation](#architecture-evaluation)
  - [Evaluation Factors](#evaluation-factors)
  - [Architecture Trade-off Analysis Method](#architecture-trade-off-analysis-method)
  - [Lightweight Architecture Evaluation](#lightweight-architecture-evaluation)
  - [Analysis Goal](#analysis-goal)
    - [Completeness](#completeness)
    - [Consistency](#consistency)
    - [Compatibility](#compatibility)
    - [Correctness](#correctness)

# Fundamentals

## Software Architecture

Software architecture is the fundamental structure of a software system. It defines:

- The components (e.g., services, modules)
- Their interactions (e.g., APIs, message queues)
- The principles and guidelines governing their design and evolution

It addresses both functional and non-functional requirements (like scalability, performance, etc.).

## Rationale of Software Architecture

The rationale explains why architectural decisions were made. It justifies:

- Chosen patterns (e.g., layered, event-driven)
- Technologies (e.g., Kafka for async messaging)
- Trade-offs (e.g., availability over consistency)

Example: Using MongoDB for a news feed to support flexible schemas and fast writes, despite limited ACID guarantees.

## Architectural Drivers

Drivers are the forces that shape the architecture. They include:

**Types:**

- Functional requirements: system behaviors (e.g., “process payments”)
- Quality attributes: performance, security, availability
- Business constraints: time-to-market, budget
- Technical constraints: legacy systems, technology choices

## Misconceptions

| Misconception                        | Correction                                                                           |
| ------------------------------------ | ------------------------------------------------------------------------------------ |
| Architecture = Design                | Architecture is a subset of design, focusing on high-level structures and strategies |
| Architecture ends after planning     | It evolves with the system and should be continuously reviewed                       |
| Architecture is only diagrams        | Diagrams help represent architecture, but architecture is the set of decisions       |
| Only large systems need architecture | Even small systems benefit from architectural thinking                               |

## Architectural Elements

1. **Components:** Functional units of software (e.g., services, modules)
2. **Connectors:** How components interact (e.g., HTTP, message queues)
3. **Properties:** Attributes like performance, statefulness, or security
4. **Constraints:** Limitations (e.g., must use .NET, must run on AWS)
5. **Concerns:** Issues architects must resolve (e.g., scalability, logging)

## Different Levels of Design

| Level                | Description                                    | Example                                                         |
| -------------------- | ---------------------------------------------- | --------------------------------------------------------------- |
| Architectural Design | High-level structure, components, interactions | Choosing microservices and REST APIs                            |
| Component Design     | Internal design of a component/module          | Designing the logic and APIs of a payment module                |
| Detailed Design      | Specific classes, functions, algorithms        | Writing Java classes for validation logic in payment processing |

# Quality Attributes

Quality attributes are measurable or testable properties of a system that define non-functional aspects. These are used to ensure that the system satisfies stakeholder expectations beyond just functionality.

| Quality Attribute | Description                                                               | Example                          |
| ----------------- | ------------------------------------------------------------------------- | -------------------------------- |
| Performance       | Speed of response                                                         | Page loads within 1 sec          |
| Scalability       | Ability to handle increased workload                                      | Support 10k users                |
| Availability      | The degree to which a system is operational and accessible when required. | 99.999% uptime                   |
| Maintainability   | How easily the system can be modified, fixed                              | Add feature in 2 days            |
| Security          | Ability to protect against unauthorized access                            | Role-based access, encryption    |
| Usability         | How easy it is for users to learn and operate the system                  | Nurses use with minimal training |
| Reliability       | Ability to operate correctly and consistently over time.                  | <0.1% data loss                  |
| Interoperability  | Ability to works with other systems                                       | Integrates with APIs             |
| Portability       | Ability to runs in different environments                                 | Deployable to AWS, GCP, etc.     |
| Testability       | Ease of testing                                                           | 80%+ unit test coverage          |

## Funtional Requirements

Functional requirements describe what the system should do. These are the specific behaviors, functions, and features of the system.

They help define the core functionality of the application, including:

- Inputs and outputs
- Data processing
- User interactions
- System operations

**Example:**

1. User Login
2. Add Item to Cart
3. Generate Monthly Report

## Non Functional Requirements

Non-functional requirements describe how the system performs its functions. These are the quality attributes of the system.

They ensure the software is usable, secure, efficient, and reliable under expected conditions. Common categories are:

- Performance: Response time, throughput, scalability
- Usability: Ease of use, user interface design
- Reliability: System uptime, error recovery
- Security: Authentication, authorization, data protection
- Maintainability: Ease of updates or modifications
- Portability: Ability to run on different platforms

**Example:**

1. Performance Requirement
2. Security Requirement
3. Availability Requirement

## Quality Model

### McCall

Its help bridge the gap between software developers and users by focusing on quality attributes in software architecture and design.

McCall's model identifies three major categories for software quality:

1. **Product Operation** – How well the software operates.
2. **Product Revision** – How well the software can be changed.
3. **Product Transition** – How well the software adapts to new environments.

Each category includes quality factors, which are high-level attributes affecting the software. These are further supported by quality criteria and metrics that are more measurable.

#### Hierarchy

```
McCall's Model
│
├── Product Operation - Runtime Behavior
│   ├── Correctness
│   ├── Reliability
│   ├── Efficiency
│   ├── Integrity
│   └── Usability
│
├── Product Revision - Maintainability
│   ├── Maintainability
│   ├── Flexibility
│   └── Testability
│
└── Product Transition - Portability
    ├── Portability
    ├── Reusability
    └── Interoperability
```

### Boehm

It is hierarchical and considers both high-level quality attributes and their underlying characteristics, making it especially useful in software architecture and design.

Boehm’s model defines software quality through a three-level hierarchy:

- **High-level characteristics** – Represent the general utility of the software to the user.
- **Intermediate-level characteristics** – Define quality from a more technical perspective.
- **Primitive characteristics** – Low-level attributes that are measurable and influence intermediate ones.

#### High-Level Characteristics

- **As-is Utility:** How useful the software is in its current form.
- **Maintainability:** How easy it is to make changes or updates.
- **Portability:** How easy it is to transfer the software to other environments.

#### Intermediate-Level Characteristics

These are quality factors that support the high-level goals.
| Characteristic | Related High-Level Attribute | Description |
| ----------------------------- | -------------------------------- | ----------------------------------------------- |
| Reliability | As-is Utility | Consistency of performance. |
| Efficiency | As-is Utility | Resource usage vs. output. |
| Human Engineering | As-is Utility | Ease of use for users. |
| Testability | Maintainability | Ease of verifying functionality. |
| Understandability | Maintainability | Ease of understanding design/code. |
| Modifiability | Maintainability | Ease of applying changes. |
| Self-Documentation | Maintainability | Clarity and in-code documentation. |
| Structuredness | Maintainability | Use of structured techniques in design/code. |
| Machine Independence | Portability | Independence from hardware. |
| Communication Commonality | Portability | Use of standard protocols for interoperability. |

#### Primitive Characteristics

These are measurable attributes like:

- Consistency
- Traceability
- Completeness
- Execution efficiency
- Device independence

These feed into intermediate characteristics.

### Comparison

| Aspect    | Boehm Model                               | McCall’s Model                                |
| --------- | ----------------------------------------- | --------------------------------------------- |
| Structure | Hierarchical (3 levels)                   | Flat (3 categories with factors)              |
| Focus     | Developer and user perspectives           | Developer, user, and maintainer focus         |
| Depth     | Includes primitive characteristics        | More general quality factors                  |
| Use Case  | Software engineering, detailed evaluation | Project evaluation, stakeholder communication |

## Quality Attribute Scenario

Quality Attribute Scenario is a structured way to define and evaluate how well a system meets a particular quality attribute like performance, availability, security, etc.

Instead of vaguely stating “the system should be secure,” a quality attribute scenario makes that requirement specific, measurable, and testable.

**What Is a Quality Attribute Scenario?**
A quality attribute scenario describes:

- Who initiates it
- What triggers it
- Where it occurs
- How the system responds
- How to measure success

It is a precise description of how a system should behave under a given condition, related to a specific quality attribute (e.g., performance, reliability, modifiability, etc.).

### Structure

| Element          | Description                                                                      |
| ---------------- | -------------------------------------------------------------------------------- |
| Source           | The entity that generates the event (e.g., user, external system, timer).        |
| Stimulus         | The condition or event that occurs (e.g., user request, system failure).         |
| Environment      | The system's state when the stimulus occurs (e.g., normal, peak load, degraded). |
| Artifact         | The part of the system affected (e.g., database, server, network).               |
| Response         | How the system should respond to the stimulus.                                   |
| Response Measure | Criteria to evaluate if the response is acceptable (e.g., latency < 2 seconds).  |

### Example

Let’s define a performance-related quality attribute scenario for an e-commerce website.
| Component | Example Value |
| -------------------- | ------------------------------------------- |
| Source | User |
| Stimulus | Submits a product search request |
| Environment | During normal operation |
| Artifact | Search API service |
| Response | Returns search results |
| Response Measure | Results are returned in less than 2 seconds |

**Scenario:** A user submits a search request during normal operation. The search service processes the request and returns search results within 2 seconds.

# Stakeholders

Stakeholders are individuals or groups who have an interest in the system and can affect or be affected by it.

## Types

| Stakeholder Type      | Role/Interest                                                              |
| --------------------- | -------------------------------------------------------------------------- |
| Business Stakeholders | Define business goals and constraints (e.g., product managers, executives) |
| Users                 | Direct users of the system (e.g., end-users, customer support)             |
| Developers            | Build and implement the system                                             |
| Testers/QA            | Ensure system quality and correctness                                      |
| Operations/IT         | Manage deployment, monitoring, infrastructure                              |
| Security Experts      | Ensure system complies with security standards                             |
| Legal/Compliance      | Ensure legal and regulatory compliance                                     |
| Project Managers      | Oversee schedules, scope, and delivery                                     |
| External Partners     | Vendors, third-party service providers                                     |

## Internal Stakeholders vs External Stakeholders

| Feature                   | Internal Stakeholders                                                                  | External Stakeholders                                                         |
| ------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Definition                | People within the organization who are directly involved in or affected by the project | People outside the organization who are affected by or influence the project  |
| Examples                  | - Employees<br>- Developers<br>- Project Managers<br>- Executives<br>- QA/Testers      | - Customers<br>- Vendors<br>- Regulators<br>- Partners<br>- Community members |
| Control Over Project      | Typically have direct control or involvement in decisions and execution                | Usually have indirect control but can influence or impose constraints         |
| Type of Interest          | Operational, strategic, technical                                                      | Business, legal, market, or service-level                                     |
| Communication Frequency   | Frequent and ongoing                                                                   | Less frequent, often milestone- or outcome-based                              |
| Influence on Architecture | High—especially for design, implementation, and delivery                               | Medium to high—based on legal, usability, or integration needs                |

## Stakeholder vs Shareholder

| Feature                  | Stakeholder                                                                                     | Shareholder                                                                                       |
| ------------------------ | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Definition               | Anyone with an interest in the project or organization’s outcomes (can be internal or external) | An investor who owns shares in the company (also known as stockholders)                           |
| Ownership                | Not necessarily an owner                                                                        | Owns part of the company                                                                          |
| Interest                 | Broad: includes success of the product, compliance, performance, etc.                           | Narrower: focused on profitability and financial return                                           |
| Examples                 | Employees, customers, partners, suppliers, regulators                                           | Institutional investors, individuals owning company stock                                         |
| Focus Area               | Value delivery, operations, sustainability                                                      | Stock price, dividends, company valuation                                                         |
| Relation to Architecture | Directly influences software/system design and decisions                                        | Typically not involved in architectural decisions, but may impact funding or direction indirectly |

## Importance

- Ensure requirements are well-understood and up-to-date.
- Help identify constraints, risks, and trade-offs early.
- Provide feedback loops to validate architectural choices.
- Encourage ownership and alignment among all parties.
- Reduce rework caused by miscommunication or assumptions.

**Why Is Stakeholder Involvement Important?:**

1. **Diverse Perspectives:** Different stakeholders bring different priorities and expectations.
2. **Clarifying Ambiguities:** Stakeholders help clarify what those mean in concrete term
3. **Setting Priorities:** Stakeholders help identify which requirements are critical vs. nice to have.
4. **Risk Reduction:** arly involvement of stakeholders helps identify and mitigate causes to fail architecture.

## Quality Attribute Workshop

A Quality Attribute Workshop (QAW) is a structured and collaborative method used to identify, refine, and prioritize architecturally significant quality attributes (ASRs) such as performance, security, modifiability, availability, etc.

**Purpose:**

- Identify quality attributes critical to the system
- Explore scenarios that make those attributes concrete
- Surface potential architectural risks or trade-offs
- Guide architecture decisions and evaluations

## Utility Tree

A Utility Tree is a tool used to structure and prioritize the quality attributes of a system in a visual and hierarchical manner.

### Purpose

1. Breaking down high-level quality attributes into specific, actionable sub-attributes.
2. Prioritizing quality attributes based on business and technical requirements.
3. Guiding architectural decisions based on the desired trade-offs between competing attributes.
4. Facilitating scenario-based discussions around architecture design.

### Structure

1. **Root Node - Utility:** Represents the overall system usefulness or satisfaction of stakeholder goals

2. **First-Level Nodes - Quality Attributes:** Broad categories like Performance, Security, Modifiability, Availability, Usability, etc.

3. **Leaf Nodes - Scenarios**

- Specific, measurable quality attribute scenarios that express how the system should behave in real situations.
- Each scenario is rated by:
  - Importance (to stakeholders)
  - Difficulty (to implement or achieve)

### Example

Let’s assume you are designing an online education system like Courser

```sql
               [Utility]
                   |
   ------------------------------------
   |         |        |       |       |
[Performance] [Availability] [Security] [Usability] [Modifiability]
       |            |            |          |              |
   Scenarios     Scenarios    Scenarios  Scenarios      Scenarios
```

#### Breakdown

| Quality Attribute | Scenario                                                           | Importance | Difficulty |
| ----------------- | ------------------------------------------------------------------ | ---------- | ---------- |
| Performance       | System must support 10,000 concurrent users with <2s response time | High       | Medium     |
| Availability      | In case of a node crash, system recovers within 5 seconds          | High       | High       |
| Security          | Only authenticated users can access paid courses                   | High       | Low        |
| Usability         | First-time users must complete onboarding within 5 minutes         | Medium     | Medium     |
| Modifiability     | Ability to add new quiz types without major code changes           | Medium     | High       |

# Designing Software Architecture

## Inputs of the Design Process

1. Stakeholder Requirements
2. Use Cases
3. Quality Attribute Requirements
4. Constraints
5. Existing Systems and Architecture
6. Architectural Drivers

## Outputs of the Design Process

1. Architectural Views
2. Architecture Description Document
3. Component and Connector Model
4. Design Decisions and Rationale

## Top Down Approach

The Top-Down approach starts with a high-level overview of the system. The architecture is defined at a macro level first, then decomposed into smaller subsystems, components, and modules.

### Process:

- Understand requirements
- Define the overall system architecture (big picture)
- Break it down into major subsystems or components
- Further decompose each component into smaller units
- Design interfaces between components
- Proceed toward implementation from abstract to concrete

### Benefits

- Provides a clear vision of the entire system from the start
- Helps align system structure with business goals
- Better support for long-term planning and risk analysis

### Drawbacks

- May overlook low-level technical constraints
- Risk of missing reusable components if not known early
- Can be slow to prototype or deliver working pieces

## Bottom-Up Approach

The Bottom-Up approach starts with detailed components or services that are already well-understood or reusable. The architecture emerges by composing these into larger subsystems.

### Process

- Identify existing components, libraries, or services
- Develop or reuse foundational components
- Integrate components into larger systems
- Define interactions and compose the system
- Refine to align with higher-level requirements

### Benefits:

- Encourages code reuse and leveraging existing tools
- Useful for rapid prototyping
- Can quickly build working subsystems

### Drawbacks:

- May result in a disjointed or inconsistent system design
- Harder to maintain architectural consistency
- Risk of architecture "emerging" without alignment to business goals

## Comparison

| Feature     | Top-Down                             | Bottom-Up                              |
| ----------- | ------------------------------------ | -------------------------------------- |
| Starts with | High-level system design             | Low-level components                   |
| Focus       | Abstract architecture, planning      | Concrete functionality, reuse          |
| Best for    | Complex, large systems               | Prototyping, leveraging existing tools |
| Risk        | May miss technical realities         | May lack cohesion or overall vision    |
| Speed       | Slower at first, structured delivery | Faster prototype, may need rework      |

## Greenfield

A Greenfield project is a brand-new software system built from scratch, with no prior legacy code, architecture, or system constraints.

It’s like building on a fresh plot of land—hence the term “greenfield.”

### Characteristics

- No need to integrate with existing systems
- Freedom to choose the latest tools, frameworks, or design patterns
- Architecture is driven purely by current business goals and requirements
- More upfront planning required to avoid rework

## Brownfield

A Brownfield project is a software development effort that involves modifying, integrating, or extending an existing system.

It’s like expanding an existing building—hence the name “brownfield.”

### Characteristics

- Must work within existing constraints (codebase, tech stack, architecture)
- Existing legacy systems may be outdated or undocumented
- Integration challenges with databases, APIs, third-party systems
- Must preserve functionality while introducing new features or refactors

## Comparison

| Feature            | Greenfield                                | Brownfield                                    |
| ------------------ | ----------------------------------------- | --------------------------------------------- |
| Starting Point     | From scratch                              | Existing system in place                      |
| Design Freedom     | High                                      | Constrained by legacy systems                 |
| Main Challenge     | Architecture from zero                    | Integration and compatibility                 |
| Risk Type          | Risk of overdesign or under-specification | Risk of regression and tech debt              |
| Technology Choices | Open selection of tech and patterns       | Limited to what’s compatible                  |
| Speed to Deliver   | May be slower at start                    | Faster initial delivery but complex long-term |

## Attribute Driven Design - Context Diagram

Attribute-Driven Design (ADD) is a method for designing software architecture that starts from quality attribute requirements—like performance, modifiability, scalability—rather than just functional requirements.

ADD answers “How should the system be structured to meet both functional and quality goals?”

### Add Process Overview

1. Gather Requirements (functional, quality attributes, constraints)
2. Select Architectural Drivers (the most critical quality attributes)
3. Choose Architectural Patterns/Tactics (e.g., layers, microservices, caching)
4. Divide into Elements (Modules, Components)
5. Define Interfaces and Interactions
6. Verify and Iterate

### Context Diagram

A context diagram in the ADD process is a high-level architectural view that shows the system as a single element and how it interacts with external actors or systems.

It helps answer:

- What is inside vs. outside the system?
- Who/what interacts with the system?
- What are the external dependencies and data flows?

#### Purpose

- Establish system boundaries
- Identify external interfaces
- Understand external inputs/outputs
- Foundation for further decomposition

#### Components

| Component                           | Description                                                                                           | Representation (in diagram)                                         |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 1. System (The Context)             | The system being designed. It is the central element of the diagram.                                  | A large rectangle in the center, often labeled with the system name |
| 2. External Entities (Actors)       | People, systems, or devices that interact with the system but are outside its boundary.               | Boxes or icons around the system box                                |
| 3. Data Flows / Communication Paths | The inputs and outputs exchanged between the system and external entities (data, requests, messages). | Arrows showing the direction of communication                       |
| 4. System Boundary                  | Conceptual line separating what is inside vs. outside the system. Not always explicitly drawn.        | Defined implicitly by what’s inside vs. outside the system box      |
| 5. Labels                           | Names for all systems, actors, and data flows for clarity.                                            | Text annotations on arrows and components                           |

#### Example

```sql
            +-------------------------+
            |       Customer          |
            +-----------+-------------+
                        |
                        | Login, Transfer Request
                        v
            +-----------+-------------+
            |     Mobile Banking App  |
            +-----------+-------------+
                        |
     +------------------+-------------------+
     |                  |                   |
     v                  v                   v
+------------+   +-------------+     +--------------+
| Auth Service|   | Payment API |     | Bank Backend |
+------------+   +-------------+     +--------------+
```

<img src="./../images/software-architecture/library_management_system_context_diagram.webp" />

# Architectural Styles

Architectural styles are broad classifications that define a family of systems in terms of their structure and interactions. They specify constraints and characteristics common to a group of systems.

Think of a style as a template or general approach to structuring a system.

## Common Styles

### 1. Layered Architecture Style

- **Concept:** System is organized into horizontal layers, each with a specific role.
- **Structure:** Each layer communicates only with the layer directly below or above it.
- **Pros:**
  - Separation of concerns
  - Easy to maintain and test
- **Cons:**
  - Can be inefficient if many layers must be passed through for simple tasks

#### Example

A typical web application:

```sql
Presentation Layer (UI)
↓
Business Logic Layer
↓
Data Access Layer
↓
Database
```

### 2. Client-Server Architecture Style

- **Concept:** Divides the system into clients (requesters) and servers (providers of services).
- **Structure:** Clients initiate communication; servers wait and respond.
- **Pros:**
  - Centralized control (server)
  - Easy to scale clients
- **Cons:**
  - Server can become a bottleneck or single point of failure
- **Example:** A browser (client) making a request to a web server (server).

### 3. Event-Driven Architecture Style

- **Concept:** Components communicate through events.
- **Structure:** Components emit or respond to events using an event bus or queue.
- **Example:**
  In an e-commerce system, when an order is placed:
  - Order service triggers "OrderPlaced" event.
  - Email service listens for the event and sends a confirmation.
- **Pros:**
  - Highly decoupled
  - Scalable and flexible
- **Cons:**
  - Complex debugging
  - Event ordering can be tricky

### 4. Microkernel (Plugin) Architecture Style

- **Concept:** Core system (microkernel) with plug-in modules for extensibility.
- **Example:**
  An IDE like Eclipse or VSCode:
  - Core handles basic functionality.
  - Plug-ins add language support, linters, version control, etc.
- **Pros:**
  - Easily extensible
  - Decouples core from features
- **Cons:**
  - Dependency management between plugins can be complex

### 5. Microservices Architecture Style

- **Concept:** System is composed of small, independently deployable services.
- **Example:**
  In a travel booking system:
  - One service handles flights.
  - Another handles hotels.
  - Another handles payments.
- **Pros:**
  - Scalability
  - Independent development and deployment
- **Cons:**
  - Network latency
  - Complex inter-service communication

# Architectural Patterns

Architectural patterns are recurring solutions to common problems in software architecture. They are more concrete than styles and may be implemented within any style.

Think of a pattern as a proven design strategy to solve a specific architectural problem.

## Common Patterns

### 1. MVC (Model-View-Controller)

- **Purpose:** Separates application into three parts for modularity and maintainability.
- **Structure:**
  - **Model:** Business logic/data
  - **View:** UI
  - **Controller:** Mediator between model and view
- **Pros:**
  - Clear separation of concerns
  - Facilitates parallel development
- **Cons:**
  - Overhead for small apps

### 2. CQRS (Command Query Responsibility Segregation)

- **Purpose:** Separate the read and write operations of a system.
- **Structure:**
  - **Command:** Changes state (write)
  - **Query:** Reads state (read-only)
- **Example:**
  A banking system:
  - Writing a transaction: Command
  - Reading account balance: Query
- **Pros:**
  - Optimized performance for each path
  - Better scalability
- **Cons:**
  - More complex to implement
  - Data consistency challenges

### 3. Broker Pattern

- **Purpose:** Structure distributed systems with decoupled components.
- **Structure:**
  - Broker: Mediator between clients and servers (e.g., message queue)
- **Example:** Remote Procedure Call (RPC) or gRPC.
- **Pros:**
  - Decouples components
  - Dynamic service discovery
- **Cons:**
  - Broker becomes critical point of failure

### 4. Pipe and Filter Pattern

- **Purpose:** Process data through a sequence of components (filters), each transforming the data.
- **Structure:** Data flows through pipes connecting filters
- **Example:**
  - Compiler: Lexer → Parser → Semantic Analyzer → Code Generator
- **Pros:**
  - Reusability
  - Easy to parallelize
- **Cons:**
  - Not suitable for interactive applications

### 5. Service-Oriented Architecture (SOA)

- **Purpose:** Build systems as a collection of services that communicate over a network.
- **Structure:** Services are loosely coupled and communicate via protocols (e.g., SOAP, REST)
- **Example:** An enterprise system where HR, Payroll, and CRM are separate services.
- **Pros:**
  - Platform independent
  - Good for enterprise integration
- **Cons:**
  - Overhead due to service communication

## Difference Between Style and Pattern

| Feature     | Architectural Style       | Architectural Pattern              |
| ----------- | ------------------------- | ---------------------------------- |
| Scope       | Broad classification      | Specific solution to a problem     |
| Focus       | System structure and form | Solution to recurring design issue |
| Examples    | Layered, Microservices    | MVC, CQRS, Broker                  |
| Reusability | High-level reuse          | Problem-specific reuse             |

## Summary

You’re building a scalable web application like Joinify (club management system).

- **Architectural Style:** Microservices
- **Patterns Used:**
  - **MVC:** Within each microservice (e.g., Event Service)
  - **CQRS:** For high-volume read and write separation in event analytics

The style defines the big picture (services as building blocks), while patterns define how those blocks are structured internally.

# Design and Architecture Principles

## General Software Design Principles

| Principle Name                   | Definition                                                                         |
| -------------------------------- | ---------------------------------------------------------------------------------- |
| Separation of Concerns (SoC)     | Divides the system into distinct parts, each addressing a separate responsibility. |
| Don't Repeat Yourself (DRY)      | Avoids code duplication by reusing components or functions.                        |
| Keep It Simple, Stupid (KISS)    | Promotes simplicity; avoid overengineering.                                        |
| You Aren’t Gonna Need It (YAGNI) | Do not implement something until it's absolutely necessary.                        |

## Object-Oriented Design (SOLID) Principles

| Principle Name                        | Definition                                                                     |
| ------------------------------------- | ------------------------------------------------------------------------------ |
| Single Responsibility Principle (SRP) | A class should have only one reason to change (one responsibility).            |
| Open/Closed Principle (OCP)           | Software entities should be open for extension, but closed for modification.   |
| Liskov Substitution Principle (LSP)   | Subtypes must be substitutable for their base types without altering behavior. |
| Interface Segregation Principle (ISP) | Clients should not be forced to depend on interfaces they don’t use.           |
| Dependency Inversion Principle (DIP)  | Depend on abstractions, not on concrete implementations.                       |

## Software Architecture Principles

| Principle Name | Definition                                                                  |
| -------------- | --------------------------------------------------------------------------- |
| Modularity     | Break the system into independent, interchangeable modules.                 |
| Loose Coupling | Minimize dependencies between different modules or services.                |
| High Cohesion  | Group related functionality within a single module or component.            |
| Scalability    | The system should handle increasing loads with minimal changes.             |
| Security First | Prioritize security from the start of system design.                        |
| Fail-Fast      | Detect errors early and stop execution quickly to avoid cascading failures. |

# Architectural View

## 4+1 View Model

It organizes a software architecture into five concurrent views, each addressing a specific set of concerns for various stakeholders.

<img src="./../images/software-architecture/4_plus_1_view.webp" />

### Overview

| View                                                                 | Purpose                                                                                                                          | Stakeholders                              | Diagram                                                                                                                                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. [Logical View](#1-logical-view---class-diagram)                   | Describes functionality provided to end users (functional requirements).                                                         | End users, analysts, designers            | [Class Diagram](https://github.com/masum184e/handbook/blob/main/oop.md#class-diagram)                                                                                           |
| 2. [Implementation View](#2-implementation-view---component-diagram) | Describes software from developer perspective and concerned with software management.                                            | Programmers, software managers            | [Component](https://github.com/masum184e/handbook/blob/main/oop.md#component-diagram)/Package Diagram                                                                           |
| 3. [Process View](#3-process-view---activity-diagram)                | Describes dynamic behavior addressing performance, availability, concurrency, and fault-tolerance (non-functional requirements). | System integrators, performance engineers | [Activity](https://github.com/masum184e/handbook/blob/main/oop.md#activity-diagram)/[Sequence](https://github.com/masum184e/handbook/blob/main/oop.md#sequence-diagram) Diagram |
| 4. [Phisycal View](#4-physical-view---deployment-diagram)            | Describes the physical connections between components.                                                                           | System engineers, network engineers       | [Deployment Diagram](https://github.com/masum184e/handbook/blob/main/oop.md#deployment-diagram)                                                                                 |
| 5. [+1. Scenarios (Use Cases)](#5-use-case-diagram)                  | Describe behavior of the system as seen by its end-users.                                                                        | All stakeholders                          | [Use Case Diagram](https://github.com/masum184e/handbook/blob/main/oop.md#use-case-diagram)                                                                                     |

The `+1` view is not another architectural dimension, but rather ties the other four together via use cases.

### Example

**Online Food Delivery System**

#### 1. Logical View - Class Diagram

```sql
+----------------+       +------------------+       +------------------+
|   Customer     |       |   Restaurant     |       |   DeliveryAgent  |
+----------------+       +------------------+       +------------------+
| - id           |       | - id             |       | - id             |
| - name         |       | - name           |       | - name           |
| - address      |       | - location       |       | - vehicle        |
+----------------+       +------------------+       +------------------+
        |                        |                          |
        |                        |                          |
        |                        |                          |
        |                        v                          v
        |                  +---------------+        +------------------+
        +----------------> |     Order     | <----> |   DeliveryInfo   |
                           +---------------+        +------------------+
                           | - orderId     |        | - trackingId     |
                           | - items       |        | - status         |
                           | - status      |        +------------------+
                           +---------------+
                                   |
                                   v
                            +-------------+
                            |   Payment   |
                            +-------------+
                            | - paymentId |
                            | - method    |
                            | - status    |
                            +-------------+
```

- `-->` - Unidirectional Association – Class A knows about Class B (A uses B).
- `<-->` - Bidirectional Association – Both classes know about each other.

#### 2. Implementation View - Component Diagram

Each component is responsible for one clear aim within the entire system and only interacts with other essential elements on a need-to-know basis.

```sql
                    +--------------------------+
                    |   «component»            |
                    |   UserInterface          |
                    |                          |
                    |   ◐ viewMenu()           |
                    |   ◐ placeOrder()         |
                    |   ◐ trackOrder()         |
                    +----------◼--------------+
                               |
                               ▼
                    +--------------------------+
                    |   «component»            |
                    |   MenuService            |
                    |   ○ viewMenu()           |
                    |   ◐ getItemDetails()     |
                    +----------◼--------------+
                               |
                               ▼
                    +--------------------------+
                    |   «component»            |
                    |   OrderService           |
                    |   ○ placeOrder()         |
                    |   ◐ calculateTotal()     |
                    |   ◐ checkAvailability()  |
                    +----------◼--------------+
                               |
                               ▼
                    +--------------------------+
                    |   «component»            |
                    |   PaymentService         |
                    |   ○ processPayment()     |
                    |   ◐ verifyTransaction()  |
                    +--------------------------+

           (All components read/write to:)

                    +--------------------------+
                    |   «artifact»             |
                    |   FoodOrderDB.sql        |
                    +--------------------------+
```

#### 3. Process View - Activity Diagram

```sql
                  [Client Request] --> [Web Server]
                         |
                         v
             +-------------------------+
             |  OrderService Thread    |
             |  - Receives new orders |
             +-------------------------+
                         |
                         v
             +-------------------------+
             | NotificationService     |    <-- Sends SMS/Push updates
             +-------------------------+
                         |
                         v
             +-------------------------+
             | PaymentProcessor Thread |
             | - Validates and executes|
             |   payment transactions  |
             +-------------------------+
                         |
                         v
             +-------------------------+
             | DeliveryAgentService    |  <-- Runs as a separate process
             +-------------------------+
```

#### 4. Physical View - Deployment Diagram

```sql
+------------------------------------------------------+
|                  <<device>>                          |
|               Client Device                          |
|------------------------------------------------------|
|  +-------------------------------------------------+ |
|  |              <<artifact>>                       | |
|  |         CustomerApp.apk / WebApp                | |
|  |- Used by customers to place orders              | |
|  |- Accesses services via HTTPS                    | |
|  +-------------------------------------------------+ |
+------------------------------------------------------+
                    ||
                    ||  HTTPS
                    \/
+------------------------------------------------------+
|                  <<device>>                          |
|               Load Balancer / API Gateway            |
|------------------------------------------------------|
|  +-------------------------------------------------+ |
|  |              <<artifact>>                       | |
|  |             GatewayService.jar                  | |
|  |- Routes requests to backend services             | |
|  |- Provides authentication, throttling, etc.       | |
|  +-------------------------------------------------+ |
+------------------------------------------------------+
                    ||
                    ||  Internal API Calls (REST/gRPC)
                    \/
+------------------------------------------------------+
|                   <<device>>                         |
|               Application Server / Microservices     |
|------------------------------------------------------|
|  +-------------------------------------------------+ |
|  |              <<artifact>>                       | |
|  |            OrderService.jar                     | |
|  |- Handles order placement, tracking              | |
|  +-------------------------------------------------+ |
|                                                      |
|  +-------------------------------------------------+ |
|  |              <<artifact>>                       | |
|  |           DeliveryService.jar                   | |
|  |- Manages delivery agents, status updates        | |
|  +-------------------------------------------------+ |
+------------------------------------------------------+
                    ||
                    ||  JDBC/SQL + In-memory Cache
                    \/
+------------------------------------------------------+
|                   <<device>>                         |
|                 Database Server                      |
|------------------------------------------------------|
|  +-------------------------------------------------+ |
|  |              <<artifact>>                       | |
|  |            DeliveryDB (MySQL)                   | |
|  |- Stores orders, users, delivery data            | |
|  +-------------------------------------------------+ |
|                                                      |
|  +-------------------------------------------------+ |
|  |              <<artifact>>                       | |
|  |               CacheStore (Redis)                | |
|  |- Temporary session and state cache              | |
|  +-------------------------------------------------+ |
+------------------------------------------------------+
                    /\
                    ||
                    ||  HTTPS / API Calls
+------------------------------------------------------+
|                  <<device>>                          |
|             Delivery Agent Mobile Device             |
|------------------------------------------------------|
|  +-------------------------------------------------+ |
|  |              <<artifact>>                       | |
|  |           DeliveryAgentApp.apk                  | |
|  |- Used by delivery agents to receive tasks       | |
|  |- Updates order status in real-time              | |
|  +-------------------------------------------------+ |
+------------------------------------------------------+

```

#### 5. Use Case Diagram

```sql
+-----------------------------------------+
|           Food Ordering System          |
|-----------------------------------------|
|                                         |
|  Customer                               |
|   ├── Browse Menu                       |
|   ├── Add to Cart                       |
|   ├── Place Order                       |
|   |     └── (include) Make Payment      |
|   ├── Track Delivery                    |
|   └── Give Feedback                     |
|                                         |
|  Restaurant Staff                       |
|   ├── Manage Menu Items                 |
|   ├── View Orders                       |
|   └── Update Order Status               |
|                                         |
|  Delivery Partner                       |
|   ├── View Delivery Requests            |
|   └── Update Delivery Status            |
|                                         |
|  Admin                                  |
|   ├── Manage Users                      |
|   ├── Generate Reports                  |
|   └── Manage System Settings            |
|                                         |
+-----------------------------------------+

+-----------------------------------------+
|           Food Ordering System          |
+-----------------------------------------+
|  [Browse Menu]                          |
|  [Add to Cart]                          |
|  [Place Order]                          | <-- include --> [Make Payment]
|  [Track Delivery]                       |
|  [Give Feedback]                        |
|  [Manage Menu Items]                    |
|  [View Orders]                          |
|  [Update Order Status]                  |
|  [View Delivery Requests]               |
|  [Update Delivery Status]               |
|  [Manage Users]                         |
|  [Generate Reports]                     |
|  [Manage System Settings]               |
+-----------------------------------------+
     ^            ^            ^       ^
    /              |            \     /
Customer   Restaurant Staff   Delivery Partner   Admin
```

## Module View

It focuses on the static structure of the system in terms of its modules and their relationships. A module is a logical unit of code (e.g., packages, namespaces, libraries, components) that performs a specific function or set of functions.

### Types

| Type          | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| Decomposition | Breaks the system into smaller functional units (like MVC layers). |
| Uses          | Shows how modules depend on or use services from other modules.    |
| Layered       | Organizes modules into layers (e.g., UI, Business, Data).          |

### Example

```sql
+-------------------------+
|      Presentation       |  --> UI Layer (Web, Mobile)
+-------------------------+
            |
            v
+-------------------------+
|   Application/Service   |  --> Business Logic
+-------------------------+
            |
            v
+-------------------------+
|      Domain Model       |  --> Business Entities and Rules
+-------------------------+
            |
            v
+-------------------------+
|    Infrastructure       |  --> Database, Email, Logging
+-------------------------+
```

## Component and Connector View

It describes the runtime architecture of a system. Unlike the Module View, which focuses on the static organization of code, the C&C view focuses on the dynamic behavior and interactions between components and connectors while the system is running.

### Components

| Element       | Description                                                                          |
| ------------- | ------------------------------------------------------------------------------------ |
| Component     | A unit with runtime behavior (e.g., web server, database, UI component)              |
| Connector     | The communication path or protocol between components (e.g., HTTP, RPC, message bus) |
| Interface     | Entry and exit points (e.g., API endpoints, event handlers)                          |
| Configuration | Arrangement of components and connectors in a system                                 |

### Example

```
           +---------------------+
           |     Web Browser     |
           +---------------------+
                     |
                     | HTTP Request/Response
                     v
           +---------------------+
           |    Web Server       |
           | (Nginx/Node.js)     |
           +---------------------+
                     |
       +-------------+-------------+
       |                           |
       v                           v
+----------------+       +---------------------+
| Order Service  |<----->| Notification Service |
+----------------+       +---------------------+
       |
       v
+----------------+
|  Payment Service|
+----------------+
       |
       v
+----------------+
|   Database      |
| (PostgreSQL)    |
+----------------+
```

## Allocaiton View

It maps software elements (modules/components) to external structures in the real-world environment, such as hardware, file systems, networks, or people (teams).

Where:

- The Module View deals with code structure,
- The C&C View deals with runtime behavior,
- The Allocation View deals with where and how the system is deployed or assigned.

**What Is the Allocation View?**
The Allocation View answers "Where does the software live and operate?" by showing:

- Which software artifacts run on which hardware (e.g., servers, devices).
- How the software maps to the file system (e.g., where logs/configs are stored).
- Which teams or roles are responsible for which components.

### Types

| Type                 | Description                                                                |
| -------------------- | -------------------------------------------------------------------------- |
| Deployment View      | Maps components/services to computing infrastructure (nodes, networks)     |
| Implementation View  | Maps code artifacts (e.g., files, packages) to file system or repositories |
| Work Assignment View | Maps software responsibilities to people, teams, or roles                  |

## Comparison

| Feature / Aspect          | Module View                                       | C\&C View (Component & Connector)                      | Allocation View                                          |
| ------------------------- | ------------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------- |
| Focus                     | Static organization of the system's code          | Runtime behavior and interactions                      | Mapping software to physical environment                 |
| Main Elements             | Modules, interfaces, dependencies                 | Components, connectors, interfaces                     | Nodes, artifacts, hardware, files, people                |
| Describes                 | How the system is decomposed into code units      | How components interact at runtime                     | Where and how software executes or is assigned           |
| Connectors                | Static relationships (e.g., "uses", "depends on") | Runtime connectors (e.g., HTTP, sockets, queues)       | Physical or logical bindings (e.g., to servers or teams) |
| Purpose                   | Organize codebase, support maintainability        | Understand runtime dynamics, enable interaction design | Support deployment, team coordination, resource planning |
| Typical Viewers           | Developers                                        | Architects, DevOps, Testers                            | DevOps, IT admins, Project Managers                      |
| Granularity               | Code-level                                        | Component or service-level                             | System-level or environment-level                        |
| Common Diagram Types      | UML Package/Class Diagrams, Layered Architecture  | UML Component Diagrams, Sequence Diagrams              | UML Deployment Diagrams, Infrastructure Diagrams         |
| Example Elements          | `OrderModule`, `AuthService`, `UserRepository`    | `OrderService`, `NotificationService`, HTTP API        | `AppServer1`, `DBInstance`, `FrontendTeam`               |
| Example Question Answered | “How is the code organized?”                      | “What talks to what at runtime?”                       | “Where is it deployed and who manages it?”               |

# Architecture Evaluation

Architecture Evaluation is a critical process used to determine whether the architecture of a system satisfies the necessary quality requirements.

## Evaluation Factors

Evaluation factors refer to the criteria or aspects that are considered during this evaluation.

1. **Quality Attributes**
2. **Business Goals Alignment** - The architecture must support business goals.
3. **Architectural Decisions** - Architecture evaluation factors in decisions made and trade-offs accepted.
4. **Stakeholder Concerns**
5. **Technical Risks**

## Architecture Trade-off Analysis Method

It is a scenario-based evaluation technique developed by the Software Engineering Institute (SEI). It helps stakeholders understand:

- Whether the architecture meets business and quality requirements.
- What trade-offs were made (e.g., security vs. performance).
- What risks or sensitivity points exist in the design.
- Where there may be non-obvious consequences of architectural decisions.

## Lightweight Architecture Evaluation

Lightweight Architecture Evaluation is a streamlined, low-cost method of evaluation which is especially useful in fast-paced environments where teams need quick feedback on architecture decisions.

It typically involves:

- Short sessions (from a few hours to a few days),
- Small groups of stakeholders,
- Focused discussions on key architectural decisions, concerns, and risks.

## Analysis Goal

### Completeness

Completeness means that all necessary architectural components and concerns are addressed in the design. There should be no missing elements required for functionality, quality attributes, or business requirements.

**Example:**

- The architecture includes login, transaction, and account management modules.
- But logging and auditing for transactions is missing.

### Consistency

Consistency means that architectural elements do not conflict with each other, and that design rules, patterns, and interfaces are applied uniformly across the system.

**Example:**

- In a microservices-based ecommerce platform
- Most services use RESTful APIs, but one service uses GraphQL without justification or documentation.

### Compatibility

Compatibility means that the architectural components can operate together within the system and with external systems, given their interfaces, platforms, technologies, and versions.

**Example:**

- A frontend written in React 18.
- A backend that depends on an old version of Node.js (v10), which doesn’t support some features needed by React 18.

### Correctness

Correctness means that the architectural design aligns with and supports the functional specifications. It ensures that:

- All use cases can be supported by the architecture.
- Data flow and control flow are accurately represented.
- Interfaces between components are properly defined and support required interactions.
- The system behavior is valid and predictable.

**Example:**

- Users can request a ride.
- Drivers receive nearby requests.
- Users and drivers see each other’s location in real time.
