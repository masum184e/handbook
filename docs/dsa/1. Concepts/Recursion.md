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

:::danger
Backtracking occur in head recursion.
:::

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
























A good way to master recursion in DSA is to recognize the **pattern** behind a problem rather than memorizing individual solutions. Here are the most common recursion patterns, ordered from basic to advanced.

| Pattern                                             | Core Idea                            | Common Problems                         |
| --------------------------------------------------- | ------------------------------------ | --------------------------------------- |
| **1. Linear Recursion**                             | One recursive call                   | Factorial, Sum of array, Print 1 to N   |
| **2. Tail Recursion**                               | Recursive call is the last operation | Reverse print, Countdown                |
| **3. Head Recursion**                               | Work happens after recursive call    | Print array in order                    |
| **4. Binary Recursion**                             | Two recursive calls                  | Fibonacci, Binary Tree traversal        |
| **5. Divide and Conquer**                           | Divide problem into halves           | Merge Sort, Quick Sort, Binary Search   |
| **6. Backtracking**                                 | Choose → Recurse → Undo choice       | N-Queens, Sudoku, Subsets, Permutations |
| **7. Include/Exclude Pattern**                      | Take or skip each element            | Subsequence, Target Sum, Partition      |
| **8. Decision Tree Recursion**                      | Explore all possible choices         | Coin Change, Word Break                 |
| **9. Recursion on Trees**                           | Solve left/right subtrees            | Height, Diameter, LCA                   |
| **10. DFS on Graphs**                               | Visit node recursively               | Connected Components, Cycle Detection   |
| **11. Recursive Dynamic Programming (Memoization)** | Cache recursive results              | Knapsack, LIS, Edit Distance            |
| **12. Recursive Parsing**                           | Recursive grammar processing         | Expression Evaluation, JSON/XML Parser  |

---

## 1. Linear Recursion

Only **one recursive call**.

```cpp
void print(int n){
    if(n==0) return;
    cout<<n<<" ";
    print(n-1);
}
```

Problems:

* Factorial
* Sum of digits
* Reverse string
* Power(x,n)

---

## 2. Binary Recursion

Each call creates **two more calls**.

```cpp
int fib(int n){
    if(n<=1) return n;
    return fib(n-1)+fib(n-2);
}
```

Problems:

* Fibonacci
* Binary tree traversal
* Count paths

---

## 3. Divide and Conquer

Split into smaller independent problems.

```
Solve(left)
Solve(right)
Merge
```

Examples:

* Merge Sort
* Quick Sort
* Binary Search

---

## 4. Include / Exclude Pattern

At every element:

```
Take it
Don't take it
```

Template:

```cpp
void solve(int idx){
    if(idx==n){
        // answer
        return;
    }

    // include
    solve(idx+1);

    // exclude
    solve(idx+1);
}
```

Problems:

* Subsequences
* Target Sum
* Partition Equal Subset
* Subset Sum

---

## 5. Backtracking

General template:

```
Choose
Recurse
Undo
```

```cpp
for(choice){
    makeChoice();
    solve();
    undoChoice();
}
```

Problems:

* Permutations
* Sudoku
* N Queens
* Rat in Maze
* Word Search

---

## 6. Tree DFS

Recursive definition:

```
Solve(left subtree)
Solve(right subtree)
Combine answer
```

Example:

```cpp
int height(Node* root){
    if(root==NULL) return 0;

    return 1 + max(height(root->left),
                   height(root->right));
}
```

Problems:

* Height
* Diameter
* Balanced Tree
* LCA
* Path Sum

---

## 7. Graph DFS

```cpp
void dfs(int node){
    vis[node]=true;

    for(auto x:adj[node])
        if(!vis[x])
            dfs(x);
}
```

Problems:

* Connected Components
* Cycle Detection
* Topological Sort
* Islands

---

## 8. Recursive DP (Memoization)

```
Answer(state)
    if cached return
    compute recursively
    save
```

```cpp
int solve(int i){
    if(i==n) return 0;

    if(dp[i]!=-1)
        return dp[i];

    return dp[i]=...
}
```

