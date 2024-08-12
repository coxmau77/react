import usersData from '../users-data.json';
import { CardUser } from './CardUser';
import '../assets/css/GridUsers.css'

export const GridUsers = () => {
    return (
        <ul className="grid-users">
            {usersData.map((user) => (
                <CardUser key={user.id} user = {user}/>
            ))}
        </ul>
    )
}
