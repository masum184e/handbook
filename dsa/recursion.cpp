#include <bits/stdc++.h>
using namespace std;
#define int long long int
int power(int a, int b){
    if(b<=0)return 1;
    return a*power(a, b-1);
}
int ncr(int n, int r){
    if(r<=0 || r>n)return 1;
    return (n/((n-r)*r))*ncr(n, r-1);
}
int32_t main(){
    cout<<power(2, 3)<<endl;
    cout<<ncr(5, 4)<<endl;
    return 0;
}