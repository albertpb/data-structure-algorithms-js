import DoublyLinkedList from "../DoublyLinkedList";

describe("test doubly linked list", () => {
	it("should instanciate a double linked list", () => {
		let doublyLinkedList = new DoublyLinkedList(1);
		expect(doublyLinkedList.head.value).toBe(1);

		doublyLinkedList = new DoublyLinkedList();
		expect(doublyLinkedList.head).toBe(null);
		expect(doublyLinkedList.tail).toBe(null);
	});

	it("should push a value into a doubly linked list", () => {
		const doublyLinkedList = new DoublyLinkedList();
		doublyLinkedList.push(1);

		expect(doublyLinkedList.length).toBe(1);
		expect(doublyLinkedList.head.value).toBe(1);
		expect(doublyLinkedList.tail.value).toBe(1);

		doublyLinkedList.push(5);
		expect(doublyLinkedList.length).toBe(2);
		expect(doublyLinkedList.head.next.value).toBe(5);
		expect(doublyLinkedList.tail.value).toBe(5);
	});

	it("should pop a value from a doubly linked list", () => {
		const doublyLinkedList = new DoublyLinkedList();
		doublyLinkedList.push(4);
		doublyLinkedList.push(2);
		let temp = doublyLinkedList.pop();

		expect(doublyLinkedList.length).toBe(1);
		expect(doublyLinkedList.head.value).toBe(4);
		expect(doublyLinkedList.tail.value).toBe(4);
		expect(temp.value).toBe(2);
		expect(temp.next).toBe(null);
		expect(temp.prev).toBe(null);

		temp = doublyLinkedList.pop();
		expect(doublyLinkedList.head).toBe(null);
		expect(doublyLinkedList.tail).toBe(null);
		expect(temp.value).toBe(4);
		expect(temp.next).toBe(null);
		expect(temp.prev).toBe(null);
	});

	it("should unshift a node from doubly linked list", () => {
		const doublyLinkedList = new DoublyLinkedList(5);
		doublyLinkedList.unshift(10);
		expect(doublyLinkedList.length).toBe(2);
		expect(doublyLinkedList.head.value).toBe(10);
		expect(doublyLinkedList.head.next.value).toBe(5);
	});

	it("should shift a node from doubly linked list", () => {
		const doublyLinkedList = new DoublyLinkedList(5);
		doublyLinkedList.push(10);
		doublyLinkedList.shift();
		expect(doublyLinkedList.length).toBe(1);
		expect(doublyLinkedList.head.value).toBe(10);
		doublyLinkedList.shift();
		expect(doublyLinkedList.head).toBe(null);
		expect(doublyLinkedList.tail).toBe(null);
		expect(doublyLinkedList.length).toBe(0);
	});

	it("should get a node from doubly linked list", () => {
		const doublyLinkedList = new DoublyLinkedList(5);
		doublyLinkedList.push(10).push(15).push(30);
		expect(doublyLinkedList.get(0).value).toBe(5);
		expect(doublyLinkedList.get(1).value).toBe(10);
		expect(doublyLinkedList.get(2).value).toBe(15);
		expect(doublyLinkedList.get(-2)).toBe(undefined);
		expect(doublyLinkedList.get(20)).toBe(undefined);
	});

	it("should set a value at a given index in a doubly linked list", () => {
		const doublyLinkedList = new DoublyLinkedList(10);
		doublyLinkedList.push(5).push(10).push(30);
		let temp = doublyLinkedList.set(1, 99);
		expect(temp).toBe(true);
		expect(doublyLinkedList.get(1).value).toBe(99);
		temp = doublyLinkedList.set(100, 9999);
		expect(temp).toBe(false);
		temp = doublyLinkedList.set(-10, 999);
		expect(temp).toBe(false);
	});

	it("should insert a node at a given index with a value into a doubly linked list", () => {
		const doublyLinkedList = new DoublyLinkedList();
		doublyLinkedList.insert(0, 10);
		expect(doublyLinkedList.length).toBe(1);
		expect(doublyLinkedList.head.value).toBe(10);
		doublyLinkedList.push(10).push(15).push(30);
		doublyLinkedList.insert(1, 99);
		expect(doublyLinkedList.length).toBe(5);
		expect(doublyLinkedList.get(1).value).toBe(99);
	});

	it("should remove a node at a given index in a doubly linked list", () => {
		const doublyLinkedList = new DoublyLinkedList(10);
		doublyLinkedList.push(5).push(15);
		let temp = doublyLinkedList.remove(0);
		expect(doublyLinkedList.length).toBe(2);
		expect(temp.value).toBe(10);
		temp = doublyLinkedList.remove(1);
		expect(doublyLinkedList.length).toBe(1);
		expect(temp.value).toBe(15);
		temp = doublyLinkedList.remove(0);
		expect(temp.value).toBe(5);
		expect(doublyLinkedList.length).toBe(0);
		expect(doublyLinkedList.head).toBe(null);
		expect(doublyLinkedList.tail).toBe(null);
		temp = doublyLinkedList.remove(-1);
		expect(temp).toBe(undefined);
		temp = doublyLinkedList.remove(1);
		expect(temp).toBe(undefined);
	});
});
