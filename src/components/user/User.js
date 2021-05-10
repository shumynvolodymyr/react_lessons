import "./User.css"
export default function User({item, search}) {
    return (
        <div className={'userBox'}>

            <div className={'characters'}>
                {item.id}.
                {item.name}
            </div>

            <div className={'button'}>
                <button onClick={() => search(item.id)}>INFO</button>
            </div>


        </div>
    );
}