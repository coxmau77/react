import { Button } from "./Button"

const people = [
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Noble Medin',
        role: 'Founder / CEO',
        imageUrl:
            'https://xsgames.co/randomusers/assets/avatars/male/19.jpg',
    },
    {
        name: 'Adell Ogaz',
        role: 'Co-Founder',
        imageUrl:
            'https://xsgames.co/randomusers/assets/avatars/female/19.jpg',
    },
    // More people...
]

export default function Team(props) {

    let { propiedadA, titleName, boolean } = props

    return (
        <div className="dark:bg-slate-800 py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">Componente Team() {propiedadA}</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Utilizamos la iteracion <em><b>(.map)</b></em> en un objeto {titleName} con todos los miembros del Team {boolean}
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-50">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>

                                    <Button txt="Execute console log" onClick={() => console.log(`Se ejecuto la funcionalidad del console log, para el miembro ${person.name}`)} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
