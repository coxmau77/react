// https://lenguajejs.com/javascript/dom/insertar-elementos-dom/#api-de-inserci%C3%B3n-adyacente

// .insertAdjacentElement(position, element)
const beforebegin = document.createElement('beforebegin');
const afterbegin = document.createElement('afterbegin');
const beforeend = document.createElement('beforeend');

document.body.insertAdjacentElement('beforebegin', beforebegin);
document.body.insertAdjacentElement('afterbegin', afterbegin);
document.body.insertAdjacentElement('beforeend', beforeend);

document.body.insertAdjacentElement('afterbegin', document.createElement('nav'));
document.querySelector('nav').insertAdjacentElement('beforebegin', document.createElement('header'));


insertElement('afterbegin', 'article');

addTopElement('div')
addBottomElement('div')

// function createElement(element) {
//    return document.createElement(element);
// }

// document.getElementsByTagName('nav') = addTopElement('p')

function insertElement(position, element) {
   return document.body.insertAdjacentElement(position, document.createElement(element));
}

// let mi_span = createElement('span');

function addTopElement(element) {
   return document.body.insertAdjacentElement("afterbegin", document.createElement(element));
}

function addBottomElement(element) {
   return document.body.insertAdjacentElement("beforeend", document.createElement(element));
}