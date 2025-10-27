import { podcasts, genres, seasons } from "./data.js";

const modal = document.getElementById("modal");
const openModal = document.getElementsByClassName("thumbnail");
const closeModal = document.getElementsByClassName("close");

// Loop through all elements with class "thumbnail"
for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", () => {
    const currentPodcast = podcasts[i];
    console.log("Current podcast:", currentPodcast);

    if (currentPodcast && currentPodcast.id) {
      const descEl = document.getElementById("modal-desc");

      if (descEl) {
        descEl.innerText = currentPodcast.description;
      } else {
        console.warn("Object ID not found");
      }

      modal.showModal();
    } else {
      console.warn("Podcast ID not found");
    }
    // console.log(currentPodcast.id);
  });
}

// Loop through all elements with class "close"
for (let i = 0; i < closeModal.length; i++) {
  closeModal[i].addEventListener("click", () => {
    modal.close();
  });
}
