import { expect } from "chai";
import { isOddOrEven } from "../even or Odd.js";

describe('is odd or even tests', () => {
    it('should be undefined if arr', () => {
       expect(isOddOrEven([1, 2])).to.be.undefined;
    });

    it('should be undefined if number', () => {
        expect(isOddOrEven(1, 2, 3)).to.be.undefined;
    });

    it('should be undefined if object', () => {
        expect(isOddOrEven({})).to.be.undefined;
    });

    it('should return even if string is even', () => {
        expect(isOddOrEven('asdf')).to.be.equal("even");
    });

    it('should return odd if string is odd', () => {
        expect(isOddOrEven('asd')).to.be.equal("odd");
    });
});