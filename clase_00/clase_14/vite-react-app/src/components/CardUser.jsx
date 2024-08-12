import '../assets/css/CardUser.css'

export const CardUser = ({user}) => {

    let imgURL = `https://randomuser.me/api${user.image}`

  return (
    <li className="card-user">
        <div>
            <img src={imgURL} alt={user.name} title={user.username}/>
            <p>id: {user.id}</p>
            <p>name: {user.name}</p>
            <p>user name: {user.username}</p>
            <p>email: {user.email}</p>
            <p>address street: {user.address.street}</p>
            <p>address sute: {user.address.sute}</p>
            <p>address city: {user.address.city}</p>
            <p>address zipcode: {user.address.zipcode}</p>
            <p>address geo lat: {user.address.geo.lat}</p>
            <p>address geo lng: {user.address.geo.lng}</p>
            <p>phone: {user.phone}</p>
            <p>website: {user.website}</p>
            <p>company name: {user.company.name }</p>
            <p>company catchPhrase: {user.company.catchPhrase }</p>
            <p>company bs: {user.company.bs }</p>
            <hr />
        </div>
    </li>
  )
}

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     },
//     "image": "https://randomuser.me/api/portraits/men/1.jpg"
//   },