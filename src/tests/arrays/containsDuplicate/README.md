# Contains Duplicate

## 📝 Problem Link

[LeetCode - 217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)

## 💡 Problem Statement

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

### Constraints:

- Array can be empty
- Array can contain any valid integers
- No limit on how many times a number can appear
- Numbers can be negative or positive

## 🔍 Examples

```typescript
// Example 1: Basic Case with Duplicate
Input: nums = [1,2,3,1]
Output: true
Explanation: 1 appears twice

// Example 2: No Duplicates
Input: nums = [1,2,3,4]
Output: false
Explanation: All elements are distinct

// Example 3: Multiple Duplicates
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
Explanation: Both 1, 2, 3, and 4 appear multiple times
```

## 🛠️ Approach

### Solution Overview

Use a Set data structure to track seen numbers, providing O(1) lookup to check for duplicates.

### Detailed Steps

1. Create an empty Set to store seen numbers
2. Iterate through the array:
   - If current number exists in Set, return true
   - Otherwise, add current number to Set
3. Return false if loop completes (no duplicates found)

### Visual Explanation

```
Array: [1,2,3,1]
Step 1: num = 1
- Set: {}
- Add 1 to Set
- Set: {1}
Step 2: num = 2
- Set: {1}
- Add 2 to Set
- Set: {1,2}
Step 3: num = 3
- Set: {1,2}
- Add 3 to Set
- Set: {1,2,3}
Step 4: num = 1
- Set: {1,2,3}
- 1 already in Set!
- Return true
```

## ⚙️ Implementation Details

### TypeScript Solution

```typescript
function containsDuplicate(nums: number[]): boolean {
	let seen = new Set<number>();

	for (let num of nums) {
		if (seen.has(num)) {
			return true;
		}

		seen.add(num);
	}

	return false;
}
```

### Edge Cases

- Empty array
- Single element array
- Array with all same numbers
- Negative numbers
- Very large numbers (MAX_SAFE_INTEGER)

## ⭐️ Complexity Analysis

### Time Complexity: O(n)

- Single pass through the array
- Set operations (has/add) are O(1)

### Space Complexity: O(n)

- Set stores at most n unique elements
- Extra space grows linearly with input size

## 🎯 Follow-up Questions

1. Can you solve it without extra space?

   - Possible by sorting array first
   - O(n log n) time, O(1) space
   - Not recommended due to time trade-off

2. What if we need to count duplicates?

   - Use Map instead of Set to track frequencies
   - Similar time/space complexity
   - Different return type needed

3. What if we need to find all duplicates?
   - Similar approach with Map
   - Return array of duplicates instead of boolean
   - Consider handling multiple occurrences

## 📝 Notes

- Set approach is optimal for unsorted arrays
- Sorting approach viable if space is constrained
- Early return optimization helps for small arrays
- Consider memory usage for very large arrays

## 🔗 Related Problems

- Find All Duplicates in an Array
- Find the Duplicate Number
- Missing Number
- Single Number
