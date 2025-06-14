  // Handling a click on a poster — replacing it with a video
  document.querySelectorAll('.video-poster').forEach(poster => {
    poster.addEventListener('click', function () {
      const videoSrc = this.dataset.video;
      const posterSrc = this.dataset.poster;

      const video = document.createElement('video');
      video.src = videoSrc;
      video.autoplay = true;
      video.playsInline = true;
      video.muted = false;
      video.loop = false;
      video.classList.add('custom-video');
      video.style.width = '100%';
      video.style.height = '100%';
      video.style.objectFit = 'cover';

      // save the path to the poster for later restoration
      video.dataset.poster = posterSrc;

      // Add a video click handler to stop it and return the poster
      video.addEventListener('click', function (e) {
        e.stopPropagation();

        const newPoster = document.createElement('div');
        newPoster.className = 'video-poster';
        newPoster.dataset.video = video.src;
        newPoster.dataset.poster = video.dataset.poster;
        newPoster.innerHTML = `
          <img src="${video.dataset.poster}" alt="Poster">
          <button class="play-button"></button>
        `;

        video.replaceWith(newPoster);

        // Re-attach the handler to the new poster
        attachPosterClickHandler(newPoster);
      });

      this.replaceWith(video);
    });
  });

  // If posters are inserted dynamically, we will add logic to them
  function attachPosterClickHandler(poster) {
    poster.addEventListener('click', function () {
      const videoSrc = this.dataset.video;
      const posterSrc = this.dataset.poster;

      const video = document.createElement('video');
      video.src = videoSrc;
      video.autoplay = true;
      video.playsInline = true;
      video.muted = false;
      video.loop = false;
      video.classList.add('custom-video');
      video.style.width = '100%';
      video.style.height = '100%';
      video.style.objectFit = 'cover';
      video.dataset.poster = posterSrc;

      video.addEventListener('click', function (e) {
        e.stopPropagation();
        const newPoster = document.createElement('div');
        newPoster.className = 'video-poster';
        newPoster.dataset.video = video.src;
        newPoster.dataset.poster = video.dataset.poster;
        newPoster.innerHTML = `
          <img src="${video.dataset.poster}" alt="Poster">
          <button class="play-button"></button>
        `;
        video.replaceWith(newPoster);
        attachPosterClickHandler(newPoster);
      });

      this.replaceWith(video);
    });
  }