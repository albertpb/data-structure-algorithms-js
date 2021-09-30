import Node from "./Node";

export default class Stack {
	top: Node | null;
	length: number;

	constructor(value: unknown = undefined) {
		if (value === undefined) {
			this.length = 0;
			this.top = null;
		} else {
			const newNode = new Node(value);
			this.top = newNode;
			this.length = 1;
		}
	}

	push(value: unknown): Stack {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.top = newNode;
		} else {
			newNode.next = this.top;
			this.top = newNode;
		}
		this.length++;
		return this;
	}

	pop(): Node {
		if (this.length === 0) {
			return undefined;
		}

		const temp = this.top;
		this.top = this.top.next;
		temp.next = null;
		this.length--;
		return temp;
	}
}
