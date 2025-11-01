import { podcasts, genres, seasons } from "./data.js";

const addDetails = () => {
  const innerPodcast = document.getElementById("podcast-modal-content");

  const podcastDetails = document.createElement("div");
  podcastDetails.classList.add("inner-modal");

  podcastDetails.innerHTML = `<h1 id="pod-title"></h1><img id="modal-img"/>
            <div class="modal-info">
              <h1>Description</h1>
              <p id="modal-desc"></p>
              <h1>Genres</h1>
              <div id="modal-genres"></div>
              <p id="modal-last-updated">Last Updated</p>
            </div>
            <div id="podcast-seasons" class="modal-podcast-seasons">
            </div>`;

  innerPodcast.appendChild(podcastDetails);
};

addDetails();
