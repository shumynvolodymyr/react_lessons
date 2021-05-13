import "./Comment.css"
import {
    Link
} from "react-router-dom";

export default function Comment({item, search, url}) {

    let path = url + "/" + item.id;

    return (
        <div className={'commentBox'}>
            <Link className={'characters'} to={{pathname: path, state: item}}>
                {item.id}. {item.name}
            </Link>

            <button onClick={() => search(item.id)}>    &#9997;</button>

        </div>
    );
}