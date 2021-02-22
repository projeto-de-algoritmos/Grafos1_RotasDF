
// DFS(G)
//      Para todo v em G
//          Se v nao visitado entao
//              DFS-Visit(G,v)
// DFS-Visit(G,v)
//      Marque v como visitado
//      Para todo w em Adj(v)
//          Se w nao visitado entao
//              Insira aresta (v,w) na árvore
//              DFS-Visit(G,w)

const Graph = require("../classes/graph");
const routes = require("../data/citiesRoutes");


function Enqueue(queue, element) {
  queue.push(element); 
}
function Dequeue(queue) {
  return queue.shift(); 
}

let visitedCities = [];
let citiesQueue = []; // fila de nos

// BFS(graph, 'Taguatinga');
function DFS(graph, root, end) {
  citiesQueue = [];
  visitedCities  = [];
  Enqueue(visitedCities, root);
  Enqueue(citiesQueue, root);
    

  DFSVisit(graph, root, end);
  return citiesQueue;  
};

function DFSVisit(graph, current, end) {
  let currentNode = graph._nodes.find(node =>  // nos conectados com o no corente
    node._label === current
  );  
  // console.log(currentNode);
  let neighborCities = []; 

  currentNode._edges.map(edge => {
    neighborCities.push(edge._destination._label); 
  });
  // console.log(current);

  for (const neighborCity of neighborCities) {
    // console.log(neighborCity);  

    if(neighborCity === end){
      Enqueue(citiesQueue, neighborCity);
      return true;
    }
    if(visitedCities.find(city => // se a cidade vizinha nao tiver sido visitada
    city === neighborCity) === undefined) {
      Enqueue(visitedCities, neighborCity);
      Enqueue(citiesQueue, neighborCity);
      let temp = routes.find(route => // buscar nos dados qual caminho vai de uma cidade a outra
        route[0] === current & route[1] === neighborCity |
        route[1] === current & route[0] === neighborCity
      )
      
      if(DFSVisit(graph, neighborCity, end)) return true;
    }
  }
  Dequeue(citiesQueue);
  return false;
}


module.exports = DFS;