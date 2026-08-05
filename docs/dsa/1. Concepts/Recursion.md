---
title: Recursion 📄
sidebar_position: 6
---

**Recursion Tracing** means following the execution flow of recursive calls:

- How functions are called (going down the call stack).
- How results come back (unwinding, going up the call stack).

It helps us see what happens inside memory (stack frames) during recursion.

## Direct Recursion

When a function calls itself directly.

```cpp
int factorial(int n) {
    if (n == 0) return 1;        // Base case
    return n * factorial(n - 1); // Direct recursion
}
```

**Tracing**

```
factorial(4)
 → 4 * factorial(3)
     → 3 * factorial(2)
         → 2 * factorial(1)
             → 1 * factorial(0)
                 → return 1   (base case)
             return 1
         return 2 * 1 = 2
     return 3 * 2 = 6
 return 4 * 6 = 24
```

## Indirect Recursion

When a function calls another function, and that function eventually calls the first one back.

```cpp
void B(int n);

void A(int n) {
    if (n > 0) {
        cout << n << " ";
        B(n - 1);   // A calls B
    }
}

void B(int n) {
    if (n > 1) {
        cout << n << " ";
        A(n / 2);   // B calls A
    }
}
```

**Tracing**

```
A(5) → prints A:5
    B(4) → prints B:4
        A(2) → prints A:2
            B(1) → prints B:1
                A(0) stops
```

## Tail Recursion

When the recursive call is the last statement in the function (nothing to do after recursion returns). Can be optimized by the compiler (Tail Call Optimization).

```cpp
int tailFactorial(int n, int result = 1) {
    if (n == 0) return result;       // Base case
    return tailFactorial(n - 1, n * result); // Tail recursion
}
```

Here, no pending operations after the recursive call.

**Tracing**

```
tailRec(3) → prints 3
    tailRec(2) → prints 2
        tailRec(1) → prints 1
            tailRec(0) → stops
```

Sum of 1 to N:

```cpp
int sum_tail(int n, int acc = 0) {
    if (n == 0) return acc;
    return sum_tail(n - 1, acc + n); // recursive call is last
}
```

## Head Recursion

When the recursive call happens first, before any other statements. Work happens after recursive call returns.

Backtracking occur in head recursion.

```cpp
void headRecursion(int n) {
    if (n > 0) {
        headRecursion(n - 1);  // Recursive call first
        cout << n << " ";      // Work after return
    }
}
```

**Tracing (it is different from other print is done returning time)**

```cpp
headRec(3)
 → headRec(2)
     → headRec(1)
         → headRec(0)   (base case, returns)
         print 1
     print 2
 print 3
```

Sum of 1 to N:

```cpp
int sum(int n) {
    if (n == 1) return 1;
    return sum(n - 1) + n;
}
```

## Tree Recursion

When a function calls itself more than once.

```cpp
int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);  // Two recursive calls
}
```

**Tracing**

```
fib(4)
 → fib(3) + fib(2)

fib(3)
 → fib(2) + fib(1)

fib(2)
 → fib(1) + fib(0)

fib(1) → 1
fib(0) → 0
So fib(2) = 1 + 0 = 1

fib(1) → 1
So fib(3) = 1 + 1 = 2

fib(2) again
 → fib(1) + fib(0)
 → 1 + 0 = 1

So fib(4) = 2 + 1 = 3
```

## Nested Recursion

When a recursive function passes a recursive call as an argument.

```cpp
int nested(int n) {
    if (n > 100) return n - 10;
    return nested(nested(n + 11));
}
```

**Tracing**

```cpp
nested(95)
 → nested(nested(106))   // first call argument is another call
     nested(106) → returns 96   (since >100, returns 106 - 10)
 → nested(96)
     → nested(nested(107))
         nested(107) → returns 97
     → nested(97)
         → nested(nested(108))
             nested(108) → returns 98
         → nested(98)
             ...
 eventually reaches nested(101) → returns 91
```


## Recursion in Stack

When solving **stack-related problems using recursion**, a very common pattern is:

> **Use the recursion call stack as an implicit stack.**
> First go deep until the base condition, then perform operations while returning (backtracking phase).

This pattern appears in problems like:

* Reverse a stack
* Sort a stack
* Delete middle element
* Insert an element at the bottom
* Evaluate recursive stack transformations


### General Recursion + Stack Pattern

```text
solve(stack):

    1. Base condition
       - If stack is empty or size reaches target:
           return

    2. Remove the top element
       - Store it temporarily

    3. Recursive call
       - Solve the smaller stack

    4. Do the required operation
       - Put the removed element back
       - Modify stack
       - Insert/remove something
```

The important idea:

```
Before recursive call:
    Work while going down

After recursive call:
    Work while coming back
```

### Template Code

```cpp
void solve(stack<int>& st)
{
    // Base case
    if(st.empty())
        return;

    // Step 1: Remove top element
    int top = st.top();
    st.pop();

    // Step 2: Recursive call
    solve(st);

    // Step 3: Do work while returning
    st.push(top);
}
```

This simply reverses the process of removing elements.

### Pattern 1: Insert Element at Bottom of Stack

#### Problem

Insert `x` at the bottom without using another stack.

Example:

```
Stack:
5
4
3
2
1  <- top

Insert 10

Result:
5
4
3
2
1
10 <- top
```

#### Idea

Remove everything until stack becomes empty.

Then insert the new element.

While returning, restore removed elements.

```cpp
void insertAtBottom(stack<int>& st, int x)
{
    if(st.empty())
    {
        st.push(x);
        return;
    }

    int temp = st.top();
    st.pop();

    insertAtBottom(st, x);

    st.push(temp);
}
```

### Pattern 2: Reverse a Stack

#### Idea

To reverse:

1. Remove top element recursively.
2. Insert removed element at bottom.

```cpp
void reverseStack(stack<int>& st)
{
    if(st.empty())
        return;

    int temp = st.top();
    st.pop();

    reverseStack(st);

    insertAtBottom(st, temp);
}
```

Flow:

```
Original:

1
2
3
4


Remove:
4
3
2
1


Insert bottom:

4
3
2
1

becomes

1
2
3
4 reversed
```

### Pattern 3: Sort a Stack

#### Idea

Take the top element out.

Sort the remaining stack.

Insert the element in the correct position.

```cpp
void sortedInsert(stack<int>& st, int x)
{
    if(st.empty() || st.top() <= x)
    {
        st.push(x);
        return;
    }

    int temp = st.top();
    st.pop();

    sortedInsert(st, x);

    st.push(temp);
}


void sortStack(stack<int>& st)
{
    if(st.empty())
        return;

    int temp = st.top();
    st.pop();

    sortStack(st);

    sortedInsert(st, temp);
}
```

### How to Recognize This Pattern

When you see:

* "Without using extra stack"
* "Use recursion"
* "Modify stack order"
* "Insert/delete at a specific position"
* "Reverse or sort stack"

Think:

```
Take top element
↓
Recursive call on smaller stack
↓
Solve the smaller problem
↓
Restore / modify while returning
```

### Mental Model

Imagine recursion creates a hidden stack:

```
solve(5)
 |
 solve(4)
 |
 solve(3)
 |
 solve(2)
 |
 solve(1)
 |
 base case
```

Then execution returns upward:

```
solve(1) finishes
      ↑
solve(2) finishes
      ↑
solve(3) finishes
      ↑
solve(4) finishes
      ↑
solve(5) finishes
```

Most stack-recursion problems are solved in this **"go down → reach base → come back → modify"** pattern.
