import Node from "./Node";

export default class Queue {
	first: Node | null;
	last: Node | null;
	length: number;

	constructor(value: unknown = null) {
		if (value === null) {
			this.first = null;
			this.last = null;
			this.length = 0;
		} else {
			const newNode = new Node(value);
			this.first = newNode;
			this.last = newNode;
			this.length = 1;
		}
	}

	enqueue(value: unknown): Queue {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		this.length++;
		return this;
	}

	dequeue(): Node {
		if (this.length === 0) {
			return undefined;
		}
		const temp = this.first;

		if (this.length === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = this.first.next;
			temp.next = null;
		}
		this.length--;
		return temp;
	}
}
