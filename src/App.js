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
import UserDetails from "./components/user_details/UserDetails";


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

                    <Route exact path={'/users'} render={(props) => {
                        return <Users {...props}/>
                    }}/>
                    <Route exact path={'/posts'} render={(props) => {
                        return <Posts {...props}/>
                    }}/>
                    <Route exact path={'/comments'} render={(props) => {
                        return <Comments {...props}/>
                    }}/>

                    <Route path={'/users/:id'} component={UserDetails}/>

                </Switch>
            </Router>

        </div>
    );
}

export default App;
