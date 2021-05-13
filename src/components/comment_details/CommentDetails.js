import "./CommentDetails.css"
import {useEffect, useState} from "react";

export default function CommentDetails(props) {

    console.log(props)

    let {match: {params: {id}}, location: {state}} = props;
    let [comment, setComment] = useState(null);

    useEffect(() => {
        setComment(state)
    }, [id])

    return (
        <div className={'commentDetails'}>
            <b>Email:</b> {state.email}
            <hr/>
            <b>Name:</b> {state.name}
            <hr/>
            <b>Body:</b> {state.body}
        </div>
    );
}