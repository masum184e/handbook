If you’ve solved even a handful of problems on Codeforces or AtCoder, you’ve already encountered **parity** — even if you didn’t realize it.

In mathematics, **parity** simply means whether a number is **even or odd**. That’s it.

Yet this simple concept is one of the most powerful tools in competitive programming. Parity appears in: Invariants, Game theory, Graph theory, Permutations, Constructive algorithms, Bitwise problems.

Very often, a complicated-looking problem collapses into something simple once you analyze **what changes parity and what doesn’t**.

---

# 1. What Is Parity?

Parity refers to whether an integer is:

* **Even** → divisible by 2
* **Odd** → not divisible by 2

Mathematically:

* Even numbers: $2k$
* Odd numbers: $2k + 1$

In C++:

```cpp
if (x % 2 == 0) {  
    // x is even  
} else {  
    // x is odd  
}
```

Or faster (bitwise trick):

```cpp
if (x & 1) {  
    // x is odd  
}
```

---

# 2. Core Parity Rules

## 2.1 Addition and Subtraction

Parity behaves predictably under addition:

| A    | B    | A + B |
| ---- | ---- | ----- |
| Even | Even | Even  |
| Even | Odd  | Odd   |
| Odd  | Even | Odd   |
| Odd  | Odd  | Even  |

**Key takeaway:**

* **Same parity → sum is even**
* **Different parity → sum is odd**

Subtraction follows the same pattern because parity depends only on modulo 2.

Example:

```cpp
int sum_parity = (a + b) % 2;
```

Or equivalently:

```cpp
int sum_parity = (a % 2) ^ (b % 2);
```

## 2.2 Multiplication

| A    | B   | A × B |
| ---- | --- | ----- |
| Even | Any | Even  |
| Odd  | Odd | Odd   |

**Key takeaway:**

* If **at least one number is even**, product is even.
* Only **odd × odd = odd**.

## 2.3 Parity in Bitwise Operations

Bitwise operations are deeply connected to parity because parity depends on the **least significant bit (LSB)**.

### Check parity

```cpp
bool isOdd = x & 1;
```

### XOR and parity

XOR behaves exactly like addition modulo 2:

| A | B | A ^ B |
| - | - | ----- |
| 0 | 0 | 0     |
| 1 | 1 | 0     |
| 0 | 1 | 1     |
| 1 | 0 | 1     |

So:

```cpp
(a + b) % 2 == (a % 2) ^ (b % 2)
```

This is extremely useful in problems involving:

* XOR arrays
* Subset parity
* Bit manipulation

---

# 3. Parity in Permutations and Inversions

Now we move to intermediate territory.

A permutation has a **parity**:

* Even permutation
* Odd permutation

This depends on the number of **inversions**.

An inversion is a pair $(i, j)$ such that:

* $i < j$
* $a[i] > a[j]$

If the number of inversions is:

* Even → even permutation
* Odd → odd permutation

### Why does this matter?

Because:

* Swapping two elements changes permutation parity.
* Each swap flips parity.

This appears in:

* Sorting by swaps
* Determining reachability of states
* Puzzle problems (like 15-puzzle style problems)

If two configurations have different permutation parity, **one cannot be transformed into the other using only swaps of allowed type**.

This is a classic invariant trick.

---

# 4. Parity as an Invariant

An **invariant** is something that does not change during operations.

Parity is often an invariant.

### Example idea:

You’re allowed to:

* Pick two elements
* Increase both by 1

Question: Can you make all elements equal?

**Observation:**

Each operation increases total sum by 2 → parity of total sum does NOT change.

So if final configuration requires sum with different parity → impossible.

This kind of reasoning appears very often in competitive programming.

---

# 5. Parity in Problem Solving Strategies

Let’s explore how parity helps across major CP topics.

## 5.1 Invariants

Many problems allow operations that change numbers in controlled ways.

Ask:

* Does the operation change parity?
* Does it preserve parity?
* Does it flip parity?

If target state has different parity from initial state → impossible.

## 5.2 Game Theory Problems

In many two-player games:

* Players alternate moves
* Each move changes something by ±1

Often the winner depends only on:

* Whether a number is even or odd

Classic pattern:

If total moves possible is:

* Even → second player wins
* Odd → first player wins

Parity often determines the outcome.

## 5.3 Graph Problems

Parity appears in graphs in multiple ways.

### Bipartite Graphs

A graph is bipartite if and only if:

* No odd-length cycle exists

Why?

Because bipartite graphs divide nodes into two sets:

* Even distance
* Odd distance

Odd cycle breaks parity layering.

In BFS:

