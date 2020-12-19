function createCard(data, id) {
    const link = ""

    return $("<section id='" + id + "' class='m-auto'></section>").append(
        $("<div class='card shadow m-3'></div>").append(
            $("<img src='" + data.image + "' class='card-img-top img-fluid' style='max-width: 300px' alt='Image'>"),
            $("<div class='card-body text-center'></div>").append(
                $("<h3 class='card-title'>" + data.title + "</h3>"),
                $("<h5 class='card-subtitle font-weight-light'>" + data.author + "</h5>"),
                $("<button type='button' class='mt-4 btn btn-primary open-popup' data-toggle='modal' data-target='#popup'>View Larger</button>")
            )
        )
    )
}

function loadCards(obj, data) {
    for (let i = 0; i < data.length; i++) {
        obj.append(createCard(data[i], i))
    }
}

$(document).ready(function () {
    loadCards(getCardsContainer(this.URL), getData(this.URL))
})