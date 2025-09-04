# Fundamentals

## Database vs DBMS

A database does not provide tools to interact with data efficiently, DBMS does.

| Feature              | Database (DB)                           | DBMS (Database Management System)                      |
| -------------------- | --------------------------------------- | ------------------------------------------------------ |
| **Definition**       | Collection of structured data.          | Software to manage and interact with the database.     |
| **Nature**           | Passive (just stores data).             | Active (manages, controls, secures, and queries data). |
| **Content**          | Only contains raw data.                 | Contains programs, rules, and tools to handle data.    |
| **User Interaction** | Users cannot directly interact easily.  | Provides interface (like SQL) for users/applications.  |
| **Security**         | Not provided by database itself.        | Provides authentication, authorization, backups.       |
| **Example**          | Student Records stored in tables/files. | MySQL, Oracle, PostgreSQL managing those records.      |

## Types of Databases

### Relational Database (RDB)

- Stores data in tables (rows and columns).
- Relationships between tables are established using keys (Primary Key, Foreign Key).
- Managed by Relational Database Management Systems (RDBMS) like MySQL, Oracle, PostgreSQL, SQL Server.
- Uses SQL (Structured Query Language) for queries.

**Example:**

`students`
| Student_ID | Name | Dept | Phone |
| ----------- | ----- | ---- | ----------- |
| S101 | Amina | CSE | 01711111111 |

`courses`
| Course_ID | Course_Name | Credit |
| ---------- | ------------- | ------ |
| C201 | Database Sys. | 3 |

- Relationship: Students enroll in Courses via a join table (Enrollment).

### NoSQL Database

- “Not Only SQL” – used when data is unstructured or semi-structured (JSON, XML, documents, key-value pairs).
- Designed for scalability, flexibility, and big data.
- Types:
  - Document-based (MongoDB, CouchDB)
  - Key-Value Store (Redis, DynamoDB)
  - Column-based (Cassandra, HBase)
  - Graph-based (Neo4j)

**Example:**

A product entry in JSON format:

```json
{
  "ProductID": "P101",
  "Name": "Laptop",
  "Price": 700,
  "Reviews": [
    { "User": "Amina", "Rating": 5 },
    { "User": "Rahim", "Rating": 4 }
  ]
}
```

Flexible for data that changes frequently (reviews, social media posts).

### Distributed Database

- A single logical database that is spread across multiple locations/servers.
- Can be homogeneous (same DBMS everywhere) or heterogeneous (different DBMS).
- Increases availability, performance, and reliability.

**Example: Banking System**

- Customer data stored in Dhaka branch server.
- Transaction data stored in Chittagong branch server.
- A central DBMS coordinates queries across all servers.

Ensures high availability & quick access for global organizations.

### Cloud Database

- Database that runs on a cloud platform (AWS RDS, Google Cloud SQL, Azure SQL).
- Provides scalability, pay-as-you-go pricing, automatic backup.
- Accessible from anywhere via internet.

**Example: Netflix**

- Stores millions of user profiles, watch history, and recommendations in cloud databases.
- Scaling is automatic when user demand spikes.

Best for web/mobile apps that need global access.

### Object-Oriented Database

- Stores data as objects (similar to object-oriented programming).
- Each object has attributes (data) and methods (functions).
- Example systems: db4o, ObjectDB.

**Example: Multimedia Application**

- A "Video" object contains:
- Attributes: Title, Duration, Size.
- Methods: Play(), Pause(), Stop().

Great for applications needing complex data types like images, audio, video

## Why is Database Design Important?

1. Eliminates Data Redundancy
2. Ensures Data Integrity & Consistency
3. Improves Query Performance
4. Supports Scalability
5. Enhances Security & Access Control
6. Facilitates Maintenance & Updates
7. Enables Better Decision-Making

# Data Model

A data model is a blueprint for how data will be structured and managed. Database design usually progresses through three levels:

## Conceptual Data Model

- High-level model that represents the overall structure of data in the organization.
- Focuses on business requirements and entities (things we store data about) and their relationships.
- Does not include details like data types, constraints, or implementation.
- Usually represented as an Entity-Relationship (ER) diagram.

**Example:**

Entities:

- Student
- Course
- Faculty

Relationships:

- Student enrolls in Course
- Faculty teaches Course

Conceptual model answers: What data do we need?

## Logical Data Model

- More detailed than conceptual model.
- Converts entities and relationships into tables, columns, and keys.
- Still independent of specific DBMS (not tied to MySQL, Oracle, etc.).
- Includes attributes, primary keys, and foreign keys, but no storage/technical details.

**Example:**

Tables derived from entities:

Student Table:

- Student_ID (PK)
- Name
- Dept

Course Table:

- Course_ID (PK)
- Course_Name
- Credit_Hours

Faculty Table:

- Faculty_ID (PK)
- Name

Enrollment Table (relationship between Student & Course):

- Enrollment_ID (PK)
- Student_ID (FK → Student)
- Course_ID (FK → Course)
- Grade

Logical model answers: How will the data be structured logically?

## Physical Data Model

- The implementation-level model that shows how the database will actually be created in a specific DBMS.
- Includes table structures, data types, indexes, storage details, constraints, performance tuning.
- Depends on the DBMS (MySQL, PostgreSQL, Oracle, etc.).

**Example:**

```sql
CREATE TABLE Student (
    Student_ID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Dept VARCHAR(50)
);

CREATE TABLE Course (
    Course_ID INT PRIMARY KEY,
    Course_Name VARCHAR(100),
    Credit_Hours INT
);

CREATE TABLE Faculty (
    Faculty_ID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL
);

CREATE TABLE Enrollment (
    Enrollment_ID INT PRIMARY KEY,
    Student_ID INT,
    Course_ID INT,
    Grade CHAR(2),
    FOREIGN KEY (Student_ID) REFERENCES Student(Student_ID),
    FOREIGN KEY (Course_ID) REFERENCES Course(Course_ID)
);
```

Physical model answers: How will the data be stored in the database system?

## Comparison of Data Model

| Aspect                | Conceptual Model                  | Logical Model                            | Physical Model                            |
| --------------------- | --------------------------------- | ---------------------------------------- | ----------------------------------------- |
| **Focus**             | Business entities & relationships | Tables, attributes, primary/foreign keys | Implementation in DBMS                    |
| **Audience**          | Business stakeholders, analysts   | Data architects, designers               | Developers, DBAs                          |
| **DBMS Independent?** | Yes                               | Yes                                      | No (DBMS-specific)                        |
| **Details**           | High-level, abstract              | Structured, with attributes & keys       | Includes data types, indexes, constraints |
| **Example**           | “Student enrolls in Course”       | Tables: Student, Course, Enrollment      | SQL code with table creation              |

# ER Diagram

An Entity–Relationship (ER) Diagram is a type of diagram used in database design to visually represent the structure of a database. It shows how entities (tables) in a system are related to each other, along with their attributes and the type of relationships they share.

- It is part of conceptual data modeling.
- Helps database designers, developers, and business users understand how data is structured.

**Why ER Diagrams are Important?**

1. Helps in visualizing database design before implementation.
2. Ensures clear communication between developers, analysts, and stakeholders.
3. Identifies entities, attributes, and relationships to reduce redundancy.
4. Provides a blueprint to convert into Relational Schema (tables in SQL).

## Key Components of an ER Diagram

### Entity

- An entity represents a real-world object (person, place, event, or thing) that has data stored about it.
- In ER diagrams, entities are shown as rectangles.
- Example: `Student`, `Course`, `Teacher`.

Entities are of two types:

- Strong Entity → Can exist independently.
- Weak Entity → Depends on another entity for its existence.

### Attributes

- Attributes describe the properties or characteristics of an entity.
- Shown as ellipses (ovals) connected to entities.
- Example: A `Student` entity may have attributes like `Student_ID`, `Name`, `Email`.

Types of Attributes:

- Simple Attribute → Cannot be divided further (e.g., Age).
- Composite Attribute → Can be divided (e.g., FullName → FirstName + LastName).
- Derived Attribute → Calculated from other attributes (e.g., Age from DOB).
- Key Attribute → A unique identifier for an entity (e.g., Student_ID).

### Relationships

- Relationships represent associations between entities.
- Shown as diamonds in ER diagrams.
- Example: A `Student` enrolls in a `Course`.

Cardinality of Relationships (important in database design):

- **One-to-One (1:1)** → One entity relates to exactly one other.
  (Example: Each Student has one ID Card).
- **One-to-Many (1:N)** → One entity relates to many others.
  (Example: One Teacher teaches many Courses).
- **Many-to-Many (M:N)** → Many entities relate to many others.
  (Example: Students enroll in many Courses, and each Course has many Students).

## Example of an ER Diagram

We need to design a database that stores information about Students, Courses, and Teachers.

Entities and Attributes:

- Student (`Student_ID`, `Name`, `Email`)
- Course (`Course_ID`, `Course_Name`, `Credits`)
- Teacher (`Teacher_ID`, `Name`, `Department`)

Relationships:

- A Student can enroll in many Courses, and a Course can have many Students → Many-to-Many.
- A Teacher can teach many Courses, but each Course is taught by only one Teacher → One-to-Many.

### Diagram Representation

```scss
[STUDENT] ----(enrolls in)----< [COURSE] >----(taught by)----[TEACHER]

STUDENT: {Student_ID (PK), Name, Email}
COURSE: {Course_ID (PK), Course_Name, Credits}
TEACHER: {Teacher_ID (PK), Name, Department}
```

## ERD Symbols and Notations

An Entity–Relationship Diagram (ERD) uses specific symbols and notations to represent entities, attributes, and relationships. Over time, different styles of notations have evolved. The three most commonly used are:

1. Chen Notation (original, most descriptive)
2. Crow’s Foot Notation (most widely used in industry)
3. UML Notation (Unified Modeling Language, used in software engineering)

**Use ER diagram symbols:**

- Rectangles → Entities
- Ellipses → Attributes
- Diamonds → Relationships
- Lines → Connections
- Double lines → Total participation
- Double rectangles → Weak entities

```scss
   Student (Student_ID, Name, DOB, Email)
        |M:N
        |
    Enrolls
        |
        |M:N
   Course (Course_ID, Title, Credits)
        |
        |1:N
    Teaches
        |
 Instructor (Instructor_ID, Name, Salary)
        |
        |1:N
   Department (Dept_ID, Dept_Name)
```

### Chen’s Notation (1976)

This is the original notation introduced by Peter Chen. It is very visual and descriptive, but sometimes less compact.

#### Symbols in Chen’s Notation

- Entity → Rectangle
- Attribute → Ellipse (Oval)
  - Key Attribute: underlined
  - Derived Attribute: dashed oval
- Relationship → Diamond
- Connecting Lines → link entities, attributes, and relationships

#### Example

Scenario → Students enroll in Courses

```scss
 [STUDENT] ------(enrolls)------ [COURSE]
      |                               |
  (Student_ID)                    (Course_ID)
  (Name)                          (Course_Name)
```

- Entities: Student, Course (rectangles)
- Attributes: `Student_ID`, `Name`, `Course_ID`, `Course_Name` (ovals)
- Relationship: `enrolls` (diamond)

Best for teaching and conceptual modeling, but diagrams can get large.

### Crow’s Foot Notation

This is the most popular in database design (especially in business and IT). It focuses on entities, attributes, and cardinalities (1:1, 1:N, M:N).

#### Symbols in Crow’s Foot Notation

- Entity → Rectangle (with attributes inside)
- Primary Key → Underlined / at top
- Relationships → Lines with symbols:
  - One (|)
  - Many (crow’s foot symbol with three lines)
  - Optional (circle)
- Attributes: Usually shown inside entities (not separate ovals).

#### Example

Scenario → Students enroll in Courses

```scss
[STUDENT] ────< enrolls >──── [COURSE]

STUDENT
---------
Student_ID (PK)
Name
Email

COURSE
---------
Course_ID (PK)
Course_Name
Credits
```

- `STUDENT` to `COURSE` → Many-to-Many (M:N) relationship
- Represented by a crow’s foot near both ends
- Often requires a junction table (e.g., ENROLLMENT).

Best for practical database design, easy to map directly to relational schema.

### UML Notation (Unified Modeling Language)

UML is a general modeling language for software design, not just databases. However, it can be used to design ERDs too.

#### Symbols in UML Notation

- Entity (Class) → Rectangle divided into 3 sections
  1. Entity Name
  2. Attributes
  3. Methods (optional in ERD, often left blank in DB design)
- Relationships → Lines with multiplicity notations:
  - `1` → One
  - `0..1` → Zero or One
  - `*` → Many

#### Example:

Scenario → Students enroll in Courses

```scss
 -------------------------
 |       STUDENT         |
 -------------------------
 | Student_ID (PK)       |
 | Name                  |
 | Email                 |
 -------------------------

 -------------------------
 |       COURSE          |
 -------------------------
 | Course_ID (PK)        |
 | Course_Name           |
 | Credits               |
 -------------------------

STUDENT  "0..*" --------- "1..*"  COURSE
```

- Multiplicity (`0..*`, `1..*`) describes cardinality.
- UML looks like class diagrams in software engineering.

Best when integrating database design with object-oriented systems.

