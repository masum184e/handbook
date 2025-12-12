1.  Basics
    1. Things to Know
       1. User Input / Output
       2. Data Types
       3. If Else
       4. Switch
       5. What is aray
       6. For Loops
       7. While Loops
       8. Functions
       9. Time Complexity
    2. Logical Thinig
       1. Patterns
    3. STL
       1. C++ STL
       2. Java Collections
    4. Basics Maths
       1. Count Digits
       2. Reverse a Number
       3. Check Palindrome
       4. GCD or HCF
       5. Armstrong Numbers
       6. Print all Divisors
       7. Check for Prime
    5. Recursion
       1. Print N times
       2. Print name N times
       3. 1 to N
       4. N to N
       5. Sum of first N
       6. Fact of N
       7. Reverse Array
       8. Check Palindrome
       9. Fibonacci Number
    6. Hashing
       1. Hashing Theory
       2. Counting Frequencies
       3. a
2.  Sorting
    1. Sorting I
       1. Selection Sort
          - left Portion is sorted, right portion is unsorted
          - find minimum element of unsorted array
          - replace the minimum element with the first item which become the last item of sorted array
          - prevent swap if they are both
       2. Bubble Sort
          - left portion is unsorted, right portion is sorted
          - bubbles up mean the large item should be placed at the end of unsorted portion, which is done by pushing/swapping the large item one step ahead
       3. Insertion Sort
          - it's like arranging card
          - we have some arranged card and we got new one
          - how we can include it, find the right place for it and place it
          - do proper indexing of variable and check condition properly
    2. Sorting II
       1. Merge Sort
          - recursive call, then merge
          - for merge
            - extract size
            - extract item
            - merge
            - reassign item
       2. a
       3. a
       4. Quick Sort
          - kind of reverse approach of merge
            - get pivot
            - reverse call
          - place the pivot at right place
3.  Array
    1. Easy
       1. Largest Element
       2. Second Largest
       3. Check Rotated Sorted
          - Count how many times nums[i] > nums[i+1] happens.
          - If this break happens more than once, it cannot be a valid sorted-rotated array. 
       4. Remove Duplicates
       5. Left Rotate By One Place
       6. Left Rotate By D Place
       7. Moves Zeros to end
       8. Linear Search
       9. Find Union
       10. Find Missing numbers
           - xor of [0, n] vs xor of array
           - sum of [0, n] vs sum of array
       11. Maximum Consecutive Ones
       12. Find the number that appear once
       13. Longest subarray with given sum K
       14. a
    2. Medium
       1. Two Sum
          - `unordered_map`: easy to access
          - `map`: sorted useage
          - To apply two pointer approach, array need to be sorted, if not sorted use hash map.
       2. Sort Color
          - mid is move with left and mid
          - right is reduced to mid
          - that's why mid can be targetting for tracking iteration
       3. Majority Element
       4. Kadane's Algorithm
       5.
       6.
       7. Rearrange Array Elements by Sign
       8.
       9.
       10.
       11. Set Zeros
           - Constant space, O(n<sup>2</sup>) time 
       12.
       13.
       14.
    3. Hard
       1. a
       2. Majority Elements
       3. [Three Sum]()
          - Inner Loop Replaced by Two Pointer and array must be sorted
       4.
       5.
       6.
       7.
       8.
       9.
       10.
       11.
       12.
4.  Binary Search
    1. 1D Array
       1. Find X
       2. a
       3. a
       4. a
       5. a
    2. Answer
       1. a
       2. a
       3. a
       4. a
       5. a
    3. 2D Array
       1. a
       2. a
       3. a
       4. a
       5. a
5.  LinkedList
    1. Introduction
       1. Intro
       2. Insertion
       3. Delete
       4. Length
       5. Search
    2. Doubly
       1. Intro
       2. Insert
         - consider four position for inserting new node
         - handle the indexing properly
         - for 1/0 based indexing use pos > 1/0 as condition and pos-- as statement
       3. Delete
       4. Reverse
    3. Medium Problme
       1. Middle of LL
       2. A
       3. B
       4. Detect Loop
       5. C
       6. D
       7. E
6.  Bit Manipulation
    1. Learning
       1. a
       2. a
       3. Odd Even
       4. a
       5. a
       6. a
       7. a
       8. a
7.  BST
    1. Concepts
       1. Intro: How to handle duplicate value?
       2. BST
       3. Find Min/Max in BST
8.  Graph

    1. Learing
       1. Graph and Types
       2. Representation in C++
       3. Representation in Java
    2. Traversing
       1. A
       2. B
       3. C

9.  Binary Tree

    1. Traversals

       1. Introduction
       2. Representation in C++
       3. Representation in Java
       4. Traversal

          ```cpp
          if(root == NULL)return;
          /* root->data : preorder */
            traverse(root->left);
            /* root->data : inorder */
           traverse(root->right);
           /* root->data : postorder */
          ```

       5. Preorder
       6. Inorder
       7. Postorder
       8. A
       9. A
       10. A
       11. A
       12. A
       13. A

    2. Medium
       1. Height of Binary Tree
    3. Hard

Task - Study details with gpt, approach, why couldn't able to build the logic etc

1. Starting of Loop
2. Length of Loop
3. Odd Even
4. String Pallindrome
5. Highest/Lowest Freq
6. Pascal Triangle(factorial will not work, do it with iterative way)
7. Check Rotated Sorted Array
8. Set Zeros