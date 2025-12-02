#include <bits/stdc++.h>
using namespace std;
#define int long long int


int32_t main(){

    vector<int> nums = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
    // cout<<"Bubble Sort: ";bubbleSort(nums);for(auto i: nums)cout<<i<<" ";cout<<endl;
    
    // nums = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
    // cout<<"Selection Sort: ";selectionSort(nums);for(auto i: nums)cout<<i<<" ";cout<<endl;

    // nums = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
    // cout<<"Insertion Sort: ";insertionSort(nums);for(auto i: nums)cout<<i<<" ";cout<<endl;

    nums = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
    cout<<"Merge Sort: ";mergeSort(nums, 0, nums.size());for(auto i: nums)cout<<i<<" ";cout<<endl;

    return 0;
}