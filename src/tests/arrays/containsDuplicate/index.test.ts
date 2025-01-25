import { containsDuplicate } from './index';
import { TestCase } from '../../../types';

const testCases: TestCase<number[], boolean>[] = [
	{
		input: [1, 2, 3, 1],
		expected: true,
		description: 'array with duplicates',
	},
	{
		input: [1, 2, 3, 4],
		expected: false,
		description: 'array without duplicates',
	},
	{
		input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
		expected: true,
		description: 'array with multiple duplicates',
	},
	{
		input: [],
		expected: false,
		description: 'empty array',
	},
	{
		input: [1],
		expected: false,
		description: 'single element array',
	},
	{
		input: [-1, -1],
		expected: true,
		description: 'negative duplicates',
	},
	{
		input: [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
		expected: true,
		description: 'large number duplicates',
	},
];

describe('Contains Duplicate', () => {
	testCases.forEach(({ input, expected, description }) => {
		test(description, () => {
			expect(containsDuplicate(input)).toEqual(expected);
		});
	});
});
