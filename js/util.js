function getType(url) {
    return (url.split("/")[url.split("/").length - 1]).split(".")[0]
}

function getData (url) {
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