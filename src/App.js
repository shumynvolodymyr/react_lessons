import './App.css';
import User from "./components/user";

function App() {
    return (
        <div>
            <User
                name={'vasya'}
                age={31}
                isMarried={false}
            />
            <User
                name={'petya'}
                age={30}
                isMarried={true}
            />
            <User
                name={'kolya'}
                age={29}
                isMarried={false}
            />
            <User
                name={'taras'}
                age={18}
                isMarried={true}
            />
            <User
                name={'ivan'}
                age={21}
                isMarried={false}
            />
            <User
                name={'artem'}
                age={24}
                isMarried={true}
            />


        </div>
    );
}

export default App;

