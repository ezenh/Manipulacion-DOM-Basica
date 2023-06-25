let objeto = {
    name: "Eze",
    lastname: "Nielsen Hillen",
    age: 35,
    gender: "male",
    sign: "virgo"
    };
  
  console.log(objeto.lastname);
  var propiedades = Object.keys(objeto).length;
  console.log(propiedades);
  
  console.log(Object.keys(objeto)[2]);
  console.log(Object.values(objeto)[2]);
  
  for (let i = 0; i < Object.keys(objeto).length; i++){
    console.log(Object.keys(objeto)[i] +": "+Object.values(objeto)[i])
  }
  