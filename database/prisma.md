- [Introduction](#introduction)
  - [ORM](#orm)
  - [Query Builder](#query-builder)
  - [Prisma](#prisma)
  - [How Prisma is different](#how-prisma-is-different)
- [Setting Up Project](#setting-up-project)
  - [Install Dependencies](#install-dependencies)
  - [Initialize Prisma](#initialize-prisma)
  - [Configure Database Connection](#configure-database-connection)
- [Prisma Client](#prisma-client)
  - [How Prisma Client is Generated](#how-prisma-client-is-generated)
  - [Using Prisma Client](#using-prisma-client)
  - [CRUD](#crud)

# Introduction

## ORM

ORM (Object Relational Mapper) is a tool that allows you to interact with your database using your programming language’s objects instead of writing raw SQL.

- You define models in your code (like `User`, `Post`).
- The ORM maps these models to database tables.
- Instead of writing SQL, you interact with objects (`user.name` instead of `SELECT name FROM users`).

Example (with a traditional ORM like Sequelize or TypeORM in JavaScript):

```ts
// Sequelize ORM
const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
});

const user = await User.create({ name: "Alice", email: "alice@example.com" });
console.log(user.id);
```

This creates a new user in the database. The ORM hides SQL behind objects.

## Query Builder

Query Builders provide a programmatic way to write SQL queries — they don’t map database tables to objects. They make SQL easier to construct dynamically but don’t abstract away the database schema.

```ts
// Knex Query Builder
const users = await knex("users")
  .where({ email: "alice@example.com" })
  .select("id", "name");

console.log(users);
```

Here, you still think in terms of SQL (`select`, `where`, `join`), just written in JS code instead of plain SQL.

## Prisma

Prisma is a next-generation database toolkit that combines the best of both worlds:

- Like an ORM, it generates a strongly-typed client from your database schema.
- Like a Query Builder, it gives you fine-grained control over queries.
- It’s type-safe, meaning if you use TypeScript, Prisma ensures that your queries are correct at compile time.

So Prisma is not just an ORM, not just a query builder — but a modern hybrid that improves developer experience.

## How Prisma is different

| Feature                 | ORM (e.g. Sequelize) | Query Builder (e.g. Knex) | Prisma                   |
| ----------------------- | -------------------- | ------------------------- | ------------------------ |
| Abstraction Level       | High (objects)       | Low (SQL-like)            | Balanced                 |
| Schema Awareness        | Sometimes (manual)   | No                        | Yes (auto-generated)     |
| Type Safety (TS/JS)     | Weak                 | None                      | Strong                   |
| Developer Experience    | Medium               | Medium                    | Excellent                |
| Auto-completion support | Limited              | Limited                   | Full (via Prisma Client) |

# Setting Up Project

## Install Dependencies

```bash
npm install prisma --save-dev
npm install @prisma/client
```

- `prisma` (dev dependency): used for CLI commands (`prisma init`, `prisma migrate` etc.).
- `@prisma/client`: the generated type-safe database client you use in your code.

## Initialize Prisma

```bash
npx prisma init
```

This creates a new folder `prisma/` with a `schema.prisma` file and updates your project structure.
It also adds a `.env` file where your database connection URL will live. Don't need to use any external library such `dotenv` to use environent variable.

Project after init:

```
prisma-example/
 ├─ prisma/
 │   └─ schema.prisma
 ├─ node_modules/
 ├─ package.json
 └─ .env
```

## Configure Database Connection

In `.env`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
```

Change this URL depending on your database:

- **Postgres**: `postgresql://USER:PASSWORD@HOST:PORT/DBNAME?schema=public`
- **MySQL**: `mysql://USER:PASSWORD@HOST:PORT/DBNAME`
- **SQLite**: `file:./dev.db`

## How to Test the Connection

After setting up `.env` and `schema.prisma`:

```bash
npx prisma db pull
```

- If the connection works → Prisma introspects your DB and pulls the schema.
- If not → you’ll get an error (wrong URL, DB not running, etc.).

# Prisma Schema

## Datasource Block

The `datasource` block defines the connection between Prisma and your database.
It tells Prisma:

- Which database provider you’re using (PostgreSQL, MySQL, SQLite, MongoDB, etc.)
- Where the database is located (connection URL)

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

- `db` → the name of the datasource (commonly just `db`).
- `provider` → which database engine Prisma should use. Options include: `"postgresql"`,`"mysql"`,`"sqlite"`,`"mongodb"`,`"cockroachdb"`
- `url` → tells Prisma where to connect. Usually `env("DATABASE_URL")` is used to load it from `.env`.

MongoDB support in Prisma is different — relations work differently since MongoDB is NoSQL.

## Generator Block

The `generator` block defines what Prisma should generate based on your schema.

Most common generator:

```prisma
generator client {
  provider = "prisma-client-js"
}
```

This generates the Prisma Client → a type-safe database client you can import in your code (`import { PrismaClient } from '@prisma/client'`).

- `client` → the name of the generator.
- `provider` → the tool to generate. Options:
  - `"prisma-client-js"` → generates Prisma Client (JS/TS API).
  - `"prisma-client-go"` (community) → generates Prisma Client for Go.
  - Other community generators: GraphQL schema, JSON schema, etc.

Optional configs:

- `previewFeatures` → enable experimental features.
- `binaryTargets` → specify environments to generate for (useful in deployment).

## Model

- A model in Prisma describes the structure of a table in your database.
- Each model becomes:
  - A table in SQL databases (PostgreSQL, MySQL, SQLite).
  - A collection in MongoDB.
- Each field inside the model becomes a column (SQL) or a document property (MongoDB).

```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```

- `model User {}` → defines a table called User.
- `id Int @id @default(autoincrement())`
  - `id` → field name
  - `Int` → data type
  - `@id` → marks this as primary key
  - `@default(autoincrement())` → automatically increases for each new row
- `name String` → required string column
- `email String @unique` → column must be unique (like an email should be)

## Scalar Types

Prisma supports common scalar types:

| Prisma Type | Maps To (SQL)      | Example              |
| ----------- | ------------------ | -------------------- |
| `Int`       | INTEGER            | `id Int`             |
| `String`    | VARCHAR/TEXT       | `name String`        |
| `Boolean`   | BOOLEAN            | `isActive Boolean`   |
| `DateTime`  | TIMESTAMP/DateTime | `createdAt DateTime` |
| `Float`     | FLOAT/DOUBLE       | `price Float`        |
| `Decimal`   | DECIMAL (exact)    | `amount Decimal`     |
| `Json`      | JSON column        | `meta Json`          |
| `Bytes`     | BLOB/BYTEA         | `file Bytes`         |

Prisma also supports lists (`String[]`, `Int[]`) for multi-value fields and for optional field `?`.

- Scalar = primitive type (like `String`, `Int`, `Boolean`).
- They describe the shape of a single field in your Prisma model.
- Prisma maps these scalars to the closest database-native column types depending on your provider (PostgreSQL, MySQL, SQLite, MongoDB).

## Attributes with Scalars

Attributes add extra rules to fields.

| Attribute                | Meaning                                  |
| ------------------------ | ---------------------------------------- |
| `@id`                    | Primary key                              |
| `@unique`                | Unique constraint                        |
| `@default(value)`        | Default value (e.g. `@default("Guest")`) |
| `@default(now())`        | Default timestamp                        |
| `@updatedAt`             | Auto-update timestamp on update          |
| `@map("db_column_name")` | Map to different DB column name          |
| `@relation(...)`         | Define foreign keys/relations            |

## Relations Between Models

### One-to-One

```prisma
model User {
  id     Int     @id @default(autoincrement())
  email  String  @unique
  profile Profile?
}

model Profile {
  id     Int    @id @default(autoincrement())
  bio    String?
  user   User   @relation(fields: [userId], references: [id])
  userId Int    @unique
}
```

- `User` has one Profile (not required, so `Profile?`).
- `Profile` belongs to one User (`userId Int`).
- `@unique` on `userId` ensures 1:1 (each profile can only link to one user).
- Foreign key: `Profile.userId → User.id`.

SQL result:

- `User` table → has no direct profileId.
- `Profile` table → has userId foreign key pointing to User.id.

### One to Many

```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  posts Post[]
}

model Post {
  id       Int   @id @default(autoincrement())
  title    String
  content  String?
  author   User  @relation(fields: [authorId], references: [id])
  authorId Int
}
```

- `User` has many `posts` → (`posts Post[]`).
- Each `Post` belongs to one `User` → (`authorId Int`).
- `@relation(fields: [authorId], references: [id])` defines the foreign key.

SQL result:

- `User` table → normal table with user info.
- `Post` table → includes `authorId` foreign key.

### Many to Many

Prisma creates a join table automatically (if not customized).

```prisma
model Student {
  id      Int      @id @default(autoincrement())
  name    String
  courses Course[] @relation("Enrollments")
}

model Course {
  id       Int       @id @default(autoincrement())
  title    String
  students Student[] @relation("Enrollments")
}
```

- Each `Student` can enroll in many Courses.
- Each `Course` can have many Students.
- Prisma automatically creates a join table:
  ```
  _StudentToCourse
  ----------------
  studentId
  courseId
  ```
- The `@relation("Enrollments")` is optional, but naming helps when multiple relations exist between same models.

### Optional vs Required Relations

- Optional relation → `fieldName?` → can be null.
- Required relation → `fieldName` → must exist.

## Model-Level Attributes

Applied to the whole model.

| Attribute         | Meaning                     |
| ----------------- | --------------------------- |
| `@@map("table")`  | Map to custom table name    |
| `@@unique([a,b])` | Composite unique constraint |
| `@@index([a,b])`  | Index on fields             |
| `@@id([a,b])`     | Composite primary key       |

```prisma
model Order {
  orderId   Int
  productId Int
  quantity  Int
  @@id([orderId, productId])   // composite primary key
}
```

## Enum

- An enum defines a set of constant values.
- Prisma generates a TypeScript enum when you use Prisma Client, so you get type-safety in your queries.

In `schema.prisma`:

```prisma
enum Role {
  USER
  ADMIN
  MODERATOR
}
```

- `enum Role {}` → defines an enum called `Role`.
- Possible values: `USER`, `ADMIN`, `MODERATOR`.
- These values are stored as strings in the DB (depending on the provider).

**Using Enums in a Model**

```prisma
model User {
  id    Int   @id @default(autoincrement())
  name  String
  role  Role  @default(USER)
}
```

**Querying Enums with Prisma Client**

```ts
await prisma.user.create({
  data: {
    name: "Alice",
    role: Role.ADMIN,
  },
});
```

## Indexes

- Index: A database structure that speeds up queries for specific columns.
  - Does not enforce uniqueness by default.
  - Useful for searching, filtering, and sorting.

**Single-field Index**

```prisma
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  createdAt DateTime

  @@index([title])
}
```

**Multi-field Index (Composite Index)**

```prisma
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  published Boolean
  createdAt DateTime

  @@index([title, published])
}
```

## Unique Constraints

- Unique Constraint: Ensures that the column (or combination of columns) cannot have duplicate values.
  - Automatically creates an index.
  - Ensures data integrity (e.g., emails, usernames).

**Single-field Unique Constraint**

```prisma
model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  name  String
}
```

**Multi-field Unique Constraint (Composite Unique)**

```prisma
model Order {
  orderId   Int
  productId Int
  quantity  Int
  @@unique([orderId, productId])
}
```

- Unique constraints automatically create an index.
- Indexes are for performance, uniqueness is for data integrity.
- You can have multiple indexes on a table without affecting uniqueness.

## Primary Key

### Single-field

- `@id` marks a field as the primary key.
- The primary key uniquely identifies each row in a table.
- Automatically indexed by the database.

### Compound (Multi-field)

- `@@id` defines a primary key consisting of multiple fields.
- Useful when no single field is unique, but a combination of fields is.
- Prisma supports this using model-level attributes.

```prisma
model Order {
  orderId   Int
  productId Int
  quantity  Int

  @@id([orderId, productId])   // compound primary key
}
```

- Primary key is both `orderId` and `productId` together.
- A single `orderId` or `productId` can repeat, but the combination must be unique.
- No need for `@id` on individual fields when using `@@id`.

### Best Practices

- Use `@id` for auto-increment numeric IDs → simpler and recommended for most tables.
- Use `@@id` for join tables or when no single field is unique.
- Always consider querying patterns — compound keys may require multiple columns in `WHERE` clauses.

# Migration

## Prisma Migrate

Prisma Migrate is the migration system Prisma provides to safely evolve your database schema in sync with your Prisma Schema (`schema.prisma`). It helps you track schema changes, generate SQL migrations, apply them to your database, and keep everything consistent across environments (dev, staging, production).

### Prisma Migrate Workflow

The Prisma Migrate workflow generally involves four main steps:

1. **Define schema changes**

   - You edit your `schema.prisma` file (e.g., adding a model, changing a field, creating relations, etc.).

2. **Create a new migration**

   ```bash
   npx prisma migrate dev --name <migration-name>
   ```

   - Prisma detects differences between your current schema and the database.
   - Generates a new SQL migration file inside `prisma/migrations/`.
   - Applies the migration immediately to your development database.
   - Updates the Prisma Client (so you can use new types in your code).

3. **Apply migrations to other environments**

   - In production or staging, you don’t use `migrate dev`. Instead, you use:

   ```bash
   npx prisma migrate deploy
   ```

   - Reads all unapplied migrations from `prisma/migrations/`.
   - Applies them in the correct order to the target database.

4. **Track and version migrations**

   - Each migration is a folder with timestamp + name:

   ```bash
   prisma/
     migrations/
       20250925101010_init/
         migration.sql
       20250925103520_add-user-table/
         migration.sql
   ```

   - The database contains a `_prisma_migrations` table that records which migrations have been applied.

## Resetting the database

Resetting means:

1. Drop all tables in the database.
2. Recreate the schema from migrations in `prisma/migrations/`.
3. Re-generate Prisma Client to match the schema.

This is especially useful when:

- You want a clean database while developing.
- You changed schema drastically and just want a fresh start locally.
- You’re preparing for testing with a clean dataset.

The main command is:

```bash
npx prisma migrate reset
```

### How Resetting Works

When you run migrate reset, Prisma does the following:

1. **Confirmation**
   - It asks you to confirm, because it will delete ALL DATA.
   - You can skip confirmation with:
   ```bash
   npx prisma migrate reset --force
   ```
2. **Drops all tables**
   - Completely clears the database schema.
3. **Re-applies all migrations**
   - Prisma runs every migration in your `prisma/migrations/` directory in sequence.
   - This ensures the schema is the same as if you had created the DB from scratch.
4. **Seeds the database (optional)**
   - If you have a `prisma/seed.ts` or `prisma/seed.js` file, Prisma will run it automatically.
   ```bash
   npx prisma migrate reset --skip-seed
   ```
   skips the seeding step.
5. **Regenerates Prisma Client**
   - So your code reflects the new schema.

# Prisma Client

Prisma Client is the auto-generated database client that Prisma creates based on your `schema.prisma`.

- It lets you interact with your database using JavaScript/TypeScript methods (instead of raw SQL).
- It’s type-safe: if you use TypeScript, Prisma knows your schema and will catch mistakes at compile time.
- It supports all CRUD (Create, Read, Update, Delete) operations.
- It’s database-agnostic → works with PostgreSQL, MySQL, SQLite, MongoDB, etc.

You don’t write Prisma Client code by hand. Instead, you define your schema → Prisma generates the client for you → then you import and use it.

## How Prisma Client is Generated

When you run:

```bash
npx prisma generate
```

Prisma:

1. Reads your `schema.prisma` file.
2. Generates the Prisma Client in `node_modules/.prisma/client`.
3. Makes it available as `@prisma/client` for you to use.
4. You can now use Prisma Client in your code

## Using Prisma Client

First, import and initialize:

```ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
```

Now you can access your models as methods:

- `prisma.user` → for the `User` model.
- `prisma.post` → for the `Post` model.

Each model automatically gets CRUD functions like: `.create()`, `.findMany()`, `.findUnique()`, `.update()`, `.delete()`

- Keep `datasource` and `generator` at the top of `schema.prisma` (before `model`s).
- Use one `datasource` per project (Prisma currently doesn’t support multiple DBs in one schema).
- You can have multiple `generator`s (e.g., one for Prisma Client, one for GraphQL schema).

## CRUD

### Create

The `create` method requires you to pass a `data` object that matches your Prisma schema model fields. Only required fields must be provided; optional fields can be omitted or set to `null` if allowed.

```ts
const createdRecord = await prisma.modelName.create({
  data: {
    field1: value1,
    field2: value2,
    // ... other fields
  },
});
```

- `prisma.modelName` → Replace `modelName` with your Prisma model (e.g., `user`, `post`).
- `data` → Object containing the data for the new record.
- Returns the newly created record.

**Nested Writes:**

Prisma supports creating related records in one query

```prisma
model Post {
  id      Int    @id @default(autoincrement())
  title   String
  content String?
  author  User   @relation(fields: [authorId], references: [id])
  authorId Int
}
```

Create a user with a post

```ts
const newUserWithPost = await prisma.user.create({
  data: {
    name: "Charlie",
    email: "charlie@example.com",
    posts: {
      create: { title: "My first post", content: "Hello World!" },
    },
  },
  include: {
    posts: true, // return posts as well
  },
});
```

### Read

| Method       | Purpose                                                                      |
| ------------ | ---------------------------------------------------------------------------- |
| `findUnique` | Fetch **one record** by a **unique field** (like `id` or unique column).     |
| `findMany`   | Fetch **multiple records**, optionally filtered, sorted, or paginated.       |
| `findFirst`  | Fetch the **first record** that matches a filter, if multiple records match. |

#### `findUnique`

- Retrieve a single record by a unique field.
- Returns `null` if no record matches.

```ts
const user = await prisma.user.findUnique({
  where: {
    email: "alice@example.com", // must be a unique field
  },
});
```

#### `findMany`

Retrieve multiple records, with optional filters, sorting, and pagination.

```ts
const users = await prisma.user.findMany({
  where: {
    age: {
      gte: 18, // users with age >= 18
    },
  },
  orderBy: {
    name: "asc", // sort by name ascending
  },
  skip: 0, // skip first N records
  take: 10, // limit number of records
});
```

#### `findFirst`

- Retrieve the first record that matches a filter.
- Returns a single record or `null`.

```ts
const firstAdult = await prisma.user.findFirst({
  where: { age: { gte: 18 } },
  orderBy: { age: "asc" }, // the "first" one according to this order
});
```

#### Nested Reads

```ts
const userWithPosts = await prisma.user.findUnique({
  where: { id: 1 },
  include: { posts: true }, // include related posts
});

console.log(userWithPosts);
```

If you don’t need all fields, use `select` for fine-grained control.

```ts
const posts = await prisma.post.findMany({
  select: {
    title: true,
    author: {
      select: { name: true }, // only get author's name
    },
    comments: {
      select: { text: true }, // only get comment text
    },
  },
});

console.log(posts);
```

This is similar to SQL joins or ORM features like `populate` (Mongoose) or `include` (Sequelize/TypeORM).

If you want:

- A user’s details
- AND all of their posts

You have two options:

1. Lazy Loading (multiple queries):

- Query the user
- Then separately query the posts

2. Eager Loading (include):

- Fetch user with posts in one Prisma query

### Update

The `update` operation is used to modify existing records in the database. Prisma Client provides:

- `update` → Update a single record identified by a unique field.
- `updateMany` → Update multiple records at once (optional, returns count of updated records).

Key points:

- You must provide a unique identifier (`where`) for `update`.
- The `data` object contains the fields you want to modify.
- Prisma automatically validates field types and constraints.

**Single Records Update**

```ts
const updatedRecord = await prisma.modelName.update({
  where: {
    uniqueField: value, // e.g., id or email
  },
  data: {
    field1: newValue1,
    field2: newValue2,
    // ...other fields
  },
});
```

**Multiple Record Update**

```ts
const result = await prisma.modelName.updateMany({
  where: { age: { lt: 18 } }, // filter records to update
  data: { isMinor: true },
});

console.log(result.count); // number of records updated
```

- Returns `{ count: number }` indicating how many records were updated.
- Cannot return the updated records themselves (use `findMany` afterwards if needed).

**Nested Record Updated:**

Update a post and change its author name in a nested update

```ts
const updatedPost = await prisma.post.update({
  where: { id: 1 },
  data: {
    title: "Updated Post Title",
    author: {
      update: { name: "Updated Author Name" }, // nested update
    },
  },
});

console.log(updatedPost);
```

- Prisma allows nested updates if relations are defined.
- Both the record and its related records can be updated in one query.

### Delete

| Method       | Purpose                                                                    |
| ------------ | -------------------------------------------------------------------------- |
| `delete`     | Delete a **single record** by a unique field (like `id` or unique column). |
| `deleteMany` | Delete **multiple records** that match a filter.                           |

- `delete` requires a unique identifier (`where`) to locate the record.
- `deleteMany` allows filtering multiple records.

**Single Record Delete**

```ts
const deletedRecord = await prisma.modelName.delete({
  where: {
    uniqueField: value, // e.g., id or email
  },
});
```

- Prisma returns the deleted record.
- If no record matches, Prisma throws an error.

**Multiple Record Delete**

```ts
const result = await prisma.modelName.deleteMany({
  where: { age: { lt: 18 } }, // delete users under 18
});

console.log(result.count); // number of records deleted
```

- Returns `{ count: number }` indicating the number of records deleted.
- If no records match, `count` is 0.

**Cascading Deletes**

Assume a `Post` model related to `User`:

```prisma
model Post {
  id       Int    @id @default(autoincrement())
  title    String
  content  String?
  author   User   @relation(fields: [authorId], references: [id], onDelete: Cascade)
  authorId Int
}
```

If `onDelete: Cascade` is set, deleting a user automatically deletes all their posts:

```ts
const deletedUser = await prisma.user.delete({
  where: { id: 2 },
});

console.log("Deleted user and their posts:", deletedUser);
```

- Cascading deletes are controlled by the schema relation.
- Without `Cascade`, deleting a parent may fail if child records exist.
## Upsert
**Upsert = Update + Insert**

It’s a single database operation that:

- Updates a record if it already exists.
- Creates a new record if it doesn’t exist.

This is super useful when you don’t know whether the record is already in the database, and you want to ensure that either way, you end up with a record in the right state — without having to run multiple queries (`find → update/create`).

```prisma
prisma.modelName.upsert({
  where: { uniqueField: value },
  update: { ...fieldsToUpdate },
  create: { ...fieldsToCreate },
})
```
- `where`: Defines the unique identifier to check if the record exists. It must be a unique field (like id or a field with a unique constraint).
- `update`: What to update if the record already exists.
- `create`: What to insert if the record doesn’t exist.

## Pagination
### Offset-based Pagination
This is the most common (and simple) type of pagination.

- `skip`: number of records to skip.
- `take`: number of records to return (positive = forward, negative = backward).

```ts
const users = await prisma.user.findMany({
  skip: 5,   // skip the first 5
  take: 5,   // get the next 5
})
```
### Cursor-based Pagination
Instead of skipping records (which can get slow on large datasets), cursor pagination starts from a specific record.

- `cursor`: defines the starting point (requires a unique field).
- `skip`: often used with cursor to move past the cursor item.
- `take`: how many to fetch from that point.

```ts
const users = await prisma.user.findMany({
  cursor: { id: 10 }, // start at user with id=10
  skip: 1,            // skip that cursor item itself
  take: 5,            // fetch 5 after it
})
```
## Lazy Loading

In traditional ORMs, lazy loading means related records are only fetched when you explicitly access them, often through a proxy object.

Example (in Sequelize/TypeORM-like systems):

```ts
const user = await User.findOne({ where: { id: 1 } });
const posts = await user.posts; // triggers a new SQL query on access
```

But Prisma does not support true lazy loading.

Why?

Because Prisma returns plain JavaScript objects (not “live” model instances with proxies). Once the query is executed, Prisma doesn’t keep a connection between objects and the database.

### Prisma’s Alternatives to Lazy Loading

Since Prisma doesn’t provide automatic lazy loading, you have two main alternatives:

#### Eager Loading with `include`

Fetch related records together with the parent in one query.

```ts
const userWithPosts = await prisma.user.findUnique({
  where: { id: 1 },
  include: {
    posts: true, // eager load relation
  },
});

console.log(userWithPosts);
```

#### Explicit Separate Queries (Manual Lazy Loading)

Instead of Prisma automatically lazy loading, you can explicitly query related data when you need it. This mimics lazy loading.

```ts
// Step 1: Load user only
const user = await prisma.user.findUnique({
  where: { id: 1 },
});

console.log(user);

// Step 2: Later, only when needed, load posts
const posts = await prisma.post.findMany({
  where: { authorId: user?.id },
});

console.log(posts);
```

- Avoids over-fetching unnecessary data.
- Two queries (can lead to N+1 problem if repeated in loops).

#### Batching with `Prisma.$transaction`

If you want to mimic lazy loading but avoid multiple round-trips, you can batch queries.

```ts
const [user, posts] = await prisma.$transaction([
  prisma.user.findUnique({ where: { id: 1 } }),
  prisma.post.findMany({ where: { authorId: 1 } }),
]);

console.log(user, posts);
```

- Still two queries, but batched together → fewer network round trips.
- Better performance than doing them separately.

### Dataloader Pattern (N+1 Solution)

If you need lazy-like loading for many records, you can integrate Prisma with DataLoader.

Example use case: In GraphQL resolvers, instead of fetching posts per user individually (N+1 problem), batch them.

```ts
import DataLoader from "dataloader";

// Create a DataLoader for posts by userId
const postsLoader = new DataLoader(async (userIds: number[]) => {
  const posts = await prisma.post.findMany({
    where: { authorId: { in: userIds } },
  });

  // group by authorId
  return userIds.map((id) => posts.filter((p) => p.authorId === id));
});

// Usage
const user = await prisma.user.findUnique({ where: { id: 1 } });
const posts = await postsLoader.load(user.id);

console.log(user, posts);
```

# Advanced Query

## Aggregations

These are typically used with:

- `prisma.model.aggregate()` → For overall aggregation.
- `prisma.model.groupBy()` → For grouped aggregation.

**Basic Aggregations**

```ts
const stats = await prisma.order.aggregate({
  _count: true, // counts all rows
  _avg: {
    quantity: true, // average quantity
    price: true, // average price
  },
  _sum: {
    quantity: true, // total quantity ordered
    price: true, // total sales (sum of price)
  },
  _min: {
    price: true, // minimum price in orders
  },
  _max: {
    price: true, // maximum price in orders
  },
});
```

**Filtering Aggregations**

You can add `where` conditions to aggregate only a subset.

```ts
const electronicsStats = await prisma.order.aggregate({
  where: {
    product: { contains: "Laptop" },
  },
  _count: true,
  _sum: { price: true },
  _avg: { price: true },
});
```

## Grouped Aggregations

Prisma’s `groupBy` feature is very similar to SQL’s `GROUP BY`. It allows you to group records by one or more fields and then perform aggregations (`count`, `avg`, `sum`, `min`, `max`) within each group.

The general structure is:

```ts
const result = await prisma.model.groupBy({
  by: [
    /* fields to group by */
  ],
  _count: {
    /* fields or _all */
  },
  _avg: {
    /* numeric fields */
  },
  _sum: {
    /* numeric fields */
  },
  _min: {
    /* fields */
  },
  _max: {
    /* fields */
  },
  where: {
    /* optional filters */
  },
  orderBy: {
    /* optional sorting */
  },
  having: {
    /* optional conditions after aggregation */
  },
  take: 10, // optional limit
  skip: 5, // optional offset
});
```

**Group by multiple fields**

```ts
const grouped = await prisma.order.groupBy({
  by: ["product", "createdAt"],
  _count: { _all: true },
  _sum: { price: true },
});
```

## Distinct Queries

The `distinct` option is available in the `findMany` query.

```ts
const result = await prisma.model.findMany({
  distinct: ['field1', 'field2'],
  where: { ... },     // optional filter
  orderBy: { ... },   // optional sorting
  take: 10,           // optional limit
  skip: 5             // optional offset
});
```

- `distinct: ['field']` → removes duplicate rows based on a single field.
- `distinct: ['field1', 'field2']` → removes duplicates based on the combination of multiple fields.
- Duplicates are removed at the query level, not after fetching.

## Raw Database Queries

Prisma provides `$queryRaw` and `$executeRaw` for cases where the Prisma Client API is not enough. These methods allow you to run raw SQL queries directly against the database, while still benefiting from Prisma’s type-safety (when used safely).

### Raw Queries

Although Prisma’s query engine covers most use cases (CRUD, filtering, aggregations, groupBy), sometimes you need:

- Complex SQL joins not supported in Prisma.
- Database-specific functions (e.g., `ILIKE`, `JSONB` in Postgres).
- Optimized queries for performance.
- Running migrations, stored procedures, or advanced reporting.

### Raw Query Methods

1. `$queryRaw`
   - Used for SELECT queries (reading data).
   - Returns rows from the database.
2. `$executeRaw`
   - Used for non-SELECT queries (INSERT, UPDATE, DELETE).
   - Returns the number of affected rows.

### Safe vs Unsafe Raw Queries

Prisma has two forms:

- Safe (Tagged Template) → Prevents SQL injection.

  ```ts
  await prisma.$queryRaw`SELECT * FROM "Order" WHERE id = ${orderId}`;
  ```

  Prisma automatically escapes variables.

- Unsafe (Function form) → Use only when necessary.
  ```ts
  await prisma.$queryRawUnsafe('SELECT * FROM "Order" WHERE id = ' + orderId);
  ```
  Vulnerable if user input is concatenated.Safe vs Unsafe Raw Queries

# Middleware

## Query Middleware

In Prisma, middleware is a function that intercepts every query before it reaches the database (and after the database responds). It allows you to inspect, modify, or extend the behavior of queries globally, across your whole application.

This is especially useful for:

- Logging queries
- Measuring query performance (timing)
- Enforcing business rules (like soft deletes, role-based filtering, multi-tenancy)
- Debugging or analytics

Prisma’s middleware works similarly to middleware in frameworks like Express, but at the database query level.

## How Prisma Middleware Works

1. Middleware functions are added to the Prisma client using `.use()`.
2. Each middleware function receives:
   - `params`: Metadata about the Prisma query (model, action, arguments).
   - `next`: A function to call the next middleware (or execute the actual query).
3. Middleware can:
   - Inspect/modify `params` before passing them on.
   - Run logic before/after the query executes.
   - Return or override results.

## General Middleware Signature

```prisma
prisma.$use(async (params, next) => {
  // logic before the query
  const result = await next(params) // runs the next middleware or actual query
  // logic after the query
  return result
})
```

- `params`: contains details like `{ model, action, args }`.
- `next(params)`: executes the query (or passes it to the next middleware).
- `result`: the returned data from the database.

## Logging Middleware

This middleware logs every query and measures execution time.

```ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  const start = Date.now();

  // Run the query
  const result = await next(params);

  const duration = Date.now() - start;
  console.log(`Query: ${params.model}.${params.action} took ${duration}ms`);

  return result;
});

// Example query
async function main() {
  await prisma.user.findMany();
}
main();
```

- Logs the `model` (`User`) and `action` (`findMany`).
- Measures how long the query took.
- Very useful for performance monitoring and debugging.

## Enforcing Soft Deletes

Imagine you want to implement soft deletes (mark a record as deleted instead of actually deleting it). You can use middleware to automatically filter out deleted records.

```ts
prisma.$use(async (params, next) => {
  // Apply soft delete filter to all "find" queries
  if (params.model === "User") {
    if (params.action === "findMany") {
      // Ensure "deleted = false" condition
      params.args.where = {
        ...params.args.where,
        deleted: false,
      };
    }
  }

  return next(params);
});
```

- Intercepts all queries for the `User` model.
- If the query is `findMany`, it automatically adds `deleted: false` to the `where` filter.
- Prevents accidentally showing soft-deleted records.

## Role-Based Access Control

You can enforce RBAC (Role-Based Access Control) at the query level.

```ts
prisma.$use(async (params, next) => {
  // Restrict update/delete queries on "Post" if the user is not an admin
  if (params.model === "Post" && ["update", "delete"].includes(params.action)) {
    if (
      !params.args.where.authorId ||
      params.args.where.authorId !== CURRENT_USER_ID
    ) {
      throw new Error("Unauthorized: You can only modify your own posts.");
    }
  }

  return next(params);
});
```

- Protects the `Post` model from unauthorized modifications.
- Before executing, it checks if the current user is allowed to update/delete the record.
- If not, throws an error.

## Query Transformation

You can modify query arguments before they hit the DB. For example, enforcing case-insensitive searches:

```ts
prisma.$use(async (params, next) => {
  if (params.model === "User" && params.action === "findMany") {
    if (params.args.where?.email) {
      params.args.where.email = {
        equals: params.args.where.email.toLowerCase(),
        mode: "insensitive",
      };
    }
  }

  return next(params);
});
```

- Whenever you query users by `email`, it ensures the query is case-insensitive.
- Prevents mismatched results due to case differences.

# Transactions

## Atomic Operations

Atomic operations in Prisma refer to operations that are executed as a single, indivisible action inside the database. This means either the whole operation succeeds, or it fails without partially applying changes.

They are particularly useful when you want to update a field relative to its current value (like increment, decrement, multiply, divide, push, etc.) instead of overwriting it manually.

Atomic operations ensure that these updates are safe even under concurrent database access (no race conditions).

### Why use Atomic Operations?

- **Prevent race conditions:** Two users incrementing a likes counter at the same time won’t overwrite each other’s update.
- **Cleaner & safer code:** You don’t have to read → modify → write, Prisma does it in one atomic step.
- **Performance:** Saves extra queries because the modification happens directly in the database.

### Common Atomic Operations

These are used mostly in `update` and `updateMany` queries:

- `increment` → Adds a value to a number field
- `decrement` → Subtracts a value from a number field
- `multiply` → Multiplies a number field
- `divide` → Divides a number field
- `set` → Sets the value directly
- `push` → Appends values to an array field (PostgreSQL, MongoDB, etc.)

### Incrementing a counter safely

Suppose we have a `Post` model:

```prisma
model Post {
  id        Int    @id @default(autoincrement())
  title     String
  views     Int    @default(0)
}
```

Now, if you want to increment the `views` count every time someone reads the post:

```prisma
await prisma.post.update({
  where: { id: 1 },
  data: {
    views: {
      increment: 1, // increases by 1 atomically
    },
  },
});
```

### Batch Operations

In Prisma, batch operations mean executing multiple database queries together in a single transaction.

This is done with `prisma.$transaction()`, where you can pass an array of queries.

Key property:

- Either all queries succeed (commit)
- Or if one fails, everything rolls back (no partial changes).

This is critical when you want to maintain data consistency.

**Syntax**

```prisma
await prisma.$transaction([
  prisma.model1.create(...),
  prisma.model2.update(...),
  prisma.model3.delete(...),
]);
```

**Important Notes**

1. `prisma.$transaction()` can accept:
   - An array of queries (batch mode).
   - A callback function (interactive transactions, for more complex logic).
2. Batch transactions are atomic → all queries succeed or none.
3. Useful for:
   - Bulk inserts
   - Multi-table consistency
   - Money transfers / stock updates
   - Running multiple reads efficiently

## Interactive transactions

So far, we’ve seen batch transactions (where you pass an array of queries to `prisma.$transaction([])`).
But sometimes you need more control:

- Run conditional logic inside a transaction
- Perform multiple dependent queries (where later queries depend on earlier results)
- Ensure all-or-nothing execution even with complex application logic

That’s where Interactive Transactions come in.

They use a callback form of `prisma.$transaction()`.
Prisma gives you a special `tx` client that you must use inside the transaction.

**Syntax**

```ts
await prisma.$transaction(async (tx) => {
  // use tx instead of prisma
  const user = await tx.user.create(...);
  const post = await tx.post.create(...);
  return { user, post };
});
```

- The callback runs in a single database transaction.
- If any query fails (or you throw an error), the whole transaction rolls back.
- If everything succeeds, Prisma commits the transaction.

**Why Interactive Transactions**

- Conditional logic: e.g., only create a record if a check passes.
- Dependent queries: e.g., create a user, then use their ID for a post.
- Business rules: e.g., don’t let someone overspend.
- Complex workflows: more than just independent queries.

**Key Notes**

- Always use the `tx` client inside the callback, not the global `prisma`.
- If an error is thrown, Prisma rolls back automatically.
- You can add custom logic (loops, conditionals, validations) inside the transaction.
- Transactions are time-limited → by default, Prisma sets a timeout (usually 5s), but you can configure it.
- Not all databases handle interactive transactions identically — e.g., in MongoDB, only replica sets/sharded clusters support transactions.

# Connection Pooling

A database connection is a link between your application and the database.

- Creating and tearing down a connection is expensive (it takes time and resources).
- Instead of creating a new connection for every query, a connection pool keeps a set of database connections open and reuses them.

This ensures:

- Lower latency (faster queries since no need to re-establish connections).
- Efficient resource usage (database and app aren’t overloaded with connection churn).
- Scalability (can handle many simultaneous requests).

Prisma relies on an underlying database driver (like `node-postgres` for PostgreSQL, `mysql2` for MySQL) and usually uses a pool to manage connections.

## Why Do We Need Connection Pooling

Without pooling:

- Each request to your app = opens a new database connection.
- Under load (e.g., 1000 requests/sec), this causes connection storms → database crashes or slows down.

With pooling:

- A fixed number of connections are maintained.
- Requests share these connections.
- Idle connections are reused instead of destroyed.

## Prisma and Connection Pooling

Prisma supports connection pooling through the database driver or an external pooler like PgBouncer for PostgreSQL.

There are two main strategies:

### Driver-level pooling (default)

- Prisma’s underlying database drivers (Postgres/MySQL) already manage a pool.
- Pool size can be configured via the connection string.

### External poolers (recommended for serverless)

- In serverless environments (e.g., AWS Lambda, Vercel), every function execution may create a new Prisma client, causing too many database connections.
- Solution: Use PgBouncer (for PostgreSQL) or ProxySQL (for MySQL) as an external pooler.

## Configuring Connection Pooling

You can configure pooling via the connection string:

```env
# Basic connection string
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"

# With pooling options
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?connection_limit=10&pool_timeout=30"
```

- `connection_limit=10` → max 10 connections in pool.
- `pool_timeout=30` → wait 30s for a free connection before erroring.

## Example of Connection Pooling

### Query without pooling (serverless issue)

```ts
// ❌ Not using pooling correctly in serverless
export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();
  res.json(users);
}
```

- Each request creates a new PrismaClient.
- Each client opens multiple DB connections.
- In high traffic, DB can exceed its max connections and crash.

### Optimized Example with Pooling

```ts
// ✅ Correct: Reuse PrismaClient instance
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  var prisma: PrismaClient | undefined;
}

if (!global.prisma) {
  global.prisma = new PrismaClient();
}
prisma = global.prisma;

export default async function handler(req, res) {
  const users = await prisma.user.findMany();
  res.json(users);
}
```

- Only one PrismaClient instance is reused.
- Prevents connection storming.
- Database connections are pooled and reused.

## Connection Pooling with PgBouncer (PostgreSQL Example)

In serverless or multi-instance apps, you should use PgBouncer for more stable pooling.

Connection string via PgBouncer:

```env
DATABASE_URL="postgresql://user:password@pgbouncer-host:6432/mydb"
```

- Instead of connecting directly to PostgreSQL, Prisma connects through PgBouncer.
- PgBouncer maintains a stable pool of connections.

## Monitoring Connection Pool

You should monitor pool usage to avoid bottlenecks.

For PostgreSQL:

```sl
SELECT * FROM pg_stat_activity;
```

For MySQL:

```sql
SHOW PROCESSLIST;
```

You can check:

- How many connections are active.
- Whether connections are waiting (indicating pool size too small).

# N+1 Problem

The N+1 problem happens when you:

1. Fetch a list of records (1 query).
2. Then for each record, you fetch related data separately (N queries).

This leads to 1 (main query) + N (sub-queries) → hence the name N+1 queries.

Problem: For large datasets, this can blow up into hundreds or thousands of queries, causing slow response times and database overload.

## Example of the N+1 Problem in Prisma

Imagine you want to fetch users and their posts.

```ts
// Step 1: Fetch all users
const users = await prisma.user.findMany();

// Step 2: For each user, fetch posts separately
for (const user of users) {
  user.posts = await prisma.post.findMany({
    where: { authorId: user.id },
  });
}

console.log(users);
```

If you have:

- 10 users → `1 + 10 = 11 queries`
- 1000 users → `1 + 1000 = 1001 queries`

This does not scale.

## Optimized Solutions in Prisma

### Eager Loading

Prisma can load related data in a single query using `include`.

```ts
// Fetch users and their posts in one query
const users = await prisma.user.findMany({
  include: {
    posts: true, // eager load posts
  },
});
```

- Prisma sends a JOIN-like query (or two optimized queries).
- Instead of fetching posts per user separately, all posts are fetched in one go.

### Use `select` for Partial Data

```ts
const users = await prisma.user.findMany({
  include: {
    posts: {
      select: {
        id: true,
        title: true,
      },
    },
  },
});
```

### Use `prisma.$transaction` for Batch Queries

```ts
const [users, posts] = await prisma.$transaction([
  prisma.user.findMany(),
  prisma.post.findMany(),
]);

// Map posts to users in memory
const userMap = users.map((user) => ({
  ...user,
  posts: posts.filter((p) => p.authorId === user.id),
}));
```

## Performance Comparison

Let’s say we have 100 users, each with 10 posts:

| Approach                  | Queries Sent | Notes                            |
| ------------------------- | ------------ | -------------------------------- |
| Naive (N+1)               | 101          | 1 for users + 100 for posts      |
| `include` (Eager Loading) | 1            | Single optimized query           |
| `$transaction` batching   | 2            | One for users, one for posts     |
| Dataloader batching       | 2            | 1 for users, 1 batched for posts |

# Prisma Studio

Prisma Studio is the official GUI (Graphical User Interface) database browser that comes with Prisma.
It allows developers to view, edit, and manage data in their database directly from an easy-to-use web interface without writing SQL queries.

It’s like a lightweight admin panel or database client that’s integrated tightly with your Prisma schema.

```bash
npx prisma studio
```

Browser will open at `http://localhost:5555`

## Features of Prisma Studio

1. **Data Browsing**
   - View records in a spreadsheet-like table UI.
   - Easily navigate between related records (via relations).
2. **Data Editing**
   - Edit, insert, and delete rows in your database directly from the UI.
   - Provides type-safe editing because it reads the Prisma Schema.
3. **Relation Management**
   - If you have relations (e.g., `User` ↔ `Post`), you can drill into related records.
   - No need to write JOIN queries manually.
4. **Schema Awareness**
   - Prisma Studio understands your models from `schema.prisma`.
   - Ensures you edit data according to constraints and field types.
5. **Convenience**
   - Great for debugging during development.
   - Acts as an alternative to tools like pgAdmin, DBeaver, or MySQL Workbench, but lighter and Prisma-native.

# Prisma CLI Commands

## `prisma db``

Direct database commands (bypasses migrations).

Subcommands:

- `prisma db push` → Pushes schema changes directly to DB (⚠️ not recommended for production).
- `prisma db pull` → Introspects an existing DB schema and updates schema.prisma.
- `prisma db seed` → Runs custom seed scripts.

## `prisma format`

Formats the schema.prisma file using Prisma’s formatter.

```bash
npx prisma format
```

Ensures consistent indentation, spacing, and alignment.

Use case: Keep schema clean & readable (like Prettier but for Prisma schema).

## `prisma validate`

Validates your `schema.prisma` for errors (e.g., missing relations, syntax issues).

```bash
npx prisma validate
```

# Introspection

Introspection is the process of reading an existing database schema and generating a Prisma schema (`schema.prisma`) that matches it.

In Prisma, introspection is done using:

```prisma
npx prisma db pull
```

- This updates your `schema.prisma` to reflect tables, columns, relations, and types in the database.
- Essentially, it lets Prisma reverse-engineer your database into Prisma models.

## When to Use Introspection

1. Working with an existing database
   - You didn’t start the project with Prisma, but now want Prisma Client.
2. Syncing Prisma schema with DB changes
   - If someone else modified the DB schema, you can update your Prisma schema without manually editing it.
3. Exploring unfamiliar databases
   - Quickly generate models for an existing DB.

## How `prisma db pull` Works

1. Reads the database connection from `.env`:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
   ```
2. Connects to the database.
3. Reads all tables, columns, indexes, foreign keys, and types.
4. Updates your `schema.prisma` with models, fields, types, relations, and attributes.

## Example Workflow of Introspection

### 1. Setup

Assume you have a PostgreSQL database with these tables:

```sql
-- Table: users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE
);

-- Table: posts
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  author_id INT REFERENCES users(id)
);
```

### 2. Configure `.env`

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/mydb"
```

### 3. Run Introspection

```bash
npx prisma db pull
```

- Prisma reads the tables `users` and `posts`.
- Generates `schema.prisma` automatically.

### 4. Generated Prisma Schema

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model users {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
  posts posts[]
}

model posts {
  id       Int    @id @default(autoincrement())
  title    String
  content  String?
  author_id Int
  users    users @relation(fields: [author_id], references: [id])
}
```

# Using with GraphQL

Prisma is database-agnostic and works as a type-safe database client, which makes it ideal for GraphQL servers.

- GraphQL handles API queries/mutations.
- Prisma handles database access with type-safe queries.
- Nexus can be used to define GraphQL schema in code, integrating seamlessly with Prisma.
- Apollo Server exposes the GraphQL API over HTTP.

```
Client → GraphQL Query → Apollo Server → Prisma Client → Database → Response
```

## Key Tools

1. Apollo Server
   - Popular GraphQL server for Node.js.
   - Handles GraphQL queries, mutations, and subscriptions.
2. Nexus
   - Code-first GraphQL schema builder for TypeScript/Node.js.
   - Automatically generates schema and types.
   - Works well with Prisma Client for resolvers.
3. Prisma Client
   - Acts as the database layer.
   - Fully type-safe and integrates with GraphQL resolvers.

## Example Workflow With GraphQL

Install Packages

```bash
npm install @prisma/client prisma apollo-server graphql nexus
```

Define GraphQL Schema Using Nexus

```ts
// schema.ts
import { objectType, queryType, mutationType, makeSchema } from "nexus";
import { join } from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GraphQL Types
const User = objectType({
  name: "User",
  definition(t) {
    t.int("id");
    t.string("name");
    t.string("email");
    t.list.field("posts", { type: "Post" });
  },
});

const Post = objectType({
  name: "Post",
  definition(t) {
    t.int("id");
    t.string("title");
    t.string("content", { nullable: true });
    t.boolean("published");
    t.field("author", { type: "User" });
  },
});

// Queries
const Query = queryType({
  definition(t) {
    t.list.field("users", {
      type: "User",
      resolve: () => prisma.user.findMany({ include: { posts: true } }),
    });

    t.list.field("posts", {
      type: "Post",
      resolve: () => prisma.post.findMany({ include: { author: true } }),
    });
  },
});

// Mutations
const Mutation = mutationType({
  definition(t) {
    t.field("createUser", {
      type: "User",
      args: { name: "String", email: "String" },
      resolve: (_, { name, email }) =>
        prisma.user.create({ data: { name, email } }),
    });

    t.field("createPost", {
      type: "Post",
      args: { title: "String", content: "String", authorId: "Int" },
      resolve: (_, { title, content, authorId }) =>
        prisma.post.create({ data: { title, content, authorId } }),
    });
  },
});

// Make Schema
export const schema = makeSchema({
  types: [User, Post, Query, Mutation],
  outputs: {
    schema: join(process.cwd(), "schema.graphql"),
    typegen: join(process.cwd(), "nexus-typegen.ts"),
  },
});
```

Setup Apollo Server

```ts
// server.ts
import { ApolloServer } from "apollo-server";
import { schema } from "./schema";

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
```

# Deployment
## Environment-specific configs
When deploying a Prisma application, you often have different environments—like development, staging, and production. Each environment usually has different databases, credentials, and other settings. Managing these configs properly ensures security, stability, and flexibility.

Prisma supports environment-specific configurations primarily through environment variables and `.env` files.

You can maintain separate `.env` files for each environment:

- `.env.development`
- `.env.staging`
- `.env.production`

Then, when running Prisma commands or your app, you load the correct `.env` file:
```bash
# Development
cp .env.development .env && npx prisma generate

# Production
cp .env.production .env && npx prisma generate
```

**Using `dotenv-cli` for multiple environments**

You can simplify environment-specific setup using `dotenv-cli`:
```bash
# Install
npm install -D dotenv-cli

# Run commands with specific env
dotenv -e .env.production -- npx prisma migrate deploy
dotenv -e .env.staging -- node server.js
```

This allows you to keep one Prisma schema, but dynamically point it to different databases depending on the environment.

## Seeding databases
Database seeding is the process of populating a database with initial or default data. This is useful for:

- Development and testing
- Setting up staging environments
- Initial production setup (like default admin accounts, roles, or reference data)

Prisma supports seeding via JavaScript/TypeScript scripts that use the Prisma Client.

### Configure a Seed Script

1. In your package.json, define a seed command:
```json
{
  "prisma": {
    "seed": "ts-node prisma/seed.ts"
  }
}
```
2. Create the seed file: `prisma/seed.ts`
```ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create default users
  await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@example.com",
      role: "ADMIN",
    },
  });

  await prisma.user.upsert({
    where: { email: "user@example.com" },
    update: {},
    create: {
      name: "User",
      email: "user@example.com",
      role: "USER",
    },
  });

  console.log("Database seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```
- `upsert` ensures idempotency—running the seed multiple times won’t create duplicate records.
- Using `PrismaClient` allows you to interact with the database the same way your app does.
- Always disconnect at the end to avoid hanging connections.


# Error handling
When deploying Prisma applications, proper error handling is critical to ensure:

- Stability of your production system
- Quick identification of issues
- Proper response to users


Prisma interacts with databases, so errors can occur at different layers:

1. **Query errors** – invalid queries, missing records
2. **Constraint errors** – unique constraint violations, foreign key errors
3. **Connection errors** – database unreachable or timeout
4. **Runtime errors** – programming mistakes

## Catching Prisma Errors

Prisma provides specialized error classes via `@prisma/client/runtime`. The most commonly used is `Prisma.PrismaClientKnownRequestError`.

```ts
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser(email: string, name: string) {
  try {
    const user = await prisma.user.create({
      data: { email, name },
    });
    return user;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Known Prisma errors
      if (error.code === "P2002") {
        // Unique constraint failed
        console.error("Unique constraint failed:", error.meta);
        throw new Error("Email already exists.");
      }
    }
    // Unknown or other errors
    console.error("Unexpected error:", error);
    throw error;
  }
}
```
- `P2002` → Unique constraint violation
- `PrismaClientKnownRequestError` allows fine-grained handling of Prisma-specific errors
- Always log errors for debugging, but avoid exposing raw DB errors to users

## Common Prisma Error Codes

| Code    | Meaning                            |
| ------- | ---------------------------------- |
| `P2000` | Value too long for column          |
| `P2002` | Unique constraint failed           |
| `P2003` | Foreign key constraint failed      |
| `P2025` | Record not found for update/delete |
| `P1001` | Database connection error          |

## Logging Queries & Errors

Prisma allows logging of queries, info, warnings, and errors. This is helpful for performance monitoring and debugging production issues.
```ts
const prisma = new PrismaClient({
  log: [
    { emit: "stdout", level: "query" },
    { emit: "stdout", level: "info" },
    { emit: "stdout", level: "warn" },
    { emit: "stdout", level: "error" },
  ],
});
```
- `query` → logs every SQL query executed
- `info` → general info events
- `warn` → warnings, e.g., potential issues
- `error` → errors
