const API = "https://api.themoviedb.org/3";

// https://youtu.be/8aT3WUbJazY?list=PLLmrEAMmrRFz7spslTChC8F0w1m30U7t4&t=1332 debemos configurar la API en estos ejemplos debemos hacerso asi ya que estamos en el front cundo lleguemos a Backend se hara diferente en proximas clases
export const get = path => {
    return fetch (API + path, {

        Authorizaion: "Bearer xxxxxxxx.xxxxxxx",
        "Content Type": "application/json;charset=utf-8"

    }).then(results => results.json());
}

// Terminar de ver la clase
// https://youtu.be/8aT3WUbJazY?list=PLLmrEAMmrRFz7spslTChC8F0w1m30U7t4&t=3254