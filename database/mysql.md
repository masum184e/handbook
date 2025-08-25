# Contents

- [Introduction](#introduction)
  - [Key characteristics](#key-characteristics-of-mysql)
  - [Why Use MySQL](#why-use-mysql)
  - [Installation](#installation)
    - [Local Setup](#local-setup)
    - [Cloud Solutions](#cloud-solutions)
    - [Local vs Cloud Setup](#local-vs-cloud-setup)
  - [MySQL Workbench](#mysql-workbench)
  - [Connecting to a MySQL server](#connecting-to-a-mysql-server)
  - [MySQL client tools](#mysql-client-tools)
    - [MySQL CLI](#mysql-cli)
    - [MySQL GUI](#mysql-gui)
    - [MySQL CLI vs GUI](#mysql-cli-vs-gui)
- [Basics](#basics)
- [Data Types](#data-types)
  - [Numeric](#numeric)
  - [String](#string)
  - [Date and Time](#date-and-time)
  - [Spatial](#spatial)
- [SQL Statements](#sql-statements)
  - [Categories](#categories)
  - [CRUD](#crud)
  - [Where](#where)
  - [Sorting](#sorting)
  - [LIMIT](#limit)
  - [Aliases](#aliases)
- [Keys](#keys)
  - [Primary Key](#primary-key)
  - [Foreign Key](#foreign-key)
  - [Index](#index)
- [Working with Tables](#working-with-tables)
  - [Creating tables](#creating-tables)
  - [Viewing the table structure](#viewing-the-table-structure)
  - [Modifying tables](#modifying-tables)
  - [Dropping tables](#dropping-tables)
  - [Adding and Removing Constraints](#adding-and-removing-constraints)
- [Advanced SQL Statements](#advanced-sql-statements)
  - [Aggregate Functions](#aggregate-functions)
  - [Grouping Data](#grouping-data)
  - [Filtering Groups](#filtering-groups)
  - [Join](#join)
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
  - [Composite Index Example](#composite-index-example)
  - [How Indexes Improve Performance](#how-indexes-improve-performance)
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
  - [Summary of Use Cases of TriggersS](#summary-of-use-cases-of-triggerss)
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
- [Data Backup and Restoration](#data-backup-and-restoration)
  - [`mysqldump`](#mysqldump)
    - [Basic Syntax](#basic-syntax-of-mysqldump)
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

# Introduction

Being an RDBMS, it provides features such as:

- Structured Query Language (SQL) support
- Multi-user access
- Security and authentication
- Backup and recovery mechanisms

## Key characteristics of MySQL

- Open-source – Free to use under the GNU General Public License.
- Cross-platform – Works on Windows, Linux, macOS, and more.
- Client-server model – MySQL server handles database operations while clients (applications, users) interact with it via SQL.
- ACID compliance (when using InnoDB engine) – Ensures data reliability and integrity in transactions.
- Widely used – Powers popular web applications like WordPress, Facebook (early days), and many e-commerce systems.

## Why Use MySQL?

Here are the main reasons why developers and companies use MySQL:

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

**Creating a Local Database**

```sql
-- Create a database for university management
CREATE DATABASE university;

-- Switch to the new database
USE university;

-- Create a table for students
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    email VARCHAR(100)
);
```

### Cloud Solutions

**Using MySQL on Amazon RDS**

1. Create RDS Instance
   - Go to AWS Console → RDS → Create database.
   - Select MySQL as the engine.
   - Choose free tier (for practice).
   - Set username (admin) and password.
2. Get Connection Endpoint

   - AWS gives you a host URL like:

   ```
   mydb-instance.abcd1234.us-east-1.rds.amazonaws.com
   ```

3. Connect to Cloud MySQL

   From local machine:

   ```
   mysql -h mydb-instance.abcd1234.us-east-1.rds.amazonaws.com -u admin -p
   ```

   Enter password → You are now connected to the cloud DB.

4. Run SQL Queries (same as local)

   ```sql
   CREATE DATABASE ecommerce;
   USE ecommerce;

   CREATE TABLE products (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(100),
       price DECIMAL(10,2)
   );
   ```

### Local vs Cloud Setup

| Feature          | Local Setup 🖥️               | Cloud Setup ☁️                      |
| ---------------- | ---------------------------- | ----------------------------------- |
| **Installation** | Manual (installer, config)   | Ready-to-use (just create instance) |
| **Cost**         | Free (Community Edition)     | Pay-as-you-go (some free tiers)     |
| **Scalability**  | Limited by your machine      | Auto-scaling, global reach          |
| **Maintenance**  | You manage backups, upgrades | Managed by cloud provider           |
| **Best for**     | Learning, small projects     | Production apps, enterprise systems |

## MySQL Workbench

MySQL Workbench is a graphical user interface (GUI) tool provided by Oracle for interacting with MySQL databases.

Instead of typing all SQL commands in the command line, Workbench gives you a visual environment to:

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

- Open the SQL editor tab.
- Run:
  ```sql
  CREATE DATABASE university;
  USE university;
  ```

#### Step 4: Create Tables (Visually or with SQL)

Option 1 – Write SQL:

```sql
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    email VARCHAR(100)
);
```

Option 2 – Use GUI:

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

### Connecting via MySQL Workbench

MySQL Workbench provides a graphical way to connect.

1. Open MySQL Workbench.
2. Click “+” to create a new connection.
3. Enter:
   - Connection Name: e.g., Local MySQL
   - Hostname: `localhost` or remote server IP/URL
   - Port: `3306` (default)
   - Username: `root` or another user
   - Password: (store or enter each time)
4. Click Test Connection → If successful, Save.
5. Double-click the connection → Opens SQL Editor.

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

# Basics

**Database:** A database is a structured collection of data that is stored and managed in such a way that it can be easily accessed, retrieved, and manipulated.

**Table:** A table is a collection of data organized in rows and columns within a database. Each table typically represents a single type of entity.

**Row:** A row is a single record in a table. Each row contains data that conforms to the structure defined by the table's columns.

**Column:** A column defines a specific piece of data that each row in a table must have. Columns are also referred to as fields, and they have a specific data type.

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

## String

| **Data Type** | **Description**                                                           |
| ------------- | ------------------------------------------------------------------------- |
| `CHAR`        | Fixed-length string, up to 255 characters.                                |
| `VARCHAR`     | Variable-length string, up to 65,535 characters (depending on row size).  |
| `TEXT`        | Long text data, used for large strings (e.g., articles or comments).      |
| `TINYTEXT`    | Short text, up to 255 characters.                                         |
| `MEDIUMTEXT`  | Medium-length text, up to 16,777,215 characters.                          |
| `LONGTEXT`    | Very long text, up to 4,294,967,295 characters.                           |
| `BLOB`        | Binary Large Object, used for binary data like images or files.           |
| `ENUM`        | String object with predefined values, e.g., `'small', 'medium', 'large'`. |
| `SET`         | String object storing multiple predefined values (comma-separated).       |

## Date and Time

| **Data Type** | **Description**                                                                               |
| ------------- | --------------------------------------------------------------------------------------------- |
| `DATE`        | Stores date in `YYYY-MM-DD` format.                                                           |
| `DATETIME`    | Stores both date and time in `YYYY-MM-DD HH:MM:SS` format.                                    |
| `TIMESTAMP`   | Similar to `DATETIME`, but it automatically updates with the current date/time when modified. |
| `TIME`        | Stores time in `HH:MM:SS` format.                                                             |
| `YEAR`        | Stores the year in 4-digit format, e.g., `2024`.                                              |

## Spatial

| **Data Type** | **Description**           |
| ------------- | ------------------------- |
| `GEOMETRY`    | Stores spatial data.      |
| `POINT`       | Stores a single point.    |
| `LINESTRING`  | Stores a line or path.    |
| `POLYGON`     | Stores a polygon or area. |

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

- column and value order should be same
- it's not mandatory to follow the order of column as same as the order of column during definition, just maintain that it's follow order in sql command
- any value that goes into a VARCHAR, CHAR, DATE or TEXT column has single quotes
- you can skip column names but values order should be same as column and can't leave any column
- for multiple insertion separate all tuple with comma
- you can insert data only in specified columns by skipping other column name in sql command

### Read

```sql
SELECT */column_name FROM table_name;
```

- `*` return all column

### Update

```sql
UPDATE table_name SET column_name=value WHERE column_name=value;
```

- in this way you can update multiple column for a single record
- if you want to update multiple record, you have to use CASE
- but with CASE, you can only modify one single column
- command: UPDATE table_name SET column_name CASE WHEN column_name_1=value THEN new_value END;
- column_name value will be updated with new_value

### Delete

```sql
DELETE FROM table_name WHERE column_name=value;
```

- `WHERE` is necessary otherwise all records will be delete

## Where

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

# Keys

## Primary Key

A Primary Key is a column (or set of columns) that uniquely identifies each row in a table.

- It must be unique (no duplicate values).
- It cannot contain NULL values.
- A table can have only one primary key, but it can consist of multiple columns (called a composite primary key).

**Why use it?**

- Ensures that every record is uniquely identifiable.
- Helps MySQL internally organize data efficiently.

## Foreign Key

A Foreign Key is a column (or set of columns) that establishes a link between data in two tables.

- It references the primary key of another table.
- Ensures referential integrity (you can’t insert a value in the child table if it doesn’t exist in the parent table).
- If the parent row is deleted or updated, you can define what happens to the child rows (`CASCADE`, `SET NULL`, `RESTRICT`).

**Why use it?**

- Maintains consistency between related tables.
- Prevents orphan records.

### Example of Foreign Key

We already have the `Students` table. Now let’s create an `Enrollments` table that references students.

```sql
CREATE TABLE Enrollments (
    enrollment_id INT AUTO_INCREMENT,
    student_id INT,
    course_name VARCHAR(100) NOT NULL,
    PRIMARY KEY (enrollment_id),
    FOREIGN KEY (student_id) REFERENCES Students(student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
```

- `student_id` in `Enrollments` is a Foreign Key → it references `student_id` in `Students`.
- If a student is deleted from `Students`, all their enrollments are automatically deleted (`ON DELETE CASCADE`).
- This ensures no enrollment exists without a valid student.

## Index

An Index is a database object that improves the speed of data retrieval (SELECT queries) but can slow down `INSERT`, `UPDATE`, and `DELETE` operations because indexes must also be updated.

- Works like the index of a book → allows MySQL to find data faster.
- You can create indexes on one or more columns.
- The Primary Key automatically creates a unique index.

**Why use it?**

- To speed up search queries on frequently used columns.
- Improves performance for large datasets.

# Working with Tables

## Creating tables

`CREATE TABLE` is an SQL statement used to create a new table in a database.
When you create a table, you define:

- Table name
- Column names
- Data types for each column
- Constraints (rules like PRIMARY KEY, NOT NULL, UNIQUE, FOREIGN KEY, etc.)

Once created, the table becomes a permanent structure in your database (until dropped).

### General Syntax

```sql
CREATE TABLE table_name (
    column_name1 data_type constraint,
    column_name2 data_type constraint,
    ...
    table_constraints
);
```

- table_name → The name of your new table.
- column_name → Each column’s name.
- data_type → The kind of data the column will store (e.g., `INT`, `VARCHAR`, `DATE`, `DECIMAL`).
- constraint → Rules for the column (e.g., `NOT NULL`, `UNIQUE`, `PRIMARY KEY`).
- table_constraints → Constraints applied to the table as a whole (e.g., a `PRIMARY KEY` defined at the end).

### Example

```sql
CREATE TABLE Students (
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
DESCRIBE Students;  -- MySQL
\d Students;
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
DROP TABLE IF EXISTS Students;
```

If another table has a foreign key referencing the table you’re trying to drop, most databases will block the operation.
In PostgreSQL, you can force it with CASCADE:

```sql
DROP TABLE Students CASCADE;
```

- Drops Students and all dependent objects (foreign keys, views, etc.).
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

- PRIMARY KEY → Uniquely identifies each row.
- FOREIGN KEY → Links rows to another table.
- UNIQUE → Ensures all values in a column are different.
- NOT NULL → Prevents null values.
- CHECK → Ensures values meet a condition.
- DEFAULT → Sets a default value for a column.

### Adding Constraints with `ALTER TABLE`

#### Adding a PRIMARY KEY

```sql
ALTER TABLE Students
ADD CONSTRAINT pk_students PRIMARY KEY (student_id);
```

- `pk_students` → A custom name for the constraint.
- `(student_id)` → Column(s) used for the primary key.
- The column must be NOT NULL and unique.

#### Adding a FOREIGN KEY

```sql
ALTER TABLE Enrollments
ADD CONSTRAINT fk_student
FOREIGN KEY (student_id)
REFERENCES Students(student_id);
```

- `fk_student` → Custom name for the foreign key.
- `(student_id)` in Enrollments → Must match an existing `student_id` in `Students`.
- Ensures referential integrity.

#### Adding a UNIQUE Constraint

```sql
ALTER TABLE Students
ADD CONSTRAINT uq_email UNIQUE (email);
```

No two students can have the same email addres

#### Adding a CHECK Constraint

```sql
ALTER TABLE Students
ADD CONSTRAINT chk_gpa CHECK (gpa >= 0.00 AND gpa <= 4.00);
```

Ensures GPA stays in the valid range.

### Removing Constraints

#### Dropping a PRIMARY

```sql
ALTER TABLE Students
DROP CONSTRAINT pk_students;
```

#### Dropping a FOREIGN KEY

```sql
ALTER TABLE Enrollments
DROP CONSTRAINT fk_student;
```

#### Dropping a UNIQUE Constraint

```sql
ALTER TABLE Students
DROP CONSTRAINT uq_email;
```

#### Dropping a CHECK Constraint

```sql
ALTER TABLE Students
DROP CONSTRAINT chk_gpa;
```

### How to Find Constraint Names

Before removing a constraint, you must know its exact name.

```sql
\d Students; -- PostgreSQL
SHOW CREATE TABLE Students; -- MySQL
```

# Advanced SQL Statements

## Aggregate Functions

Aggregate functions in SQL are functions that perform calculations on multiple rows of data and return a single value.
They are often used with the `GROUP BY` clause to perform calculations on grouped data.

The most common ones are:

| Function  | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| `COUNT()` | Counts the number of rows (or non-NULL values if column is specified) |
| `SUM()`   | Calculates the total of a numeric column                              |
| `AVG()`   | Calculates the average of a numeric column                            |
| `MIN()`   | Finds the smallest value in a column                                  |
| `MAX()`   | Finds the largest value in a column                                   |

### Syntax

```sql
SELECT AGGREGATE_FUNCTION(column_name)
FROM table_name
WHERE condition;
```

- Can be combined with `GROUP BY` to apply per group.
- Can be combined with `HAVING` to filter groups based on aggregated values.

### Example of Aggregation

| order_id | customer_id | product  | quantity | price | order_date |
| -------- | ----------- | -------- | -------- | ----- | ---------- |
| 1        | C001        | Laptop   | 1        | 1000  | 2025-08-01 |
| 2        | C002        | Mouse    | 2        | 25    | 2025-08-01 |
| 3        | C001        | Keyboard | 1        | 45    | 2025-08-02 |
| 4        | C003        | Laptop   | 1        | 950   | 2025-08-02 |
| 5        | C002        | Mouse    | 3        | 25    | 2025-08-03 |

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

- Aggregate functions return a single result per group.
- Use `GROUP BY` to calculate per category/customer/date.
- Use `HAVING` for filtering aggregated results.

## Grouping Data

`GROUP BY` in SQL is used to arrange identical data into groups so you can apply aggregate functions (like `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) on each group separately.

Think of it as saying:

Take all the rows, group them based on this column (or set of columns), and then summarize each group.

### Syntax

```sql
SELECT column1, AGGREGATE_FUNCTION(column2)
FROM table_name
WHERE condition
GROUP BY column1;
```

- Every column in `SELECT` that is not inside an aggregate function must be listed in `GROUP BY`.
- `GROUP BY` comes after `WHERE` but before HAV`ING and `ORDER BY`.

### Example of `GROUP BY`

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
- `COUNT(*)` counts how many orders are in each grou

### `GROUP BY` Execution Order

SQL processes queries in this logical order:

1. `FROM` (get the data)
2. `WHERE` (filter rows)
3. `GROUP BY` (group rows)
4. `HAVING` (filter groups)
5. `SELECT` (calculate aggregates and select columns)
6. `ORDER BY` (sort results)

That’s why you can’t use an aggregate function in `WHERE` — it doesn’t exist yet.

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

1. In SELECT clause (Scalar Subquery)

   ```sql
   SELECT student_name,
       (SELECT department_name
        FROM Departments d
        WHERE d.department_id = s.department_id) AS dept_name
   FROM Students s;
   ```

   Adds department name directly in the result without a join.

2. In FROM clause (Derived Table / Inline View)

   ```sql
   SELECT dept_id, COUNT(*) AS total_students
   FROM (
       SELECT department_id AS dept_id
       FROM Students
   ) AS temp
   GROUP BY dept_id;
   ```

   Subquery acts like a temporary table (`temp`).

3. In HAVING clause

   ```sql
   SELECT course_id, COUNT(student_id) AS total_enrolled
   FROM Enrollments
   GROUP BY course_id
   HAVING COUNT(student_id) > (
       SELECT AVG(total)
       FROM (
           SELECT COUNT(student_id) AS total
           FROM Enrollments
           GROUP BY course_id
       ) AS sub
   );
   ```

   Finds courses where enrollment is greater than the average enrollment across all courses.

### Subquery vs Join

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
FROM Students s
INNER JOIN Teachers t ON s.email = t.email;
```

OR using subquery:

```sql
SELECT name, email FROM Students
WHERE email IN (SELECT email FROM Teachers);
```

- Finds records that exist in both tables (intersection).
- Works like `INTERSECT`.

### Comparing UNION vs INTERSECT

| Feature               | UNION               | INTERSECT (simulated in MySQL)        |
| --------------------- | ------------------- | ------------------------------------- |
| Combines rows         | ✅ Yes              | ❌ No (filters only common rows)      |
| Removes duplicates    | ✅ By default       | ✅ Naturally (since only common rows) |
| Keeps duplicates      | ✅ With `UNION ALL` | ❌ Not applicable                     |
| Availability in MySQL | ✅ Native support   | ❌ Must simulate using `JOIN` or `IN` |

### Example of `UNION` and `INTERSECT`

Suppose we have two mailing lists:

- `EventRegistrations` (people who registered for an event).
- `NewsletterSubscribers` (people who subscribed to the newsletter).

1. People in either list (UNION):
   ```sql
   SELECT email FROM EventRegistrations
   UNION
   SELECT email FROM NewsletterSubscribers;
   ```
2. People in both lists (INTERSECT):
   ```sql
   SELECT email FROM EventRegistrations
   WHERE email IN (SELECT email FROM NewsletterSubscribers);
   ```

- `UNION` gives everyone we can contact.
- `INTERSECT` gives our most engaged people (registered + subscribed).

# Indexes and Performance

An index in a database is like the index of a book — instead of reading the whole book to find a topic, you can go directly to the page numbers listed.

In SQL:

- An index is a data structure that stores pointers to rows in a table, organized to make lookups faster.
- Without an index, SQL must perform a full table scan (check every row).
- With an index, SQL can jump directly to the matching rows.

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

**Example Table:**

```sql
CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(200),
    country VARCHAR(50)
);
```

Adding an index on `email`

```sql
CREATE INDEX idx_email ON customers(email);
```

Now, a query like:

```sql
SELECT * FROM customers WHERE email = 'alice@example.com';
```

Will use `idx_email` to find the row quickly.

## Composite Index Example

If we often search by `country` and `name`:

```sql
CREATE INDEX idx_country_name ON customers(country, name);
```

- This index works for queries filtering by `(country)` or `(country, name)`.
- It will not be used efficiently for just `(name)` unless `country` is also in the WHERE clause.

## How Indexes Improve Performance

Without index:

- DB scans all rows (O(n) complexity).
- Slower for large datasets.

With index:

- DB uses B-Tree navigation (O(log n) complexity).
- Much faster for lookups, filtering, sorting, joins.

**Downsides of Indexes**
Indexes are not free:

1. Storage cost — They take extra disk space.
2. Write cost — Inserts, updates, and deletes become slower because the index must also be updated.
3. Over-indexing — Too many indexes can harm performance.

**Checking Index Usage**

You can check if your query uses an index:

```sql
EXPLAIN SELECT * FROM customers WHERE email = 'alice@example.com';
```

If it says Index Scan, it’s using the index.
If it says Seq Scan, it’s doing a full table scan.

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

# Data Backup and Restoration

## `mysqldump`

- `mysqldump` is a command-line utility provided by MySQL.
- It is used to export (backup) databases into a text file containing:
  - `CREATE TABLE` statements (schema)
  - `INSERT INTO` statements (data)
- This file can later be used to restore (import) the database.

Think of it as taking a snapshot of your database that can be replayed later to rebuild it.

**Why Use `mysqldump`?**

- To backup your database regularly (safety against crashes).
- To migrate a database from one server to another.
- To move data between environments (development → production).
- To export specific tables or records for analysis.

### Basic Syntax of `mysqldump`

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
