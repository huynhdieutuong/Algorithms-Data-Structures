class Graph {
  adjacencyList: { [vertex: string]: string[] }

  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(vertex1: string, vertex2: string) {
    this.addVertex(vertex1)
    this.addVertex(vertex2)
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  removeEdge(vertex1: string, vertex2: string) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2)
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1)
    }
  }

  removeVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) return
    for (const v of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, v)
    }
    delete this.adjacencyList[vertex]
  }
}

const graph = new Graph()
graph.addEdge('Tokyo', 'Dallas')
graph.addEdge('Tokyo', 'Hong Kong')
graph.addEdge('Aspen', 'Hong Kong')
graph.addEdge('Tokyo', 'Los Angeles')
graph.addEdge('Dallas', 'Los Angeles')
graph.addEdge('Dallas', 'Hong Kong')
graph.addEdge('Aspen', 'Los Angeles')
// {
//   'Tokyo': ['Dallas', 'Hong Kong', 'Los Angeles'],
//   'Dallas': ['Tokyo', 'Los Angeles', 'Hong Kong'],
//   'Hong Kong': ['Tokyo', 'Aspen', 'Dallas'],
//   'Aspen': ['Hong Kong', 'Los Angeles'],
//   'Los Angeles': ['Tokyo', 'Dallas', 'Aspen'],
// }

export default Graph
