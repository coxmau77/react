let input = document.querySelector('input');
let form = document.querySelector('form');
let addToDoBtn = document.querySelector('#addToDo');
let ul = document.querySelector('ul');
let span = document.querySelector('span');

addToDoBtn.addEventListener('click', event => {

    event.preventDefault();

    let text = input.value;

    if (text) {

        const li = document.createElement('li');
        const p = document.createElement('p');

        p.textContent = text;
        li.appendChild(p);

        ul.appendChild(li);

        // Agrego un boton para borrar la tarea desde js
        li.appendChild(addDeletBtn());

        // console.log(text)
        span.style.display = 'none';

    }

    form.reset();
});

function addDeletBtn() {
    var btn_delete = document.createElement('button');
    btn_delete.innerHTML = '<i class="icono bi bi-x-circle"></i>';
    btn_delete.className = 'btn-delete focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900';

    document.querySelector('button', 'i');

    btn_delete.addEventListener('click', event => {

        console.log('hice click')
        ul.removeChild(event.target.parentElement);

        if (!document.querySelectorAll('li').length) span.style.display = 'block';

    });

    return btn_delete;

}

