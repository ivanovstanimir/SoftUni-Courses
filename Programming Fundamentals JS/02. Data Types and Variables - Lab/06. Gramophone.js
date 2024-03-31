function gramophone(bandName, albumName, songName) {
    let bandNameLength = 0;
    let albumNameLength = 0;
    let songNameLength = 0;

    for (let index = 0; index < bandName.length; index++) {
        bandNameLength++;
    }

    for (let index = 0; index < albumName.length; index++) {
        albumNameLength++;
    }

    for (let index = 0; index < songName.length; index++) {
        songNameLength++;
    }

    let totalLength = (bandNameLength * albumNameLength) * songNameLength / 2;

    let rotations = totalLength / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
console.log("-----");
gramophone('Rammstein', 'Sehnsucht', 'Engel');