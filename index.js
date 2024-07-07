// code your solution here
// test/indexTest.js

const superbowlWin = require('../index'); // Adjust the path if necessary

describe('superbowlWin()', () => {
    it('returns the year of the Super Bowl win', () => {
        const record = [
            { year: "2015", result: "W" },
            { year: "2014", result: "N/A" },
            { year: "2013", result: "L" }
        ];
        expect(superbowlWin(record)).toBe("2015");
    });

    it('returns undefined if the record has no win objects', () => {
        const noWinRecord = [
            { year: "2015", result: "L" },
            { year: "2014", result: "N/A" },
            { year: "2013", result: "L" }
        ];
        expect(superbowlWin(noWinRecord)).toBeUndefined();
    });
});

