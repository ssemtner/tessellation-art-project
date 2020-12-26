// Used From https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function getType(url) {
    return (url.split("/")[url.split("/").length - 1]).split(".")[0]
}

function getData(url) {
    switch (getType(url)) {
        case "rotation":
            return rotationData

        case "reflection":
            return reflectionData

        case "translation":
            return translationData

        default:
            throw Error
    }
}

function getCardsContainer(url) {
    return $("#" + getType(url) + "-cards")
}

function getImagePath(url, author) {
    const name = author.split(" ")[0] + author.split(" ")[1][0]

    return "assets/" + getType(url) + "/" + name + ".png"
}

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}