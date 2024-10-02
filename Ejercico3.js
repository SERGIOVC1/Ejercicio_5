
const array = ["Joaquin", 1, ["Hola", "Adios"], true];


array.forEach((elemento, i) => {
    
    localStorage.setItem(`variable${i}`, JSON.stringify(elemento));
});

for (let i = 0; i < array.length; i++) {

    const valor = JSON.parse(localStorage.getItem(`variable${i}`));

   
    const div = document.createElement('div');
    
   
    div.textContent = valor;

  -
    document.body.appendChild(div);
}
