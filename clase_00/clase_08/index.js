// import saludo from "./funcion-a"
// import saludar from './scripts/funcion-a';

// saludar();

// console.log("Hola mundo")
const btnAnterior = document.querySelector('.btnPrevious');
const btnSiguiente = document.querySelector('.btnNext');
let pagina = 1;

// captirar el evento del boton
btnAnterior.addEventListener('click', () => {
    if (pagina > 1) {
        pagina--;
        cargarpeliculas();
    }
})

btnSiguiente.addEventListener('click', () => {
    if (pagina < 100) {
        pagina++;
        cargarpeliculas();
    }
})


async function cargarpeliculas() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=${pagina}`);

        if (response.status) {
            const datosPeliculaConvertido = await response.json();

            let peliculas = "";

            datosPeliculaConvertido.results.forEach(pelicula => {
                peliculas += `
                <div class="peliculas">
                <img src="https://image.tmdb.org/t/p/w300${pelicula.poster_path}" alt="${pelicula.original_title}">
                <img src="https://image.tmdb.org/t/p/w300${pelicula.backdrop_path}" alt="${pelicula.original_title}">
                    <h3 class="titulo">${pelicula.title}</h3>
                    <p class="descriptcion">${pelicula.overview}</p>
                    <i class="fecha">${pelicula.release_date}</i>
                </div>
                `
            });

            // console.log(peliculas)

            const contenedor = document.getElementById('contenedor');
            contenedor.innerHTML = peliculas;


        } else if (response.status === 401) {
            console.log("clave incorrecta");
        } else if (response.status === 404) {
            console.log("El sitio no existe");
        }

    } catch (error) {
        console.error('ERROR -->', error.message);
    }
}


// console.log(btnAnterior)
// console.log(btnSiguiente)
cargarpeliculas();