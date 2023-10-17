//Adding depth to DS//
//eg DOM , Descision trees
// nodes, edge (connection between two nodes), root nodes ,subtree,leaf(without any childnodes), path,distance
// A unidirectional , non-linear data structure with edges that connect vertices(nodes).
//      There is a root node and there are no cycles(loops).

/**
 * Node -- A structure that contains a value 
 * Edge -- A connection between two nodes 
 * Root node -- The top-most node in the tree
 * Sub tree -- A nested tree
 * Leaf -- A node without any child node 
 * Path -- A sequence of nodes and edges that connect two nodes
 * Distance -- the number of edges between two nodes.
 * Parent/child -- two nodes directly connected nodes , parent nodes is "above" child node 
 * Ancestor / descendent -- Two nodes that are connected by multiple parent-child paths
 * Sibling -- Two adjacent nodes with same parents
 * Degree -- the number of child nodes of a given nodes
 * Level  -- the distance between a node and a root node 
 * Depth  -- Maximum level in a tree 
 * Breath -- The number of leaves in a tree
 * Size   -- Total number of nodes 
 */

class Node{
    constructor(value,parentNode=null){
        this.children=[];
        this.parent=parentNode;
        this.value=value;
    }
    addNode(value){
        const node = new Node(value,this)
        this.children.push(node);
        return {node,index:this.children.length-1};
    }
    removeNode(index){
        this.children.splice(index,1)
    }
}
class Tree {
    constructor(rootValue){
        this.root= new Node(rootValue)
    }
}


const fileSystem=new Tree("/");
const documentNode = fileSystem.root.addNode("documents");
const gamesNode= fileSystem.root.addNode("games");
documentNode.node.addNode("results.txt");
gamesNode.node.addNode("cod.exe")

console.log(fileSystem);

