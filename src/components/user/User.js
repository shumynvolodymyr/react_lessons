import "./User.css"
import {
    Link
} from "react-router-dom";

export default function User({item, url}) {

    let path = url +"/"+ item.id;

    return (
        <div className={'userBox'}>

            <div>
                <Link className={'characters'} to={{pathname: path, state: item}}>
                    {item.id}. {item.name}
                </Link>

            </div>

        </div>
    );
}