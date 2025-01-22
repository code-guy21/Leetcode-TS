import { isAnagram } from './index';
import { TestCase } from '../../../utils/types';

const testCases: TestCase<{ s: string; t: string }, boolean>[] = [
	{
		input: { s: 'anagram', t: 'nagaram' },
		expected: true,
		description: 'valid anagram with repeated letters',
	},
	{
		input: { s: 'rat', t: 'car' },
		expected: false,
		description: 'invalid anagram with same length',
	},
	{
		input: { s: 'aa', t: 'bb' },
		expected: false,
		description: 'invalid anagram with repeated letters',
	},
	{
		input: { s: '', t: '' },
		expected: true,
		description: 'empty strings are anagrams',
	},
	{
		input: { s: 'a', t: 'a' },
		expected: true,
		description: 'single character strings that are same',
	},
	{
		input: { s: 'a', t: 'b' },
		expected: false,
		description: 'single character strings that are different',
	},
	{
		input: { s: 'ab', t: 'a' },
		expected: false,
		description: 'different length strings',
	},
	{
		input: { s: 'aacc', t: 'ccac' },
		expected: false,
		description: 'same characters but different counts',
	},
	{
		input: { s: 'anagram', t: 'anagram' },
		expected: true,
		description: 'identical strings',
	},
	{
		input: { s: 'zzzz', t: 'zzzz' },
		expected: true,
		description: 'repeated same character',
	},
];

describe('Valid Anagram', () => {
	testCases.forEach(({ input, expected, description }) => {
		test(description, () => {
			expect(isAnagram(input.s, input.t)).toEqual(expected);
		});
	});
});