### Comparison of Notations

| Feature               | Chen Notation         | Crow’s Foot Notation       | UML Notation               |
| --------------------- | --------------------- | -------------------------- | -------------------------- |
| **Focus**             | Conceptual modeling   | Practical database design  | Software + database design |
| **Entities**          | Rectangles            | Rectangles with attributes | Classes (rectangles)       |
| **Attributes**        | Ovals                 | Inside entity box          | Inside class box           |
| **Relationships**     | Diamonds              | Lines with crow’s foot     | Lines with multiplicity    |
| **Cardinality shown** | Verbally near diamond | Graphically (crow’s foot)  | Numbers (_, 0..1, 1.._)    |
| **Usage**             | Academia, theory      | Industry, real databases   | Software engineering       |

- **Chen Notation** → Best for teaching and high-level conceptual diagrams.
- **Crow’s Foot Notation** → Best for real-world database design (most popular).
- **UML Notation** → Best for integrating database design with software development.

## Entities

In ER modeling, an Entity represents a real-world object or concept that has data stored about it in the database.

- Examples: `Student`, `Teacher`, `Car`, `Bank Account`.
- Entities are shown as rectangles in ER diagrams.

Each entity is described by its attributes (like ID, name, age, etc.), and one or more of these attributes act as a primary key to uniquely identify instances of that entity.

**How to Identify?**

- Look for nouns in the requirement description.

**Example:**

Requirement: “Students enroll in courses, and faculty members teach courses.”

    - Entities: Student, Course, Faculty

### Types of Entities

#### Strong Entity

- Exists independently of other entities.
- Has a primary key (unique identifier).
- Represented by a single rectangle in ERD.

**Example:**

In a university database, the Student entity is a strong entity because:

- Each student can be uniquely identified by Student_ID.
- It exists on its own without needing another entity.

```scss
[STUDENT]
-----------
Student_ID (PK)
Name
Email
```

Even if no other entity exists, Student can still exist in the system.

#### Weak Entity

- Cannot exist independently.
- Depends on a Strong Entity for its existence.
- Does not have a complete primary key of its own; instead, it has a partial key (called a discriminator) that combines with the strong entity’s key to create a unique identifier.
- Represented by a double rectangle in ERD.
- The relationship connecting it to the strong entity is called an Identifying Relationship, drawn with a double diamond.

**Example**

In a banking system, consider `Bank Account` (strong entity) and `Dependent` (weak entity).

- Each Dependent (like spouse or child of account holder) cannot exist without being linked to an `Account`.
- `Dependent` might have an attribute like `Dependent_Name` (partial key).
- Full identification requires combining `Account_ID` (from strong entity) + `Dependent_Name`.

```scss
[ACCOUNT] ──<<Identifies>>── [DEPENDENT]

ACCOUNT (Strong Entity)
----------------------
Account_ID (PK)
Account_Type
Balance

DEPENDENT (Weak Entity)
----------------------
Dependent_Name (Partial Key)
Relationship
```

- `ACCOUNT` is a strong entity (exists independently).
- `DEPENDENT` is a weak entity (cannot exist unless tied to an `Account`).

#### Key Differences Between Strong and Weak Entities

| Feature            | Strong Entity                        | Weak Entity                                        |
| ------------------ | ------------------------------------ | -------------------------------------------------- |
| **Existence**      | Independent                          | Dependent on a strong entity                       |
| **Primary Key**    | Has its own primary key              | Does not have a full primary key                   |
| **Identification** | Self-identified                      | Identified using strong entity’s key + partial key |
| **ERD Symbol**     | Single rectangle                     | Double rectangle                                   |
| **Relationship**   | Normal relationship (single diamond) | Identifying relationship (double diamond)          |
| **Example**        | Student, Course, Teacher             | Dependent, Order Item, Invoice Line                |

## Attributes

An Attribute is a property or characteristic that describes an entity (or sometimes a relationship) in an ER model.

- Example: A `Student` entity may have attributes like Student_ID, Name, and Email.
- In ER diagrams, attributes are usually represented as ellipses (ovals) connected to entities or relationships.

**How to Identify?**

- Look for descriptive information related to an entity.

**Example:**

- Student → Student_ID (PK), Name, Phone, DOB
- Course → Course_ID (PK), Course_Name, Credit_Hours
- Faculty → Faculty_ID (PK), Name, Department

### Types of Attributes

#### Simple Attribute

- Cannot be divided further into smaller parts.
- They are atomic (indivisible).
- Represented as a single oval.

##### Example

- `Age` of a student → atomic, cannot be further broken.
- `Gender`, `Salary`, `Roll_No`.

```scss
[STUDENT]
   |
 (Age)
```

Here, `Age` is a simple attribute of `Student`.

#### Composite Attribute

- Can be divided into smaller sub-parts, each representing a more detailed attribute.
- Useful for representing structured data.
- Represented as an oval connected to smaller ovals.

##### Example

- `Full_Name` can be divided into `First_Name` and `Last_Name`.
- `Address` can be divided into `Street`, `City`, `State`, `Zip_Code`.

```scss
          (Full_Name)
          /        \
 (First_Name)   (Last_Name)

 [STUDENT]
```

Here, `Full_Name` is a composite attribute.

#### Multivalued Attribute

- Can hold multiple values for a single entity instance.
- Represented by a double oval.

##### Example

- A `Student` may have multiple phone numbers.
- An `Employee` may have multiple skills.

```scss
[STUDENT]
   |
((Phone_Number))
```

Here, one student can have multiple phone numbers, so `Phone_Number` is a multivalued attribute.

#### Derived Attribute

- Value is derived (calculated) from other attributes.
- Represented by a dashed oval.

##### Example

- `Age` can be derived from `Date_of_Birth`.
- `Total_Price` can be derived as `Quantity × Unit_Price`.

```scss
[STUDENT]
   |
 (Date_of_Birth) -----> (Age) [Dashed oval]
```

Here, `Age` is not stored directly; it is calculated from `Date_of_Birth`.

### Summary Table of Attribute Types

| **Attribute Type** | **Definition**                   | **Symbol in ERD** | **Example**                 |
| ------------------ | -------------------------------- | ----------------- | --------------------------- |
| **Simple**         | Cannot be subdivided             | Oval              | Age, Gender, Salary         |
| **Composite**      | Can be subdivided into sub-parts | Oval → sub-ovals  | Full_Name (First, Last)     |
| **Multivalued**    | Can store multiple values        | Double oval       | Phone_Number, Skills        |
| **Derived**        | Computed from other attributes   | Dashed oval       | Age (from DOB), Total_Price |

## Relationships

A relationship in an ER model describes the association between two or more entities.

- Shown as a diamond shape (Chen notation) or simply a line (Crow’s Foot notation).
- Each relationship has a cardinality (the number of entity instances that can be associated).

**How to Identify?**

- Look for verbs in the requirement description.

**Example:**

Requirement: “Students enroll in courses, and faculty members teach courses.”

- Relationships:
  - Student enrolls in Course (M:N)
  - Faculty teaches Course (1:N)

### Types of Relationships (by Cardinality)

#### One-to-One (1:1) Relationship

- One entity is associated with exactly one instance of another entity.
- Each side has only one matching record.

**Example:**

- In a university, each Student has one Student_ID_Card, and each Student_ID_Card belongs to exactly one student.

**ER Representation (text-based):**

```scss
[STUDENT] 1 ──── 1 [STUDENT_ID_CARD]
```

- A student can have only one ID card.
- An ID card belongs to only one student.

Rare in practice, but used when data must be stored separately for efficiency or security reasons.

#### One-to-Many (1:N) Relationship

- One entity is associated with many instances of another entity.
- But the reverse is not true (those many belong to only one).

**Example:**

- A Teacher teaches many Courses.
- But each Course is taught by only one Teacher.

**ER Representation (text-based):**

```
[TEACHER] 1 ────< [COURSE]
```

- One teacher → many courses.
- Each course → exactly one teacher.

This is the most common type in databases.

#### Many-to-Many (M:N) Relationship

- One entity can be associated with many instances of another, and vice versa.

**Example:**

- A Student can enroll in many Courses.
- Each Course can have many Students.

**ER Representation (text-based):**

```scss
[STUDENT] >───< [COURSE]
```

- A student can enroll in multiple courses.
- A course can have multiple students.

**In relational databases:**

- M:N relationships cannot be implemented directly.
- They are resolved by creating a junction (bridge) table.

**Example Junction Table: `ENROLLMENT`**

```
ENROLLMENT
------------------
Student_ID (FK)
Course_ID (FK)
Enrollment_Date
```

This breaks the M:N into two 1:N relationships:

- Student → Enrollment
- Course → Enrollment

### Comparison of Relationship Types

| Relationship Type       | Meaning                       | Example                   | ERD Representation                  |
| ----------------------- | ----------------------------- | ------------------------- | ----------------------------------- |
| **1:1** (One-to-One)    | One entity ↔ One entity       | Student ↔ Student_ID_Card | `[STUDENT] 1───1 [STUDENT_ID_CARD]` |
| **1\:N** (One-to-Many)  | One entity ↔ Many entities    | Teacher ↔ Courses         | `[TEACHER] 1───< [COURSE]`          |
| **M\:N** (Many-to-Many) | Many entities ↔ Many entities | Students ↔ Courses        | `[STUDENT] >───< [COURSE]`          |

## Keys

A Key is an attribute (or set of attributes) that helps in uniquely identifying an entity in a database.

Keys ensure that there are no duplicate records and establish relationships between tables.

### Types of Keys

#### Primary Key (PK)

- A unique identifier for each entity (record).
- No two rows can have the same primary key value.
- Cannot be NULL.
- In ER diagrams, it is often underlined.

**Example:**

In a `STUDENT` entity:

- `Student_ID` can be the primary key because it uniquely identifies each student.

```scss
STUDENT
-------------------
Student_ID (PK)
Name
Email
Phone
```

Even if two students have the same name, their Student_ID will be unique.

#### Composite Key

- A primary key made up of two or more attributes.
- Used when a single attribute is not enough to uniquely identify a record.

#### Candidate Key

- All possible attributes (or combinations) that can uniquely identify an entity.
- From the candidate keys, one is chosen as the primary key.
- Others remain as alternative unique identifiers.

**Example:**

In the `STUDENT` entity:

- `Student_ID` (unique)
- `Email` (also unique)

So: `{Student_ID, Email}` are candidate keys.

- If we choose `Student_ID` as the primary key, `Email` remains an alternate key.

#### Foreign Key (FK)

- An attribute that creates a relationship between two entities.
- It is a primary key in one table and appears as an attribute in another table.
- Used to enforce referential integrity (you cannot insert a value in FK unless it exists in the referenced PK).

**Example:**

Consider two entities:

```scss
STUDENT
------------------
Student_ID (PK)
Name
Email

ENROLLMENT
------------------
Enrollment_ID (PK)
Student_ID (FK)
Course_ID (FK)
```

- In `ENROLLMENT`, `Student_ID` is a foreign key referencing `STUDENT(Student_ID)`.
- This links each enrollment record to a student.

#### Super Key

- A set of one or more attributes that can uniquely identify a record.
- Primary key is always a super key, but not all super keys are primary keys.
- Super key may contain extra attributes that are not necessary for uniqueness.

**Example:**

In `STUDENT`:

- `{Student_ID}` → uniquely identifies a student.
- `{Student_ID, Name}` → also uniquely identifies a student, but contains unnecessary attribute `Name`.

So:

- `{Student_ID}`, `{Email}`, `{Student_ID, Name}` are super keys.
- Only the minimal one (Student_ID) is chosen as the primary key.

#### Surrogate Key

- An artificially created key (usually auto-incremented number or UUID).
- Has no business meaning, used only for uniqueness.
- Helps avoid using long/natural keys (like National_ID or Email) as primary keys.

**Example**
| Enrollment_ID (PK, Auto) | Student_ID (FK) | Course_ID (FK) | Grade |
| ------------------------- | ---------------- | --------------- | ----- |
| 1 | S101 | C201 | A |
| 2 | S101 | C202 | B |

- Enrollment_ID is a surrogate key → generated automatically (1, 2, 3...).
- Student_ID + Course_ID are still important, but surrogate key makes referencing easier.

### Comparison Table of Keys

| Key Type          | Definition                                                                        | Example                                        |
| ----------------- | --------------------------------------------------------------------------------- | ---------------------------------------------- |
| **Primary Key**   | Chosen unique identifier for records; cannot be NULL                              | `Student_ID` in STUDENT                        |
| **Composite Key** | Uniqueness based on combination of attributes.                                    | (Student_ID + Course_ID) in Enrollment         |
| **Candidate Key** | All possible unique identifiers                                                   | `{Student_ID, Email}`                          |
| **Foreign Key**   | Attribute linking two entities                                                    | `Student_ID` in ENROLLMENT referencing STUDENT |
| **Super Key**     | Any set of attributes that uniquely identifies records (may include extra fields) | `{Student_ID}`, `{Student_ID, Name}`           |
| **Surrogate Key** | Artificial key with no business meaning (auto-generated).                         | Enrollment_ID (1, 2, 3...)                     |

# Relational Model

