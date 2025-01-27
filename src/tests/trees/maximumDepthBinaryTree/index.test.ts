import { maxDepthBFS, maxDepthDFS, TreeNode } from './index';
import { TestCase } from '../../../types/';

function createTree(values: (number | null)[]): TreeNode | null {
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

const testCases: TestCase<{ root: TreeNode | null }, number>[] = [
	{
		input: {
			root: createTree([3, 9, 20, null, null, 15, 7]),
		},
		expected: 3,
		description: 'test case 1: balanced tree with depth 3',
	},
	{
		input: {
			root: createTree([1, 2]),
		},
		expected: 2,
		description: 'test case 2: simple tree with depth 2',
	},
	{
		input: {
			root: null,
		},
		expected: 0,
		description: 'test case 3: empty tree',
	},
	{
		input: {
			root: createTree([1]),
		},
		expected: 1,
		description: 'test case 4: single node tree',
	},
	{
		input: {
			root: createTree([1, null, 2, null, 3, null, 4]),
		},
		expected: 4,
		description: 'test case 5: right-skewed tree',
	},
];

describe('Maximum Depth of Binary Tree BFS', () => {
	testCases.forEach(({ input, expected, description }) => {
		it(description, () => {
			const result = maxDepthBFS(input.root);
			expect(result).toEqual(expected);
		});
	});
});

describe('Maximum Depth of Binary Tree DFS', () => {
	testCases.forEach(({ input, expected, description }) => {
		it(description, () => {
			const result = maxDepthDFS(input.root);
			expect(result).toEqual(expected);
		});
	});
});
