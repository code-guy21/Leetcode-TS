import { lengthOfLongestSubstring } from './index';
import { TestCase } from '../../../utils/types';

const testCases: TestCase<string, number>[] = [
	{
		input: 'abcabcbb',
		expected: 3,
		description: 'string with multiple repeating characters',
	},
	{
		input: 'bbbbb',
		expected: 1,
		description: 'string with all same characters',
	},
	{
		input: 'pwwkew',
		expected: 3,
		description:
			'string with repeating characters and unique substring in middle',
	},
	{
		input: 'abba',
		expected: 2,
		description: 'palindrome string with repeating characters',
	},
	{
		input: '',
		expected: 0,
		description: 'empty string',
	},
	{
		input: 'a',
		expected: 1,
		description: 'single character',
	},
	{
		input: 'aab',
		expected: 2,
		description: 'string with repeating character at start',
	},
	{
		input: 'dvdf',
		expected: 3,
		description: 'string with non-consecutive repeating character',
	},
	{
		input: ' ',
		expected: 1,
		description: 'string with single space',
	},
	{
		input: '  ',
		expected: 1,
		description: 'string with multiple spaces',
	},
];

describe('Longest Substring Without Repeating Characters', () => {
	testCases.forEach(({ input, expected, description }) => {
		test(description, () => {
			expect(lengthOfLongestSubstring(input)).toEqual(expected);
		});
	});
});
