import { expect } from "chai";
import { mathEnforcer } from "../04. Math Enforcer.js";

describe('Math Enforcer', () => {
    describe('addFive test', () => {
        it('should return undefined for non-number input', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        });

        it('should return correct result for positive intiger param', () => {
            expect(mathEnforcer.addFive(10)).to.be.equal(15);
        });

        it('should return correct result for negative intiger param', () => {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });

        it('should return correct result for floating point param', () => {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        });
    });

    describe('subtraction test', () => {
        it('should return undefined for non-number input', () => {
            expect(mathEnforcer.subtractTen('test')).to.be.undefined;
        });

        it('should return correct result for positive intiger param', () => {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        });

        it('should return correct result for negative intiger param', () => {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });

        it('should return correct result for floating point param', () => {
            expect(mathEnforcer.subtractTen(13.14)).to.be.closeTo(3.14, 0.01);
        });
    });

    describe('sum test', () => {
        it('should return undefined for invalid first param', () => {
            expect(mathEnforcer.sum('5', 5)).to.be.undefined;
        });

        it('should return undefined for invalid second param', () => {
            expect(mathEnforcer.sum(5, '')).to.be.undefined;
        });

        it('should return correct result for intiger param', () => {
            expect(mathEnforcer.sum(5, -4)).to.be.equal(1);
        });

        it('should return correct result for floating point param', () => {
            expect(mathEnforcer.sum(5.5, 4.5)).to.be.closeTo(10, 0.01)
        });
    });
});