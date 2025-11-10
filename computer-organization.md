# Number System

A number system is a way to represent and express numbers using a set of symbols (called digits) and a base (or radix).
Each number system has:

- **Base (radix):** Number of unique digits (including 0) used to represent numbers.
- **Digits:** Symbols used in that system.
- **Place value:** Each position in a number has a value based on powers of the base.

Computers internally represent all data (numbers, characters, instructions, etc.) using binary numbers (0s and 1s) — but humans often use decimal, octal, or hexadecimal to make it easier to read or convert.

## Binary Number System (Base-2)

Base: 2

Digits: 0 and 1 only

Used by: Computers (since all digital circuits work with two voltage levels: ON = 1, OFF = 0)

Positional Values

Each digit in a binary number represents a power of 2:

| Binary | Place Value | Power of 2 | Value |
| :----- | :---------- | :--------- | :---- |
| 1      | 2³          | 8          | 8     |
| 0      | 2²          | 4          | 0     |
| 1      | 2¹          | 2          | 2     |
| 1      | 2⁰          | 1          | 1     |

**Example**

Convert binary **1011** to decimal:

$$
(1011)_2 = (1 \times 2^3) + (0 \times 2^2) + (1 \times 2^1) + (1 \times 2^0)
$$

$$
= 8 + 0 + 2 + 1 = 11
$$

**So, (1011)₂ = (11)₁₀**

## Octal Number System (Base-8)

**Base:** 8  
**Digits:** 0, 1, 2, 3, 4, 5, 6, 7  
**Used for:** Short representation of binary numbers (each octal digit = 3 binary bits)

---

### Positional Values

Each digit represents a power of 8.

| Octal | Place Value | Power of 8 | Value |
| :---: | :---------: | :--------: | :---: |
|   2   |     8²      |     64     |  128  |
|   5   |     8¹      |     8      |  40   |
|   3   |     8⁰      |     1      |   3   |

---

### Example

Convert **(253)₈** to decimal:

$$
(253)\_8 = (2 \times 8^2) + (5 \times 8^1) + (3 \times 8^0)
$$

$$
= 128 + 40 + 3 = 171
$$

**So, (253)₈ = (171)₁₀**

# Conversation

| From → To                  | Method                              |
| :------------------------- | :---------------------------------- |
| Binary → Octal             | Group bits in 3s                    |
| Binary → Hex               | Group bits in 4s                    |
| Octal/Hex → Binary         | Replace each digit with 3 or 4 bits |
| Binary/Octal/Hex → Decimal | Multiply each digit by baseⁿ        |
| Decimal → Other bases      | Repeated division by base           |

## Decimal Number System (Base-10)

**Base:** 10  
**Digits:** 0–9  
**Used by:** Humans in daily life  
**Used in computers:** For display and input/output operations (converted internally to binary)

---

### Positional Values

Each digit represents a power of 10.

| Decimal | Place Value | Power of 10 | Value |
|:--------:|:-------------:|:-------------:|:------:|
| 4 | 10² | 100 | 400 |
| 5 | 10¹ | 10 | 50 |
| 6 | 10⁰ | 1 | 6 |

---

### Example

Convert **(456)₁₀** to decimal:

$$
(456)_{10} = (4 \times 10^2) + (5 \times 10^1) + (6 \times 10^0)
$$

$$
= 400 + 50 + 6 = 456
$$

Decimal numbers are familiar to us and serve as a reference when converting to/from other systems

---

## Hexadecimal Number System (Base-16)

**Base:** 16  
**Digits:** 0–9 and A–F  

| Symbol | Decimal Equivalent |
|:-------:|:------------------:|
| A | 10 |
| B | 11 |
| C | 12 |
| D | 13 |
| E | 14 |
| F | 15 |

**Used for:** Compact representation of binary (each hex digit = 4 binary bits)  
**Common in:** Memory addresses, color codes, instruction sets, etc.

---

### Positional Values

Each digit represents a power of 16.

| Hex | Place Value | Power of 16 | Value |
|:----:|:--------------:|:--------------:|:------:|
| 2 | 16² | 256 | 512 |
| F (15) | 16¹ | 16 | 240 |
| 3 | 16⁰ | 1 | 3 |

---

### Example

Convert **(2F3)₁₆** to decimal:

$$
(2F3)_{16} = (2 \times 16^2) + (15 \times 16^1) + (3 \times 16^0)
$$

$$
= (2 \times 256) + (15 \times 16) + (3 \times 1)
$$

$$
= 512 + 240 + 3 = 755
$$

**So, (2F3)₁₆ = (755)₁₀**

# Signed Number Representation

Computers use binary numbers (0s and 1s) to represent data.
By default, a binary number like `1011` is unsigned — meaning it can represent only positive values.

| Bits    | Unsigned Range |
| :------ | :------------- |
| 4 bits  | 0 to 15        |
| 8 bits  | 0 to 255       |
| 16 bits | 0 to 65,535    |

But to represent negative numbers, we need signed representation systems.

## Types of Signed Number Representation

| Representation     | Description                                                                                   |
| :----------------- | :-------------------------------------------------------------------------------------------- |
| **Sign-Magnitude** | MSB (Most Significant Bit) = sign bit (0 = positive, 1 = negative)                            |
| **1’s Complement** | Negative numbers are represented by inverting (complementing) all bits of the positive number |
| **2’s Complement** | Negative numbers are represented by inverting all bits and adding 1 to the result             |

## Important Concept: The Sign Bit

In all signed binary systems:

- MSB (Most Significant Bit) = sign bit
    - 0 → Positive
    - 1 → Negative

Example (8-bit system):

| Binary      | Meaning                                |
| :---------- | :------------------------------------- |
| `0 0100101` | +37                                    |
| `1 0100101` | -37 (depends on representation method) |


## 1’s Complement Representation

In 1’s complement, the negative number is represented by inverting all bits (changing 1 → 0 and 0 → 1) of its positive counterpart.

Rule

- For a positive number → normal binary form.
- For a negative number → take the binary of the positive number and complement all bits.

### Example (8-bit representation)

Let’s represent +5 and –5.

1. +5 in binary (8-bit):
    ```
    0000 0101
    ```

2. To get (–5):
Invert all bits (1’s complement)
    ```
    1111 1010
    ```
So

| Number | 1’s Complement Representation |
| :----- | :---------------------------- |
| +5     | 0000 0101                     |
| –5     | 1111 1010                     |
