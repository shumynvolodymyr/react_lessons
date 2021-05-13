import {useEffect, useState} from "react";
import Comment from "../comment/Comment";
import "./Comments.css"
import {getComments} from "../../services/API"

export default function Comments(props) {
    let {match:{url}} =props;

    let [comments, setComments] = useState([]);
    let [singleComments, setSingleComments] = useState(null);

    useEffect(() => {
        getComments().then(value => setComments(value.data));
    }, [])

    const search = (id) => {
        let find = comments.find(value => value.id === id);
        setSingleComments(find);
    }

    return (
        <div className={'wrapComments'}>

            <div className={'commentsBox'}>
                {
                    comments.map((value) => <Comment
                        key={value.id}
                        item={value}
                        search={search}
                        url={url}
                    />)
                }
            </div>
            <div className={'rightComments'}>
                {
                    singleComments && <p><b>Email:</b> {singleComments.email}
                        <br/><b>Body:</b> {singleComments.body}
                    </p>
                }
            </div>
        </div>
    );
}


