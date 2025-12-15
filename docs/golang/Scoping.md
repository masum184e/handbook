

- New stack frame for display

Inside display:

```go
p = 15         // local only, doesn’t affect main’s x
first = 20     // modifies global "first"
```

Now memory is:

- Global: `first=20`, `second=10`
- Stack (display): `p=15`

After return → `p` destroyed, but global `first=20` stays.

### 9. Call `show(x)` again

Main’s `x` is still `5`.

So again `show(5)` → `anotherShow(5)` like before.

### 10. Back to main

```
Value of first is (Pre - Main): 20   // because display() changed it
Value of second is (Pre - Main): 10
Value of x is (Last - Main): 5
```

### Execution Summary

1. Global Context (lives whole program):
   ```go
   first = 20 (modified during display)
   second = 10
   display(), anotherShow(), show(), main(), init()
   ```
   → stored in global memory/heap.
2. Stack during runtime:
   - `main()` creates `x=5`.
   - Inner block creates temporary `x=10` (shadow), destroyed after block.
   - Each function call (`show`, `anotherShow`, `display`) makes new stack frames.
   - On return, stack frames are freed.
3. Variable Lifetime:
   - `first`, `second` → live till program ends.
   - `x` → lives till `main` ends.
   - Inner block `x` → lives till block ends.
   - Parameters like `a`, `m`, `p` → live only during function calls.