## Domains in the Relational Model

In relational database theory, a domain is the set of all possible valid values that an attribute (column) can take.

- Every attribute in a relation (table) is associated with exactly one domain.
- A domain ensures consistency, integrity, and correctness of data.
- For example, if we have an attribute `Age`, its domain should be all non-negative integers (0,1,2, …).

### Key Characteristics of Domains:

1. Atomic values only – Each value in a domain must be indivisible (no multiple values in one attribute).
   Example: A `PhoneNumber` domain should store one phone number, not multiple in a single cell.

2. Defined set of constraints – Domains can restrict valid values (like range, format, etc.).
   Example: The domain for `Percentage` could be all decimal numbers between 0 and 100.

3. Uniformity across tables – If the same domain is reused across different attributes, it guarantees consistency.
   Example: `CustomerEmail` and `EmployeeEmail` might both use a `VARCHAR(100)` domain with email format constraints.

## Data Types in Relational Databases

Domains are implemented in practice using data types in a DBMS (e.g., MySQL, PostgreSQL, Oracle, SQL Server).

### Common Data Types:

1. **Numeric Data Types**

- `INT`, `BIGINT` → Integer values.
- `DECIMAL(p, q)` / `NUMERIC(p, q)` → Fixed-point decimal numbers (good for money).
- `FLOAT`, `REAL`, `DOUBLE` → Approximate floating-point numbers.

Example:

`Salary DECIMAL(10,2)` → allows values like 45000.50, with 10 digits in total and 2 after the decimal.

2. **Character / String Data Types**

- `CHAR(n)` → Fixed-length string (e.g., `CHAR(10)` always uses 10 spaces).
- `VARCHAR(n)` → Variable-length string (efficient for text).
- `TEXT` / `CLOB` → Large text storage.

Example:

`Name VARCHAR(50)` → can store up to 50 characters.

3. **Date and Time Data Types**

- `DATE` → Stores year, month, day.
- `TIME` → Stores hour, minute, second.
- `DATETIME` / `TIMESTAMP` → Stores both date and time (with time zone support in some DBMS).

Example:

`HireDate DATE` → stores values like `2025-08-27`.

4. **Boolean Data Types**

- `BOOLEAN` or `BIT` → True/False values.

Example:

`IsActive BOOLEAN` → can be `TRUE` or `FALSE`.

5. **Special / Other Data Types (DBMS-specific)**

- `BLOB` (Binary Large Object) → images, videos, files.
- `ENUM` → predefined list of values.
- `UUID` → unique identifiers.

Example:

`Gender ENUM('Male','Female','Other')` → restricts entries to only these three.

# Relationship attributes

In an ER model, sometimes the relationship itself (not just the entities) needs to store additional information.

- These extra pieces of information are called relationship attributes.
- They describe properties of the association between entities.
- Represented as ovals attached to the relationship diamond (in Chen notation).

## Why Do We Need Relationship Attributes?

Normally, attributes belong to entities. But in some cases:

- An attribute cannot be assigned to just one entity.
- Instead, it belongs to the relationship itself.

**Example:**

In a Student–Course enrollment system:

- Entities: `Student`, `Course`.
- Relationship: `Enrolls`.
- Attribute: `Grade`.

The `Grade` cannot belong only to `Student` (different grades in different courses), nor only to `Course` (different grades for different students).

It makes sense only as part of the enrollment relationship.

## Example of Relationships

**Entities & Attributes**

- `Student` (`Student_ID`, `Name`)
- `Course` (`Course_ID`, `Title`)

**Relationship:**

- Enrolls (between Student and Course)
- Relationship Attribute: Grade

**ER Representation (text-based):**

```scss
[STUDENT] ──(Enrolls)── [COURSE]
                  |
                (Grade)
```

`Grade` is stored as part of the relationship, because it belongs to the association of a student with a course.

## Important Notes about Relationship Attributes

1. They are used only when the attribute cannot be assigned to one entity alone.

2. In relational databases, relationship attributes are usually stored in a separate table (junction/associative entity).
   - Example: `Enrollment(Student_ID, Course_ID, Grade)`

## When to Use Relationship Attributes

- Many-to-Many relationships (M:N) often require relationship attributes.
- Sometimes in 1:N relationships, if extra information about the relationship needs to be stored.

# Recursive Relationships

A recursive relationship (also called self-referencing relationship) occurs when an entity is related to itself.

- In other words, an entity has a relationship with another instance of the same entity type.
- Useful when modeling hierarchies or networks within the same entity set.

## Key Points of Recursive Relationships

- Entity participates more than once in the relationship.
- Each participation plays a different role in the relationship.
- Requires the use of role names to distinguish how the same entity is involved.

## Types of Recursive Relationships

1. **One-to-One (1:1)** → One instance relates to only one other instance of the same entity.
   - Example: In a company, each employee has one mentor (and that mentor is also an employee).
2. **One-to-Many (1:N)** → One instance relates to many others of the same entity.
   - Example: A manager manages many employees, but each employee has only one manager.
3. **Many-to-Many (M:N)** → Many instances relate to many others of the same entity.
   - Example: In a social media app, a user can follow many users, and can also be followed by many users.

## Example of Recursive Relationships

- Entity: `Employee`
- Attributes: `Emp_ID`, `Name`, `Position`
- Relationship: `Manages`

1. One employee can manage many employees.
2. Each employee is managed by exactly one manager.

**Textual ER Representation:**

```scss
[EMPLOYEE] ──(Manages)── [EMPLOYEE]

Attributes:
Emp_ID (PK)
Name
Position
```

- The same entity (`Employee`) appears twice in the relationship.
- We use roles → “Manager” and “Subordinate”.

## How Recursive Relationships are Implemented in Databases

Recursive relationships are usually implemented by:

1. Foreign Key referencing the same table.

   - Example: In `Employee`, a column `Manager_ID` references `Employee(Emp_ID)`.

   ```scss
   EMPLOYEE
   -------------------
   Emp_ID (PK)
   Name
   Position
   Manager_ID (FK → Emp_ID)
   ```

   This way, each employee record points to their manager within the same table.

2. Junction Table (for M:N recursive relationships).

   - Example: For `User` follows `User`, create a `Follows` table:

   ```scss
   FOLLOWS
   -------------------
   Follower_ID (FK → User_ID)
   Followed_ID (FK → User_ID)
   ```

   This allows many-to-many self-referencing

# Identifying vs. Non-Identifying Relationships

In an ER Diagram, a relationship between entities can either be:

1. Identifying Relationship → when the child entity’s existence and primary key depend on the parent entity.
2. Non-Identifying Relationship → when the child entity exists independently and just refers to the parent entity via a foreign key.

## Identifying Relationship

- Occurs when a weak entity depends on a strong entity.
- The child entity does not have a primary key of its own.
- The parent entity’s primary key becomes part of the child’s composite primary key.
- In ERD (Chen notation): double diamond.
- In Crow’s Foot ERD: the child’s PK includes the FK (solid line).

**Example: Bank Account & Transaction**

- `Transaction` is a weak entity because it cannot exist without an Account.
- Each transaction is identified by (Account_ID + Transaction_ID).

**ER Representation:**

```scss
[ACCOUNT] ◉──(Identifies)──◉ [TRANSACTION]

ACCOUNT
-------------------
Account_ID (PK)
Account_Type
Balance

TRANSACTION
-------------------
Account_ID (PK, FK)
Transaction_ID (PK)
Amount
Date
```

- `Transaction` is identified only when combined with `Account_ID`.
- This makes the relationship identifying.

## Non-Identifying Relationship

- Occurs when the child entity is a strong entity with its own primary key.
- The parent’s primary key is added as a foreign key only (not part of child’s PK).
- In ERD: single diamond.
- In Crow’s Foot ERD: the child’s PK does not include the FK (dashed line or regular line).

**Example: Teacher & Course**

- A `Course` exists independently of a teacher.
- Each course has its own `Course_ID` as a primary key.
- But we add `Teacher_ID` as a foreign key to show who teaches it.

**ER Representation:**

```scss
[TEACHER] ──(Teaches)── [COURSE]

TEACHER
-------------------
Teacher_ID (PK)
Name
Department

COURSE
-------------------
Course_ID (PK)
Course_Name
Credits
Teacher_ID (FK)
```

- `Course` has its own independent key (`Course_ID`).
- `Teacher_ID` is just a foreign key reference.
- This makes the relationship non-identifying.

## Key Differences between Identifying and Non-Identifying Relationships

| Feature                 | Identifying Relationship                         | Non-Identifying Relationship                              |
| ----------------------- | ------------------------------------------------ | --------------------------------------------------------- |
| **Entity Type**         | Connects strong → weak entity                    | Connects strong → strong entity                           |
| **Child’s Primary Key** | Includes parent’s PK                             | Independent of parent’s PK                                |
| **Existence**           | Child cannot exist without parent                | Child can exist without parent                            |
| **ERD Symbol**          | Double diamond (Chen) / solid line (Crow’s Foot) | Single diamond (Chen) / dashed/regular line (Crow’s Foot) |
| **Example**             | Account–Transaction                              | Teacher–Course                                            |

**Real-Life Analogy**

- Identifying → Like a transaction receipt: it only makes sense when tied to a specific account.
- Non-Identifying → Like a course: it exists on its own, but you can assign a teacher to it.

# Specialization

Specialization is the process of dividing a higher-level entity (superclass) into two or more lower-level entities (subclasses) based on some distinguishing characteristic.

- It answers the question: “What specific subtypes exist for this general entity?”
- Subclasses inherit all attributes and relationships of the superclass, but they can also have their own unique attributes.

Key Points:

1. Top-down approach (starts with a general entity and divides it into specific entities).
2. Helps to represent “is-a” relationship (e.g., A Doctor is an Employee).
3. Useful when different subgroups have unique attributes/roles.

## Example:

Consider an entity `Employee` with attributes: `Emp_ID`, `Name`, `Salary`.

Now, employees can be of two types:

- `FullTime_Employee` → has an extra attribute `Benefits`.
- `PartTime_Employee` → has an extra attribute `Hourly_Rate`.

So:

- Superclass → Employee
- Subclasses → FullTime_Employee, PartTime_Employee

Here, Specialization divides a broad entity (`Employee`) into specialized subtypes (`FullTime` and `PartTime`).

**ER Representation (textual):**

```scss
          Employee
      (Emp_ID, Name, Salary)
          /         \
 FullTime_Employee   PartTime_Employee
      (Benefits)         (Hourly_Rate)
```

# Generalization

Generalization is the opposite of specialization. It is the process of combining two or more lower-level entities into a higher-level entity (superclass) based on their common attributes.

- It answers the question: “What common entity can these subtypes belong to?”
- It is a bottom-up approach.

Key Points:

1. Bottom-up approach (starts with specific entities and abstracts them into a generalized entity).
2. Used when multiple entities share common attributes.
3. Avoids redundancy by placing shared attributes in the generalized superclass.

## Example:

Suppose we have two entities:

- `Car` → attributes: `Car_ID, Model, Color`
- `Bike` → attributes: `Bike_ID, Model, Color`

Both share common attributes: `Model, Color`.
Instead of keeping them separately with redundant attributes, we can create a generalized entity:

- Superclass → Vehicle (Vehicle_ID, Model, Color)
- Subclasses → Car, Bike

**ER Representation (textual):**

```scss
       Car         Bike
   (Car_ID, ...)  (Bike_ID, ...)
        \          /
         \        /
          Vehicle
     (Vehicle_ID, Model, Color)
```

Here, Generalization merges `Car` and `Bike` into a general entity `Vehicle`.

## Difference Between Specialization and Generalization

| Aspect            | Specialization                              | Generalization                                  |
| ----------------- | ------------------------------------------- | ----------------------------------------------- |
| Approach          | **Top-down** (from general to specific)     | **Bottom-up** (from specific to general)        |
| Purpose           | To create subtypes with distinct attributes | To merge common attributes into a single entity |
| Example           | Employee → FullTime, PartTime               | Car + Bike → Vehicle                            |
| Relationship type | “IS-A” (Employee **is a** FullTime)         | “IS-A” (Car **is a** Vehicle)                   |

# Aggregation

Aggregation is an abstract relationship used when we need to represent a relationship between a relationship and an entity.

- In simple words: when a relationship itself needs to participate in another relationship, we use aggregation.
- It is sometimes called a “has-a” or “part-of” relationship.
- Graphically, in ER diagrams, an aggregation is represented by a rectangle (entity) connected to a diamond (relationship) enclosed in another rectangle.

## Why Aggregation is Needed?

Normally, ER diagrams allow:

- Entity ↔ Entity relationships.

But what if we need:

- Entity ↔ Relationship relationships?

For example, a relationship (say “Works_On”) itself needs to connect with another entity (say Project_Manager). In such cases, normal ER model is insufficient, so aggregation comes into play.

## Example

- Entities:
  - Employee (`Emp_ID, Name`)
  - Project (`Proj_ID, Title`)
  - Department (`Dept_ID, Dept_Name`)
- Relationship:
  - Works_On (Employee ↔ Project)

Now, suppose we want to represent: _A department controls the “Works_On” relationship between employee and project._

This means:

