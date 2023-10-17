class LinkList{
    constructor(){
        this.head=null; // First Element 
        this.tail=null; // Last Element 
    }
    append(value){
        const newNode = {value,next:null}
        if(!this.head){
            this.head= newNode;
        }
        if(this.tail){
        this.tail.next=newNode;
        }
        this.tail=newNode;

    }
    toArray(){
        let elemArray=[];
        let currNode= this.head;
        while(currNode){
            elemArray.push(currNode);
            currNode=currNode.next;
        }
        return elemArray;
    }
    prepend(value){
        let currentHead=this.head;
        let newNode= {value,next:currentHead};
        this.head=newNode;
        if(!this.tail){
            this.tail= newNode;
        }
    }
    delete(value){
        if(!this.head){
            return;
        }
        while(this.head && this.head.value===value){ // if two nodes from start has same value
            this.head= this.head.next
        }
        let currNode= this.head;
        while(currNode.next){
            if(currNode.next.value===value){
                currNode.next= currNode.next.next;
            }else{
                currNode=currNode.next
            }
        }
        if(this.tail.value===value){ //last node to be deleted
            this.tail=currNode;
        }
    }
    deleteHead(){
        if(!this.head){
            return null;
        }
        const deleteItem=this.head;


        if(this.head.next){
            this.head= this.head.next
        }else{
            this.head=null;
            this.tail=null;
        }
        
        return deleteItem
    }
    find(value){
        if(!this.head){
            return;
        }
        let currNode= this.head;
        while(currNode){
            if(currNode.value===value){
                return currNode;
            }
            currNode=currNode.next;
        }
    }
    insertAfter(value,afterValue){
        const existingNode=this.find(afterValue);
        if(existingNode){
            const newNode= {value,next:existingNode.next};
            existingNode.next=newNode;
        }


    }
}

class LinkedStack{
    constructor(){
        this.list = new LinkList();
    }
    push(value){
        this.list.prepend(value)
    }
    pop(){
      return  this.list.deleteHead()
    }
    isEmpty(){
        return  !this.list.head;
    }
    toArray(){
       return  this.list.toArray()
    }
}

const stack= new LinkedStack();
stack.push("Mangoes");
stack.push("Bananas");
stack.push("Oranges");

console.log(stack.toArray());

console.log((stack.pop()));

console.log(stack.toArray());

console.log((stack.pop()));
console.log((stack.pop()));

console.log(stack.toArray());