
// for every vertex s of G not explored yet
//    do Enqueue(S,s);
//    mark vertex s as visited
//    while S is not empty do
//        u ← Dequeue(S);
//        For each v in Adj[u] then
//            if v is unexplored then
//                mark edge (v,u) as tree edge
//                mark vertex v as visited
//                Enqueue(S,v)

const Graph = require("../classes/graph");
const routes = require("../data/citiesRoutes");
const cities = require('../data/cities');


function Enqueue(queue, element) {
  queue.push(element); 
}
function Dequeue(queue) {
  return queue.shift(); 
}


// BFS(graph, 'Taguatinga', 'Sobradinho');
function BFS(graph, root, end) {
  let treeGraph = new Graph;
  cities.forEach(city => {
    treeGraph.addNode(city[0], city[1], city[2]);
  });
  
  let citiesQueue = [root]; // fila de nos
  let visitedCities = [root];
  let currentCity; 
  
  while (citiesQueue.length != 0) {
    
    currentCity = Dequeue(citiesQueue);
    // console.log(currentCity);
    if(currentCity === end){
      console.log(cities)
    }

    let currentNode = graph._nodes.find(node =>  // nos conectados com o no corente
      node._label === currentCity
    );  
    // console.log(currentNode);

    let neighborCities = []; 

    currentNode._edges.map(edge => {
      neighborCities.push(edge._destination._label); 
    });
    // console.log(currentCity);

    for (const neighborCity of neighborCities) {
      // console.log(neighborCity);      
      if(visitedCities.find(city => // se a cidade vizinha nao tiver sido visitada
        city === neighborCity) === undefined) {
          Enqueue(visitedCities, neighborCity);
          Enqueue(citiesQueue, neighborCity);
          let temp = routes.find(route => // buscar nos dados qual caminho vai de uma cidade a outra
            route[0] === currentCity & route[1] === neighborCity |
            route[1] === currentCity & route[0] === neighborCity
          )
          treeGraph.addEdge(temp[0], temp[1], temp[2])
        }
    }
  }
  return treeGraph;  
};

module.exports = BFS;