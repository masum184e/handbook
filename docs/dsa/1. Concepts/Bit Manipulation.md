## XOR
- xor of two same number return 0 (`a ⊕ a = 0`)
- xor of any number with 0 return itself (`a ⊕ 0 = a`)

```
0 = 0000 = xor[0, 0] = 0
1 = 0001 = xor[0, 1] = 1
2 = 0010 = xor[0, 2] = 3
3 = 0011 = xor[0, 3] = 0
4 = 0100 = xor[0, 4] = 4
5 = 0101 = xor[0, 5] = 1
6 = 0110 = xor[0, 6] = 7
7 = 0111 = xor[0, 7] = 0
8 = 1000 = xor[0, 8] = 8
....
```

### XOR from 0 to n

There’s a simple repeating pattern:

| n % 4 | xor(n) |
| ----- | ------ |
| 0     | n      |
| 1     | 1      |
| 2     | n + 1  |
| 3     | 0      |


$$
xor(l..r)=xor(r)⊕xor(l−1)
$$

- Everything from `0` to `l−1` appears twice and cancels out
- Only values from `l` to r remain