# Maximum Depth of Binary Tree

## 📝 Problem Link

[LeetCode - 104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

## 💡 Problem Statement

Given the root of a binary tree, return its maximum depth. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

### Constraints:

- The number of nodes in the tree is in the range [0, 104]
- The tree values are in the range [-100, 100]
- A leaf node has no children (both left and right are null)

## 🔍 Examples

```typescript
// Example 1: Balanced Tree
Input: root = [3,9,20,null,null,15,7]
Output: 3
Explanation: Depth is 3 - root to 15 or 7

// Example 2: Simple Tree
Input: root = [1,2]
Output: 2
Explanation: Depth is 2 - root to leaf node 2

// Example 3: Empty Tree
Input: root = []
Output: 0
Explanation: Empty tree has depth 0
```

## 🛠️ Approach

### Solution Overview

Two main approaches:

1. BFS (Level Order Traversal)
   - Process tree level by level
   - Count number of levels
2. DFS (Recursive)
   - Recursively find depth of left and right subtrees
   - Take maximum plus one

### Detailed Steps

#### BFS Approach:

1. Initialize queue with root
2. Process nodes level by level
3. Increment depth counter for each level
4. Continue until queue is empty

#### DFS Approach:

1. Base case: return 0 for null node
2. Recursively get depth of left and right subtrees
3. Return max of left and right plus 1

### Visual Explanation

```
Tree:      3
         /   \
        9     20
             /  \
            15   7

BFS Process:
Level 1: [3]          depth = 1
Level 2: [9,20]       depth = 2
Level 3: [15,7]       depth = 3

DFS Process:
3 -> max(depth(9), depth(20)) + 1
9 -> max(0, 0) + 1 = 1
20 -> max(depth(15), depth(7)) + 1 = 2
Result: max(1, 2) + 1 = 3
```

## ⚙️ Implementation Details

### TypeScript Solution (BFS)

```typescript
function maxDepthBFS(root: TreeNode | null): number {
	if (!root) return 0;

	const queue = [root];
	let depth = 0;

	while (queue.length > 0) {
		const levelSize = queue.length;

		for (let i = 0; i < levelSize; i++) {
			const node = queue.shift()!;
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		depth++;
	}

	return depth;
}
```

### TypeScript Solution (DFS)

```typescript
function maxDepthDFS(root: TreeNode | null): number {
	if (!root) return 0;
	return 1 + Math.max(maxDepthDFS(root.left), maxDepthDFS(root.right));
}
```

### Edge Cases

- Empty tree (null root)
- Single node tree
- Unbalanced tree (left or right skewed)
- Complete binary tree
- Perfect binary tree

## ⭐️ Complexity Analysis

### BFS Approach

- Time Complexity: O(n) - visit each node once
- Space Complexity: O(w) - w is max width of tree

### DFS Approach

- Time Complexity: O(n) - visit each node once
- Space Complexity: O(h) - h is height of tree

## 🎯 Follow-up Questions

1. How would you handle very wide trees?

   - BFS might use too much memory
   - Consider DFS for space efficiency
   - Could implement iterative DFS

2. What if we need to track path to deepest node?

   - Modify to store path information
   - Return both depth and path
   - Consider using parent pointers

3. Can we optimize for special tree types?
   - Perfect binary trees: use math formula
   - Complete binary trees: level-based calculation
   - Balanced trees: balanced tree properties

## 📝 Notes

- Consider space-time tradeoffs between BFS and DFS
- Handle null checks consistently
- Queue operations in BFS can be optimized
- Recursion depth in DFS could be a concern

## 🔗 Related Problems

- Minimum Depth of Binary Tree
- Balanced Binary Tree
- Binary Tree Level Order Traversal
- Diameter of Binary Tree
