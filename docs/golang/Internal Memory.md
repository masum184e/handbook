
var globalCount int = 100 // stored in data segment

func main() {
    fmt.Println(globalCount)
}
```

- `globalCount` is stored in a fixed memory location in the data segment.

## Code Segment

- Stores the compiled binary instructions of your Go program.
- Read-only for safety.
- Rarely manipulated directly by Go developers.

## Stack vs Heap

| Feature        | Stack                        | Heap                    |
| -------------- | ---------------------------- | ----------------------- |
| **Speed**      | Fast                         | Slower                  |
| **Size**       | Small, grows per goroutine   | Large                   |
| **Lifetime**   | Until function ends          | Until GC cleans it      |
| **Management** | Automatic (LIFO)             | Garbage Collector       |
| **Best for**   | Local, short-lived variables | Long-lived, shared data |

## Memory Escape

Go decides where variables go (stack or heap) at compile time.
If a variable “escapes” a function (returned or referenced externally), it goes to the heap.

```go
func heapExample() *int {
    x := 42
    return &x // escapes to heap
}

func stackExample() int {
    x := 42
    return x // stays in stack
}

func main() {
    heapPtr := heapExample()
    fmt.Println(*heapPtr)

    stackVal := stackExample()
    fmt.Println(stackVal)
}
```
