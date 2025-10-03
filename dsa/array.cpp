#include <bits/stdc++.h>
using namespace std;
#define int long long int

vector<int> merge(vector<int> a, vector<int> b){
   int x = a.size();
   int y = b.size();

   vector<int> arr(x+y);

   int p, q, r;
   p=q=r=0;
   while(p<x && q<y){
    if(a[p]>b[q]){
        arr[r]=b[q];
        q++;
    }else{
        arr[r]=a[p];
        p++;        
    }
    r++;
   }

while(p<x){
        arr[r]=a[p];
        r++;
        p++;
}
while(q<x){
        arr[r]=b[q];
        r++;
        q++;
}

   return arr;
}

int32_t main(){

    // vector<int> arr1={1, 3, 5, 7, 9};
    // vector<int> arr2={2, 4, 6, 8};
    // vector<int> mrg=merge(arr1, arr2);
    
    for(auto a: mrg){
        cout<<a<<endl;
    }

    return 0;
}