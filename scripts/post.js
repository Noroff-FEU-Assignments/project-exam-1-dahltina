
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

        const newDate = new Date(result.date).toLocaleString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });

        postContainer.innerHTML += `<div class="intro">
                                        <h1>${result.title.rendered}</h1>
                                        <p class="date">${newDate}</p>
                                        <img src="${result._embedded['wp:featuredmedia']['0'].source_url}" class="featured-image">
                                    </div>
                                    <div class="post-container">
                                        <div class="post-content">
                                            ${result.content.rendered}
                                        </div>
                                    </div>`

        pageTitle.innerHTML += `${result.title.rendered}`

    }

    catch (error) {
        console.log(error);
    }
}


// getPost().then(() => {
//     addEvents()
// })

// console.log(url);
// const postDetailsUrl = url + "/blocks";
// console.log(postDetailsUrl);
// ${result._embedded['wp:term']['0'].name}

// let li = document.createElement('li');
// document.querySelector('ul').appendChild(li);


// image modal enlarge on click

const modalImg = document.getElementsByClassName("wp-block-image");
const modal = document.querySelector(".modal");
const modalImage = document.querySelectorAll("modal-content");
const apiImg = document.getElementById("api-img");
const images = document.getElementsByTagName("IMG");
const figure = document.getElementsByTagName("FIGURE");
const image = document.querySelectorAll("IMG");

function triggerModal() {
    figure.onclick = function () {
        console.log("hey bitch");
    }
}

getPost().then(() => {
    triggerModal()
})



// postContainer.addEventListener("click", function (e) {
//     if (e.target && e.target.nodeName == "IMG") {
//         console.log("An image was clicked!");
//         // modal.style.display = "block";
//         apiImg.src = this.scr;
//         apiImg.style.color = "red";
//     }
// });

// image.forEach(image => {
//     if (!image.classList.contains("class") {
//       image.addEventListener("click", function)
//     }
//   })


// close modal
window.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}
