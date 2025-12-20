class node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
    }
    //Method to append a new node and set it as the head if the list is empty
    appendAtHead(value) {
        let newNode = new node(value);
        if (this.head === null) {
            this.head = newNode;
        }
    }
    
    appendInBetween(value, position) {
        let newNode = new node(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        } //check if the list is empty

        let current = this.head;
        let count = 0; 
        while (this.head !== null && count < position - 1) {
            current = current.next;
            count++;
        }
        if (current === null) {
            console.log("Position out of bounds");
            return;
        }
        newNode.next = current.next;
        current.next = newNode;
    }

    appendAtEnd(value) {
        if (this.head === null) {
            this.head = new node(value);
            return;
        }
        let current = this.head;
        while(current.next !== null) {
            current = current.next;
            current.next = new node(value);
        }
    }
}

let userInput = prompt("Enter a value to append at the head:");
let linkedList = new LinkedList();
linkedList.appendAtHead(userInput);
console.log("Linked List after appending at head:", linkedList);

userInput = prompt("Enter a value to append in between at position 1:");
linkedList.appendInBetween(userInput, 1);
console.log("Linked List after appending in between:", linkedList);

userInput = prompt("Enter a value to append at the end:");
linkedList.appendAtEnd(userInput);
console.log("Linked List after appending at end:", linkedList);

// Function to display the linked list
LinkedList.prototype.display = function() {
    let current = this.head;
    let result = [];
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }
    return result;
}