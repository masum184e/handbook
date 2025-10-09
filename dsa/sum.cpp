#include <bits/stdc++.h>
using namespace std;
#define int long long int

vector<int> twoSum(vector<int>& nums, int target) {
    
}

void sortColors(vector<int>& nums) {
    int left, right, mid, n;
    n = nums.size();
    left = mid = 0;
    right = n - 1;

    while(mid<=right){
           for(auto i: nums){
    cout<<i<<" ";
   }cout<<endl;
        if(nums[left] == 2){
            swap(nums[left], nums[right]);
            right--;
        }else if(nums[left] == 0){
            left++;
            mid++;
        }else{
            swap(nums[left], nums[mid]);
            mid++;
        }
    }
}

int32_t main(){

    // vector<int> vec = {3, 2, 4};
    // vector<int> vec = {2,0,2,1,1,0};
    // vector<int> vec = {2, 0, 1};
    vector<int> vec = {2, 1};
    sortColors(vec);
    int target = 6;
    // vector<int> vec = {2, 7, 11, 15};
    // int target = 9;
   vector<int> res = twoSum(vec, target);
   for(auto i: vec){
    cout<<i<<" ";
   }
    

    return 0;
}