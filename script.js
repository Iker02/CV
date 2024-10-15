const container = document.getElementById('modelContainer');
const video = document.createElement('video');
video.src = 'assets/Grabación 2024-10-08 104051.mp4'; 
video.autoplay = true;
video.loop = true;
video.muted = true; 
video.playsInline = true; // Para móviles
container.appendChild(video);

    // JavaScript para añadir el video de fondo
    const videoContainer = document.getElementById('videoContainer');
    const backgroundVideo = document.createElement('video');

    backgroundVideo.src = 'assets/matrix.mp4';  // Ruta del video
    backgroundVideo.autoplay = true;
    backgroundVideo.loop = true;
    backgroundVideo.muted = true;
    backgroundVideo.playsInline = true; // Para dispositivos móviles

    // Añadir estilos de ajuste
    backgroundVideo.style.position = 'absolute'; // Fija el video al fondo
    backgroundVideo.style.top = '50%';
    backgroundVideo.style.left = '50%';
    backgroundVideo.style.width = '100%';
    backgroundVideo.style.height = '100%';
    backgroundVideo.style.minWidth = '100%';  // Asegura que el video no se corte
    backgroundVideo.style.minHeight = '100%';
    backgroundVideo.style.transform = 'translate(-50%, -50%)'; // Centra el video
    backgroundVideo.style.objectFit = 'cover';  // Mantiene las proporciones del video llenando el contenedor
    backgroundVideo.style.zIndex = '0'; // Asegura que el video esté detrás del contenido

    videoContainer.appendChild(backgroundVideo);