          function equalizeSubtitles() {
  const subtitles = document.querySelectorAll('.how-you-build-block-subtitle');
  let maxHeight = 0;

  // reset the height before measuring
  subtitles.forEach(el => {
    el.style.height = 'auto';
  });

  // find the maximum height
  subtitles.forEach(el => {
    maxHeight = Math.max(maxHeight, el.offsetHeight);
  });

  // set the same height
  subtitles.forEach(el => {
    el.style.height = maxHeight + 'px';
  });
}

window.addEventListener('load', equalizeSubtitles);
window.addEventListener('resize', equalizeSubtitles);