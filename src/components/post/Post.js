
import "./Post.css"
export default function Post({item, search}) {
    return (
        <div className={'postBox'}>

            <div>{item.id}.
                {item.title}</div>
            <div className={'button'}>
                <button onClick={() => search(item.id)}>Details</button>
            </div>
        </div>
    );
}