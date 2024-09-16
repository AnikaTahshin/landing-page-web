const data = [
  {
    id: "1",
    name: "Army Green Active Short Sleeve",
    // path: "./assets/img/img-11.png", // Updated path
    price: "$ 34.95",
  },
  {
    id: "2",

    name: "Army Green Active Short Sleeve",
    // url: "./assets/img/img-11.png",
    price: "$ 34.95",
  },
  {
    id: "3",

    name: "Army Green Active Short Sleeve",
    // url: "./assets/img/img-11.png",
    price: "$ 34.95",
  },
  {
    id: "4",

    name: "Army Green Active Short Sleeve",
    // url: "./assets/img/img-11.png",
    price: "$ 34.95",
  },
];

const homeImgDiv = document.getElementById("home-img-div");

// Loop through the data array
for (let i = 0; i < data.length; i++) {
  // Create a new div to hold the image and text

  let element = `<div  id="${i}">
                <p class="img-text">${i.name}</p>
                         </div>`;

  const divEl = document.createElement("div");
  divEl.innerHTML = element;

  //shimmer added in blog-column-1 section
  section.appendChild(divEl);
}
