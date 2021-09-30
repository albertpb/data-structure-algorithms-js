import Node from "./Node";

export default class LinkedList {
	length: number;
	head: Node | null;
	tail: Node | null;

	constructor(value: unknown = undefined) {
		if (value === undefined) {
			this.head = null;
			this.tail = null;
			this.length = 0;
		} else {
			const newNode = new Node(value);
			this.head = newNode;
			this.tail = this.head;
			this.length = 1;
		}
	}

	// add element to the end of linked list
	push(value: unknown): LinkedList {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	// remove element from the end of linked list
	pop(): Node | undefined {
		if (!this.head) return undefined;

		let temp = this.head;
		let pre = this.head;

		while (temp.next) {
			pre = temp;
			temp = temp.next;
		}

		this.tail = pre;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return temp;
	}

	// Add node to the start of the linked list
	unshift(value: unknown): LinkedList {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	// remove element from start of linked list
	shift(): Node | undefined {
		if (!this.head) {
			return undefined;
		}
		const temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return temp;
	}

	// get a node at a given index
	get(index: number): Node | undefined {
		if (index < 0 || index >= this.length) {
			return undefined;
		}

		let temp = this.head;
		for (let i = 0; i < index; i++) {
			temp = temp.next;
		}
		return temp;
	}

	// set a value at an index
	set(index: number, value: unknown): boolean {
		const temp = this.get(index);
		if (temp) {
			temp.value = value;
			return true;
		}
		return false;
	}

	// insert a node with a value at a given index
	insert(index: number, value: unknown): LinkedList | false {
		if (index === 0) {
			return this.unshift(value);
		}
		if (index === this.length) {
			return this.push(value);
		}

		if (index < 0 || index >= this.length) return false;

		const newNode = new Node(value);
		const temp = this.get(index - 1);
		newNode.next = temp.next;
		temp.next = newNode;
		this.length++;
		return this;
	}

	// remove a node at a given index
	remove(index: number): Node | undefined {
		if (index === 0) {
			return this.shift();
		}

		if (this.length === index) {
			return this.pop();
		}

		if (index < 0 || index >= this.length) return undefined;

		const before = this.get(index - 1);
		const temp = before.next;
		before.next = temp.next;
		temp.next = null;
		this.length--;
		return temp;
	}

	// reverse
	reverse(): LinkedList {
		let temp = this.head;
		this.head = this.tail;
		this.tail = temp;
		let next = temp.next;
		let prev = null;
		for (let i = 0; i < this.length; i++) {
			next = temp.next;
			temp.next = prev;
			prev = temp;
			temp = next;
		}
		return this;
	}

	static fromArray(arr: Array<unknown>): LinkedList {
		const newLinkedList = new LinkedList();
		for (let i = 0; i < arr.length; i++) {
			newLinkedList.push(arr[i]);
		}
		return newLinkedList;
	}
}
