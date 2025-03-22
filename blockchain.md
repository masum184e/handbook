# Blockchain
## Block
A block in a blockchain is a container that stores data and links to other blocks to form a chain.

Each block contains three main components:

1. **Data**: Information stored in the block, such as transaction details.
2. **Hash**: A unique identifier (like a fingerprint) for the block, generated using cryptographic algorithms.
3. **Previous Block Hash**: The hash of the previous block in the chain, creating a link between blocks.

### Components of Block
1. **Header Information**
The header contains metadata about the block, such as:
    - **Block Number**: The position of the block in the chain.
    - **Timestamp**: The time when the block was created.
    - **Nonce**: A number used for solving the cryptographic puzzle during mining.
    - **Merle Root**: A single hash representing all transactions in the block for quick verification.
    - **Previous Hash**: The hash of the previous block.

2. **Transaction Data**
This is the main body of the block and contains a list of validated transactions. For example, in Bitcoin, these transactions involve sending and receiving bitcoins.

3. **Hash**
The hash ensures that the data in the block cannot be tampered with. If the data changes, the hash changes, alerting the system.

### Example
```json
{
  "blockNumber": 1,
  "timestamp": "2025-01-23T10:00:00Z",
  "nonce": 12345,
  "transactions": [
    {
      "sender": "Alice",
      "receiver": "Bob",
      "amount": 10
    },
    {
      "sender": "Charlie",
      "receiver": "Diana",
      "amount": 5
    }
  ],
  "previousHash": "0000...",
  "currentHash": "1A2B3C4D..."
}
```
## Merkle Tree
A Merkle Tree (also called a Hash Tree) is a data structure used in blockchain to efficiently and securely verify large sets of data, such as transactions. It is a binary tree where:
1. **Leaf Nodes** represent the hashed values of individual transactions.
2. **Non-Leaf Nodes** are derived by hashing two child nodes, forming a binary structure.
3. **Root Node (Merkle Root)** is the single hash that represents the entire data set. Root Node is created by hasshing two child of them

### Example
1. **Leaf Nod - Transaction:**
```js
H1 = Hash(T1)
H2 = Hash(T2)
H3 = Hash(T3)
H4 = Hash(T4)
```
2. **Non-Leaf Node:**
```js
H12 = Hash(H1 + H2)
H34 = Hash(H3 + H4)
```
3. **Root Node:**
```js
Merkle Root = Hash(H12 + H34)
```
### Tree Structure
```js
        Merkle Root
           /    \
        H12      H34
       /  \     /   \
     H1   H2  H3   H4
```
