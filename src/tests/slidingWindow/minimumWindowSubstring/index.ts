export function minWindow(s: string, t: string): string {
	// Handle edge cases
	if (t === '') return '';
	if (t.length > s.length) return '';

	// Build frequency map of characters in t
	const requiredChars = new Map<string, number>();
	for (const char of t) {
		requiredChars.set(char, (requiredChars.get(char) || 0) + 1);
	}

	// Initialize sliding window variables
	const windowChars = new Map<string, number>();
	let matchedChars = 0;
	const requiredUniqueChars = requiredChars.size;

	// Result tracking: [windowLength, startIndex, endIndex]
	let minWindow: [number, number, number] = [Infinity, 0, 0];
	let left = 0;

	// Slide the window
	for (let right = 0; right < s.length; right++) {
		// Add right character to window count
		const rightChar = s[right]!;
		windowChars.set(rightChar, (windowChars.get(rightChar) || 0) + 1);

		// Check if we've matched a required character count
		if (
			requiredChars.has(rightChar) &&
			windowChars.get(rightChar) === requiredChars.get(rightChar)
		) {
			matchedChars++;
		}

		// Try to minimize window while maintaining all required characters
		while (matchedChars === requiredUniqueChars) {
			// Update minimum window if current is smaller
			const windowLength = right - left + 1;
			if (windowLength < minWindow[0]) {
				minWindow = [windowLength, left, right];
			}

			// Remove left character from window
			const leftChar = s[left]!;
			windowChars.set(leftChar, windowChars.get(leftChar)! - 1);

			// Check if we've broken a required character match
			if (
				requiredChars.has(leftChar) &&
				windowChars.get(leftChar)! < requiredChars.get(leftChar)!
			) {
				matchedChars--;
			}

			left++;
		}
	}

	// Return the minimum window substring or empty string if none found
	const [length, start, end] = minWindow;
	return length === Infinity ? '' : s.substring(start, end + 1);
}
