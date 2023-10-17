//Link list does not just know its value but has the reference to next link.//
//every element knows the next element 

// Enhance the built in data structor 

//Insertion at beginning and end is very efficient ok ?

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

const linked= new LinkList()
linked.append("newValue")
linked.append("newValue2")
linked.append("max")
linked.append("max")
linked.append("newValue3")

linked.insertAfter("xxxxxxxx","newValue")

console.log(linked.find("max"))

linked.prepend("firstOnList")
linked.delete("max")

console.log(linked.toArray())



// Array vs LinkedList 
    // insertion at beginning will be fast in linkedList.
    //                     LinkedList  Arrays 
    // Element Access --     O(n)       O(1)
    // Insertion at end --   O(1)|O(n)  O(1)
    // Insertion at beggining O(1) .    O(n)
    // Insertion at middle    SearchTime + O(1) .  O(n)
    // Search Elements        O(n) .    O(n)