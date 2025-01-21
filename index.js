// script.js
document.querySelector('.btn-class-name').addEventListener('click', () => {
    const container = document.querySelector('.container'); // Selecciona el contenedor principal
    const video = document.getElementById('videoPlayer'); // Selecciona el video

    // Oculta todos los elementos dentro del contenedor excepto el video
    Array.from(container.children).forEach(child => {
        if (child !== video) {
            child.style.display = 'none'; // Oculta los elementos
        }
    });

    // Muestra el video y lo reproduce
    video.style.display = 'block';
    video.play();
});
