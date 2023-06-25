console.log("Hello, world!");

const h1 = document.querySelector('h1');
// const p = document.querySelectorAll('p');
// const parrafito = document.querySelector('.parrafito');
// const pid = document.getElementById('pid');
// const input = document.querySelector('input');

// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });

// h1.innerHTML = 'Hello, <br> world!';
// h1.innerText = 'Hello, <br> world!';
// console.log(h1.getAttribute('class'));

// h1.setAttribute('class', 'Rojo')
// h1.classList.add('Negro');
// h1.classList.remove('Negro');

// input.value = "456";

// const img =document.createElement('img');//Crea una constante de <img>
// img.setAttribute('src', 'https://www.diariopanorama.com/fotos/notas/2016/11/29/242861_20161129132150.jpg');//Le agregamos los atributos
// console.log(img);

// pid.innerHTML = ""//Borro el contenido que tenga ese contenedor en HTML
// pid.append(img);//Insertamos la imagen dentro de un contenedor

const form = document.querySelector('#form');
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
var resultado = document.querySelector("#resultado");

form.addEventListener('submit', btnonclick);

function btnonclick (event) {
    event.preventDefault();//Previene que se recargue la pagina, que es lo que haria por defecto un formulario al clickear un boton dentro del mismo.
    console.log(input1.value);
    console.log(input2.value);
    console.log(parseInt(input1.value) + parseInt(input2.value));
    console.log("La suma de "+ input1.value +" + " + input2.value + " da igual a "+ (parseInt(input1.value) + parseInt(input2.value)));
    resultado.innerHTML="";
    resultado.append(parseInt(input1.value) + parseInt(input2.value));
}