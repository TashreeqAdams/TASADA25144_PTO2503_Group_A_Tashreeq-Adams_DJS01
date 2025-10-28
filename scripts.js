import { podcasts, genres, seasons } from "./data.js";

podcasts.forEach((podcast) => {
  const thumbnail = document.getElementById("thumbnail-container");

  const podcastThumbnail = document.createElement("div");
  podcastThumbnail.classList.add("thumbnail");

  const genreTitles = podcast.genres
    .map((genreId) => {
      const genre = genres.find((g) => g.id === genreId);
      return genre ? genre.title : "Unknown";
    })
    .join(", ");

  podcastThumbnail.innerHTML = `
      <img class="podcast-img" src="${podcast.image}" alt="${podcast.title}" />
      <h1 class="podcast-title">${podcast.title}</h1>
      <div class="seasonDetails">
        <i class="fa fa-calendar"></i>
        <p>${podcast.seasons} seasons</p>
      </div>
        <p class="podcast-genres">${genreTitles}</p>
        <p class="podcast-update">Updated ${podcast.updated}</p>
    `;

  thumbnail.appendChild(podcastThumbnail);
});
