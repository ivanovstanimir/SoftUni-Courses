(function arrays() {
    let arr = [1, 2, 3];

    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        let result = this.slice(n);
        return result;
    }

    Array.prototype.take = function (n) {
        let result = this.slice(0, n);
        return result;
    }

    Array.prototype.sum = function () {
        return this.reduce((acc, x) => acc + x, 0);
    }

    Array.prototype.average = function () {
        return this.reduce((acc, x) => acc + x, 0) / arr.length;
    }
})();