- A department doesn’t directly control a project or an employee individually.
- Instead, it controls the association of an employee working on a project.

Here’s where aggregation is needed:

- We treat the relationship Works_On as an abstract entity, and then relate it with Department using another relationship (say, Controls).

**ER Representation (textual)**

```scss
 Employee -------- Works_On -------- Project
                        |
                        |
                  [Aggregation]
                        |
                  Controls (by)
                        |
                   Department
```

- Works_On (relationship) is aggregated and treated like an entity.
- Then Controls relates `Department` to this aggregated relationship.

## Key Characteristics of Aggregation

1. Represents higher-level abstraction (relationship of relationship).
2. Avoids redundancy – instead of connecting department separately to employee and project, we connect it to their association.
3. Expresses real-world semantics more naturally.

# Mapping Business Rules

To create a database from this, we need to translate requirements into ERD components:

- Nouns → Entities
- Verbs → Relationships
- Adjectives / identifiers → Attributes
- Quantifiers (one, many, must, may) → Cardinalities & Participation

## Steps to Map Business Rules to ERD

### 1. Extract Entities from Business Rules

- Look for nouns in the rules → these usually represent entities.
- Each entity will become a rectangle in the ER diagram.

**Example rule:**

- “A university has students and courses.”
- Entities: Student, Course

### 2. Identify Relationships

- Look for verbs or action phrases → these usually represent relationships.
- Relationships are shown as diamonds in the ERD.

**Example rule:**

- “Students enroll in courses.”
- Relationship: Enrolls (between Student and Course).

### 3. Determine Cardinality and Participation

- Business rules often describe how many instances of one entity relate to another.
- Cardinality can be:
  - One-to-One (1:1)
  - One-to-Many (1:N)
  - Many-to-Many (M:N)
- Participation may be mandatory (total) or optional (partial).

**Example rule:**

- “Each course must be taught by one instructor, but an instructor can teach many courses.”
- Relationship: Teaches (Instructor–Course)
- Cardinality: 1 Instructor → Many Courses (1:N)

### 4. Define Attributes

- Business rules may also specify important details (adjectives, descriptors, identifiers).
- These become attributes of entities or sometimes of relationships.

**Example rule:**

- “Each student has a student ID, name, and date of birth.”
- Attributes of Student: Student_ID (PK), Name, DOB.

### 5. Apply Constraints

- Some business rules describe constraints (conditions that must always be true).
- These map to keys, total participation, or unique attributes in the ERD.

**Example rule:**

- “Every course must have at least one student enrolled.”
- Constraint: Total participation of Course in Enrolls relationship.

## Example of Mapping Business Rules into an ERD

1. A university has students, courses, and instructors.
2. Each student can enroll in many courses, and each course can have many students.
3. Each course is taught by one instructor, but an instructor can teach many courses.
4. Each student has a Student_ID, Name, and DOB.
5. Each course has a Course_ID, Title, and Credits.
6. Each instructor has an Instructor_ID, Name, and Salary.

### Mapping Process

- Entities: Student, Course, Instructor.
- Relationships:
  - Enrolls (Student–Course, M:N).
  - Teaches (Instructor–Course, 1:N).
- Attributes:
  - Student → Student_ID (PK), Name, DOB.
  - Course → Course_ID (PK), Title, Credits.
  - Instructor → Instructor_ID (PK), Name, Salary.
- Constraints:
  - Each course must be taught by one instructor (total participation of Course in Teaches).
  - A student may or may not enroll in a course (optional participation).

```scss
 Student (Student_ID, Name, DOB)
        |M:N
        |
     Enrolls
        |
        |M:N
 Course (Course_ID, Title, Credits)
        |
        |1:N
     Teaches
        |
 Instructor (Instructor_ID, Name, Salary)
```

## Common Mistakes

1. Treating Attributes as Entities
2. Ignoring Cardinality and Participation
3. Overusing Many-to-Many Relationships
4. Not Defining Primary Keys
5. Mixing Up Entities and Relationships
6. Not Handling Weak Entities Properly
7. Missing Attributes on Relationships

## Mapping entities to tables

### 1. Strong Entities → Tables

- Each strong entity becomes a separate table.
- Attributes of the entity become columns.
- The primary key (PK) of the entity becomes the table’s primary key.

### 2. Weak Entities → Tables (with Identifying Relationship)

- A weak entity cannot exist without a strong entity.
- Its table includes:
  - Its own attributes.
  - The primary key of the owner entity (as a foreign key).
  - A partial key to uniquely identify instances.
- Together, they form the composite primary key.

### 3.Relationships → Tables

#### 1:1 Relationship

- Add the primary key of one entity as a foreign key in the other.
- Sometimes, merge both entities into one table if they always participate together.

Example:

Relationship: Each student has one student_card.

```sql
STUDENT(
   Student_ID PRIMARY KEY,
   Name,
   DOB
);

STUDENT_CARD(
   Card_ID PRIMARY KEY,
   Issue_Date,
   Student_ID UNIQUE,   -- FK referencing STUDENT
   FOREIGN KEY(Student_ID) REFERENCES STUDENT(Student_ID)
);
```

#### 1:N Relationship

Add the primary key of the "1" side as a foreign key in the "N" side.

Example:

Relationship: Each course is taught by one instructor, but an instructor can teach many courses.

```sql
INSTRUCTOR(
   Instructor_ID PRIMARY KEY,
   Name,
   Salary
);

COURSE(
   Course_ID PRIMARY KEY,
   Title,
   Credits,
   Instructor_ID,   -- FK referencing INSTRUCTOR
   FOREIGN KEY(Instructor_ID) REFERENCES INSTRUCTOR(Instructor_ID)
);
```

#### M:N Relationship

- Create a new table (associative/bridge entity).
- Include the primary keys of both entities as foreign keys.
- Add relationship attributes (if any).

Example:

Relationship: Students enroll in many courses, and each course has many students. Enrollment has a Date.

```sql
STUDENT(
   Student_ID PRIMARY KEY,
   Name,
   DOB,
   Email
);

COURSE(
   Course_ID PRIMARY KEY,
   Title,
   Credits
);

ENROLLMENT(
   Student_ID,   -- FK referencing STUDENT
   Course_ID,    -- FK referencing COURSE
   Enroll_Date,
   PRIMARY KEY (Student_ID, Course_ID),
   FOREIGN KEY(Student_ID) REFERENCES STUDENT(Student_ID),
   FOREIGN KEY(Course_ID) REFERENCES COURSE(Course_ID)
);
```

### 4. Multi-Valued Attributes → Separate Tables

- If an attribute can have multiple values, create a new table.
- The table contains:
  - The primary key of the original entity.
  - The multivalued attribute.
- The composite key ensures uniqueness.

Example:

Entity: Student has multiple Phone_Numbers.

```sql
STUDENT(
   Student_ID PRIMARY KEY,
   Name,
   DOB
);

STUDENT_PHONE(
   Student_ID,   -- FK referencing STUDENT
   Phone_Number,
   PRIMARY KEY (Student_ID, Phone_Number)
);
```

### 5. Specialization / Generalization → Tables

Two common approaches:

#### One Table for Each Subclass (Disjoint strategy)

- Superclass attributes → in the superclass table.
- Subclass-specific attributes → in separate subclass tables.
- Subclass table’s PK = Superclass PK (and FK).

Example:

Entity: Employee specialized into FullTime_Employee and PartTime_Employee.

```sql
EMPLOYEE(
   Emp_ID PRIMARY KEY,
   Name,
   Salary
);

FULLTIME_EMPLOYEE(
   Emp_ID PRIMARY KEY,   -- FK referencing EMPLOYEE
   Benefits,
   FOREIGN KEY(Emp_ID) REFERENCES EMPLOYEE(Emp_ID)
);

PARTTIME_EMPLOYEE(
   Emp_ID PRIMARY KEY,   -- FK referencing EMPLOYEE
   Hourly_Rate,
   FOREIGN KEY(Emp_ID) REFERENCES EMPLOYEE(Emp_ID)
);
```

#### Single Table with Type Attribute

- All attributes in one table.
- A type discriminator column specifies which subclass applies.

```sql
EMPLOYEE(
   Emp_ID PRIMARY KEY,
   Name,
   Salary,
   Emp_Type,        -- 'F' = Fulltime, 'P' = Parttime
   Benefits,        -- Null if not Fulltime
   Hourly_Rate      -- Null if not Parttime
);
```

### Summary

- Strong entities → independent tables.
- Weak entities → dependent tables with composite PK.
- Relationships → FKs (1:1, 1:N) or new tables (M:N).
- Multivalued attributes → separate tables.
- Specialization/Generalization → multiple strategies (separate subclass tables or single table with type attribute).

## Mapping relationships to tables

### One-to-One (1:1)

- Each entity instance is related to exactly one instance of the other entity.
- Implementation options:
  - Add the primary key of one table as a foreign key in the other.
  - If both always participate, merge them into one table.

**Example:**

- Business Rule: Each student has one student_card.

ERD: `Student (Student_ID, Name) —(Has)— Student_Card (Card_ID, Issue_Date)`

**Tables:**

```sql
STUDENT(
   Student_ID PRIMARY KEY,
   Name
);

STUDENT_CARD(
   Card_ID PRIMARY KEY,
   Issue_Date,
   Student_ID UNIQUE,   -- ensures 1:1 mapping
   FOREIGN KEY(Student_ID) REFERENCES STUDENT(Student_ID)
);
```

Here, `Student_ID` in `STUDENT_CARD` ensures each student has at most one card.

### One-to-Many (1:N)

- One entity instance relates to many instances of another entity.
- Implementation:
  - Place the primary key of the "1" side as a foreign key in the "N" side.

**Example:**

- Business Rule: One instructor teaches many courses, but each course has only one instructor.

ERD: `Instructor (Instructor_ID, Name) —(Teaches)— Course (Course_ID, Title)`

**Tables:**

```sql
INSTRUCTOR(
   Instructor_ID PRIMARY KEY,
   Name
);

COURSE(
   Course_ID PRIMARY KEY,
   Title,
   Instructor_ID,   -- FK from INSTRUCTOR
   FOREIGN KEY(Instructor_ID) REFERENCES INSTRUCTOR(Instructor_ID)
);
```

Each course points to one instructor, but an instructor can appear in many rows.

### Many-to-Many (M:N)

- One entity instance can relate to many instances of another, and vice versa.
- Implementation:
  - Create a new table (associative/bridge table).
  - Include the primary keys of both entities as foreign keys.
  - If the relationship has attributes, they also go into this new table.

Example:

- Business Rule: Students enroll in many courses, and courses have many students. Enrollment has a Date.

ERD: `Student —(Enrolls)— Course` with attribute `Enroll_Date`

**Tables:**

```sql
STUDENT(
   Student_ID PRIMARY KEY,
   Name,
   DOB
);

COURSE(
   Course_ID PRIMARY KEY,
   Title,
   Credits
);

ENROLLMENT(
   Student_ID,   -- FK from STUDENT
   Course_ID,    -- FK from COURSE
   Enroll_Date,
   PRIMARY KEY(Student_ID, Course_ID),
   FOREIGN KEY(Student_ID) REFERENCES STUDENT(Student_ID),
   FOREIGN KEY(Course_ID) REFERENCES COURSE(Course_ID)
);
```

`ENROLLMENT` resolves the M:N relationship, and stores `Enroll_Date` as an attribute.

### Relationships with Attributes

- If a relationship itself has attributes, it must be represented as a separate table, even if it’s 1:1 or 1:N.

Example:

- Business Rule: Employee works on Project, with Hours as an attribute.

ERD: `Employee —(Works_On[Hours])— Project`

**Tables:**

```sql
EMPLOYEE(
   Emp_ID PRIMARY KEY,
   Name
);

PROJECT(
   Proj_ID PRIMARY KEY,
   Title
);

WORKS_ON(
   Emp_ID,   -- FK from EMPLOYEE
   Proj_ID,  -- FK from PROJECT
   Hours,
   PRIMARY KEY(Emp_ID, Proj_ID),
   FOREIGN KEY(Emp_ID) REFERENCES EMPLOYEE(Emp_ID),
   FOREIGN KEY(Proj_ID) REFERENCES PROJECT(Proj_ID)
);
```

Relationship attributes always force a new table.

### Mapping Rules Recap

| Relationship Type   | How to Map to Tables                                 |
| ------------------- | ---------------------------------------------------- |
| **1:1**             | Add FK to one side (or merge if total participation) |
| **1\:N**            | Add FK from “1” side into “N” side                   |
| **M\:N**            | Create new associative table with PKs as FKs         |
| **With Attributes** | Always create new table (even for 1:1, 1\:N)         |

## Handling weak entities composite keys

- A weak entity is an entity that cannot be uniquely identified by its own attributes alone.
- It depends on a strong (owner) entity for its identification.
- Always has:
  - A partial key (attribute that only distinguishes instances relative to the owner).
  - An identifying relationship (double diamond in ERD) with its owner entity.

**Example (ERD):**

- Order (strong entity) has `Order_ID`.
- Order_Item (weak entity) has `Item_No, Quantity`.
- `Item_No` alone doesn’t uniquely identify an order item (two different orders may both have `Item_No = 1`).
- The combination of Order_ID + Item_No is needed.

