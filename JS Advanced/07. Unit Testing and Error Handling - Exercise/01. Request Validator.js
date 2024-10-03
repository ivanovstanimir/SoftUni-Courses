function requestValidator(object) {
    let validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriRegExp = /^[\w.]+$/;
    let messageRegExp = /^[^<>\\&\'\"]*$/;

    if (!(object.hasOwnProperty('method') && validMethod.includes(object.method))) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!(object.hasOwnProperty('uri') && (object.uri == '*' || uriRegExp.test(object.uri)))) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!(object.hasOwnProperty('version') && validVersion.includes(object.version))) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!(object.hasOwnProperty('message') && (object.message == '' || messageRegExp.test(object.message)))) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return object;
}

const input1 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};

const input2 = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
};

const input3 = {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
};

console.log(requestValidator(input1));
// console.log(requestValidator(input2));
// console.log(requestValidator(input3));


