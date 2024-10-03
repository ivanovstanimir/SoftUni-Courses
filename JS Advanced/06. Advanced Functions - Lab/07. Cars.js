function solve(input) {
    function cars() {
        const state = {};

        function create(name, inherit, parentName) {
            const obj = {};
            state[name] = obj;
            if (inherit) {
                Object.setPrototypeOf(obj, state[parentName])
            }
        }

        function set(name, propName, value) {
            state[name][propName] = value;
        }

        function print(name) {
            const obj = state[name];
            const props = getAllProperties(obj);
            console.log(props
                .map(e => `${e[0]}:${e[1]}`)
                .join(',')
            );
        }

        function getAllProperties(obj) {
            let props = Object.entries(obj)
            getParentProps(obj);
            return props;

            function getParentProps(obj) {
                const prototype = Object.getPrototypeOf(obj);
                if (Object.getPrototypeOf(prototype)) {
                    let parentProps = Object.entries(prototype);
                    props = props.concat(parentProps);
                    getParentProps(prototype);
                }
            }
        }

        return {
            create,
            set,
            print
        }
    }

    let carsProcessor = cars();

    input.forEach(element => {
        let tokens = element.split(' ');
        carsProcessor[tokens.splice(0, 1)](...tokens);
    });
}
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
    );