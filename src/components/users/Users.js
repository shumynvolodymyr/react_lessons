import {useEffect, useState} from "react";
import User from "../user/User";
import "./Users.css";
import {getUsers} from '../../services/API'


export default function Users({match: {url}}) {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, [])

    return (
        <div className={'wrapper'}>
            <div className={'usersBox'}>
                {
                    users.map((value) => <User
                        key={value.id}
                        item={value}
                        url={url}
                    />)
                }
            </div>
        </div>
    );
}