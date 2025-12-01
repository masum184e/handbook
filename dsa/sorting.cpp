#include <bits/stdc++.h>
using namespace std;
#define int long long int

void selectionSort(vector<int>& nums){
    int n = nums.size();
    for(int i = 0; i < n - 1; i++){
        int mnI = i ;
        for(int j = i + 1; j < n; j++){
            if(nums[mnI]>nums[j]){
                mnI = j;
            }
        }
        if(i!=mnI){
            swap(nums[mnI], nums[i]);
        }
    }
}

void insertionSort(vector<int>& nums){
    int n = nums.size();
    for(int i = 1; i < n; i++){
        int j = i - 1; 
        while(j>=0 && nums[j]<nums[i]){
            j--;
        }
        swap(nums[j], nums[i]);
    }
}

int32_t main(){

    vector<int> nums = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
    // cout<<"Bubble Sort: ";bubbleSort(nums);for(auto i: nums)cout<<i<<" ";cout<<endl;
    
    nums = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
    cout<<"Selection Sort: ";selectionSort(nums);for(auto i: nums)cout<<i<<" ";cout<<endl;

    nums = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
    cout<<"Insertion Sort: ";insertionSort(nums);for(auto i: nums)cout<<i<<" ";cout<<endl;

    return 0;
}