### Mapping Weak Entities to Relational Model

When converting a weak entity to a relational table:

**Rule:**

- Create a table for the weak entity.
- Include:
  1. The primary key of the owner entity (as a foreign key).
  2. The partial key of the weak entity.
  3. Other attributes of the weak entity.
- Together, (owner’s PK + weak entity’s partial key) = composite primary key.

### Composite Keys

- A composite key is a primary key that consists of two or more attributes.
- Needed when no single attribute uniquely identifies a record.
- Common in:
  - Weak entities.
  - Associative entities (resolving M:N relationships).

**Example:**

- `Order_Item` → Composite Key = (Order_ID, Item_No)
- `Enrollment` (for Student–Course M:N relationship) → Composite Key = `(Student_ID, Course_ID)`

### Weak Entity Conversion

1. A customer places many orders. Each order has an Order_ID.
2. Each order contains multiple items. Each item has an Item_No (per order), product name, and quantity.
3. Order_Item is a weak entity, identified by (Order_ID + Item_No).

**ERD:**

```scss
Customer (Customer_ID, Name)
      |
      | places
      |
   Order (Order_ID, Date)
      |
      | contains
      |
   Order_Item (Item_No, Product, Quantity)   <-- Weak Entity
```

```sql
CUSTOMER(
   Customer_ID PRIMARY KEY,
   Name
);

ORDER(
   Order_ID PRIMARY KEY,
   Order_Date,
   Customer_ID,
   FOREIGN KEY(Customer_ID) REFERENCES CUSTOMER(Customer_ID)
);

ORDER_ITEM(
   Order_ID,   -- FK referencing ORDER
   Item_No,    -- Partial key
   Product,
   Quantity,
   PRIMARY KEY(Order_ID, Item_No),
   FOREIGN KEY(Order_ID) REFERENCES ORDER(Order_ID)
);
```

### Key Differences of Weak Entity and Composite Key

| Concept         | Weak Entity                           | Composite Key                                 |
| --------------- | ------------------------------------- | --------------------------------------------- |
| **Definition**  | Cannot exist without owner entity     | A PK made of ≥ 2 attributes                   |
| **Why Needed?** | Depends on strong entity for identity | No single attribute uniquely identifies a row |
| **ERD Symbol**  | Double rectangle, double diamond      | Not a symbol, but implied in schema           |
| **Example**     | Order_Item depends on Order           | Enrollment(Student_ID, Course_ID)             |

## Resolving M:N relationships

- In an ERD, we can easily draw a many-to-many (M:N) relationship between two entities.
- But in a relational database, we cannot directly implement M:N relationships because:
  - A relational table must have a primary key.
  - If we just try to add foreign keys on both sides, data redundancy and anomalies occur.

Solution → Introduce a new table (associative/bridge/junction table) to represent the M:N relationship.

### General Rule for Mapping

If `Entity A` and `Entity B` have an M:N relationship:

1. Create separate tables for both entities.
2. Create a new relationship table (associative entity).
3. In the new table:

- Include the primary keys of both entities (as foreign keys).
- The combination of these foreign keys becomes the composite primary key.
- If the relationship has attributes, store them in this table.

### Example

**Business Rule:**

- A student can enroll in many courses.
- A course can have many students.
- Enrollment has an attribute: Enroll_Date.

ERD

```scss
STUDENT -------- (Enrolls) -------- COURSE
                    |
                Enroll_Date
```

Relational Tables:

```sql
STUDENT(
   Student_ID PRIMARY KEY,
   Name,
   DOB
);

COURSE(
   Course_ID PRIMARY KEY,
   Title,
   Credits
);

ENROLLMENT(                     -- Bridge table
   Student_ID,                  -- FK from STUDENT
   Course_ID,                   -- FK from COURSE
   Enroll_Date,                 -- Relationship attribute
   PRIMARY KEY(Student_ID, Course_ID),
   FOREIGN KEY(Student_ID) REFERENCES STUDENT(Student_ID),
   FOREIGN KEY(Course_ID) REFERENCES COURSE(Course_ID)
);
```

`ENROLLMENT` resolves the M:N relationship and holds the attribute `Enroll_Date`.

### Step by Step Recap

| Step | Action                                                   |
| ---- | -------------------------------------------------------- |
| 1    | Identify M\:N relationships in ERD                       |
| 2    | Create tables for both entities                          |
| 3    | Create a **new bridge table**                            |
| 4    | Add both entities’ PKs as FKs in bridge table            |
| 5    | Make **composite key** (PK1 + PK2) as the new table’s PK |
| 6    | Include any relationship attributes in bridge table      |

# Normalization

## Functional Dependency

A Functional Dependency (FD) is a constraint that describes a relationship between attributes (columns) in a relation (table).

**Formally:**

For a relation R, an attribute (or a set of attributes) X is said to functionally determine another attribute (or set of attributes) Y if, for every pair of tuples in R, whenever the values of X are the same, the values of Y are also the same.

We write this as:

X → Y

(read: X functionally determines Y)

### Example of Functional Dependency

Suppose we have a relation Student:

| StudentID | Name    | Department | DeptHead   |
| --------- | ------- | ---------- | ---------- |
| 101       | Alice   | CSE        | Dr. Rahman |
| 102       | Bob     | CSE        | Dr. Rahman |
| 103       | Charlie | EEE        | Dr. Hasan  |

### Functional Dependencies:

1. **StudentID → Name, Department**

- A StudentID uniquely determines a single Name and Department.
- If two rows have the same StudentID, they must have the same Name and Department.

2. **Department → DeptHead**

- A department has exactly one Head.
- If two rows have the same Department, they must have the same DeptHead.

### Types of Functional Dependencies

#### Trivial Functional Dependency

- A functional dependency is trivial if the dependent is a subset of the determinant.
- Example:
  - `{StudentID, Name}` → StudentID
  - Always true, because StudentID is already part of `{StudentID, Name}`.

#### Non-Trivial Functional Dependency

- A dependency is non-trivial if the dependent is not a subset of the determinant.
- Example:
  - `StudentID → Name`
  - Here, Name is not part of StudentID, so it is non-trivial.

#### Completely Non-Trivial

- When `X → Y` and X ∩ Y = ∅ (they share no attributes).
- Example:
  - `StudentID → Department`
  - `StudentID` and `Department` have no attributes in common.

### Importance of Functional Dependencies in Normalization

Functional Dependencies are the foundation of Normalization.

- They help detect redundancy.
- They identify candidate keys.
- They are used to decide the normal form of a relation.

Example Problem:

Consider this unnormalized table Employee:

| EmpID | EmpName | DeptID | DeptName | DeptHead   |
| ----- | ------- | ------ | -------- | ---------- |
| 1     | Alice   | 10     | CSE      | Dr. Rahman |
| 2     | Bob     | 10     | CSE      | Dr. Rahman |
| 3     | Charlie | 20     | EEE      | Dr. Hasan  |

**Functional Dependencies:**

1. EmpID → EmpName, DeptID
   (An employee ID determines a unique name and department).

2. DeptID → DeptName, DeptHead
   (Each department ID determines one department name and head).

**Problem: Redundancy**

- DeptName and DeptHead are repeated for every employee in the same department.
- If the head of DeptID 10 changes, multiple rows must be updated.

**Solution: Normalization using FDs**

- Split into two relations:

Employee(EmpID, EmpName, DeptID)
Department(DeptID, DeptName, DeptHead)

Now redundancy is removed, thanks to identifying FDs.

### Summary of Functional Dependency

| Concept                        | Meaning                                 | Example               |
| ------------------------------ | --------------------------------------- | --------------------- |
| **Functional Dependency (FD)** | X determines Y (X → Y)                  | StudentID → Name      |
| **Trivial FD**                 | Dependent ⊆ Determinant                 | {EmpID, Name} → EmpID |
| **Non-Trivial FD**             | Dependent not subset of determinant     | EmpID → DeptID        |
| **Role in Normalization**      | Detect redundancy & guide decomposition | DeptID → DeptHead     |

## 1st Normal Form (1NF)

First Normal Form (1NF) is the basic level of normalization in relational database design.
It deals with the structure of data inside a table and ensures that the relation follows the principles of a relational model.

A relation is in 1NF if it satisfies the following rules:

1. **Atomic values only** – Each cell must contain a single indivisible value (no lists, sets, repeating groups).

2. **No repeating groups/arrays** – Each column should represent one attribute, not multiple.

3. **Unique rows (tuples)** – Each record must be unique, identified by a primary key.

**Why is 1NF important?**

- Ensures the database structure is simple and consistent.
- Eliminates multi-valued attributes (like storing multiple phone numbers in one column).
- Sets the foundation for higher normal forms (2NF, 3NF, BCNF).

### Example: Table NOT in 1NF

| StudentID | Name    | Subjects        | Phone Numbers      |
| --------- | ------- | --------------- | ------------------ |
| 101       | Alice   | Math, Physics   | 111-2222, 333-4444 |
| 102       | Bob     | Chemistry       | 555-6666           |
| 103       | Charlie | Math, Chemistry | 777-8888, 999-0000 |

**Problems:**

1. Subjects column contains multiple values (`Math, Physics`).
2. Phone Numbers column contains multiple values (`111-2222, 333-4444`).
3. The table violates atomicity (not atomic values).

### Conversion to 1NF

We split multi-valued attributes into separate rows.

| StudentID | Name    | Subject   | Phone    |
| --------- | ------- | --------- | -------- |
| 101       | Alice   | Math      | 111-2222 |
| 101       | Alice   | Physics   | 333-4444 |
| 102       | Bob     | Chemistry | 555-6666 |
| 103       | Charlie | Math      | 777-8888 |
| 103       | Charlie | Chemistry | 999-0000 |

- Each cell now holds a single value (atomic).
- No repeating groups → “Subjects” split into rows.
- Primary Key can be `{StudentID, Subject, Phone}` or separate surrogate key.

### Key Points about 1NF

| Rule of 1NF         | Explanation                               | Example                       |
| ------------------- | ----------------------------------------- | ----------------------------- |
| Atomic values       | No multi-valued attributes                | One phone number per row      |
| No repeating groups | No lists or arrays in a cell              | `Math, Physics` must be split |
| Unique rows         | Each row must be distinguishable by a key | `{StudentID, Subject}`        |

## 2nd Normal Form (2NF)

A relation is in 2NF if:

1. It is already in 1NF.
2. It has no partial dependency → meaning no non-prime attribute depends on part of a composite primary key.

**Key Terms**

- Prime attribute → An attribute that is part of a candidate key.
- Non-prime attribute → An attribute that is not part of any candidate key.
- Partial dependency → When a non-prime attribute depends only on part (not all) of a composite key.

In short: 2NF removes partial dependency.

### Example: Table in 1NF but not in 2NF

| StudentID | CourseID | StudentName | CourseName | Instructor |
| --------- | -------- | ----------- | ---------- | ---------- |
| 101       | C1       | Alice       | DBMS       | Dr. Rahman |
| 102       | C1       | Bob         | DBMS       | Dr. Rahman |
| 101       | C2       | Alice       | Networks   | Dr. Hasan  |
| 103       | C2       | Charlie     | Networks   | Dr. Hasan  |

**Candidate Key:**

- Composite key = {StudentID, CourseID} (because each student can take multiple courses).

**Functional Dependencies:**

1. `{StudentID, CourseID} → StudentName, CourseName, Instructor`
2. `StudentID → StudentName` (partial dependency problem)
3. `CourseID → CourseName, Instructor` (partial dependency problem)

**Problem:**

- StudentName depends only on `StudentID`.
- CourseName and Instructor depend only on `CourseID`.
- This creates redundancy:
  - `CourseName` and `Instructor` repeat for every student enrolled in that course.
  - If Dr. Rahman changes department, we must update multiple rows.

### Conversion to 2NF

We remove partial dependencies by decomposing into smaller relations.

**Decomposed Tables:**

`Student Table`

| StudentID | StudentName |
| --------- | ----------- |
| 101       | Alice       |
| 102       | Bob         |
| 103       | Charlie     |

`Course Table`

| CourseID | CourseName | Instructor |
| -------- | ---------- | ---------- |
| C1       | DBMS       | Dr. Rahman |
| C2       | Networks   | Dr. Hasan  |

`Enrollment Table`

| StudentID | CourseID |
| --------- | -------- |
| 101       | C1       |
| 102       | C1       |
| 101       | C2       |
| 103       | C2       |

#### Explanation of Fix

- Now:
  - `StudentID → StudentName` is stored in Student table.
  - `CourseID → CourseName, Instructor` is stored in Course table.
  - `Enrollment` table just links students and courses.
- No partial dependency remains, because:
  - In Enrollment, the only dependency is {StudentID, CourseID} (the whole composite key).

### Key Points about 2NF

| Rule of 2NF           | Explanation                                                 | Example                                                        |
| --------------------- | ----------------------------------------------------------- | -------------------------------------------------------------- |
| Must be in 1NF        | Atomic values, no repeating groups                          | Already achieved in Enrollment table                           |
| No partial dependency | Non-prime attributes cannot depend on part of composite key | StudentName depends only on StudentID → moved to Student table |
| Goal                  | Remove redundancy caused by composite keys                  | Avoid repeating Instructor name for each student               |

