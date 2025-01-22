export function isAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) {
		return false;
	}

	const charCount = new Int32Array(26);
	const aCode = 'a'.charCodeAt(0);

	for (let i = 0; i < s.length; i++) {
		charCount[s.charCodeAt(i) - aCode]!++;
		charCount[t.charCodeAt(i) - aCode]!--;
	}

	for (let count of charCount) {
		if (count !== 0) {
			return false;
		}
	}

	return true;
}
