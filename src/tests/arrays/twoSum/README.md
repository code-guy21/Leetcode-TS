# Two Sum

## 📝 Problem Link

[LeetCode - 1. Two Sum](https://leetcode.com/problems/two-sum/)

## 💡 Problem Statement

Given an array of integers `nums` and an integer `target`, return indices of the two numbers in `nums` such that they add up to `target`.

### Constraints:

- Each input has exactly one solution
- You may not use the same element twice
- Array length is at least 2
- All integers are valid

## 🔍 Examples

```typescript
// Example 1: Basic Case
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9

// Example 2: Numbers not in order
Input: nums = [3,2,4], target = 6
Output: [1,2]
Explanation: nums[1] + nums[2] = 2 + 4 = 6

// Example 3: Same number twice
Input: nums = [3,3], target = 6
Output: [0,1]
Explanation: nums[0] + nums[1] = 3 + 3 = 6
```

## 🛠️ Approach

### Solution Overview

Use a hash map to track seen numbers and their indices, enabling O(n) lookup for complements.

### Detailed Steps

1. Create an empty hash map to store number→index pairs
2. Iterate through the array:
   - Calculate complement (target - current number)
   - If complement exists in map, return [complement's index, current index]
   - Otherwise, add current number and index to map
3. Return empty array if no solution found (though problem guarantees a solution)

### Visual Explanation

```
Array: [2,7,11,15], Target: 9

Step 1: num = 2
- complement = 9 - 2 = 7
- Map: {}
- Add 2→0 to map
- Map: {2→0}

Step 2: num = 7
- complement = 9 - 7 = 2
- Map: {2→0}
- Found complement 2 in map!
- Return [0,1]
```

## ⚙️ Implementation Details

### TypeScript Solution

```typescript
function twoSum(nums: number[], target: number): number[] {
	let seen = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
		let currentNum = nums[i]!;
		let compliment = target - currentNum;

		if (seen.has(compliment)) {
			return [seen.get(compliment)!, i];
		}

		seen.set(currentNum, i);
	}

	return [];
}
```

### Edge Cases

- Array with exactly two numbers
- Duplicate numbers in array
- Negative numbers
- Zero as target or array element

## ⭐️ Complexity Analysis

### Time Complexity: O(n)

- Single pass through the array
- Hash map operations (get/set) are O(1)

### Space Complexity: O(n)

- Hash map stores at most n elements
- Extra space grows linearly with input size

## 🎯 Follow-up Questions

1. Can you solve it with constant space complexity?

   - Only possible in O(n²) time with two pointers
   - Not recommended due to time trade-off

2. What if the array is sorted?

   - Two-pointer approach becomes viable
   - O(n) time and O(1) space possible

3. What if you need all possible pairs?
   - Changes problem significantly
   - Requires handling duplicates
   - Multiple valid solutions possible

## 📝 Notes

- Hash map approach is optimal for unsorted arrays
- Two-pointer approach better for sorted arrays
- Consider using Map over object for cleaner TypeScript code
- Remember to handle undefined in TypeScript implementation

## 🔗 Related Problems

- Two Sum II (Sorted Array)
- Three Sum
- Four Sum
- Two Sum BSTs
