import Node from "./Node";

export default class DoublyLinkedList {
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

	push(value: unknown): DoublyLinkedList {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop(): Node | undefined {
		if (!this.head) return undefined;
		const temp = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
			temp.prev = null;
		}
		this.length--;
		return temp;
	}

	unshift(value: unknown): DoublyLinkedList {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	shift(): Node | undefined {
		if (this.length === 0) return undefined;
		const temp = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.prev = null;
			temp.next = null;
		}
		this.length--;
		return temp;
	}

	get(index: number): Node | undefined {
		if (index < 0 || index >= this.length) return undefined;
		let temp = this.head;
		if (index < this.length / 2) {
			for (let i = 0; i < index; i++) {
				temp = temp.next;
			}
		} else {
			temp = this.tail;
			for (let i = this.length - 1; i > index; i--) {
				temp = temp.prev;
			}
		}
		return temp;
	}

	set(index: number, value: unknown): boolean {
		const temp = this.get(index);
		if (temp) {
			temp.value = value;
			return true;
		}
		return false;
	}

	insert(index: number, value: unknown): DoublyLinkedList | false {
		const newNode = new Node(value);
		if (index === 0) {
			return this.unshift(value);
		}
		if (index === this.length) {
			return this.push(value);
		}
		if (index < 0 || index > this.length) return false;

		const before = this.get(index - 1);
		const after = before.next;
		before.next = newNode;
		newNode.next = after;
		newNode.prev = before;
		after.prev = newNode;
		this.length++;
		return this;
	}

	remove(index: number): Node | undefined {
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		if (index < 0 || index > this.length) return undefined;

		const temp = this.get(index);

		temp.prev.next = temp.next;
		temp.next.prev = temp.prev;
		temp.next = null;
		temp.prev = null;

		this.length--;
		return temp;
	}
}
