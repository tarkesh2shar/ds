// A simplified Array (eg Kafka) 
// FIRST IN FIRST OUT (FIFO)

class Queue{
    constructor(){
        this.items=[];
    }
    enqueue(value){
        this.items.unshift(value);
    }
    dequeue(){
        return this.items.pop();
    }
    isEmpty(){
        return this.items.length===0;
    }
    toArray(){
        return this.items.slice();
    }
}


const queue = new Queue();
queue.enqueue("max");
queue.enqueue("manu");
queue.enqueue("jack");

console.log(queue.toArray());


console.log(queue.dequeue())

console.log(queue.toArray());
console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue.toArray());
