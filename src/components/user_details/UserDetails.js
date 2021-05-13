import {useEffect, useState} from "react";

export default function UserDetails(props) {
    // console.log(props);
    let {match: {params: {id}}, location:{state}} = props;
    let [user, setUser] = useState(null);
    useEffect(()=>{
        setUser(state)
    },[id])
    return (

        <div className={'rightColumn'}>

            <b>Name:</b> {state.name}
            <br/>
            <b>Phone:</b> {state.phone}
            <br/>
            <b>Email:</b> {state.email}
            <br/>
            <b>Street:</b> {state.address.street}
            <br/>
            <b>City:</b> {state.address.city}


        </div>
    );
}