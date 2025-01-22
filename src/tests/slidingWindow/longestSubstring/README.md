# Longest Substring Without Repeating Characters

## 📝 Problem Link

[LeetCode - 3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## 💡 Problem Statement

Given a string `s`, find the length of the longest substring without repeating characters.

### Constraints:

- String can be empty
- String can contain any characters (including spaces)
- Characters are case-sensitive ('a' and 'A' are different characters)
- String length can be 0 to 5 \* 10^4
- String consists of English letters, digits, symbols and spaces

## 🔍 Examples

```typescript
// Example 1: Basic Case
Input: s = "abcabcbb"
Output: 3
Explanation: "abc" is the longest substring without repeats

// Example 2: Same Character Repeated
Input: s = "bbbbb"
Output: 1
Explanation: "b" is the longest substring without repeats

// Example 3: Repeats with Unique Substring
Input: s = "pwwkew"
Output: 3
Explanation: "wke" is the longest substring without repeats
```

## 🛠️ Approach

### Solution Overview

Use a sliding window approach with a Map to track character positions, enabling quick jumps when duplicates are found.

### Detailed Steps

1. Initialize sliding window pointers (start, end) and Map for last seen positions
2. For each character in string:
   - If character seen after start pointer, jump start to position after last occurrence
   - Update character's last seen position
   - Update max length if current window is larger
3. Return maximum length found

### Visual Explanation

```
String: "abcabcbb"
Step 1: "a" -> window [a], length = 1
Step 2: "ab" -> window [ab], length = 2
Step 3: "abc" -> window [abc], length = 3
Step 4: "abca" -> found 'a', jump to position after first 'a'
        window [bca], length = 3
Step 5: "abcab" -> found 'b', jump to position after first 'b'
        window [cab], length = 3
...and so on
```

## ⚙️ Implementation Details

### TypeScript Solution

```typescript
function lengthOfLongestSubstring(s: string): number {
	let start = 0;
	let maxLength = 0;
	const seen = new Map<string, number>();

	for (let end = 0; end < s.length; end++) {
		const char = s[end]!;
		if (seen.has(char) && seen.get(char)! >= start) {
			start = seen.get(char)! + 1;
		}
		seen.set(char, end);
		maxLength = Math.max(maxLength, end - start + 1);
	}

	return maxLength;
}
```

### Edge Cases

- Empty string
- String with single character
- String with all same characters
- String with spaces
- String with special characters
- Palindrome strings
- Non-consecutive repeating characters

## ⭐️ Complexity Analysis

### Time Complexity: O(n)

- Single pass through the string
- Map operations (get/set) are O(1)

### Space Complexity: O(min(m, n))

- m is size of the character set
- n is the length of the string
- Map stores at most min(m, n) characters

## 🎯 Follow-up Questions

1. Can you solve it with constant space for a fixed character set?

   - Use array/object of fixed size for ASCII characters
   - Space becomes O(1) but less flexible

2. What if we need the actual substring instead of length?

   - Track start/end positions of max substring
   - Return s.substring(maxStart, maxEnd + 1)

3. What if we want all substrings without repeating characters?
   - Similar approach but store all valid substrings
   - Much higher space complexity
   - Consider using generator pattern for memory efficiency

## 📝 Notes

- Map approach is optimal for general case
- Using object instead of Map possible for known character set
- Consider case sensitivity requirements
- Space complexity can be optimized for known character sets

## 🔗 Related Problems

- Longest Repeating Character Replacement
- Longest Substring with At Most K Distinct Characters
- Longest Substring with At Most Two Distinct Characters
- Minimum Window Substring
