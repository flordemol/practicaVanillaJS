const imagen = document.querySelector('#img');
const flechaIzq = document.querySelector('.fa-chevron-left');
const flechaDer = document.querySelector('.fa-chevron-right');
const controles = document.querySelectorAll('input'); //NodeList

const cambiarImagen = (e) => {
    // Obtener número de foto actual
    const [,nombreFoto] = imagen.src.split('img/foto');
    let [numFoto,] = nombreFoto.split('.');
    let numFotoParseado = parseInt(numFoto);

    // Cambiar foto de acuerdo a la flecha tocada y el núm de la foto
    e.target.id == 'left' && (imagen.src = `img/foto${numFotoParseado-1}.jpg`);
    e.target.id == 'right' && (imagen.src = `img/foto${numFotoParseado+1}.jpg`);
    ((numFotoParseado >= 3) & (e.target.id == 'right')) && (imagen.src = `img/foto1.jpg`);
    ((numFotoParseado <= 1) & (e.target.id == 'left')) && (imagen.src = `img/foto3.jpg`);
}

flechaIzq.addEventListener('click', cambiarImagen);
flechaDer.addEventListener('click', cambiarImagen);


function detectarCambios(){

    const sufijo = (this.name === "blur" || this.name === "borde") ? "px" : "";
    document.documentElement.style.setProperty(
        `--${this.name}`, this.value + sufijo
    );
    if(document.querySelector('input[name="grices"]').checked){
        document.querySelector('.foto').style.filter = "grayscale(1)";
    } else {
        document.querySelector('.foto').style.filter = "grayscale(0)";
    }
}

controles.forEach(control => control.addEventListener('change', detectarCambios));
controles.forEach(control => control.addEventListener('mousemove', detectarCambios))
