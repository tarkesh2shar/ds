// one child per character in alphabets
//evert child node has another 26 childs

class Node {
  constructor() {
    this.value = null;
    this.children = Array(26);
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(key, value) {
    let node = this.root;
    for (let index = 0; index < key.length; index++) {
      const alphabetIndex = key[index].charCodeAt(0) - 97;
      if (!node.children[alphabetIndex]) {
        const newNode = new Node();
        node.children[alphabetIndex] = newNode;
      }
      //   else{
      //     node=node.children[alphabetIndex]
      //   }
      node = node.children[alphabetIndex];
    }
    node.value = value;
  }
  find(key) {
    let node = this.root;
    for (let index = 0; index < key.length; index++) {
      const alphabetIndex = key[index].charCodeAt(0) - 97;
      if (!node.children[alphabetIndex]) {
        return false;
      }
      node = node.children[alphabetIndex];
    }
    if(node.value ===null){
        return false;
    }
    return node;
  }
  delete(key){
    const node = this.find(key);
    node.value=null
  }
}

const trie = new Trie();
trie.insert("age", 29);
trie.insert("name", "Tushar");
trie.insert("names", ["Tushar", "tarkesh2shar"]);

console.log(trie);
console.log(trie.find("age"));
console.log(trie.find("name"));
console.log(trie.find("names"));
trie.delete("name");
console.log(trie.find("name"));

