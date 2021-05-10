import {useEffect, useState} from "react";
import User from "../user/User";
import "./Users.css";
import axiosInstance from '../../services/API'

export default function Users() {

    let [users, setUsers] = useState([]);
    let [singleUser, setSingleUser] = useState(null);

    useEffect(() => {
axiosInstance.get('/users').then(value => setUsers(value.data));
    }, [])

    const search = (id) => {
        let find = users.find(value => value.id === id);
        setSingleUser(find);
    }

    return (
        <div className={'wrapper'}>
            <div className={'usersBox'}>
                {
                    users.map((value) => <User
                        key={value.id}
                        item={value}
                        search={search}
                    />)
                }
            </div>
            <div className={'rightColumn'}>
                {
                    singleUser && <p><b>Name:</b> {singleUser.name}
                        <br/><b>Email:</b> {singleUser.email}
                        <br/><b>City:</b> {singleUser.address.city}
                        <br/><b>Street:</b> {singleUser.address.street}
                    </p>
                }
            </div>

        </div>
    );
}