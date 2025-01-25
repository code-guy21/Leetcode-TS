import { groupAnagrams } from './index';
import { TestCase } from '../../../types';

const testCases: TestCase<string[], string[][]>[] = [
	{
		input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
		expected: [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']],
		description: 'test case 1',
	},
	{
		input: [''],
		expected: [['']],
		description: 'test case 2',
	},
	{
		input: ['a'],
		expected: [['a']],
		description: 'test case 3',
	},
	{
		input: ['aaa', 'aaa'],
		expected: [['aaa', 'aaa']],
		description: 'duplicate words',
	},
	{
		input: ['bbb', 'ccc'],
		expected: [['bbb'], ['ccc']],
		description: 'no anagrams',
	},
	{
		input: ['a', 'b', 'ba', 'abc', 'cba'],
		expected: [['a'], ['b'], ['ba'], ['abc', 'cba']],
		description: 'mixed length anagrams',
	},
];

describe('Group Anagrams', () => {
	testCases.forEach(({ input, expected, description }) => {
		test(description, () => {
			const result = groupAnagrams(input);

			const sortedResult = result.map(group => group.sort()).sort();
			const sortedExpected = expected.map(group => group.sort()).sort();

			expect(sortedResult).toEqual(sortedExpected);
		});
	});
});
