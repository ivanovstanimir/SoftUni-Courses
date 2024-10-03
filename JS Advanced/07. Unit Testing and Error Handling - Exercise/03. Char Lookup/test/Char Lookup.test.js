import { expect } from "chai";
import { lookupChar } from "../Char Lookup.js";

describe('test', () => {
    it('should be undefined if first parameter is number', () => {
        expect(lookupChar(5, 3)).to.be.undefined;
    });

    it('should be undefined if first parameter is array', () => {
        expect(lookupChar([1], 3)).to.be.undefined;
    });

    it('should be undefined if first parameter is object', () => {
        expect(lookupChar({}, 3)).to.be.undefined;
    });

    it('should be undefined if second parameter is string', () => {
        expect(lookupChar('asd', 'fgh')).to.be.undefined;
    });

    it('should be undefined if second parameter is array', () => {
        expect(lookupChar('asd', [1])).to.be.undefined;
    });

    it('should be undefined if second parameter is object', () => {
        expect(lookupChar('asd', {})).to.be.undefined;
    });

    it('should be undefined if second parameter is float', () => {
        expect(lookupChar('asd', 1.5)).to.be.undefined;
    });

    it('index < 0', () => {
        expect(lookupChar('asd', -2)).to.be.equal('Incorrect index');
    });

    it('index = string.length', () => {
        expect(lookupChar('asd', 3)).to.be.equal('Incorrect index');
    });

    it('index > string.length', () => {
        expect(lookupChar('asd', 10)).to.be.equal('Incorrect index');
    });

    it('returning a correct result', () => {
        expect(lookupChar('asd', 1)).to.be.equal('s');
    });
});