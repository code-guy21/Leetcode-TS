import { isSymmetricBFS, isSymmetricDFS } from './index';
import { TestCase, TreeNode } from '../../../types';
import { createTree } from '../../../utils';

const testCases: TestCase<{ root: TreeNode | null }, boolean>[] = [
	{
		input: { root: createTree([]) },
		expected: true,
		description: 'Empty tree is symmetric',
	},
	{
		input: { root: createTree([1]) },
		expected: true,
		description: 'Single-node tree is symmetric',
	},
	{
		input: { root: createTree([1, 2, 2, 3, 4, 4, 3]) },
		expected: true,
		description: 'Symmetric tree with multiple levels',
	},
	{
		input: { root: createTree([1, 2, 2, null, 3, null, 3]) },
		expected: false,
		description: 'Asymmetric tree with missing nodes',
	},
	{
		input: { root: createTree([1, 2, 2, 3, null, null, 3]) },
		expected: true,
		description: 'Symmetric tree with some null nodes',
	},
	{
		input: { root: createTree([1, 2, 2, 3, null, null, 4]) },
		expected: false,
		description: 'Asymmetric tree with different leaf nodes',
	},
];

describe('Symmetric Tree DFS', () => {
	testCases.forEach(({ description, input, expected }) => {
		test(description, () => {
			const result = isSymmetricDFS(input.root);
			expect(result).toBe(expected);
		});
	});
});

describe('Symmetric Tree BFS', () => {
	testCases.forEach(({ description, input, expected }) => {
		test(description, () => {
			const result = isSymmetricBFS(input.root);
			expect(result).toBe(expected);
		});
	});
});
