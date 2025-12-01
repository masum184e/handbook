#include <bits/stdc++.h>
using namespace std;
#define int long long int

class Node{
    public:
        int data;
        Node *next;
        Node *prev;
    Node(){
        data = 0;
        next = NULL;
        prev = NULL;
    }
    Node(int data){
        this->data = data;
        this->next = NULL;
        this->prev = NULL;
    }
};

void forwardRecursiveDisplay(Node *head){
    if(head==NULL)return;
    // cout<<head<<" | "<<head->next<<" | "<<head->data<<endl;
    cout<<head->prev<<" | "<<head->data<<" | "<<head<<" | "<<head->next<<endl;
    forwardRecursiveDisplay(head->next);
}

void backwardRecursiveDisplay(Node *head){
    if(head==NULL)return;
    backwardRecursiveDisplay(head->next);
    // cout<<head<<" | "<<head->next<<" | "<<head->data<<endl;
    cout<<head->data<<" ";
}


Node *insertAtEnd(Node *head, int data){
    Node *newNode = new Node(data);
    if(head == NULL) return newNode; // NOTE IT DOWN
    Node *current = head;

    while(current->next != NULL){
        current=current->next;
    }

    newNode->prev = current;
    current->next = newNode;

    return head;
}

Node *insertAtPos(Node *head, int p, int data) {// 0 - based index
    Node *newNode = new Node(data);
    if(head == NULL) return newNode; // NOTE IT DOWN
    Node *current = head;

    if(p==0){
        head->prev = newNode;
        newNode->next = head;
        return newNode;
    }
    while(current->next != NULL && p--){
        current=current->next;
    }
    newNode->prev = current;
    newNode->next = current->next;

    current->next = newNode;
    
    return head;
}

int32_t main(){
    
    Node *head = new Node(3);
    head = insertAtEnd(head, 4);
    head = insertAtEnd(head, 5);
    head = insertAtEnd(head, 6);
    head = insertAtEnd(head, 7);
    head = insertAtPos(head, 0, 0);
    head = insertAtPos(head, 1, 1);
    head = insertAtPos(head, 2, 2);
    head = insertAtPos(head, 10, 10);

    // cout<<"Forward Recursive: ";
    cout<<endl;
    forwardRecursiveDisplay(head);cout<<endl;
    // cout<<"Backward Recursive: ";backwardRecursiveDisplay(head);cout<<endl;

    return 0;
}