## 3rd Normal Form (3NF)

A relation is in 3NF if:

1. It is already in 2NF.
2. It has no transitive dependency → meaning, no non-prime attribute depends on another non-prime attribute.

In other words:

- Every non-prime attribute must depend only on the candidate key and nothing else.
- The rule: For every functional dependency X → Y, either:
  - X is a superkey, OR
  - Y is a prime attribute (part of a candidate key).

### Key Term: Transitive Dependency

A transitive dependency occurs when:

`A → B` and `B → C` ⇒ then `A → C` (indirect dependency).

Example:

- If `StudentID → DeptID` and `DeptID → DeptName`,
- Then `StudentID → DeptName` is a transitive dependency.

### Table in 2NF but not in 3NF

| EmpID | EmpName | DeptID | DeptName | DeptLocation |
| ----- | ------- | ------ | -------- | ------------ |
| 1     | Alice   | 10     | HR       | Dhaka        |
| 2     | Bob     | 10     | HR       | Dhaka        |
| 3     | Charlie | 20     | IT       | Chittagong   |
| 4     | David   | 30     | Finance  | Khulna       |

**Candidate Key:**

- `EmpID` (each employee has a unique ID).

**Functional Dependencies:**

1. `EmpID → EmpName, DeptID, DeptName, DeptLocation`
2. `DeptID → DeptName, DeptLocation`

**Problem:**

- `DeptName` and `DeptLocation` depend on `DeptID`, not directly on `EmpID`.
- This is a transitive dependency:
  - `EmpID → DeptID`
  - `DeptID → DeptName, DeptLocation`
  - `⇒ EmpID → DeptName, DeptLocation` (transitive).

**Redundancy Issues:**

- DeptName & DeptLocation repeat for every employee in the same department.
- If DeptLocation changes, many rows need updating (update anomaly).

### Conversion to 3NF

We remove transitive dependencies by splitting the table into smaller relations.

**Decomposed Tables:**

`Employee Table`

| EmpID | EmpName | DeptID |
| ----- | ------- | ------ |
| 1     | Alice   | 10     |
| 2     | Bob     | 10     |
| 3     | Charlie | 20     |
| 4     | David   | 30     |

`Department Table`

| DeptID | DeptName | DeptLocation |
| ------ | -------- | ------------ |
| 10     | HR       | Dhaka        |
| 20     | IT       | Chittagong   |
| 30     | Finance  | Khulna       |

### Explanation of Fix

- Now:
  - In Employee, non-prime attributes (`EmpName`) depend only on the key `EmpID`.
  - In Department, non-prime attributes (`DeptName`, `DeptLocation`) depend only on the key `DeptID`.
- All transitive dependencies are removed.

### Key Points about 3NF

| Rule of 3NF              | Explanation                                  | Example                                           |
| ------------------------ | -------------------------------------------- | ------------------------------------------------- |
| Must be in 2NF           | No partial dependencies                      | Achieved                                          |
| No transitive dependency | Non-prime attributes must depend only on key | DeptName & DeptLocation moved to Department table |
| Goal                     | Eliminate redundancy & anomalies             | Avoid repeating Dept details for each employee    |

## Boyce-Codd Normal Form (BCNF)

BCNF is an advanced version of Third Normal Form (3NF).

A relation is in BCNF if:

For every functional dependency (X → Y):

- X must be a superkey (a key that can uniquely identify a row).

Difference from 3NF:

- In 3NF, a functional dependency is allowed if Y is a prime attribute (part of a candidate key).
- In BCNF, this exception is not allowed.

So:

BCNF = A stricter form of 3NF.

### Why do we need BCNF?

Even if a table is in 3NF, it may still have anomalies if a non-trivial FD exists where determinant (X) is not a superkey.

BCNF eliminates:

- Update anomalies
- Insertion anomalies
- Deletion anomalies

### Table in 3NF but not in BCNF

| CourseID | Instructor | Room |
| -------- | ---------- | ---- |
| C1       | Dr. Smith  | R101 |
| C2       | Dr. Smith  | R102 |
| C3       | Dr. Jones  | R101 |

**Candidate Keys:**

- `{CourseID, Instructor}` (a course + instructor pair is unique).

**Functional Dependencies:**

1. `CourseID → Room`
2. `Room → Instructor`

**Check 3NF:**

- Yes, table is in 3NF because all non-prime attributes depend on keys.

**Problem (Why not BCNF?):**

- `Room → Instructor` violates BCNF.
  - Here, `Room` is not a superkey.
  - But it determines `Instructor`.
- This causes anomalies:
  - If Dr. Smith moves to another room, multiple rows must be updated.

### Conversion to BCNF

We decompose into two relations:

`Course Table`

| CourseID | Room |
| -------- | ---- |
| C1       | R101 |
| C2       | R102 |
| C3       | R101 |

`RoomInstructor Table`

| Room | Instructor |
| ---- | ---------- |
| R101 | Dr. Smith  |
| R102 | Dr. Smith  |
| R101 | Dr. Jones  |

- In Course, `CourseID` is the key → No violation.
- In RoomInstructor, `{Room, Instructor}` is the key → No violation.

### Key Points about BCNF

| Normal Form | Rule                                     | Example of Violation                       |
| ----------- | ---------------------------------------- | ------------------------------------------ |
| **1NF**     | Atomic values, no repeating groups       | Multi-valued subjects                      |
| **2NF**     | No partial dependency                    | Non-prime depends on part of composite key |
| **3NF**     | No transitive dependency                 | Non-prime depends on another non-prime     |
| **BCNF**    | For every FD X → Y, X must be a superkey | `Room → Instructor` when Room is not a key |

## Fourth Normal Form (4NF)

A relation is in 4NF if:

1. It is already in BCNF.
2. It has no multi-valued dependency (MVD), except when it is implied by a candidate key.

Multi-Valued Dependency (MVD):

- Occurs when one attribute in a table uniquely determines multiple independent sets of values.
- Example notation: A ↠ B ("A multi-determines B").

### Example: Table NOT in 4NF

| StudentID | Hobby    | Language |
| --------- | -------- | -------- |
| 101       | Chess    | English  |
| 101       | Chess    | French   |
| 101       | Painting | English  |
| 101       | Painting | French   |

**Functional / Multi-Valued Dependencies:**

- `StudentID ↠ Hobby` (a student can have many hobbies).
- `StudentID ↠ Language` (a student can know many languages).

**Problem:**

- Unnecessary repetition → For each hobby, we repeat all languages.

### Conversion to 4NF

Decompose into two independent relations:

`StudentHobby`

| StudentID | Hobby    |
| --------- | -------- |
| 101       | Chess    |
| 101       | Painting |

`StudentLanguage`

| StudentID | Hobby    |
| --------- | -------- |
| 101       | Chess    |
| 101       | Painting |

## Fifth Normal Form (5NF) / Project-Join Normal Form (PJNF)

A relation is in 5NF if:

1. It is already in 4NF.
2. It has no join dependency (JD), except when implied by candidate keys.

**Join Dependency:**

- A table can be losslessly decomposed into smaller tables and then reconstructed using joins.
- If such decomposition is necessary to remove redundancy, the table is not in 5NF.

### Example: Table NOT in 5NF

| Supplier | Part | Project |
| -------- | ---- | ------- |
| S1       | P1   | J1      |
| S1       | P2   | J1      |
| S1       | P1   | J2      |
| S1       | P2   | J2      |

**Dependencies:**

- Supplier supplies Parts.
- Supplier works on Projects.
- Parts are used in Projects.

**Problem:**

All three facts are independent, but stored together, leading to redundancy.

### Conversion to 5NF

Decompose into three smaller relations:

`SupplierPart`

| Supplier | Part |
| -------- | ---- |
| S1       | P1   |
| S1       | P2   |

`SupplierProject`

| Supplier | Part |
| -------- | ---- |
| S1       | P1   |
| S1       | P2   |

`PartProject`

| Part | Project |
| ---- | ------- |
| P1   | J1      |
| P1   | J2      |
| P2   | J1      |
| P2   | J2      |

- When joined, we reconstruct the original table.
- Redundancy is removed.

## Sixth Normal Form (6NF)

- A relation is in 6NF if:
  1.  It is already in 5NF.
  2.  It has no non-trivial join dependencies at all.
- 6NF is used in temporal databases (where data changes with time).
- Goal: Break tables down into the smallest possible structures (each fact stored in its own table).

### Example: Temporal Database (Not in 6NF)

| Employee | Department | StartDate  | EndDate    |
| -------- | ---------- | ---------- | ---------- |
| E1       | HR         | 2020-01-01 | 2021-01-01 |
| E1       | Finance    | 2021-01-02 | 2022-01-01 |

**Problem:**

Both Department and employment period are stored in the same table → mixing multiple time-dependent facts.

### Conversion to 6NF

Split into multiple tables, each capturing a single time-dependent fact:

`EmployeeDepartment`

| Employee | Department | StartDate  | EndDate    |
| -------- | ---------- | ---------- | ---------- |
| E1       | HR         | 2020-01-01 | 2021-01-01 |
| E1       | Finance    | 2021-01-02 | 2022-01-01 |

`EmployeeContract`

| Employee | StartDate  | EndDate    |
| -------- | ---------- | ---------- |
| E1       | 2020-01-01 | 2022-01-01 |

This allows better handling of historical (temporal) data.

## Summary of Normalization

| Normal Form | Removes                              | Example Problem                            |
| ----------- | ------------------------------------ | ------------------------------------------ |
| **1NF**     | Repeating groups / non-atomic values | Multiple subjects in one cell              |
| **2NF**     | Partial dependency                   | Non-prime depends on part of composite key |
| **3NF**     | Transitive dependency                | DeptName depends on DeptID, not EmpID      |
| **BCNF**    | FD where determinant not a superkey  | Room → Instructor                          |
| **4NF**     | Multi-valued dependency              | Student has multiple Hobbies and Languages |
| **5NF**     | Join dependency                      | Supplier-Part-Project redundancy           |
| **6NF**     | Temporal / trivial join dependency   | Time-dependent data                        |

# Denormalization

- Denormalization is the process of intentionally introducing redundancy into a database by combining tables or adding derived data.
- It’s the opposite of normalization.
- The goal is not to “break the rules” but to improve performance in real-world applications.

In short:

- Normalization = Optimize for consistency & integrity.
- Denormalization = Optimize for query performance (sometimes at the cost of redundancy).

## Why Do We Denormalize?

Fully normalized databases are great for data integrity, but they have some problems in practice:

1. Performance Issues
   - In normalized design, retrieving data often requires many joins.
   - Joins are expensive for large datasets.
2. Reporting and Analytics
   - Applications like dashboards, reports, or data warehouses need fast aggregation, not complex joins.
3. Read-Heavy Workloads
   - If the database is mostly used for reads (not writes), denormalization makes sense.
4. Caching Frequently Used Data
   - Instead of computing results repeatedly (like totals or counts), we may store them directly.

## When to Use Denormalization

You should consider denormalization when:

- You need faster queries (fewer joins).
- You have a read-heavy system (e.g., reporting, dashboards).
- The system can tolerate some redundancy.
- You want to precompute aggregates (e.g., order totals).
- You are designing a data warehouse (star schema, OLAP).

**Avoid denormalization if:**

- Your system is write-heavy (because updates become harder).
- Data consistency is critical and anomalies cannot be tolerated.

## Example of Denormalization

Normalized Design (3NF)

`Customer`
| CustomerID | Name | City |
| ---------- | ----- | ---------- |
| 1 | Alice | Dhaka |
| 2 | Bob | Chittagong |
`Order`
| OrderID | CustomerID | OrderDate |
| ------- | ---------- | ---------- |
| 101 | 1 | 2023-01-01 |
| 102 | 2 | 2023-01-05 |

To get Order with Customer Name & City, we must join:

```sql
SELECT o.OrderID, o.OrderDate, c.Name, c.City
FROM Order o
JOIN Customer c ON o.CustomerID = c.CustomerID;
```

### Denormalized Design

We combine Order and Customer into one table:

| OrderID | CustomerID | Name  | City       | OrderDate  |
| ------- | ---------- | ----- | ---------- | ---------- |
| 101     | 1          | Alice | Dhaka      | 2023-01-01 |
| 102     | 2          | Bob   | Chittagong | 2023-01-05 |

## Types of Denormalization

1. Combining Tables
   - Merging related tables into one (as in Customer + Order).
2. Adding Redundant Columns
   - E.g., Store `CustomerName` directly in Order table.
3. Precomputing Derived Data
   - E.g., Store `OrderTotal` in the `Order` table instead of calculating it from `OrderDetails` every time.
4. Duplicating Tables
   Create summary tables for reporting (like monthly sales).
5. Star Schema / Snowflake Schema (in Data Warehouses)
   - Fact table (sales) + dimension tables (customer, product, time).

## Normalization vs Denormalization

