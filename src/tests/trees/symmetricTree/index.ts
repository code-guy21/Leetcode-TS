import { TreeNode } from '../../../types/';

export function isSymmetricDFS(root: TreeNode | null): boolean {
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

export function isSymmetricBFS(root: TreeNode | null): boolean {
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