Problems:

* Knapsack
* LIS
* Edit Distance
* Matrix Chain Multiplication
* Coin Change

---

## 9. Recursive Generation

Generate all possible answers.

Template:

```cpp
void solve(string cur){

    if(cur.size()==n){
        ans.push_back(cur);
        return;
    }

    for(char c='a'; c<='z'; c++){
        solve(cur+c);
    }
}
```

Problems:

* Generate Parentheses
* Phone Keypad
* Gray Code
* Binary Strings

---

## 10. Recursive Parsing

```
Expression
    -> Term
       -> Factor
```

Used in:

* Calculator
* JSON Parser
* XML Parser
* Compiler Design

---

# Universal Recursion Template

Every recursive problem can often be approached with these questions:

```text
1. What is the state?
2. What is the base case?
3. What choices do I have?
4. Recurse on each choice.
5. Combine the answers (if needed).
6. (If backtracking) Undo the choice.
```

---

# Pattern Cheat Sheet

| If the problem says... | Pattern            |
| ---------------------- | ------------------ |
| Print numbers          | Linear Recursion   |
| Factorial              | Linear Recursion   |
| Fibonacci              | Binary Recursion   |
| Binary Search          | Divide & Conquer   |
| Merge Sort             | Divide & Conquer   |
| Tree traversal         | Tree DFS           |
| Graph traversal        | Graph DFS          |
| Generate subsets       | Include/Exclude    |
| Generate permutations  | Backtracking       |
| Generate combinations  | Backtracking       |
| Sudoku                 | Backtracking       |
| N Queens               | Backtracking       |
| Target Sum             | Include/Exclude    |
| Coin Change            | Decision Tree / DP |
| Knapsack               | Memoized Recursion |
| LIS                    | Memoized Recursion |
| Edit Distance          | Memoized Recursion |
| Word Search            | Backtracking       |
| Maze Paths             | Backtracking / DFS |
| Generate Parentheses   | Backtracking       |

A practical learning order is:

1. Linear recursion
2. Binary recursion
3. Divide and conquer
4. Include/Exclude
5. Backtracking
6. Tree recursion
7. Graph DFS
8. Memoized recursion (top-down DP)
9. Advanced recursive DP (bitmask, interval, digit DP)

Mastering these patterns will cover the majority of recursion-based DSA problems encountered in coding interviews and competitive programming.

























If you're looking for **recursion patterns** (the mental models used to solve DSA problems), here's a cleaner list. These are the patterns interviewers expect you to recognize.

| Pattern                                 | When to Use                                  | Common Problems                                        |
| --------------------------------------- | -------------------------------------------- | ------------------------------------------------------ |
| **1. Recursion Stack Simulation**       | Simulate function calls using the call stack | Reverse Linked List, Print Reverse, Tree Traversals    |
| **2. Backtracking**                     | Explore all possibilities and undo choices   | N-Queens, Sudoku, Rat in Maze, Word Search             |
| **3. Include/Exclude (Pick/Not Pick)**  | Every element has two choices                | Subsets, Subsequence, Target Sum, Partition            |
| **4. Decision Tree**                    | More than two choices at each step           | Coin Change, Phone Keypad, Generate Strings            |
| **5. Divide & Conquer**                 | Break into independent smaller problems      | Merge Sort, Quick Sort, Binary Search                  |
| **6. Recursive DFS**                    | Traverse Trees or Graphs                     | Tree Height, Islands, Connected Components             |
| **7. Bottom-Up Recursion (Post-order)** | Solve children first, then parent            | Diameter, Balanced Tree, Maximum Path Sum              |
| **8. Top-Down Recursion (Pre-order)**   | Pass information from parent to children     | Root-to-Leaf Paths, Path Sum                           |
| **9. Memoized Recursion (Top-Down DP)** | Overlapping subproblems                      | Knapsack, Fibonacci, Edit Distance                     |
| **10. State Space Search**              | Search all valid states                      | Permutations, Combinations, Crossword, Puzzle Problems |
| **11. Recursive Construction**          | Build an answer piece by piece               | Generate Parentheses, BST from Sorted Array            |
| **12. Recursion with Multiple Returns** | Combine answers from recursive calls         | LCA, Diameter, Tree DP                                 |

