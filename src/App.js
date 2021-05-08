import './App.css';
import Users from "./components/users/Users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div>

            {/*<Users/>*/}

            <Router>
                <Link to={'/users'}>to users</Link>
                <br/>
                <Link to={'/posts'}>to posts</Link>
                <Switch>

                    <Route path={'/users'} render={() => (<Users/>)}/>
                    <Route path={'/posts'} render={()=>(<div> <b>404 :(</b></div>)}/>

                </Switch>
            </Router>

        </div>
    );
}

export default App;
