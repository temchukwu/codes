class Graph {
    constructor() {
        this.vertexs = [];
        this.edges = [];
        this.numberOfEdges = 0;
    }
    addVertex(vertex) {
        this.vertices.push(vertex);
        this.edges[vertex] = [];
    }
    removeVertex(vertex) {
        const index = this.vertices.indexOf(vertex);
        if (index >= 0) {
            this.vertices.splice(index, 1)
        }
        // while there are edges for this vertex
        while(this.edges[vertex].length) {
            const adjacentVertex = this.edges[vertex].pop();
            this.removeEdge(adjacentVertex, vertex);

        }
    }
    addEdges(vertex1, vertex2) {
        this.edges[vertex1].push(vertex2)
        this.edges[vertex2]/push(vertex1)
        this.numberOfEdges++;
    }
}
(function test() {
    console.log("test")
})()


 const units = [`max`, `manu`, `Julie`, `pro`];
  console.log(units[2]);
  console.log(units.length);
 // looping an array
 for (const el of units) {
     console.log(el);
     for (let el of units) {
         console.log(el);

     }
 }
units.push(`chika`);
console.log(units.length);
console.log(units.indexOf(`pro`));

const ids = new Set();
ids.add(`abc`);
ids.add(1);
ids.add(`abk`);
ids.add(45);
console.log(ids.has(`abc`));

let person = {
    name: `Boss`, 
    age: 21,
     hobbies: [`sports`, `cooking`, `travelling`]
    };
person.lastName = `Shama`;
console.log(person);
delete person.age;
console.log(person);
let myResult = Object.entries
console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(JSON.stringify(person));











