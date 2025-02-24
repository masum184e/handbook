# Content

- [UML](#uml)
- [Generalization](#generalization)
- [Association vs. Aggregation vs. Composition](#association-vs-aggregation-vs-composition)
- [Coupling](#coupling)
- [Cohesion](#cohesion)

# UML

Unified Modeling Language (UML) is a standardized visual language used to model the structure and behavior of software systems.

- [Structural Diagram](#structural-diagram)
  - [Class Diagram](#class-diagram)
  - Component Diagram
  - Composite Structure Diagram
  - Deployment Diagram
  - Package Diagram
  - [Object Diagram](#object-diagram)
  - Profile Diagram
- [Behavioural Diagram](#behavioral-diagrams)
  - [Activity Diagram](#activity-diagram)
  - State Machine Diagram
  - Interaction Diagram
    - Communication Diagram
    - [Sequence Diagram](#sequence-diagram)
    - Interaction Overview Diagram
    - Timing Diagram
  - [Use Case Diagram](#use-case-diagram)

## Structural Diagram

Structure Diagrams focus on the static aspects of the system, specifically how the system is organized and how its components interact with each other. They define the physical structure of the system, including the arrangement of classes, objects, and packages.

### Class Diagram

It describe the structure of a system by showing its classes, attributes, methods, and the relationships between them.

#### Components

- **Class:** The basic building block of a class diagram, representing a blueprint of an object in the system. A class is typically depicted as a rectangle divided into three sections:
  - **Class Name:** The top section contains the class name, usually written in bold.
  - **Attributes:** The middle section lists the data members or properties of the class.
  - **Methods:** The bottom section lists the functions or operations that the class can perform.
- **Attributes:** The data stored within a class (also known as fields or properties). Attributes have types (e.g., String, Integer) and can have visibility modifiers:
  - Public (`+`): Can be accessed from outside the class.
  - Private (`-`): Can only be accessed within the class.
  - Protected (`#`): Can be accessed within the class and its subclasses.
- **Methods:** The operations or functions a class can perform. Like attributes, methods can also have visibility modifiers. Methods define the behavior of the class and typically manipulate its attributes.
- **Relationships between Classes:**
  - **Association:** A general relationship between two classes. It can be unidirectional or bidirectional(A `Member` can borrow multiple `Book`, and a `Book` can be borrowed by multiple `Member` (over time)). It is represented by a line between the classes followed by an arrow that navigates the direction, and when the arrow is on both sides, it is then called a bidirectional association. We can specify the multiplicity of an association by adding the adornments on the line that will denote the association.
  - **Multiplicity:** Defines how many instances of one class can be associated with instances of another class (e.g., 1..\*, 0..1).
  - **Inheritance (Generalization):** A "is-a" relationship where a subclass inherits from a parent class(`Member` and `Librarian` classes can inherit from a common base class called `Person` since both share attributes like name, contact information, etc).
  - **Aggregation:** A "has-a" relationship where one class is composed of another class but can exist independently.(`Library` "has" multiple `Section`.) It is represented by a straight line with an empty diamond at one end.
  - **Composition:** A stronger form of aggregation where the contained class cannot exist independently(The `Library` consists of `Book`. If the library is closed or removed, the books associated with it are also gone, so this is a strong composition relationship. The library is responsible for maintaining the collection of books). It is represented by a straight line with a black diamond at one end.
  - **Dependency:** A weaker relationship indicating that one class depends on another, but only temporarily(A `Member` depends on `BorrowTransaction` to borrow or return books. )

| **Association**                                                                                                 | **Aggregation**                                                                                                                                 | **Composition**                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Association relationship is represented using an arrow.                                                         | Aggregation relationship is represented by a straight line with an empty diamond at one end.                                                    | The composition relationship is represented by a straight line with a black diamond at one end.                                                                     |
| In UML, it can exist between two or more classes.                                                               | It is a part of the association relationship.                                                                                                   | It is a part of the aggregation relationship.                                                                                                                       |
| It incorporates one-to-one, one-to-many, many-to-one, and many-to-many association between the classes.         | It exhibits a kind of weak relationship.                                                                                                        | It exhibits a strong type of relationship.                                                                                                                          |
| It can associate one more objects together.                                                                     | In an aggregation relationship, the associated objects exist independently within the scope of the system.                                      | In a composition relationship, the associated objects cannot exist independently within the scope of the system.                                                    |
| In this, objects are linked together.                                                                           | In this, the linked objects are independent of each other.                                                                                      | Here the linked objects are dependent on each other.                                                                                                                |
| It may or may not affect the other associated element if one element is deleted.                                | Deleting one element in the aggregation relationship does not affect other associated elements.                                                 | It affects the other element if one of its associated element is deleted.                                                                                           |
| **Example**: A tutor can associate with multiple students, or one student can associate with multiple teachers. | **Example**: A car needs a wheel for its proper functioning, but it may not require the same wheel. It may function with another wheel as well. | **Example**: If a file is placed in a folder and that folder is deleted, the file residing inside that folder will also get deleted at the time of folder deletion. |

#### Example

**Example:**

```
+-----------------+       +------------------+
|    Library      |       |    LibraryMember  |
+-----------------+       +------------------+
| name            |       | name             |
| address         |       | membershipId     |
+-----------------+       +------------------+
| addBook()       |       | borrowBook()     |
| removeBook()    |       | returnBook()     |
+-----------------+       +------------------+
        |                         |
        +-------------------------+
                Association (Library contains LibraryMembers)
```

**Example:**

```
+------------------+    1    +------------------+
|    Library       |<--------|    Section        |
+------------------+         +------------------+
| - name: String   |         | - sectionName: String |
+------------------+         +------------------+
| + addBook()      |         | + listBooks()        |
| + removeBook()   |         +------------------+
+------------------+
      |  *
      |
      |  *
+------------------+        *      +------------------+
|    Book          |<----------------|    BorrowTransaction |
+------------------+                 +------------------+
| - title: String  |                 | - transactionId: String |
| - author: String |                 | - issueDate: Date   |
| - ISBN: String   |                 | - returnDate: Date  |
+------------------+                 +------------------+
| + getDetails()   |                 | + issueBook()      |
+------------------+                 | + returnBook()     |
                                     +------------------+
                                           |
                                           | 1..*
                                           |
+------------------+      *              +------------------+
|    Person        |<---------------------|    Member        |
+------------------+                      +------------------+
| - name: String   |                      | - memberId: String|
| - address: String|                      +------------------+
+------------------+                      | + borrowBook()    |
| + getDetails()    |                     | + returnBook()    |
+------------------+                      +------------------+
                                           |
                                           | 1
                                           |
                                  +------------------+
                                  |   Librarian       |
                                  +------------------+
                                  | - employeeId: String|
                                  +------------------+
                                  | + manageBooks()    |
                                  +------------------+
```

### Object Diagram

It shows a snapshot of the objects at a particular point in time, their states, and their relationships. Similar to class diagrams, but shows actual instances (objects) rather than class definitions.

**Syntax:**

```
+------------------------+
| objectName : ClassName |
+------------------------+
|   attributes = value   |
+------------------------+
```

**Example:**

```
+-----------------+           +------------------+
|    Library1     |           |  Member1: John    |
+-----------------+           +------------------+
| name: CityLib   |           | name: John Doe    |
| address: City A |           | membershipId: 123 |
+-----------------+           +------------------+
                Library1 has Member1 (object relationship)
```

## Behavioral Diagrams

Behavior Diagrams are used to model the dynamic aspects of a system—essentially, how the system behaves over time. They represent interactions, activities, and the flow of information or control within the system. These diagrams are particularly helpful for understanding what actions the system or its objects perform and how they interact.

### Use Case Diagram

It represents the system's functional requirements from an end-user's perspective and the interactions between actors (users or external systems) and a system to achieve specific goals. It gather the system needs and depicts the external view of the system.

**Components:**

- **Actors:** External entities (users, systems) that interact with the system.
- **Use Cases:** Functions or services the system provides.
- **Relationships:** Shows how actors interact with use cases.
  - **Association:** Connects actors to use cases, indicating that an actor participates in a use case.
  - **Include:** A relationship where a use case is always included as part of another use case.
  - **Extend:** Indicates optional behavior that extends the functionality of a use case.
- **System Boundary:** Defines the scope of the system being modeled.

#### Example

Merge this two diagram and build one single diagram.

```
+-----------------------------------------+
|          Library Management System      |
|-----------------------------------------|
|                                         |
|  Student/Member                         |
|   ├── Search Book                       |
|   ├── Borrow Book                       |
|   |     └── (include) Search Book       |
|   ├── Return Book                       |
|   |     └── (extend) Pay Fine           |
|   ├── Reserve Book                      |
|   └── Pay Fine                          |
|                                         |
|  Librarian                              |
|   ├── Issue Book                        |
|   |     └── (include) Search Book       |
|   ├── Receive Returned Book             |
|   ├── Manage Book Records               |
|   └── Manage Member Records             |
|                                         |
|  Admin                                  |
|   ├── Generate Reports                  |
|   └── Add Librarian                     |
|                                         |
+-----------------------------------------+

+-----------------------------------------+
|       Library Management System         |
+-----------------------------------------+
|  [Search Book]                          |
|  [Borrow Book]                          | <-- include --> [Search Book]
|  [Return Book]                          | <-- extend --> [Pay Fine]
|  [Reserve Book]                         |
|  [Pay Fine]                             |
|  [Manage Book Records]                  |
|  [Issue Book]                           | <-- include --> [Search Book]
|  [Receive Returned Book]                |
|  [Manage Member Records]                |
|  [Generate Reports]                     |
|  [Add Librarian]                        |
+-----------------------------------------+
     ^            ^            ^
    /              |             \
Student/Member   Librarian       Admin

```

## Sequence Diagram

It shows how objects interact in a time-sequenced manner. It captures the flow of messages between objects or components, representing their interactions in a time-ordered sequence. Sequence diagrams are often used to model the logic of methods, functions, and use cases, especially to show how various parts of a system collaborate.

**Components:**

- **Actors/Objects:** Represent the entities (objects, users, or external systems) that interact in the scenario.
- **Lifelines:** Vertical dashed lines that represent the life span of an object during the interaction.
- **Activation Bars:** Thicker vertical rectangles(**not dashed**) along a lifeline showing the time an object is active and performing a task.
- **Messages:** Horizontal arrows between lifelines that represent communication (method calls, responses, or signals). These can be:
  - **Synchronous** (solid line with a filled arrowhead): Represents a call where the sender waits for a response.
  - **Asynchronous** (solid line with an open arrowhead): Represents a call where the sender does not wait for a response.
  - **Return Messages** (dashed line): Represents the return of control or data from the receiver back to the sender.

**Example:**

```
Student          LibrarySystem           Librarian           Database
   |                   |                     |                    |
   |------------------>|                     |                    |
   |   Search Book     |                     |                    |
   |                   |-------------------->|                    |
   |                   |   Verify Availability                    |
   |                   |                     |------------------->|
   |                   |                     |  Check Book Stock  |
   |                   |                     |<-------------------|
   |                   |<--------------------|                    |
   |   Book Found      |                     |                    |
   |                   |                     |                    |
   |------------------>|                     |                    |
   |   Borrow Book     |                     |                    |
   |                   |-------------------->|                    |
   |                   |   Validate User     |                    |
   |                   |                     |                    |
   |                   |                     |------------------->|
   |                   |                     |   Update Records   |
   |                   |                     |<-------------------|
   |                   |<--------------------|                    |
   |   Borrow Success  |                     |                    |
   |<------------------|                     |                    |
   |   Confirmation    |                     |                    |
```

### Other Symbol

**Conditional:**

```
----------------
| alt |        |
|------        |
|              |
|  condition   |
|              |
|---------------
|              |
|   else       |
|              |
|---------------
```

**Loop:**

```
----------------
| loop |       |
|------        |
|              |
|  statement   |
|              |
|---------------
```

**Activation Bar**

```
        |
        |
        |
        |
        |
        |
        |
        |
        |
        |
```

**Message:**

```
    ---
    | |
    ---
```

## Activity Diagram

It represents workflows and the sequence of activities. It define what activities user perform during a use case.

Each use case in a use case diagram can be further explored by creating an activity diagram. It's common to create an activity diagram for each use case identified in the use case diagram.

**Components:**

- **Activities:** Represent tasks or actions performed in the workflow. Each activity is denoted by a rounded rectangle.
- **Start Node:** Indicates the beginning of a process. It is represented by a filled black circle.
- **End Node:** Marks the end of the process flow. It is represented by a black circle with a surrounding border.
- **Transitions/Arrows:** Arrows show the flow or transition from one activity to the next.
- **Decision Node:** Depicted as a diamond shape, it represents branching in the workflow based on conditions. Each outgoing arrow is labeled with a condition.
- **Merge Node:** A diamond shape without conditions where multiple flows join back together.
- **Fork Node:** Represented as a thick horizontal or vertical line, it splits a single flow into multiple parallel flows.
- **Join Node:** A thick line that synchronizes multiple parallel flows into a single flow.
- **Swimlanes:** Vertical or horizontal partitions used to organize activities by the responsible actors or departments. This helps in visually associating actions with particular actors.

### Example

```
+-------------------------+   +---------------------+   +---------------------+
|        Start            |-->|   Search Book       |-->| Book Available?     |
+-------------------------+   +---------------------+   +---------+-----------+
                                                     |           |
                                                     |           v
                                                     |   +---------------------+
                                                     |   | Book Not Available  |
                                                     |   | Notify User         |
                                                     |   +---------------------+
                                                     |           |
                                                     |           v
                                                     |   +---------------------+
                                                     |   |  End                |
                                                     |   +---------------------+
                                                     |
                                                     v
+-------------------------+   +---------------------+   +---------------------+
|  Verify Membership      |-->|  Valid Member?      |-->|  Borrow Book        |
+-------------------------+   +---------+-----------+   +---------------------+
                                        |
                                        |                   +---------------------+
                                        |                   |  Record Borrowing   |
                                        v                   +---------------------+
                              +---------------------+                   |
                              |  Not a Member       |                   |
                              |  Notify User        |                   v
                              +---------------------+   +---------------------+
                                        |               |  Issue Receipt       |
                                        v               +---------------------+
                                  +------------------+             |
                                  |        End       |<-------------+
                                  +------------------+

```

## State Diagram

It models the different states an object can be in and the transitions between those states.

**Components:**

- `States:` Different statuses an object can have.
- `Transitions:` Triggers causing a change from one state to another.

```
[Available] --borrowBook()--> [Checked Out]
 [Checked Out] --returnBook()--> [Available]
```

# Generalization

Generalization is a fundamental concept in object-oriented programming (OOP). It refers to the process of extracting shared characteristics (attributes and behaviors) from two or more specific classes to create a more general class, which can serve as their parent or base class. This parent class is considered a "generalized" version of the more specific child classes.

**Example:** Consider the case of vehicles. There are many types of vehicles (e.g., cars, bikes, trucks), but they all share common features such as having wheels, engines, and the ability to move. Therefore, we can generalize these specific types of vehicles into a parent class called "Vehicle."

```lua
             +-------------+
             |   Vehicle    |
             +-------------+
                /     |     \
               /      |      \
       +--------+ +--------+ +--------+
       |  Car   | |  Bike  | |  Truck |
       +--------+ +--------+ +--------+
```

**Implementation:**

```java
class Vehicle {
    String brand, model;
    int wheels;

    Vehicle(String brand, String model, int wheels) {
        this.brand = brand;
        this.model = model;
        this.wheels = wheels;
    }

    void move() {
        System.out.println(brand + " " + model + " moves with " + wheels + " wheels.");
    }
}

class Car extends Vehicle {
    int doors;

    Car(String brand, String model, int wheels, int doors) {
        super(brand, model, wheels);
        this.doors = doors;
    }

    void openDoors() {
        System.out.println(brand + " " + model + " opens " + doors + " doors.");
    }
}

class Bike extends Vehicle {
    String handleType;

    Bike(String brand, String model, int wheels, String handleType) {
        super(brand, model, wheels);
        this.handleType = handleType;
    }

    void ride() {
        System.out.println(brand + " " + model + " ridden with " + handleType + " handles.");
    }
}

public class Main {
    public static void main(String[] args) {
        new Car("Toyota", "Corolla", 4, 4).move();
        new Bike("Yamaha", "YZF", 2, "sport").ride();
    }
}
```

# Association vs. Aggregation vs. Composition

Association, Aggregation, and Composition are types of relationships that describe the interaction and dependency between objects in Object-Oriented Analysis and Design (OOAD). Each type has its own unique characteristics:

## Association

Association represents a general connection or relationship between two classes, where each class is aware of the other. This relationship doesn't imply ownership; both classes are relatively independent of each other. It is typically depicted as a simple line connecting two classes.

### Characteristics

- No ownership implied (neither class owns the other).
- The objects involved in the association can exist independently.
- Usually denoted with a simple line between classes in UML diagrams.

### Example

A student enrolls in courses, and a course has students enrolled in it, but they don't own each other. The Student and Course classes are associated since they interact, but they can exist independently.

```
Student ------------ Course
```

```java
class Student {
    private String name;

    public void enroll(Course course) {
        System.out.println(name + " enrolled in " + course.getName());
    }
}

class Course {
    private String name;

    public String getName() {
        return name;
    }
}
```

## Aggregation

Aggregation is a specialized form of association that represents a "whole-part" relationship between classes. Here, one class is a container or aggregator, but it doesn’t imply strong ownership. The aggregated objects can exist independently outside the lifecycle of the aggregator.

### Characteristics

- Represents a whole-part relationship.
- The part (or aggregated) can exist independently of the whole.
- It’s a weaker form of composition, signified by a hollow diamond at the end of the line connecting the aggregator to the part.

### Example

A library is composed of books (whole-part), but a book can still exist outside of a library. If a library is closed, the books can still exist in other libraries or as standalone objects.

```
Library ◇----------- Book
```

```java
class Library {
    private List<Book> books;

    public void addBook(Book book) {
        books.add(book);
    }
}

class Book {
    private String title;

    public String getTitle() {
        return title;
    }
}
```

## Composition

Composition is a more specific type of aggregation that implies a stronger ownership between classes. In this relationship, the "whole" class cannot exist without its "part" class, and if the whole object is destroyed, its parts are also destroyed.

### Characteristics

- Represents a whole-part relationship with strong ownership.
- The lifecycle of the part class depends on the whole.
- Illustrated with a filled diamond on the UML diagram, connecting the whole to the part.

### Example

A house is composed of rooms, but rooms cannot exist independently of the house. If the house is demolished, the rooms cease to exist as well.

```
House ◆----------- Room
```

```java
class House {
    private List<Room> rooms;

    public House() {
        rooms = new ArrayList<>();
    }

    public void addRoom(Room room) {
        rooms.add(room);
    }
}

class Room {
    private String name;

    public Room(String name) {
        this.name = name;
    }
}
```

## Summary of Differences

| Relationship Type | Represents          | Lifecycle Dependency                      | Symbol         |
| ----------------- | ------------------- | ----------------------------------------- | -------------- |
| Association       | Simple relationship | Independent                               | Simple line    |
| Aggregation       | Whole-part          | Part can exist independently of the whole | Hollow diamond |
| Composition       | Strong whole-part   | Part’s lifecycle depends on the whole     | Filled diamond |

# Coupling

Coupling refers to the degree of dependency between modules or components in a system. It determines how much one module relies on another.

There are two types of coupling:

1. Tight Coupling (High Coupling)
2. Loose Coupling (Low Coupling)

## Tight Coupling (High Coupling)

When one module is highly dependent on another, changes in one module will affect the other.

```java
class Engine {
    void start() {
        System.out.println("Engine started...");
    }
}

class Car {
    private Engine engine;

    public Car() {
        this.engine = new Engine(); // Direct dependency on Engine
    }

    void drive() {
        engine.start();
        System.out.println("Car is moving...");
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.drive();
    }
}
```

**Explanation:**

- Here, `Car` directly creates an instance of `Engine`, meaning `Car` is tightly coupled to `Engine`.
- If we want to change the `Engine` class (e.g., introduce a new type of engine), we must modify the `Car` class.
- This reduces flexibility and makes the system hard to maintain.

## Loose Coupling (Low Coupling)

When modules interact with minimal dependency, making the system more maintainable and flexible.

```java
class Engine {
    void start() {
        System.out.println("Engine started...");
    }
}

// Using Dependency Injection
class Car {
    private Engine engine;

    public Car(Engine engine) { // Injecting dependency
        this.engine = engine;
    }

    void drive() {
        engine.start();
        System.out.println("Car is moving...");
    }
}

public class Main {
    public static void main(String[] args) {
        Engine engine = new Engine();
        Car car = new Car(engine); // Injecting the Engine instance
        car.drive();
    }
}
```

**Explanation**

- Now `Car` does not create an instance of `Engine`; instead, it accepts an `Engine` object via the constructor.
- This follows Dependency Injection (DI), making `Car` loosely coupled to `Engine`.
- If we change `Engine`, we don’t need to modify `Car`.

# Cohesion

Cohesion refers to how closely related and focused the responsibilities of a module/class are. It measures how well the methods inside a class are related to each other.

## High Cohesion

A class has a well-defined purpose with related methods.

```java
class ReportPrinter {
    void printReport() {
        System.out.println("Printing report...");
    }
}

class EmailSender {
    void sendEmail() {
        System.out.println("Sending email...");
    }
}

class TaxCalculator {
    void calculateTax() {
        System.out.println("Calculating tax...");
    }
}
```

**Explanation**

- Each class has a single, well-defined responsibility, making the system easier to understand, test, and modify.
- This approach follows high cohesion and SRP.

## Low Cohesion

A class does too many unrelated tasks, making it difficult to maintain.

```java
class Utility {
    void printReport() {
        System.out.println("Printing report...");
    }

    void sendEmail() {
        System.out.println("Sending email...");
    }

    void calculateTax() {
        System.out.println("Calculating tax...");
    }
}
```

**Explanation**

- This class handles printing, emailing, and tax calculations—unrelated responsibilities.
- If we need to modify one function, the others might be affected.
- The Single Responsibility Principle (SRP) is violated.
