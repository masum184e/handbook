---
title: Introduction
sidebar_position: 1
---

## Structured Programming
Structured Programming is a programming paradigm that organizes code using control structures like:

- Sequence
- Selection (if/else)
- Iteration (loops)

It avoids uncontrolled jumps like `goto`.

**Key Characterstics**

- Top-down design
- Clear block structure
- Uses functions/procedures
- No random jumps in control flow

Example Languages: C, Pascal, Ada

## Procedural Programming

Procedural Programming is based on procedures/functions.
The program is divided into small reusable blocks called functions.

It focuses on what to do (procedures) rather than modeling real-world objects.

**Key Characteristics**

- Data and functions are separate
- Functions operate on shared data
- Top-down approach
- Global variables often used

Example Languages: C, Pascal, Fortran

## Object-Oriented Programming (OOP)

Object-Oriented Programming organizes code around objects rather than functions.

Objects combine:

- Data (attributes/properties)
- Behavior (methods/functions)

Example Languages: Java, C++, C#, Python, Ruby

## Why Do We Need OOP?

As software grows large, procedural programming creates problems:

1. **Poor Data Security**

   * Data is global
   * Anyone can modify it

2. **Difficult Maintenance**

   * Changing one function may affect others

3. **Hard to Scale**

   * Large systems become messy

4. **Code Reusability is Limited**

   * Hard to reuse logic in structured way

5. **Real-world modeling is difficult**

   * Hard to represent entities like Car, User, BankAccount

## What Exact Problems Does OOP Solve?

| Problem                  | OOP Solution  |
| ------------------------ | ------------- |
| Data exposed everywhere  | Encapsulation |
| Code duplication         | Inheritance   |
| Complex condition logic  | Polymorphism  |
| Poor real-world modeling | Objects       |
| Hard to extend systems   | Abstraction   |

---

## Features of OOP

## Encapsulation

* Bundling data + methods together
* Hiding internal details
* Protecting data using access modifiers

```java
private int balance;
```

## Abstraction

* Showing only essential details
* Hiding implementation complexity

Example:  
You drive a car without knowing engine internals.

## Inheritance

* One class can inherit another
* Promotes code reuse

Example:  
`Dog` inherits from `Animal`

## Polymorphism

* Same method name, different behavior
* Method Overloading
* Method Overriding

Example:  
`draw()` works differently for Circle and Square

## Advantages of OOP

1. Better code organization
2. High security (data hiding)
3. Reusable code
4. Easy maintenance
5. Scalable for large systems
6. Reduces complexity
7. Improves collaboration in teams

# Disadvantages of OOP

1. More complex design initially
2. Higher memory usage
3. Slower performance (sometimes)
4. Over-engineering for small programs
5. Requires good design skills

# Real-World Analogy

Imagine building a banking system:

### Procedural Approach:

* Functions like `deposit()`, `withdraw()`
* Global account data
* Risky and messy for many users

### OOP Approach:

* `BankAccount` class
* Each user has their own object
* Secure balance
* Clean structure