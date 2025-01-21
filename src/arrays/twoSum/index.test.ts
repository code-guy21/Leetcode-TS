import { twoSum } from './index';

interface TestCase<Input, Output> {
	input: Input;
	expected: Output;
	description: string;
}

const testCases: TestCase<[number[], number], number[]>[] = [
	{
		input: [[2, 7, 11, 15], 9],
		expected: [0, 1],
		description: 'Basic case',
	},
	{
		input: [[3, 2, 4], 6],
		expected: [1, 2],
		description: 'Numbers not in order',
	},
	{
		input: [[3, 3], 6],
		expected: [0, 1],
		description: 'Same numbers',
	},
	{
		input: [[1, 2, 3, 4], 10],
		expected: [],
		description: 'No solution',
	},
];

describe('Two Sum', () => {
	testCases.forEach(({ input, expected, description }) => {
		test(description, () => {
			const result = twoSum(input[0], input[1]);
			expect(result).toEqual(expected);
		});
	});
});
