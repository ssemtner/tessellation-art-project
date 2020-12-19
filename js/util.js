function getData (url) {
    switch (url.split("/")[url.split("/").length - 1]) {
        case "rotation.html":
            return rotationData

        case "reflection.html":
            return reflectionData

        case "translation.html":
            return translationData

        default:
            throw Error
    }
}

function getCardsContainer(url) {
    switch (url.split("/")[url.split("/").length - 1]) {
        case "rotation.html":
            return $("#rotation-cards")

        case "reflection.html":
            return $("#reflection-cards")

        case "translation.html":
            return $("#translation-cards")

        default:
            throw Error
    }
}
