const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const allImages = images
  .flatMap(({ url, alt }) => `<li> <img src=${url} alt=${alt} /> </li>`)
  .join("");

// const allImages = images.flatMap((img) => {
//   const list = document.createElement("li");
//   const image = document.createElement("img");
//   image.src = img.url;
//   image.alt = img.alt;
//   list.appendChild(image);

//   return list;
// });

const gallery = document.querySelector(".gallery");
// gallery.append(...allImages);
gallery.insertAdjacentHTML("beforeend", allImages);
// gallery.style.listStyleType = "none";
gallery.setAttribute("style", "list-style-type:none");
