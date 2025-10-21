import { podcasts, genres, seasons } from "./data.js";

podcasts.forEach((podcast) => {
  const thumbnail = document.getElementById("thumbnail-container");

  const podcastThumbnail = document.createElement("div");
  podcastThumbnail.classList.add("thumbnail");

  podcastThumbnail.innerHTML = `
      <img class="podcast-img" src="${podcast.image}" alt="${podcast.title}" />
      <h1 class="podcast-title">${podcast.title}</h1>
      <div class="seasonDetails">
        <i class="fa fa-calendar"></i>
        <p>${podcast.seasons} seasons</p>
      </div>
      <div>
        <p>${podcast.genres?.join(", ")}</p>
        <p>Updated ${podcast.updated}</p>
      </div>
    `;

  thumbnail.appendChild(podcastThumbnail);
});
