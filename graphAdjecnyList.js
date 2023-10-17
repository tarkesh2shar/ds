class Graph {
  constructor() {
    this.nodes = {};
    this.edges = {};
  }
  addNode(id, value) {
    if(this.nodes[id]) {
        throw new Error("Node already exists !")
    }
    this.nodes[id] = value;
  }
  addEdge(startNode, endNode) {
    if(!this.nodes[startNode] || !this.nodes[endNode]){
        throw new Error("Start or end nodes doesnt exists")
    }
    if (this.edges[startNode] && this.edges[startNode].indexOf(endNode)=== -1) {
        this.edges[startNode].push(endNode)
    } else {
      this.edges[startNode] = [endNode];
    }
  }
  hasEdge(startNode,endNode){
    if(!this.edges[startNode]){
        return false
    }
   return  this.edges[startNode].indexOf(endNode) > -1
  }
  getAllEdges(node){
    return this.edges[node]
  }
  removeNode(id){
    this.nodes[id] = undefined;
    // this.edges[id] = undefined;
    Reflect.deleteProperty(this.edges,id)

    for (const edgeId in this.edges) {
        let i=0;
        for (const endNode of this.edges[edgeId]) {
            if(endNode=== id){
                this.edges[edgeId].splice(i,1)
                break;
            }
            i++;
        }
    }
  }
  removeEdge(startNode,endNode){
    if(!this.edges[startNode]){
        throw new Error('Edge doesnt exist!');
    }
    const nodeIndex= this.edges[startNode].indexOf(endNode);
    if(nodeIndex=== -1){
        throw new Error('Edge doesnt exist!');
    }
    this.edges[startNode].splice(nodeIndex,1)
  }
}



const graph= new Graph();

graph.addNode(1,"MAX");
graph.addNode(2,"Manual");
graph.addNode(3,"Jules");
// graph.addNode(1,"tushar")



graph.addEdge(1,2)
graph.addEdge(1,3)
graph.addEdge(3,2)

console.log(graph.hasEdge(1,2));
console.log(graph.hasEdge(3,4));

console.log(graph.getAllEdges(1));
console.log(graph.getAllEdges(3));

console.log(graph);
// graph.removeNode(2)
// graph.addEdge(4,5)
// graph.removeEdge(2,1)
graph.removeEdge(1,3)
console.log(graph);




