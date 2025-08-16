# Contents

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
- [Indexes and Performance](#indexes-and-performance)
  - [How Indexes Work Internally](#how-indexes-work-internally)
  - [Types of Indexes](#types-of-indexes)
  - [Creating an Index](#creating-an-index)
  - [Composite Index Example](#composite-index-example)
  - [How Indexes Improve Performance](#how-indexes-improve-performance)

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
