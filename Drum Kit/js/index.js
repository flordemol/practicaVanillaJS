// Agregar sonido y animación al tocar tecla
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio) return;
    
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

// Agregar sonido y animación al hacer click
function playSoundClick(){
    const audio = document.querySelector(`audio[data-key="${this.getAttribute('data-key')}"]`);
    if(!audio) return;
    
    audio.currentTime = 0;
    audio.play();
    this.classList.add('playing');
}

// Eliminar transición en las teclas
function removeTransition(){
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

keys.forEach(key => key.addEventListener('click', playSoundClick));

window.addEventListener('keydown', playSound);