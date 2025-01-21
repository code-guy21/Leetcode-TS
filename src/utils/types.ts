export interface TestCase<Input, Output> {
	input: Input;
	expected: Output;
	description: string;
	category?: string;
}
