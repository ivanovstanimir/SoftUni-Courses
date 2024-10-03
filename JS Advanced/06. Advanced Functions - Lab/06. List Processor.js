function solve(commands) {
    function createProcessor() {
        let state = [];

        function add(srt) {
            state.push(srt);
        }

        function remove(str) {
            state = state.filter(x=>x !== str);
        }

        function print() {
            console.log(state.join(','));
        }

        let obj = {
            add,
            remove,
            print
        };

        return obj;
    }

    let processor = createProcessor();

    commands.forEach(element => {
        let [command, value] = element.split(' ');
        processor[command](value);
    });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);