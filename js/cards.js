function createCard(data, id, url) {
    return $("<section id='" + id + "' class='m-auto'></section>").append(
        $("<div class='card shadow m-3'></div>").append(
            $("<img src='./" + getImagePath(url, data.author) + "' class='card-img-top img-fluid' style='max-width: 300px' alt='Image'>"),
            $("<div class='card-body text-center' style='max-width: 300px'></div>").append(
                $("<h3 class='card-title'>\"" + data.title + "\"</h3>"),
                $("<h5 class='card-subtitle p-2 font-weight-light'>" + data.author + "</h5>"),
                $("<h6 class='card-subtitle p-2 font-weight-light'>" + capitalizeFirstLetter(getType(url)) + " Tessellation</h6>"),
                $("<button type='button' class='mt-4 btn btn-primary open-popup' data-toggle='modal' data-target='#popup'>View Larger</button>")
            )
        )
    )
}

function loadCards(obj, data, url) {
    const shuffledData = shuffleArray(data)
    for (let i = 0; i < shuffledData.length; i++) {
        obj.append(createCard(shuffledData[i], i, url))
    }
}

$(document).ready(function () {
    loadCards(getCardsContainer(this.URL), getData(this.URL), this.URL)
})