// var video;
	var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto Play is set to ", video.autoplay);
	console.log("Loop is set to " , video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

var speed = 1
document.querySelector("#slower").addEventListener("click", function() {
	speed *= .9;
	video.playbackRate = speed;
	console.log("Playback rate is ", speed);
});

document.querySelector("#faster").addEventListener("click", function() {
	speed /= .9;
	video.playbackRate = speed;
	console.log("Playback rate is ", speed);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true)
	{
		video.muted = false;
		mute.textContent = 'Mute';
		console.log("Audio is unmuted");
	}
	else
	{
		video.muted = true;
		mute.textContent = 'Unmute';
		console.log("Audio is muted");
	}
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime != video.duration){
		video.currentTime += 10
	}
	else
	{
		video.currentTime = 0
	}
	console.log("Current location of video: ", video.currentTime);
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log(document.querySelector("#volume"))
	console.log("The current value is", video.volume * 100 + "%");
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});
