function movies(arr) {
    let newArr = [];

    for (let command of arr) {
        if (command.includes("addMovie")) {
            let tokens = command.split("addMovie ");
            let movieTitle = tokens[1];

            let object = {
                name: movieTitle
            };
            newArr.push(object);

        } else if (command.includes("directedBy")) {
            let tokens = command.split(" directedBy ");
            let movieTitle = tokens[0];
            let directorName = tokens[1];

            let movieFound = newArr.find(m => m.name === movieTitle);
            if (movieFound) {
                movieFound.director = directorName;
            }

        } else if (command.includes("onDate")) {
            let tokens = command.split(" onDate ");
            let movieTitle = tokens[0];
            let movieDate = tokens[1];

            let movieFound = newArr.find(m => m.name === movieTitle);
            if (movieFound) {
                movieFound.date = movieDate;
                console.log(newArr);
            }
        }
    }

    // let fullInfo = newArr.filter(m => m.name && m.director && m.date);

    // for (let index of fullInfo) {
    //     console.log(JSON.stringify(index));
    // }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);