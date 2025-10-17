#include <bits/stdc++.h>
using namespace std;
#define int long long int

class Node{
    public:
        int data;
        Node *next;
    Node(){
        data = 0;
        next = NULL;
    }
    Node(int data){
        this->data = data;
        this->next = NULL;
    }
};

Node *insertAtEnd(Node *head, int data){
    Node *newNode = new Node(data);
    if(head == NULL) return newNode; // NOTE IT DOWN
    Node *current = head;

    while(current->next != NULL){
        current=current->next;
    }

    current->next=newNode;

    return head;
}

Node *insertAtFront(Node *head, int data) {
    Node *newNode = new Node(data);
    newNode->next = head;
    return newNode;
}

Node *insertSorted(Node *head, int data) {
    Node *newNode = new Node(data);
    if(head == NULL) return newNode; // NOTE IT DOWN
    Node *current = head;

    while(current->next != NULL && current->next->data <= data){
        current=current->next;
        // cout<<current<<endl;
    }
    newNode->next=current->next->next;
    current->next=newNode;

    return head;
}

Node *removeNode(Node *head, int data) {
    Node *newNode = new Node(data);
    if(head == NULL) return newNode; // NOTE IT DOWN
    Node *current = head;

    while(current->next != NULL && current->data != data ){
        current=current->next;
    }

    current=current->next->next;

    return head;
}
void iterativeDisplay(Node *head){
    Node *current = head;

    // cout<<"Iterative: ";
    while(current != NULL){
        cout<<current<<" | "<<current->next<<" | "<<current->data<<endl;
        // cout<<current->data<<" ";
        current=current->next;
    }
    cout<<endl;
}

void forwardRecursiveDisplay(Node *head){
    if(head==NULL)return;
    // cout<<head<<" | "<<head->next<<" | "<<head->data<<endl;
    cout<<head->data<<" ";
    forwardRecursiveDisplay(head->next);
}

void backwardRecursiveDisplay(Node *head){
    if(head==NULL)return;
    backwardRecursiveDisplay(head->next);
    // cout<<head<<" | "<<head->next<<" | "<<head->data<<endl;
    cout<<head->data<<" ";
}

int sum(Node* head){
    if(head==NULL)return 0;
    return head->data + sum(head->next);
}

int mx(Node* head){
    if(head==NULL)return 0;
    return max(head->data, mx(head->next));
}


    ListNode* middleNode(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;

        while(slow && fast && fast->next){
            slow = slow->next;
            fast = fast->next->next;
        }
        return slow;
    }

     bool hasCycle(ListNode *head) {
        ListNode* slow = head;
        ListNode* fast = head;

        while(slow && fast && fast->next){
            slow = slow->next;
            fast = fast->next->next;
            if(slow == fast)return true;
        }
return false;

    }
    
int32_t main(){

    Node *head = new Node(1);
    head = insertAtEnd(head, 2);
    head = insertAtEnd(head, 3);
    head = insertAtEnd(head, 4);
    head = insertAtEnd(head, 7);
    head = insertSorted(head, 6);
    head = insertSorted(head, 5);
    head = removeNode(head, 3);
    // Node* head = insertAtFront(NULL, 10);
    // head = insertAtFront(head, 10);

    iterativeDisplay(head);
    // cout<<"Forward Recursive: ";forwardRecursiveDisplay(head);cout<<endl;
    // cout<<"Backward Recursive: ";backwardRecursiveDisplay(head);cout<<endl;
    // cout<<"Sum: "<<sum(head)<<endl;
    // cout<<"Max: "<<mx(head)<<endl;

    return 0;
}