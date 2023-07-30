export const getQuestionList = (
	additionRange,
	multiplicationRange,
	duration
) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{
					num1: 1,
					num2: 2,
					opType: '+',
					answer: 3,
				},
				{
					num1: 13,
					num2: 4,
					opType: '-',
					answer: 9,
				},
				{
					num1: 5,
					num2: 6,
					opType: '*',
					answer: 30,
				},
				{
					num1: 56,
					num2: 8,
					opType: '/',
					answer: 7,
				},
			])
		}, 1000) // simulate network delay
	})
}
