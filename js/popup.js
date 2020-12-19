function setPopupData(data, id) {
    $("#popup-label").text(data[id].title)
    $("#popup-author").text(data[id].author)
    $("#popup-image").attr("src", data[id].image)
}

$(document).ready(function () {
    $(".open-popup").click(function () {
        setPopupData(getData(this.baseURI), $(this).parents()[2].id)
    })
})

