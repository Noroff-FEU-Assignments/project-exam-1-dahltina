
const pageTitle = document.querySelector("title");
const postContainer = document.querySelector(".blog-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://nomadlife.tinadahl.no/wp-json/wp/v2/posts/" + id + "?_embed";

async function getPost() {

    try {
        const response = await fetch(url);
        const result = await response.json()
        console.log(result);

        postContainer.innerHTML += `<div class="intro">
                                        <h1>${result.title.rendered}</h1>
                                        <p class="date">${result.date} - Travel - USA</p>
                                        <img src="${result._embedded['wp:featuredmedia']['0'].source_url}" class="featured-image">
                                    </div>
                                    <div class="post-container">
                                        <div class="post-content">
                                            ${result.content.rendered}
                                        </div>
                                    </div>`

        pageTitle.innerHTML += `${result.title.rendered}`;
    }

    catch (error) {
        console.log(error);
    }
}

getPost();


// console.log(url);
// const postDetailsUrl = url + "/blocks";
// console.log(postDetailsUrl);


// image modal enlarge on click

const modalImg = document.getElementsByClassName("wp-block-image");
const modal = document.querySelector(".modal");
const modalImage = document.querySelectorAll("modal-content");
const image = document.getElementsByTagName("img");


image.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.scr;
    console.log("image click");
}

postContainer.addEventListener('click', function (e) {
    if (e.target && e.target.class == 'wp-block-image') {
        console.log("click");
    }
});

// Get the element, add a click listener...
postContainer.addEventListener("click", function (e) {
    // e.target is the clicked element!
    // If it was a list item
    if (e.target && e.target.nodeName == "IMG") {
        // List item found!  Output the ID!
        console.log("An image was clicked!");
        modal.style.display = "block";
        modalImg.src = this.scr;
    }
});

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
