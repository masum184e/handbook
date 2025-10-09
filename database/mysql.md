# Contents

- [Introduction](#introduction)
  - [Why Use MySQL](#why-use-mysql)
  - [Installation](#installation)
    - [Local Setup](#local-setup)
    - [Cloud Solutions](#cloud-solutions)
    - [Local vs Cloud Setup](#local-vs-cloud-setup)
  - [MySQL Workbench](#mysql-workbench)
    - [Features](#key-features-of-mysql-workbench)
    - [How to Use](#how-to-use-mysql-workbench)
    - [ER Diagram](#er-diagram-in-workbench)
  - [Connecting to a MySQL server](#connecting-to-a-mysql-server)
    - [Command Line](#connecting-via-command-line)
    - [MySQL Workbench](#how-to-use-mysql-workbench)
  - [MySQL client tools](#mysql-client-tools)
    - [MySQL CLI](#mysql-cli)
    - [MySQL GUI](#mysql-gui)
    - [MySQL CLI vs GUI](#mysql-cli-vs-gui)
  - [Core Concepts](#core-concepts)
- [Data Types](#data-types)
  - [Numeric](#numeric)
  - [String](#string)
  - [Date and Time](#date-and-time)
- [Constraints](#constraints)
  - [Primary Key](#primary-key)
  - [Foreign Key](#foreign-key)
  - [`NOT NULL`](#not-null)
  - [`UNIQUE`](#unique)
  - [`CHECK`](#check)
- [Working with Tables](#working-with-tables)
  - [Creating tables](#creating-tables)
  - [Viewing the table structure](#viewing-the-table-structure)
  - [Modifying tables](#modifying-tables)
  - [Dropping tables](#dropping-tables)
    - [Differences from `TRUNCATE TABLE`](#key-differences-from-truncate-table)
  - [Adding and Removing Constraints](#adding-and-removing-constraints)
- [SQL Statements](#sql-statements)
  - [Categories](#categories)
    - [DDL](#1-data-definition-language-ddl)
    - [DML](#2-data-manipulation-language-dml)
    - [DCL](#3-data-control-language-dcl)
  - [CRUD](#crud)
  - [Where](#where)
  - [Sorting](#sorting)
  - [LIMIT](#limit)
  - [Aliases](#aliases)
- [Advanced SQL Statements](#advanced-sql-statements)
  - [Aggregate Functions](#aggregate-functions)
  - [Grouping Data](#grouping-data)
  - [Filtering Groups](#filtering-groups)
  - [Join](#join)
    - [INNER JOIN](#inner-join)
    - [LEFT JOIN](#left-join)
    - [RIGHT JOIN](#right-join)
    - [FULL OUTER JOIN](#full-outer-join)
    - [Visual Summary](#visual-summary)
  - [Subquery (Nested Query)](#subquery-nested-query)
    - [Types of Subqueries](#types-of-subqueries)
    - [Subqueries in Different Clauses](#subqueries-in-different-clauses)
    - [Subquery vs Join](#subquery-vs-join)
  - [`UNION` in MySQL](#union-in-mysql)
  - [`INTERSECT` in MySQL](#intersect-in-mysql)
- [Indexes and Performance](#indexes-and-performance)
  - [How Indexes Work Internally](#how-indexes-work-internally)
  - [Types of Indexes](#types-of-indexes)
  - [Creating an Index](#creating-an-index)
  - [Covering Index](#covering-index)
  - [How Indexes Improve Performance](#how-indexes-improve-performance)
  - [Checking Index Usage](#checking-index-usage)
- [Stored Procedure](#stored-procedure)
  - [Creating a Stored Procedure](#creating-a-stored-procedure)
  - [A Simple Procedure (No Parameters)](#a-simple-procedure-no-parameters)
  - [Procedure with `IN` Parameter](#procedure-with-in-parameter)
  - [Procedure with `OUT` Parameter](#procedure-with-out-parameter)
  - [Procedure with `INOUT` Parameter](#procedure-with-inout-parameter)
  - [Managing Stored Procedures](#managing-stored-procedures)
  - [Error Handling Stored Procedures](#error-handling-stored-procedures)
- [Stored Function](#stored-function)
  - [Difference Between Stored Procedure and Stored Function](#difference-between-stored-procedure-and-stored-function)
  - [Differences Between Parameters in Procedures vs Functions](#differences-between-parameters-in-procedures-vs-functions)
  - [Syntax of Creating a Function](#syntax-of-creating-a-function)
  - [Simple Function (Square of a Number)](#simple-function-square-of-a-number)
  - [Managing Functions](#managing-functions)
- [Triggers](#triggers)
  - [Syntax for Creating a Trigger](#syntax-for-creating-a-trigger)
  - [BEFORE INSERT Trigger (data validation)](#before-insert-trigger-data-validation)
  - [AFTER INSERT Trigger (audit logging)](#after-insert-trigger-audit-logging)
  - [Managing Triggers](#managing-triggers)
  - [Common Use Cases for Triggers](#common-use-cases-for-triggers)
- [Events](#events)
  - [Enabling the Event Scheduler](#enabling-the-event-scheduler)
  - [Syntax of CREATE EVENT](#syntax-of-create-event)
  - [One-Time Event](#one-time-event)
  - [Recurring Event (Daily)](#recurring-event-daily)
  - [Event with Multiple Statements (BEGIN...END)](#event-with-multiple-statements-beginend)
  - [Managing Events](#managing-events)
- [Transaction](#transaction)
  - [Basic Transaction Commands](#basic-transaction-commands)
  - [Bank Transfer (Atomic Transaction)](#bank-transfer-atomic-transaction)
  - [Using `ROLLBACK`](#using-rollback)
  - [Using `SAVEPOINT`](#using-savepoint)
  - [Key Notes on Transaction](#key-notes-on-transaction)
- [ACID Properties](#acid-properties)
  - [Atomicity](#atomicity)
  - [Consistency](#consistency)
  - [Isolation](#isolation)
  - [Durability](#durability)
  - [Summary of ACID with Example](#summary-of-acid-with-example)
- [Isolation Levels](#isolation-levels)
  - [MySQL Isolation Levels](#mysql-isolation-levels)
    - [READ UNCOMMITTED](#read-uncommitted)
    - [READ COMMITTED](#read-committed)
    - [REPEATABLE READ (MySQL Default)](#repeatable-read-mysql-default)
    - [SERIALIZABLE](#serializable)
  - [How to Set Isolation Level in MySQL](#how-to-set-isolation-level-in-mysql)
- [Database Security](#database-security)
  - [User Management](#user-management)
  - [Granting Privileges](#granting-privileges)
  - [Securing Connections](#securing-connections)
    - [How SSL/TLS Works in MySQL](#how-ssltls-works-in-mysql)
    - [Enabling SSL/TLS in MySQL](#enabling-ssltls-in-mysql)
    - [Verifying SSL Connection](#verifying-ssl-connection)
  - [Best practices for securing MySQL databases](#best-practices-for-securing-mysql-databases)
- [Query Optimization](#query-optimization)
  - [Avoid Functions in WHERE Clause](#avoid-functions-in-where-clause)
  - [Use Query Caching (if available)](#use-query-caching-if-available)
  - [Avoid N+1 Query Problem](#avoid-n1-query-problem)
- [MySQL’s Full-Text Search Capabilities](#mysqls-full-text-search-capabilities)
  - [Searching with Full-Text Index](#searching-with-full-text-index)
    - [Natural Language Search](#natural-language-search)
    - [Boolean Mode Search](#boolean-mode-search)
    - [Query Expansion Mode](#query-expansion-mode)
- [Data Backup and Restoration](#data-backup-and-restoration)
  - [`mysqldump`](#mysqldump)
  - [Restoring from a Backup](#restoring-from-a-backup)
    - [Importing with `mysql` Command-Line](#importing-with-mysql-command-line)
    - [Importing with `SOURCE` Command](#importing-with-source-command)
    - [Importing via MySQL Workbench](#importing-via-mysql-workbench)
    - [Importing CSV Data](#importing-csv-data)
  - [Automating Backups](#automating-backups)
    - [Automating Backups on Linux (Cron Jobs)](#automating-backups-on-linux-cron-jobs)
    - [Automating Backups on Windows (Task Scheduler)](#automating-backups-on-windows-task-scheduler)
    - [Automating Full Server Backups](#automating-full-server-backups)
    - [Real-World Enhancements of Automatic Backups](#real-world-enhancements-of-automatic-backups)
- [Working with Large Datasets](#working-with-large-datasets)
  - [Partitioning](#partitioning)
    - [Types of Partitioning](#types-of-partitioning)
    - [Practical Example of Partitioning](#practical-example-of-partitioning)
- [Views](#views)
  - [Creating Views](#creating-views)
  - [Using Views](#using-views)
  - [Modifying and Dropping Views](#modifying-and-dropping-views)
- [Temporary Table](#temporary-table)
  - [Creating and Using a Temporary Table](#creating-and-using-a-temporary-table)
- [Common Table Expression](#common-table-expressions)
  - [Example of Simple CTE](#example-of-simple-cte)
  - [Example of Multiple CTEs](#example-of-multiple-ctes)
  - [Recursive CTEs](#recursive-ctes)
  - [CTE vs Subquery vs View](#cte-vs-subquery-vs-view)
- [JSON in MySQL](#json-in-mysql)
  - [Creating a Table with JSON Column](#creating-a-table-with-json-column)
  - [Inserting JSON Data](#inserting-json-data)
  - [Querying JSON Data](#querying-json-data)
  - [Searching Inside JSON](#searching-inside-json)
  - [Modifying JSON Data](#modifying-json-data)
  - [Advanced JSON Queries](#advanced-json-queries)
  - [Indexing JSON Data for Performance](#indexing-json-data-for-performance)
- [Replication](#replication)
  - [How MySQL Replication Works](#how-mysql-replication-works)
  - [Master-Slave Replication](#master-slave-replication)
  - [Multi-Source Replication](#multi-source-replication)
  - [Replication in the Cloud](#replication-in-the-cloud)
  - [Load Balancing](#load-balancing)
  - [High Availability](#high-availability)

# Introduction

MySQL is an open-source Relational Database Management System (RDBMS).
It is used to store, organize, and manage data in a structured way using tables (rows & columns).

- **Relational Database** → Data is stored in tables, and tables can be related to each other using primary keys and foreign keys.
- **SQL (Structured Query Language)** → MySQL uses SQL to interact with data (e.g., SELECT, INSERT, UPDATE, DELETE).
- **Open Source** → Free to use, with community and enterprise editions.
- **Cross-platform** → Works on Windows, Linux, macOS.
- **Widely used** → Powers many web applications like WordPress, Facebook (initially), YouTube, etc.
- **Client-server model** → MySQL server handles database operations while clients (applications, users) interact with it via SQL.
- **ACID compliance (when using InnoDB engine)** → Ensures data reliability and integrity in transactions.

## Why Use MySQL?

1. Reliability & Stability
   - MySQL has been used for decades in production systems.
   - Known for stable performance even with large datasets.
2. Ease of Use
   - Simple to install and configure.
   - SQL is a widely known language, so developers can quickly learn and use it.
3. Open Source & Cost-effective
   - Completely free to use (community edition).
   - Enterprise editions with support are also available from Oracle.
4. High Performance
   - Optimized for web applications that need to handle millions of queries daily.
   - Indexing, query optimization, and caching features improve speed.
5. Cross-Platform & Integration
   - Works with many programming languages: PHP, Python, Java, C#, etc.
   - Runs on all major operating systems.
6. Scalability
   - Can handle small projects (like a single-user application) as well as large, high-traffic websites.
7. Security
   - Built-in user authentication, SSL support, and privileges system.

## Installation

When starting with MySQL, you have two main options for installation:

1. Local Setup → Install MySQL on your personal computer/server.
2. Cloud-Based Solutions → Use MySQL as a managed service from cloud providers.

Both have their own use cases, so let’s explore them.

### Local Setup

- Download MySQL Installer
  - Visit MySQL official downloads.
  - Choose version: Community Edition (free, open source).
- Install MySQL Server
  - Run the installer.
  - Select "MySQL Server" and optionally tools like:
    - MySQL Workbench (GUI for database design/queries).
    - MySQL Shell (advanced CLI).
- Configure Server
  - Choose:
    - Port (default: 3306).
    - Authentication (strong password for root user).
    - Data directory (where your DB files will be stored).
- Verify Installation

  - Open terminal/command prompt and type:

    ```bash
    mysql -u root -p
    ```

  - Enter your password → You’re inside the MySQL shell.

### Cloud Solutions

Running MySQL on cloud platforms allows you to offload infrastructure management (hardware, networking, patching, backups) while focusing on database usage, scaling, and replication.

**Using MySQL on Amazon RDS**

1. Create RDS Instance
   - Go to AWS Console → RDS → Create database.
   - Select MySQL as the engine.
   - Choose free tier (for practice).
   - Set username (admin) and password.
2. Get Connection Endpoint

   - AWS gives you a host URL like:

     ```bash
     mydb-instance.abcd1234.us-east-1.rds.amazonaws.com
     ```

3. Connect to Cloud MySQL

   From local machine:

   ```
   mysql -h mydb-instance.abcd1234.us-east-1.rds.amazonaws.com -u admin -p
   ```

   Enter password → You are now connected to the cloud DB.

4. Run SQL Queries

### Local vs Cloud Setup

| Feature          | Local Setup                  | Cloud Setup                         |
| ---------------- | ---------------------------- | ----------------------------------- |
| **Installation** | Manual (installer, config)   | Ready-to-use (just create instance) |
| **Cost**         | Free (Community Edition)     | Pay-as-you-go (some free tiers)     |
| **Scalability**  | Limited by your machine      | Auto-scaling, global reach          |
| **Maintenance**  | You manage backups, upgrades | Managed by cloud provider           |
| **Best for**     | Learning, small projects     | Production apps, enterprise systems |

## MySQL Workbench

MySQL Workbench is a graphical user interface (GUI) tool provided by Oracle for interacting with MySQL databases. Instead of typing all SQL commands in the command line, It gives you a visual environment to:

- Create, modify, and manage databases.
- Write and run SQL queries.
- Design Entity Relationship (ER) diagrams.
- Manage users and permissions.
- Perform backup, restore, and server configuration tasks.

### Key Features of MySQL Workbench

1. SQL Development
   - Provides an SQL editor to write, execute, and debug queries.
   - Syntax highlighting, autocompletion, and query execution results in a table/grid view.
2. Data Modeling (ER Diagrams)
   - Lets you visually design schemas (tables, relationships).
   - Forward engineering → Convert diagrams into actual databases.
   - Reverse engineering → Generate diagrams from existing databases.
3. Database Administration
   - Manage server instances, users, and permissions.
   - Configure server settings.
   - Monitor server performance.
4. Data Migration
   - Helps in importing data from other databases (Oracle, MS SQL, PostgreSQL, etc.) into MySQL.
5. Backup & Restore
   - Provides tools to export/import databases (as `.sql` dump files).

### How to Use MySQL Workbench

#### Step 1: Open Workbench

- After installation, open MySQL Workbench.
- You’ll see the Home screen with a connection option.

#### Step 2: Connect to a Database

- Click “+” to add a connection.
- Enter:
  - Hostname (`localhost` for local setup).
  - Port (`3306` default).
  - Username (`root` or another user).
  - Password.
- Click Test Connection → If successful, save.

#### Step 3: Create a Database

- Open the SQL editor tab and run:

  ```sql
  CREATE DATABASE university;
  USE university;
  ```

#### Step 4: Create Tables

- Go to Schemas → Right-click Tables → Create Table.
- Fill in table columns, data types, and keys via form fields.

### ER Diagram in Workbench

Suppose we have two tables: students and courses.
In Workbench ERD (Entity Relationship Diagram):

- students table → contains student details.
- courses table → contains course details.
- Relationship → “Many-to-Many” (students can take many courses, courses can have many students).

In Workbench:

1. Go to Database → Reverse Engineer.
2. Select the `university` schema.
3. Workbench automatically generates an ER diagram showing tables and their relationships.

This visual representation helps in understanding schema structure quickly.

## Connecting to a MySQL server

The MySQL server runs as a service (daemon) in the background.
We (the users or applications) connect to it using:

- Command Line Interface (CLI)
- MySQL Workbench (GUI)
- Programming Languages (Python, PHP, Java, Node.js, etc.)

### Connecting via Command Line

The mysql client is a command-line program installed with MySQL.

```vasg
mysql -h hostname -u username -p
```

- `-h` → host (where MySQL is running, default is `localhost`).
- `-u` → username (default is `root`).
- `-p` → prompts for password.

**Local Connection:**

```bash
mysql -u root -p
```

It will ask for the root password. Once entered, you get the `mysql>` prompt.

Now you can run queries

**Remote Connection:**

```bash
mysql -h mydb-instance.abcd1234.us-east-1.rds.amazonaws.com -u admin -p
```

## MySQL client tools

When you install MySQL, you get access to different client tools that allow you to interact with the MySQL server.
Client tools are the interfaces (command-based or graphical) through which you:

- Connect to the server
- Run SQL queries
- Manage databases, tables, and users
- Perform backup, restore, and monitoring

There are two major categories of MySQL client tools:

1. CLI (Command-Line Interface) → mysql client, MySQL Shell
2. GUI (Graphical User Interface) → MySQL Workbench, third-party tools

### MySQL CLI

The CLI is a text-based interface.

- You type SQL queries and commands in a terminal.
- It comes bundled with MySQL installation.

**Advantages of CLI**

- Lightweight, no extra software required.
- Faster for experienced DB admins.
- Useful for automation (scripts, cron jobs).
- Works well on servers without GUI (Linux servers).

### MySQL GUI

The GUI provides a visual interface to interact with MySQL.
The most common tool is MySQL Workbench, but others include phpMyAdmin, HeidiSQL, and DBeaver.

**Advantages of GUI**

- Beginner-friendly (point-and-click).
- Visual schema design (ER diagrams).
- Query editor with syntax highlighting.
- Easy to view and edit data in tables (like Excel).
- Useful for teaching, prototyping, and visualizing relationships.

### MySQL CLI vs GUI

| Feature                | CLI (mysql client)                    | GUI (Workbench, phpMyAdmin, etc.)     |
| ---------------------- | ------------------------------------- | ------------------------------------- |
| **Interface**          | Text-based (terminal)                 | Graphical (windows, forms, diagrams)  |
| **Ease of Use**        | Steeper learning curve                | Beginner-friendly                     |
| **Speed**              | Faster for experts (typing commands)  | Slower for complex repetitive tasks   |
| **Data Visualization** | Minimal (raw text output)             | Rich (ER diagrams, grid views)        |
| **Automation**         | Easy via scripts and batch files      | Limited automation                    |
| **Use Cases**          | Server management, automation, DevOps | Learning SQL, data modeling, teaching |

## Core Concepts

- **Database:** A database is an organized collection of structured data, stored and managed so that it can be efficiently accessed, retrieved, and updated.

- **Table:** A table is a structured arrangement of data in rows and columns within a database. Each table usually represents a particular entity (e.g., Users, Products).

- **Row (Record):** A row represents a single entry or record in a table. It contains values for all the defined columns, describing one specific instance of the entity.

- **Column (Field):** A column defines an attribute of the entity, specifying the type of data each record must include. Each column has a name and a data type (e.g., INT, VARCHAR).

# Data Types

## Numeric

| **Data Type**      | **Description**                                                                |
| ------------------ | ------------------------------------------------------------------------------ |
| `TINYINT`          | Small integer, range: -128 to 127 or 0 to 255 (unsigned).                      |
| `SMALLINT`         | Larger range than TINYINT, range: -32,768 to 32,767.                           |
| `MEDIUMINT`        | Medium integer, range: -8,388,608 to 8,388,607.                                |
| `INT` or `INTEGER` | Standard integer, range: -2,147,483,648 to 2,147,483,647.                      |
| `BIGINT`           | Large integer, range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807. |
| `DECIMAL`          | Fixed-point numbers with exact precision, e.g., salaries or monetary values.   |
| `FLOAT`            | Floating-point numbers (approximate precision).                                |
| `DOUBLE`           | Larger floating-point numbers than FLOAT (also approximate).                   |
| `BIT`              | Used for storing bit values, e.g., binary data like `1010`.                    |

**In Terms of Capacity**

```
TINYINT < SMALLINT < MEDIUMINT < INT < BIGINT
```

**In Terms of Precision Handling**

```
FLOAT < DOUBLE < DECIMAL
```

## String

| **Data Type** | **Description**                                                           |
| ------------- | ------------------------------------------------------------------------- |
| `CHAR`        | Fixed-length string, up to 255 characters.                                |
| `VARCHAR`     | Variable-length string, up to 65,535 characters (depending on row size).  |
| `TINYTEXT`    | Short text, up to 255 characters.                                         |
| `MEDIUMTEXT`  | Medium-length text, up to 16,777,215 characters.                          |
| `TEXT`        | Long text data, used for large strings (e.g., articles or comments).      |
| `LONGTEXT`    | Very long text, up to 4,294,967,295 characters.                           |
| `BLOB`        | Binary Large Object, used for binary data like images or files.           |
| `ENUM`        | String object with predefined values, e.g., `'small', 'medium', 'large'`. |
| `SET`         | String object storing multiple predefined values (comma-separated).       |

**In Short**

```
CHAR → VARCHAR → TINYTEXT → TEXT → MEDIUMTEXT → LONGTEXT
```

## Date and Time

| **Data Type** | **Description**                                                                               |
| ------------- | --------------------------------------------------------------------------------------------- |
| `YEAR`        | Stores the year in 4-digit format, e.g., `2024`.                                              |
| `TIME`        | Stores time in `HH:MM:SS` format.                                                             |
| `DATE`        | Stores date in `YYYY-MM-DD` format.                                                           |
| `DATETIME`    | Stores both date and time in `YYYY-MM-DD HH:MM:SS` format.                                    |
| `TIMESTAMP`   | Similar to `DATETIME`, but it automatically updates with the current date/time when modified. |

# Constraints

Constraints are rules applied to table columns to enforce data integrity and consistency. They ensure that the data stored in a table adheres to certain rules.

## Primary Key

A Primary Key is a column (or set of columns) that uniquely identifies each row in a table.

- It must be unique (no duplicate values).
- It cannot contain NULL values.
- A table can have only one primary key, but it can consist of multiple columns (called a composite primary key).

**Why use it?**

- Ensures that every record is uniquely identifiable.
- Helps MySQL internally organize data efficiently.

By default, a primary key in MySQL is treated as both UNIQUE and NOT NULL.

**Colmn Level vs Table Level**
| Syntax | Level | Supports Composite Key? | Notes |
| ----------------------------------- | ------------ | ----------------------- | --------------------------------------------- |
| `column_name DATA_TYPE PRIMARY KEY` | Column-level | No | Simple and convenient for single-column keys |
| `PRIMARY KEY (column_name[, ...])` | Table-level | Yes | Required for multi-column keys; more flexible |

**Example:**

```sql
CREATE TABLE students (
    student_id INT NOT NULL,
    name VARCHAR(50),
    email VARCHAR(100),
    CONSTRAINT pk_student_id PRIMARY KEY (student_id)
);
```

- `id` is the primary key.
- Each `id` must be unique and cannot be null.
- Constraint name `pk_student_id` allows easy reference if we need to modify or drop it later.

## Foreign Key

A Foreign Key is a column (or combination of columns) that establishes a relationship between two tables.

- References the primary key (or unique key) of another table.
- Ensures referential integrity — you cannot insert a value in the child table if it doesn’t exist in the parent table.
- You can define what happens to child rows when the parent row is updated or deleted using:
  - `CASCADE`: Automatically updates/deletes child rows when the parent changes.
  - `SET NULL`: Sets the foreign key in child rows to `NULL` when the parent is deleted/updated.
  - `RESTRICT`: Prevents deletion or update of the parent row if child rows exist.

**Why use a Foreign Key?**

- Maintains consistency between related tables
- Prevents orphan records

**Single-Column Example**

```sql
CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id CHAR(10),
    course_name VARCHAR(100) NOT NULL,
    CONSTRAINT fk_student FOREIGN KEY (student_id)
        REFERENCES students(student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
```

- `student_id` in `enrollments` references `student_id` in `students`.
- `ON DELETE CASCADE` ensures that deleting a student also deletes their enrollments.

**Composite (Multi-Column) Foreign Key Example**

Suppose we have a `courses` table with `course_id` and `semester` as a composite primary key:

```sql
CREATE TABLE courses (
    course_id INT,
    semester VARCHAR(10),
    course_name VARCHAR(100),
    CONSTRAINT pk_course PRIMARY KEY (course_id, semester)
);

CREATE TABLE enrollments (
    student_id CHAR(10),
    course_id INT,
    semester VARCHAR(10),
    CONSTRAINT pk_enrollment PRIMARY KEY (student_id, course_id, semester),
    CONSTRAINT fk_course FOREIGN KEY (course_id, semester)
        REFERENCES courses(course_id, semester)
        ON DELETE SET NULL
        ON UPDATE RESTRICT
);
```

- Here, `(course_id, semester)` is a composite foreign key in `enrollments` referencing `courses`.
- `pk_course` is the primary key constraint on `(course_id, semester)` in `courses`.
- `pk_enrollment` is a composite primary key in `enrollments` on `(student_id, course_id, semester)`.
- Naming the `constraint (CONSTRAINT pk_name)` allows easier reference when modifying or dropping the key later.
- `ON DELETE SET NULL`: If a course is deleted, the corresponding `course_id` and `semester` in `enrollments` are set to `NULL`.
- `ON UPDATE RESTRICT`: Prevents updating the course’s `course_id` or `semester` if there are related enrollments.

## `NOT NULL`

The `NOT NULL` constraint ensures that a column cannot have a `NULL` value. It enforces that every row in the table must have a value for that column.

**Why use it?**

- Use Mandatory fields like `id`, `name`, `email` in a table.

**General Syntax**

```sql
CREATE TABLE table_name (
    column_name datatype NOT NULL
);
```

## `UNIQUE`

The `UNIQUE` constraint ensures that all values in a column (or a set of columns) are unique. Unlike the primary key, a table can have multiple `UNIQUE` constraints, and they allow `NULL`s (depending on DBMS).

**Why use it?**

- Fields that must not repeat, like `email` or `username`.

**General Syntax**

```sql
CREATE TABLE table_name (
    column_name datatype UNIQUE
);
```

- Multiple `UNIQUE` constraints can exist in a table.
- Composite Unique: `UNIQUE(column_1, column_2)`

## `CHECK`

The `CHECK` constraint ensures that values in a column satisfy a specific condition. This helps enforce business rules at the database level.

**Why use it?**

- To validate data before it’s inserted or updated.

**General Syntax**

```sql
CREATE TABLE table_name (
    column_name datatype CHECK (condition)
);
```

**Column-Level `CHECK`**

```sql
age INT CHECK (age >= 18),
```

**Table-Level `CHECK`**

```sql
CONSTRAINT chk_cgpa_age CHECK (cgpa >= 3.5 AND age >= 18)
```

- `CHECK` can be column-level (applies to a single column) or table-level (involving multiple columns).
- Helps maintain data integrity by preventing invalid entries.

# Working with Tables

## Creating tables

`CREATE TABLE` is an SQL statement used to create a new table in a database.
When you create a table, you define:

- Table name
- Column names
- Data types for each column
- Constraints (rules like `PRIMARY KEY`, `NOT NULL`, `UNIQUE`, `FOREIGN KEY`, etc.)

Once created, the table becomes a permanent structure in your database (until dropped).

**General Syntax**

```sql
CREATE TABLE table_name (
    column_name1 data_type constraint,
    column_name2 data_type constraint,
    ...
    table_constraints
);
```

- `table_name` → The name of your new table.
- `column_name` → Each column’s name.
- `data_type` → The kind of data the column will store (e.g., `INT`, `VARCHAR`, `DATE`, `DECIMAL`).
- `constraint` → Rules for the column (e.g., `NOT NULL`, `UNIQUE`, `PRIMARY KEY`).
- `table_constraints` → Constraints applied to the table as a whole (e.g., a `PRIMARY KEY` defined at the end).

**Example**

```sql
CREATE TABLE students (
    student_id CHAR(10) PRIMARY KEY,         -- Unique ID like 'STU2025001'
    name VARCHAR(100) NOT NULL,              -- Student name
    email VARCHAR(255) UNIQUE NOT NULL,      -- Unique email address
    date_of_birth DATE,                      -- Date of birth
    enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auto-filled when record created
    gpa DECIMAL(3,2) CHECK (gpa >= 0.00 AND gpa <= 4.00) -- Must be between 0 and 4
);
```

1. `student_id CHAR(10) PRIMARY KEY`
   - `CHAR(10)` → Fixed length string of exactly 10 characters.
   - `PRIMARY KEY` → Ensures each `student_id` is unique and not null.
2. `name VARCHAR(100) NOT NULL`
   - `VARCHAR(100)` → Variable-length text up to 100 characters.
   - `NOT NULL` → Cannot be left empty.
3. `email VARCHAR(255) UNIQUE NOT NULL`
   - `UNIQUE` → No two students can have the same email.
   - `NOT NULL` → Must always have an email.
4. `date_of_birth DATE`
   - Stores date values (no time).
5. `enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP`
   - `TIMESTAMP` → Date and time.
   - `DEFAULT CURRENT_TIMESTAMP` → Automatically stores the current date & time when inserted.
6. `gpa DECIMAL(3,2) CHECK (gpa >= 0.00 AND gpa <= 4.00)`
   - `DECIMAL(3,2)` → Number with up to 3 digits, 2 of them after the decimal (e.g., `3.75`).
   - `CHECK` → Ensures GPA is within 0.00 to 4.00.

## Viewing the table structure

```sql
DESCRIBE students;
```

## Modifying tables

`ALTER TABLE` is an SQL command used to modify an existing table’s structure without dropping and recreating it.
It allows you to:

- Add new columns
- Modify existing columns
- Rename columns
- Drop columns
- Add or remove constraints
- Rename the table itself

### General Syntax

```sql
ALTER TABLE table_name
action;
```

Where `action` could be:

- `ADD column_name data_type constraints`
- `DROP COLUMN column_name`
- `ALTER COLUMN column_name TYPE new_data_type`
- `RENAME COLUMN old_name TO new_name`
- `ADD CONSTRAINT constraint_name constraint_definition`
- `DROP CONSTRAINT constraint_name`
- `RENAME TO new_table_name`

## Dropping tables

`DROP TABLE` is an SQL command used to completely delete a table from a database.
When executed:

- The table’s structure is removed.
- All data in the table is permanently deleted.
- Any indexes, constraints, and triggers related to the table are also deleted.
- Important: This action cannot be undone (unless you have a backup).

### General Syntax

```sql
DROP TABLE table_name; -- single
DROP TABLE table1, table2, ...; -- multiple
```

If you try to drop a table that doesn’t exist, some databases throw an error.
To avoid that:

```sql
DROP TABLE IF EXISTS students;
```

If another table has a foreign key referencing the table you’re trying to drop, most databases will block the operation.
In PostgreSQL, you can force it with CASCADE:

```sql
DROP TABLE students CASCADE;
```

- Drops `students` and all dependent objects (foreign keys, views, etc.).
- Be very careful — `CASCADE` can remove more than you expect.

### Key Differences from `TRUNCATE TABLE`

| **DROP TABLE**                                  | **TRUNCATE TABLE**                       |
| ----------------------------------------------- | ---------------------------------------- |
| Deletes table structure & data                  | Deletes only data, keeps table structure |
| Removes indexes, constraints                    | Keeps indexes, constraints               |
| Cannot be rolled back (unless in a transaction) | Often can be rolled back in transactions |
| Requires re-creating table to use again         | Table is ready to use after truncating   |

## Adding and Removing Constraints

Constraints are rules applied to columns or tables to ensure data integrity and accuracy.

Common constraints include:

- `PRIMARY KEY` → Uniquely identifies each row.
- `FOREIGN KEY` → Links rows to another table.
- `UNIQUE` → Ensures all values in a column are different.
- `NOT NULL` → Prevents null values.
- `CHECK` → Ensures values meet a condition.
- `DEFAULT` → Sets a default value for a column.

### Adding Constraints with `ALTER TABLE`

#### Adding a PRIMARY KEY

```sql
ALTER TABLE table_name
ADD CONSTRAINT pk_constraint_name PRIMARY KEY (column_name);
```

- `pk_constraint_name` → Name of the primary key constraint.
- `(column_name)` → Column(s) used for the primary key.
- Column must be NOT NULL and unique.

#### Adding a FOREIGN KEY

```sql
ALTER TABLE table_name
ADD CONSTRAINT fk_constraint_name FOREIGN KEY (column_name)
REFERENCES parent_table(parent_column)
[ON DELETE CASCADE]
[ON UPDATE CASCADE];
```

- `fk_constraint_name` → Name of the foreign key.
- Ensures values in the column exist in the parent table.
- Optional `ON DELETE` / `ON UPDATE` actions enforce cascading behavior.

#### Adding a UNIQUE Constraint

```sql
ALTER TABLE table_name
ADD CONSTRAINT uq_constraint_name UNIQUE (column_name);
```

- Guarantees all values in the column are distinct.

#### Adding a CHECK Constraint

```sql
ALTER TABLE table_name
ADD CONSTRAINT chk_constraint_name CHECK (condition);
```

- Ensures column values meet a defined condition.

#### DEFAULT Constraint

```sql
ALTER TABLE table_name
ALTER COLUMN column_name SET DEFAULT default_value;
```

- Assigns a default value when none is provided.

### Removing Constraints

```sql
ALTER TABLE table_name
DROP CONSTRAINT constraint_name;
```

### How to Find Constraint Names

Before removing a constraint, you must know its exact name.

```sql
\d Students; -- PostgreSQL
SHOW CREATE TABLE students; -- MySQL
```

- Displays the full `CREATE TABLE` statement for the `students` table.
- Includes all defined constraints (with their names).

# SQL Statements

## Categories

### 1. Data Definition Language (DDL)

DDL statements define and modify the structure of a database.

- CREATE
- ALTER
- DROP

### 2. Data Manipulation Language (DML)

DML statements manipulate data stored in tables.

- INSERT
- SELECT
- UPDATE
- DELETE

### 3. Data Control Language (DCL)

DCL manages access to data.

- GRANT
- REVOKE

## CRUD

### Creation

```sql
INSERT INTO table_name (columns) VALUES (values);
```

- Column and value order should be same
- It's not mandatory to follow the order of column as same as the order of column during definition, just maintain that it's follow order in sql command
- Any value that goes into a `VARCHAR`, `CHAR`, `DATE` or `TEXT` column has single quotes
- You can skip column names but values order should be same as column and can't leave any column
- For multiple insertion separate all tuple with comma
- You can insert data only in specified columns by skipping other column name in sql command

### READ

```sql
SELECT */column_name FROM table_name;
```

- `*` return all column

### UPDATE

1. **Updating a Single Column for a Single Record:**

   You can use a simple UPDATE statement to modify a single column for a single record:

   ```sql
   UPDATE table_name
   SET column_name = value
   WHERE column_name = value;
   ```

2. **Updating Multiple Columns for a Single Record:**

   You can update multiple columns at once by separating each column-value pair with a comma:

   ```sql
   UPDATE table_name
   SET column_name_1 = value_1, column_name_2 = value_2
   WHERE condition;
   ```

3. **Updating Multiple Records with a Single Column Using CASE:**

   If you want to update multiple records conditionally, based on specific criteria, you can use `CASE` within the `UPDATE` statement. Note that the `CASE` expression is used to modify a single column based on conditions.

   ```sql
   UPDATE table_name
   SET column_name = CASE
                       WHEN condition_1 THEN new_value_1
                       WHEN condition_2 THEN new_value_2
                       ELSE column_name
                     END
   WHERE some_condition;
   ```

   This `CASE` statement allows you to conditionally assign new values to a column based on multiple conditions, but remember, only one column can be updated in this case.

### DELETE

```sql
DELETE FROM table_name WHERE column_name=value;
```

- `WHERE` is necessary otherwise all records will be delete

## `WHERE`

Apply the most restrictive conditions first in the `WHERE` clause to minimize the dataset as early as possible.

It is used in SQL to filter records from a table based on specific conditions.

```sql
WHERE column_name operator 'value';
```

### Operators

**1. Comparison Operators**

- `=`: Equal to
- `!=` or `<>`: Not equal to
- `>`: Greater than
- `<`: Less than
- `>=`: Greater than or equal to
- `<=`: Less than or equal to

**2. Logical Operators**

- `AND`: Combines multiple conditions; all must be true.
- `OR`: Combines multiple conditions; at least one must be true.
- `NOT`: Reverses the result of a condition.

**3. Wildcard Operators**

- `LIKE`: Matches patterns (e.g., `%` for any sequence of characters).
- `IN`: Matches a list of values.
- `BETWEEN`: Checks if a value is within a range.

**4. NULL Check**

- `IS NULL`: Checks if a value is `NULL`.
- `IS NOT NULL`: Checks if a value is not `NULL`.

## Sorting

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1 [ASC|DESC], column2 [ASC|DESC], ...;
```

## LIMIT

```sql
SELECT column1, column2, ...
FROM table_name
LIMIT [offset,] row_count;
```

- `row_count`: The maximum number of rows to return.
- `offset` (optional): The number of rows to skip before starting to return rows.

## Aliases

It provide temporary names for columns or tables in a query to make them more readable or easier to reference. These aliases exist only for the duration of the query and do not affect the actual database schema.

```sql
SELECT column_name AS alias_column_name
FROM table_name AS alias_table_name;
```

Just put the alias name after actual name by following a `AS`.

# Advanced SQL Statements

SQL processes queries in this logical order:

1. `FROM` → get the data sources.
2. `WHERE` → filter individual rows.
3. `GROUP BY` → group rows.
4. `HAVING` → filter groups.
5. `SELECT` → calculate aggregates and select columns.
6. `ORDER BY` → sort the result set.
7. `LIMIT` / `OFFSET` (or `FETCH FIRST N ROWS`) → return only a subset of rows.

## Aggregate Functions

Aggregate functions in SQL are functions that perform calculations on multiple rows of data and return a single value.

They are often used with the `GROUP BY` clause to perform calculations on grouped data.

### Common Aggregate Functions

| Function  | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| `COUNT()` | Counts the number of rows (or non-NULL values if column is specified) |
| `SUM()`   | Calculates the total of a numeric column                              |
| `AVG()`   | Calculates the average of a numeric column                            |
| `MIN()`   | Finds the smallest value in a column                                  |
| `MAX()`   | Finds the largest value in a column                                   |

### General Syntax

```sql
SELECT AGGREGATE_FUNCTION(column_name)
FROM table_name
WHERE condition;
```

- Can be combined with `GROUP BY` to apply per group.
- Can be combined with `HAVING` to filter groups based on aggregated values.

### Example

| order_id | customer_id | product  | quantity | price | order_date |
| -------- | ----------- | -------- | -------- | ----- | ---------- |
| 1        | C001        | Laptop   | 1        | 1000  | 2025-08-01 |
| 2        | C002        | Mouse    | 2        | 25    | 2025-08-01 |
| 3        | C001        | Keyboard | 1        | 45    | 2025-08-02 |
| 4        | C003        | Laptop   | 1        | 950   | 2025-08-02 |
| 5        | C002        | Mouse    | 3        | 25    | 2025-08-03 |

**Problem:** For each customer, how many orders have they placed, and how many total items have they bought?

**Solution:**

```sql
SELECT customer_id,
       COUNT(*) AS total_orders,
       SUM(quantity) AS total_items
FROM orders
GROUP BY customer_id;
```

Output

| customer_id | total_orders | total_items |
| ----------- | ------------ | ----------- |
| C001        | 2            | 2           |
| C002        | 2            | 5           |
| C003        | 1            | 1           |

- Aggregate functions always return one value per group.
- You cannot pass multiple columns into a single aggregate directly.
- Use `CASE` expressions inside aggregates for conditional calculations.

**Total Revenue per Customer**

```sql
SELECT customer_id,
       SUM(quantity * price) AS total_revenue
FROM orders
GROUP BY customer_id;
```

**Count Products Separately**

```sql
SELECT customer_id,
       SUM(CASE WHEN product = 'Laptop' THEN quantity ELSE 0 END) AS total_laptops,
       SUM(CASE WHEN product = 'Mouse' THEN quantity ELSE 0 END) AS total_mice
FROM orders
GROUP BY customer_id;
```

## Grouping Data

`GROUP BY` in SQL is used to arrange identical data into groups so you can apply aggregate functions (like `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) on each group separately.

Think of it as saying: Take all the rows, group them based on this column (or set of columns), and then summarize each group.

### General Syntax

```sql
SELECT column1, AGGREGATE_FUNCTION(column2)
FROM table_name
WHERE condition
GROUP BY column1;
```

- Every column in `SELECT` that is not inside an aggregate function must be listed in `GROUP BY`.
- `GROUP BY` comes after `WHERE` but before `HAVING` and `ORDER BY`.

### Example

| order_id | customer_id | product  | quantity | price | order_date |
| -------- | ----------- | -------- | -------- | ----- | ---------- |
| 1        | C001        | Laptop   | 1        | 1000  | 2025-08-01 |
| 2        | C002        | Mouse    | 2        | 25    | 2025-08-01 |
| 3        | C001        | Keyboard | 1        | 45    | 2025-08-02 |
| 4        | C003        | Laptop   | 1        | 950   | 2025-08-02 |
| 5        | C002        | Mouse    | 3        | 25    | 2025-08-03 |

```sql
SELECT customer_id, COUNT(*) AS total_orders
FROM orders
GROUP BY customer_id;
```

Output:

| customer_id | total_orders |
| ----------- | ------------ |
| C001        | 2            |
| C002        | 2            |
| C003        | 1            |

- `GROUP BY customer_id` → All rows with the same `customer_id` are combined into one group.
- `COUNT(*)` counts how many orders are in each group

### Key Points to Remember for `GROUP BY`

- Use `GROUP BY` when you want one row per group instead of one row per record.
- All non-aggregated columns in `SELECT` must be in `GROUP BY`.
- `HAVING` is for group-level filtering; `WHERE` is for row-level filtering.
- You can group by multiple columns or expressions.

## Filtering Groups

`HAVING` is used to filter groups after aggregation has happened. It works with `GROUP BY` and aggregate functions like `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`. `WHERE` filters rows before grouping, while `HAVING` filters aggregated results after grouping.

### Syntax of `HAVING`

```sql
SELECT column1, AGGREGATE_FUNCTION(column2)
FROM table_name
WHERE row_condition
GROUP BY column1
HAVING aggregate_condition
ORDER BY column1;
```

### Example of `HAVING`

**Why not use WHERE?**

Let’s say we want to find customers who ordered more than 2 items total.

This fails:

```sql
SELECT customer_id, SUM(quantity)
FROM orders
WHERE SUM(quantity) > 2   -- ❌ INVALID: WHERE cannot use aggregates
GROUP BY customer_id;
```

Because SUM(quantity) doesn’t exist until after grouping.

This works:

```sql
SELECT customer_id, SUM(quantity) AS total_items
FROM orders
GROUP BY customer_id
HAVING SUM(quantity) > 2;
```

Output:

| customer_id | total_items |
| ----------- | ----------- |
| C002        | 5           |

**Explanation**

1. Group orders by customer_id.
2. Calculate SUM(quantity) for each group.
3. Keep only groups where SUM(quantity) > 2.

### `HAVING` without `GROUP BY`

You can use `HAVING` without `GROUP BY`. In that case, it treats the entire table as one group.

Example: Find if total sales exceed 2000:

```sql
SELECT SUM(quantity * price) AS total_sales
FROM orders
HAVING SUM(quantity * price) > 2000;
```

It will show `total_sales` is `2120`..

### Multiple Conditions in `HAVING`

You can filter on more than one aggregate condition.

Example: Customers who ordered more than 2 items and placed at least 2 orders:

```sql
SELECT customer_id,
       COUNT(order_id) AS order_count,
       SUM(quantity) AS total_items
FROM orders
GROUP BY customer_id
HAVING SUM(quantity) > 2
   AND COUNT(order_id) >= 2;
```

### `WHERE` vs `HAVING`

| Feature            | WHERE           | HAVING         |
| ------------------ | --------------- | -------------- |
| Filters **rows**   | ✅ Yes          | ❌ No          |
| Filters **groups** | ❌ No           | ✅ Yes         |
| Can use aggregates | ❌ No           | ✅ Yes         |
| Executes           | Before grouping | After grouping |

## Join

A JOIN combines rows from two or more tables based on a related column (usually a foreign key relationship).

You tell SQL:

Match rows from these tables where a specific condition is true, and return the combined data.

### Types of Joins

| Join Type           | Returns…                                                                              |
| ------------------- | ------------------------------------------------------------------------------------- |
| **INNER JOIN**      | Only rows where there’s a match in **both** tables                                    |
| **LEFT JOIN**       | All rows from the **left** table, plus matched rows from the right (NULL if no match) |
| **RIGHT JOIN**      | All rows from the **right** table, plus matched rows from the left (NULL if no match) |
| **FULL OUTER JOIN** | All rows from **both** tables, matched where possible, NULL where no match            |

### Example Tables for Join

`customers`
| customer_id | name | country |
| ------------ | ------- | ------- |
| 1 | Alice | USA |
| 2 | Bob | UK |
| 3 | Charlie | Canada |
| 4 | Diana | USA |

`orders`
| order_id | customer_id | product | amount |
| --------- | ------------ | ---------- | ------ |
| 101 | 1 | Laptop | 1200 |
| 102 | 2 | Mouse | 25 |
| 103 | 1 | Keyboard | 45 |
| 104 | 3 | Monitor | 200 |
| 105 | 5 | Desk Chair | 150 |

Use the smallest dataset first.

### INNER JOIN

Returns only customers who have orders.

```sql
SELECT c.customer_id, c.name, o.product, o.amount
FROM customers c
INNER JOIN orders o
    ON c.customer_id = o.customer_id;
```

| customer_id | name    | product  | amount |
| ----------- | ------- | -------- | ------ |
| 1           | Alice   | Laptop   | 1200   |
| 1           | Alice   | Keyboard | 45     |
| 2           | Bob     | Mouse    | 25     |
| 3           | Charlie | Monitor  | 200    |

- `INNER JOIN` only includes rows where `customer_id` exists in both `customers` and `orders`.
- Diana is excluded (no order), and order 105 is excluded (customer_id=5 not in customers).

### LEFT JOIN

Returns all customers, plus their orders if any.

```sql
SELECT c.customer_id, c.name, o.product, o.amount
FROM customers c
LEFT JOIN orders o
    ON c.customer_id = o.customer_id;
```

| customer_id | name    | product  | amount |
| ----------- | ------- | -------- | ------ |
| 1           | Alice   | Laptop   | 1200   |
| 1           | Alice   | Keyboard | 45     |
| 2           | Bob     | Mouse    | 25     |
| 3           | Charlie | Monitor  | 200    |
| 4           | Diana   | NULL     | NULL   |

- Diana shows up with `NULL` values for `product` and `amount` because she has no orders.
- This is useful when you want all left-side records regardless of matches.

### RIGHT JOIN

Returns all orders, plus customer details if any.

```sql
SELECT c.customer_id, c.name, o.product, o.amount
FROM customers c
RIGHT JOIN orders o
    ON c.customer_id = o.customer_id;
```

| customer_id | name    | product    | amount |
| ----------- | ------- | ---------- | ------ |
| 1           | Alice   | Laptop     | 1200   |
| 1           | Alice   | Keyboard   | 45     |
| 2           | Bob     | Mouse      | 25     |
| 3           | Charlie | Monitor    | 200    |
| NULL        | NULL    | Desk Chair | 150    |

- Order 105 appears, but since `customer_id=5` doesn’t exist in `customers`, customer details are NULL.
- This is essentially the mirror of `LEFT JOIN`.

### FULL OUTER JOIN

Returns all customers and all orders, matched where possible.

```sql
SELECT c.customer_id, c.name, o.product, o.amount
FROM customers c
FULL OUTER JOIN orders o
    ON c.customer_id = o.customer_id;
```

| customer_id | name    | product    | amount |
| ----------- | ------- | ---------- | ------ |
| 1           | Alice   | Laptop     | 1200   |
| 1           | Alice   | Keyboard   | 45     |
| 2           | Bob     | Mouse      | 25     |
| 3           | Charlie | Monitor    | 200    |
| 4           | Diana   | NULL       | NULL   |
| NULL        | NULL    | Desk Chair | 150    |

- Combines the results of `LEFT JOIN` and `RIGHT JOIN`.
- Shows unmatched customers (like Diana) and unmatched orders (like Desk Chair).

###

Always use explicit `JOIN` conditions, not implicit joins via the `WHERE` clause.

```sql
-- Avoid implicit join in WHERE clause:
SELECT orders.order_id, customers.customer_name
FROM orders, customers
WHERE orders.customer_id = customers.customer_id;

-- Use explicit JOIN instead:
SELECT orders.order_id, customers.customer_name
FROM orders
JOIN customers ON orders.customer_id = customers.customer_id;
```

Implicit join will return a Cartesian product, meaning every order will be combined with every customer, which could lead to a massive number of rows in the result set if the tables are large.

### Visual Summary

```sql
 INNER JOIN:        LEFT JOIN:         RIGHT JOIN:        FULL OUTER JOIN:

  A ∩ B             A ⊃ (A ∩ B)        (A ∩ B) ⊂ B        A ∪ B
```

- **INNER JOIN** → Only the overlap
- **LEFT JOIN** → Everything from left table + matches
- **RIGHT JOIN** → Everything from right table + matches
- **FULL OUTER JOIN** → Everything from both tabl

## Subquery (Nested Query)

A Subquery is a query inside another query.

- It is enclosed in parentheses `( )`.
- It can appear in the `SELECT`, `FROM`, `WHERE`, or `HAVING` clauses.
- The main query (outer query) uses the result of the subquery (inner query).

**When to Use Subqueries?**

- To break complex problems into smaller, manageable queries.
- When joins are not straightforward.
- To check existence (EXISTS), compare aggregates, or filter with conditions.

### Types of Subqueries

#### Single-row Subquery

- Returns only one row.
- Usually used with comparison operators: `=`, `<`, `>`, `<=`, `>=`, `<>`.

**Example:**

Find students who have the same department as Alice.

```sql
SELECT student_name
FROM Students
WHERE department_id = (
    SELECT department_id
    FROM Students
    WHERE student_name = 'Alice'
);
```

- Inner query: Finds Alice’s `department_id`.
- Outer query: Returns all students in that department.

#### Multi-row Subquery

- Returns multiple rows.
- Used with operators like `IN`, `ANY`, `ALL`.

**Example:**

Find students enrolled in any course in the Science department

```sql
SELECT student_name
FROM Students
WHERE student_id IN (
    SELECT student_id
    FROM Enrollments
    WHERE course_id IN (
        SELECT course_id
        FROM Courses
        WHERE department_id = (
            SELECT department_id
            FROM Departments
            WHERE department_name = 'Science'
        )
    )
);
```

- Inner-most query: Gets the `department_id` of "Science".
- Next query: Gets all `course_id` belonging to "Science".
- Next query: Gets `student_id` of students enrolled in those courses.
- Outer query: Finds student names from `Students`.

#### Correlated Subquery

- Inner query depends on the outer query.
- Runs once for each row of the outer query.

**Example:**

Find students who are enrolled in more than one course.

```sql
SELECT s.student_name
FROM Students s
WHERE (
    SELECT COUNT(*)
    FROM Enrollments e
    WHERE e.student_id = s.student_id
) > 1;
```

- For each student in `Students`, the subquery counts how many courses they are enrolled in.
- Outer query selects only those with count > 1.

### Subqueries in Different Clauses

1. In `SELECT` clause (Scalar Subquery)

   ```sql
   SELECT student_name,
       (SELECT department_name
        FROM departments d
        WHERE d.department_id = s.department_id) AS dept_name
   FROM students s;
   ```

   Adds department name directly in the result without a join.

2. In `FROM` clause (Derived Table / Inline View)

   ```sql
   SELECT dept_id, COUNT(*) AS total_students
   FROM (
       SELECT department_id AS dept_id
       FROM students
   ) AS temp
   GROUP BY dept_id;
   ```

   Subquery acts like a temporary table (`temp`).

3. In `HAVING` clause

   ```sql
   SELECT course_id, COUNT(student_id) AS total_enrolled
   FROM enrollments
   GROUP BY course_id
   HAVING COUNT(student_id) > (
       SELECT AVG(total)
       FROM (
           SELECT COUNT(student_id) AS total
           FROM enrollments
           GROUP BY course_id
       ) AS sub
   );
   ```

   Finds courses where enrollment is greater than the average enrollment across all courses.

### Subquery vs Join

Subqueries (especially in the `WHERE` clause) can often be inefficient, especially if they are correlated subqueries (i.e., where the subquery references columns from the outer query). Whenever possible, replace subqueries with `JOIN` or `EXISTS` clauses.

- **Subquery**: More readable for step-by-step logic, but sometimes slower.
- **Join**: Usually faster for large datasets, but can be harder to read.

Example: Both return students enrolled in “Math”:

**Using Subquery:**

```sql
SELECT student_name
FROM Students
WHERE student_id IN (
    SELECT student_id
    FROM Enrollments e
    JOIN Courses c ON e.course_id = c.course_id
    WHERE c.course_name = 'Math'
);
```

Using Join:

```sql
SELECT DISTINCT s.student_name
FROM Students s
JOIN Enrollments e ON s.student_id = e.student_id
JOIN Courses c ON e.course_id = c.course_id
WHERE c.course_name = 'Math';
```

## `UNION` in MySQL

The `UNION` operator is used to combine the results of two or more `SELECT` queries into a single result set.

**Rules of `UNION`:**

1. Each `SELECT` must have the same number of columns.
2. The data types of corresponding columns must be compatible.
3. By default, `UNION` removes duplicate rows.
4. Use `UNION ALL` if you want to keep duplicates.

### Example of `UNION`

```sql
-- Students table
CREATE TABLE Students (
    student_id INT,
    name VARCHAR(100),
    email VARCHAR(100)
);

-- Teachers table
CREATE TABLE Teachers (
    teacher_id INT,
    name VARCHAR(100),
    email VARCHAR(100)
);

-- Query using UNION
SELECT name, email FROM Students
UNION
SELECT name, email FROM Teachers;
```

- Combines student and teacher contacts into one list.
- If a student and teacher share the same email, it will appear only once.

**Avoid Using OR in `WHERE` Clauses**

`OR` can cause MySQL to perform more work than necessary, especially if it causes full table scans. When possible, try to rewrite the query to avoid `OR`.

```sql
-- Avoid using OR in WHERE clause:
SELECT order_id, total_amount FROM orders WHERE total_amount < 100 OR total_amount > 500;

-- Rewrite the query with a UNION:
SELECT order_id, total_amount FROM orders WHERE total_amount < 100
UNION
SELECT order_id, total_amount FROM orders WHERE total_amount > 500;
```

**Example with `UNION ALL`:**

```sql
SELECT name, email FROM Students
UNION ALL
SELECT name, email FROM Teachers;
```

Same as above, but duplicates are kept.

## `INTERSECT` in MySQL

Unlike some databases (like PostgreSQL, Oracle, SQL Server), MySQL does NOT support `INTERSECT` directly.

But we can simulate it using `INNER JOIN` or `IN` clause.

### Example of `INTERSECT`

```sql
-- Using INNER JOIN
SELECT s.name, s.email
FROM students s
INNER JOIN teachers t ON s.email = t.email;
```

OR using subquery:

```sql
SELECT name, email FROM Students
WHERE email IN (SELECT email FROM Teachers);
```

- Finds records that exist in both tables (intersection).
- Works like `INTERSECT`.

### Comparing `UNION` vs `INTERSECT`

| Feature               | UNION               | INTERSECT (simulated in MySQL)        |
| --------------------- | ------------------- | ------------------------------------- |
| Combines rows         | ✅ Yes              | ❌ No (filters only common rows)      |
| Removes duplicates    | ✅ By default       | ✅ Naturally (since only common rows) |
| Keeps duplicates      | ✅ With `UNION ALL` | ❌ Not applicable                     |
| Availability in MySQL | ✅ Native support   | ❌ Must simulate using `JOIN` or `IN` |

### Example of `UNION` and `INTERSECT`

Suppose we have two mailing lists:

- `event_registrations` (people who registered for an event).
- `newsletter_subscribers` (people who subscribed to the newsletter).

1. People in either list (UNION):
   ```sql
   SELECT email FROM event_registrations
   UNION
   SELECT email FROM newsletter_subscribers;
   ```
2. People in both lists (INTERSECT):
   ```sql
   SELECT email FROM event_registrations
   WHERE email IN (SELECT email FROM newsletter_subscribers);
   ```

- `UNION` gives everyone we can contact.
- `INTERSECT` gives our most engaged people (registered + subscribed).

# Indexes and Performance

An index in a database is like the index of a book — instead of reading the whole book to find a topic, you can go directly to the page numbers listed.

An Index is a database object that improves the speed of data retrieval (`SELECT` queries) but can slow down `INSERT`, `UPDATE`, and `DELETE` operations because indexes must also be updated.

- Index columns that are frequently used in `WHERE`, `JOIN`, `ORDER BY`, and `GROUP BY` clauses.

In SQL:

- An index is a data structure that stores pointers to rows in a table, organized to make lookups faster.
- Without an index, SQL must perform a full table scan (check every row).
- With an index, SQL can jump directly to the matching rows.

**Why Use Indexes?**

Indexes improve performance for:

- Searching (`SELECT` queries with `WHERE`)
- Sorting (`ORDER BY`)
- Joining multiple tables
- Filtering data with conditions

Always index primary keys and foreign keys. Create composite indexes carefully (leftmost rule).

## How Indexes Work Internally

Most relational databases (MySQL, PostgreSQL, SQL Server, Oracle) use a B-Tree or B+Tree structure for standard indexes:

1. B-Tree structure keeps keys sorted.
2. When you search, it’s logarithmic time (`O(log n)`), not linear (`O(n)`).
3. Each node contains:
   - Key (indexed value)
   - Pointer to the actual row in the table (or to more index nodes)
4. Databases navigate the tree like searching in a phone book.

Example for an index on `last_name`:

```
        [Brown]
       /       \
   [Adams]   [Smith]
```

If you search for "Jones", the DB quickly jumps into the right branch instead of scanning all rows.

## Types of Indexes

| Index Type              | Description                               | Example Use Case                               |
| ----------------------- | ----------------------------------------- | ---------------------------------------------- |
| **Single-column index** | Index on one column                       | Searching by `email`                           |
| **Composite index**     | Index on multiple columns                 | Searching by `(last_name, first_name)`         |
| **Unique index**        | Ensures values are unique                 | Primary key, unique email                      |
| **Full-text index**     | For text searching                        | Search in articles or descriptions             |
| **Hash index**          | Uses hash table for equality searches     | Exact lookups (PostgreSQL, MySQL MEMORY table) |
| **Clustered index**     | Physically orders table data by the index | Primary key in SQL Server                      |
| **Non-clustered index** | Separate from table data, points to rows  | Secondary indexes                              |

## Creating an Index

**Create a Table with Index**

```sql
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2),
    INDEX (department),       -- normal index
    UNIQUE INDEX (name)       -- unique index
);
```

- `emp_id` → Primary Key index.
- `department` → Regular index (useful for searching/filtering by department).
- `name` → Unique index (prevents duplicate names).

**Add Index to Existing Table**

```sql
-- Add a simple index
CREATE INDEX idx_department ON employees(department);

-- Add a multi-column index
CREATE INDEX idx_dept_salary ON employees(department, salary);

-- Add a unique index
CREATE UNIQUE INDEX idx_name_unique ON employees(name);
```

Now, a query like:

```sql
SELECT * FROM employees WHERE department = 'IT';
```

Will use `idx_department` to find the row quickly.

**Composite Index Example**

```sql
CREATE INDEX idx_dept_salary ON employees(department, salary);

-- Efficient use
SELECT * FROM employees WHERE department = 'IT' AND salary > 50000;

-- Also works (prefix)
SELECT * FROM employees WHERE department = 'IT';

-- ❌ Not efficient
SELECT * FROM employees WHERE salary > 50000;
```

MySQL can only use the leftmost column(s) of a composite index.

## Covering Index

If an index contains all the columns needed by a query, MySQL does not even read the table → it uses only the index. This is called a covering index.

```sql
CREATE INDEX idx_dept_salary_name ON employees(department, salary, name);

SELECT name, salary FROM employees WHERE department = 'IT';
```

MySQL can get `department`, `salary`, and `name` directly from the index → no table lookup.

## How Indexes Improve Performance

Without index:

- DB scans all rows (`O(n)` complexity).
- Slower for large datasets.

With index:

- DB uses B-Tree navigation (`O(log n)` complexity).
- Much faster for lookups, filtering, sorting, joins.

**Downsides of Indexes**
Indexes are not free:

1. Storage cost — They take extra disk space.
2. Write cost — Inserts, updates, and deletes become slower because the index must also be updated.
3. Over-indexing — Too many indexes can harm performance.

## Checking Index Usage

You can check if your query uses an index:

```sql
EXPLAIN SELECT * FROM employees WHERE department = 'IT';
```

- Which tables are involved
- The order in which tables are read
- Whether indexes are used
- How many rows MySQL expects to examine
- The join type MySQL chooses

This helps you understand why a query is slow and how to optimize it.

`EXPLAIN ANALYZE` runs the query and shows actual execution time and rows scanned (not just estimates).

### Key Columns in `EXPLAIN` Output

| Column            | Meaning                                                                     |
| ----------------- | --------------------------------------------------------------------------- |
| **id**            | The query step/order of execution. Higher = later execution.                |
| **select_type**   | The type of query (SIMPLE, PRIMARY, SUBQUERY, etc.).                        |
| **table**         | The table being accessed.                                                   |
| **type**          | The **join type** (VERY important for performance).                         |
| **possible_keys** | Indexes MySQL _could_ use.                                                  |
| **key**           | The index MySQL actually used.                                              |
| **rows**          | Estimated number of rows to scan.                                           |
| **Extra**         | Additional details (e.g., “Using where”, “Using index”, “Using temporary”). |

### Important `type` Values (Query Efficiency)

The type column shows how MySQL reads data. Ordered from best → worst:

- `system` / `const` → Only 1 row (very fast).
- `eq_ref` → Unique index lookup.
- `ref` → Non-unique index lookup.
- `range` → Index range scan.
- `index` → Full index scan.
- `ALL` → Full table scan (⚠️ slowest).

Goal: Keep queries using `ref`, `range`, or `const`. Avoid `ALL`.

# Stored Procedure

A Stored Procedure in MySQL is a set of SQL statements that are stored in the database and can be executed later by calling its name.

It’s useful because:

- You can reuse logic without rewriting queries.
- It improves performance (less network traffic between app and DB).
- It improves security (you can give permission to execute a procedure without exposing the underlying tables directly).
- It helps modularize code (similar to functions in programming).

## Creating a Stored Procedure

The basic syntax is:

```sql
DELIMITER //

CREATE PROCEDURE procedure_name (parameters)
BEGIN
   -- SQL statements go here
END //

DELIMITER ;
```

- `DELIMITER`: By default, MySQL ends statements with `;`. Since procedures have multiple statements separated by `;`, we temporarily change the delimiter to `//` (or some other symbol).
- `procedure_name`: The name of the stored procedure.
- `parameters`: You can define parameters with `IN`, `OUT`, or `INOUT`.
  - `IN` → Input only (default).
    - Caller sends a value into the procedure.
    - Cannot be modified inside the procedure (only read).
  - `OUT` → Output only.
    - Caller provides a variable.
    - Procedure sets a value for it.
  - `INOUT` → Input and output.
    - Caller sends an initial value.
    - Procedure can read and change it, and the updated value is returned.
- `BEGIN` … `END`: Defines the body of the procedure.

## A Simple Procedure (No Parameters)

Let’s create a procedure that shows all employees from a table.

```sql
DELIMITER //

CREATE PROCEDURE GetAllEmployees()
BEGIN
   SELECT * FROM employees;
END //

DELIMITER ;
```

To call this procedure:

```sql
CALL GetAllEmployees();
```

## Procedure with `IN` Parameter

Suppose you want to get employees of a particular department:

```sql
DELIMITER //

CREATE PROCEDURE GetEmployeesByDept(IN dept_id INT)
BEGIN
   SELECT * FROM employees
   WHERE department_id = dept_id;
END //

DELIMITER ;
```

To call this procedure:

```sql
CALL GetEmployeesByDept(2);
```

## Procedure with `OUT` Parameter

Now let’s create a procedure that returns the total number of employees.

```sql
DELIMITER //

CREATE PROCEDURE GetEmployeeCount(OUT total INT)
BEGIN
   SELECT COUNT(*) INTO total FROM employees;
END //

DELIMITER ;
```

To call this procedure:

```sql
CALL GetEmployeeCount(@empCount);
SELECT @empCount AS 'Total Employees';
```

## Procedure with `INOUT` Parameter

Let’s say we want to increase a number by 10 and return it.

```sql
DELIMITER //

CREATE PROCEDURE IncreaseNumber(INOUT num INT)
BEGIN
   SET num = num + 10;
END //

DELIMITER ;
```

To call this procedure:

```sql
SET @x = 5;
CALL IncreaseNumber(@x);
SELECT @x AS 'New Value';
```

Since `@x` starts as 5, after the procedure call, the result will be 15.

## Managing Stored Procedures

- Show all procedures: `SHOW PROCEDURE STATUS WHERE Db = 'your_database_name';`
- View procedure code: `SHOW CREATE PROCEDURE GetAllEmployees;`
- Delete a procedure: `DROP PROCEDURE GetAllEmployees;`

## Error Handling Stored Procedures

In MySQL, error handling inside stored procedures (and functions) is done using:

1. **DECLARE HANDLER**
   - Defines what to do when certain conditions occur (e.g., errors, warnings).
   - Two types:
     - **CONTINUE HANDLER** → Ignore the error and continue execution.
     - **EXIT HANDLER** → Exit the procedure immediately when the condition happens.
2. Condition Types you can handle:
   - `SQLEXCEPTION` → Catches all SQL errors.
   - `SQLWARNING` → Catches all warnings.
   - `NOT FOUND` → Usually used in cursors when no more rows are available.
   - Or specific error codes / SQLSTATE values (e.g., 1062 for duplicate entry).
3. GET DIAGNOSTICS (MySQL 5.6+)
   - Used to retrieve detailed error information inside the handler.

### Syntax for Declaring a Handler

```sql
DECLARE handler_type HANDLER FOR condition_value statement;

-- handler_type:
--   CONTINUE  → continue execution
--   EXIT      → exit procedure

-- condition_value:
--   SQLEXCEPTION, SQLWARNING, NOT FOUND, MySQL error code, or SQLSTATE code
```

### EXIT HANDLER (stop procedure on error)

```sql
DELIMITER //

CREATE PROCEDURE InsertEmployeeSafe(IN emp_id INT, IN emp_name VARCHAR(50))
BEGIN
   DECLARE EXIT HANDLER FOR SQLEXCEPTION
   BEGIN
      -- What to do on error
      SELECT 'An error occurred while inserting employee.' AS ErrorMessage;
   END;

   INSERT INTO employees (employee_id, first_name)
   VALUES (emp_id, emp_name);

   SELECT 'Employee inserted successfully!' AS SuccessMessage;
END //

DELIMITER ;
```

- If an error occurs during `INSERT` (e.g., duplicate `employee_id`), the EXIT HANDLER is triggered.
- Procedure stops and displays the error message.
- If no error, it continues normally.

**Call it:**

```sql
CALL InsertEmployeeSafe(1, 'John');
```

### CONTINUE HANDLER (ignore error and keep going)

```sql
DELIMITER //

CREATE PROCEDURE InsertWithIgnore(IN emp_id INT, IN emp_name VARCHAR(50))
BEGIN
   DECLARE CONTINUE HANDLER FOR 1062 -- Duplicate entry error code
   BEGIN
      SELECT 'Duplicate entry ignored.' AS WarningMessage;
   END;

   INSERT INTO employees (employee_id, first_name)
   VALUES (emp_id, emp_name);

   SELECT 'Insert attempted.' AS InfoMessage;
END //

DELIMITER ;
```

- If a duplicate key error (1062) occurs, the CONTINUE HANDLER executes, but the procedure continues.
- It won’t stop execution, just prints a warning.

Call it:

```sql
CALL InsertWithIgnore(1, 'Alice');
```

### NOT FOUND (cursor example)

When looping through rows with a cursor, you use `NOT FOUND` handler to stop when no more rows exist.

```sql
DELIMITER //

CREATE PROCEDURE ListEmployeeNames()
BEGIN
   DECLARE done INT DEFAULT 0;
   DECLARE emp_name VARCHAR(50);

   DECLARE cur CURSOR FOR SELECT first_name FROM employees;
   DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

   OPEN cur;

   read_loop: LOOP
      FETCH cur INTO emp_name;
      IF done = 1 THEN
         LEAVE read_loop;
      END IF;
      SELECT emp_name;
   END LOOP;

   CLOSE cur;
END //

DELIMITER ;
```

- `NOT FOUND` is triggered when the cursor has no more rows.
- The handler sets `done = 1`, causing the loop to end.

### Error Details with GET DIAGNOSTICS

```sql
DELIMITER //

CREATE PROCEDURE InsertWithErrorInfo(IN emp_id INT, IN emp_name VARCHAR(50))
BEGIN
   DECLARE EXIT HANDLER FOR SQLEXCEPTION
   BEGIN
      DECLARE err_code INT;
      DECLARE err_msg TEXT;
      GET DIAGNOSTICS CONDITION 1
         err_code = MYSQL_ERRNO, err_msg = MESSAGE_TEXT;
      SELECT CONCAT('Error ', err_code, ': ', err_msg) AS ErrorDetails;
   END;

   INSERT INTO employees (employee_id, first_name)
   VALUES (emp_id, emp_name);

   SELECT 'Employee inserted successfully!' AS SuccessMessage;
END //

DELIMITER ;
```

- If an error happens, MySQL fetches the error code and error message.
- Example: If `emp_id` already exists, it might return:
  ```sql
  Error 1062: Duplicate entry '1' for key 'PRIMARY'
  ```

# Stored Function

It’s similar to a function in programming languages:

- Always returns one value(via `RETURN`).
- Can only have `IN` parameters (no `OUT` or `INOUT`).
- Can be used inside SQL statements (like built-in functions: `SUM()`, `NOW()`, etc.).
- Encapsulates reusable logic.

## Difference Between Stored Procedure and Stored Function

| Feature              | Stored Procedure                                          | Stored Function                                   |
| -------------------- | --------------------------------------------------------- | ------------------------------------------------- |
| **Return value**     | No direct return (can use OUT/INOUT params)               | Always returns a single value                     |
| **Called with**      | `CALL procedure_name(...)`                                | Used inside SQL (e.g., `SELECT my_function(...)`) |
| **Usage in queries** | ❌ Cannot be used in SELECT                               | ✅ Can be used in SELECT, WHERE, etc.             |
| **Primary use case** | Perform actions (insert, update, delete, complex queries) | Return a computed value                           |

## Differences Between Parameters in Procedures vs Functions

| Feature              | Stored Procedure                                            | Stored Function                            |
| -------------------- | ----------------------------------------------------------- | ------------------------------------------ |
| Parameter types      | `IN`, `OUT`, `INOUT`                                        | Only `IN`                                  |
| Must return value?   | ❌ No (but can use OUT params)                              | ✅ Yes (always returns 1 value)            |
| Usage in SQL queries | ❌ Cannot be used directly                                  | ✅ Can be used in `SELECT`, `WHERE`, etc.  |
| Typical use cases    | Complex operations (insert/update/delete, multiple results) | Calculations, transformations, validations |

## Syntax of Creating a Function

```sql
DELIMITER //

CREATE FUNCTION function_name(parameter_list)
RETURNS datatype
DETERMINISTIC
BEGIN
   -- Function body (must return a value)
   RETURN value;
END //

DELIMITER ;
```

- function_name → The name of the function.
- parameter_list → Input parameters (only `IN` type, unlike procedures).
- RETURNS datatype → Must specify the data type of the return value (e.g., `INT`, `VARCHAR(50)`).
- DETERMINISTIC → Tells MySQL that the function will always return the same output for the same input (important for replication & optimization).
- RETURN → Required to return a single value.

## Simple Function (Square of a Number)

```sql
DELIMITER //

CREATE FUNCTION SquareNumber(n INT)
RETURNS INT
DETERMINISTIC
BEGIN
   RETURN n * n;
END //

DELIMITER ;
```

To use this function

```sql
SELECT SquareNumber(5) AS Result;
```

Suppose we have an employees table with `first_name` and `last_name`.

We can create a function to return the full name:

```sql
DELIMITER //

CREATE FUNCTION GetFullName(fname VARCHAR(50), lname VARCHAR(50))
RETURNS VARCHAR(100)
DETERMINISTIC
BEGIN
   RETURN CONCAT(fname, ' ', lname);
END //

DELIMITER ;
```

To use this function:

```sql
SELECT GetFullName(first_name, last_name) AS FullName
FROM employees;

```

## Managing Functions

- Show all functions in a DB: `SHOW FUNCTION STATUS WHERE Db = 'your_database_name';`
- View function definition: `SHOW CREATE FUNCTION CalculateAge;`
- Delete a function: `DROP FUNCTION CalculateAge;`

# Triggers

A Trigger in MySQL is a database object that is automatically executed (“fired”) when a specific event (INSERT, UPDATE, DELETE) occurs on a table.

They’re useful for:

- Enforcing business rules
- Maintaining audit logs
- Automatically updating related tables
- Validating or transforming data before saving

## Syntax for Creating a Trigger

```sql
CREATE TRIGGER trigger_name
trigger_time trigger_event
ON table_name
FOR EACH ROW
BEGIN
   -- SQL statements
END;
```

- `trigger_name` → Name of the trigger (must be unique per table + event + timing).
- `trigger_time` → Either `BEFORE` or `AFTER` (when the trigger runs relative to the event).
- `trigger_event` → The event that activates the trigger:
  - `INSERT`
  - `UPDATE`
  - `DELETE`
- `table_name` → The table on which the trigger is defined.
- `FOR EACH ROW` → Trigger executes once for every affected row.
- Inside the body, you can use:
  - `NEW.column_name` → Refers to new values (for `INSERT`/`UPDATE`)
  - `OLD.column_name` → Refers to existing values (for `UPDATE`/`DELETE`)

## BEFORE INSERT Trigger (data validation)

Suppose we want to prevent inserting employees with negative salaries:

```sql
DELIMITER //

CREATE TRIGGER before_employee_insert
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
   IF NEW.salary < 0 THEN
      SET NEW.salary = 0;  -- fix invalid salary
   END IF;
END //

DELIMITER ;
```

- Runs before an `INSERT` on `employees`.
- If someone tries to insert a salary `< 0`, it automatically changes it to `0`.

## AFTER INSERT Trigger (audit logging)

Suppose we want to log every new employee added into an `employee_audit` table:

```sql
CREATE TABLE employee_audit (
   audit_id INT AUTO_INCREMENT PRIMARY KEY,
   employee_id INT,
   action VARCHAR(50),
   action_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Now create the trigger:

```sql
DELIMITER //

CREATE TRIGGER after_employee_insert
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
   INSERT INTO employee_audit (employee_id, action)
   VALUES (NEW.employee_id, 'INSERT');
END //

DELIMITER ;
```

- Runs after inserting a row into `employees`.
- Writes a record in `employee_audit`.

## Managing Triggers

- Show triggers in a database: `SHOW TRIGGERS\G`
- Drop a trigger: `DROP TRIGGER after_employee_insert;`
- Check trigger definition: `SHOW CREATE TRIGGER before_employee_update\G`

## Common Use Cases for Triggers

1. **Audit Logging (Tracking Changes):** Keep a record of all changes (INSERT, UPDATE, DELETE) to critical tables (like employees, accounts, orders).
2. **Data Validation and Integrity:** Prevent invalid data from being inserted/updated (business rules enforcement).
3. **Cascading Actions (Automatic Updates/Deletes):** Maintain consistency between related tables.
4. **Derived/Computed Values:** Automatically calculate or update derived fields.
5. **Enforcing Security Rules:** Restrict certain operations automatically.
6. **Synchronizing Tables (Replication-like Behavior):** Automatically keep a summary table in sync.

### Summary of Use Cases of TriggersS

| Use Case                 | Trigger Type               | Example                       |
| ------------------------ | -------------------------- | ----------------------------- |
| **Audit logging**        | AFTER INSERT/UPDATE/DELETE | Track who changed what & when |
| **Validation**           | BEFORE INSERT/UPDATE       | Prevent invalid salaries      |
| **Cascading actions**    | AFTER DELETE               | Archive deleted rows          |
| **Computed values**      | BEFORE INSERT/UPDATE       | Auto-calc total price         |
| **Security enforcement** | BEFORE DELETE              | Prevent deleting managers     |
| **Synchronization**      | AFTER INSERT/UPDATE        | Maintain summary table        |

# Events

A MySQL Event is like a scheduled task (cron job) that runs SQL statements at specific times or intervals.

It allows you to automate recurring database tasks without relying on external scripts or applications.

**Key Points about Events**

- Events are managed by the MySQL Event Scheduler (must be enabled).
- Syntax is similar to CREATE PROCEDURE, but with scheduling options.
- Can be one-time (run once at a specific date/time) or recurring (run periodically).
- Common uses:
  - Automating backups
  - Cleaning up old records
  - Summarizing data (daily/weekly reports)
  - Sending notifications (via tables/flags)

## Enabling the Event Scheduler

By default, the event scheduler may be OFF. To enable:

```sql
SET GLOBAL event_scheduler = ON;
```

Check status:

```sql
SHOW VARIABLES LIKE 'event_scheduler';
```

## Syntax of CREATE EVENT

```sql
CREATE EVENT event_name
ON SCHEDULE
    AT timestamp_value
    | EVERY interval [STARTS timestamp] [ENDS timestamp]
DO
   sql_statement;
```

- event_name → Unique name for the event.
- ON SCHEDULE → Defines when the event runs:
  - `AT 'YYYY-MM-DD HH:MM:SS'` → Run once at specific time.
  - `EVERY interval` → Repeat (e.g., `EVERY 1 DAY`).
- STARTS / ENDS → Define time range for recurring events.
- DO → The SQL statement (or block) to execute.

## One-Time Event

Suppose we want to delete old logs tomorrow at midnight:

```sql
CREATE EVENT delete_old_logs
ON SCHEDULE AT '2025-08-26 00:00:00'
DO
   DELETE FROM logs WHERE log_date < NOW() - INTERVAL 30 DAY;
```

This event will run once at midnight and remove logs older than 30 days.

## Recurring Event (Daily)

Suppose we want to archive old orders every day at midnight:

```sql
CREATE EVENT archive_orders
ON SCHEDULE EVERY 1 DAY
STARTS '2025-08-26 00:00:00'
DO
   INSERT INTO archived_orders
   SELECT * FROM orders WHERE order_date < NOW() - INTERVAL 90 DAY;
```

This will run daily at midnight, moving old orders into archived_orders.

## Event with Multiple Statements (BEGIN...END)

We can use multiple SQL statements with `BEGIN ... END`:

```sql
DELIMITER //

CREATE EVENT daily_summary
ON SCHEDULE EVERY 1 DAY
DO
BEGIN
   DELETE FROM daily_summary_table;
   INSERT INTO daily_summary_table (dept_id, total_salary)
   SELECT department_id, SUM(salary)
   FROM employees
   GROUP BY department_id;
END //

DELIMITER ;
```

Every day, it clears and rebuilds a summary table of total salaries per department.

## Managing Events

- View all events: `SHOW EVENTS;`
- View event definition: `SHOW CREATE EVENT archive_orders\G`
- Drop event: `DROP EVENT archive_orders;`
- Disable event (without deleting): `ALTER EVENT archive_orders DISABLE;`
- Enable event again: `ALTER EVENT archive_orders ENABLE;`

# Transaction

A transaction in MySQL is a sequence of one or more SQL statements that are executed as a single unit of work.
It ensures that either all operations succeed, or none of them do.

Transactions follow the ACID properties:

1. **Atomicity** → All statements in a transaction succeed or fail together.
2. **Consistency** → Data must remain valid before and after the transaction.
3. **Isolation** → Multiple transactions do not interfere with each other.
4. **Durability** → Once a transaction is committed, changes are permanent.

**When Do We Use Transactions?**

- Banking systems (transfer money from one account to another).
- Booking systems (seat reservation).
- Inventory management (stock adjustments).
- Any scenario where data integrity is critical.

## Basic Transaction Commands

1. `START TRANSACTION`; → Begins a new transaction.
   (or `BEGIN`; as a shortcut)
2. `COMMIT;` → Saves all changes permanently.
3. `ROLLBACK;` → Cancels the transaction and restores the data to its state before `START TRANSACTION`.
4. `SAVEPOINT name;` → Sets a savepoint within a transaction.
5. `ROLLBACK TO name;` → Rolls back only up to the specified savepoint.
6. `SET AUTOCOMMIT = 0;` → Turns off automatic commit (MySQL normally commits after every statement by default).

## Bank Transfer (Atomic Transaction)

Imagine you are transferring 1000 BDT from `Account A` to `Account B`.

**Table**

```sql
CREATE TABLE accounts (
    account_id INT PRIMARY KEY,
    name VARCHAR(50),
    balance DECIMAL(10,2)
);

INSERT INTO accounts VALUES
(1, 'Alice', 5000.00),
(2, 'Bob', 3000.00);
```

**Transaction**

```sql
START TRANSACTION;

-- Step 1: Deduct 1000 from Alice
UPDATE accounts
SET balance = balance - 1000
WHERE account_id = 1;

-- Step 2: Add 1000 to Bob
UPDATE accounts
SET balance = balance + 1000
WHERE account_id = 2;

-- Commit if both succeed
COMMIT;
```

- If both updates succeed → Changes are saved.
- If any step fails (e.g., system crash after deduction but before deposit) → You can `ROLLBACK`; to undo changes.

## Using `ROLLBACK`

Suppose Alice tries to transfer 6000 BDT (but she only has 5000).

```sql
START TRANSACTION;

UPDATE accounts
SET balance = balance - 6000
WHERE account_id = 1;

UPDATE accounts
SET balance = balance + 6000
WHERE account_id = 2;

-- Now check Alice’s balance
SELECT balance FROM accounts WHERE account_id = 1;

-- If balance < 0, rollback
ROLLBACK;
```

Result → No money transferred, balances remain unchanged.

## Using `SAVEPOINT`

You can partially undo operations.

```sql
START TRANSACTION;

-- Deduct from Alice
UPDATE accounts SET balance = balance - 500 WHERE account_id = 1;
SAVEPOINT after_deduct;

-- Add to Bob
UPDATE accounts SET balance = balance + 500 WHERE account_id = 2;

-- Oops, wrong account! Roll back only the second step
ROLLBACK TO after_deduct;

-- Commit only Alice’s deduction
COMMIT;
```

Alice’s balance is reduced by 500, but Bob didn’t get credited because we rolled back.

## Key Notes on Transaction

- Transactions only work on transactional storage engines like InnoDB (not MyISAM).
- Always check if autocommit is ON (default in MySQL). If it is, use `SET AUTOCOMMIT=0;`.
- Use transactions in critical data operations where partial updates would cause inconsistencies.

# ACID Properties

A transaction in MySQL must follow the ACID principles to ensure data correctness and reliability:

1. **Atomicity** → All or nothing
2. **Consistency** → Preserve valid state of data
3. **Isolation** → Transactions do not interfere with each other
4. **Durability** → Committed changes are permanent

## Atomicity

A transaction is atomic, meaning all the SQL operations inside it succeed as one unit, or none do.

If any step fails → the entire transaction is rolled back.

```sql
START TRANSACTION;

-- Deduct from Alice
UPDATE accounts SET balance = balance - 1000 WHERE account_id = 1;

-- Add to Bob
UPDATE accounts SET balance = balance + 1000 WHERE account_id = 2;

-- If both succeed, commit
COMMIT;
```

- If both updates succeed → changes are saved.
- If one fails (e.g., system crash after deduction) → transaction rolls back, leaving balances unchanged.

## Consistency

A transaction must preserve the rules and constraints of the database.
After it finishes, the database should always be in a valid state.

Suppose Alice has 5000 BDT. If she tries to transfer 6000 BDT, that would break the rule that `balance >= 0`.

```sql
START TRANSACTION;

UPDATE accounts SET balance = balance - 6000 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 6000 WHERE account_id = 2;

-- Check constraint
SELECT balance FROM accounts WHERE account_id = 1;

-- If balance < 0 → rollback
ROLLBACK;
```

Database remains consistent → Alice’s balance cannot go negative.

## Isolation

Multiple transactions running at the same time should not interfere with each other.

Each transaction behaves as if it is executed alone, even though MySQL may run them concurrently.

**Example:**

Two users try to withdraw from Alice’s account at the same time:

- Transaction A → Withdraw 2000
- Transaction B → Withdraw 4000

If not isolated properly, both might read the same starting balance (5000) and withdraw simultaneously → result could be -1000 ❌.

But with isolation, MySQL ensures correct sequence:

- If Transaction A commits first → balance = 3000
- Then Transaction B runs → withdrawal fails because 3000 < 4000

Final balance remains valid.

## Durability

Once a transaction is committed, the changes are permanent, even if the system crashes immediately after.

MySQL (with InnoDB) guarantees this by writing committed changes to disk using redo logs.

```sql
START TRANSACTION;
UPDATE accounts SET balance = balance - 500 WHERE account_id = 1;
COMMIT;
```

Even if the server crashes right after `COMMIT`, Alice’s new balance will be safely stored when MySQL restarts.

## Summary of ACID with Example

| Property        | Meaning                        | Banking Example                                     |
| --------------- | ------------------------------ | --------------------------------------------------- |
| **Atomicity**   | All operations succeed or none | Deduct from Alice & Add to Bob must happen together |
| **Consistency** | Database must remain valid     | Balance cannot go negative                          |
| **Isolation**   | Transactions don’t interfere   | Two withdrawals won’t corrupt balance               |
| **Durability**  | Once committed → permanent     | After COMMIT, crash won’t erase transfer            |

# Isolation Levels

Isolation levels in MySQL are one of the most important (but often confusing) parts of transactions. They directly control how multiple transactions interact with each other and what concurrency issues can occur.

**What is Isolation in Transactions?**

- Isolation = how much one transaction is protected from the side effects of other concurrent transactions.
- MySQL implements this using Isolation Levels, which balance between performance (concurrency) and safety (consistency).

**Problems Isolation Levels Prevent**

When multiple transactions run at the same time, different anomalies may occur:

1. **Dirty Read** → Reading uncommitted changes from another transaction.

2. **Non-Repeatable Read** → A row’s value changes between two reads in the same transaction.

3. **Phantom Read** → New rows appear/disappear in a range query between two reads.

## MySQL Isolation Levels

MySQL supports 4 standard isolation levels (SQL standard).

| Level                                         | Dirty Read   | Non-Repeatable Read | Phantom Read                                         | Performance             |
| --------------------------------------------- | ------------ | ------------------- | ---------------------------------------------------- | ----------------------- |
| **READ UNCOMMITTED**                          | ❌ Allowed   | ❌ Allowed          | ❌ Allowed                                           | 🔥 Fastest (least safe) |
| **READ COMMITTED**                            | ✅ Prevented | ❌ Allowed          | ❌ Allowed                                           | ⚡ Fast                 |
| **REPEATABLE READ** (default in MySQL InnoDB) | ✅ Prevented | ✅ Prevented        | ❌ Allowed (but handled by Next-Key Locks in InnoDB) | ⚖️ Balanced             |
| **SERIALIZABLE**                              | ✅ Prevented | ✅ Prevented        | ✅ Prevented                                         | 🐌 Slowest (most safe)  |

### READ UNCOMMITTED

Transactions can see uncommitted changes made by others → dirty reads.

Rarely used because it risks reading invalid data.

```sql
-- Transaction A
START TRANSACTION;
UPDATE accounts SET balance = balance - 1000 WHERE account_id = 1;

-- Transaction B (before A commits)
SELECT balance FROM accounts WHERE account_id = 1;
```

Transaction B might see Alice’s balance reduced before A commits, even if A later ROLLBACKs → invalid data

### READ COMMITTED

A transaction only sees committed data.

Prevents dirty reads

But allows non-repeatable reads.

```sql
-- Transaction A
START TRANSACTION;
SELECT balance FROM accounts WHERE account_id = 1; -- Alice = 5000

-- Transaction B (commits)
UPDATE accounts SET balance = balance - 1000 WHERE account_id = 1;
COMMIT;

-- Transaction A reads again
SELECT balance FROM accounts WHERE account_id = 1; -- Alice = 4000
```

Same query in Transaction A gives different results → non-repeatable read.

### REPEATABLE READ (MySQL Default)

- Prevents dirty reads
- Prevents non-repeatable reads
- But phantom rows can appear in range queries.

```sql
-- Transaction A
START TRANSACTION;
SELECT * FROM accounts WHERE balance > 4000; -- Returns Alice

-- Transaction B
INSERT INTO accounts VALUES (3, 'Charlie', 4500);
COMMIT;

-- Transaction A runs the same query
SELECT * FROM accounts WHERE balance > 4000;
-- Returns Alice + Charlie → Phantom row appeared
```

InnoDB adds next-key locking to reduce phantom reads, but it can still occur depending on queries.

### SERIALIZABLE

- Highest isolation level.
- Transactions are executed as if they run one after another (sequentially).
- Prevents dirty reads, non-repeatable reads, phantom reads.
- But slow → causes locking and reduces concurrency.

```sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

START TRANSACTION;
SELECT * FROM accounts WHERE balance > 4000;
```

If another transaction tries to insert/update rows that affect this query, it must wait until the first one commits.

## How to Set Isolation Level in MySQL

```sql
-- Session level (only for current connection)
SET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ;

-- Global level (affects all new connections)
SET GLOBAL TRANSACTION ISOLATION LEVEL READ COMMITTED;
```

Check current level:

```sql
SELECT @@transaction_isolation;
```

In practice:

- MySQL default = REPEATABLE READ (best tradeoff).
- Banking systems → SERIALIZABLE for maximum safety.
- High-performance apps → READ COMMITTED for speed with acceptable risks.

# Database Security

## User Management

MySQL has a user management system to control who can access the database and what actions they can perform. This is part of database security, ensuring only authorized users can perform operations.

### Creating Users in MySQL

MySQL users are stored in the `mysql.user` table. Each user is identified by:

- Username
- Host (where they can connect from)

Syntax:

```sql
CREATE USER 'username'@'host' IDENTIFIED BY 'password';
```

- `'username'` → Name of the user.
- `'host'` → Hostname/IP the user can connect from.
  - `'localhost'` → User can connect only from the same machine as the MySQL server.
  - `'%'` → Wildcard, allows connection from any host.
- `'password'` → Password for authentication.

Example:

```sql
CREATE USER 'john'@'localhost' IDENTIFIED BY 'securePass123';
```

This creates a user john who can connect only from localhost with password `securePass123`.

## Granting Privileges

Once a user is created, they usually don’t have any privileges.
We assign permissions using the `GRANT` statement.

Syntax:

```sql
GRANT privilege_list ON database.table TO 'username'@'host';
```

- `privilege_list` → Type of access (e.g., `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `ALL PRIVILEGES`).
- `database.table` → Scope of privileges.
  - `*.*` → All databases and tables.
  - `mydb.*` → All tables in database mydb.
  - `mydb.employees` → Only the employees table in mydb.

**Grant all privileges on a specific database**

```sql
GRANT ALL PRIVILEGES ON company.* TO 'john'@'localhost';
```

**Grant limited privileges**

```sql
GRANT SELECT ON company.* TO 'john'@'localhost';
```

### Revoking Privileges

If a user should no longer have some permissions, use the `REVOKE` statement.

Syntax:

```sql
REVOKE privilege_list ON database.table FROM 'username'@'host';
```

Example:

```sql
REVOKE INSERT ON company.employees FROM 'john'@'localhost';
```

John can still read (`SELECT`) the employees table, but can no longer `INSERT` new rows.

### Viewing User Privileges

To check what privileges a user has:

```sql
SHOW GRANTS FOR 'john'@'localhost';
```

Example Output:

```sql
GRANT USAGE ON *.* TO 'john'@'localhost' IDENTIFIED BY PASSWORD '*HASH'
GRANT SELECT ON `company`.`employees` TO 'john'@'localhost'
```

### Dropping Users (if no longer needed)

```sql
DROP USER 'john'@'localhost';
```

Completely removes the user and their privileges.

## Securing Connections

MySQL supports SSL/TLS (Secure Sockets Layer / Transport Layer Security) to encrypt client-server communication.
By default, MySQL connections are plaintext, meaning data (including passwords) can be intercepted if transmitted over a network.
Using SSL/TLS ensures:

- **Encryption** → Protects data in transit from eavesdropping.
- **Authentication** → Ensures the client is connecting to the right server.
- **Integrity** → Prevents data tampering.

### How SSL/TLS Works in MySQL

- **Server and Client Certificates** → Both server and client can use X.509 certificates for authentication.
- **Handshake** → When the client connects, it negotiates encryption parameters with the server.
- **Encrypted Session** → All subsequent communication is encrypted.

### Enabling SSL/TLS in MySQL

#### Step 1: Generate Certificates & Keys

You need:

- CA certificate (ca-cert.pem)
- Server certificate (server-cert.pem) and key (server-key.pem)
- Client certificate (client-cert.pem) and key (client-key.pem)

Certificates can be generated using OpenSSL.

```bash
# Generate CA key and certificate
openssl genrsa 2048 > ca-key.pem
openssl req -new -x509 -nodes -days 3600 -key ca-key.pem -out ca-cert.pem

# Generate server key and certificate
openssl genrsa 2048 > server-key.pem
openssl req -new -key server-key.pem -out server-req.pem
openssl x509 -req -in server-req.pem -days 3600 -CA ca-cert.pem -CAkey ca-key.pem -set_serial 01 -out server-cert.pem

# Generate client key and certificate
openssl genrsa 2048 > client-key.pem
openssl req -new -key client-key.pem -out client-req.pem
openssl x509 -req -in client-req.pem -days 3600 -CA ca-cert.pem -CAkey ca-key.pem -set_serial 01 -out client-cert.pem
```

For docker, just run:

```bash
docker run --name mysql-secure ^
  -e MYSQL_ROOT_PASSWORD=my-secret-pw ^
  -v "C:\Users\USER\mysql-certs:/etc/mysql/ssl" ^
  -p 3306:3306 ^
  -d mysql:latest ^
  --ssl-ca=/etc/mysql/ssl/ca-cert.pem ^
  --ssl-cert=/etc/mysql/ssl/server-cert.pem ^
  --ssl-key=/etc/mysql/ssl/server-key.pem
```

#### Step 2: Configure MySQL Server for SSL

In MySQL configuration file (`my.cnf` or `mysqld.cnf`):

```ini
[mysqld]
ssl-ca=/etc/mysql/certs/ca-cert.pem
ssl-cert=/etc/mysql/certs/server-cert.pem
ssl-key=/etc/mysql/certs/server-key.pem
```

Restart MySQL:

```bash
sudo systemctl restart mysql
```

#### Step 3: Create SSL-Required Users

You can enforce that a user must connect with SSL:

```sql
CREATE USER 'secure_user'@'%' IDENTIFIED BY 'StrongPass123' REQUIRE SSL;
```

This means secure_user can only connect if SSL/TLS is used.

You can also enforce certificate-based authentication:

```sql
CREATE USER 'cert_user'@'%' REQUIRE X509;
```

This requires the client to present a valid certificate signed by the CA.

#### Step 4: Client Connection with SSL

Clients must use the certificates when connecting.

Example using mysql command-line client:

```bash
mysql -u secure_user -p \
  --ssl-ca=/etc/mysql/certs/ca-cert.pem \
  --ssl-cert=/etc/mysql/certs/client-cert.pem \
  --ssl-key=/etc/mysql/certs/client-key.pem
```

The connection will be encrypted and authenticated.

### Verifying SSL Connection

Once connected, check SSL status:

```sql
SHOW SESSION STATUS LIKE 'Ssl_cipher';
```

If SSL is active, you’ll see something like:

```
+---------------+--------------------+
| Variable_name | Value              |
+---------------+--------------------+
| Ssl_cipher    | TLS_AES_256_GCM_SHA384 |
+---------------+--------------------+
```

If `Value` is empty → SSL is not being used.

## Best practices for securing MySQL databases

### Use Strong Authentication & Passwords

- Always use strong, complex passwords.
- Enforce password policies (length, complexity, expiration).
- Never leave the root account with no password.

```sql
ALTER USER 'john'@'localhost' IDENTIFIED BY 'Secur3#Pass!';
```

This ensures the user has a strong password.

You can also enforce password expiration:

```sql
ALTER USER 'john'@'localhost' PASSWORD EXPIRE INTERVAL 90 DAY;
```

### Follow the Principle of Least Privilege (PoLP)

- Users should only get the minimum privileges required for their job.
- Avoid granting `ALL PRIVILEGES` unless absolutely necessary.
- Never give `SUPER` or `GRANT OPTION` to normal users.

```sql
GRANT SELECT, INSERT ON company.employees TO 'hr_user'@'localhost';
```

`hr_user` can read and add employee data, but cannot delete or drop tables.

### Remove Anonymous & Unused Accounts

MySQL by default may create anonymous accounts ('`'@'localhost'`). These are dangerous.

```sql
DROP USER ''@'localhost';
DROP USER ''@'%';
```

Removes potential backdoors.

Also, remove test databases if not needed:

```sql
DROP DATABASE test;
```

### Use Encrypted Connections (SSL/TLS)

- Protect sensitive data by encrypting client-server communication.
- Require SSL for critical users.

```sql
CREATE USER 'secure_user'@'%' IDENTIFIED BY 'StrongPass123' REQUIRE SSL;
```

Ensures that `secure_user` can only connect via SSL/TLS.

### Secure the Root Account

- Don’t use `root` for application connections.
- Restrict `root` login to localhost.

```sql
CREATE USER 'dbadmin'@'localhost' IDENTIFIED BY 'Adm1n#Pass!';
GRANT ALL PRIVILEGES ON *.* TO 'dbadmin'@'localhost' WITH GRANT OPTION;
```

Use dbadmin for administration and disable root remote login:

```sql
ALTER USER 'root'@'%' ACCOUNT LOCK;
```

### Regularly Apply Updates & Patches

- Always run the latest MySQL version to patch vulnerabilities.
- Keep OS and MySQL-related libraries updated.

Example command (Linux):

```sql
sudo apt update && sudo apt upgrade mysql-server
```

### Enable Logging & Auditing

Enable the general log or audit log plugin to monitor suspicious activity.

Monitor failed login attempts.

```ini
[mysqld]
log_error = /var/log/mysql/error.log
general_log = 1
general_log_file = /var/log/mysql/general.log
```

This helps trace what queries were executed and by whom.

### Backup Data Securely

- Regular backups protect against accidental loss and ransomware.
- Store backups encrypted.

Example backup with encryption:

```bash
mysqldump -u backup_user -p company | openssl enc -aes-256-cbc -out backup.sql.enc
```

### Restrict Network Access

- Bind MySQL to localhost if not needed remotely.
- Use firewalls to restrict which IPs can connect.

Example (`my.cnf`):

```ini
[mysqld]
bind-address = 127.0.0.1
```

This ensures MySQL is only accessible locally.

For remote access, allow specific IPs only:

```sql
CREATE USER 'app_user'@'192.168.1.100' IDENTIFIED BY 'AppPass#1';
```

### Use Data-at-Rest Encryption

- Encrypt sensitive tables or entire storage using MySQL Transparent Data Encryption (TDE) or OS-level disk encryption.

Example (per-table encryption):

```sql
CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  salary DECIMAL(10,2)
) ENCRYPTION='Y';
```

# Query Optimization

## Avoid Functions in WHERE Clause

When you wrap a column in a function, indexes cannot be used.

Bad:

```sql
SELECT * FROM employees WHERE YEAR(hire_date) = 2020;
```

MySQL must evaluate `YEAR()` for every row → slow.

Good:

```sql
SELECT * FROM employees
WHERE hire_date >= '2020-01-01' AND hire_date <= '2020-12-31';
```

Uses index on `hire_date`. Much faster.

## Use Query Caching (if available)

- In older MySQL versions → Query Cache can store results.
- In MySQL 8+ → use external caching (e.g., Redis, Memcached).

Example:

Instead of repeatedly running:

```sql
SELECT COUNT(*) FROM orders WHERE status = 'Pending';
```

Cache the result in Redis and refresh periodically.

## Avoid N+1 Query Problem

Bad practice: running multiple queries in a loop.

Bad:

```sql
-- For each employee, fetch department
SELECT dept_name FROM departments WHERE id = 101;
SELECT dept_name FROM departments WHERE id = 102;
SELECT dept_name FROM departments WHERE id = 103;
```

This runs many queries → very slow.

Good (single JOIN query):

```sql
SELECT e.name, d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.id;
```

One query instead of many. Huge performance boost.

# MySQL’s Full-Text Search Capabilities

Normally, searching text with LIKE '%word%' is slow on large datasets because MySQL must scan every row.

Full-Text Search (FTS) solves this by creating a special index designed for text searching.
It allows efficient searching for words and phrases in large text fields.

- A Full-Text Index is an index type optimized for text-based columns (`CHAR`, `VARCHAR`, `TEXT`).
- It supports:
  - Natural language search (search like Google).
  - Boolean search (with operators like +, -, \*).
  - Query expansion (broaden results).

**Creating a Full-Text Index**

```sql
CREATE TABLE articles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200),
  body TEXT,
  FULLTEXT(title, body)
);
```

## Searching with Full-Text Index

### Natural Language Search

MySQL searches for relevant results based on word frequency (ignores very common words like "the", "is").

```sql
SELECT id, title
FROM articles
WHERE MATCH(title, body) AGAINST ('database security');
```

Finds rows where `database` and `security` appear. Results are ranked by relevance (higher score = better match).

### Boolean Mode Search

Allows use of operators for precise control.

```sql
SELECT id, title
FROM articles
WHERE MATCH(title, body) AGAINST ('+mysql -oracle' IN BOOLEAN MODE);
```

- `+mysql` → Must contain "mysql".
- `-oracle` → Must not contain "oracle".

Returns only MySQL-related articles, excluding Oracle.

Other Boolean operators:

- `*`→ wildcard (e.g., databas\* matches "database", "databases").
- `""` → exact phrase search (e.g., `"data security"`).

### Query Expansion Mode

Expands the search using related terms from top matching rows.

```sql
SELECT id, title
FROM articles
WHERE MATCH(title, body) AGAINST ('encryption' WITH QUERY EXPANSION);
```

Finds not only "encryption" but also related terms found in matching articles (e.g., "security", "keys").

# Data Backup and Restoration

## `mysqldump`

- `mysqldump` is a command-line utility provided by MySQL to export (backup) databases.

**Why Use `mysqldump`?**

- To backup your database regularly (safety against crashes).
- To migrate a database from one server to another.
- To move data between environments (development → production).
- To export specific tables or records for analysis.

### General Syntax

```sql
mysqldump -u [username] -p [database_name] > backup_file.sql
```

- -`u [username]` → MySQL user
- `-p` → Prompt for password (you’ll enter it after running the command)
- `[database_name]` → The database to export
- `> backup_file.sql` → Redirects output into a file

1. **Export Entire Database**

   ```bash
   mysqldump -u root -p school > school_backup.sql
   ```

2. **Export Specific Tables**

   ```bash
   mysqldump -u root -p school students teachers > school_partial_backup.sql
   ```

3. **Export Only Schema (No Data)**

   ```bash
   mysqldump -u root -p --no-data school > school_schema.sql
   ```

4. **Export Only Data (No Schema)**

   ```bash
   mysqldump -u root -p --no-create-info school > school_data.sql
   ```

5. **Export All Databases**

   ```bash
   mysqldump -u root -p --all-databases > alldb_backup.sql
   ```

6. **Compressed Backup**

   Since SQL dump files can be large, you can compress them:

   ```
   mysqldump -u root -p school | gzip > school_backup.sql.gz
   ```

## Restoring from a Backup

### Importing with `mysql` Command-Line

To restore a database from a dump file:

1. First create the database (if not exists):

   ```sql
   CREATE DATABASE school;
   ```

2. Then restore

   ```bash
   mysql -u root -p school < school_backup.sql
   ```

This runs all the SQL statements in `school_backup.sql` and rebuilds the database.

### Importing with `SOURCE` Command

1. Log into MySQL with `mysql -u root -p`
2. Select databse with `USE school`
3. Run import `SOURCE /path/to/school_backup.sql;`

### Importing via MySQL Workbench

1. Open MySQL Workbench
2. Connect to your server
3. Go to Server > Data Import
4. Choose Import from Self-Contained File (your .sql backup)
5. Select target schema (or create new one)
6. Click Start Import

### Importing CSV Data

If you only have CSV data instead of `.sql` file, you can use:

```sql
LOAD DATA INFILE '/path/to/students.csv'
INTO TABLE students
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(id, name, age);
```

## Automating Backups

**Why Automate MySQL Backups?**

- Prevent data loss (server crashes, accidental deletes, corruption).
- Ensure regular backups without human error.
- Reduce downtime with ready-to-use restore files.
- Keep historical backups (daily, weekly, monthly).

**Ways to Automate Backups**

1. Linux (Cron Jobs) → Automate mysqldump on a schedule.
2. Windows (Task Scheduler) → Run mysqldump periodically.
3. Custom Shell Scripts / Batch Files → Add logic like compression, timestamps, cleanup.
4. Third-Party Tools (Percona XtraBackup, phpMyAdmin export scheduling).

### Automating Backups on Linux (Cron Jobs)

**Step 1: Create a backup script**

Create a file `/usr/local/bin/mysql_backup.sh`:

```bash
#!/bin/bash
# MySQL Backup Script

USER="root"
PASSWORD="yourpassword"
DATABASE="school"
OUTPUT_DIR="/backups/mysql"
DATE=$(date +%F_%H-%M-%S)
FILENAME="$OUTPUT_DIR/${DATABASE}_backup_$DATE.sql.gz"

# Create backup directory if not exists
mkdir -p $OUTPUT_DIR

# Run mysqldump with gzip compression
mysqldump -u $USER -p$PASSWORD $DATABASE | gzip > $FILENAME

# Optional: Delete backups older than 7 days
find $OUTPUT_DIR -type f -name "*.gz" -mtime +7 -exec rm {} \;
```

Make it executable:

```sql
chmod +x /usr/local/bin/mysql_backup.sh
```

**Step 2: Schedule with Cron**

Open cron editor:

```bash
crontab -e
```

Add this line to run backup every day at 2 AM:

```bash
0 2 * * * /usr/local/bin/mysql_backup.sh
```

Result → Daily compressed backup files like:

```bash
school_backup_2025-08-24_02-00-00.sql.gz
```

### Automating Backups on Windows (Task Scheduler)

**Step 1: Create a batch file mysql_backup.bat:**

```bat
@echo off
set USER=root
set PASSWORD=yourpassword
set DATABASE=school
set BACKUPDIR=C:\mysql_backups
set DATE=%DATE:~10,4%-%DATE:~4,2%-%DATE:~7,2%_%TIME:~0,2%-%TIME:~3,2%

if not exist %BACKUPDIR% mkdir %BACKUPDIR%

mysqldump -u %USER% -p%PASSWORD% %DATABASE% > %BACKUPDIR%\%DATABASE%_backup_%DATE%.sql

echo Backup complete: %BACKUPDIR%\%DATABASE%_backup_%DATE%.sql
```

**Step 2: Schedule Task**

1. Open Task Scheduler → Create Task
2. Go to Triggers → Daily at 2:00 AM
3. Go to Actions → Start a program → select mysql_backup.bat
4. Save

Now backups will run automatically each night.

### Automating Full Server Backups

For all databases:

```bash
mysqldump -u root -p --all-databases | gzip > /backups/mysql/all_db_backup_$(date +%F).sql.gz
```

Or backup only schemas (structures):

```bash
mysqldump -u root -p --no-data --all-databases > alldb_schema.sql
```

### Real-World Enhancements of Automatic Backups

- Compression → Use `gzip/bzip2` to save space.
- Rotation → Keep last 7 backups, auto-delete old ones.
- Remote Storage → Upload backups to AWS S3, Google Drive, or FTP.
- Monitoring → Send email alerts if backup fails.

# Working with Large Datasets

## Partitioning

When working with very large datasets, queries can become slow and storage can be inefficient.

Partitioning is a MySQL technique that splits a large table into smaller, more manageable pieces (called partitions) but still treats them as a single logical table.

- Partitioning = dividing a table’s rows into separate physical storage chunks.
- Queries can target only the relevant partition instead of scanning the entire table.
- MySQL decides automatically which partition to search based on the query condition.

This improves query performance, manageability, and maintenance.

**Benefits of Partitioning**

- Faster queries (partition pruning → scans only relevant partitions).
- Better performance with huge tables (billions of rows).
- Easier maintenance (you can archive or drop a partition without touching the rest).
- Efficient storage (old data can be separated).

**Limitations of Partitioning**

- Partition key must be part of PRIMARY KEY or UNIQUE KEY.
- No foreign keys allowed in partitioned tables.
- Too many partitions can slow down queries.
- Not all storage engines support it (must be InnoDB in modern MySQL).

### Types of Partitioning

- RANGE → ranges of values (time-based data).
- LIST → specific values (categories).
- HASH → evenly distribute with a hash function.
- KEY → system-managed hash (usually on primary keys).

#### RANGE Partitioning

Rows are placed into partitions based on ranges of values.

- Good for time-based data (e.g., monthly logs).

```sql
CREATE TABLE sales (
  id INT,
  sale_date DATE,
  amount DECIMAL(10,2)
)
PARTITION BY RANGE (YEAR(sale_date)) (
  PARTITION p2019 VALUES LESS THAN (2020),
  PARTITION p2020 VALUES LESS THAN (2021),
  PARTITION p2021 VALUES LESS THAN (2022),
  PARTITION pmax VALUES LESS THAN MAXVALUE
);
```

Data from 2019 goes into p2019, 2020 into p2020, and so on.

Query:

```sql
SELECT * FROM sales WHERE sale_date BETWEEN '2020-01-01' AND '2020-12-31';
```

MySQL only scans p2020, not the whole table.

#### LIST Partitioning

Rows are partitioned based on a list of specific values.

- Good for categorical data (e.g., regions, departments).

```sql
CREATE TABLE employees (
  id INT,
  name VARCHAR(50),
  region VARCHAR(10)
)
PARTITION BY LIST COLUMNS (region) (
  PARTITION p_north VALUES IN ('North'),
  PARTITION p_south VALUES IN ('South'),
  PARTITION p_east VALUES IN ('East'),
  PARTITION p_west VALUES IN ('West')
);
```

#### HASH Partitioning

Rows are distributed into partitions based on a hash function.

- Good for evenly distributing data when values are unpredictable.

```sql
CREATE TABLE orders (
  order_id INT,
  customer_id INT,
  amount DECIMAL(10,2)
)
PARTITION BY HASH(customer_id) PARTITIONS 4;
```

Rows are distributed across 4 partitions using a hash of customer_id.
Useful for load balancing queries across partitions.

#### KEY Partitioning

Similar to HASH, but MySQL chooses the hash function internally.

- Typically used with primary keys.

```sql
CREATE TABLE products (
  product_id INT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2)
)
PARTITION BY KEY(product_id) PARTITIONS 3;
```

MySQL automatically hashes product_id into 3 partitions.

### Practical Example of Partitioning

Imagine a website access log table with millions of rows per year:

```sql
CREATE TABLE access_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  log_date DATE NOT NULL,
  user_id INT,
  action VARCHAR(100)
)
PARTITION BY RANGE (YEAR(log_date)*100 + MONTH(log_date)) (
  PARTITION p202201 VALUES LESS THAN (202202),
  PARTITION p202202 VALUES LESS THAN (202203),
  PARTITION p202203 VALUES LESS THAN (202204),
  PARTITION pmax VALUES LESS THAN MAXVALUE
);
```

- January 2022 logs → `p202201`
- February 2022 logs → `p202202`

Query example:

```sql
SELECT * FROM access_logs WHERE log_date BETWEEN '2022-02-01' AND '2022-02-28';
```

Only scans `p202202`, making it much faster.

# Views

A view in MySQL is a virtual table that is based on the result of a `SELECT` query.

- It does not store data physically (unless you use `WITH CHECK OPTION` in certain cases).
- Acts like a shortcut to a query — you can treat it like a table.

Think of a view as a saved query that you can reuse.

**Advantages of Views**

- **Simplicity:** Complex queries can be saved as a view, so users can just query the view.
  - Instead of repeating a big join, you just `SELECT * FROM employee_info`.
- **Security:** You can restrict access to sensitive columns.
  - Example: Create a view that excludes the salary column and give users access only to that view.
- **Reusability:** One query definition can be reused many times.
- **Data abstraction:** Changes in table structure can be hidden behind a view.
  - Example: If table columns change, you can update the view definition, keeping applications working.
- **Logical separation:** Provides a layer between applications and base tables.

**Limitations of Views**

- **Performance overhead:** Views don’t store data; every time you query a view, MySQL executes the underlying query.
  - If the view has complex joins, performance may be slow.
- **Dependency issues:** If underlying tables change (dropped columns, renamed columns), views may break.
- No indexes directly on views: You cannot create an index on a view itself (only on underlying tables).

- Update restrictions: Not all views are updatable. You can update a view only if it’s based on a single table without: `DISTINCT`, `GROUP BY`, `HAVING`, `UNION`, Aggregate functions (`SUM`, `AVG`, etc.)

  ```sql
  CREATE VIEW dept_salary AS
  SELECT department, AVG(salary) AS avg_salary
  FROM employees
  GROUP BY department;
  ```

  Cannot update this view, because it’s an aggregate.

## Creating Views

```sql
CREATE VIEW view_name AS
SELECT columns
FROM tables
WHERE conditions;
```

**Example of Simple View:**
Create a view for all IT employees:

```sql
CREATE VIEW it_employees AS
SELECT emp_id, name, salary
FROM employees
WHERE department = 'IT';
```

Now you can query the view like a table:

```sql
SELECT * FROM it_employees;
```

**View with Join**

```sql
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50),
    location VARCHAR(100)
);

CREATE VIEW employee_info AS
SELECT e.emp_id, e.name, d.dept_name, d.location
FROM employees e
JOIN departments d ON e.department = d.dept_name;
```

Now:

```sql
SELECT * FROM employee_info WHERE location = 'New York';
```

## Using Views

**Use View to update data:**

```sql
UPDATE it_employees
SET salary = salary + 5000
WHERE emp_id = 101;
```

## Modifying and Dropping Views

Modify:

```sql
CREATE OR REPLACE VIEW it_employees AS
SELECT emp_id, name, salary
FROM employees
WHERE department = 'IT' AND salary > 60000;
```

Drop:

```sql
DROP VIEW it_employees;
```

# Temporary Table

A temporary table in MySQL is a table that exists only for the duration of a session (or until explicitly dropped).

```sql
CREATE TEMPORARY TABLE temp_table_name (
    column1 datatype,
    column2 datatype,
    ...
);
```

- Automatically dropped when:
  - The session (connection) ends.
  - Or you explicitly DROP it.
- They don’t interfere with normal tables having the same name.
- Each session gets its own version of the temporary table.
- It used for storing intermediate results or complex calculations within a session.

**Advantages of Temporary Tables**

- Session isolation → Each session gets its own copy (safe for concurrent users).
- Simplifies complex queries by breaking them into steps.
- Good for intermediate results → useful in reporting, analytics, or stored procedures.
- No name conflict with permanent tables (you can have both employees and TEMPORARY employees).
- Automatic cleanup → dropped at session end.

**Limitations of Temporary Tables**

- Session-only → cannot share between different connections.
- Performance overhead → large temporary tables may use disk instead of memory.
- Limited features:
  - No `FOREIGN KEY` constraints allowed.
  - Temporary tables cannot be indexed with FULLTEXT or SPATIAL indexes.
    If you create a temporary table with the same name as an existing permanent table in your session, the temporary table takes priority. (Permanent table becomes hidden for that session until temp table is dropped.)

## Creating and Using a Temporary Table

Suppose we have an employees table:

```sql
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);
```

Now, create a temporary table to hold only IT employees with salary above 50000:

```sql
CREATE TEMPORARY TABLE high_paid_it AS
SELECT emp_id, name, salary
FROM employees
WHERE department = 'IT' AND salary > 50000;
```

Query the temporary table:

```sql
SELECT * FROM high_paid_it;
```

This works like a regular table, but it exists only in this session.

If you open another MySQL session and try:

```sql
SELECT * FROM high_paid_it;
```

You’ll get an error: `ERROR 1146 (42S02): Table 'high_paid_it' doesn't exist`

Because temporary tables are session-specific.

You can modify, drop, join temporary table like regular table.

# Common Table Expressions

A Common Table Expression (CTE) is a temporary result set defined within the execution of a single SQL statement, using the WITH clause.

- It is not stored in the database (unlike a table or view).
- It exists only for the duration of the query.
- It can make queries cleaner and easier to read, especially when dealing with complex joins, subqueries, or recursive queries.

Think of it as a named temporary query that you can reuse in the same SQL statement.

```sql
WITH cte_name (column1, column2, ...) AS (
    SELECT ...
)
SELECT * FROM cte_name;
```

**Advantages of CTEs**

- Improves readability → Instead of deeply nested subqueries, break them into steps.
- Reusability within a query → A CTE can be referenced multiple times in the same statement.
- Recursive queries → Handle hierarchical data elegantly.
- Easier maintenance → Queries are modular and easier to debug.
- Acts like an inline view but more flexible.

**Limitations of CTEs**

- **Performance:** CTEs do not always optimize as well as derived tables.
  - In MySQL, non-recursive CTEs are often treated like inline views (they don’t persist results).
  - For very large datasets, temporary tables may perform better.
- **Scope limited:** A CTE exists only within the statement where it is defined.
- **Not reusable across queries** → Unlike a view, a CTE can’t be stored for future queries.
- **MySQL Recursive CTEs** have depth limits (default = 1000 levels).

## Example of Simple CTE

Suppose we have an employees table:

```sql
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2),
    manager_id INT
);
```

**Without CTE**

If you want to find employees with salary above the average salary, you might write:

```sql
SELECT emp_id, name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

**With CTE**

```sql
WITH avg_salary AS (
    SELECT AVG(salary) AS avg_sal FROM employees
)
SELECT emp_id, name, salary
FROM employees, avg_salary
WHERE employees.salary > avg_salary.avg_sal;
```

Here avg_salary is a CTE that calculates the average salary and is reused in the main query.

This makes the query cleaner and more readable.

## Example of Multiple CTEs

```sql
WITH dept_avg AS (
    SELECT department, AVG(salary) AS avg_sal
    FROM employees
    GROUP BY department
),
high_paid AS (
    SELECT emp_id, name, department, salary
    FROM employees
    WHERE salary > 70000
)
SELECT h.name, h.salary, d.avg_sal
FROM high_paid h
JOIN dept_avg d ON h.department = d.department;
```

- First CTE `dept_avg` calculates average salary per department.
- Second CTE `high_paid` selects high salary employees.
- Final query joins them.

## Recursive CTEs

Recursive CTEs are used for hierarchical data, like org charts or parent-child relationships.

Suppose each employee has a `manager_id` (who is also an employee).

```sql
WITH RECURSIVE employee_hierarchy AS (
    -- Anchor member: start with top-level manager (CEO, manager_id IS NULL)
    SELECT emp_id, name, manager_id, 1 AS level
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive member: find employees reporting to the previous level
    SELECT e.emp_id, e.name, e.manager_id, eh.level + 1
    FROM employees e
    INNER JOIN employee_hierarchy eh ON e.manager_id = eh.emp_id
)
SELECT * FROM employee_hierarchy;
```

This will produce a tree-like structure of employees with their reporting levels.

## CTE vs Subquery vs View

| Feature                       | Subquery  | CTE        | View    |
| ----------------------------- | --------- | ---------- | ------- |
| Readability                   | ❌ Harder | ✅ Cleaner | ✅ Good |
| Reusable in same query        | ❌ No     | ✅ Yes     | ✅ Yes  |
| Reusable in different queries | ❌ No     | ❌ No      | ✅ Yes  |
| Stored permanently            | ❌ No     | ❌ No      | ✅ Yes  |
| Recursive support             | ❌ No     | ✅ Yes     | ❌ No   |

# JSON in MySQL

With MySQL, you can:

- Store JSON documents inside a column.
- Validate them automatically (only valid JSON is allowed).
- Query and manipulate JSON data using built-in JSON functions.

JSON is useful when working with semi-structured or flexible data (e.g., logs, configurations, API responses, NoSQL-like use cases).

## Creating a Table with JSON Column

```sql
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    details JSON
);
```

The `details` column will store JSON objects, arrays, or values.
If you try inserting invalid JSON, MySQL will throw an error.

## Inserting JSON Data

```sql
INSERT INTO products (name, details) VALUES
('Laptop', JSON_OBJECT('brand', 'Dell', 'specs', JSON_ARRAY('i7', '16GB RAM', '512GB SSD'))),
('Phone', '{"brand": "Samsung", "model": "S23", "features": ["5G", "AMOLED", "128GB"]}');
```

- `JSON_OBJECT()` creates a JSON object.
- `JSON_ARRAY()` creates a JSON array.
- You can also insert a JSON string directly (`'{"brand":"Samsung"}'`).

MySQL will validate the format before storing it.

## Querying JSON Data

Use `->` and `->>` operators:

- `->` returns JSON value.
- `->>` returns unquoted scalar value (string, number).

```sql
SELECT
    name,
    details->'$.brand' AS brand_json,
    details->>'$.brand' AS brand_text
FROM products;
```

Output might look like

```
SELECT
    name,
    details->'$.brand' AS brand_json,
    details->>'$.brand' AS brand_text
FROM products;
```

## Searching Inside JSON

Find products with "brand" = "Samsung":

```sql
SELECT * FROM products
WHERE JSON_EXTRACT(details, '$.brand') = 'Samsung';
```

or shorter:

```sql
SELECT * FROM products
WHERE details->>'$.brand' = 'Samsung';
```

## Modifying JSON Data

Add or Update a key

```sql
UPDATE products
SET details = JSON_SET(details, '$.warranty', '2 years')
WHERE name = 'Laptop';
```

Remove a key

```sql
UPDATE products
SET details = JSON_REMOVE(details, '$.features[2]')
WHERE name = 'Phone';
```

This removes the 3rd element from the features array

## Advanced JSON Queries

**Filtering based on array contents**

Find all products that have "5G" in their features:

```sql
SELECT * FROM products
WHERE JSON_CONTAINS(details->'$.features', '"5G"');
```

Merging JSON objects

```sql
SELECT JSON_MERGE_PRESERVE(
    '{"brand": "Dell"}',
    '{"color": "Silver"}'
) AS merged;
```

Result:

```json
{ "brand": "Dell", "color": "Silver" }
```

## Indexing JSON Data for Performance

Since JSON is stored as text internally, queries can be slow on large datasets.
MySQL allows you to create generated (virtual) columns from JSON values and index them.

```sql
ALTER TABLE products
ADD brand VARCHAR(50) GENERATED ALWAYS AS (details->>'$.brand') STORED,
ADD INDEX idx_brand (brand);
```

Now queries like:

```sql
SELECT * FROM products WHERE brand = 'Samsung';
```

# Replication

Replication in MySQL is the process of copying data from one database server (the master / primary) to one or more other servers (slaves / replicas).

The goal is to keep the replica servers synchronized with the master.

Limitations of Replication

- Replication Lag → Slaves may not be up-to-date.
- Writes still go to master → not good for heavy write workloads.
- Conflict risk in multi-source replication → if both masters write to the same table.
- Not a full backup → accidental deletes on master replicate to slaves.

## How MySQL Replication Works

Replication happens in 3 steps:

1. Master writes changes to binary log (binlog).
2. Replica reads master’s binlog into its relay log.
3. Replica SQL thread applies changes to its own database.

Replication is usually asynchronous (replicas might lag), but can also be semi-synchronous (master waits for at least one replica acknowledgment).

## Master-Slave Replication

- One master server handles all writes (INSERT/UPDATE/DELETE).
- One or more slave servers handle reads (SELECT).
- Slaves replicate data from the master continuously.

### Setting Up Master-Slave Replication

#### Step 1: On the Master

Enable binary logging in my.cnf:

```ini
[mysqld]
server-id=1
log_bin=mysql-bin
```

Restart MySQL.

Create a replication user:

```sql
CREATE USER 'replica'@'%' IDENTIFIED BY 'password';
GRANT REPLICATION SLAVE ON *.* TO 'replica'@'%';
FLUSH PRIVILEGES;
```

Check master status:

```sql
SHOW MASTER STATUS;
```

Output example:

```
File: mysql-bin.000001
Position: 154
```

Note these values; they’ll be used on the slave.

#### Step 2: On the Slave

Configure in my.cnf:

```
[mysqld]
server-id=2
relay-log=relay-bin
```

Restart MySQL.

Connect slave to master:

```sql
CHANGE MASTER TO
  MASTER_HOST='master_ip',
  MASTER_USER='replica',
  MASTER_PASSWORD='password',
  MASTER_LOG_FILE='mysql-bin.000001',
  MASTER_LOG_POS=154;

START SLAVE;
```

Check status:

```sql
SHOW SLAVE STATUS\G
```

If Slave_IO_Running = Yes and Slave_SQL_Running = Yes → replication is working.

#### Step 3: Test

On master:

```sql
INSERT INTO employees (name, department, salary) VALUES ('Alice', 'IT', 70000);
```

On slave:

```sql
SELECT * FROM employees WHERE name = 'Alice';
```

You’ll see the row replicated.

## Multi-Source Replication

Multi-source replication allows one slave to replicate data from multiple masters.

Useful for merging data from different databases into a central server.

### Setting Up Multi-Source Replication

Suppose we have:

- Master1 = HR database
- Master2 = Sales database
- Slave = Central analytics server

#### Step 1: Configure Master1 and Master2

Enable binary logs on both:

```ini
[mysqld]
server-id=1   # On Master1
log_bin=mysql-bin
```

```ini
[mysqld]
server-id=2   # On Master2
log_bin=mysql-bin
```

Create replication users on both masters.

#### Step 2: Configure Slave

Enable multi-source replication in `my.cnf`:

```ini
[mysqld]
server-id=3
```

#### Step 3: Connect Slave to Master1 and Master2

```sql
-- For Master1
CHANGE MASTER TO
  MASTER_HOST='master1_ip',
  MASTER_USER='replica',
  MASTER_PASSWORD='password',
  MASTER_LOG_FILE='mysql-bin.000001',
  MASTER_LOG_POS=154
FOR CHANNEL 'master1';

START SLAVE FOR CHANNEL 'master1';

-- For Master2
CHANGE MASTER TO
  MASTER_HOST='master2_ip',
  MASTER_USER='replica',
  MASTER_PASSWORD='password',
  MASTER_LOG_FILE='mysql-bin.000001',
  MASTER_LOG_POS=200
FOR CHANNEL 'master2';

START SLAVE FOR CHANNEL 'master2';
```

Check replication channels:

```sql
SHOW SLAVE STATUS FOR CHANNEL 'master1'\G
SHOW SLAVE STATUS FOR CHANNEL 'master2'\G
```

## Replication in the Cloud

Cloud providers (like AWS RDS, Google Cloud SQL, Azure Database for MySQL) provide managed replication:

- You don’t need to manually configure binlogs.
- They offer read replicas for scaling reads.
- Failover and monitoring are automated.

Example in AWS RDS:

- Create a primary MySQL instance.
- Add a read replica via AWS console.
- AWS handles replication setup automatically

## Load Balancing

Load balancing means distributing client requests across multiple database servers to improve performance and scalability.

In MySQL, this is usually done in replication setups:

- Master (Primary) → handles writes (INSERT, UPDATE, DELETE)
- Slaves (Replicas) → handle reads (SELECT)
- A load balancer (proxy or middleware) distributes queries.

**Benefits of Load Balancing**

- Better performance (scale reads across replicas).
- Prevents a single server from being overloaded.
- Enables horizontal scaling (add more replicas).

### Load Balancing Reads

Suppose we have:

- 1 Master: `master-db` (for writes).
- 2 Slaves: `slave1-db`, `slave2-db` (for reads).
- Load Balancer: ProxySQL (or HAProxy, MySQL Router).

**Without Load Balancer:** Applications must manually connect to master for writes and slaves for reads.

```sql
-- Application connects directly to master for writes
INSERT INTO employees (name, department, salary) VALUES ('Alice', 'HR', 60000);

-- Application connects directly to a slave for reads
SELECT * FROM employees WHERE department = 'HR';
```

**Problem:** Application must handle logic for routing queries.

**With Load Balancer**

Applications connect to ProxySQL/MySQL Router → it automatically sends writes to master and reads to slaves.

```sql
-- Application just connects to the proxy
SELECT * FROM employees;   -- Proxy routes to slave1 or slave2
INSERT INTO employees VALUES ('Bob', 'IT', 70000); -- Proxy routes to master
```

Load balancer ensures read queries are spread across replicas, and write queries always go to master.

## High Availability

High Availability means the database remains available even if a server crashes.

This is achieved with:

- **Replication** → Having multiple copies of the database.
- **Automatic failover** → If the master fails, a slave is promoted to master.
- **Monitoring** → To detect failures and trigger failover.

### High Availability Approaches in MySQL

1. Master-Slave with Failover
   - One master, multiple slaves.
   - A monitoring tool (MHA, Orchestrator, or cloud service) promotes a slave if the master fails.
2. MySQL Group Replication / InnoDB Cluster
   - Multiple servers form a group.
   - Supports multi-master writes.
   - Provides built-in failover and HA.
3. Cloud Provider HA
   - AWS RDS / Aurora: Automated failover to replica.
   - Google Cloud SQL: Multi-zone replication with automatic failover.
   - Azure Database for MySQL: Geo-replication for HA.

### High Availability with Replication

**Without HA**

- Master fails → application cannot process writes until manually fixed.

**With HA (Orchestrator / MHA)**

- Monitoring detects master failure.
- A replica (`slave1-db`) is promoted to master.
- Load balancer (ProxySQL/MySQL Router) automatically reroutes writes to new master.

Application continues to work with minimal downtime.

# Questions

1. when using InnoDB engine ensures data reliability and integrity
2. how to perform caching.
3. practice cloud solutions
4. how to define `1-1`, `1-\*`, `\*-\*` relationship with foreign ey
5. constraint → Rules for the column (e.g., NOT NULL, UNIQUE, PRIMARY KEY). table_constraints → Constraints applied to the table as a whole (e.g., a PRIMARY KEY defined at the end).
6. Be very careful — CASCADE can remove more than you expect.
7. `DECIMAL(10, 2)` - what the value inserted for 3.5278 is it 3.52 or 3.53?
8. how B tree work during indexing
9. An index is a data structure that stores pointers to rows in a table, organized to make lookups faster.
