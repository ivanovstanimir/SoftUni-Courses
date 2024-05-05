function extractFile(path) {
    let pathToArr = path.split('\\');
    let lastElement = pathToArr.pop();
    let lastIndex = lastElement.lastIndexOf('.');
    let fileName = lastElement.slice(0, lastIndex);
    let fileExtension = lastElement.slice(lastIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}  
extractFile('C:\\Internal\\training-internal\\Template.pptx');