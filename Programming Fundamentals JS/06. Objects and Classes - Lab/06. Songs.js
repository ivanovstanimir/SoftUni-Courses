function songs(arr) {
    let songCount = arr.shift();
    let command = arr[arr.length - 1];

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < songCount; i++) {
        let currentIndex = arr[i].split("_");
        let listType = currentIndex[0];
        let songName = currentIndex[1];
        let songTime = currentIndex[2];

        let info = new Song(listType, songName, songTime);

        if (command == listType) {
            console.log(songName);

        } else if (command == "all") {
            console.log(songName);
        }
    }
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);