function argumentInfo(...args) {
    const argTypes = {}
    args.forEach(arg => {
        const argType = typeof (arg);
        console.log(`${argType}: ${arg}`);
        if (!argTypes.hasOwnProperty(argType)) {
            argTypes[argType] = 0;
        }
        argTypes[argType]++;
    })

    console.log(Object.entries(argTypes)
        .sort((a, b) => b[0].localeCompare(a[0]))
        .map(e => e.join(' = '))
        .join('\n'));
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });