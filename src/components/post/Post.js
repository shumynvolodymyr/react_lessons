import "./Post.css"
import {
    Link
} from "react-router-dom";

export default function Post({item, url}) {

    let path = url + "/" + item.id;

    return (
        <div className={'postBox'}>

            {item.id}. {item.title}

            <Link to={{pathname: path, state: item}}>
                <button> Details </button>
            </Link>
        </div>
    );
}