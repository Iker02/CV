const container = document.getElementById('modelContainer');
const video = document.createElement('video');
video.src = 'assets/Grabación 2024-10-08 104051.mp4'; 
video.autoplay = true;
video.loop = true;
video.muted = true; 
video.playsInline = true; // Para móviles
container.appendChild(video);
