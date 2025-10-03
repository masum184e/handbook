# Introduction
DuckDB is an embedded analytical database designed for OLAP (Online Analytical Processing) workloads.
Think of it as "SQLite for analytics."

- SQLite is widely used as an embedded transactional database (OLTP).
- DuckDB fills the gap for analytical queries (OLAP), such as aggregations, joins, filtering, and statistical analysis on large datasets.

It’s written in C++ and designed to run inside your application, without requiring a separate server or heavy setup.

## Key Features (Foundations of DuckDB)

1. Embedded: Runs inside your app, like SQLite. No server or external dependency.

2. Columnar StorageL: Unlike SQLite (row-based), DuckDB stores data in columns, making it efficient for analytics (scans, aggregations, filtering).

3. Vectorized Execution Engine: Uses SIMD and vectorized operations to process data in batches for speed.

4. SQL Interface: Fully supports SQL-92 and extensions (window functions, complex joins, nested queries, etc.).

5. Interoperability: Can read/write from Parquet, CSV, JSON, and integrate directly with Pandas, R, Arrow, Spark, and Polars.

6. OLAP Focus
Optimized for queries like:

- "What’s the average sales per region over the last 5 years?"
- "Which products have the highest revenue growth?"

## Use Cases of DuckDB

- Data Science / Analytics: Run SQL queries directly on CSV/Parquet files without a database server.

- Embedded Analytics: Power dashboards or apps with local analytical queries.

- Machine Learning Pipelines: Preprocessing data before training (filter, aggregate, join datasets).

- Exploratory Data Analysis (EDA): Lightweight alternative to loading datasets into Postgres or a data warehouse.

- Offline Analytics: Mobile/desktop apps that need OLAP queries without a server.

## DuckDB vs SQLite
| Feature     | SQLite                               | DuckDB                                   |
| ----------- | ------------------------------------ | ---------------------------------------- |
| Focus       | OLTP (transactions)                  | OLAP (analytics)                         |
| Storage     | Row-oriented                         | Column-oriented                          |
| Workloads   | Insert/update/read one row at a time | Scan, filter, aggregate millions of rows |
| Typical Use | Mobile apps, embedded DB             | Data analysis, scientific computing      |
| Integration | Works with apps, IoT, small DBs      | Works with Python, R, Pandas, Parquet    |

- SQLite = Excel for writing rows
- DuckDB = Excel PivotTables for analyzing millions of rows

## DuckDB vs OLAP Databases
| Feature    | DuckDB                                                | Cloud OLAP DBs                       |
| ---------- | ----------------------------------------------------- | ------------------------------------ |
| Deployment | Embedded, runs locally in-process                     | Server/cluster/cloud                 |
| Data Size  | Millions to tens of GBs (fits in memory/disk locally) | Terabytes to petabytes               |
| Cost       | Free, no server needed                                | Pay per query/storage                |
| Use Case   | Lightweight local analytics                           | Enterprise-scale analytics, BI tools |

- DuckDB = Pocket calculator for analytics (local, lightweight).
- BigQuery/Snowflake = Supercomputer for analytics (distributed, massive scale).

# Installation
DuckDB is designed to be simple and lightweight, like SQLite. You don’t need a server, daemon, or cluster setup. Installation depends on your environment:

**Command Line Interface (CLI)**

