const Graph = require('./classes/graph');
const cities = require('./data/cities');
const routes = require('./data/citiesRoutes');
const BFS = require('./searchs/BFS');
const DFS = require('./searchs/DFS');

const express = require('express');
const app = express();
app.use(express.json());

const graph = new Graph();

cities.forEach(city => {
    graph.addNode(city[0], city[1], city[2]);
});
routes.forEach(route => {
    graph.addEdge(route[0], route[1], route[2]);
});



app.post('/', (req, res) => {
    const {origem, destino} = req.body;
    let subGraph = BFS(graph, origem, destino);
    // taguaGraph.showGraph();
    let answer = DFS(subGraph, destino, origem)
    return res.json({caminho : answer});
})

app.listen(8000, () => console.log(""))