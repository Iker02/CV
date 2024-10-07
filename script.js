// Actualizar la hora en tiempo real
function updateTime() {
    const timeElement = document.querySelector('.item.time p');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;
}

// Simular una canción con duración de 30 segundos
function startProgressBar() {
    const progressBar = document.querySelector('.progress-bar div');
    progressBar.style.animation = 'progress 30s linear infinite';
}

startProgressBar();


// Llamada inicial para actualizar la hora
updateTime();
// Actualiza la hora cada minuto
setInterval(updateTime, 60000);


document.addEventListener('keydown', function(event) {
    const radios = document.querySelectorAll('input[name="slider"]');
    let checkedIndex = Array.from(radios).findIndex(radio => radio.checked);
  
    if (event.key === 'ArrowRight' && checkedIndex < radios.length - 1) {
      radios[checkedIndex + 1].checked = true;
    } else if (event.key === 'ArrowLeft' && checkedIndex > 0) {
      radios[checkedIndex - 1].checked = true;
    }
  });
  
  