function encodeAndDecodeMessages() {
    let textAreaElement = document.querySelectorAll('textarea');
    let buttonElement = document.querySelectorAll('button');

    buttonElement[0].addEventListener('click', encode);
    buttonElement[1].addEventListener('click', decode);

    function encode(event) {
        let encodeMsg = '';
        let inputText = textAreaElement[0].value;
        for (let index = 0; index < inputText.length; index++) {
            encodeMsg += String.fromCharCode(inputText[index].charCodeAt(0) + 1);
        }

        textAreaElement[0].value = '';
        textAreaElement[1].value = encodeMsg;
    }

    function decode(event) {
        let decodeMsg = '';
        let inputText = textAreaElement[1].value;
        for (let index = 0; index < inputText.length; index++) {
            decodeMsg += String.fromCharCode(inputText[index].charCodeAt(0) - 1);
        }

        textAreaElement[1].value = decodeMsg;
    }
}