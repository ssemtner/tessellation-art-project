function createGeometryCard(data, url) {
    return $("<section class='m-auto'></section>").append(
        $("<div class='card shadow m-3'></div>").append(
            $(
                `<img src='./${getImagePath(
                    url,
                    data.author
                )} ' class='card-img-top img-fluid' style='max-width: 300px' alt='Image'>`
            ),
            $(
                "<div class='card-body text-center' style='max-width: 300px'></div>"
            ).append(
                $(
                    `<h5 class='card-subtitle p-2 font-weight-light'>${data.author}</h5>`
                ),
                $(
                    "<h6 class='card-subtitle p-2 font-weight-light'>Geometry Art</h6>"
                ),
                $(
                    `<a class='mt-4 btn btn-primary' href='${data.link}' target='_blank'>Read More</a>`
                )
            )
        )
    );
}

$(document).ready(function () {
    const shuffledData = shuffleArray(getData(this.URL));
    for (let i = 0; i < shuffledData.length; i++) {
        getCardsContainer(this.URL).append(
            createGeometryCard(shuffledData[i], this.URL)
        );
    }
});
