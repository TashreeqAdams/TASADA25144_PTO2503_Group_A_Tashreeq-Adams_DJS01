import { podcasts, genres, seasons } from "./data.js";

const addDetails = () => {
  const innerPodcast = document.getElementById("podcast-modal-content");

  const podcastDetails = document.createElement("div");
  podcastDetails.classList.add("inner-modal");

  podcastDetails.innerHTML = `<img id="modal-img"/>
            <div class="modal-info">
              <p>Description</p>
              <p id="modal-desc"></p>
              <p>Genres</p>
              <div id="modal-genres"></div>
              <p id="modal-last-updated">Last Updated</p>
            </div>
            <div class="podcast-seasons">
              <h1>Seasons</h1>
            </div>`;

  innerPodcast.appendChild(podcastDetails);
};

addDetails();
