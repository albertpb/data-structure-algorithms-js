import Queue from "../Queue";

describe("Queue", () => {
	it("should instanciate a queue", () => {
		let queue = new Queue();
		expect(queue.length).toBe(0);
		expect(queue.first).toBe(null);
		expect(queue.last).toBe(null);

		queue = new Queue(5);
		expect(queue.length).toBe(1);
		expect(queue.first.value).toBe(5);
		expect(queue.last.value).toBe(5);
	});

	it("should enqueue a value into a queue", () => {
		const queue = new Queue(5);
		queue.enqueue(10);
		expect(queue.length).toBe(2);
		expect(queue.first.value).toBe(5);
		expect(queue.last.value).toBe(10);
	});

	it("should dequeue a value from a queue", () => {
		const queue = new Queue(10);
		queue.enqueue(20);
		let node = queue.dequeue();
		expect(node.value).toBe(10);
		expect(queue.length).toBe(1);
		node = queue.dequeue();
		expect(node.value).toBe(20);
		expect(queue.length).toBe(0);
	});
});
