
const url = "https://nomadlife.tinadahl.no/wp-json/wp/v2/posts/?per_page=10&page=1&_embed";
const loadMoreBtn = document.querySelector(".load-more");
// ?per_page=12&offset=15


async function getLatestPosts() {

    try {
        const response = await fetch(url);
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

        const newDate = new Date(post[i].date).toLocaleString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });

        blogContainer.innerHTML += `<a href="post.html?id=${post[i].id}">
                                        <div class="blog-page-box">
                                            <img src="${post[i]._embedded['wp:featuredmedia']['0'].source_url}"  class="box-image box-image-one">
                                            <div class="box-text box-text-one">
                                                <h3 class="carousel-text post-h3">${post[i].title.rendered}</h3>
                                                <p class="date">${newDate}</p>
                                                <p class="excerpt">${post[i].excerpt.rendered}</p>
                                            </div>
                                        </div>
                                    </a>`
    }
}

// load more posts

let page = 2;
const url2 = "https://nomadlife.tinadahl.no/wp-json/wp/v2/posts/?per_page=10&page=" + page + "&_embed";

async function getMorePosts() {

    try {
        const response = await fetch(url2);
        const results = await response.json();
        displayPosts(results);
    }
    catch (error) {
        console.log(error);
    }
}

const loadMore = async () => {
    page++
    await getMorePosts()
    loadMoreBtn.style.display = "none";
}

loadMoreBtn.addEventListener("click", loadMore)




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

    featuredContainer.innerHTML += `<a href="post.html?id=50">
                                        <img src="${post._embedded['wp:featuredmedia']['0'].source_url}"  class="carousel-image">
                                        <div class="overlay">
                                            <h3 class="carousel-text">${post.title.rendered}</h3>
                                            <p>${post.excerpt.rendered}</p>
                                        </div>
                                    </div>
                                </a>`
}


// const mediaUrl = "https://nomadlife.tinadahl.no/wp-json/wp/v2/media?per_page=100";

// const json = await (await fetch(url + key)).json();
// const jsonSorted = json.sort((a, b) => a - b);
