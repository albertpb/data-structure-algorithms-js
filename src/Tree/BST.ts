import Node from "./Node";

export default class BST {
	root: Node | null;

	constructor() {
		this.root = null;
	}

	insert(value: number): BST | undefined {
		const newNode = new Node(value);

		if (this.root === null) {
			this.root = newNode;
			return this;
		}

		let temp = this.root;
		while (true) {
			if (newNode.value === temp.value) {
				return undefined;
			}

			if (newNode.value < temp.value) {
				if (temp.left === null) {
					temp.left = newNode;
					return this;
				}
				temp = temp.left;
			} else {
				if (temp.right === null) {
					temp.right = newNode;
					return this;
				}
				temp = temp.right;
			}
		}
	}

	contains(value: number): boolean {
		if (this.root === null) return false;

		let temp = this.root;
		while (temp) {
			if (value < temp.value) {
				temp = temp.left;
			} else if (value > temp.value) {
				temp = temp.right;
			} else {
				return true;
			}
		}
		return false;
	}

	remove(value: number): BST | undefined {
		if (this.root === null) {
			return undefined;
		}

		let parent = this.root;
		let temp = this.root;
		while (true) {
			// found
			if (value === temp.value) {
				// no childs
				if (temp.left === null && temp.right === null) {
					if (parent.left === temp) {
						parent.left = null;
					} else {
						parent.right = null;
					}
				}
				// one child
				else if (temp.left === null || temp.right === null) {
					if(parent.left === temp) {
						if(temp.left !== null) {
							parent.left = temp.left;
						} else {
							parent.right = temp
						}
					} else {
						
					}
				}
			}

			parent = temp;
			if (value < temp.value) {
				temp = temp.left;
			} else {
				temp = temp.right;
			}
		}
	}
}
