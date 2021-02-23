// Write a function called listNames which takes in an array of songs and console.logs the name of each one.
function durationToSeconds(duration) {
    let minutes = +duration.split(":")[0];
    let seconds = +duration.split(":")[1];
    return minutes * 60 + seconds;
}
function listNames(arr) {
    return arr.array.forEach((element) => {
        console.log(element.name)
    });
}
// Write a function called listSongDetails which takes in an array of songs and console.logs details about each one. The details should be in the following example format: "Smooth, by Santana featuring Rob Thomas (4:00)".
function listSongDetails(arr) {
    return arr.forEach((element) => {
        console.log(`${element.name}, by${element.artist}(${element.duration})`);
    });
}
// Write a function called summerJamCount which takes in an array of songs and returns the number of songs which hit #1 on the charts in June, July, or August.
function summerJamCount(arr) {
    let count = 0;
    arr.forEach((elem) => {
        if (elem.month >= 6 || elem.month <= 8)
            count++;
    })
    return count;
}
// Write a function called getDurations which takes in an array of songs and returns an array of each song's duration.
function getDurations(arr) {
    return arr.map((element) => {
        return element.duration;
    })
}
// Write a function called getDurationInSeconds which takes in an array of songs and returns an array of each song's duration in seconds.
function getDurationsInSeconds(arr) {
    return arr.map((element) => {
        return durationToSeconds(element.duration);
    })
}
// Write a function called getMainArtists which takes in an array of songs and returns an array of the primary artists on the recordings. If there's only one artist, that artist should be returned; if there are featured artists, they should be ignored (so only the artist to the left of "featuring" is kept.)
function getMainArtists(arr) {
    return arr.map((element) => {
        return element.artist.split(" featuring")[0];
    })
}
// Write a function called getBigHits which takes an array of songs and returns an array of songs which were number one for 10 or more weeks.
function getBigHits(arr) {
    return arr.filter((elem) => {
        return elem.weeksAtNumberOne >= 10;
    })
}
// Write a function called getShortSongs which takes an array of songs and returns an array of songs which shorter than 3 minutes.
function getShortSongs(arr) {
    return arr.filter((elem) => {
        return +(elem.duration.split(':')[0]) < 3;
    })
}
// Write a function called getSongsByArtist which takes in an array of artists and the name of an artist and returns an array of songs by that artist.
function getSongsByArtist(arr, artist) {
    return arr.filter((elem) => {
        return elem.artist == artist;
    }).map((obj) => {
        return obj;
    })
}
// Refactor summerJamCount to use reduce!
function summerJamCount(arr) {
    return arr.reduce((acc, song) => {
        if (song.month >= 6 && song.month <= 8)
            ++acc;
        return acc;
    }, 0)
}
console.log(summerJamCount(songs));
// Write a function called getTotalDurationInSeconds which takes in an array of songs and returns the total amount of time (in seconds) it would take to listen to all of the songs. (Hint: can you use anything you've written already to help solve this problem?)
function getTotalDurationInSeconds(songs) {
    return songs.reduce((totalSeconds, song) => {
        return totalSeconds += durationToSeconds(song.duration)
    }, 0)
}
console.log(getTotalDurationInSeconds(songs));
// Write a function called getSongCountByArtist which takes in an array of songs and returns an object. The keys in the object should be artist names, and the values should be the number of songs by that artist in the orignal array.
function getSongCountByArtist(songs) {
    return songs.reduce((obj, elem) => {
        if (obj[elem.artist])
            obj[elem.artist]++;
        else
            obj[elem.artist] = 1;
        return obj;
    }, {})
}
console.log(getSongCountByArtist(songs));
// Write a function called averageWeeksAtNumberOne which takes in an array of songs and returns the average number of weeks that songs on the list were #1.
function averageWeeksAtNumberOne(songs) {
    return songs.reduce((weeks, song) => {
        return weeks + song.weeksAtNumberOne;
    }, 0) / songs.length
}
console.log(averageWeeksAtNumberOne(songs))































