import { expect } from "chai";
import { sum } from "../sum.js";


describe('Sum Checker', () => {
    describe('Happy Path', () => {
        it('works with numbers', () => {
            expect(sum([1, 2])).to.be.equal(3);
        });

        it('works with more numbers', () => {
            expect(sum([1, 2, 3])).to.be.equal(6);
        });
    });

    describe('Edge cases', () => {
        it('Returns 0 for empty array', () => {
            expect(sum([])).to.be.equal(0);
        });
    });

    describe('Validation', () => {
        it('Doest work with string', () => {
            expect(sum('aaa')).to.be.NaN;
        });
    });

    describe('Test Overload', () => {
        it('Works with any numbers', () => {
            expect(sum([10, 20, 30, 40])).to.be.equal(100);
        });

        it('Sum Negative Numbers', () => {
            expect(sum([-1, -2])).to.be.equal(-3);
        });
    });
});