---
title: Introduction
sidebar_position: 1
---

Design principles in software development act like a set of guiding rules that help developers build systems that are easier to understand, maintain, and scale over time. Without them, code can quickly become messy, fragile, and hard to work with.

1. Manage Complexity
2. Improve Maintainability
3. Enable Scalability
4. Reduce Bugs and Errors
5. Enhance Team Collaboration
6. Promote Reusability
7. Support Long-Term Sustainability

> Design Principles are a set of guidelines that explain how to use OOP tools (such as classes, inheritance, interfaces, and polymorphism) effectively to write better code.

## Design Principles vs Design Patterns

| Aspect   | Design Principles       | Design Patterns          |
| -------- | ----------------------- | ------------------------ |
| Nature   | Guidelines              | Solutions                |
| Level    | High-level              | More concrete            |
| Purpose  | Improve design thinking | Solve recurring problems |
| Usage    | Always applied          | Used when needed         |
| Examples | SOLID, DRY              | Factory, Observer        |


## DRY — _Don't Repeat Yourself_

DRY means:

> **Avoid duplicating code or logic. Instead, reuse it in a single place.**

Duplication makes code harder to maintain. If something changes, you must update it in multiple places → more bugs.

**Bad Example (Violates DRY)**

```java
public class OrderService {

    public double calculateDiscountedPrice(double price) {
        return price - (price * 0.1);
    }

    public double calculateFinalPrice(double price) {
        return price - (price * 0.1); // duplicated logic
    }
}
```

Problem: Same discount logic repeated in multiple methods.

**Good Example (DRY Applied)**

```java
public class OrderService {

    private double applyDiscount(double price) {
        return price - (price * 0.1);
    }

    public double calculateDiscountedPrice(double price) {
        return applyDiscount(price);
    }

    public double calculateFinalPrice(double price) {
        return applyDiscount(price);
    }
}
```

- Discount logic lives in **one method**.
- If discount changes (e.g., 15%), update only one place.
- Improves maintainability and reduces bugs.

## KISS — _Keep It Simple, Stupid_

KISS means:

> **Write the simplest solution that works. Avoid unnecessary complexity.**

Complex code is harder to read, debug, and maintain.

**Bad Example (Overcomplicated)**

```java
public boolean isEven(int number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
```

**Good Example (KISS Applied)**

```java
public boolean isEven(int number) {
    return number % 2 == 0;
}
```

- Same functionality, fewer lines, clearer intent.
- Less mental overhead for future developers.

## YAGNI — _You Aren’t Gonna Need It_

YAGNI means:

> **Don’t add functionality until it is actually needed.**

Developers often try to “future-proof” code with features that may never be used.

**Bad Example (Violates YAGNI)**

```java
public class ReportGenerator {

    public void generatePDFReport() {
        System.out.println("Generating PDF...");
    }

    public void generateExcelReport() {
        System.out.println("Generating Excel...");
    }

    public void generateXMLReport() {
        System.out.println("Generating XML...");
    }
}
```

Problem: Only PDF is required, but extra features are added “just in case”.

**Good Example (YAGNI Applied)**

```java
public class ReportGenerator {

    public void generatePDFReport() {
        System.out.println("Generating PDF...");
    }
}
```

- Only implement what is needed now.
- Future requirements can be added later when necessary.
- Saves time and reduces complexity.

**How They Work Together**

| Principle | Focus                      | Benefit                          |
| --------- | -------------------------- | -------------------------------- |
| DRY       | Avoid duplication          | Easier maintenance               |
| KISS      | Simplicity                 | Readable, clean code             |
| YAGNI     | Avoid unnecessary features | Faster development, less clutter |

## Combined Example

**Bad Code**

```java
public class UserService {

    public void saveUserToDatabase(User user) {
        System.out.println("Saving user...");
    }

    public void saveAdminToDatabase(User admin) {
        System.out.println("Saving user..."); // duplicate
    }

    public void futureFeature() {
        System.out.println("Maybe needed later"); // unnecessary
    }
}
```

**Good Code (All Principles Applied)**

```java
public class UserService {

    public void saveUser(User user) {
        System.out.println("Saving user...");
    }
}
```

**Final Takeaways**

- **DRY** → Don’t copy-paste logic.
- **KISS** → Prefer simple solutions over clever ones.
- **YAGNI** → Don’t build features until they’re required.
