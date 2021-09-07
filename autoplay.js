function autoplay() {
	// Play current video
	document.querySelector('[title="Play Video"]')?.click?.();
  
  // Unfortunately we cannot successfully requestFullscreen from API call,
  // it must be requested in the context of a human interaction.
  // As a workaround, CSS is applied to make the video the size of the screen,
  // and the user can fullscreen their browser.

	const videoElement = document.querySelector('#video-js video');
	const nextVideoUrl = window.top.document.querySelector('[rel="next"]')?.href;

  // Go to next video when current one ends
	if (videoElement) {
		videoElement.addEventListener('ended', () => {
			if (nextVideoUrl) {
				window.top.location.href = nextVideoUrl;
			}
		});
	}
}

autoplay();