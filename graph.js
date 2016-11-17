"use strict";

class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(value) {
    this.nodes.push({
      value: value,
      lines: []
    })
  }

  find(value) {
    return this.nodes.find(function(node) {
      return node.value === value;
    })
  }

  addLine(startVal, endVal) {
    var startNode = this.find(startVal);
    var endNode = this.find(endVal);

    if (!startNode || !endNode) {
      throw new Error('both nodes need to exist!');
    }

    startNode.lines.push(endNode)
  }
}

console.log('Graph implementation in JS:');
var graph = new Graph();

graph.addNode('vahid');
graph.addNode('saeed');
graph.addNode('megan');

graph.addLine('vahid', 'megan');
graph.addLine('vahid', 'saeed');
console.log('graph: ', graph);
console.log('vahids nodes: ', graph.find('vahid'));
console.log('mengas nodes: ', graph.find('megan'));
