import Graph from './adjacency-list'

class GraphTraversal extends Graph {
  result: string[]
  visited: { [vertex: string]: boolean }

  constructor() {
    super()
    this.result = []
    this.visited = {}
  }

  DFSRecursive(vertex: string) {
    this.depthFirstSearch(vertex)
    return this.result
  }

  private depthFirstSearch(vertex: string) {
    this.result.push(vertex)
    this.visited[vertex] = true

    this.adjacencyList[vertex].forEach((neighbor) => {
      if (!this.visited[neighbor]) this.depthFirstSearch(neighbor)
    })
  }

  DFSIterative(vertex: string) {
    const stack: string[] = [vertex]
    this.visited[vertex] = true

    while (stack.length) {
      console.log(stack)
      const removed = stack.pop()
      this.result.push(removed)

      this.adjacencyList[removed].forEach((neighbor) => {
        if (!this.visited[neighbor]) {
          stack.push(neighbor)
          this.visited[neighbor] = true
        }
      })
    }
    return this.result
  }

  BreadthFirstSearch(vertex: string) {
    const queue: string[] = [vertex]
    this.visited[vertex] = true

    while (queue.length) {
      console.log(queue)
      const removed = queue.shift()
      this.result.push(removed)

      this.adjacencyList[removed].forEach((neighbor) => {
        if (!this.visited[neighbor]) {
          queue.push(neighbor)
          this.visited[neighbor] = true
        }
      })
    }
    return this.result
  }
}

const graphTraversal = new GraphTraversal()
graphTraversal.addEdge('A', 'B')
graphTraversal.addEdge('A', 'C')
graphTraversal.addEdge('B', 'D')
graphTraversal.addEdge('C', 'E')
graphTraversal.addEdge('D', 'E')
graphTraversal.addEdge('D', 'F')
graphTraversal.addEdge('E', 'F')
// {
//   A: ['B', 'C'],
//   B: ['A', 'D'],
//   C: ['A', 'E'],
//   D: ['B', 'E', 'F'],
//   E: ['C', 'D', 'F'],
//   F: ['D', 'E'],
// }
//            A
//          /   \
//         B     C
//         |     |
//         D --- E
//          \   /
//            F

// console.log(graphTraversal.DFSRecursive('A')) // ['A', 'B', 'D', 'E', 'C', 'F']
// console.log(graphTraversal.DFSIterative('A')) // ['A', 'C', 'E', 'F', 'D', 'B']
// console.log(graphTraversal.BreadthFirstSearch('A')) // ['A', 'B', 'C', 'D', 'E', 'F']
