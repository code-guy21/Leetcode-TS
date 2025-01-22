# Valid Anagram

## 📝 Problem Link

[LeetCode - 242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)

## 💡 Problem Statement

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Constraints:

- `1 <= s.length, t.length <= 5 * 10^4`
- `s` and `t` consist of lowercase English letters
- Each string contains only lowercase English letters (a-z)

## 🔍 Examples

```typescript
// Example 1: Valid Anagram
Input: s = "anagram", t = "nagaram"
Output: true
Explanation: Both strings use same letters same number of times

// Example 2: Invalid Anagram
Input: s = "rat", t = "car"
Output: false
Explanation: Different letters used

// Example 3: Same Letters Different Count
Input: s = "aacc", t = "ccac"
Output: false
Explanation: Same letters but different frequencies
```

## 🛠️ Approach

### Solution Overview

Use a fixed-size array to count character frequencies, taking advantage of the constraint that only lowercase letters are used.

### Detailed Steps

1. Early return if lengths differ or strings are identical
2. Create a counting array for 26 lowercase letters
3. Iterate through both strings simultaneously:
   - Increment count for chars in s
   - Decrement count for chars in t
4. Check if all counts are zero

### Visual Explanation

```
String 1: "anagram"
String 2: "nagaram"

Character Counts Array:
Index:  0  1  2 ... 13 14 ... 25
        a  b  c     n  o     z
Count:  0  0  0 ...  0  0 ... 0

After processing:
- 'a': +1 (from s) then -1 (from t) = 0
- 'n': +1 (from s) then -1 (from t) = 0
...and so on

If all counts are 0, strings are anagrams
```

## ⚙️ Implementation Details

### TypeScript Solution

```typescript
function isAnagram(s: string, t: string): boolean {
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
```

### Edge Cases

- Empty strings
- Single character strings
- Identical strings
- Strings with same letters but different counts
- Strings with all same character
- Different length strings

## ⭐️ Complexity Analysis

### Time Complexity: O(n)

- Single pass through both strings
- Fixed-size array check is O(1) as it's always 26

### Space Complexity: O(1)

- Fixed size array (26 elements)
- Space usage doesn't grow with input size
- Uses Int32Array for memory efficiency

## 🎯 Follow-up Questions

1. What if the inputs contain Unicode characters?

   - Use Map instead of fixed array
   - Space complexity becomes O(k) where k is unique chars

2. Can you solve it without using extra space?

   - Sort both strings and compare
   - O(n log n) time but O(1) extra space
   - Not recommended due to time trade-off

3. What if we need to handle case-insensitive anagrams?
   - Convert to lowercase before processing
   - Rest of logic remains same

## 📝 Notes

- Early return for identical strings improves performance
- Fixed array approach is optimal for given constraints
- Consider using Map for Unicode/extended character sets

## 🔗 Related Problems

- Group Anagrams
- Find All Anagrams in a String
- Permutation in String
- Sort Characters By Frequency
