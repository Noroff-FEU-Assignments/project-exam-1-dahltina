
const url = "https://nomadlife.tinadahl.no/wp-json/wp/v2/posts/";
const imageUrl = url + "?_embed";
const urlTenResults = imageUrl + "?per_page=10";

async function getLatestPosts() {

    try {
        const response = await fetch(imageUrl);
        const results = await response.json();
        displayPosts(results);
    }
    catch (error) {
        console.log(error);
    }
}

getLatestPosts()

// display all posts blog page
const blogContainer = document.querySelector(".blog-container");

function displayPosts(post) {
    console.log(post);
    for (let i = 0; i < post.length; i++) {

        blogContainer.innerHTML += `<div class="blog-page-box">
                                        <img src="${post[i]._embedded['wp:featuredmedia']['0'].source_url}"  class="box-image box-image-one">
                                        <div class="box-text box-text-one">
                                            <h3 class="carousel-text post-h3">${post[i].title.rendered}</h3>
                                            <p class="date">${post[i].date} - Travel - USA</p>
                                            <p class="excerpt">${post[i].excerpt.rendered}</p>
                                        </div>
                                    </div>`
    }
}


// get featured post
const featuredPostUrl = "https://nomadlife.tinadahl.no/wp-json/wp/v2/posts/50/?_embed";

async function getFeaturedPost() {

    try {
        const response = await fetch(featuredPostUrl);
        const results = await response.json();
        displayFeaturedPost(results);
    }
    catch (error) {
        console.log(error);
    }
}

getFeaturedPost()

const featuredContainer = document.querySelector(".featured-post-container")

function displayFeaturedPost(post) {
    console.log(post);

    featuredContainer.innerHTML += `<img src="${post._embedded['wp:featuredmedia']['0'].source_url}"  class="carousel-image">
                                    <div class="overlay">
                                        <h3 class="carousel-text">${post.title.rendered}</h3>
                                        <p>${post.excerpt.rendered}</p>
                                    </div>
                                </div>`
}


// div class="featured-post-container">
//                 <img class="featured-post-image" src="images/kerala-3.jpg">
//                 <div class="overlay">
//                     <h3 class="carousel-text"></h3>
//                     <p></p>
//                 </div>
//             </div>


// function displayPosts(post) {
//     console.log(post);
//     post.forEach(function (post) {

//         carouselContainer.innerHTML += `<div class="carousel">
//                                                 <section>
//                                                     <img class="carousel-image" src="${post._embedded['wp:featuredmedia']['0'].source_url}">
//                                                     <div class="overlay">
//                                                         <h3 class="carousel-text">${post.title.rendered}</h3>
//                                                         <p>${post.excerpt.rendered}</p>
//                                                     </div>
//                                                 </section>
//                                         </div>
//                                     </div>`
//     })
// }


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
