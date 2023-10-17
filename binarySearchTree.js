// Tree for sorted data.
// Only max 2 child nodes.
// left child node is smaller than parent.
// right child node is greator than parents.



class Node {
    constructor(value){
        this.value= value;
        this.left=null;
        this.right=null;
        this.parent=null;
    }
    add(value){
        if(this.value===null){
            this.value=value;
            return;
        }
        if(this.value<value){
            if(this.right){
                this.right.add(value)
                return;
            }
            const newNode = new Node(value);
            newNode.parent=this;
            this.right=newNode;
            return;
        }
        if(this.value>value){
            if(this.left){
                this.left.add(value)
                return;
            }
            const newNode = new Node(value);
            newNode.parent=this;
            this.left=newNode;
            return;
        }
    }
    remove(value){
        const identifiedNode= this.find(value);
        if(!identifiedNode){
            throw new Error("Could not find node with that value");
        }
        if(!identifiedNode.left && !identifiedNode.right){
            const identifiedParent= identifiedNode.parent;
            identifiedParent.removeChild(identifiedNode);
            return;
        }
        if(identifiedNode.left && identifiedNode.right){
            const nextBiggerNode = identifiedNode.right.findNext();
            if(nextBiggerNode.value !== identifiedNode.right.value){
                this.remove(nextBiggerNode.value);
                identifiedNode.value=nextBiggerNode.value;
                // identifiedNode.left.parent=identifiedNode;
                // identifiedNode.right.parent=identifiedNode;
            }else{
                identifiedNode.value =identifiedNode.right.value;
                identifiedNode.right = identifiedNode.right.right;
                // identifiedNode.left.parent=identifiedNode;
                // identifiedNode.right.parent=identifiedNode;
            }
        }else{
            const childNode = identifiedNode.left || identifiedNode.right;
            identifiedNode.left=childNode.left;
            identifiedNode.right=childNode.right;
            identifiedNode.value=childNode.value;
        }
        if(identifiedNode.left){
            identifiedNode.left.parent=identifiedNode;
        }
        if(identifiedNode.right){
            identifiedNode.right.parent=identifiedNode;
        }

    }
    removeChild(node){
        if(this.left && this.left===node){
            this.left=null;
            return;
        }
        if(this.right && this.right===node){
            this.right=null;
            return;
        }

    }
    findNext(){
        if(!this.left){
            return this;
        }
        return this.left.firstNext()
    }
    find(value){
        if(this.value===value){
            return this;
        };
        if(this.value<value && this.right){
          return  this.right.find(value)
        }
        if(this.value>value && this.left){
            return  this.left.find(value)
          }
    }
}
class BST{
    constructor(){
        this.root= new Node(null);
    }
    add(value){
        this.root.add(value);
    }
    remove(value){
        this.root.remove(value)
    }
    find(value){
       return this.root.find(value);
    }

}

const tree = new BST();


tree.add(10)
tree.add(4)
tree.add(5)
tree.add(2)
tree.add(6)
tree.add(11)
tree.add(9)
tree.add(23)
tree.add(1)
tree.add(17)
tree.remove(17)

console.log("**tree",tree);