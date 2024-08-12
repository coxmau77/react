// https://lenguajejs.com/javascript/dom/insertar-elementos-dom/#api-de-elementos

// Crear
const before = document.createElement('before');
const prepend = document.createElement('prepend');
const append = document.createElement('append');
const after = document.createElement('after');

const section = document.createElement('section');

// Agregar
document.body.before(before);
document.body.prepend(prepend);
document.body.append(append);
document.body.after(after);

// Saber si un elemento esta conectado al DOM con su nodo
const nodeExist = document.querySelector('before').isConnected;

console.log(nodeExist); // true
console.log(before.isConnected) // true
console.log(section.isConnected); // false
