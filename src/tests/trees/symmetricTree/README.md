# Symmetric Tree

## 📝 Problem Link

[LeetCode - 101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)

## 💡 Problem Statement

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

### Constraints:

- The number of nodes in the tree is in the range [1, 1000]
- Node values are in the range [-100, 100]

## 🔍 Examples

```typescript
// Example 1: Symmetric Tree
Input: root = [1,2,2,3,4,4,3]
Output: true
Visual:
     1
   /   \
  2     2
 / \   / \
3   4 4   3

// Example 2: Non-Symmetric Tree
Input: root = [1,2,2,null,3,null,3]
Output: false
Visual:
     1
   /   \
  2     2
   \     \
    3     3
```

## 🛠️ Approach

Two main approaches to solve this:

### 1. DFS (Recursive) Approach

1. Create helper function that compares two nodes
2. Base cases:
   - Both null (symmetric)
   - One null (not symmetric)
   - Different values (not symmetric)
3. Recursive case: Check outer and inner pairs

### 2. BFS (Iterative) Approach

1. Use queue to store pairs of nodes to compare
2. Process nodes level by level
3. Add children in mirrored order
4. Compare values as we go

## ⚙️ Implementation

### DFS Solution

```typescript
function isSymmetric(root: TreeNode | null): boolean {
	if (!root) {
		return true;
	}
	const dfs = (left: TreeNode | null, right: TreeNode | null): boolean => {
		if (!left && !right) return true;
		if (!left || !right) return false;
		if (left.val !== right.val) return false;

		return dfs(left.left, right.right) && dfs(left.right, right.left);
	};

	return dfs(root.left, root.right);
}
```

### BFS Solution

```typescript
function isSymmetric(root: TreeNode | null): boolean {
	if (!root) {
		return true;
	}

	const queue: (TreeNode | null)[] = [root.left, root.right];
	let head: number = 0;

	while (head < queue.length) {
		const left = queue[head++];
		const right = queue[head++];

		if (!left && !right) {
			continue;
		}

		if (!left || !right || left.val !== right.val) {
			return false;
		}

		queue.push(left.left, right.right);
		queue.push(left.right, right.left);
	}

	return true;
}
```

## Edge Cases

- Empty tree (null root)
- Single node tree
- Complete tree with all same values
- Unbalanced tree (more nodes on one side)
- Tree with null children in different positions

## ⭐️ Complexity Analysis

### DFS Solution

- Time Complexity: O(n) - visit each node once
- Space Complexity: O(h) - recursion stack, h is tree height
  - Best case: O(log n) for balanced tree
  - Worst case: O(n) for skewed tree

### BFS Solution

- Time Complexity: O(n) - visit each node once
- Space Complexity: O(w) - queue size, w is max tree width
  - Best case: O(1) for skewed tree
  - Worst case: O(n/2) for complete tree's widest level

## 📝 Notes

- DFS is more intuitive but uses recursion stack
- BFS avoids recursion but requires queue management
- Both solutions maintain same time complexity
- Choice between them depends on tree shape and constraints
- DFS better for deep, narrow trees
- BFS better for shallow, wide trees

## 🎯 Follow-up Questions

1. How would you handle very deep trees?

   - Consider BFS to avoid stack overflow
   - Could implement iterative DFS

2. What if memory is very limited?

   - DFS might be better for narrow trees
   - Iterative solution avoids recursion overhead

3. How to optimize for specific tree shapes?
   - Complete trees: BFS more predictable
   - Skewed trees: DFS uses less space

## 🔗 Related Problems

- Same Tree (#100)
- Maximum Depth of Binary Tree (#104)
- Binary Tree Level Order Traversal (#102)
- Mirror of Binary Tree
