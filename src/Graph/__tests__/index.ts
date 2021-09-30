import Graph from "../Graph";

describe("graph", () => {
	it("should add vertexs and edges", () => {
		const graph = new Graph();
		graph.addVertex("A");
		graph.addVertex("B");
		graph.addEdge("A", "B");
		expect(graph.hasVertex("A")).toBe(true);
		expect(graph.hasVertex("B")).toBe(true);
		expect(graph.hasEdge("A", "B")).toBe(true);
	});

	it("should remove vertexs and edges", () => {
		const graph = new Graph();
		graph.addVertex("A");
		graph.addVertex("B");
		graph.addEdge("A", "B");

		graph.removeVertex("A");
		expect(graph.hasVertex("A")).toBe(false);
		expect(graph.hasEdge("A", "B")).toBe(false);
	});
});
