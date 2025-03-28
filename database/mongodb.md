# Contents

- [NoSQL](#nosql)
  - [MongoDB](#mongodb)
- [BSON](#bson)
- [CRUD](#crud)
  - [Create](#create)
  - [Read](#read)
  - [Update](#update)
  - [Delete](#delete)
  - [Replace](#replace)
- [Query](#query)
  - [Comparison](#comparison)
  - [Logical](#logical)
  - [Sorting](#sorting)
  - [Pagination](#pagination)
- [Bulk Operations](#bulk-operations)
- [Aggregation Pipeline](#aggregation-pipeline)
- [Relationships](#relationships)
  - [One to One](#one-to-one)
  - [One to Many](#one-to-many)
  - [Many to Many](#many-to-many)
- [Middleware](#middleware)
  - [Document](#document-middleware)
  - [Query](#query-middleware)
- [Transactions](#transactions)
  - [ACID](#acid-properties-in-mongodb-transactions)
  - [Example](#example-1)

# NoSQL

NoSQL stands for "Not Only SQL," which reflects its flexibility beyond the structured, tabular format of SQL databases. They are particularly useful for handling unstructured or semi-structured data, scaling easily across distributed systems, and supporting a variety of data models.

NoSQL databases are flexible in terms of structure. There is no fixed schema, which means you can insert data without a predefined structure.

It is known for its ability to scale horizontally through sharding and supports a rich querying language for various use cases, including real-time analytics, content management, and catalog applications.

## Common Types of NoSQL Databases:

- Document-based Databases
- Key-Value Databases
- Column-family Databases
- Graph Databases

## MongoDB

MongoDB is a document-based NoSQL database. It stores data in flexible, JSON-like documents called BSON (Binary JSON), making it easy to handle semi-structured data. Unlike relational databases, where you need to define tables and relationships beforehand, MongoDB allows you to store documents with varying structures in the same collection.

In MongoDB, data is stored in a document format, which uses BSON for storing these documents, and for representing data it just uses JSON-like structure.

In MongoDB, each document has a size limit of 16 MB. This means that the total size of a single document, including its fields, values, and any embedded sub-documents or arrays, cannot exceed 16 MB. This limit applies to all documents stored in a MongoDB collection.

### Key Concepts in MongoDB

- **Document:** A basic unit of data, which is similar to a row in a relational database. It is represented in BSON format, allowing rich data types and nested structures.
- **Collection:** A group of MongoDB documents, similar to a table in a relational database.
- **Database:** A container for collections, similar to a relational database schema.
- **Field:** A key-value pair within a document, similar to a column in a table.
- **Replica Set:** A replica set is a group of MongoDB servers that maintain the same dataset, providing redundancy and high availability.

  A replica set consists of:

  - **Primary Node:** Handles all write operations and, by default, read operations.
  - **Secondary Nodes:** Maintain copies of the primary’s data and can serve read operations (if configured).
  - **Arbiter:** Participates in elections to choose a new primary if the current one fails but does not store data.

- **Sharding:** Sharding is MongoDB’s method for horizontal scaling, distributing data across multiple servers (shards). A shard is a subset of data. MongoDB partitions data into chunks, and each chunk is distributed across shards.
  - **Shard Key:** A field or fields that determine how data is distributed across shards.
  - **Config Servers:** Store metadata and manage the distribution of data in the sharded cluster.
  - **Mongos:** Acts as a query router, directing client requests to the appropriate shard.

### MongoDB Shell

The **MongoDB Shell** (`mongosh`) is an interactive command-line interface that allows users to interact with MongoDB servers. It is built on JavaScript, which means you can use JavaScript syntax and methods to interact with the database.

#### Start the MongoDB Shell

```js
mongosh;
```

This command starts the shell and attempts to connect to a MongoDB instance running on localhost at the default port 27017.

If you need to connect to a MongoDB instance running on a different host or port, you can specify it like this:

```js
mongosh "mongodb://<host>:<port>"
```

#### Operations

- `show dbs` - List all databases on the connected MongoDB server.
- `use <database_name>` - Switch to a Database or Create One
- `db.createCollection("<collection_name>")` - Create a collection

# BSON

BSON (Binary JSON) is a binary-encoded serialization of JSON-like documents.

BSON supports all JSON types and includes additional data types such as:

- **Date**: Stores date-time values.
- **ObjectId**: A unique identifier generated by MongoDB for each document.
- **Binary Data**: Stores binary data like images or files.
- **MinKey/MaxKey**: Special types used for comparing BSON elements.
- **Int32, Int64, Double**: Different numeric types for storing integer and floating-point numbers.

**Example:**
When you insert a JSON-like document into MongoDB, it converts it into BSON format for internal storage.

**JSON:**

```json
{
  "name": "Wireless Mouse",
  "price": 25.99,
  "inStock": true,
  "manufacturedDate": "2024-01-01T00:00:00Z",
  "specifications": {
    "color": "black",
    "weight": 0.1
  }
}
```

**BSON:**

```bson
{
   "_id": ObjectId("64b8d2e3e8c3bc7fbb9d3e45"),
   "name": "Wireless Mouse",
   "price": 25.99,
   "inStock": true,
   "manufacturedDate": ISODate("2024-01-01T00:00:00Z"),
   "specifications": {
      "color": "black",
      "weight": Double(0.1)
   }
}
```

# CRUD

## Create

### `insertOne()`

```js
db.users.insertOne({
  name: "Alice",
  age: 28,
});
```

### `insertMany()`

```js
db.users.insertMany([
  {
    name: "Bob",
    age: 32,
  },
  {
    name: "Charlie",
    age: 25,
  },
]);
```

## Read

### `find()`

```js
db.users.find({ name: "Alice" });
```

### `findOne()`

```js
db.users.findOne({ name: "Alice" });
```

## Update

### `updateOne()`

```js
db.users.updateOne({ name: "Alice" }, { $set: { age: 29 } });
```

### `update()`

```
db.users.updateMany(
   { "age": { "$lt": 30 } },
   { "$set": { "status": "young" } }
);
```

## Delete

### `deleteOne()`

```js
db.users.deleteOne({ name: "Charlie" });
```

### `delete()`

```js
db.users.deleteMany({ age: { $lt: 30 } });
```

## replace

It is used to replace an entire document in a collection with a new document. It performs an update operation by replacing the matched document with the new data provided. Unlike the `updateOne()` method, which can modify specific fields within a document, `replaceOne()` completely overwrites the existing document, except for the `_id` field, which remains unchanged.

**Syntax:**

```js
db.collection.replaceOne(
   <filter>,
   <replacement>,
)
```

- **filter**: A query to select the document you want to replace.
- **replacement**: The new document that will replace the old one.

### Key Points

- The replacement document must completely replace the existing document.
- The replacement document cannot contain any update operators like `$set`, `$inc`, etc. It must be a full, valid document.
- If the document to replace does not exist and the `upsert` option is set to `true`, a new document will be created.

### Example

**Existing Document:**

```js
{
  "_id": ObjectId("5f8d0d55b54764421b7156d9"),
  "name": "John",
  "age": 23,
  "major": "Computer Science"
}
```

**Implementation:**

```js
db.students.replaceOne(
  { name: "John" }, // Filter
  { name: "John Doe", age: 24, major: "Software Engineering" } // New document
);
```

**Output:**

```js
{
  "_id": ObjectId("5f8d0d55b54764421b7156d9"),  // _id remains unchanged
  "name": "John Doe",
  "age": 24,
  "major": "Software Engineering"
}
```

# Query

## Comparison

```js
db.users.find({ age: { $eq: 28 } });
```

- `$gt` - Greater Than
- `$gte` - Greater Than or Equal
- `$gt` - Less Than
- `$lte` - Less Than or Equal
- `$ne` - Not Equal
- `$in` - In
- `$nin` - Not In

## Logical

```js
db.users.find({
  $and: [{ age: { $gt: 25 } }, { age: { $lt: 30 } }],
});
```

- `$and` - Finds documents that match all conditions in the query.
- `$or` - Finds documents that match any condition in the query.
- `$not` - Negates a condition to find documents that do not match the specified query.
- `$nor` - Finds documents that do not match any of the specified conditions.

## Sorting

**Ascending:**

```js
db.users.find().sort({ age: 1 });
```

**Descending:**

```js
db.users.find().sort({ age: -1 });
```

## Pagination

- `limit()` - Limits the number of documents returned.
- `skip()` - Skips a specified number of documents.

## Combined

```js
db.users.find().sort({ age: 1 }).skip(5).limit(10);
```

# Bulk Operations

Bulk operations in MongoDB allow you to execute multiple write operations (inserts, updates, deletes) in a single request.

## Types of Bulk Operations

- **Ordered Bulk Operations**: Executes operations in the order they are defined. If an error occurs during one of the operations, MongoDB stops executing further operations.
- **Unordered Bulk Operations**: Executes operations in parallel without following a specific order. If an error occurs, MongoDB will continue executing the remaining operations.

## `bulkWrite()`

**Ordered:**

```js
db.users.bulkWrite([
  {
    insertOne: {
      document: {
        name: "Alice",
        age: 28,
      },
    },
  },
  {
    updateOne: {
      filter: { name: "Alice" },
      update: { $set: { age: 28 } },
    },
  },
  {
    deleteOne: {
      filter: { name: "Alice" },
    },
  },
]);
```

**Unordered:**

```js
db.users.bulkWrite(
  [
    {
      insertOne: {
        document: {
          name: "Alice",
          age: 28,
        },
      },
    },
    {
      updateOne: {
        filter: { name: "Alice" },
        update: { $set: { age: 28 } },
      },
    },
    {
      deleteOne: {
        filter: { name: "Alice" },
      },
    },
  ],
  { ordered: false }
);
```

# Aggregation Pipeline

An aggregation pipeline is a sequence of stages that are applied to a collection of documents. Each stage processes the input documents and produces an output that serves as the input for the next stage. The result of the pipeline is the outcome after the last stage processes the data.

## Common Stages in Aggregation Pipelines

1. `$match`: Filters documents based on specified conditions, similar to the `find` query.
2. `$group`: Groups input documents by a specified identifier and applies accumulators (like sum, average).
3. `$project`: Reshapes documents by including or excluding fields, creating computed fields, or reformatting data.
4. `$sort`: Sorts documents by a specified field in ascending or descending order.
5. `$limit`: Limits the number of documents passing through the pipeline.
6. `$skip`: Skips a specified number of documents.
7. `$unwind`: Deconstructs an array field into multiple documents, one per array element.
8. `$lookup`: Performs a left outer join with another collection, allowing data from related documents to be combined.
9. `$addFields`: Adds new fields to the documents.

## Operators

- **Arithmetic:** `$add`, `$subtract`, `$multiply`, `$divide`
  ```js
  finalPrice: { $subtract: ["$price", "$discount"] },
  ```
- **String:** `$concat`
  ```js
  fullName: {
    $concat: ["$firstName", " ", "$lastName"];
  }
  ```
- **Date:** `$year`, `$month`
  **Example Document:**
  ```js
  [
    { _id: 1, orderDate: ISODate("2024-01-15T10:00:00Z") },
    { _id: 2, orderDate: ISODate("2024-02-20T14:30:00Z") },
  ];
  ```
  **Implementation:**
  ```js
  $project: {
    year: { $year: "$orderDate" },
    month: { $month: "$orderDate" }
  }
  ```
  **Output:**
  ```js
  [
    { _id: 1, year: 2024, month: 1 },
    { _id: 2, year: 2024, month: 2 },
  ];
  ```
- **Conditional:** `$cond`
  ```js
  status: {
    $cond: { if: { $gte: ["$score", 60] }, then: "Pass", else: "Fail" }
  }
  ```
- **Array:** `$size`
  **Example Document:**
  ```js
  [
    { _id: 1, title: "Book A", authors: ["Author 1", "Author 2"] },
    { _id: 2, title: "Book B", authors: ["Author 3"] },
  ];
  ```
  **Implementation:**
  ```js
  db.books.aggregate([
    {
      $project: {
        title: 1,
        numberOfAuthors: { $size: "$authors" },
      },
    },
  ]);
  ```
  **Example Document:**

```json
[
  {
    "_id": 1,
    "product": "Laptop",
    "price": 1000,
    "quantity": 2,
    "date": "2024-01-10"
  },
  {
    "_id": 2,
    "product": "Phone",
    "price": 500,
    "quantity": 5,
    "date": "2024-01-11"
  },
  {
    "_id": 3,
    "product": "Tablet",
    "price": 300,
    "quantity": 7,
    "date": "2024-01-12"
  },
  {
    "_id": 4,
    "product": "Laptop",
    "price": 1100,
    "quantity": 1,
    "date": "2024-01-13"
  },
  {
    "_id": 5,
    "product": "Phone",
    "price": 600,
    "quantity": 3,
    "date": "2024-01-14"
  }
]
```

**Example:**

```js
db.sales.aggregate([
  // Stage 1: Calculate total revenue for each sale
  {
    $project: {
      product: 1,
      revenue: { $multiply: ["$price", "$quantity"] },
    },
  },
  // Stage 2: Group by product and sum the revenues
  {
    $group: {
      _id: "$product",
      totalRevenue: { $sum: "$revenue" },
    },
  },
  // Stage 3: Sort by total revenue in descending order
  {
    $sort: {
      totalRevenue: -1,
    },
  },
]);
```

**Explaination:**

1. **Stage 1 - `$project`:**

- This stage uses the $project operator to reshape each document, creating a new field called revenue by multiplying the price and quantity fields.
- The output of this stage includes the product and the revenue calculated for each document.

```js
[
  { _id: 1, product: "Laptop", revenue: 2000 },
  { _id: 2, product: "Phone", revenue: 2500 },
  { _id: 3, product: "Tablet", revenue: 2100 },
  { _id: 4, product: "Laptop", revenue: 1100 },
  { _id: 5, product: "Phone", revenue: 1800 },
];
```

2. **Stage 2 - `$group`:**

- Groups the documents by the `product` field (using `_id: "$product"`) and calculates the total revenue for each product using `$sum`.
- The result of this stage aggregates the revenue for each product type.

```js
[
  { _id: "Phone", totalRevenue: 4300 },
  { _id: "Laptop", totalRevenue: 3100 },
  { _id: "Tablet", totalRevenue: 2100 },
];
```

3. **Stage 3 - `$sort`:**

- Sorts the results from the previous stage in descending order of `totalRevenue`.
- This stage helps identify the product with the highest revenue.

```js
[
  { _id: "Phone", totalRevenue: 4300 },
  { _id: "Laptop", totalRevenue: 3100 },
  { _id: "Tablet", totalRevenue: 2100 },
];
```

### `$match`

```js
db.sales.aggregate([
  {
    $match: { product: "Laptop" },
  },
]);
```

**Output:**

```json
[
  {
    "_id": 1,
    "product": "Laptop",
    "price": 1000,
    "quantity": 2,
    "date": "2024-01-10"
  },
  {
    "_id": 4,
    "product": "Laptop",
    "price": 1100,
    "quantity": 1,
    "date": "2024-01-13"
  }
]
```

### `$unwind`

**Example Document:**

```json
[
  { "_id": 1, "product": "Phone", "tags": ["electronics", "mobile"] },
  { "_id": 2, "product": "Laptop", "tags": ["electronics", "computer"] }
]
```

**Implementation**

```js
{
  $unwind: "$tags";
}
```

```json
[
  { "_id": 1, "product": "Phone", "tags": "electronics" },
  { "_id": 1, "product": "Phone", "tags": "mobile" },
  { "_id": 2, "product": "Laptop", "tags": "electronics" },
  { "_id": 2, "product": "Laptop", "tags": "computer" }
]
```

### `$lookup`

```js
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customerId",
      foreignField: "_id",
      as: "customerDetails",
    },
  },
]);
```

# Relationships

## One-to-One

```js
const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" }, // Reference to Profile
});

// Define the Post schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to User
});

// Create models
const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);
```

**Read:**

```js
const user = await User.findById(req.params.id).populate("profile");
```

## One-to-Many

```js
import mongoose from "mongoose";

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }], // Array of Post IDs
});

// Define the Post schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to User
});

// Create models
const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);
```

**Read:**

```js
const user = await User.findById(req.params.id).populate("posts");
```

## Many-to-Many

```js
// Define the Student schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }], // Array of Course IDs
});

// Define the Course schema
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }], // Array of Student IDs
});

// Create models
const Student = mongoose.model("Student", studentSchema);
const Course = mongoose.model("Course", courseSchema);
```

**Create and Read:**

```js
// Enroll a Student in a Course
app.post("/enroll", async (req, res) => {
  const { studentId, courseId } = req.body;
  try {
    await Student.findByIdAndUpdate(studentId, {
      $addToSet: { courses: courseId },
    });
    await Course.findByIdAndUpdate(courseId, {
      $addToSet: { students: studentId },
    });
    res.status(200).json({ message: "Student enrolled successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get Student with Courses
app.get("/students/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate("courses"); // Populate courses
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
```

# Middleware

## Types of Middleware in Mongoose

- **Document Middleware** (Pre/Post Hooks)
  - Executed before or after a document is saved, updated, validated, or deleted.
  - Common methods: save, validate, remove, updateOne, deleteOne.
- **Query Middleware** (Pre/Post Hooks)
  - Executed before or after executing a query.
  - Common methods: find, findOne, findOneAndUpdate, findOneAndDelete, etc.

## Document Middleware

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Pre-save middleware to hash the password before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hashPassword(this.password); // Assume `hashPassword` is a function that hashes passwords.
  }
  next();
});

// Post-save middleware to show message after saving
userSchema.post("save", function (doc, next) {
  console.log(`User ${doc.name} has been saved.`);
  next();
});
```

## Query Middleware

```js
userSchema.pre("find", function (next) {
  this.where({ isActive: true }); // Only find active users.
  next();
});

userSchema.post("find", function (docs, next) {
  console.log(`Found ${docs.length} users.`);
  next();
});
```

# Transactions

It allow multiple operations to be grouped together and executed as a single unit, ensuring atomicity, consistency, isolation, and durability (ACID properties). This is particularly useful in cases where you need to ensure that either all the operations in a group are successfully applied or none of them are applied.

## ACID Properties in MongoDB Transactions:

1. **Atomicity**: All operations in a transaction are completed successfully or none at all. If any operation fails, the transaction is rolled back, and no changes are applied.
2. **Consistency**: Transactions guarantee that data is written in a consistent state.
3. **Isolation**: Transactions isolate the operations from other operations. In-progress transactions are not visible to other reads or writes until they are committed.
4. **Durability**: Once a transaction is committed, the changes are guaranteed to persist, even in case of a system failure.

## Example

Suppose you have two collections: `accounts` and `transactions`. You want to move money from one account to another. This operation requires updating two documents (debit from one and credit to another) and you want to ensure that both updates either succeed or fail together.

**Collection:**

```json
{
  "accounts": [
    { "_id": 1, "name": "Alice", "balance": 1000 },
    { "_id": 2, "name": "Bob", "balance": 500 }
  ],
  "transactions": []
}
```

**Transaction:**

```js
// Create a new MongoClient
const client = new MongoClient(uri);
try {
  await client.connect();

  // Start a session
  const session = client.startSession();

  // Perform the transaction
  // Start a session.
  session.startTransaction();

  // Operation 1: Debit 200 from Alice's account
  const debitResult = await accountsCollection.updateOne(
    { _id: 1, balance: { $gte: 200 } }, // Ensure Alice has enough balance
    { $inc: { balance: -200 } },
    { session }
  );
  if (debitResult.modifiedCount !== 1) {
    throw new Error("Insufficient funds in Alice’s account");
  }

  // Operation 2: Credit 200 to Bob's account
  await accountsCollection.updateOne(
    { _id: 2 },
    { $inc: { balance: 200 } },
    { session }
  );

  // Operation 3: Record the transaction
  await transactionsCollection.insertOne(
    {
      from: "Alice",
      to: "Bob",
      amount: 200,
      date: new Date(),
    },
    { session }
  );

  // Commit the transaction
  await session.commitTransaction();
  console.log("Transaction successfully committed.");
} catch (error) {
  console.error("Transaction aborted: ", error);
  await session.abortTransaction();
} finally {
  // End the session and close the connection
  await client.close();
}
```
- `startSession()` - Transactions in MongoDB are always executed within a session.
- `startTransaction()` - It initiates the transaction. All operations on the collections after this will be part of the transaction.
- `commitTransaction()` - If all operations succeed, the transaction is committed and all changes are applied.
- `abortTransaction()` - If any operation fails (like insufficient funds), the transaction is aborted and no changes are applied to the database.