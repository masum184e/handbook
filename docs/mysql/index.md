---
title: Introduction
sidebar_position: 1
---

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

## Questions

1. when using InnoDB engine ensures data reliability and integrity
2. how to perform caching.
3. practice cloud solutions
4. how to define `1-1`, `1-\*`, `\*-\*` relationship with foreign ey
5. constraint → Rules for the column (e.g., NOT NULL, UNIQUE, PRIMARY KEY). table_constraints → Constraints applied to the table as a whole (e.g., a PRIMARY KEY defined at the end).
6. Be very careful — CASCADE can remove more than you expect.
7. `DECIMAL(10, 2)` - what the value inserted for 3.5278 is it 3.52 or 3.53?
8. how B tree work during indexing
9. An index is a data structure that stores pointers to rows in a table, organized to make lookups faster.
