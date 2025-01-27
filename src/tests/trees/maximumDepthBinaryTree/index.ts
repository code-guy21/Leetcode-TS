export class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

export function maxDepthBFS(root: TreeNode | null): number {
	if (!root) {
		return 0;
	}

	let queue = [root];
	let depth = 0;

	while (queue.length > 0) {
		let levelSize = queue.length;

		for (let i = 0; i < levelSize; i++) {
			let node = queue.shift()!;

			if (node.left) {
				queue.push(node.left);
			}

			if (node.right) {
				queue.push(node.right);
			}
		}

		depth++;
	}

	return depth;
}

export function maxDepthDFS(root: TreeNode | null): number {
	if (!root) {
		return 0;
	}

	return 1 + Math.max(maxDepthDFS(root.left), maxDepthDFS(root.right));
}
