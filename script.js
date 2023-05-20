const progresso_linha = document.getElementById('progresso__linha');
const circulos = document.querySelectorAll('.circulo');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

contadorActive = 1;

next.addEventListener('click', () => {
  contadorActive++;

  if(contadorActive > circulos.length) {
    contadorActive = circulos.length;
  }

  update();
  console.log(contadorActive);
});

prev.addEventListener('click', () => {
  contadorActive--;

  if(contadorActive < 1) {
    contadorActive = 1;
  }

  update();
});

function update() {
  circulos.forEach((circulo, index) => {
    if(index < contadorActive) {
      circulo.classList.add('active');
    } else {
      circulo.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  progresso_linha.style.width = (actives.length - 1) / (circulos.length - 1) * 100 + "%";
  
  if(contadorActive === 1) {                                          
    prev.disabled = true;
  } else if(contadorActive === circulos.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
 } 
 
}















/* const progresso_linha = document.getElementById('progresso__linha');
const circulos = document.querySelectorAll('.circulo');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let contadorActive = 1;

next.addEventListener('click', () => {
  contadorActive++;

  if(contadorActive > circulos.length) {
    contadorActive = circulos.length;
  }

  update();
});

prev.addEventListener('click', () => {
  contadorActive--;

  if(contadorActive < 1) {
    contadorActive = 1;
  }

  update();
});

function update() {
  circulos.forEach((circulo, index) => {
    if(index < contadorActive) {
      circulo.classList.add('active');
    } else {
      circulo.classList.remove('active');
    }
  });

 const actives = document.querySelectorAll('.active');
 progresso_linha.style.width = (actives.length - 1) / (circulos.length - 1) * 100 + "%";

 if(contadorActive === 1) {
  prev.disabled = true;
 } else if(contadorActive === circulos.length) {
  next.disabled = true;
 } else {
  prev.disabled = false;
  next.disabled = false;
 }

}

*/