import { twoSum } from './index';
import { TestCase } from '../../../types';

const testCases: TestCase<{ nums: number[]; target: number }, number[]>[] = [
	{
		input: { nums: [2, 7, 11, 15], target: 9 },
		expected: [0, 1],
		description: 'Basic case with solution at start of array',
		category: 'basic',
	},
	{
		input: { nums: [3, 2, 4], target: 6 },
		expected: [1, 2],
		description: 'Solution with numbers not in order',
		category: 'basic',
	},

	// Edge cases
	{
		input: { nums: [3, 3], target: 6 },
		expected: [0, 1],
		description: 'Same numbers can be used if at different indices',
		category: 'edge',
	},
	{
		input: { nums: [1, 2, 3, 4], target: 10 },
		expected: [],
		description: 'No solution exists',
		category: 'edge',
	},

	// Additional test cases
	{
		input: { nums: [1, 1, 1, 1], target: 2 },
		expected: [0, 1],
		description: 'Multiple same numbers',
		category: 'edge',
	},
	{
		input: { nums: [0, 0], target: 0 },
		expected: [0, 1],
		description: 'Zero sum with zero numbers',
		category: 'edge',
	},
];

describe('Two Sum', () => {
	describe('Basic Cases', () => {
		testCases
			.filter(tc => tc.category === 'basic')
			.forEach(({ input, expected, description }) => {
				test(description, () => {
					const result = twoSum(input.nums, input.target);
					expect(result).toEqual(expected);
				});
			});
	});

	describe('Edge Cases', () => {
		testCases
			.filter(tc => tc.category === 'edge')
			.forEach(({ input, expected, description }) => {
				test(description, () => {
					const result = twoSum(input.nums, input.target);
					expect(result).toEqual(expected);
				});
			});
	});

	// Performance tests
	describe('Performance', () => {
		test('should handle large arrays efficiently', () => {
			const largeArray = Array.from({ length: 10000 }, (_, i) => i);
			const target = 19997;
			const start = performance.now();
			const result = twoSum(largeArray, target);
			const end = performance.now();

			expect(result).toEqual([9998, 9999]);
			expect(end - start).toBeLessThan(100);
		});
	});
});
