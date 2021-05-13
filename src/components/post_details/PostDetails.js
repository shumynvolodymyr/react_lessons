import {useEffect, useState} from "react";

export default function PostDetails(props) {

    // console.log(props);

    let {location:{state}} = props;
   let [post, setPost] = useState(null);

   useEffect(()=>{
       setPost(state)
   },[])

    return (
        <div className={'rightColumnPost'}>
            <b>Title:</b> {state.title}
            <br/>
            <b>Body:</b> {state.body}
        </div>
    );
}