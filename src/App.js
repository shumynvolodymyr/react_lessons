import './App.css';
import User from "./components/user/User";
import {useState} from "react";

const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];

function App() {
   let [counter, setCounter] = useState(0);
    let [usersArray,setUsers] =useState(users);

    const increment = () => setCounter(++counter);
    const minus = () => setCounter(counter-1);
    const reset = () => setCounter(0);



    const deleteUser =()=> {
        usersArray.pop();
        setUsers([...usersArray]);
    }

    return (
        <div>
            <div>

<button onClick={increment}>+</button>
<button onClick={minus}>-</button>
                <button onClick={reset}>reset</button>{counter}

            </div>
            <div>
                {
                    usersArray.map((user, index) =>
                        <User key={index}
                              {...user}
                        />
                    )

                }
                <button onClick={deleteUser}>Delete</button>
            </div>
        </div>

    )
}


export default App;

