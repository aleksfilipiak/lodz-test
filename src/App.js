import React, {Component} from 'react';
import './App.css';
import AddUser from './addUser.js'
import ListOfUsers from './listOfUsers.js'

class App extends Component {
    render() {
        return (
            <div>
                <AddUser/>
                <ListOfUsers/>
            </div>
        );
    }
}

export default App;
