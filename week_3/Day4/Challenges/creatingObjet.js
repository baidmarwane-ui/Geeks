class Video {
	constructor(title, uploader, time) {
		this.title = title;
		this.uploader = uploader;
		this.time = time;
	}

	watch() {
		console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
	}
}

const firstVideo = new Video("JavaScript Basics", "Youssef", 600);
firstVideo.watch();

const secondVideo = new Video("Object-Oriented Programming", "Karim", 900);
secondVideo.watch();

const videoData = [
	["HTML Fundamentals", "Nadia", 480],
	["CSS Layouts", "Salma", 720],
	["JavaScript Basics", "Youssef", 600],
	["Object-Oriented Programming", "Karim", 900],
	["Web Accessibility", "Amine", 540],
];

const videos = videoData.map(([title, uploader, time]) => new Video(title, uploader, time));
videos.forEach((video) => video.watch());