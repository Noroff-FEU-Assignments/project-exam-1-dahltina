
const url = "https://nomadlife.tinadahl.no/wp-json/wp/v2/posts/";
const imageUrl = url + "?_embed";
// ?per_page=10

const carouselContainer = document.querySelector(".carousel-container");

async function getLatestPosts() {

    try {
        const response = await fetch(imageUrl);
        const results = await response.json();
        createCarousel(results);
    }
    catch (error) {
        console.log(error);
    }
}

getLatestPosts()

function createCarousel(post) {
    console.log(post);
    post.forEach(function (post) {

        carouselContainer.innerHTML += `<div class="carousel slides">
                                            <img class="carousel-image" src="${post._embedded['wp:featuredmedia']['0'].source_url}">
                                            <button class="previous"><img class="arrow-right" src="images/arrow-right.png" alt="next slide"></button>
                                            <button class="next"><img class="arrow-left" src="images/arrow-left.png" alt="next slide"></button>
                                            <div class="overlay">
                                                <h3 class="carousel-text">${post.title.rendered}</h3>
                                                <p>${post.excerpt.rendered}</p>
                                            </div>
                                        </div>
                                    </div>`
    })
}

const nextBtn = document.querySelector(".arrow-right");
const previousBtn = document.querySelector(".arrow-left");
const slides = document.querySelector(".slides");




// const mediaUrl = "https://nomadlife.tinadahl.no/wp-json/wp/v2/media?per_page=100";

// async function getMedia() {

//     try {
//         const response = await fetch(mediaUrl);
//         const image = await response.json();
//         createCarousel(image);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// getMedia()


// const json = await (await fetch(url + key)).json();
// const jsonSorted = json.sort((a, b) => a - b);
