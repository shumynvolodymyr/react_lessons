import {useEffect, useState} from "react";
import {getPosts} from "../../services/API";
import Post from "../post/Post";
import "./Posts.css"

export default function Posts(props) {

   let{match:{url}} = props;

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts(value.data));
    }, [])

    return (

        <div className={'wrapPosts'}>
            <div className={'postsBox'}>
                {
                    posts.map((value) => <Post
                        key={value.id}
                        item={value}
                        url={url}
                    />)
                }
            </div>
        </div>
    );
}