import HashTable from "../HashTable";

describe("hashtable", () => {
	it("should set and get a value into a hashtable", () => {
		const hashTable = new HashTable();
		hashTable.set("keyboards", 10);
		hashTable.set("monitors", 12);
		hashTable.set("mouses", 15);
		hashTable.set("pendrives", 20);

		expect(hashTable.get("keyboards")).toBe(10);
		expect(hashTable.get("monitors")).toBe(12);
		expect(hashTable.get("mouses")).toBe(15);
		expect(hashTable.get("pendrives")).toBe(20);
		expect(hashTable.get("laptops")).toBe(undefined);
	});

	it("should get the keys of a hashtable", () => {
		const hashTable = new HashTable();
		hashTable.set("keyboards", 10);
		hashTable.set("monitors", 12);
		hashTable.set("mouses", 15);
		hashTable.set("pendrives", 20);

		expect(hashTable.keys().sort()).toEqual(
			["keyboards", "monitors", "mouses", "pendrives"].sort()
		);
	});
});
