function tseamAccount(arr) {
    let games = arr.shift();
    let arrGames = games.split(' ');

    let index = 0;
    let el = arr[index];
    index++;

    while (el != 'Play!') {
        let currentEl = el.split(' ');
        let command = currentEl[0];
        let currentGame = currentEl[1];

        if (command === 'Install' && !arrGames.includes(currentGame)) {
            arrGames.push(currentGame);

        } else if (command === 'Uninstall' && arrGames.includes(currentGame)) {
            arrGames.splice(arrGames.indexOf(currentGame), 1);

        } else if (command === 'Update' && arrGames.includes(currentGame)) {
            arrGames.splice(arrGames.indexOf(currentGame), 1);
            arrGames.push(currentGame);

        } else if (command === 'Expansion') {
            let expansion = currentGame.split('-');
            let game = expansion[0];
            if (arrGames.includes(game)) {
                arrGames.splice(arrGames.indexOf(game) + 1, 0, expansion.join(':'));
            }
        }

        el = arr[index];
        index++;
    }

    console.log(arrGames.join(' '));
}
tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
);