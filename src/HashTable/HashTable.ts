export default class HashTable {
	dataMap: Array<Array<[string, unknown]>>;

	constructor(size = 7) {
		this.dataMap = new Array(size);
	}

	private _hash(key: string): number {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
		}
		return hash;
	}

	set(key: string, value: unknown): HashTable {
		const index = this._hash(key);
		if (!this.dataMap[index]) {
			this.dataMap[index] = [];
		}
		this.dataMap[index].push([key, value]);
		return this;
	}

	get(key: string): unknown | undefined {
		const index = this._hash(key);
		if (this.dataMap[index]) {
			for (let i = 0; i < this.dataMap[index].length; i++) {
				if (this.dataMap[index][i][0] === key) {
					return this.dataMap[index][i][1];
				}
			}
		}
		return undefined;
	}

	size(): number {
		return this.dataMap.length;
	}

	keys(): Array<string> {
		const allKeys = [];
		for (let i = 0; i < this.dataMap.length; i++) {
			if (this.dataMap[i]) {
				for (let j = 0; j < this.dataMap[i].length; j++) {
					allKeys.push(this.dataMap[i][j][0]);
				}
			}
		}
		return allKeys;
	}
}
