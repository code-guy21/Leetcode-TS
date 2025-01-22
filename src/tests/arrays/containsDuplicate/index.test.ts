import { containsDuplicate } from './index';
import { TestCase } from '../../../utils/types';

const testCases: TestCase<number[], boolean>[] = [
	{
		input: [1, 2, 3, 1],
		expected: true,
		description: 'test case 1',
	},
	{
		input: [1, 2, 3, 4],
		expected: false,
		description: 'test case 2',
	},
	{
		input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
		expected: true,
		description: 'test case 3',
	},
];

describe('Contains Duplicate', () => {
	testCases.forEach(({ input, expected, description }) => {
		test(description, () => {
			expect(containsDuplicate(input)).toEqual(expected);
		});
	});
});
