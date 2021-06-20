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
    AboutPage,
    AssignPage,
    ActivityPage,
    SummaryPage,
    BooksPage,
    PublicationsPage

} from '../pages/'



export default class App extends Component {

    state = {   
        user: null,
        toSearch: null,
        toView: null
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

    storeToView = data => {

    }


    render () {


        return (

            <Fragment>
                <Navbar data={ this.state.user } storeData={ this.storeData }/>
                
                    
                <Switch>
                    <Route exact path="/"> <LandingPage passToBrowse = {this.passToBrowse} /> </Route> 
                    <Route exact path="/about"> <AboutPage/> </Route> 
                    <Route exact path="/browse/"> <BrowsePage data={this.state.toSearch} /> </Route>
                    
                    
                    { this.state.user && (    
                            

                        this.state.user.user_type == "admin" ? (
                            <Switch>
                                <Route exact path="/account/profile/"> <AdminPage { ... this.state.user }/> </Route>
                                <Route exact path="/account/assign"> <AssignPage/> </Route>
                                <Route exact path="/account/activity-log"> <ActivityPage/> </Route>
                                <Route exact path="/account/books"> <BooksPage/> </Route>
                                <Route exact path="/account/publications"> <PublicationsPage/> </Route>
                                <Route exact path="/account/summary-reports"> <SummaryPage/> </Route>
                                <Route> <NotFoundPage/> </Route>
                            </Switch>

                        ) : (
                            <Switch>
                                <Route exact path="/account/profile/"> <ProfilePage/> </Route>
                                <Redirect exact from="/account" to="/account/profile"/>
                                <Route exact path="/account/assign"> <ForbiddenPage/> </Route>
                                <Route> <NotFoundPage/> </Route>
                            </Switch>

                        )
                            
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