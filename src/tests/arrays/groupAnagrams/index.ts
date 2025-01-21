export function groupAnagrams(strs: string[]): string[][] {
	let anagramMap = new Map<string, string[]>();
	let aCode = 'a'.charCodeAt(0);

	strs.forEach(word => {
		let key = new Uint8Array(26);

		for (let char of word) {
			key[char.charCodeAt(0) - aCode]!++;
		}

		let keyString = key.join('#');

		if (!anagramMap.has(keyString)) {
			anagramMap.set(keyString, []);
		}
		anagramMap.get(keyString)!.push(word);
	});

	return [...anagramMap.values()];
}