| Aspect   | Normalization                                      | Denormalization                         |
| -------- | -------------------------------------------------- | --------------------------------------- |
| Goal     | Reduce redundancy, improve integrity               | Improve performance, reduce joins       |
| Pros     | Consistent data, avoids anomalies                  | Faster queries, better for reporting    |
| Cons     | Slow queries (many joins), not optimized for reads | Redundancy, anomalies possible          |
| Best Use | OLTP (transactional systems)                       | OLAP (reporting, analytics, warehouses) |

# Partitioning

Partitioning = dividing a large table (or index) into smaller, manageable pieces (partitions), while still treating it as one logical table in SQL.

- The database engine automatically decides which partition to read/write based on rules.
- Helps with query performance, parallelism, and maintenance.

## Types of Partitioning

### Horizontal Partitioning (Row-based)

- Rows are divided into subsets based on a condition.
- Each partition contains different rows of the same schema.
- Example: Partitioning `Orders` table by year → `Orders_2023`, `Orders_2024`.

### Vertical Partitioning (Column-based)

- Table is split by columns.
- Frequently used columns stored in one partition, rarely used in another.
- Example: Split Employee into:
  - `EmployeeBasic(EmpID, Name, DeptID)`
  - `EmployeeDetails(EmpID, Address, Photo, ResumeBlob).`

### Range Partitioning

- Rows divided based on ranges of values.
- Example: Partition `Sales` by `SaleDate`:
  - Partition1 → Jan–Mar
  - Partition2 → Apr–Jun, etc.

### List Partitioning

- Rows divided based on discrete values.
- Example: Partition employees by `Region`: Asia, Europe, America.

### Hash Partitioning

- Rows assigned to partitions based on a hash function of a column.
- Example: `MOD(CustomerID, 4)` distributes rows into 4 partitions.

## Example of Partitioning

Table: Transaction(TxnID, AccountNo, TxnDate, Amount)
Partition by year:

- Transactions_2023
- Transactions_2024
- Transactions_2025

**Benefits:**

- Query like `WHERE TxnDate BETWEEN '2025-01-01' AND '2025-08-27'` only scans relevant partitions.
- Improves performance + allows old partitions to be archived.

# Sharding?

👉 Sharding = a form of horizontal partitioning across multiple servers (databases).

- While partitioning usually happens inside a single database server,
- Sharding distributes the data across multiple servers (shards).

**Key Difference:**

- Partitioning = within one database.
- Sharding = across multiple databases/servers.

## Sharding Strategies

### Range-based Sharding

- Each shard stores a specific range of values.
- Example:
  - Shard 1 → `CustomerID 1–10000`
  - Shard 2 → `CustomerID 10001–20000`.

### Hash-based Sharding

- Use a hash function to decide which shard stores the row.
- Example: `MOD(CustomerID, 4)` → distribute across 4 shards.

### Geographic Sharding

- Shard data based on geography.
- Example: EU users stored in European servers, US users in US servers.

## Example of Sharding

Imagine an E-commerce platform with millions of users:

- User Table (UserID, Name, Email, Region)

Sharding by region:

- Shard 1 → Users in North America.
- Shard 2 → Users in Europe.
- Shard 3 → Users in Asia.

Benefits:

- Load distributed across servers.
- Queries run only on the relevant shard.
- Better scalability and fault isolation.

## Partitioning vs Sharding

| Feature      | Partitioning                    | Sharding                             |
| ------------ | ------------------------------- | ------------------------------------ |
| Scope        | Within one database server      | Across multiple servers/databases    |
| Transparency | Database engine handles it      | Application or middleware handles it |
| Purpose      | Query optimization, maintenance | Scalability, distributing workload   |
| Example      | Splitting `Orders` by year      | Splitting `Users` across regions     |

## Performance Considerations

### Advantages

**Partitioning:**

- Faster queries (only relevant partition scanned).
- Easier archiving & maintenance.
- Enables parallel query execution.
  **Sharding:**
- Massive scalability (data spread across servers).
- High availability (failure in one shard doesn’t kill the whole system).
- Distributes write-heavy workloads.

### Disadvantages

**Partitioning:**

- Still limited by a single server’s hardware.
- Complex queries spanning many partitions may be slower.
  **Sharding:**
- More complex application logic (need to know which shard to query).
- Rebalancing shards is difficult.
- Joins across shards are hard.

# Storage Considerations

When we talk about storage, we mean how data is physically stored on disk (or SSD, memory). This includes:

- How tables and indexes are organized on disk.
- How much space they use.
- How efficiently data is read/written during queries.

## Key Storage Considerations

### Data Types and Storage Size

- Choosing the right data type affects storage.
- Example:
  - INT (4 bytes) vs BIGINT (8 bytes).
  - If you only need values up to 1M, INT is enough.
- Storing unnecessarily large types wastes space and slows I/O.

### Row Storage Format

- Fixed-length storage:
  - Faster to access (rows are predictable size).
  - But wastes space if values are small.
  - Example: CHAR(50) always takes 50 bytes.
- Variable-length storage:
  - Saves space (only stores needed bytes).
  - Slightly slower (extra lookup).
  - Example: VARCHAR(50) only stores actual characters + length info.

### Normalization vs Denormalization

- Normalized tables: reduce redundancy, save storage space, but may require joins (extra reads).
- Denormalized tables: may increase storage (duplication), but speed up queries.
- Trade-off depends on workload (OLTP vs OLAP).

### Index Storage

- Every index takes extra disk space.
- Example:
  - A table of 10M rows, indexed on 3 columns, might double storage needs.
- Indexes speed up queries but slow down inserts/updates.

### Null and Sparse Data

- Columns with many NULL values should be carefully stored.
- Some DBMS support sparse columns (store only non-null values).
- Example: Employee table with 100 optional attributes → better to split into separate tables.

### LOB (Large Objects) Storage

- Images, PDFs, audio, video = BLOBs (Binary Large Objects).
- Text documents = CLOBs (Character Large Objects).
- Options for storage:
  1.  Inside the database (slower queries, but consistent backups).
  2.  Outside the database (filesystem or cloud), with just a reference in DB (faster, smaller DB).

### Partitioning & Tablespaces

- Partitioning (split data into smaller parts) improves manageability + query speed.
- Tablespaces allow storing different tables/indexes on different physical disks → balance I/O load.

### Compression

- Many DBMS support table and index compression.
- Reduces disk usage and I/O, but may increase CPU load.
- Example:
  - Compressing a log table with millions of rows that are rarely updated.

### Caching & Buffer Pools

- Databases use memory caches to reduce disk reads.
- Storage design should optimize which data fits in cache (e.g., hot vs cold data).

# ACID Properties of Transactions

A transaction in a database is a single logical unit of work that can consist of one or multiple SQL operations (like `INSERT`, `UPDATE`, `DELETE`, `SELECT`). Transactions are crucial because they ensure data consistency and reliability, even in cases of system failures or concurrent access.

The ACID acronym describes the key properties every reliable transaction must satisfy:

## 1. Atomicity (All or Nothing)

- Definition: A transaction must execute completely or not at all.
- If any operation in the transaction fails, the entire transaction is rolled back.
- Prevents partial updates that could corrupt data.

**Example:**

```sql
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 500 WHERE account_id = 1;  -- Withdraw from A
UPDATE accounts SET balance = balance + 500 WHERE account_id = 2;  -- Deposit to B

COMMIT;
```

If the first update succeeds but the second fails (e.g., due to a crash), Atomicity ensures the whole transaction is rolled back, so account A is not debited without B being credited.

## 2. Consistency

- Definition: A transaction should bring the database from one valid state to another valid state, preserving all defined rules, constraints, and relationships.
- Ensures that data integrity constraints (like foreign keys, unique constraints) are not violated.

**Example:**

- If a transfer transaction tries to move money from account A (balance = 500) to B, and A doesn’t have enough funds:

```sql
-- Withdraw 600 from A (only 500 available)
```

Consistency rules prevent A’s balance from becoming -100 if negative balances are not allowed.

## 3. Isolation

- Definition: Transactions should execute independently without interference, even when run concurrently.
- Prevents problems like dirty reads, non-repeatable reads, and phantom reads.

**Example:**

Two users perform operations simultaneously:

- Transaction 1: Withdraws money from account A.
- Transaction 2: Reads account A’s balance.

Depending on the isolation level (`READ COMMITTED`, `REPEATABLE READ`, `SERIALIZABLE`), Transaction 2 may or may not see uncommitted changes.
For strong isolation, Transaction 2 only sees committed balances.

## 4. Durability

- Definition: Once a transaction is committed, its changes are permanent, even if the system crashes afterward.
- Achieved by writing to persistent storage (transaction logs, database files).

**Example:**

If you successfully transfer money and the system crashes right after `COMMIT`, the transaction log ensures that the change is still preserved when the system restarts.

# Integrity

Integrity ensures that the data stored in a database is accurate, consistent, and reliable.

There are several types of integrity constraints:

## 1. Entity Integrity

- Every table must have a primary key that uniquely identifies each row.
- The primary key cannot be `NULL`.

**Example:**

```sql
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT
);
```

Ensures that each student record has a unique and non-null ID.

## 2. Referential Integrity

- Foreign keys must correctly reference primary keys in related tables.
- Prevents invalid references.

**Example:**

```sql
CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100)
);

CREATE TABLE Enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);
```

You cannot enroll a student in a course that does not exist.

## 3. Domain Integrity

- Ensures that attributes (columns) have valid values based on data type, constraints, and rules.

**Example:**

```sql
CREATE TABLE Employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT CHECK (age >= 18),  -- Age must be at least 18
    salary DECIMAL(10,2) CHECK (salary > 0) -- Salary must be positive
);
```

Prevents invalid data like negative salary or underage employees.

## 4. User-Defined Integrity

- Business-specific rules that are not covered by the above categories.
- Implemented using CHECK constraints, triggers, or stored procedures.

**Example:**

```sql
ALTER TABLE Accounts
ADD CONSTRAINT chk_min_balance CHECK (balance >= 1000);
```

Ensures that every account maintains at least a 1000-unit minimum balance.

## Putting It All Together

- ACID properties → Focus on transaction reliability.
- Integrity constraints → Focus on data correctness at the design level.

Example: Suppose we’re designing a Banking System:

- Integrity constraints ensure that:
  - Every account has a unique ID (entity integrity).
  - Transfers reference valid accounts (referential integrity).
  - Balances can’t be negative (domain integrity).
- ACID ensures that:
  - Transfers complete fully or not at all (atomicity).
  - The total sum of balances remains consistent (consistency).
  - Multiple transfers don’t interfere (isolation).
  - Once committed, transfers are permanent (durability).

# Referential Integrity

Referential Integrity ensures that relationships between tables remain consistent and valid.

It is enforced mainly through foreign keys (FKs):

- A foreign key in one table must reference a valid, existing primary key (PK) in another table.
- You cannot have “orphan” records (child rows pointing to non-existent parent rows).
- You cannot delete/update a parent row if child rows still reference it — unless you explicitly define cascade actions.

```sql
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE Enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    course_code VARCHAR(10),
    FOREIGN KEY (student_id) REFERENCES Students(student_id)
);
```

- `Enrollments.student_id is` a foreign key referencing `Students.student_id`.
- You cannot insert an enrollment record for a student who doesn’t exist.

**Invalid insert (violates referential integrity):**

```sql
INSERT INTO Enrollments (enrollment_id, student_id, course_code)
VALUES (1, 999, 'CS101'); -- ❌ student_id 999 doesn’t exist
```

**Valid insert:**

```sql
INSERT INTO Students VALUES (101, 'Alice');
INSERT INTO Enrollments VALUES (1, 101, 'CS101'); -- ✅ works fine
```

## Referential Integrity in Transactions

Now, let’s connect this with transactions (runtime operations).

When transactions insert, update, or delete rows, referential integrity must still hold true at the end of the transaction (Consistency property of ACID).

```sql
CREATE TABLE Accounts (
    account_id INT PRIMARY KEY,
    customer_id INT,
    balance DECIMAL(10,2)
);

CREATE TABLE Transactions (
    txn_id INT PRIMARY KEY,
    account_id INT,
    amount DECIMAL(10,2),
    FOREIGN KEY (account_id) REFERENCES Accounts(account_id)
);
```

### Case 1: Insert Transaction with Referential Integrity

```sql
BEGIN TRANSACTION;

INSERT INTO Transactions VALUES (2001, 999, 500.00);  -- ❌ fails
-- because account_id 999 does not exist in Accounts

COMMIT;
```

The transaction fails entirely because referential integrity is violated. This protects the database from “dangling” transactions that point to non-existent accounts.

### Case 2: Delete Transaction with Referential Integrity

If you try:

```sql
DELETE FROM Accounts WHERE account_id = 101;
```

- If Transactions table already has entries referencing account_id = 101, the deletion will be blocked.
- To allow it, you must define actions:

```sql
FOREIGN KEY (account_id) REFERENCES Accounts(account_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
```

- **ON DELETE CASCADE** → deleting an account will also delete its related transactions.
- **ON UPDATE CASCADE** → if account_id changes, related transactions update automatically.

## Why Referential Integrity Matters

- Prevents data anomalies (like enrollments for non-existent students or transactions for deleted accounts).
- Works with ACID transactions to ensure the Consistency property.
- Without referential integrity, applications must manually check validity, which is error-prone.

# Cascading

