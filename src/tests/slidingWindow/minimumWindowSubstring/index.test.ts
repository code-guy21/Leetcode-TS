import { minWindow } from './index';
import { TestCase } from '../../../utils/types';

const testCases: TestCase<{ s: string; t: string }, string>[] = [
	{
		input: { s: 'ADOBECODEBANC', t: 'ABC' },
		expected: 'BANC',
		description: 'should find minimum window with non-consecutive characters',
	},
	{
		input: { s: 'a', t: 'a' },
		expected: 'a',
		description: 'should handle single character match',
	},
	{
		input: { s: 'a', t: 'aa' },
		expected: '',
		description: 'should return empty string when insufficient characters',
	},

	{
		input: { s: '', t: '' },
		expected: '',
		description: 'should handle empty strings',
	},
	{
		input: { s: 'abc', t: '' },
		expected: '',
		description: 'should handle empty target string',
	},
	{
		input: { s: 'AAAAAA', t: 'AA' },
		expected: 'AA',
		description: 'should handle repeated characters',
	},

	{
		input: { s: 'ADOBECODEBANC', t: 'ABCC' },
		expected: 'CODEBANC',
		description: 'should handle multiple occurrences of same character',
	},
	{
		input: { s: 'aaaaaaaaaa', t: 'aaaa' },
		expected: 'aaaa',
		description: 'should handle string of identical characters',
	},
	{
		input: { s: 'ABC', t: 'CBA' },
		expected: 'ABC',
		description: 'should handle different character order',
	},

	{
		input: { s: 'ab', t: 'b' },
		expected: 'b',
		description: 'should find single character in longer string',
	},
	{
		input: { s: 'abc', t: 'ac' },
		expected: 'abc',
		description: 'should handle non-continuous required characters',
	},
	{
		input: { s: 'bba', t: 'ab' },
		expected: 'ba',
		description: 'should find minimum window when multiple valid windows exist',
	},
];

describe('Minimum Window Substring', () => {
	testCases.forEach(({ input, expected, description }) => {
		test(description, () => {
			const result = minWindow(input.s, input.t);
			expect(result).toEqual(expected);
		});
	});
});
