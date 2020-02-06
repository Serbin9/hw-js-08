import images from "./gallery-items.js";
const galleryList = document.querySelector(".js-gallery");
const modalWindov = document.querySelector(".js-lightbox");
const imageInModalWindov = document.querySelector(".lightbox__image");

const createGalleryList = function(arr) {
  let pageWatch = "";
  for (let i = 0; i < arr.length; i++) {
    pageWatch += `<li class="gallery__item">
            <a
              class="gallery__link"
              href= #
            >
              <img
                class="gallery__image"
                src="${arr[i].preview}"
                data-source="${arr[i].original}"
                alt="${arr[i].description}"
                data-index="${i}"
              />
            </a>
          </li>`;
  }
  return pageWatch;
};
function openModalWindow(event) {
  if (event.target.nodeName !== "IMG") return;
  modalWindov.classList.add("is-open");
  imageInModalWindov.setAttribute("src", event.target.getAttribute("data-source"));
  imageInModalWindov.setAttribute("alt", event.target.alt);

  document.onkeydown = function(e) {
    if (e.key === "Escape") {
      closeModalWondow(e);
    }
    };
}

function closeModalWondow(event) {
  if (event.target.nodeName === "IMG") return;
  modalWindov.classList.remove("is-open");
  imageInModalWindov.setAttribute("src", "");
  imageInModalWindov.setAttribute("alt", "");
}

galleryList.insertAdjacentHTML("afterbegin", createGalleryList(images));
galleryList.addEventListener("click", openModalWindow);
modalWindov.addEventListener("click", closeModalWondow);