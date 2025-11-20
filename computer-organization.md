# Contents

- [Number System](#number-system)
  - [Binary Number System](#binary-number-system-base-2)
  - [Octal Number System](#octal-number-system-base-8)
  - [Decimal Number System](#decimal-number-system-base-10)
  - [Hexadecimal Number System](#hexadecimal-number-system-base-16)
  - [Conversation](#conversation)
- [Signed Number Representation](#signed-number-representation)
  - [Types of Signed Number Representation](#types-of-signed-number-representation)
  - [The Sign Bit](#important-concept-the-sign-bit)
  - [1’s Complement Representation](#1s-complement-representation)
  - [2’s Complement Representation](#2s-complement-representation)
  - [1’s Complement vs 2’s Complement](#key-differences-1s-complement-vs-2s-complement)
  - [Add +5 and –3 using 2’s complement](#add-5-and-3-using-2s-complement-4-bit)
  - [Subtract 5 from 9 using 2’s complement (8-bit)](#subtract-5-from-9-using-2s-complement-8-bit)
- [Combinational Circuits in ALU](#combinational-circuits-in-alu)
  - [Adder](#adder)
    - [Half Adder](#half-adder)
    - [Full Adder](#full-adder)
    - [Ripple Carry Adder](#ripple-carry-adder-rca)
    - [Carry Look-Ahead Adder](#carry-look-ahead-adder-cla)
  - [Subtractor](#subtractor)
    - [Half Subtractor](#half-subtractor)
    - [Full Subtractor](#full-subtractor)
  - [Multiplier](#multiplier)

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

### Positional Values

Each digit represents a power of 8.

| Octal | Place Value | Power of 8 | Value |
| :---: | :---------: | :--------: | :---: |
|   2   |     8²      |     64     |  128  |
|   5   |     8¹      |     8      |  40   |
|   3   |     8⁰      |     1      |   3   |

### Example

Convert **(253)₈** to decimal:

$$
(253)_8 = (2 \times 8^2) + (5 \times 8^1) + (3 \times 8^0)
$$

$$
= 128 + 40 + 3 = 171
$$

**So, (253)₈ = (171)₁₀**

## Decimal Number System (Base-10)

**Base:** 10  
**Digits:** 0–9  
**Used by:** Humans in daily life  
**Used in computers:** For display and input/output operations (converted internally to binary)

### Positional Values

Each digit represents a power of 10.

| Decimal | Place Value | Power of 10 | Value |
| :-----: | :---------: | :---------: | :---: |
|    4    |     10²     |     100     |  400  |
|    5    |     10¹     |     10      |  50   |
|    6    |     10⁰     |      1      |   6   |

### Example

Convert **(456)₁₀** to decimal:

$$
(456)_{10} = (4 \times 10^2) + (5 \times 10^1) + (6 \times 10^0)
$$

$$
= 400 + 50 + 6 = 456
$$

Decimal numbers are familiar to us and serve as a reference when converting to/from other systems

## Hexadecimal Number System (Base-16)

**Base:** 16  
**Digits:** 0–9 and A–F

| Symbol | Decimal Equivalent |
| :----: | :----------------: |
|   A    |         10         |
|   B    |         11         |
|   C    |         12         |
|   D    |         13         |
|   E    |         14         |
|   F    |         15         |

**Used for:** Compact representation of binary (each hex digit = 4 binary bits)  
**Common in:** Memory addresses, color codes, instruction sets, etc.

### Positional Values

Each digit represents a power of 16.

|  Hex   | Place Value | Power of 16 | Value |
| :----: | :---------: | :---------: | :---: |
|   2    |     16²     |     256     |  512  |
| F (15) |     16¹     |     16      |  240  |
|   3    |     16⁰     |      1      |   3   |

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

## Conversation

| From → To                  | Method                              |
| :------------------------- | :---------------------------------- |
| Binary → Octal             | Group bits in 3s                    |
| Binary → Hex               | Group bits in 4s                    |
| Octal/Hex → Binary         | Replace each digit with 3 or 4 bits |
| Binary/Octal/Hex → Decimal | Multiply each digit by baseⁿ        |
| Decimal → Other bases      | Repeated division by base           |

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
   `1111 1010`
   So

| Number | 1’s Complement Representation |
| :----- | :---------------------------- |
| +5     | 0000 0101                     |
| –5     | 1111 1010                     |
### Add +5 and –3 using 1’s complement (4-bit)
### Subtract 5 from 9 using 2’s complement (8-bit)

## 2’s Complement Representation

In 2’s complement, negative numbers are represented by:

1. Taking the binary of the positive value
2. Computing its 1’s complement (invert all bits)
3. Adding 1 to the result

This is the most widely used signed-number representation in computers because it has a unique zero and supports efficient arithmetic.

Rules

- Positive numbers → normal binary form.
- Negative numbers →
  - Write the positive binary
  - Invert all bits (1’s complement)
  - Add 1

### Example (8-bit representation)

Let’s represent +5 and –5.

1.  +5 in binary (8-bit)

    ```
    0000 0101
    ```

2.  To get (–5)

    Step 1: 1’s complement (invert bits)

    ```
    0000 0101 → 1111 1010
    ```

    Step 2: Add 1
    ```
    1111 1010
    +       1
    -----------
    1111 1011   ← 2’s complement representation of –5
    ```

**Final Table**

| Number | 2’s Complement Representation |
| ------ | ----------------------------- |
| +5     | 0000 0101                     |
| –5     | 1111 1011                     |

2’s Complement Addition Rules

### Add +5 and –3 using 2’s complement (4-bit)

1. Represent numbers
   - +5 = 0101
   - –3
     - +3 = 0011
     - 1's complement = 1100
     - +1 → 1101
2. Add
   ```
     0101
   + 1101
   ---------
    10010
   ```

Since we are using 4 bits, discard the leftmost carry:

```
0010 = +2
```

Result: 5 + (–3) = 2

### Subtract 5 from 9 using 2’s complement (8-bit)

Compute: 9 – 5
Use 8-bit for clarity.

1. Represent +9 and +5

   - +9 = 00001001
   - +5 = 00000101

   To subtract, do: 9 – 5 = 9 + (–5)

2. Find 2’s complement of +5

   - 1’s complement of 00000101 = 11111010
   - Add 1:
   - 11111011 → this is –5

3. Add
   ```
     00001001
   + 11111011
   ----------------
    100001100
   ```

Ignore carry beyond 8 bits:

Result = 00000100 = 4

## Key Differences: 1’s Complement vs 2’s Complement

| Feature                  | 1’s Complement | 2’s Complement |
| ------------------------ | -------------- | -------------- |
| How to negate            | Flip bits      | Flip bits + 1  |
| Zero representations     | +0 and –0      | Only one zero  |
| Used in modern computers | ❌ No          | ✅ Yes         |
| Adds end-around carry?   | Yes            | No             |
| Range (4 bits)           | –7 to +7       | –8 to +7       |

# Combinational Circuits in ALU

Combinational circuits are digital circuits whose output depends only on the current inputs (no memory).
In an ALU, arithmetic operations such as addition, subtraction, multiplication, etc., are performed using combinational logic blocks.

The main arithmetic combinational circuits are:

1. Adder
2. Subtractor
3. Multiplier

## Adder

An adder is a combinational circuit that performs binary addition.

There are two basic types:

- Half Adder
- Full Adder

Later these are used to build:

- Ripple Carry Adder
- Carry Look-Ahead Adder

### Half Adder

A Half Adder (HA) adds two single bits: A and B
Outputs:

- Sum (S)
- Carry (C)

Truth Table

| A   | B   | Sum S | Carry C |
| --- | --- | ----- | ------- |
| 0   | 0   | 0     | 0       |
| 0   | 1   | 1     | 0       |
| 1   | 0   | 1     | 0       |
| 1   | 1   | 0     | 1       |

**Logic equations**

- Sum = A ⊕ B
- Carry = A · B

**Example**

Add: 1 + 1

- Sum = 1 XOR 1 = 0
- Carry = 1 AND 1 = 1
- Result = 10₂ (2 in decimal)

### Full Adder

A Full Adder (FA) adds 3 bits:

- Input bits: A, B
- Carry-in: Cin
- Outputs:
- Sum (S)
- Carry-out (Cout)

Truth Table

| A   | B   | Cin | Sum | Cout |
| --- | --- | --- | --- | ---- |
| 0   | 0   | 0   | 0   | 0    |
| 0   | 0   | 1   | 1   | 0    |
| 0   | 1   | 0   | 1   | 0    |
| 0   | 1   | 1   | 0   | 1    |
| 1   | 0   | 0   | 1   | 0    |
| 1   | 0   | 1   | 0   | 1    |
| 1   | 1   | 0   | 0   | 1    |
| 1   | 1   | 1   | 1   | 1    |

**Equations**

- Sum = A ⊕ B ⊕ Cin
- Cout = AB + BCin + ACin

**Example**

- Compute 1011₂ + 0101₂
- Add bit-by-bit using Full Adder:

### Ripple Carry Adder (RCA)

- Connect several full adders in series.
- Carry-out of one FA → Carry-in of next FA.
- Simple but slower.

Example: 4-bit Ripple Carry Adder can add two 4-bit numbers.

### Carry Look-Ahead Adder (CLA)

- Faster than RCA
- Uses Generate (G) and Propagate (P) signals to compute carries directly.

Used in high-speed ALUs.

## Subtractor

Subtractor performs binary subtraction:

$$
A−B
$$

Two types:

- Half Subtractor
- Full Subtractor

Alternatively, subtraction is done using 2’s complement with an adder.

### Half Subtractor

Subtracts two single-bit numbers.

- Inputs: A, B
- Outputs
  - Difference (D)
  - Borrow (Bo)

**Logic Equations**

$$
D=A⊕B
$$

$$
Bo=A⋅B
$$

**Example: Subtract 0 – 1**

A = 0, B = 1

D = 0 XOR 1 = 1

Borrow = A'·B = 1·1 = 1

Output: Borrow = 1, Difference = 1

Means: 0 - 1 = 1 with borrow 1

### Full Subtractor

Subtracts:

$$
A−B−Bin
$$

- Inputs: A, B, Borrow-in (Bin)
- Outputs: Difference (D), Borrow-out (Bout)

**Logic Equations**

$$
D=A⊕B⊕Bin
$$

$$
Bout=B⋅Bin+\bar{A}(B+Bin)
$$

**Example: 1 − 1 − 1**

A = 1, B = 1, Bin = 1

Difference = 1 XOR 1 XOR 1 = 1

Bout = 1·1 + 0 = 1

Output: Difference 1, Borrow 1

## Multiplier

Binary multiplication is a repeated shift-and-add process.

There are several hardware multipliers:

1. Array Multiplier
2. Booth Multiplier
3. Shift-and-Add Multiplier

We explain the basic principle using Array Multiplier.

### Binary Multiplication Rules

Same as decimal:

- 0 × 0 = 0
- 0 × 1 = 0
- 1 × 0 = 0
- 1 × 1 = 1

### Multiply 101 (5) × 011 (3)

Let: A = 101, B = 011

Write B bits as multipliers:

1. Multiply A by each bit of B

   ```
       101   (A)
   ×   011   (B)
   -----------
       101     ← A × 1 (LSB)
      101      ← A × 1 (shifted by 1)
     000       ← A × 0 (shifted by 2)
   ```

2. Add all partial products

   ```
         101
   +    1010
   +   00000
   -----------
       1111
   ```

Final Result

$$
101×011=1111₂
$$

Check in decimal: 5 × 3 = 15 → 1111₂ Correct

### Array Multiplier

- Built using AND gates + Full Adders
- Each bit of the multiplier multiplies all bits of the multiplicand using AND gates
- Results are summed with adders

This is the most common hardware implementation.

## Summary Table

| Circuit             | Inputs         | Outputs            | Purpose                  |
| ------------------- | -------------- | ------------------ | ------------------------ |
| **Half Adder**      | A, B           | Sum, Carry         | Adds 1-bit numbers       |
| **Full Adder**      | A, B, Cin      | Sum, Cout          | Adds 3 bits (with carry) |
| **Half Subtractor** | A, B           | Difference, Borrow | Subtracts 1-bit numbers  |
| **Full Subtractor** | A, B, Bin      | Difference, Bout   | Subtracts with borrow    |
| **Multiplier**      | Multi-bit A, B | Product            | Binary multiplication    |

# Memory Hierarchy
Memory hierarchy is an arrangement of storage systems based on:

- Speed
- Cost
- Capacity
- Distance from CPU

The goal of this hierarchy is to give the processor fast access to the most important data, while still providing large storage at low cost.

**Pyramid of Memory Hierarchy**

```
             Registers (fastest, smallest)
                    ↓
                Cache Memory
                    ↓
                Main Memory (RAM)
                    ↓
              Secondary Storage
        (SSD/HDD - slowest, largest)
```
As we move down the hierarchy:

- Speed decreases
- Cost per bit decreases
- Capacity increases
- Access time increases

## Registers (Fastest, Smallest)

Registers are small storage locations inside the CPU (ALU, Control Unit).

**Characteristics**

- Fastest memory in the computer
- Very small size (typically 32–256 registers)
- Directly controlled by CPU
- No access delay (1 CPU cycle)

**Types of Registers**

- ACC (Accumulator)
- PC (Program Counter)
- MAR (Memory Address Register)
- MDR (Memory Data Register)
- IR (Instruction Register)
- General Purpose Registers (R0, R1, R2…)

**Example**

Suppose the CPU wants to add:

$$
5+7
$$

Steps:

- Load 5 into register R1
- Load 7 into register R2
- ALU performs R1 + R2
- Result stored in R3

Registers allow instant access, enabling fast execution.

## Cache Memory (Very Fast, Small)

Cache memory is a small, high-speed memory located between CPU and RAM.

**Purpose**

To store frequently used instructions and data so the CPU can access them faster than going to RAM.

**Levels of Cache**

- L1 Cache: inside CPU, fastest, smallest
- L2 Cache: slightly larger, slower
- L3 Cache: shared between cores, larger but slower

**Why Cache Works? (Principles)**

1. Temporal Locality: Data used recently is likely used again soon.
2. Spatial Locality: Nearby data is also likely needed.

**Example**

Program repeatedly accesses array A[0], A[1], A[2].
Cache stores these values:

- First access: from RAM → stored in cache
- Next accesses: taken from cache (much faster)

Result: Program runs much faster.

## Main Memory (RAM)

Main memory is volatile, large storage used to hold active:

- Programs
- Data
- Operating system components

**Characteristics**

- Slower than cache, but faster than secondary storage
- Larger capacity than cache
- Data lost when power is off (volatile)

**Types of RAM**

- DRAM (Dynamic RAM)
- SRAM (Static RAM) – used in cache

**Example**

When you open a program (e.g., MS Word):

- The program is loaded from disk (secondary storage) into RAM
- CPU fetches instructions from RAM
- Frequently used instructions move into cache

## Secondary Storage (Slowest, Largest)

Non-volatile, large-capacity storage used to store:

- OS files
- Applications
- Documents
- Media (videos, images)

**Examples:**

- SSD (Solid State Drive)
- HDD (Hard Disk Drive)
- USB drives
- SD cards

**Characteristics**

- Slowest access time
- Very large capacity (GBs to TBs)
- Non-volatile
- Cheapest per bit

**Example**

When the computer boots:

- OS loads from HDD/SSD (slow)
- Into RAM (faster)
- Then into cache/registers (fastest) during execution

## Why Memory Hierarchy is Needed

Because of the speed gap between CPU and memory.

- CPU speed: nanoseconds
- RAM speed: tens of nanoseconds
- Disk speed: milliseconds (millions of nanoseconds!)

If the CPU accessed only RAM or disk, it would be too slow.

Thus, memory hierarchy:

- Uses small, fast memory close to CPU (registers, cache)
- Uses larger, slower memory farther away (RAM, disk)

This balances:

- Speed
- Cost
- Capacity

## Example of Executing a Program

Consider running a program like Google Chrome.

1. Stored on Secondary Storage: chrome.exe is stored in SSD/HDD.
2. Loaded into Main Memory: When executed, the OS loads the program into RAM.
3. Cached into Cache Memory: Frequently accessed instructions (loops, functions) move into cache.
4. CPU uses Registers
  - During execution
    - Operands go into registers
    - ALU performs operations directly with register values

  - Thus, execution goes:
    ```
    Registers → Cache → RAM → SSD/HDD
             (Fastest)           (Slowest)
    ```

## Summary of Memory Hierarchy
| Level | Memory Type       | Speed     | Size      | Cost per Bit | Volatile     | Example          |
| ----- | ----------------- | --------- | --------- | ------------ | ------------ | ---------------- |
| 1     | Registers         | Fastest   | Few bytes | Highest      | Volatile     | ACC, PC          |
| 2     | Cache             | Very Fast | KB–MB     | High         | Volatile     | L1, L2, L3 cache |
| 3     | Main Memory       | Medium    | GBs       | Medium       | Volatile     | DRAM             |
| 4     | Secondary Storage | Slowest   | TBs       | Lowest       | Non-volatile | SSD, HDD         |
