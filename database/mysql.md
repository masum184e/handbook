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