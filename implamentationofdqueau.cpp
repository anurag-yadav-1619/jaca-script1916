#include <iostream>
using namespace std;

int dq[5];
int front = -1;
int rear = -1;

void insertFront(int value) {
    if (front == 0) {
        cout << "Cannot insert at front" << endl;
    }
    else if (front == -1) {
        front = rear = 0;
        dq[front] = value;
    }
    else {
        front--;
        dq[front] = value;
    }
}

void insertRear(int value) {
    if (rear == 4) {
        cout << "Deque is Full" << endl;
    }
    else if (front == -1) {
        front = rear = 0;
        dq[rear] = value;
    }
    else {
        rear++;
        dq[rear] = value;
    }
}

void deleteFront() {
    if (front == -1) {
        cout << "Deque is Empty" << endl;
    }
    else {
        cout << "Deleted: " << dq[front] << endl;

        if (front == rear)
            front = rear = -1;
        else
            front++;
    }
}

void deleteRear() {
    if (front == -1) {
        cout << "Deque is Empty" << endl;
    }
    else {
        cout << "Deleted: " << dq[rear] << endl;

        if (front == rear)
            front = rear = -1;
        else
            rear--;
    }
}

void display() {
    if (front == -1) {
        cout << "Deque is Empty" << endl;
    }
    else {
        cout << "Deque: ";

        for (int i = front; i <= rear; i++) {
            cout << dq[i] << " ";
        }

        cout << endl;
    }
}

int main() {
    int choice, value;

    do {
        cout << "\n1. Insert Front";
        cout << "\n2. Insert Rear";
        cout << "\n3. Delete Front";
        cout << "\n4. Delete Rear";
        cout << "\n5. Display";
        cout << "\n6. Exit";

        cout << "\nEnter choice: ";
        cin >> choice;

        switch (choice) {

        case 1:
            cout << "Enter value: ";
            cin >> value;
            insertFront(value);
            break;

        case 2:
            cout << "Enter value: ";
            cin >> value;
            insertRear(value);
            break;

        case 3:
            deleteFront();
            break;

        case 4:
            deleteRear();
            break;

        case 5:
            display();
            break;

        case 6:
            cout << "Program ended";
            break;

        default:
            cout << "Invalid choice";
        }

    } while (choice != 6);

    return 0;
}