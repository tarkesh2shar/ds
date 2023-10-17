class Hash{
    constructor(){
        this.size = 16;
        this.buckets= Array(this.size).fill(null).map(()=>[]);
    }
    hash(key){
        let hash = 0;
        for (const char of key) {
            hash+=char.charCodeAt(0)
        }
        return hash % this.size;
    }
    set(key,value){
        const keyHash=this.hash(key);
        const nestedArray=this.buckets[keyHash]
        const storedElement=this.buckets.find((element)=>{
            return element.key===key;
        })
        if(storedElement){
            storedElement.val=value;
        }else{
            nestedArray.push({key,val:value})
        }
    }
    get(key){
        const keyHash= this.hash(key);
        const nestedArray= this.buckets[keyHash];
        const storedElement= nestedArray.find((element)=>{
            return element.key ===key;
        })
        return storedElement;
    }
    showInfo(){
        for (const key in this.buckets) {
            if(this.buckets[key]!==null){
                console.log(key,this.buckets[key]);
            }
        }
    }
}

// solving key collisions ok 

const table1= new Hash();
table1.set("abc","1")
table1.set("abcd","3")
table1.set("abcde","4")
table1.showInfo()

// function findFirstRep(str){
//     const table= new Hash();
//     for (const char of str) {
//         if(table.get(char)){
//             return char;
//         }
//         table.set(char,1);
//     }
// }

// console.log(findFirstRep("hello"));
// console.log(findFirstRep("academind"));