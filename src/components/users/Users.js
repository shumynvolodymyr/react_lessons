import {useEffect, useState} from "react";
import User from "../user/User";
import "./Users.css";
import axiosInstance from "../../services/api";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [singleUser, setSingleUser] =useState(null);

    useEffect(() => {
axiosInstance.get('/users').then(value => setUsers([...value.data]));
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