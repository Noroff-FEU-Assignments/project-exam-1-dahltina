const postContainer = document.querySelector(".post-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://nomadlife.tinadahl.no/wp-json/wp/v2/posts/" + id + "?_embed";

console.log(url);

async function getPost() {

    try {
        const response = await fetch(url);
        const result = await response.json()
        console.log(result);

        postContainer.innerHTML += `<h1>${result.title.rendered}</h1>
                                    <p class="date">${result.date} - Travel - USA</p>
                                    <img class="featured-image src="${result._embedded['wp:featuredmedia']['0'].source_url}">
                                    <div class="post-content">
                                        ${result.content.rendered}
                                    </div>`
    }
    catch (error) {
        console.log(error);
    }
}

getPost();

