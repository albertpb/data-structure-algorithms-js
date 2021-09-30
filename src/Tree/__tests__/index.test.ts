import BST from "../BST";

describe("Binary search tree", () => {
	it("should insert a value into a BST", () => {
		const bst = new BST();
		bst.insert(47);
		expect(bst.root.value).toBe(47);
		bst.insert(21);
		expect(bst.root.left.value).toBe(21);
		bst.insert(76);
		expect(bst.root.right.value).toBe(76);
		bst.insert(18);
		expect(bst.root.left.left.value).toBe(18);
		bst.insert(52);
		expect(bst.root.right.left.value).toBe(52);
		bst.insert(82);
		expect(bst.root.right.right.value).toBe(82);
	});

	it("should check if contains a value in a BST", () => {
		const bst = new BST();
		bst.insert(47);
		bst.insert(21);
		bst.insert(76);
		bst.insert(18);
		bst.insert(52);
		bst.insert(82);

		expect(bst.contains(21)).toBe(true);
		expect(bst.contains(50)).toBe(false);
		expect(bst.contains(82)).toBe(true);
		expect(bst.contains(100)).toBe(false);
	});
});
