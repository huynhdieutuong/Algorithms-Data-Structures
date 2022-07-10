export type NeighborType = {
  node: string
  weight: number
}

export class WeightedGraph {
  adjacencyList: {
    [vertex: string]: NeighborType[]
  }
  Dijkstra: (start: string, finish: string) => string[]

  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(vertex1: string, vertex2: string, weight: number) {
    this.addVertex(vertex1)
    this.addVertex(vertex2)
    if (this.adjacencyList[vertex1].findIndex((v) => v.node === vertex2) === -1) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight })
      this.adjacencyList[vertex2].push({ node: vertex1, weight })
    }
  }

  removeEdge(vertex1: string, vertex2: string) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v.node !== vertex2)
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v.node !== vertex1)
    }
  }

  removeVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) return
    for (const neighbor of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, neighbor.node)
    }
    delete this.adjacencyList[vertex]
  }
}
