import {expect} from 'chai';
import {isSymmetric} from '../symmetry.js'

describe('Symmetry Checker', () => {
    
    it('works with symmetric numeric array', () => {
         expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    })

    it('returns false for non-symmetric numeric array', () => {
         expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('returns false for non-array', () => {
         expect(isSymmetric(9)).to.be.false;
    });

    it('works with symmetric odd-length array', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    })

    it('works with symmetric string array', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    })

    it('returns false for with string param', () => {
        expect(isSymmetric('qwqw')).to.be.false;
    })

    it('returns false for type mismatched elements', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    })

    it('Array is empty', () => {
        expect(isSymmetric([])).to.be.true;
    });
})

