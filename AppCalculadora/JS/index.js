// Colores de la calculadora
const cuerpo = document.getElementById('cuerpo');
const calculadoraSliderPanel = document.getElementById('calculadora-slider-panel');
const input = document.getElementById('input');
const calCuerpo = document.getElementById('calculadora-cuerpo');
const botones = document.querySelectorAll('.botonesNumero');
const textos = document.querySelectorAll('#calculadora-opciones');
calCuerpo.style.visibility = 'hidden';

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent;

        if (boton.id === 'sigDel') {
            if (input.value.length === 1 || input.value === 'ERROR') {
                input.value = '0';
            } else {
                input.value = input.value.slice(0, -1);
            }
            return;
        }

        if (boton.id === 'sigReset') {
            input.value = '0';
            return;
        }

        if (boton.id === 'sigMas') {
            input.value = input.value + '+';
            return;
        }

        if (boton.id === 'sigMenos') {
            input.value = input.value + '-';
            return;
        }

        if (boton.id === 'sigPor') {
            input.value = input.value + '*';
            return;
        }

        if (boton.id === 'sigDiv') {
            input.value = input.value + '/';
            return;
        }

        if (boton.id === 'sigIgual') {
            try {
                input.value = eval(input.value);
            } catch {
                input.value = 'ERROR';
            }
            return;
        }

        if (input.value === '0' || input.value === 'ERROR') {
            input.value = botonApretado;
            return;
        } else {
            input.value += botonApretado;
        }
    })
})

// Operaciones
const delBoton = document.getElementById('sigDel');
const resetBoton = document.getElementById('sigReset');
const igualBoton = document.getElementById('sigIgual');
const sigSuma = document.getElementById('sigMas');
const sigMenos = document.getElementById('sigMenos');
const sigPor = document.getElementById('sigPor');

// Variables
const primerEstilo = document.getElementById('temaPrimario');
const segundoEstilo = document.getElementById('temaSecundario');
const tercerEstilo = document.getElementById('temaTerciario');

// Index
let index = 0;
const temaPrimario = document.getElementById('temaPrimario');
const temaSecundario = document.getElementById('temaSecundario');
const temaTerciario = document.getElementById('temaTerciario');

primerEstilo.addEventListener('click', function () {
    index = 1;
    toggleSelector();
});

segundoEstilo.addEventListener('click', function () {
    index = 2;
    toggleSelector();
});

tercerEstilo.addEventListener('click', function () {
    index = 3;
    toggleSelector();
});

function toggleSelector() {
    if (index === 1) {
        calCuerpo.style.visibility = 'visible';
        temaPrimario.style.backgroundColor = '#CC412F';
        temaSecundario.style.backgroundColor = 'transparent';
        temaTerciario.style.backgroundColor = 'transparent';
        temaPrimario.style.transition = 'background-color 0.4s ease';

        cuerpo.style.backgroundColor = '#3B4664';
        calculadoraSliderPanel.style.backgroundColor = '#252D44';
        input.style.backgroundColor = '#181F32';
        input.style.color = '#FFFFFF';
        calCuerpo.style.backgroundColor = '#252D44';
        botones.forEach(function (boton) {
            boton.style.backgroundColor = '#EAE3DB';
            boton.style.borderBottom = '2px solid #B3A397';
            boton.style.color = '#35352D';
        });
        textos.forEach(function (texto) {
            texto.style.color = '#FFFFFF';
        });
        delBoton.style.backgroundColor = '#647299';
        delBoton.style.color = '#FFFFFF';
        delBoton.style.borderBottom = '2px solid #424E74';
        resetBoton.style.backgroundColor = '#647299';
        resetBoton.style.color = '#FFFFFF';
        resetBoton.style.borderBottom = '2px solid #424E74';
        igualBoton.style.backgroundColor = '#D13F30';
        igualBoton.style.color = '#FFFFFF';
        igualBoton.style.borderBottom = '2px solid #8F2316';
    } else if (index === 2) {
        calCuerpo.style.visibility = 'visible';
        temaPrimario.style.backgroundColor = 'transparent';
        temaSecundario.style.backgroundColor = '#CC412F';
        temaTerciario.style.backgroundColor = 'transparent';
        temaSecundario.style.transition = 'background-color 0.4s ease';

        cuerpo.style.backgroundColor = '#E6E6E6';
        calculadoraSliderPanel.style.backgroundColor = '#D2CDCE';
        input.style.backgroundColor = '#EEEEEE';
        input.style.color = '#35352D';
        calCuerpo.style.backgroundColor = '#D3CDCD';
        botones.forEach(function (boton) {
            boton.style.backgroundColor = '#E5E4E0';
            boton.style.borderBottom = '2px solid #A59F93';
            boton.style.color = '#35352D';
        });
        textos.forEach(function (texto) {
            texto.style.color = '#35352D';
        });
        delBoton.style.backgroundColor = '#378287';
        delBoton.style.borderBottom = '2px solid #1D5B66';
        delBoton.style.color = '#FFFFFF';
        resetBoton.style.backgroundColor = '#378287';
        resetBoton.style.borderBottom = '2px solid #1D5B66';
        resetBoton.style.color = '#FFFFFF';
        igualBoton.style.backgroundColor = '#C85401';
        igualBoton.style.borderBottom = '2px solid #873B01';
        igualBoton.style.color = '#FFFFFF';
    } else if (index === 3) {
        calCuerpo.style.visibility = 'visible';
        temaPrimario.style.backgroundColor = 'transparent';
        temaSecundario.style.backgroundColor = 'transparent';
        temaTerciario.style.backgroundColor = '#6EFAF1';
        temaTerciario.style.transition = 'background-color 0.4s ease';

        cuerpo.style.backgroundColor = '#17062A';
        calculadoraSliderPanel.style.backgroundColor = '#1E0836';
        input.style.backgroundColor = '#1E0836';
        input.style.color = '#FBE339';
        calCuerpo.style.backgroundColor = '#1E0836';
        botones.forEach(function (boton) {
            boton.style.backgroundColor = '#331B4D';
            boton.style.borderBottom = '2px solid #BB15F3';
            boton.style.color = '#FBE339';
        });
        textos.forEach(function (texto) {
            texto.style.color = '#FBE339';
        });
        delBoton.style.backgroundColor = '#55077C';
        delBoton.style.borderBottom = '2px solid #BB15F3';
        delBoton.style.color = '#FFFFFF';
        resetBoton.style.backgroundColor = '#55077C';
        resetBoton.style.borderBottom = '2px solid #BB15F3';
        resetBoton.style.color = '#FFFFFF';
        igualBoton.style.backgroundColor = '#05DAD3';
        igualBoton.style.borderBottom = '2px solid #6EFAF1';
        igualBoton.style.color = '#35352D';
    }
}

