import {useEffect, useState} from "react";
import axiosInstance from '../../services/api'
export default function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(()=>{
axiosInstance.get('/posts')
    })

    return (
        <div>

        </div>
    );
}