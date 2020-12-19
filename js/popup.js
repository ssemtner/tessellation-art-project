function setPopupData(data, id, url) {
    $("#popup-label").text('"' + data[id].title + '"')
    $("#popup-author").text(data[id].author)
    $("#popup-image").attr("src", getImagePath(url, data[id].author))
    $("#popup-type").text(capitalizeFirstLetter(getType(url)) + " Tessellation")
}

$(document).ready(function () {
    $(".open-popup").click(function () {
        setPopupData(getData(this.baseURI), $(this).parents()[2].id, this.baseURI)
    })
})

