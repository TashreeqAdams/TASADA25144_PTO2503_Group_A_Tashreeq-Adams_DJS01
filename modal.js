import { podcasts, genres, seasons } from "./data.js";

const modal = document.getElementById("modal");
const openModal = document.getElementsByClassName("thumbnail");
const closeModal = document.getElementsByClassName("close");

// Loop through all elements with class "thumbnail"
for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", () => {
    modal.showModal(); // open modal
  });
}

// Loop through all elements with class "close"
for (let i = 0; i < closeModal.length; i++) {
  closeModal[i].addEventListener("click", () => {
    modal.close(); // close modal
  });
}
