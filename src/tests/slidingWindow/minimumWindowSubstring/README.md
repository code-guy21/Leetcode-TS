# Minimum Window Substring

## 📝 Problem Link

[LeetCode - 76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)

## 💡 Problem Statement

Given two strings `s` and `t`, return the minimum window substring of `s` that contains all characters in `t` in any order. If there is no such substring, return the empty string "".

### Constraints:

- Both strings can be empty
- `s` and `t` consist of uppercase and lowercase English letters
- Characters in `t` may appear more than once
- String lengths: 1 ≤ s.length, t.length ≤ 105
- Answer is guaranteed to be unique if it exists

## 🔍 Examples

```typescript
// Example 1: Basic Case
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: Minimum window containing all characters A, B, and C

// Example 2: Single Character Match
Input: s = "a", t = "a"
Output: "a"
Explanation: Entire string is the minimum window

// Example 3: No Valid Window
Input: s = "a", t = "aa"
Output: ""
Explanation: Cannot find window containing two 'a' characters
```

## 🛠️ Approach

### Solution Overview

Use a sliding window approach with two frequency maps:

1. Track required character frequencies from string t
2. Track current window character frequencies from string s

### Detailed Steps

1. Create frequency map for target string t
2. Initialize sliding window (left, right) and counters
3. Expand window right until all required characters are found
4. Contract window from left while maintaining required characters
5. Update minimum window when valid window is found
6. Repeat steps 3-5 until end of string

### Visual Explanation

```
String s: "ADOBECODEBANC", t: "ABC"

Step 1: Window [A] -> incomplete, missing B,C
        ADOBECODEBANC
        ^
Step 2: Window [ADOBEC] -> complete, try to minimize
        ADOBECODEBANC
        ^^^^^^
Step 3: Window [DOBEC] -> incomplete, missing A
        ADOBECODEBANC
         ^^^^^
Step 4: Window [BANC] -> complete, smallest so far
        ADOBECODEBANC
                 ^^^^
```

## ⚙️ Implementation Details

### TypeScript Solution

```typescript
function minWindow(s: string, t: string): string {
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
	let minWindow: [number, number, number] = [Infinity, 0, 0];
	let left = 0;

	// Slide the window
	for (let right = 0; right < s.length; right++) {
		const rightChar = s[right];
		windowChars.set(rightChar, (windowChars.get(rightChar) || 0) + 1);

		if (
			requiredChars.has(rightChar) &&
			windowChars.get(rightChar) === requiredChars.get(rightChar)
		) {
			matchedChars++;
		}

		while (matchedChars === requiredUniqueChars) {
			const windowLength = right - left + 1;
			if (windowLength < minWindow[0]) {
				minWindow = [windowLength, left, right];
			}

			const leftChar = s[left];
			windowChars.set(leftChar, windowChars.get(leftChar)! - 1);

			if (
				requiredChars.has(leftChar) &&
				windowChars.get(leftChar)! < requiredChars.get(leftChar)!
			) {
				matchedChars--;
			}

			left++;
		}
	}

	const [length, start, end] = minWindow;
	return length === Infinity ? '' : s.substring(start, end + 1);
}
```

### Edge Cases

- Empty strings (s or t)
- Single character strings
- t longer than s
- All characters same
- No valid window exists
- Multiple valid windows
- Repeated characters in t
- Case-sensitive matches

## ⭐️ Complexity Analysis

### Time Complexity: O(|S| + |T|)

- One-time O(|T|) to build frequency map
- Single pass through s with sliding window
- Window operations are O(1) with Map

### Space Complexity: O(|S| + |T|)

- O(|T|) for required characters map
- O(|S|) for window characters map
- Additional O(1) for pointers and counters

## 🎯 Follow-up Questions

1. How would you handle very large strings efficiently?

   - Consider chunked processing
   - Use more space-efficient data structures
   - Implement streaming solution

2. What if we need all minimum windows?

   - Modify to store all windows of minimum length
   - Increases space complexity
   - Consider using generator pattern

3. Can we optimize for specific character sets?
   - Use fixed-size array for ASCII
   - Reduces space complexity to O(1)
   - Less flexible but more efficient

## 📝 Notes

- Keep track of matched character counts carefully
- Consider using Maps for flexibility with any character set
- Handle edge cases explicitly
- Frequency matching is crucial for repeated characters

## 🔗 Related Problems

- Longest Substring Without Repeating Characters
- Longest Substring with At Most K Distinct Characters
- Longest Repeating Character Replacement
- Permutation in String
