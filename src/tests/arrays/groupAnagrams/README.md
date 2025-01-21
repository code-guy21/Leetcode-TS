# Group Anagrams

## 📝 Problem Link

[LeetCode - 49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)

## 💡 Problem Statement

Given an array of strings `strs`, group the anagrams together and return the answer in any order. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all original letters exactly once.

### Constraints:

- 1 <= strs.length <= 104
- 0 <= strs[i].length <= 100
- strs[i] consists of lowercase English letters
- All inputs are valid strings

## 🔍 Examples

```typescript
// Example 1: Multiple anagram groups
Input: strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
Output: [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];

// Example 2: Single string
Input: strs = [''];
Output: [['']];

// Example 3: No anagrams
Input: strs = ['a'];
Output: [['a']];

// Example 4: Duplicate words
Input: strs = ['aaa', 'aaa'];
Output: [['aaa', 'aaa']];
```

## 🛠️ Approach

### Solution Overview

Use character counting with a Uint8Array to create unique keys for anagram groups, storing them in a Map for efficient grouping.

### Detailed Steps

1. Create a Map to store anagram groups
2. For each string:
   - Create a character count array (Uint8Array)
   - Convert count array to string key
   - Add string to corresponding group in Map
3. Return all groups as array

### Visual Explanation

```
Input: ["eat", "tea", "tan"]

Step 1: "eat"
- Count: [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0]
- Key: "1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0"
- Map: { key → ["eat"] }

Step 2: "tea"
- Count: [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0]
- Same key as "eat"
- Map: { key → ["eat", "tea"] }

Step 3: "tan"
- Count: [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0]
- Different key
- Map: {
    key1 → ["eat", "tea"],
    key2 → ["tan"]
  }
```

## ⚙️ Implementation Details

### TypeScript Solution

```typescript
function groupAnagrams(strs: string[]): string[][] {
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
```

### Edge Cases

- Empty strings
- Single character strings
- Duplicate words
- Strings of different lengths
- All unique strings (no anagrams)

## ⭐️ Complexity Analysis

### Time Complexity: O(N \* K)

- N = number of strings
- K = maximum length of any string
- Each string requires O(K) to generate its key

### Space Complexity: O(N \* K)

- Storing all strings in groups
- Character count arrays are constant size (26)

## 🎯 Follow-up Questions

1. Can you solve it without using a Map?
   - Sort each string as key (less efficient)
   - Use string-based character counting
2. How would you handle Unicode characters?
   - Modify character counting approach
   - Consider using Map for character counts
3. What if strings are very large but have few unique characters?
   - Use sparse array or Map for counting
   - Consider compression techniques

## 📝 Notes

- Uint8Array provides efficient character counting
- Join character counts with delimiter to avoid collisions
- Consider input validation for production code
- Map is ideal for grouping with complex keys

## 🔗 Related Problems

- Valid Anagram
- Find All Anagrams in a String
- Count Anagrams
- Minimum Number of Steps to Make Two Strings Anagram
