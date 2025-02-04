import { TreeNode } from '../types';

export function createTree(values: (number | null)[]): TreeNode | null {
	if (!values.length) return null;

	const root = new TreeNode(values[0]!);
	const queue = [root];
	let i = 1;

	while (queue.length && i < values.length) {
		const node = queue.shift()!;

		if (i < values.length && values[i] !== null) {
			node.left = new TreeNode(values[i]!);
			queue.push(node.left);
		}
		i++;

		if (i < values.length && values[i] !== null) {
			node.right = new TreeNode(values[i]!);
			queue.push(node.right);
		}
		i++;
	}

	return root;
}

export const camelCaseToUpper = (w: string): string =>
	w
		.split(/(?=[A-Z])/)
		.map(w =>
			w
				.split('')
				.map((c, i) => (i === 0 ? c.toUpperCase() : c))
				.join('')
		)
		.join(' ');
