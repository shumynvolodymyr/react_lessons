export default function User(props) {

    let {name, age, isMarried} = props;

    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{isMarried.toString()}</p>
        </div>
    );
}

