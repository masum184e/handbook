<!--
[Solve Status 8/82](https://leetcode.com/problem-list/linked-list/)
-->

## Floyd's Cycle Finding Algorithm

- It also called tortoise algorithm
- Use two pointer to move through the sequence at different speed

> slow pointer => move one step ahead \
> fast pointer => move two step ahead

### How It Works

When slow pointer enter the loop, fast pointer must be inside loop

If we consider distance between slow and fast pointer. At begining, it will be 0, then 1, then 2 and eventually it well become n but the distance between fast and slow(reverse) gradually reduce and eventually they see each other and loop detected.

### Loop

A loop means the **last node** of the linked list connected back to a node in the same linke list.

```
       Loop                     Not Loop
------------------------------------------------
1 → 2 → 3 → 4 → 5      1 → 2 → 3 → 4 → 5 → 6 → 7
          ↑     │                ↑     │
          └─────┘                └─────┘
```

### Start Point

- Distance covered by slow pointer: `m + n*x + k`
- Distance covered by fast pointer: `m + n*y + k`
  - `m`: straight distance
  - `n`: length of the loop
  - `x`, `y`: number of time loop iterate
  - `k`: distance between start point and collision point

**Distance Calcualtion**

```
fast        = 2 * slow
m + n*y + k = 2 * (m + n*x + k)
         ny = m + k + 2nx
     ny-2nx = m + k
    n(y-2x) = m + k
n(y-2x) - k = m
     ni - k = m
```

- `y-2x` times of extra iteration is used to detect the collison
- `m` is the distance of **head to start** which is `ni-k` or `ni+k`(reverse).
- So, to get start point, iterate the distance between head to start(`m`) evenutally equally with (`ni + k`)
  - That means we need to iterate the loop
  - As well as the linst from `head`.
