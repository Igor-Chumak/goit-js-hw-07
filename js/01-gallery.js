import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryItemREf = document.querySelector(".gallery");

galleryItemREf.insertAdjacentHTML("afterbegin", createGalleryMarkup(galleryItems));
// ref.galeryItem.addEventListener("click", targetImgClickHandle);

galleryItemREf.onclick = (e) => {
  e.preventDefault();
  basicLightbox
    .create(
      `
      <img src="${e.target.dataset.source}" width="1200" height="853">
  `
    )
    .show();
};

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `    <li class="gallery__item">
        <a class="gallery__link" href=${original}">
           <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </li>`;
    })
    .join("");
}

// function targetImgClickHandle(e) {
//   e.preventDefault();
//   basicLightboxCreate(e.target.dataset.source);
// }

// function basicLightboxCreate(url) {
//   basicLightbox
//     .create(
//       `
//       <img src="${url}" width="1200" height="853">
//   `
//     )
//     .show();
// }

// import { galleryItems } from "./gallery-items.js";
// // console.log(galleryItems);
// // Change code below this line
// const galleryItemREf = document.querySelector(".gallery");
// const GalleryMarkup = createGalleryMarkup(galleryItems);

// galleryItemREf.insertAdjacentHTML("afterbegin", GalleryMarkup);
// galleryItemREf.addEventListener("click", targetImgClickHandle);

// // function
// function createGalleryMarkup(galleryItems) {
//   return galleryItems
//     .map(({ original, preview, description }) => {
//       return `    <li class="gallery__item">
//         <a class="gallery__link" href=${original}">
//            <img
//             class="gallery__image"
//             src="${preview}"
//             data-source="${original}"
//             alt="${description}"
//         />
//         </a>
//     </li>`;
//     })
//     .join("");
// }

// function targetImgClickHandle(e) {
//   e.preventDefault();
//   basicLightboxCreate(e.target.dataset.source);
//   // return;
// }

// function basicLightboxCreate(url) {
//   basicLightbox
//     .create(
//       `
//       <img src="${url}" width="1200" height="853">
//   `
//     )
//     .show();
// }
//   import * as basicLightbox from "basiclightbox";
//   const instance = basicLightbox.create(`
//     <img src="${url} width="1280" height="1280">
// `);
//   console.log("instance", instance);
//   instance.show();

// basicLightbox
//   .create(
//     `
//     <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg" width="1200" height="853">
// `
//   )
//   .show();
//
// const basicLightbox = require("basiclightbox");
// import * as basicLightbox from "basiclightbox";

// const instance = basicLightbox.create(`
//     <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg" width="1200" height="853">
// `);
// instance.show();
