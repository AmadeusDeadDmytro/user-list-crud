import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import UserList from "./pages/UserList";
import UserCreate from "./pages/UserCreate";
import UserEdit from "./pages/UserEdit";
import UserDetails from "./pages/UserDetails";
import {Provider} from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path={'/users'}>
                    <UserList />
                </Route>
                <Route exact path={'/user/create'}>
                    <UserCreate />
                </Route>
                <Route exact path={'/user/:id'}>
                    <UserDetails />
                </Route>
                <Route exact path={'/user/edit'}>
                    <UserEdit />
                </Route>
                <Redirect to={'/users'} from={'/'} />
            </Switch>
        </Router>
    </Provider>
  );
}

export default App;
