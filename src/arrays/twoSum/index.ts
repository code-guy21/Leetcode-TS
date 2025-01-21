export function twoSum(nums: number[], target: number): number[] {
	let seen = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
		let currentNum = nums[i]!;
		let compliment = target - currentNum;

		if (seen.has(compliment)) {
			return [seen.get(compliment)!, i];
		}

		seen.set(currentNum, i);
	}

	return [];
}
