import Stack from "../Stack";

describe("Stack", () => {
	it("should instanciate a stack", () => {
		const stack = new Stack(10);
		expect(stack.top.value).toBe(10);

		const emptyStack = new Stack();
		expect(emptyStack.length).toBe(0);
		expect(emptyStack.top).toBe(null);
	});

	it("should push a value into the stack", () => {
		const stack = new Stack(5);
		stack.push(10);
		expect(stack.length).toBe(2);
		expect(stack.top.value).toBe(10);
		expect(stack.top.next.value).toBe(5);

		const emptyStack = new Stack();
		emptyStack.push(5);
		expect(emptyStack.length).toBe(1);
		expect(emptyStack.top.value).toBe(5);
	});

	it("should pop a node from the stack", () => {
		const stack = new Stack(5);
		stack.push(10);
		stack.push(15);
		let node = stack.pop();
		expect(node.value).toBe(15);
		expect(stack.length).toBe(2);
		expect(stack.top.value).toBe(10);
		node = stack.pop();
		expect(node.value).toBe(10);
		expect(stack.length).toBe(1);
		expect(stack.top.value).toBe(5);
		node = stack.pop();
		expect(node.value).toBe(5);
		expect(stack.length).toBe(0);
		expect(stack.top).toBe(null);
	});
});
