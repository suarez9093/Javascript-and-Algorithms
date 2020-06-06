const bubbleSort = require('./index');

describe('bubbleSort', () => {
    test('[[5, 3, 6, 8, 1, 2]]', () => {
        expect(bubbleSort([5, 3, 6, 8, 1, 2])).toStrictEqual([1, 2, 3, 5, 6, 8])
    })
})