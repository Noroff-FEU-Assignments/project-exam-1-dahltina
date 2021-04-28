
const url = "https://nomadlife.tinadahl.no/wp-json/wp/v2/posts/";
const imageUrl = url + "?_embed";
const urlTenResults = imageUrl + "?per_page=10";

const carouselContainer = document.querySelector(".carousel-container");

async function getLatestPosts() {

    try {
        const response = await fetch(imageUrl);
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

        carouselContainer.innerHTML += `<div class="carousel">
                                           <section>
                                               <img class="carousel-image" src="${post[i]._embedded['wp:featuredmedia']['0'].source_url}">
                                               <div class="overlay">
                                                   <h3 class="carousel-text">${post[i].title.rendered}</h3>
                                                   <p>${post[i].excerpt.rendered}</p>
                                               </div>
                                           </section>
                                       </div>
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
