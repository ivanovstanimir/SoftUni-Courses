function calculator() {
    let num1El;
    let num2El;
    let resultEl;

    return obj = {
        init,
        add,
        subtract
    };

    function init(selector1, selector2, resultSelector) {
        num1El = document.querySelector(selector1);
        num2El = document.querySelector(selector2);
        resultEl = document.querySelector(resultSelector);
    }

    function add() {
        resultEl.value = Number(num1El.value) + Number(num2El.value);
    }

    function subtract() {
        resultEl.value = Number(num1El.value) - Number(num2El.value);
    }
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');





