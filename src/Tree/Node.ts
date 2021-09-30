export default class Node {
	value: unknown;
	left: Node | null;
	right: Node | null;

	constructor(value: number) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
