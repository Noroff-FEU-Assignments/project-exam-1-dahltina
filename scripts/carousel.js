
const url = "https://nomadlife.tinadahl.no/wp-json/wp/v2/posts/?_embed";

const carouselContainer = document.querySelector(".carousel-container");

async function getLatestPosts() {

    try {
        const response = await fetch(url);
        const results = await response.json();
        displayCarousel(results);
    }
    catch (error) {
        console.log(error);
    }
}

getLatestPosts()

function displayCarousel(post) {

    for (let i = 0; i < post.length; i++) {

        if (i === 5) {
            break;
        }

        carouselContainer.innerHTML += `<a href="post.html?id=${post[i].id}" class="carousel">
                                            <section>
                                                <img class="carousel-image" src="${post[i]._embedded['wp:featuredmedia']['0'].source_url}">
                                                <div class="overlay">
                                                    <h3 class="carousel-text">${post[i].title.rendered}</h3>
                                                    <p class="carousel-text">${post[i].excerpt.rendered}</p>
                                                </div>
                                            </section>
                                        </a>
                                    </div>`
    }
}

const nextBtn = document.querySelector(".arrow-right");
const previousBtn = document.querySelector(".arrow-left");
const slides = document.getElementsByClassName("slides");

let sliderIndex = 0;

previousBtn.addEventListener("click", function () {

    sliderIndex = (sliderIndex > 0) ? sliderIndex - 1 : 0;
    carouselContainer.style.transform = "translate(" + (sliderIndex) * -20 + "%)";
})

nextBtn.addEventListener("click", function () {

    sliderIndex = (sliderIndex < 4) ? sliderIndex + 1 : 4;
    carouselContainer.style.transform = "translate(" + (sliderIndex) * -20 + "%)";
})