```cpp
vector<int> color(n, -1);  
  
queue<int> q;
color[start] = 0;  
q.push(start);  
  
while (!q.empty()) {  
    int u = q.front(); q.pop();  
    for (int v : adj[u]) {  
        if (color[v] == -1) {  
            color[v] = color[u] ^ 1; // flip parity  
            q.push(v);  
        } else if (color[v] == color[u]) {  
            // Not bipartite  
        }  
    }  
}
```

Here parity represents layer (even/odd distance).

## 5.4 Constructive Algorithms

Sometimes you must construct an array satisfying conditions.

Example pattern:

* Need sum to be even
* Need number of odd elements to be even
* Need alternating parity

Counting odd numbers becomes crucial.

**Fact:**

Sum of array is even if and only if number of odd elements is even.

This is a powerful shortcut.

---

# 6. Example Competitive Programming Problems

Let’s walk through 4 conceptual examples.

## Example 1: Make Array Equal with ±1 Operations

You can:

* Choose any element and increase or decrease it by 1

Goal: Make all elements equal.

**Key insight:**

Total sum changes by ±1 each operation.

To make all elements equal to $x$:

Final sum = $n × x$

**Parity condition:**

If initial `sum % 2 ≠ (n × x) % 2` → impossible.

Often simplifies to checking parity constraints.

## Example 2: Game with Stones

Two players remove 1 or 2 stones from a pile.

Who wins?

Observe:

If `n % 3 == 0` → second player wins
Otherwise → first player wins

Why?

Because moves reduce pile size and parity modulo small number determines outcome.

Parity-style reasoning reduces DP to a simple formula.

## Example 3: Swapping to Sort

Given a permutation, you may swap any two elements.

Question: Can you sort it in exactly k swaps?

**Observation:**

Minimum swaps needed depends on permutation parity.

If:

* Parity of permutation ≠ parity of k → impossible

Because each swap flips permutation parity.

Huge simplification.

## Example 4: Grid Coloring Problem

You must color a grid so adjacent cells differ.

This reduces to checking if graph is bipartite.

Odd cycles → impossible.

Again, parity of cycle length determines answer.

---

# 7. Useful C++ Parity Tricks

## Fast parity check

```cpp
bool isEven(int x) {  
    return !(x & 1);  
}
```

## Count odd numbers

```cpp
int odd_count = 0;  
for (int x : a) {  
    odd_count += (x & 1);  
}
```

## Check if sum is even

```cpp
bool sumEven = (odd_count % 2 == 0);
```

No need to compute full sum!

## XOR trick for parity

Instead of:

```cpp
int parity = 0;  
for (int x : a) {
    parity = (parity + x) % 2;
}
```

Use:

```cpp
int parity = 0;  
for (int x : a) {
    parity ^= (x & 1);
}
```

Cleaner and faster.

## Flip parity

```cpp
parity ^= 1;
```

---

# 8. Common Mistakes and Pitfalls

### ❌ 1. Ignoring Negative Numbers

In C++:

```cpp
-3 % 2 == -1
```

Safer:

```cpp
abs(x) % 2
```

Or use:

```cpp
x & 1
```

### ❌ 2. Forgetting That Only Odd × Odd Is Odd

Many beginners assume:

* Even × Odd = Odd (WRONG)

It’s always even.

### ❌ 3. Not Considering Parity as an Invariant

When operations look complicated, always check:

* What happens modulo 2?

Very often problem reduces instantly.

### ❌ 4. Overcomplicating with DP

Some problems that look DP-heavy reduce to:

* Counting parity
* Checking even/odd

Always test small cases and look for patterns.

---

# 9. How to Recognize Parity-Based Problems

Look for these signals:

### 🔹 Only ±1 operations allowed

→ Parity probably matters.

### 🔹 Swaps allowed

→ Permutation parity matters.

### 🔹 Graph coloring with 2 colors

→ Bipartite → odd cycle detection.

### 🔹 Game where players alternate single-step moves

→ Winning depends on parity.

### 🔹 Conditions involving “sum is even” or “odd number of elements”

→ Count odds instead of computing full values.

---

# 10. Practical Strategy During Contests

When stuck:

1. Try reducing everything modulo 2.
2. Track parity instead of exact values.
3. Look for invariants.
4. Simulate small cases and observe even/odd pattern.
5. Ask: “Does this operation change parity?”

Parity often turns:

* Hard constructive problems
  into
* Simple counting problems

---

# Final Thoughts

Parity is one of the simplest mathematical ideas — but in competitive programming, it’s incredibly powerful.

It helps you:

* Detect impossibility quickly
* Avoid unnecessary computation
* Replace DP with simple logic
* Identify invariants
* Solve game problems elegantly
* Reason about permutations and graphs

As a beginner or intermediate competitive programmer, mastering parity gives you a mental shortcut that applies across many problem types.

Next time you face a confusing problem, pause and ask:

> “What happens if I only care about even vs odd?”

You might be surprised how often that’s all you need.
