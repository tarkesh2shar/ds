class Node{
    constructor(value,parentNode=null){
        this.children=[];
        this.parent=parentNode;
        this.value=value;
    }
    addNode(value){
        const segments=value.split("/");
        if(segments.length===0){
            return;
        }
        if(segments.length===1){
            const node = new Node(segments[0],this)
            this.children.push(node);
            return {node,index:this.children.length-1};
        }

        const existingChildNode=this.children.find(child=>child.value===segments[0]);
        
        if(existingChildNode){
            existingChildNode.addNode(segments.slice(1).join("/"))
        }else{
            const node= new Node(segments[0],this)
            node.addNode(segments.slice(1).join("/"));
            this.children.push(node)
            return {node,index:this.children.length-1};
        }


    }
    removeNode(value){
        const segments =value.split("/");
        if(segments.length===0){
            return;
        }
        if(segments.length===1){
            const existingNodeIndex=this.children.findIndex(child=>child.value===segments[0]);
            if(existingNodeIndex<0){
                throw new Error("Could not find a matching path")
            }
            this.children.splice(existingNodeIndex,1);
        }
        if(segments.length>1){
            const existingChildNode=this.children.find(child=>child.value===segments[0]);
            if(!existingChildNode){
                throw new Error("Could not find a matching path ! Path segment" + segments[0])
            }
            existingChildNode.removeNode(segments.slice(1).join("/"));
        }

    }

    //self solved solution great awesome 
            // find(value){
            //     console.log("**find",this);
            //   if(this.children.length===0){
            //     if(this.value===value){
            //         return this;
            //     }
            //   }else{
            //     if(this.value===value){
            //         return this;
            //     }
            //     for (const child of this.children) {
            //        const foundItem = child.find(value)
            //        if(foundItem){
            //         return foundItem;
            //        }
                
            //     }
            //   }
            // }

    //depth-first
            // find(value){
            //     for (const child of this.children) {
            //         if(child.value===value){
            //             return child;
            //         }
            //         const nestedChildNode=child.find(value);
            //         if(nestedChildNode){
            //             return nestedChildNode;
            //         }
            //     }
            // }
    //breath-first 
    find(value){

        console.log("**this",this);

             for (const child of this.children) {
                    if(child.value===value){
                        return child;
                    }
                 
            }
            for (const child of this.children) {

                const nestedChildNode=child.find(value);
                if(nestedChildNode){
                    return nestedChildNode;
                } 
            }
    }




}
class Tree {
    constructor(rootValue){
        this.root= new Node(rootValue)
    }
    add(path){
        this.root.addNode(path)
    }
    remove(path){
        this.root.removeNode(path)
    }
    find(value){
        if(this.root.value===value){
            return this.root;
        }
       return this.root.find(value)
    }
}


const fileSystem=new Tree("/");
fileSystem.add("documents/personal/tax.docx");
fileSystem.add("games/cod.exe")
fileSystem.add("games/cod2.exe")
fileSystem.remove("games/cod.exe")
// fileSystem.remove("games/cod3.exe")
// fileSystem.remove("gameses/cod2.exe")


console.log(fileSystem.find("personal"));
// console.log(fileSystem.find("tax.docx"));
// console.log(fileSystem.find("documents"));
// console.log(fileSystem.find("/"));
// console.log(fileSystem.find("cod2.exe"));

// console.log(fileSystem);