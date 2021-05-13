import {useEffect, useState} from "react";
import {getPosts} from "../../services/API";
import Post from "../post/Post";
import "./Posts.css"

export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [singlePost, setSinglePost] = useState(null);

    useEffect(() => {
        getPosts().then(value => setPosts(value.data));
    }, [])

    const search = (id) => {
        let find = posts.find(value => value.id === id);
        setSinglePost(find);
    }

    return (

        <div className={'wrapPosts'}>
            <div className={'postsBox'}>
                {
                    posts.map((value) => <Post
                        key={value.id}
                        item={value}
                        search={search}
                    />)
                }
            </div>

            <div className={'rightColumnPost'}>
                {
                    singlePost && <p><b>Body:</b> {singlePost.body} </p>
                }
            </div>

        </div>
    );
}