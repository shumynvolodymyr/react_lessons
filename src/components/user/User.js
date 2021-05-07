export default function User(props) {
    let {name, age, isMarried}=props;
    return (
        <div>
<h2>{name} {isMarried.toString()}</h2>
            <div>{age}</div>
        </div>
    );
}