---

## 1. Recursion Stack Pattern

Think of recursion as using the **call stack**.

```
f(3)
 |
f(2)
 |
f(1)
 |
f(0)
```

Then the stack unwinds:

```
f(0)
↑
f(1)
↑
f(2)
↑
f(3)
```

Used in:

* Reverse Linked List
* Reverse Print
* Factorial
* Tree Traversals

---

## 2. Backtracking Pattern

Template:

```
Choose
↓
Explore
↓
Undo
```

```cpp
choose();
solve();
undo();
```

Keywords:

* "Find all"
* "Generate all"
* "Can we place?"

Problems:

* Sudoku
* N Queens
* Word Search
* Rat in Maze
* Permutations

---

## 3. Pick / Not Pick Pattern

```
        []
       /  \
    Pick  Skip
```

Template:

```cpp
solve(i){
    pick(i);
    solve(i+1);

    skip(i);
    solve(i+1);
}
```

Problems:

* Subsets
* Subsequences
* Target Sum
* Partition

---

## 4. Decision Tree Pattern

Instead of two choices:

```
         ""
      /  |  \
     a   b   c
```

Problems:

* Phone Keypad
* Coin Change
* Restore IP Address

---

## 5. Divide & Conquer

```
Problem
   |
---------
|       |
Left   Right
   |
Combine
```

Problems:

* Merge Sort
* Quick Sort
* Binary Search
* Maximum Subarray

---

## 6. DFS Recursion

```
Visit
 |
Children
```

Trees:

```
      A
     / \
    B   C
   / \
  D   E
```

Problems:

* Height
* Diameter
* Traversals
* Islands
* Graph DFS

---

## 7. Post-order Recursion

Solve children first.

```
Left
Right
Node
```

Useful when the parent depends on child results.

Problems:

* Diameter
* Balanced Tree
* Maximum Path Sum

---

## 8. Pre-order Recursion

Process node before children.

```
Node
Left
Right
```

Problems:

* Root-to-leaf paths
* Path Sum
* Serialize Tree

---

## 9. Memoized Recursion

```
Already solved?
     |
   Yes → Return
     |
    No
     |
Compute → Save
```

Problems:

* Knapsack
* Fibonacci
* Coin Change
* Edit Distance

---

## 10. State Space Search

Explore every valid state.

```
State
 ├── State1
 ├── State2
 └── State3
```

Problems:

* Crossword
* Puzzle Solver
* Hamiltonian Path
* Graph Coloring

---

## 11. Recursive Construction

Build the answer gradually.

```
()
 |
(())
 |
((()))
```

Problems:

* Generate Parentheses
* BST Construction
* Expression Generation

---

## 12. Multi-return Recursion

Each recursive call returns information to its parent.

```
left = solve(root->left)
right = solve(root->right)

return combine(left,right)
```

Problems:

* Lowest Common Ancestor
* Diameter
* Tree DP
* Maximum Path Sum

---

## Interview Cheat Sheet

| Problem keywords         | Pattern                |
| ------------------------ | ---------------------- |
| Reverse, recursion stack | Recursion Stack        |
| Generate all             | Backtracking           |
| Subset/Subsequence       | Pick/Not Pick          |
| Combination              | Backtracking           |
| Permutation              | Backtracking           |
| Binary Search            | Divide & Conquer       |
| Merge Sort               | Divide & Conquer       |
| Tree Traversal           | DFS                    |
| Graph Traversal          | DFS                    |
| Height/Diameter          | Post-order             |
| Root-to-Leaf             | Pre-order              |
| Overlapping subproblems  | Memoization            |
| Build recursively        | Recursive Construction |

This is the set of recursion patterns commonly used in interviews (LeetCode, Codeforces, GFG, and similar platforms). Recognizing the pattern usually tells you what recursive template to start with.
