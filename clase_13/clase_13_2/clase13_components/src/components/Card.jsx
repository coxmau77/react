//rafc (react arrow function component)

/** Uso de "Tailwind" para componentes con valores booleanos renderizado condicional*/
// export const Card = ({nombre, fecha, clubes, mundial, booleano}) => {
//   return (
//     <div classNameName="m-6">
//         <h2 classNameName={booleano?"bg-green-400":"bg-red-400"}>{nombre}</h2>
//         <small>{fecha}</small>
//         <p>{clubes}</p>
//         <p>{mundial ? "Gano copa mundia" : "Sigue participando"}</p>
//         <span classNameName={booleano?"bg-green-400":"bg-red-400"}>{booleano ? "Verdadero" : "Falso"}</span>
//     </div>
//   )
// }
/** Uso de "clases" para componentes con valores booleanos renderizado condicional*/
export const Card = ({ nombre, fecha, clubes, mundial, booleano }) => {

    /** Aqui podremos utilizar logica con JS entes del return */
    
    // return (
    //     <div classNameName="m-6">
    //         <h2 classNameName={booleano ? "primary" : "secondary"}>{nombre}</h2>
    //         <small>{fecha}</small>
    //         <p>{clubes}</p>
    //         <p>{mundial ? "Gano copa mundial" : "Sigue participando"}</p>
    //         <span classNameName={booleano ? "bg-green-300" : "bg-red-300"}>{booleano ? "Verdadero" : "Falso"}</span>
    //     </div>
    // )

//     return(
//     <>
//         {/* <div classNameName="m-6">
//             <h2 classNameName={booleano ? "primary" : "secondary"}>{nombre}</h2>
//             <small>{fecha}</small>
//             <p>{clubes}</p>
//             <p>{mundial ? "Gano copa mundial" : "Sigue participando"}</p>
//             <span classNameName={booleano ? "bg-green-300" : "bg-red-300"}>{booleano ? "Verdadero" : "Falso"}</span>
//         </div> */}
//         <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
//             <img
//                 alt=""
//                 src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//                 className="h-56 w-full rounded-md object-cover"
//             />

//             <div className="mt-2">
//                 <dl>
//                     <div>
//                         <dt className="sr-only">Price</dt>

//                         <dd className="text-sm text-gray-500">$240,000</dd>
//                         <dd className="text-sm text-gray-500"><small>{fecha}</small></dd>
                        
//                     </div>

//                     <div>
//                         <dt className="sr-only">Address</dt>
//                         <dd><h2 classNameName={booleano ? "primary" : "secondary"}>{nombre}</h2></dd>
//                         <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
                        
//                         <p>{clubes}</p>
//                         <p>{mundial ? "Gano copa mundial" : "Sigue participando"}</p>
//                         <span classNameName={booleano ? "bg-green-300" : "bg-red-300"}>{booleano ? "Verdadero" : "Falso"}</span>
//                     </div>
//                 </dl>

//                 <div className="mt-6 flex items-center gap-8 text-xs">
//                     <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                         <svg
//                             className="size-4 text-indigo-700"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 stroke-linejoin="round"
//                                 stroke-width="2"
//                                 d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
//                             />
//                         </svg>

//                         <div className="mt-1.5 sm:mt-0">
//                             <p className="text-gray-500">Parking</p>

//                             <p className="font-medium">2 spaces</p>
//                         </div>
//                     </div>

//                     <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                         <svg
//                             className="size-4 text-indigo-700"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 stroke-linejoin="round"
//                                 stroke-width="2"
//                                 d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//                             />
//                         </svg>

//                         <div className="mt-1.5 sm:mt-0">
//                             <p className="text-gray-500">Bathroom</p>

//                             <p className="font-medium">2 rooms</p>
//                         </div>
//                     </div>

//                     <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//                         <svg
//                             className="size-4 text-indigo-700"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 stroke-linejoin="round"
//                                 stroke-width="2"
//                                 d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//                             />
//                         </svg>

//                         <div className="mt-1.5 sm:mt-0">
//                             <p className="text-gray-500">Bedroom</p>

//                             <p className="font-medium">4 rooms</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </a>
//     </>)
    return(
        <>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-sky-500 py-6 sm:py-12">
                <div
                    className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                    <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                    <div className="relative z-10 mx-auto max-w-md">
                        <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
                            <path strokeLinecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>
                        </span>
                        <div
                            className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                            <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share
                                online.</p>
                        </div>
                        <div className="pt-5 text-base font-semibold leading-7">
                            <p>
                                <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs
                                    &rarr;
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
