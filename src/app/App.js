import React, { Component, Fragment} from 'react';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';

import { Navbar, Footer } from '../@common/'

import LandingPage from '../pages/LandingPage';
import ProfilePage from '../pages/ProfilePage';
import NotFoundPage from '../pages/NotFoundPage';
import ForbiddenPage from '../pages/ForbiddenPage';
import AdminPage from '../pages/AdminPage';
import AboutPage from '../pages/AboutPage';



export default class App extends Component {

    state = {   
        user: null
    }

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem("user"))
        this.setState({
            user: data
        });
    }

    storeData = data => {
        this.setState({
            user: data
        });

        localStorage.setItem('user', JSON.stringify(data))
        console.log(data)
    }


    render() {


        return (

            <Fragment>
                <Navbar data={ this.state.user } storeData={ this.storeData }/>
                
                    
                <Switch>
                    <Route exact path="/"> <LandingPage/> </Route> 
                    <Route exact path="/about"> <AboutPage/> </Route> 
                    
                    
                    { this.state.user && (    
                            <Fragment>
                                <Route exact path="/account/profile/"> <ProfilePage/> </Route>
                                <Route exact path="/account/assign"> <AdminPage/> </Route>

                                <Redirect exact from="/account" to="/account/profile"/>
                            </Fragment>                            
                            
                            
                    )}

                    <Route exact path="/account/profile/"> <ForbiddenPage/> </Route>
                    <Route exact path="/account/assign"> <ForbiddenPage/> </Route>

                    <Route> <NotFoundPage/> </Route>

                </Switch> 

                
                
                <Footer/>
            </Fragment>

        );
    }
    
}