import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import NotFound404 from '../pages/NotFound404';
import AssignRole from '../pages/AssignRole';


export default class App extends Component {

    state = {
        
        user: {}
    }

    storeData = data => {
        this.setState({
            user: data
        });
    }

    render() {

        return (


            <Switch>

                <Route exact path={"/"}
                render = { props =>(
                    <Landing { ... props} storeData={this.storeData}  />
                )}/> 
                
                <Route exact path={"/home"}
                    render = { props =>(
                        <Home { ... props} data={this.state.user.first_name} storeData={this.storeData} />
                )}/> 

                <Route exact path="/home/account/profile"> <Profile data={this.state.user.first_name}/> </Route>
                <Route exact path="/home/account/assign"><AssignRole/></Route>


                <Route> <NotFound404/> </Route>
                
            
            </Switch>
        


        );
    }
    
}