- DuckDB provides a standalone executable.
- Download from: [https://duckdb.org/docs/installation](https://duckdb.org/docs/installation)
- Place it in your `$PATH`.

Then run:
```bash
duckdb
```

This opens an interactive SQL shell (similar to SQLite).

- In python, via pip `pip install duckdb`.
- In R, via CRAN `install.packages("duckdb")`.
- In Node.js, via npm `npm i duckdb` and verify with `node -e "console.log(require('duckdb').version)"`
- DuckDB also runs in browsers using WebAssembly.
    - Install: `npm install @duckdb/duckdb-wasm`
    - Useful for analytics in client-side apps without a server.
    - Queries work the same way as in Node.js.

## Setup
1. Using DuckDB CLI
```bash
duckdb my_database.duckdb
```
- Creates (or opens) a DuckDB database file `my_database.duckdb`.
- You can also run queries directly:
```bash
duckdb -c "SELECT 42;"
```
2. Using DuckDB in Python
```py
import duckdb

# Connect to an in-memory DB (no file saved)
con = duckdb.connect()

# Or connect to a persistent file
con = duckdb.connect("my_database.duckdb")

# Create a table and insert data
con.execute("CREATE TABLE sales (id INTEGER, amount DOUBLE)")
con.execute("INSERT INTO sales VALUES (1, 100.5), (2, 200.0)")

# Query the data
df = con.execute("SELECT * FROM sales").fetchdf()
print(df)
```
3. Using DuckDB in Node.js
DuckDB uses an asynchronous API with `Database` and `Connection` objects.
```ts
// Import DuckDB
const duckdb = require('duckdb');

// Create a DuckDB database (in-memory, use a file path for persistence)
const db = new duckdb.Database(':memory:');

// Create a connection
const con = db.connect();

// Run SQL queries
con.run("CREATE TABLE sales(id INTEGER, region VARCHAR, amount DOUBLE)", (err) => {
  if (err) throw err;

  con.run("INSERT INTO sales VALUES (1, 'North', 100.5), (2, 'South', 200.0), (3, 'North', 150.0)", (err) => {
    if (err) throw err;

    // Query data
    con.all("SELECT region, SUM(amount) AS total_sales FROM sales GROUP BY region", (err, rows) => {
      if (err) throw err;
      console.log(rows);
    });
  });
});
```
Using Promieses: DuckDB’s API is callback-based, but you can wrap it with Promises for cleaner async code.
```ts
const duckdb = require('duckdb');
const db = new duckdb.Database(':memory:');
const con = db.connect();

function query(sql) {
  return new Promise((resolve, reject) => {
    con.all(sql, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

(async () => {
  await query("CREATE TABLE items(id INTEGER, name VARCHAR, price DOUBLE)");
  await query("INSERT INTO items VALUES (1, 'Apple', 0.5), (2, 'Banana', 0.3), (3, 'Mango', 1.2)");

  const result = await query("SELECT name, price*2 AS double_price FROM items WHERE price > 0.4");
  console.log(result);
})();
```
### Configuration Notes

- DuckDB doesn’t need config files or tuning (unlike Postgres/MySQL).
- By default:
    - `':memory:'` → runs in-memory DB.
    - `mydb.duckdb` → persistent file-based DB.
- Can handle CSV, Parquet, JSON directly without ETL.

# DuckDB CLI

The DuckDB CLI is a standalone tool that lets you interact with DuckDB directly from the terminal, just like how you use SQLite’s CLI.
It’s great for:

- Running quick SQL queries on files (CSV, Parquet, JSON).
- Creating and managing DuckDB databases (`.duckdb` files).
- Exploring datasets without Python/R.

1. Start the CLI with `duckdb`
2. Connecting to a Database
In-memory session (temporary, disappears when closed):
```bash
duckdb
```

Persistent database file:
```bash
duckdb my_database.duckdb
```

If the file doesn’t exist, DuckDB will create it.
3. Running SQL Queries
```sql
CREATE TABLE sales(id INTEGER, region TEXT, amount DOUBLE);

INSERT INTO sales VALUES 
(1, 'North', 100.5), 
(2, 'South', 200.0), 
(3, 'North', 150.0);

SELECT region, SUM(amount) AS total_sales
FROM sales
GROUP BY region;
```
DuckDB CLI can query files directly(without importing), which is very powerful.
```sql
SELECT region, AVG(amount) AS avg_sales
FROM 'sales.csv'
GROUP BY region;
```
## Useful CLI Commands
| Command             | Description                                      |
| ------------------- | ------------------------------------------------ |
| `.help`             | Show help info                                   |
| `.databases`        | List connected databases                         |
| `.tables`           | Show tables in current DB                        |
| `.schema`           | Show schema of current DB                        |
| `.mode`             | Change output format (e.g., csv, json, markdown) |
| `.open file.duckdb` | Open another database                            |
| `.quit`             | Exit CLI                                         |
## Exporting Results

You can save query results to files directly from CLI:

CSV:
```sql
COPY (SELECT * FROM sales) TO 'sales_export.csv' (HEADER, DELIMITER ',');
```

Parquet:
```sql
COPY (SELECT * FROM sales) TO 'sales_export.parquet' (FORMAT 'parquet');
```

# DuckDB Architecture
DuckDB is often called “SQLite for Analytics”, but under the hood its architecture is very different because it’s optimized for analytical (OLAP) queries rather than transactional (OLTP) workloads.

## Embedded Database

- In-process: DuckDB runs inside your application (Python, R, Node.js, CLI, C++).
- No server, no daemon, no network connection — like SQLite.
- Data is stored either:
    - In-memory (`:memory:` mode).
    - In a single `.duckdb` file on disk.
This makes it portable and easy to distribute.

## Storage Model

- Columnar Storage:
    - Data is stored in columns, not rows.
    - This is efficient for analytics (e.g., scanning one column of millions of rows).
    - Example: Running `AVG(salary)` only needs the `salary` column, not the whole row.
- On-disk + In-memory:
    - DuckDB supports both persistent databases and querying external files (CSV, Parquet).
    - You can query directly on files without importing.

## Query Execution Engine

- Vectorized Execution:
    - Instead of processing rows one by one, DuckDB processes data in vectors (chunks of thousands of values).
    - Each operator (filter, join, aggregate) processes a batch of values at once.
    - Uses SIMD (Single Instruction Multiple Data) to speed up operations.
- Pipeline Architecture:
    - Queries are broken down into pipelines of operators.
    - Example: `SCAN → FILTER → AGGREGATE → OUTPUT`.
    - Operators work in a pull-based model: the output operator requests data from the one below it.

## Query Optimizer

DuckDB includes a relational query optimizer:
- Reorders joins.
- Pushes down filters.
- Uses statistics to choose efficient plans.
- Converts logical plan → physical plan.

```sql
SELECT region, SUM(amount)
FROM sales
WHERE amount > 100
GROUP BY region;
```
Optimization will:

1. Push down filter (`amount > 100`) before aggregation.
2. Aggregate only necessary data.

## File Format Interoperability

- CSV, Parquet, JSON: DuckDB can scan them natively.
- Apache Arrow: zero-copy integration for in-memory analytics.
- No ETL required → you can query data “as is”

## Concurrency Model

DuckDB is single-process, multi-threaded:

- Can parallelize queries internally (scan, join, aggregate).
- But not designed for many concurrent transactional users (unlike PostgreSQL).
- Ideal for one analytical user/session at a time.

## Architecture in Action
Let’s say we have a dataset `sales.csv`:
```csv
id,region,amount
1,North,120
2,South,90
3,North,150
4,East,200
5,West,300
6,South,120
```
Query
```sql
SELECT region, AVG(amount) AS avg_sales
FROM 'sales.csv'
WHERE amount > 100
GROUP BY region;
```
1. Storage Access: DuckDB reads only the `region` and `amount` columns from the CSV (columnar optimization).
2. Vectorized Scan: Reads data in chunks (e.g., 1000 rows at a time).
3. Filter Pushdown: Applies `amount > 100` immediately while scanning (reduces rows early).
4. Aggregate Operator
- Groups by `region`.
- Calculates `AVG(amount)` using vectorized operators.
5. Result Materialization: Produces the final result set.

# In-Memory Columnar Storage
## What does "Columnar Storage" mean?

- Row-oriented storage (OLTP style): Data is stored row by row.
    - Example (SQLite, PostgreSQL row tables):
        ```bash
        Row1 → [id=1, region=North, amount=120]
        Row2 → [id=2, region=South, amount=90]
        ```
    - Good for transactions (insert/update/delete), because entire rows are stored together.
- Column-oriented storage (OLAP style): Data is stored by column.
    - Example (DuckDB, analytical DBs like Parquet, ClickHouse):
        ```bash
        id     → [1, 2, 3, 4, 5, 6]
        region → [North, South, North, East, West, South]
        amount → [120, 90, 150, 200, 300, 120]
        ```
    - Good for analytics (aggregations, scans), because you only read the columns you need.

DuckDB uses columnar storage in-memory and on-disk, making it very efficient for analytical queries.

## Why Columnar Storage in Memory?

- Analytical queries often touch few columns, many rows.
```sql
SELECT AVG(amount) FROM sales;
```
    - Only `amount` column needs to be read.
    - In row-storage, you’d also read `id` and `region` (wasted I/O).
    - In column-storage, you read only `amount`.
- Better compression
    - Consecutive values in a column are often similar (e.g., many `North` regions).
    - Can compress efficiently → less memory use.
- Vectorized processing
    - Since values are contiguous in memory, DuckDB can apply SIMD instructions to process thousands of values at once.

## DuckDB’s In-Memory Layout

DuckDB organizes data into:
- Columns → Vectors → Chunks
    - A vector = typically ~1024 values of one column stored contiguously.
    - A chunk = collection of vectors (one per column).
    - Queries operate on these chunks, which fit well in CPU cache.

This balances between row-based and fully columnar systems.

# Basic SQL
## SQL Statement Structure
The basic order of clauses in a SQL query is:
```sql
SELECT [columns/expressions]
FROM [table or file]
WHERE [filter conditions]
GROUP BY [columns]
HAVING [filter on groups]
ORDER BY [columns]
LIMIT [n]
```

Not all clauses are required — you can start with a simple `SELECT`.

1. Define new table
```sql
CREATE TABLE sales (
    id INTEGER,
    region VARCHAR,
    amount DOUBLE
);
```
2. Add data into the table
```sql
INSERT INTO sales VALUES (1, 'North', 120), (2, 'South', 90);
```
3. Retrieve data
```sql
SELECT id, region, amount FROM sales;
```
**Query in Action**
```sql
SELECT region,
       COUNT(*) AS total_orders,
       SUM(amount) AS total_sales,
       AVG(amount) AS avg_order_value
FROM 'sales.csv'
WHERE amount > 100
GROUP BY region
HAVING SUM(amount) > 200
ORDER BY total_sales DESC
LIMIT 3;
```
1. FROM 'sales.csv' → Reads directly from the CSV.
2. WHERE amount > 100 → Filters rows (only orders >100).
3. GROUP BY region → Groups rows by `region`.
4. COUNT, SUM, AVG → Aggregates per group.
5. HAVING SUM(amount) > 200 → Keeps only groups with >200 sales.
6. ORDER BY total_sales DESC → Sorts by sales, largest first.
7. LIMIT 3 → Returns top 3 regions.
