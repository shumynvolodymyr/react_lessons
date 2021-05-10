import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div>

            <Router>

                <div className={'navBar'}>

                    <Link to={'/users'} className={"link"}>To users</Link>

                    <Link to={'/posts'} className={"link"}>To posts</Link>

                    <Link to={'/comments'} className={"link"}>To comments</Link>
                </div>

                <Switch>

                    <Route path={'/users'} render={() => (<Users/>)}/>
                    <Route path={'/posts'} render={() => (<Posts/>)}/>
                    <Route path={'/comments'} render={() => (<Comments/>)}/>

                </Switch>
            </Router>

        </div>
    );
}

export default App;
