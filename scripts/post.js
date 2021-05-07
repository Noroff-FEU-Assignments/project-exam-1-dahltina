
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

getPost()

// image modal on click

const closeBtn = document.querySelector(".closeBtn");
let imageClicked = null;



postContainer.addEventListener("click", function (e) {

    const modal = document.querySelector(".modal-container");

    if (e.target && e.target.nodeName == "IMG") {
        console.log("An image was clicked!");

        modal.innerHTML += `<div class="modal">
                                        <div class="modal-content>
                                            <span class="closeBtn">&times;</span>
                                            <img class="modal-content" id="api-img" src="${e.target.currentSrc}">
                                        </div>
                                    </div>`

        closeBtn.style.display = "block";
    }

    closeBtn.onclick = function (e) {
        modal.style.display = "none";
        closeBtn.style.display = "none"
    }
});




// const modalContainer = document.querySelector("-modal-container");
// const body = document.querySelector("body");

// postContainer.forEach((zoom) => {
//     postContainer.addEventListener("click", function (e) {

//         if (e.target && e.target.nodeName == "IMG") {

//             console.log("image click");
//             body.style.overflow = "hidden";
//             modalContainer.style.display = "flex";
//             modalContainer.innerHTML = `<div class="modal" id="modal">
//                                             <div class="modal-content>
//                                                 <span class="closeBtn">&times;</span>
//                                                 <img class="modal-content" id="api-img" src="${e.target.currentSrc}">
//                                             </div>
//                                         </div>`;
//         }

//         const close = document.querySelector(".closeBtn");
//         close.addEventListener("click", () => {
//             body.style.overflow = "unset";
//             modalContainer.style.display = "none";
//             modalContainer.innerHTML = "";


//         });
//     });
// });


// figure.forEach((zoom) => {
//     zoom.addEventListener("click", (e) => {
//         body.style.overflow = "hidden";
//         modal.innerHTML = `<div class="modal">
//                                 <img class="modal-img" src="${e.target.currentSrc}">
//                             </div>`
//     })
// })


