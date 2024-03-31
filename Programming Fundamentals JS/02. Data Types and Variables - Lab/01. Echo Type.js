function echoType(parameter) {
    let paramType = typeof parameter;
    console.log(paramType);

    if (paramType === "string" || paramType === "number") {
        console.log(parameter);
    } else {
        console.log('Parameter is not suitable for printing');
    }

}
echoType('Hello, JavaScript!');
echoType(18);
echoType(null);