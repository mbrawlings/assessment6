const {shuffleArray} = require('./utils')
const {bots} = require('./data.js')

describe('shuffleArray should', () => {
    test('new array should not be the same as original', () => {
        expect(shuffleArray(bots)).not.toEqual(bots)
    })
    test('is returned array the same length as original', () => {
        expect(shuffleArray(bots).length).toEqual(bots.length)
    })
})