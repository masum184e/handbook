Skip to content
You said:
class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        vector<vector<int>> vec;
        sort(nums.begin(), nums.end());
        int n = nums.size();
        for(int a = 0; a < n; a++){
            for(int b = 0; b < n; b++){
                int c = b + 1, d = n - 1;
                while(c < d){
                    int sum = nums[a] + nums[b] + nums[c] + nums[d];
                    if(sum > target) d--;
                    else if(sum < target) c++;
                    else{
                        vec.push_back({nums[a], nums[b], nums[c], nums[d]});
                        c++;
                    }
                }
            }
        }
        return vec;
    }
}; what's wrong here?
ChatGPT said:
The provided C++ code is an attempt to solve the 4Sum problem using a brute-force plus two-pointer approach. However, there are several logical and performance issues that make the solution incorrect and inefficient.

🔍 Problem with the Code
❌ 1. Duplicate Tuples Are Not Skipped
You are not skipping over duplicate values of a, b, c, and d, which leads to repeated quadruplets in the result.

❌ 2. Invalid Loop for b
You're starting b from 0, which can be equal to a, leading to using the same index twice in a quadruplet. That violates the condition that you need four distinct indices a < b < c < d.

❌ 3. int Overflow Risk
The sum nums[a] + nums[b] + nums[c] + nums[d] can overflow int if the input contains large values. You should use long long or cast the sum to long to be safe.

❌ 4. Missing Sorted Result / No Duplicate Removal
Leetcode (and similar platforms) require you to return unique quadruplets. Since you're not using a set or checking duplicates, your result will contain duplicates.

✅ Corrected Version
Here’s a corrected and optimized version of your code:

class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        vector<vector<int>> res;
        int n = nums.size();
        if (n < 4) return res;

        sort(nums.begin(), nums.end());

        for (int i = 0; i < n - 3; ++i) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;  // skip duplicates for i
            for (int j = i + 1; j < n - 2; ++j) {
                if (j > i + 1 && nums[j] == nums[j - 1]) continue;  // skip duplicates for j

                int left = j + 1, right = n - 1;
                while (left < right) {
                    long long sum = (long long)nums[i] + nums[j] + nums[left] + nums[right];
                    if (sum < target) {
                        ++left;
                    } else if (sum > target) {
                        --right;
                    } else {
                        res.push_back({nums[i], nums[j], nums[left], nums[right]});
                        ++left;
                        --right;
                        while (left < right && nums[left] == nums[left - 1]) ++left; // skip duplicates
                        while (left < right && nums[right] == nums[right + 1]) --right; // skip duplicates
                    }
                }
            }
        }

        return res;
    }
};
🔧 Key Fixes & Optimizations
Issue	Fix
Duplicate quadruplets	Skip duplicates with if conditions
Invalid loop bounds	Ensure indices i < j < left < right
Integer overflow	Use long long for sum
Redundant quadruplets	Avoid them by checking neighbors
✅ Example Usage
vector<int> nums = {1, 0, -1, 0, -2, 2};
int target = 0;
Solution sol;
auto result = sol.fourSum(nums, target);
// Expected: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Let me know if you want a kSum generalization version too!



Attach

Search

Study

Voice
No file chosenNo file chosen
ChatGPT can make mistakes. Check important info.
ChatGPT says: The provided C++ code is an attempt to solve the **4Sum** problem using a **brute-force** plus two-pointer approach. However, **there are several logical and performance issues** that make the solution **incorrect and inefficient**. --- ## 🔍 Problem with the Code ### ❌ 1. **Duplicate Tuples Are Not Skipped** You are not skipping over duplicate values of `a`, `b`, `c`, and `d`, which leads to repeated quadruplets in the result. --- ### ❌ 2. **Invalid Loop for `b`** You're starting `b` from `0`, which can be **equal to `a`**, leading to **using the same index twice** in a quadruplet. That violates the condition that you need four **distinct** indices `a < b < c < d`. --- ### ❌ 3. **`int` Overflow Risk** The sum `nums[a] + nums[b] + nums[c] + nums[d]` can overflow `int` if the input contains large values. You should use `long long` or cast the sum to `long` to be safe. --- ### ❌ 4. **Missing Sorted Result / No Duplicate Removal** Leetcode (and similar platforms) require you to return **unique** quadruplets. Since you're not using a set or checking duplicates, your result will contain duplicates. --- ## ✅ Corrected Version Here’s a corrected and optimized version of your code: ```cpp class Solution { public: vector<vector<int>> fourSum(vector<int>& nums, int target) { vector<vector<int>> res; int n = nums.size(); if (n < 4) return res; sort(nums.begin(), nums.end()); for (int i = 0; i < n - 3; ++i) { if (i > 0 && nums[i] == nums[i - 1]) continue; // skip duplicates for i for (int j = i + 1; j < n - 2; ++j) { if (j > i + 1 && nums[j] == nums[j - 1]) continue; // skip duplicates for j int left = j + 1, right = n - 1; while (left < right) { long long sum = (long long)nums[i] + nums[j] + nums[left] + nums[right]; if (sum < target) { ++left; } else if (sum > target) { --right; } else { res.push_back({nums[i], nums[j], nums[left], nums[right]}); ++left; --right; while (left < right && nums[left] == nums[left - 1]) ++left; // skip duplicates while (left < right && nums[right] == nums[right + 1]) --right; // skip duplicates } } } } return res; } }; ``` --- ## 🔧 Key Fixes & Optimizations | Issue | Fix | |------|-----| | Duplicate quadruplets | Skip duplicates with `if` conditions | | Invalid loop bounds | Ensure indices `i < j < left < right` | | Integer overflow | Use `long long` for sum | | Redundant quadruplets | Avoid them by checking neighbors | --- ## ✅ Example Usage ```cpp vector<int> nums = {1, 0, -1, 0, -2, 2}; int target = 0; Solution sol; auto result = sol.fourSum(nums, target); // Expected: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]] ``` Let me know if you want a **kSum** generalization version too!