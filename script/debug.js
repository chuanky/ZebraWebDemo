function playVideo (videoID, iconID) {
	var video = document.getElementById(videoID);
	var icon = document.getElementById(iconID);

	if (video.paused) {
		video.play();
		icon.style.display = 'none';
	} else {
		video.paused();
		icon.style.display = 'block';
	}

};