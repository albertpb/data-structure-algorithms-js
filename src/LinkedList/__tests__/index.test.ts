import LinkedList from "../LinkedList";

describe("LinkedList", () => {
	it("should instanciate a linked list", () => {
		let linkedList = new LinkedList();
		expect(linkedList.length).toBe(0);
		expect(linkedList.head).toBe(null);
		expect(linkedList.tail).toBe(null);

		linkedList = new LinkedList(5);
		expect(linkedList.length).toBe(1);
		expect(linkedList.head.next).toBe(null);
		expect(linkedList.head.value).toBe(5);
	});

	it("should push a node into a linked list", () => {
		const linkedList = new LinkedList();
		linkedList.push(1);
		expect(linkedList.length).toBe(1);
		expect(linkedList.head.value).toBe(1);
		expect(linkedList.tail.value).toBe(1);
	});

	it("should pop and element from a linked list", () => {
		const linkedList = new LinkedList();
		linkedList.push(5);
		linkedList.push(10);
		let temp = linkedList.pop();
		expect(temp.value).toBe(10);
		expect(temp.next).toBe(null);
		expect(linkedList.length).toBe(1);
		expect(linkedList.head.value).toBe(5);
		temp = linkedList.pop();
		expect(temp.value).toBe(5);
		expect(temp.next).toBe(null);
		expect(linkedList.head).toBe(null);
		expect(linkedList.tail).toBe(null);
		expect(linkedList.length).toBe(0);
	});

	it("should unshift an element into a linked list", () => {
		let linkedList = new LinkedList();
		linkedList.unshift(5);
		expect(linkedList.length).toBe(1);
		expect(linkedList.head.value).toBe(5);
		expect(linkedList.tail.next).toBe(null);

		linkedList = new LinkedList(10);
		linkedList.push(20);
		linkedList.unshift(15);
		expect(linkedList.length).toBe(3);
		expect(linkedList.head.value).toBe(15);
		expect(linkedList.tail.value).toBe(20);
		expect(linkedList.head.next.value).toBe(10);
	});

	it("should shift an element from a linked list", () => {
		const linkedList = new LinkedList(5);
		linkedList.push(10);
		let temp = linkedList.shift();
		expect(temp.value).toBe(5);
		expect(temp.next).toBe(null);
		expect(linkedList.length).toBe(1);
		expect(linkedList.head.value).toBe(10);
		expect(linkedList.tail.value).toBe(10);
		temp = linkedList.shift();
		expect(temp.value).toBe(10);
		expect(temp.next).toBe(null);
		expect(linkedList.length).toBe(0);
		expect(linkedList.head).toBe(null);
		expect(linkedList.tail).toBe(null);
	});

	it("should return a node at a given index in a linked list", () => {
		const linkedList = new LinkedList(0);
		linkedList.push(1);
		linkedList.push(2);
		linkedList.push(3);
		expect(linkedList.get(-1)).toBe(undefined);
		expect(linkedList.get(10)).toBe(undefined);
		expect(linkedList.get(0).value).toBe(0);
		expect(linkedList.get(1).value).toBe(1);
		expect(linkedList.get(2).value).toBe(2);
		expect(linkedList.get(3).value).toBe(3);
	});

	it("should set a value at a given index in a linked list", () => {
		const linkedList = new LinkedList(0);
		linkedList.push(1);
		linkedList.push(2);
		linkedList.push(3);
		let temp = linkedList.set(2, 15);
		expect(temp).toBe(true);
		expect(linkedList.get(2).value).toBe(15);
		temp = linkedList.set(20, 10);
		expect(temp).toBe(false);
	});

	it("should insert a value in a linked list", () => {
		const linkedList = new LinkedList(0);
		linkedList.push(2);
		let temp = linkedList.insert(1, 1);

		expect(temp instanceof LinkedList).toBe(true);
		expect(linkedList.length).toBe(3);
		expect(linkedList.get(1).value).toBe(1);

		temp = linkedList.insert(10, 5);
		expect(temp).toBe(false);
	});

	it("should remove an element in a linked list", () => {
		const linkedList = new LinkedList(11);
		linkedList.push(3);
		linkedList.push(23);
		linkedList.push(4);

		let temp = linkedList.remove(10);
		expect(temp).toBe(undefined);
		temp = linkedList.remove(-2);
		expect(temp).toBe(undefined);

		temp = linkedList.remove(1);
		expect(temp.value).toBe(3);
		expect(temp.next).toBe(null);
		expect(linkedList.length).toBe(3);
		expect(linkedList.get(1).value).toBe(23);
	});

	it("should reverse a linked list", () => {
		const linkedList = new LinkedList(5);
		linkedList.push(10);
		linkedList.push(15);

		linkedList.reverse();
		expect(linkedList.head.value).toBe(15);
		expect(linkedList.head.next.value).toBe(10);
		expect(linkedList.head.next.next.value).toBe(5);
	});

	it("should create a linked list from array", () => {
		const array = [1, 2, 3, 4, 5];
		const linkedList = LinkedList.fromArray(array);
		expect(linkedList.length).toBe(5);
		let node = linkedList.head;
		for (let i = 0; i < linkedList.length; i++) {
			expect(node.value).toBe(array[i]);
			node = node.next;
		}
	});
});
