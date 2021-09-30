export default class Node {
	value: unknown;
	next: Node | null;
	prev: Node | null;

	constructor(value: unknown) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}
