import { podcasts, genres, seasons } from "./data.js";

const modal = document.getElementById("modal");
const openModal = document.getElementsByClassName("thumbnail");
const closeModal = document.getElementsByClassName("close");

// Loop through all elements with class "thumbnail"
for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", () => {
    const currentPodcast = podcasts[i];
    // console.log("Current podcast:", currentPodcast);
    const podcastGenres = genres[i];
    // console.log(podcastGenres);
    const podcastSeasons = seasons[i];
    console.log("podcastSeasons =", podcastSeasons);

    if (currentPodcast && currentPodcast.id) {
      const descEl = document.getElementById("modal-desc");
      const imgEl = document.getElementById("modal-img");
      const genreEl = document.getElementById("modal-genres");
      const updatedEl = document.getElementById("modal-last-updated");
      const seasonsEl = document.getElementById("podcast-seasons");

      if (descEl) {
        descEl.innerText = currentPodcast.description;
      } else {
        console.warn("Object ID not found");
      }

      if (imgEl) {
        imgEl.src = currentPodcast.image;
      } else {
        console.warn("img not found");
      }

      if (genreEl) {
        genreEl.innerText = podcastGenres.title;
      } else {
        console.warn("genre not found");
      }

      if (updatedEl) {
        updatedEl.innerText = `Last updated: ${currentPodcast.updated}`;
      } else {
        console.warn("date not found");
      }

      if (seasonsEl && Array.isArray(podcastSeasons.seasonDetails)) {
        seasonsEl.innerHTML = "<h1>Seasons</h1>";
        podcastSeasons.seasonDetails.forEach((season) => {
          const seasonItem = document.createElement("div");
          seasonItem.classList.add("season");

          seasonItem.innerText = `${season.title} - ${season.episodes} episodes`;

          seasonsEl.appendChild(seasonItem);
        });
      } else {
        console.warn("seasons not found");
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
