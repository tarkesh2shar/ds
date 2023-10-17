// Simplified Array //
//  (LIFO) LAST IN FIRST OUT (FIRST COMPLETE)//
    // eg . CallStack .
// Push and POP 



class Stack {
    constructor(){
        this.items=[];
    }
    push(value){
        this.items.push(value)
    }
    pop(){
      return  this.items.pop()
    }
    isEmpty(){
        return this.items.length===0;
    }
    toArray(){
        return this.items.slice();
    }
}

