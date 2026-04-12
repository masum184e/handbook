1. Complexity Analysis Blog
2. C# Blog
3. OOP Blog
4. Pointer Blog
5. Array and String
6. [STL](https://www.cpsacademy.io/blog/c-stl-complete-guide-beginner-to-advanced--)
7. [SOLID](https://www.cpsacademy.io/blog/solid--beyond--c-design-principles--series)
8. Recursion
7. CF Expert Blog
8. [Codechef Rating Ladder](https://docs.google.com/spreadsheets/d/1V9rvF7LHwBuuLllDNw_xEJ6upM8yloec9O3uAxq-4G8/edit?gid=1688954650#gid=1688954650)
9. [400 Problem List](https://docs.google.com/spreadsheets/d/1JKPnkRnB9jedrTLw4IVeHiIIWeBNF1lfVgh0UVBY2LY/edit?gid=0#gid=0)
10. Orientation
11. [Source Code](https://github.com/CPS-Academy/JIPC_Resources_Batch_2/tree/main?tab=readme-ov-file)
12. [Resume Template](https://www.overleaf.com/latex/templates/recreating-business-insiders-cv-of-marissa-mayer/gtqfpbwncfvp)
13. [DSA Classroom](https://classroom.google.com/c/ODQ0ODY2Nzc5MDM2?cjc=ojtgnusa)
14. [Fundamentals Classroom](https://classroom.google.com/c/ODI1NjU1MDM5MzAw?cjc=fbu4wikf)
15. [Interview Classroom](https://classroom.google.com/c/NzUxMjkyMTYyMjEy?cjc=tgpxznk)

<!--
1. [Complexity Analysis Blog](https://www.cpsacademy.io/blog/complexity-analysis-a-to-z--interview-crack--secret-weapon)
16. [C# Blog](https://www.cpsacademy.io/blog/--c-sharp-programming-)
17. [OOP Blog](https://www.cpsacademy.io/blog/c-object-oriented-programming---blog-series--)
18. [Pointer Blog](https://www.cpsacademy.io/blog/pointers--programming----------/)
19. [Array and String](https://www.cpsacademy.io/blog/array--string--a-to-z)
20. [STL](https://www.cpsacademy.io/blog/c-stl-complete-guide-beginner-to-advanced--)
7. [SOLID](https://www.cpsacademy.io/blog/solid--beyond--c-design-principles--series)
8. [Recursion](https://www.cpsacademy.io/blog/-recursion-----dynamic-programming-/------call-----)
21. [CF Expert Blog](https://www.cpsacademy.io/blog/codeforces--800--1600--complete--roadmap---cp-icpc--interview---cover-/codeforces-800--1600-complete-bangla-roadmap)
22. [Codechef Rating Ladder](https://docs.google.com/spreadsheets/d/1V9rvF7LHwBuuLllDNw_xEJ6upM8yloec9O3uAxq-4G8/edit?gid=1688954650#gid=1688954650)
23. [400 Problem List](https://docs.google.com/spreadsheets/d/1JKPnkRnB9jedrTLw4IVeHiIIWeBNF1lfVgh0UVBY2LY/edit?gid=0#gid=0)
24. [Orientation](https://docs.google.com/presentation/d/1i3MSMy1aayqtciewXypjoAXWZQSETlmoIOF3h0AFiUQ/edit?slide=id.p1#slide=id.p1)
25. [Source Code](https://github.com/CPS-Academy/JIPC_Resources_Batch_2/tree/main?tab=readme-ov-file)
26. [Resume Template](https://www.overleaf.com/latex/templates/recreating-business-insiders-cv-of-marissa-mayer/gtqfpbwncfvp)
27. [DSA Classroom](https://classroom.google.com/c/ODQ0ODY2Nzc5MDM2?cjc=ojtgnusa)
28. [Fundamentals Classroom](https://classroom.google.com/c/ODI1NjU1MDM5MzAw?cjc=fbu4wikf)
29. [Interview Classroom](https://classroom.google.com/c/NzUxMjkyMTYyMjEy?cjc=tgpxznk)
-->

## Task

1. build 3 Portfolio
2. Read 3 blog on CP
4. upsolve
   1. CF Round 1082
   2. CF Edu Round 187 = complete
   3. CF Round 1083
   4. weekly 489
   5. weekly 490
   6. biweekly 176 - 1
   7. weekly 491 - 1
   8. biweekly 177
5. cpsacademy(blog+video)
7. explore c++ stl (`map`(bst), `unordered_map`(hashmap))
8. implment realloc with malloc with capacity and size variable and note it down(append with existing note)

## Problems
### Array & Strings
https://leetcode.com/problems/kth-largest-element-in-an-array
https://leetcode.com/problems/rotate-array
https://leetcode.com/problems/group-anagrams
https://leetcode.com/problems/rearrange-array-elements-by-sign (support for in-place)
### Matrix
https://leetcode.com/problems/rotate-image
https://leetcode.com/problems/flipping-an-image
### STL
https://leetcode.com/problems/design-circular-queue
https://leetcode.com/problems/snakes-and-ladders
https://leetcode.com/problems/first-unique-character-in-a-string
https://leetcode.com/problems/moving-average-from-data-stream
https://leetcode.com/problems/open-the-lock
https://leetcode.com/problems/jump-game-iii
https://leetcode.com/problems/perfect-squares
https://leetcode.com/problems/bus-routes
https://leetcode.com/problems/max-stack
https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string
https://leetcode.com/problems/daily-temperatures
https://leetcode.com/problems/decode-string
https://leetcode.com/problems/score-of-parentheses
## Blog

difference between avg case and tight bound

frequency count with: সেক্ষেত্রে অন্য পদ্ধতি ব্যবহার করতে হবে (যেমন nested loop দিয়ে, বা পরে sorting শিখলে আরো ভালো উপায় পাবে)। - array practice/onek data

## String থেকে Spaces সরাও

- https://leetcode.com/problems/sort-list
   - Try to solve with with $O(1)$ space complexity



### Fixed Sliding Window

1. [Sliding Subarray Beauty](https://leetcode.com/problems/sliding-subarray-beauty)
    1. 06 April, 2026: 00.40.44 ❌
        - Failed at edge cases
            - `set` doesn't allow duplicates, `multiset` does
            - `next` function is used to access set with index
            ```cpp
            auto it = next(st.begin(), x - 1);
            vec.push_back(*it);
            ```
            `next` is lineare caused $O(k)$ time complexity, eventually the program become $O(n * k)$
            - `erase` function remove all the element, get the ... of the specific item through `find`
            ```cpp
            st.erase(nums[i - k]);
            st.erase(st.find(nums[i - k]));
            ```
            - Reduce the time complexity with frequency array(Check the constraints), if require implment the xth smallest number function.
5. [Number of Sub-arrays of Size K and Average ≥ Threshold](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/)
6. [Check If a String Contains All Binary Codes of Size K](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/)
7. [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
8. [Permutation in String](https://leetcode.com/problems/permutation-in-string/)