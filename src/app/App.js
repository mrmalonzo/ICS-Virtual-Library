import React, { 
    Component, 
    Fragment
} from 'react';

import { 
    Redirect, 
    Route, 
    BrowserRouter, 
    Switch 
} from 'react-router-dom';

import { 
    Navbar, 
    Footer 
} from '@common';


import {
    LandingPage,
    ProfilePage,
    BrowsePage,
    NotFoundPage,
    ForbiddenPage,
    AdminPage,
    AboutPage

} from '../pages/'

import { message } from 'antd';
import 'antd/dist/antd.css';


export default class App extends Component {

    state = {   
        user: null,
        toSearch: null
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
    }

    passToBrowse = data => {
        
        this.setState({
            toSearch: data
        });
    }

    prompt = (message) => {

        message.error("This is an Error Message")

    }


    render() {


        return (

            <Fragment>
                <Navbar data={ this.state.user } storeData={ this.storeData } prompt={this.prompt}/>
                
                    
                <Switch>
                    <Route exact path="/"> <LandingPage passToBrowse = {this.passToBrowse} /> </Route> 
                    <Route exact path="/about"> <AboutPage/> </Route> 
                    <Route exact path="/browse/"> <BrowsePage data={this.state.toSearch} /> </Route>
                    
                    
                    { this.state.user && (    
                            <Switch>
                                <Route exact path="/account/profile/"> <ProfilePage/> </Route>
                                <Route exact path="/account/assign"> <AdminPage/> </Route>

                                <Redirect exact from="/account" to="/account/profile"/>
                                <Route> <NotFoundPage/> </Route>
                            </Switch>                            
                            
                            
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