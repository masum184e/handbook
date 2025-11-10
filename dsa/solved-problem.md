❌ Problem:

In this line:

if(mp[target - nums[i]]) {


You're checking whether the key target - nums[i] exists in the map. But this condition is not reliable, because:

If target - nums[i] is not in the map, mp[...] inserts that key into the map with a default value of 0, which is not what you want.

If the index of a valid matching number is 0, the condition becomes if (0), which is false in C++, even though it should be valid.

✅ Solution:

Use .find() to check for the existence of the key without inserting anything:

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int, int> mp;
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if (mp.find(complement) != mp.end()) {
                return {i, mp[complement]};
            }
            mp[nums[i]] = i;
        }
        return {};
    }
};

🔍 Explanation:

mp[nums[i]] = i; stores the number and its index.

For each number, check if the complement (target - nums[i]) exists in the map.

If it does, return the current index and the index of the complement.

🧠 Bonus Tip:

If you use unordered_map<int, int> instead of map<int, int>, the time complexity becomes O(n) instead of O(n log n) due to constant-time average lookup.