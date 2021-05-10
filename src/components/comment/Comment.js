import "./Comment.css"
export default function Comment({item, search}) {
    return (
        <div className={'commentBox'}>
            <div>
                {item.id}.
                {item.name}
            </div>
            <div className={'button'}>
                <button onClick={()=>search(item.id)}>	&#9997;</button>
            </div>

        </div>
    );
}