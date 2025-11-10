Skip to content
You said:
what's wrng here class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int i, j, k, n = nums.size();
        vector<vector<int>> vec;
        for(i = 0; i < n; i++){
            j = i + 1;
            k = n - 1;

            while(j<k){
                int sum = nums[i] + nums[j] + nums[k];
                if(sum > 0 ) k--;
                else if(sum < 0) j++;
                else {
                    vec.push_back({nums[i], nums[j], nums[k]});
                    j++;
                }
            }
        }
        return vec;
    }
};
ChatGPT said:
Your code is a solid attempt at solving the 3Sum problem (i.e., finding all unique triplets in an array that sum to zero). However, it’s missing critical logic to avoid duplicate triplets, which will lead to incorrect or redundant results when the input contains duplicates.

✅ What's good:
Sorting the array first: ✅

Using the two-pointer approach: ✅

Overall structure is correct: ✅

❌ What's wrong:
No check to skip duplicates for i:

You must skip over duplicate values of nums[i] to avoid duplicate triplets.

Without this, you may consider the same triplet multiple times.

No check to skip duplicates for j and k:

After finding a valid triplet, you should move j and k to the next different values to avoid adding the same triplet again.

✅ Corrected Code:
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int n = nums.size();
        vector<vector<int>> vec;

        for(int i = 0; i < n - 2; i++) {
            // Skip duplicate nums[i]
            if(i > 0 && nums[i] == nums[i - 1]) continue;

            int j = i + 1, k = n - 1;
            while(j < k) {
                int sum = nums[i] + nums[j] + nums[k];
                if(sum > 0) {
                    k--;
                } else if(sum < 0) {
                    j++;
                } else {
                    vec.push_back({nums[i], nums[j], nums[k]});
                    j++;
                    k--;

                    // Skip duplicate nums[j]
                    while(j < k && nums[j] == nums[j - 1]) j++;
                    // Skip duplicate nums[k]
                    while(j < k && nums[k] == nums[k + 1]) k--;
                }
            }
        }
        return vec;
    }
};
Example:
Input: [-1, 0, 1, 2, -1, -4]
Output: [[-1, -1, 2], [-1, 0, 1]]

Let me know if you’d like an explanation of the logic behind the duplicate skipping!



Attach

Search

Study

Voice
No file chosenNo file chosen
ChatGPT can make mistakes. Check important info.