When we design relational databases with foreign keys, we can define what happens to child records when the parent record is updated or deleted.

This is done using:

- **ON DELETE CASCADE** → If a parent row is deleted, all child rows that reference it are also deleted automatically.
- **ON UPDATE CASCADE** → If a parent key changes (usually the primary key), all child foreign key references are updated automatically.

Other options exist too (like `SET NULL`, `SET DEFAULT`, `RESTRICT`, `NO ACTION`), but we’ll focus on CASCADE.

```sql
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE Enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    course_code VARCHAR(10),
    FOREIGN KEY (student_id) REFERENCES Students(student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
```

## Cascading Deletes (Integrity + Transactions)

If a student is deleted, all their enrollment records should also be removed to avoid “orphan” rows.

Example:

```sql
INSERT INTO Students VALUES (101, 'Alice'), (102, 'Bob');
INSERT INTO Enrollments VALUES (1, 101, 'CS101'), (2, 101, 'MATH201'), (3, 102, 'CS101');
```

Now delete Alice:

```sql
BEGIN TRANSACTION;
DELETE FROM Students WHERE student_id = 101;
COMMIT;
```

Because of ON `DELETE CASCADE`:

- Alice (student_id = 101) is deleted from `Students`.
- Her enrollments (1, 2) are automatically deleted from `Enrollments`.
- Bob’s enrollment (3) remains unaffected.

This prevents dangling enrollments for a student who doesn’t exist.

## Cascading Updates (Integrity + Transactions)

If the primary key of a parent row changes, the foreign key references in child rows are updated automatically.

Example:

```sql
BEGIN TRANSACTION;
UPDATE Students
SET student_id = 201
WHERE student_id = 102;
COMMIT;
```

Because of `ON UPDATE CASCADE`:

- Student ID `102` changes to `201` in `Students`.
- In `Enrollments`, the row `(3, 102, 'CS101')` is automatically updated to `(3, 201, 'CS101')`.

Ensures child rows stay consistent with parent rows.

## Cascading and ACID Transactions

Now let’s connect this with transactions:

- **Atomicity:** If the parent delete/update fails, the cascaded changes are rolled back too.
- **Consistency:** Referential integrity is preserved because no child is left orphaned.
- **Isolation:** If two users modify the same parent, cascades won’t conflict (depending on isolation level).
- **Durability:** Once committed, all cascaded changes are permanent.

## Why Cascading is Useful

- Prevents orphan records automatically.
- Reduces the need for manual cleanup logic in application code.
- Keeps relationships consistent across multiple tables.

# Transaction Management

A transaction is a sequence of one or more SQL operations (INSERT, UPDATE, DELETE, SELECT) that form a single logical unit of work.

The goal of transaction management:

- Ensure ACID properties (Atomicity, Consistency, Isolation, Durability).
- Handle failures (crashes, power loss, errors).
- Ensure data integrity across multiple operations.

Suppose we want to transfer $500 from Alice’s account to Bob’s account.

```sql
BEGIN TRANSACTION;

UPDATE Accounts SET balance = balance - 500 WHERE account_id = 1; -- Alice
UPDATE Accounts SET balance = balance + 500 WHERE account_id = 2; -- Bob

COMMIT;
```

- If both statements succeed → transaction is committed (durable).
- If one statement fails (e.g., crash after debit but before credit) → transaction is rolled back (atomic).
- Constraints like “balance ≥ 0” enforce consistency.

## Concurrency Control

When multiple transactions run at the same time, problems can occur if they interact with the same data.
Concurrency control ensures that isolation is preserved without sacrificing too much performance.

### Problems Without Concurrency Control

1. **Dirty Read** – Reading uncommitted changes of another transaction.
   Example: T1 updates Alice’s balance but hasn’t committed; T2 reads it → later T1 rolls back → T2 read invalid data.

2. **Non-Repeatable Read** – Reading the same row twice gives different results because another transaction updated it in between.

3. **Phantom Read** – A transaction re-executes a query and sees new rows inserted by another transaction.

### Solutions (Concurrency Control Mechanisms)

1. Locking (Pessimistic Concurrency Control)
   - Shared Lock (S-lock): For reading. Multiple readers allowed, but no writers.
   - Exclusive Lock (X-lock): For writing. Only one transaction can hold it.

Example:

```sql
BEGIN TRANSACTION;
SELECT balance FROM Accounts WHERE account_id = 1 FOR UPDATE;
-- prevents others from reading/writing until commit/rollback
```

2. Timestamp Ordering (Optimistic Concurrency Control)

   - Transactions get timestamps; older ones get priority.
   - Detects conflicts at commit time.

3. Multiversion Concurrency Control (MVCC) (used in PostgreSQL, Oracle, etc.)
   - Readers see a snapshot of the database at the start of their transaction.
   - Writers create new versions instead of blocking readers.
   - Prevents dirty reads and non-repeatable reads without heavy locking.

## Relation to Integrity in Database Design

- Entity integrity (PKs), Referential integrity (FKs), Domain integrity (constraints) work at the schema level.
- Transaction management & concurrency control ensure that these rules aren’t violated at runtime.

**Example:**

- Referential integrity: Cannot delete a customer if orders exist (unless CASCADE).
- If two transactions simultaneously try to delete and insert related records, locks/MVCC ensure the database remains consistent.

# Databse Security

## User Roles and Privileges

**User**

- An individual or application connecting to the database.
- Identified by a username (and usually a password).

**Privileges (Permissions)**

- Specific rights to perform actions on database objects.
- Examples:
  - System Privileges → `CREATE TABLE`, `CREATE USER`, `SHUTDOWN` (affect the whole DB).
  - Object Privileges → `SELECT`, `INSERT`, `UPDATE`, `DELETE` (affect specific tables, views, procedures).

**Roles**

- A role is a collection of privileges.
- Makes privilege management easier (instead of assigning many privileges to each user).
- Users are granted roles, and roles contain privileges.

## Why Roles and Privileges Matter in Database Design

- Security → Protect sensitive data from unauthorized access.
- Integrity → Ensure only authorized users can change data (e.g., only HR can update salaries).
- Accountability → Track who did what.
- Least Privilege Principle → Users should only get the minimum permissions required to perform their tasks.

### Example of User Role

Let’s imagine a University Database with three types of users:

- Admin → Full control.
- Professor → Can view and update grades.
- Student → Can only view their own courses/grades.

Step 1: Create Users

```sql
-- Create three users
CREATE USER admin_user IDENTIFIED BY 'adminpass';
CREATE USER professor_user IDENTIFIED BY 'profpass';
CREATE USER student_user IDENTIFIED BY 'studentpass';
```

Step 2: Create Roles

```sql
-- Create roles
CREATE ROLE admin_role;
CREATE ROLE professor_role;
CREATE ROLE student_role;
```

Step 3: Assign Privileges to Roles

```sql
-- Admin can do everything
GRANT ALL PRIVILEGES TO admin_role;

-- Professors can SELECT and UPDATE grades table
GRANT SELECT, UPDATE ON Grades TO professor_role;

-- Students can only SELECT (read-only access)
GRANT SELECT ON Grades TO student_role;
```

Step 4: Assign Roles to Users

```sql
-- Assign roles to specific users
GRANT admin_role TO admin_user;
GRANT professor_role TO professor_user;
GRANT student_role TO student_user;
```

Step 5: Usage Example

- If professor_user logs in and tries:

```sql
UPDATE Grades SET score = 90 WHERE student_id = 101 AND course_id = 'CS101';
```

Allowed (since professor has UPDATE privilege).

- If student_user tries:

```sql
UPDATE Grades SET score = 100 WHERE student_id = 101;
```

Fails (student only has SELECT privilege).

- If student_user runs:

```sql
SELECT * FROM Grades WHERE student_id = 101;
```

Allowed (read-only access).

### Advanced Security Features

1. Column-Level Privileges

   - Limit access to specific columns.

   ```sql
   GRANT SELECT (student_id, course_id) ON Grades TO student_role;
   ```

2. Views for Security

   - Instead of giving direct access, create views.

   ```sql
   CREATE VIEW student_view AS
   SELECT student_id, course_id, score
   FROM Grades
   WHERE student_id = SYS_CONTEXT('USERENV','SESSION_USER');
   GRANT SELECT ON student_view TO student_role;
   ```

   Each student only sees their own grades.

3. Revoking Privileges
   - If a user should no longer access data:

   ```sql
   REVOKE UPDATE ON Grades FROM professor_role;
   ```
## Data Encryption
Encryption = the process of converting plain text (readable data) into cipher text (unreadable format) using an encryption algorithm and key.

Decryption = converting ciphertext back into plaintext with the correct key.

The purpose: even if unauthorized users access the database or backups, they cannot read sensitive data without the decryption key.

### Types of Encryption in Databases
1. Encryption at Rest
   - Protects stored data (disk files, backups, logs).
   - If someone steals the physical storage, data remains unreadable.
   - Example: Transparent Data Encryption (TDE) in Oracle, SQL Server, PostgreSQL.
2. Encryption in Transit
   - Protects data moving between client ↔ database server over the network.
   - Uses protocols like TLS/SSL.
3. Column-Level or Field-Level Encryption
   - Encrypts specific sensitive columns in tables (e.g., passwords, credit card numbers).
   - Provides fine-grained protection but may impact performance.
4. Application-Level Encryption
   - Application encrypts data before inserting into DB and decrypts after fetching.
   - Database only stores ciphertext.

### Example of Column-Level Encryption
Suppose we design a Banking Database where `credit_card_number` must be encrypted.
```sql
CREATE TABLE Customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100),
    credit_card_number VARBINARY(256) -- store as encrypted
);
```
**Insert with Encryption:**
```sql
-- Create a symmetric key
CREATE SYMMETRIC KEY CreditCardKey  
WITH ALGORITHM = AES_256  
ENCRYPTION BY PASSWORD = 'StrongPassword123';

-- Open the key
OPEN SYMMETRIC KEY CreditCardKey  
DECRYPTION BY PASSWORD = 'StrongPassword123';

-- Insert encrypted value
INSERT INTO Customers (customer_id, name, credit_card_number)  
VALUES (1, 'Alice', EncryptByKey(Key_GUID('CreditCardKey'), '4111111111111111'));
```
The card number is stored in the database as ciphertext, not plain text.

**Decrypt when Reading:**
```SQL
-- Decrypt the credit card number
SELECT name,  
       CONVERT(VARCHAR, DecryptByKey(credit_card_number)) AS credit_card_number
FROM Customers;
```
Only users with the right key/password can view the real number.

## SQL Injection
SQL Injection (SQLi) happens when untrusted input is concatenated directly into an SQL query, allowing attackers to manipulate the query.

Example of a vulnerable query (string concatenation):

```sql
-- Suppose 'username' and 'password' come directly from user input
SELECT * FROM Users 
WHERE username = ' " + user_input + " ' 
AND password = ' " + pass_input + " ';
```
If an attacker enters:

- `username = 'admin'`
- `password = "' OR '1'='1"`

The query becomes:
```sql
SELECT * FROM Users 
WHERE username = 'admin' 
AND password = '' OR '1'='1';
```
- `'1'='1'` is always true, so the attacker logs in without a valid password.
### SQL Injection Prevention at Database Design Level

When designing a secure database system, you don’t just rely on the application — you enforce controls at multiple layers:
#### Use Parameterized Queries / Prepared Statements

- Instead of embedding input directly into SQL, use placeholders (`?` or `:param`).
- DB engine treats inputs as data, not executable SQL.

Example in Python (safe with placeholders):
```sql
cursor.execute(
    "SELECT * FROM Users WHERE username = %s AND password = %s",
    (username, password)
)
```
Here, even if `password = "' OR '1'='1"`, it is treated as a string, not SQL code.
#### Stored Procedures with Parameters

Encapsulate queries in stored procedures, and only allow execution via defined parameters.
```sql
CREATE PROCEDURE AuthenticateUser (@username NVARCHAR(50), @password NVARCHAR(50))
AS
BEGIN
    SELECT * FROM Users 
    WHERE username = @username AND password = @password;
END;
```

Prevents direct manipulation of SQL strings.
#### Use the Principle of Least Privilege

- Application accounts should have only the privileges they need.
- Example:
   - The web app should only SELECT/INSERT into Users.
   - It should NOT have DROP TABLE, ALTER, or GRANT privileges.

```sql
GRANT SELECT, INSERT, UPDATE ON Users TO app_user;
```

Even if SQL injection happens, the attacker’s damage is limited.
#### Input Validation & Constraints at Schema Level

- Use CHECK constraints, data types, NOT NULL, foreign keys to enforce valid inputs.
- Example:
```sql
CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash CHAR(64) NOT NULL,
    email VARCHAR(100) CHECK (email LIKE '%@%')
);
```

Even if injected input reaches DB, invalid formats get rejected.
#### Use Views for Restricted Access

- Instead of exposing sensitive tables directly, create views with limited columns.
- Example:
```
CREATE VIEW SafeUsers AS
SELECT user_id, username, email
FROM Users;
GRANT SELECT ON SafeUsers TO app_user;
```

Prevents SQL injection from exposing sensitive fields (like password hashes).

# Question

1. why use database instead of excel
