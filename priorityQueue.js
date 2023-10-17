class Node{
    constructor(value,priority){
        this.value=value;
        this.next=null;
        this.priority=priority
    }
}

class PriorityQueue {
    constructor(){
        this.first=null;
    }
    insert(value,priority){
        const newNode= new Node(value,priority);
        if(!this.first || priority>this.first.priority){
            newNode.next = this.first;
            this.first= newNode;
        }else{
            let currentNode= this.first;
            while(currentNode.next && priority<currentNode.next.priority){
                currentNode=currentNode.next
            }
            newNode.next = currentNode.next;
            currentNode.next= newNode;
        }
    }
    process(){
        const firstItem = this.first;
        this.first=this.first.next;
        return firstItem

    }
}

const queue= new PriorityQueue();
queue.insert('cleanup room',1);
queue.insert(10,99);
queue.insert('Learn to code',101);


console.log("**process",queue.process());
// console.log("**process",queue.process());

console.log(queue);


// Time complexity 
    // Insert --> O(N)
            //--> Object(1) if first item
    // Process --> O(1)

// Time complexity with heaps based priority queue.

      // Insert --> O(logn)
     // Process --> O(logn)