export default class Graph {
	adjacentList: Record<string, Array<string>>;

	constructor() {
		this.adjacentList = {};
	}

	addVertex(vertex: string): boolean {
		if (!this.adjacentList[vertex]) {
			this.adjacentList[vertex] = [];
			return true;
		}

		return false;
	}

	hasVertex(vertex: string): boolean {
		return !!this.adjacentList[vertex];
	}

	hasEdge(vertex1: string, vertex2: string): boolean {
		if (this.adjacentList[vertex1] && this.adjacentList[vertex2]) {
			if (
				this.adjacentList[vertex1].findIndex((v) => v === vertex2) >= 0 &&
				this.adjacentList[vertex2].findIndex((v) => v === vertex1) >= 0
			) {
				return true;
			}
		}

		return false;
	}

	addEdge(vertex1: string, vertex2: string): boolean {
		if (this.adjacentList[vertex1] && this.adjacentList[vertex2]) {
			this.adjacentList[vertex1].push(vertex2);
			this.adjacentList[vertex2].push(vertex1);
			return true;
		}

		return false;
	}

	removeEdge(vertex1: string, vertex2: string): boolean {
		if (this.adjacentList[vertex1] && this.adjacentList[vertex2]) {
			this.adjacentList[vertex1] = this.adjacentList[vertex1].filter(
				(v) => v !== vertex2
			);
			this.adjacentList[vertex2] = this.adjacentList[vertex2].filter(
				(v) => v !== vertex1
			);
			return true;
		}
		return false;
	}

	removeVertex(vertex: string): Graph | undefined {
		if (!this.adjacentList[vertex]) return undefined;

		while (this.adjacentList[vertex].length) {
			const temp = this.adjacentList[vertex].pop();
			this.removeEdge(vertex, temp);
		}
		delete this.adjacentList[vertex];
		return this;
	}
}
