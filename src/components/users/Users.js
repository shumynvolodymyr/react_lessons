import {useEffect, useState} from "react";
import User from "../user/User";
import "./Users.css"

export default function Users() {

    let [users, setUsers] = useState([]);
    let [singleUser, setSingleUser] =useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value]);
            });
    }, [])

    const search = (id) => {
        let find = users.find(value => value.id === id);
        console.log(find);
        setSingleUser(find);
    }

    return (
        <div className={'wrap'}>
            <div className={'usersBox'}>
                {
                    users.map((value) => <User
                        key={value.id}
                        item={value}
                        search={search}/>)
                }
            </div>
            <div className={'rightColumn'}>

                {
                    singleUser && <h2>{singleUser.id} - {singleUser.name}</h2>
                }

            </div>
        </div>
    );
}